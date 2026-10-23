"use client";

import { useMemo, useRef, useState, useSyncExternalStore } from "react";
import { useReducedMotion } from "framer-motion";
import { ALL, filterQuotes, getShelfEntries, pickRandomQuoteId } from "@/lib/quotes";
import Constellation from "./Constellation";
import Spotlight from "./Spotlight";
import QuoteWall from "./QuoteWall";
import styles from "./Quotes.module.scss";

const INITIAL_FILTERS = { sourceType: ALL, theme: ALL, shelf: null };

// The opening quote is random per page load. It is read through
// useSyncExternalStore so the static HTML renders without one (server
// snapshot is null) and the browser fills it in without a hydration mismatch.
let openingQuoteId;
const subscribeToNothing = () => () => {};

function useOpeningQuoteId(quotes) {
    return useSyncExternalStore(
        subscribeToNothing,
        () => {
            openingQuoteId ??= pickRandomQuoteId(quotes);
            return openingQuoteId;
        },
        () => null
    );
}

export default function QuotesExperience({ quotes, themes, sourceTypes }) {
    const openingId = useOpeningQuoteId(quotes);
    const [chosenId, setChosenId] = useState(null);
    const [filters, setFilters] = useState(INITIAL_FILTERS);
    const spotlightRef = useRef(null);
    const reduceMotion = useReducedMotion();

    const spotlightId = chosenId ?? openingId;
    const spotlightQuote = quotes.find((quote) => quote.id === spotlightId) ?? null;
    const visibleQuotes = useMemo(() => filterQuotes(quotes, filters), [quotes, filters]);
    const wallOptions = useMemo(
        () => ({ themes, sourceTypes, shelfEntries: getShelfEntries(quotes) }),
        [quotes, themes, sourceTypes]
    );

    function updateFilters(changes) {
        setFilters((current) => ({ ...current, ...changes }));
    }

    function toggleTheme(themeKey) {
        setFilters((current) => ({ ...current, theme: current.theme === themeKey ? ALL : themeKey }));
    }

    function showInSpotlight(quoteId, { scroll = true } = {}) {
        setChosenId(quoteId);
        if (scroll) {
            spotlightRef.current?.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" });
        }
    }

    function shuffle() {
        setChosenId(pickRandomQuoteId(quotes, { excludeId: spotlightId }));
    }

    return (
        <div className={styles.experience}>
            <Constellation
                quotes={quotes}
                themes={themes}
                spotlightId={spotlightId}
                activeTheme={filters.theme}
                onSelectQuote={(quoteId) => showInSpotlight(quoteId, { scroll: false })}
                onToggleTheme={toggleTheme}
            />
            <p className={styles.skyHint}>
                Every star is a quote. Hover or tab through them, pick a theme to light it up, and click a star to read it.
            </p>

            <Spotlight ref={spotlightRef} quote={spotlightQuote} onShuffle={shuffle} />

            <QuoteWall
                quotes={quotes}
                visibleQuotes={visibleQuotes}
                options={wallOptions}
                filters={filters}
                onFiltersChange={updateFilters}
                onSpotlight={showInSpotlight}
            />
        </div>
    );
}
