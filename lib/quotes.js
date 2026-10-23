// Pure helpers for the Quotes page. Kept free of React and path aliases so
// they can be unit tested with `node --test`.

export const LONG_QUOTE_WORDS = 60;

export const ALL = "all";

export function countWords(text) {
    return text.trim().split(/\s+/).filter(Boolean).length;
}

export function isLongQuote(text, limit = LONG_QUOTE_WORDS) {
    return countWords(text) > limit;
}

export function truncateWords(text, limit) {
    const words = text.trim().split(/\s+/);
    if (words.length <= limit) return text;
    return `${words.slice(0, limit).join(" ")}…`;
}

/**
 * Splits a quote's credit into display parts. `name` is "Unknown" only when
 * neither an author nor a work is known, so a Bible verse reads "The Bible,
 * Romans 12:12" rather than "Unknown".
 */
export function getCreditParts(quote) {
    const { author, work, reference, via, attributed } = quote;

    let name = null;
    if (author) {
        name = attributed ? `Attributed to ${author}` : author;
    } else if (!work) {
        name = "Unknown";
    }

    const workLabel = work && reference ? `${work}, ${reference}` : work;

    return {
        name,
        work: workLabel ?? null,
        via: via ? `via ${via}` : null,
    };
}

export function formatCredit(quote) {
    const { name, work, via } = getCreditParts(quote);
    return [name, work, via].filter(Boolean).join(" · ");
}

export function formatQuoteForClipboard(quote) {
    return `“${quote.text}” — ${formatCredit(quote)}`;
}

function matchesShelf(quote, shelf) {
    if (!shelf) return true;
    return quote[shelf.kind] === shelf.value;
}

/**
 * Filters quotes by source type, theme and "Shaped by" shelf entry.
 * Every filter is optional; `ALL` or a missing value means "no filter".
 */
export function filterQuotes(quotes, { sourceType = ALL, theme = ALL, shelf = null } = {}) {
    return quotes.filter((quote) =>
        (sourceType === ALL || quote.sourceType === sourceType) &&
        (theme === ALL || quote.themes.includes(theme)) &&
        matchesShelf(quote, shelf)
    );
}

export function countBy(quotes, getKey) {
    const counts = new Map();
    for (const quote of quotes) {
        const keys = [getKey(quote)].flat().filter(Boolean);
        for (const key of keys) {
            counts.set(key, (counts.get(key) ?? 0) + 1);
        }
    }
    return counts;
}

/**
 * The most-quoted voices, most frequent first. Quotes count towards their
 * author; a work only gets its own entry for authorless quotes (e.g. The
 * Bible), so an author and their book never appear twice. Proverbs and other
 * collective "authors" are excluded because they aren't a person or a book.
 */
export function getShelfEntries(quotes, { limit = 8, minCount = 3 } = {}) {
    const credited = quotes.filter((quote) => quote.sourceType !== "unknown");
    const authorless = credited.filter((quote) => !quote.author);
    const entries = [
        ...[...countBy(credited, (q) => q.author)].map(([value, count]) => ({ kind: "author", value, count })),
        ...[...countBy(authorless, (q) => q.work)].map(([value, count]) => ({ kind: "work", value, count })),
    ];

    return entries
        .filter((entry) => entry.count >= minCount)
        .sort((a, b) => b.count - a.count || a.value.localeCompare(b.value))
        .slice(0, limit);
}

/** Picks a random quote id, avoiding `excludeId` whenever there is a choice. */
export function pickRandomQuoteId(quotes, { excludeId = null, random = Math.random } = {}) {
    if (quotes.length === 0) return null;
    const candidates = quotes.length > 1 ? quotes.filter((q) => q.id !== excludeId) : quotes;
    return candidates[Math.floor(random() * candidates.length)].id;
}

/** Small seeded PRNG (mulberry32) so the star layout is identical on server and client. */
export function createSeededRandom(seed) {
    let state = seed >>> 0;
    return function random() {
        state = (state + 0x6d2b79f5) >>> 0;
        let t = state;
        t = Math.imul(t ^ (t >>> 15), t | 1);
        t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

// Values are rounded because browsers normalise long decimals in inline
// styles, which React would otherwise report as a hydration mismatch.
const round = (value) => Math.round(value * 100) / 100;
const clampPercent = (value) => round(Math.min(97, Math.max(3, value)));

// Themes sit on a jittered 3-column grid so their labels never collide,
// even on narrow screens.
function getClusterCenters(themes, random) {
    const columns = 3;
    const rows = Math.ceil(themes.length / columns);
    return themes.map((theme, index) => {
        const column = index % columns;
        const row = Math.floor(index / columns);
        return {
            key: theme.key,
            x: ((column + 0.5) / columns) * 100 + (random() - 0.5) * 6,
            y: ((row + 0.5) / rows) * 100 + (random() - 0.5) * 6,
        };
    });
}

/**
 * Positions every quote as a star around its primary theme's cluster, and
 * sizes each theme label by how many quotes carry that theme (the word cloud).
 * Coordinates are percentages of the constellation's box.
 */
export function layoutConstellation(quotes, themes, { seed = 2023 } = {}) {
    const random = createSeededRandom(seed);
    const centers = getClusterCenters(themes, random);
    const centerByTheme = new Map(centers.map((center) => [center.key, center]));
    const themeCounts = countBy(quotes, (q) => q.themes);
    const maxCount = Math.max(1, ...themeCounts.values());

    const labels = themes.map((theme) => {
        const count = themeCounts.get(theme.key) ?? 0;
        const center = centerByTheme.get(theme.key);
        return { ...theme, count, x: round(center.x), y: round(center.y), weight: round(count / maxCount) };
    });

    const stars = quotes.map((quote) => {
        const center = centerByTheme.get(quote.themes[0]);
        const angle = random() * Math.PI * 2;
        // Keep a gap around the label so stars orbit rather than cover it.
        const distance = 0.45 + random() * 0.55;
        return {
            id: quote.id,
            theme: quote.themes[0],
            x: clampPercent(center.x + Math.cos(angle) * distance * 15),
            y: clampPercent(center.y + Math.sin(angle) * distance * 15),
            size: round(Math.min(6, 2 + countWords(quote.text) / 25)),
            twinkleDelay: round(random() * 6),
        };
    });

    stars.sort((a, b) => themes.findIndex((t) => t.key === a.theme) - themes.findIndex((t) => t.key === b.theme));

    return { stars, labels };
}
