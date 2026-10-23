"use client";

import { useMemo, useRef, useState } from "react";
import { ALL, formatCredit, layoutConstellation, truncateWords } from "@/lib/quotes";
import styles from "./Constellation.module.scss";

const THEME_COLORS = {
    growth: "#2dd4bf",
    discipline: "#0ea5e9",
    mindset: "#a78bfa",
    courage: "#f5a623",
    purpose: "#f472b6",
    relationships: "#fb7185",
    leadership: "#60a5fa",
    faith: "#facc15",
    creativity: "#34d399",
};

const LINKED_STARS_PER_THEME = 6;
const PREVIEW_WORDS = 14;

// Joins a handful of each theme's stars, left to right, so each cluster reads as a constellation.
function buildConstellationLines(stars) {
    const starsByTheme = new Map();
    for (const star of stars) {
        starsByTheme.set(star.theme, [...(starsByTheme.get(star.theme) ?? []), star]);
    }
    return [...starsByTheme.values()].flatMap((themeStars) => {
        const linked = themeStars.slice(0, LINKED_STARS_PER_THEME).sort((a, b) => a.x - b.x);
        return linked.slice(1).map((star, index) => ({ from: linked[index], to: star }));
    });
}

function getNextStarIndex(key, currentIndex, starCount) {
    const steps = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 };
    if (key === "Home") return 0;
    if (key === "End") return starCount - 1;
    if (key in steps) return (currentIndex + steps[key] + starCount) % starCount;
    return null;
}

function StarPreview({ star, quote }) {
    const placement = [
        star.x > 60 ? styles.previewLeft : styles.previewRight,
        star.y < 30 ? styles.previewBelow : styles.previewAbove,
    ].join(" ");

    return (
        <div className={`${styles.preview} ${placement}`} style={{ left: `${star.x}%`, top: `${star.y}%` }} aria-hidden="true">
            <p className={styles.previewText}>“{truncateWords(quote.text, PREVIEW_WORDS)}”</p>
            <p className={styles.previewCredit}>{formatCredit(quote)}</p>
        </div>
    );
}

export default function Constellation({ quotes, themes, spotlightId, activeTheme, onSelectQuote, onToggleTheme }) {
    const { stars, labels } = useMemo(() => layoutConstellation(quotes, themes), [quotes, themes]);
    const lines = useMemo(() => buildConstellationLines(stars), [stars]);
    const quoteById = useMemo(() => new Map(quotes.map((quote) => [quote.id, quote])), [quotes]);

    // Roving tab index: the sky is a single tab stop and arrow keys travel between stars.
    const [focusIndex, setFocusIndex] = useState(0);
    const [previewId, setPreviewId] = useState(null);
    const starRefs = useRef([]);

    function handleKeyDown(event) {
        const nextIndex = getNextStarIndex(event.key, focusIndex, stars.length);
        if (nextIndex === null) return;
        event.preventDefault();
        setFocusIndex(nextIndex);
        starRefs.current[nextIndex]?.focus();
    }

    const previewStar = stars.find((star) => star.id === previewId);

    return (
        <div className={styles.sky}>
            <svg className={styles.lines} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                {lines.map(({ from, to }) => (
                    <line
                        key={`${from.id}-${to.id}`}
                        x1={from.x} y1={from.y} x2={to.x} y2={to.y}
                        className={activeTheme === ALL || activeTheme === from.theme ? "" : styles.lineDimmed}
                        vectorEffect="non-scaling-stroke"
                    />
                ))}
            </svg>

            <div className={styles.labels} role="group" aria-label="Themes">
                {labels.map((label) => (
                    <button
                        key={label.key}
                        type="button"
                        className={`${styles.label} ${activeTheme === label.key ? styles.labelActive : ""}`}
                        style={{ left: `${label.x}%`, top: `${label.y}%`, "--weight": label.weight, "--color": THEME_COLORS[label.key] }}
                        aria-pressed={activeTheme === label.key}
                        onClick={() => onToggleTheme(label.key)}
                    >
                        {label.label}
                        <span className={styles.labelCount}>
                            {label.count}<span className={styles.srOnly}> quotes</span>
                        </span>
                    </button>
                ))}
            </div>

            <div
                className={styles.stars}
                role="group"
                aria-label="Quote constellation. Use the arrow keys to move between stars and Enter to read one."
                onKeyDown={handleKeyDown}
            >
                {stars.map((star, index) => {
                    const quote = quoteById.get(star.id);
                    const isDimmed = activeTheme !== ALL && !quote.themes.includes(activeTheme);
                    const isSelected = star.id === spotlightId;

                    return (
                        <button
                            key={star.id}
                            ref={(element) => { starRefs.current[index] = element; }}
                            type="button"
                            tabIndex={index === focusIndex ? 0 : -1}
                            className={`${styles.star} ${isDimmed ? styles.starDimmed : ""} ${isSelected ? styles.starSelected : ""}`}
                            style={{
                                left: `${star.x}%`,
                                top: `${star.y}%`,
                                "--size": `${star.size}px`,
                                "--color": THEME_COLORS[star.theme],
                                "--delay": `${star.twinkleDelay}s`,
                            }}
                            aria-label={`${truncateWords(quote.text, PREVIEW_WORDS)} — ${formatCredit(quote)}`}
                            aria-current={isSelected ? "true" : undefined}
                            onClick={() => {
                                setFocusIndex(index);
                                onSelectQuote(star.id);
                            }}
                            onFocus={() => {
                                setFocusIndex(index);
                                setPreviewId(star.id);
                            }}
                            onBlur={() => setPreviewId(null)}
                            onMouseEnter={() => setPreviewId(star.id)}
                            onMouseLeave={() => setPreviewId(null)}
                        />
                    );
                })}
            </div>

            {previewStar && <StarPreview star={previewStar} quote={quoteById.get(previewStar.id)} />}
        </div>
    );
}
