"use client";

import { useState } from "react";
import { FiStar } from "react-icons/fi";
import { isLongQuote, truncateWords } from "@/lib/quotes";
import QuoteCredit from "./QuoteCredit";
import CopyQuoteButton from "./CopyQuoteButton";
import styles from "./Quotes.module.scss";

const PREVIEW_WORDS = 40;

export default function QuoteCard({ quote, themeLabels, onSpotlight }) {
    const [expanded, setExpanded] = useState(false);
    const isLong = isLongQuote(quote.text);
    const text = isLong && !expanded ? truncateWords(quote.text, PREVIEW_WORDS) : quote.text;

    return (
        <figure className={styles.card}>
            <blockquote className={styles.cardText}>{text}</blockquote>

            {isLong && (
                <button
                    type="button"
                    className={styles.readMore}
                    aria-expanded={expanded}
                    onClick={() => setExpanded((open) => !open)}
                >
                    {expanded ? "Show less" : "Read more"}
                </button>
            )}

            <QuoteCredit quote={quote} />

            <div className={styles.cardFooter}>
                <ul className={styles.tags} aria-label="Themes">
                    {quote.themes.map((key) => (
                        <li key={key} className={styles.tag}>{themeLabels[key]}</li>
                    ))}
                </ul>
                <div className={styles.cardActions}>
                    <button
                        type="button"
                        className={styles.iconButton}
                        onClick={() => onSpotlight(quote.id)}
                        aria-label="Show in spotlight"
                        title="Show in spotlight"
                    >
                        <FiStar aria-hidden="true" />
                    </button>
                    <CopyQuoteButton quote={quote} />
                </div>
            </div>
        </figure>
    );
}
