"use client";

import { useMemo } from "react";
import { ALL, countBy } from "@/lib/quotes";
import QuoteCard from "./QuoteCard";
import styles from "./Quotes.module.scss";

function FilterChip({ isActive, onClick, children }) {
    return (
        <button
            type="button"
            className={`${styles.chip} ${isActive ? styles.chipActive : ""}`}
            aria-pressed={isActive}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

function isSameShelf(a, b) {
    return Boolean(a && b) && a.kind === b.kind && a.value === b.value;
}

/**
 * The filterable grid of every quote.
 * `options` holds the static lists (themes, source types, shelf entries);
 * `filters` and `onFiltersChange` hold the visitor's current selection.
 */
export default function QuoteWall({ quotes, visibleQuotes, options, filters, onFiltersChange, onSpotlight }) {
    const { themes, sourceTypes, shelfEntries } = options;
    const sourceCounts = useMemo(() => countBy(quotes, (q) => q.sourceType), [quotes]);
    const themeLabels = useMemo(() => Object.fromEntries(themes.map((t) => [t.key, t.label])), [themes]);
    const hasActiveFilters = filters.sourceType !== ALL || filters.theme !== ALL || filters.shelf !== null;

    return (
        <section className={styles.wall} aria-labelledby="wall-heading">
            <div className={styles.wallHeader}>
                <h2 id="wall-heading" className={styles.sectionTitle}>The Wall</h2>
                <p className={styles.sectionLead}>Every quote, credited where I know who said it.</p>
            </div>

            <div className={styles.filters}>
                <div className={styles.filterRow} role="group" aria-label="Filter by source">
                    <FilterChip isActive={filters.sourceType === ALL} onClick={() => onFiltersChange({ sourceType: ALL })}>
                        All <span className={styles.chipCount}>{quotes.length}</span>
                    </FilterChip>
                    {sourceTypes.map((source) => (
                        <FilterChip
                            key={source.key}
                            isActive={filters.sourceType === source.key}
                            onClick={() => onFiltersChange({ sourceType: source.key })}
                        >
                            <span aria-hidden="true">{source.icon}</span> {source.label}{" "}
                            <span className={styles.chipCount}>{sourceCounts.get(source.key) ?? 0}</span>
                        </FilterChip>
                    ))}
                </div>

                <div className={styles.filterRow} role="group" aria-label="Filter by theme">
                    <FilterChip isActive={filters.theme === ALL} onClick={() => onFiltersChange({ theme: ALL })}>
                        All themes
                    </FilterChip>
                    {themes.map((theme) => (
                        <FilterChip
                            key={theme.key}
                            isActive={filters.theme === theme.key}
                            onClick={() => onFiltersChange({ theme: theme.key })}
                        >
                            {theme.label}
                        </FilterChip>
                    ))}
                </div>

                <div className={styles.shelf}>
                    <h3 className={styles.shelfTitle}>Shaped by</h3>
                    <div className={styles.filterRow} role="group" aria-label="Filter by most-quoted voices">
                        {shelfEntries.map((entry) => {
                            const isActive = isSameShelf(filters.shelf, entry);
                            return (
                                <FilterChip
                                    key={`${entry.kind}-${entry.value}`}
                                    isActive={isActive}
                                    onClick={() => onFiltersChange({ shelf: isActive ? null : entry })}
                                >
                                    <span aria-hidden="true">{entry.kind === "work" ? "📖" : "😀"}</span> {entry.value}{" "}
                                    <span className={styles.chipCount}>{entry.count}</span>
                                </FilterChip>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className={styles.resultsBar}>
                <p aria-live="polite">
                    Showing <strong>{visibleQuotes.length}</strong> of {quotes.length} quotes
                </p>
                {hasActiveFilters && (
                    <button
                        type="button"
                        className={styles.textButton}
                        onClick={() => onFiltersChange({ sourceType: ALL, theme: ALL, shelf: null })}
                    >
                        Clear filters
                    </button>
                )}
            </div>

            {visibleQuotes.length > 0 ? (
                <div className={styles.grid}>
                    {visibleQuotes.map((quote) => (
                        <QuoteCard key={quote.id} quote={quote} themeLabels={themeLabels} onSpotlight={onSpotlight} />
                    ))}
                </div>
            ) : (
                <p className={styles.noResults}>No quotes match those filters yet.</p>
            )}
        </section>
    );
}
