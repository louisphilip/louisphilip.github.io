"use client";

import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import styles from "./Writing.module.scss";

const RSS_URL =
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@louisphilip_s";

function extractImage(content) {
    if (!content) return null;
    const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
    return imgMatch ? imgMatch[1] : null;
}

function cleanDescription(html) {
    if (!html) return "";
    const text = html.replace(/<[^>]*>/g, "");
    const decoded = text
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&quot;/g, '"')
        .replace(/&#039;/g, "'")
        .replace(/&nbsp;/g, " ");
    return decoded.length > 150 ? decoded.substring(0, 150) + "..." : decoded;
}

export default function WritingContent() {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        async function fetchArticles() {
            try {
                const response = await fetch(RSS_URL);
                if (!response.ok) throw new Error("Failed to fetch articles");

                const data = await response.json();
                if (data.status !== "ok") throw new Error("RSS feed parsing failed");

                setArticles(
                    data.items.map((article, index) => ({
                        id: article.guid || index,
                        title: article.title,
                        link: article.link,
                        pubDate: article.pubDate,
                        thumbnail: extractImage(article.description) || article.thumbnail,
                        categories: article.categories,
                        description: cleanDescription(article.description),
                    }))
                );
            } catch (err) {
                console.error("Error fetching Medium articles:", err);
                setError(true);
            } finally {
                setLoading(false);
            }
        }

        fetchArticles();
    }, []);

    if (loading) {
        return (
            <div className={styles.grid}>
                {Array.from({ length: 3 }).map((_, i) => (
                    <div key={i} className={styles.skeleton}>
                        <div className={styles.skeletonImage} />
                        <div className={styles.skeletonContent}>
                            <div className={styles.skeletonLine} style={{ width: "60%" }} />
                            <div className={styles.skeletonLine} style={{ width: "100%" }} />
                            <div className={styles.skeletonLine} style={{ width: "80%" }} />
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (error || articles.length === 0) {
        return (
            <p style={{ color: "var(--text-secondary)", fontSize: "18px" }}>
                Unable to load articles right now. Visit my{" "}
                <a
                    href="https://medium.com/@louisphilip_s"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--primary-color)", textDecoration: "underline" }}
                >
                    Medium profile
                </a>{" "}
                directly.
            </p>
        );
    }

    return (
        <div className={styles.grid}>
            {articles.map((article) => (
                <ArticleCard key={article.id} article={article} />
            ))}
        </div>
    );
}
