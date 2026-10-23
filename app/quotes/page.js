import QuotesExperience from "@/components/quotes/QuotesExperience";
import { quotesData, quoteSourceTypes, quoteThemes } from "@/data/quotes";
import styles from "@/components/quotes/Quotes.module.scss";

export const metadata = {
    title: "Quotes | Louis Philip",
    description: "The quotes from books, people and unknown corners of the internet that have shaped who I am.",
};

export default function Quotes() {
    return (
        <div className="container section">
            <div className={styles.intro}>
                <h1 className={styles.title}>
                    Quotes to <span className={styles.gradientText}>Live By</span>
                </h1>
                <p className={styles.lead}>
                    For years I&apos;ve been collecting the lines that stopped me in my tracks: from books, from
                    people, and from random corners of the internet I can no longer trace. Together they&apos;ve
                    quietly shaped how I think about growth, faith, leadership and the people around me.
                </p>
            </div>

            <QuotesExperience quotes={quotesData} themes={quoteThemes} sourceTypes={quoteSourceTypes} />
        </div>
    );
}
