import { getCreditParts } from "@/lib/quotes";
import styles from "./Quotes.module.scss";

export default function QuoteCredit({ quote, className = "" }) {
    const { name, work, via } = getCreditParts(quote);

    return (
        <figcaption className={`${styles.credit} ${className}`}>
            <span className={styles.creditDash} aria-hidden="true">—</span>
            {name && <span className={styles.creditName}>{name}</span>}
            {work && <cite className={styles.creditWork}>{work}</cite>}
            {via && <span className={styles.creditVia}>{via}</span>}
        </figcaption>
    );
}
