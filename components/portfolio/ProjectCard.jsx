"use client";

import { motion } from "framer-motion";
import { FiGithub, FiStar, FiGitBranch, FiExternalLink } from "react-icons/fi";
import styles from "./Portfolio.module.scss";

export default function ProjectCard({ project }) {
    return (
        <motion.div
            className={styles.card}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            <div className={styles.cardHeader}>
                <div className={styles.folderIcon}>
                    <FiGithub />
                </div>
                <div className={styles.links}>
                    {project.homepage && (
                        <a
                            href={project.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkIcon}
                        >
                            <FiExternalLink />
                        </a>
                    )}
                    <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.linkIcon}
                    >
                        <FiGithub />
                    </a>
                </div>
            </div>

            <div className={styles.cardBody}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>
            </div>

            <div className={styles.cardFooter}>
                <div className={styles.techList}>
                    {project.language && (
                        <span className={styles.tech}>{project.language}</span>
                    )}
                </div>
                <div className={styles.stats}>
                    <span className={styles.stat}>
                        <FiStar /> {project.stars}
                    </span>
                    <span className={styles.stat}>
                        <FiGitBranch /> {project.forks}
                    </span>
                </div>
            </div>
        </motion.div>
    );
}
