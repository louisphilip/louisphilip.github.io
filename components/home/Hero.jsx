"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { profileInfo } from "../../data/profileInfo";
import { bioData } from "../../data/bioData";
import styles from "./Hero.module.scss";

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={`container ${styles.container}`}>
                <div className={styles.content}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className={styles.greeting}>Hello, I'm</span>
                        <h1 className={styles.name}>{profileInfo.name}</h1>
                        <h2 className={styles.title}>{profileInfo.title}</h2>
                        <p className={styles.description}>{bioData.descOne}</p>

                        <div className={styles.actions}>
                            <Link href="/contact" className="btn btn-primary">
                                Get in Touch
                            </Link>
                            <Link href="/portfolio" className="btn btn-outline">
                                View Portfolio
                            </Link>
                            <a
                                href="/cv.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline"
                            >
                                View Resume
                            </a>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className={styles.imageWrapper}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className={styles.imageContainer}>
                        {/* Using a placeholder if image is missing, or the actual image */}
                        <Image
                            src={profileInfo.imageSrcOne}
                            alt={profileInfo.name}
                            width={400}
                            height={400}
                            className={styles.profileImage}
                            priority
                        />
                        <div className={styles.blob}></div>
                    </div>
                </motion.div>
            </div >
        </section >
    );
}
