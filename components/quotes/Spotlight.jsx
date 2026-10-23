"use client";

import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { FiShuffle } from "react-icons/fi";
import { countWords } from "@/lib/quotes";
import QuoteCredit from "./QuoteCredit";
import CopyQuoteButton from "./CopyQuoteButton";
import styles from "./Quotes.module.scss";

function getTextSizeClass(text) {
    const words = countWords(text);
    if (words <= 15) return styles.spotlightLarge;
    if (words <= 45) return styles.spotlightMedium;
    return styles.spotlightSmall;
}

// React 19 passes `ref` as a regular prop, so no forwardRef is needed.
export default function Spotlight({ quote, onShuffle, ref }) {
    const reduceMotion = useReducedMotion();

    return (
        <section ref={ref} className={styles.spotlight} aria-labelledby="spotlight-heading">
            <p id="spotlight-heading" className={styles.eyebrow}>In the spotlight</p>

            <div className={styles.spotlightStage} aria-live="polite">
                <AnimatePresence mode="wait" initial={false}>
                    {quote && (
                        <motion.figure
                            key={quote.id}
                            className={styles.spotlightFigure}
                            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={reduceMotion ? undefined : { opacity: 0, y: -12 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                        >
                            <blockquote className={`${styles.spotlightText} ${getTextSizeClass(quote.text)}`}>
                                {quote.text}
                            </blockquote>
                            <QuoteCredit quote={quote} className={styles.spotlightCredit} />
                        </motion.figure>
                    )}
                </AnimatePresence>
            </div>

            <div className={styles.spotlightActions}>
                <button type="button" onClick={onShuffle} className={styles.primaryButton}>
                    <FiShuffle aria-hidden="true" />
                    <span>Shuffle</span>
                </button>
                {quote && <CopyQuoteButton key={quote.id} quote={quote} showLabel />}
            </div>
        </section>
    );
}
