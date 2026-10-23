import { describe, test } from "node:test";
import assert from "node:assert/strict";
import {
    ALL,
    filterQuotes,
    formatCredit,
    formatQuoteForClipboard,
    getCreditParts,
    getShelfEntries,
    isLongQuote,
    layoutConstellation,
    pickRandomQuoteId,
    truncateWords,
} from "./quotes.js";
import { quotesData, quoteSourceTypes, quoteThemes } from "../data/quotes.js";

let nextId = 1;
function makeQuote(overrides = {}) {
    return {
        id: nextId++,
        text: "A short quote.",
        sourceType: "unknown",
        author: null,
        work: null,
        reference: null,
        via: null,
        attributed: false,
        themes: ["growth"],
        ...overrides,
    };
}

const THEMES = [
    { key: "growth", label: "Growth" },
    { key: "faith", label: "Faith" },
];

describe("getCreditParts", () => {
    test("quote with no author or work is credited as Unknown", () => {
        const quote = makeQuote();

        const credit = getCreditParts(quote);

        assert.equal(credit.name, "Unknown");
    });

    test("attributed quote is labelled as an attribution", () => {
        const quote = makeQuote({ author: "Confucius", attributed: true });

        const credit = getCreditParts(quote);

        assert.equal(credit.name, "Attributed to Confucius");
    });

    test("work with a reference and no author is not labelled Unknown", () => {
        const quote = makeQuote({ work: "The Bible", reference: "Romans 12:12" });

        const credit = getCreditParts(quote);

        assert.deepEqual(credit, { name: null, work: "The Bible, Romans 12:12", via: null });
    });
});

describe("formatCredit", () => {
    test("joins author, work and via with separators", () => {
        const quote = makeQuote({ author: "Ayn Rand", work: "Atlas Shrugged", via: "The Wealth Money Can't Buy" });

        const credit = formatCredit(quote);

        assert.equal(credit, "Ayn Rand · Atlas Shrugged · via The Wealth Money Can't Buy");
    });
});

describe("formatQuoteForClipboard", () => {
    test("wraps the text in quotes and appends the credit", () => {
        const quote = makeQuote({ text: "Recreation recreates us.", author: "Robin Sharma" });

        const copied = formatQuoteForClipboard(quote);

        assert.equal(copied, "“Recreation recreates us.” — Robin Sharma");
    });
});

describe("filterQuotes", () => {
    const bookFaith = makeQuote({ sourceType: "book", work: "The Bible", themes: ["faith"] });
    const bookGrowth = makeQuote({ sourceType: "book", work: "Atomic Habits", themes: ["growth"] });
    const personFaith = makeQuote({ sourceType: "person", author: "Helen Keller", themes: ["courage", "faith"] });
    const quotes = [bookFaith, bookGrowth, personFaith];

    test("with no filters returns every quote", () => {
        const result = filterQuotes(quotes);

        assert.equal(result.length, 3);
    });

    test("combines source type and theme filters", () => {
        const result = filterQuotes(quotes, { sourceType: "book", theme: "faith" });

        assert.deepEqual(result, [bookFaith]);
    });

    test("matches secondary themes, not only the first", () => {
        const result = filterQuotes(quotes, { sourceType: ALL, theme: "faith" });

        assert.deepEqual(result, [bookFaith, personFaith]);
    });

    test("shelf filter keeps only quotes from that author or work", () => {
        const result = filterQuotes(quotes, { shelf: { kind: "work", value: "Atomic Habits" } });

        assert.deepEqual(result, [bookGrowth]);
    });
});

describe("getShelfEntries", () => {
    test("ranks authors and works by count and drops rare and unknown sources", () => {
        const quotes = [
            ...Array.from({ length: 4 }, () => makeQuote({ sourceType: "person", author: "Seth Godin" })),
            ...Array.from({ length: 3 }, () => makeQuote({ sourceType: "book", work: "Show Your Work!" })),
            makeQuote({ sourceType: "person", author: "Socrates" }),
            ...Array.from({ length: 5 }, () => makeQuote({ sourceType: "unknown", author: "Chinese proverb" })),
        ];

        const entries = getShelfEntries(quotes);

        assert.deepEqual(entries, [
            { kind: "author", value: "Seth Godin", count: 4 },
            { kind: "work", value: "Show Your Work!", count: 3 },
        ]);
    });

    test("counts an author's book under the author rather than listing both", () => {
        const quotes = Array.from({ length: 3 }, () =>
            makeQuote({ sourceType: "book", author: "Austin Kleon", work: "Show Your Work!" })
        );

        const entries = getShelfEntries(quotes);

        assert.deepEqual(entries, [{ kind: "author", value: "Austin Kleon", count: 3 }]);
    });
});

describe("pickRandomQuoteId", () => {
    test("never returns the excluded quote when others exist", () => {
        const quotes = [makeQuote(), makeQuote()];

        const picked = pickRandomQuoteId(quotes, { excludeId: quotes[0].id, random: () => 0 });

        assert.equal(picked, quotes[1].id);
    });

    test("returns null for an empty list", () => {
        const picked = pickRandomQuoteId([]);

        assert.equal(picked, null);
    });
});

describe("long quote helpers", () => {
    test("isLongQuote is true only above the word limit", () => {
        const results = [isLongQuote("one two three", 3), isLongQuote("one two three four", 3)];

        assert.deepEqual(results, [false, true]);
    });

    test("truncateWords adds an ellipsis only when text is cut", () => {
        const results = [truncateWords("one two three", 2), truncateWords("one two", 2)];

        assert.deepEqual(results, ["one two…", "one two"]);
    });
});

describe("layoutConstellation", () => {
    const quotes = [
        makeQuote({ themes: ["growth"] }),
        makeQuote({ themes: ["faith"] }),
        makeQuote({ themes: ["growth", "faith"] }),
    ];

    test("is deterministic for the same seed, so server and client render match", () => {
        const first = layoutConstellation(quotes, THEMES, { seed: 7 });
        const second = layoutConstellation(quotes, THEMES, { seed: 7 });

        assert.deepEqual(first, second);
    });

    test("keeps every star inside the visible box", () => {
        const { stars } = layoutConstellation(quotes, THEMES);

        assert.ok(stars.every((s) => s.x >= 3 && s.x <= 97 && s.y >= 3 && s.y <= 97));
    });

    test("weights theme labels by how many quotes carry the theme", () => {
        const { labels } = layoutConstellation(quotes, THEMES);

        assert.deepEqual(labels.map((l) => [l.key, l.count, l.weight]), [["growth", 2, 1], ["faith", 2, 1]]);
    });
});

describe("curated quotes dataset", () => {
    const themeKeys = new Set(quoteThemes.map((t) => t.key));
    const sourceKeys = new Set(quoteSourceTypes.map((s) => s.key));

    test("every quote has text, a known source type and known themes", () => {
        const invalid = quotesData.filter((q) =>
            !q.text.trim() ||
            !sourceKeys.has(q.sourceType) ||
            q.themes.length === 0 ||
            !q.themes.every((key) => themeKeys.has(key))
        );

        assert.deepEqual(invalid, []);
    });

    test("contains no duplicate quotes", () => {
        const normalise = (text) => text.toLowerCase().replace(/[^a-z]/g, "");
        const seen = new Set();
        const duplicates = quotesData.filter((q) => {
            const key = normalise(q.text);
            const isDuplicate = seen.has(key);
            seen.add(key);
            return isDuplicate;
        });

        assert.deepEqual(duplicates, []);
    });

    test("excludes the private in-joke entries", () => {
        const privateMarkers = [/silliest/i, /babies crying/i, /you are what you eat/i, /exercise is rest/i];

        const leaked = quotesData.filter((q) => privateMarkers.some((marker) => marker.test(q.text)));

        assert.deepEqual(leaked, []);
    });

    test("ids are unique", () => {
        const ids = new Set(quotesData.map((q) => q.id));

        assert.equal(ids.size, quotesData.length);
    });
});
