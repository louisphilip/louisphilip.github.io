"use client";

import { useEffect, useRef, useState } from "react";
import { FiCheck, FiCopy, FiAlertCircle } from "react-icons/fi";
import { formatQuoteForClipboard } from "@/lib/quotes";
import styles from "./Quotes.module.scss";

const RESET_AFTER_MS = 2000;

const STATUS = {
    idle: { label: "Copy", icon: FiCopy },
    copied: { label: "Copied", icon: FiCheck },
    failed: { label: "Copy failed", icon: FiAlertCircle },
};

export default function CopyQuoteButton({ quote, showLabel = false, className = "" }) {
    const [status, setStatus] = useState("idle");
    const resetTimer = useRef(null);

    useEffect(() => () => clearTimeout(resetTimer.current), []);

    async function handleCopy() {
        try {
            await navigator.clipboard.writeText(formatQuoteForClipboard(quote));
            setStatus("copied");
        } catch (error) {
            // Clipboard access is unavailable on insecure origins and can be denied by the browser.
            console.error("Could not copy quote to clipboard:", error);
            setStatus("failed");
        }
        clearTimeout(resetTimer.current);
        resetTimer.current = setTimeout(() => setStatus("idle"), RESET_AFTER_MS);
    }

    const { label, icon: Icon } = STATUS[status];

    return (
        <button
            type="button"
            onClick={handleCopy}
            className={`${styles.iconButton} ${status === "copied" ? styles.success : ""} ${className}`}
            aria-label={showLabel ? undefined : `${label} quote`}
            title={showLabel ? undefined : `${label} quote`}
        >
            <Icon aria-hidden="true" />
            {showLabel && <span>{label}</span>}
            <span className={styles.srOnly} aria-live="polite">
                {status === "idle" ? "" : label}
            </span>
        </button>
    );
}
