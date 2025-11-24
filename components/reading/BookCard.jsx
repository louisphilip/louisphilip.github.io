"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FiHeadphones, FiStar } from "react-icons/fi";
import styles from "./Reading.module.scss";

export default function BookCard({ book, priority = false }) {
    return (
        <motion.div
            className={styles.flipContainer}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
        >
            <div className={styles.flipper}>
                {/* Front Face */}
                <div className={styles.front}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={book.coverImage}
                            alt={book.title}
                            fill
                            priority={priority}
                            className={styles.image}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className={styles.content}>
                            <h3 className={styles.title}>{book.title}</h3>
                            <p className={styles.author}>{book.author}</p>
                        </div>
                    </div>
                </div>

                {/* Back Face */}
                <div className={styles.back}>
                    <div>
                        <h3 className={styles.backTitle}>{book.title}</h3>
                        <div className={styles.synopsis}>
                            {book.description}
                        </div>
                    </div>

                    <div className={styles.actions}>
                        <a
                            href={book.audibleLink || book.amazonLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.listenBtn}
                        >
                            <FiHeadphones /> Listen on Audible
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
