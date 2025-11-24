"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiExternalLink, FiCalendar } from "react-icons/fi";
import styles from "./Writing.module.scss";

export default function ArticleCard({ article }) {
    const formattedDate = new Date(article.pubDate).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

    return (
        <motion.a
            href={article.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className={styles.imageWrapper}>
                {article.thumbnail ? (
                    <Image
                        src={article.thumbnail}
                        alt={article.title}
                        fill
                        className={styles.image}
                        unoptimized={true}
                    />
                ) : (
                    <div className={styles.placeholder}>
                        <span>Medium</span>
                    </div>
                )}
            </div>
            <div className={styles.content}>
                <div className={styles.meta}>
                    <span className={styles.date}>
                        <FiCalendar /> {formattedDate}
                    </span>
                    {article.categories && article.categories.length > 0 && (
                        <span className={styles.category}>{article.categories[0]}</span>
                    )}
                </div>
                <h3 className={styles.title}>{article.title}</h3>
                <p className={styles.description}>{article.description}</p>
                <div className={styles.footer}>
                    <span className={styles.readMore}>
                        Read Article <FiExternalLink />
                    </span>
                </div>
            </div>
        </motion.a>
    );
}
