"use client";

import { motion } from "framer-motion";
import { skillData } from "../../data/skills";
import styles from "./About.module.scss";

export default function Skills() {
    return (
        <div className={styles.skillsSection}>
            <h3 className={styles.sectionTitle}>Skills</h3>
            <div className={styles.skillsGrid}>
                {skillData.map((skill, index) => (
                    <div key={skill.id} className={styles.skillItem}>
                        <div className={styles.skillHeader}>
                            <span className={styles.skillTitle}>{skill.title}</span>
                            <span className={styles.skillPercent}>{skill.progress}%</span>
                        </div>
                        <div className={styles.progressBarBg}>
                            <motion.div
                                className={styles.progressBarFill}
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.progress}%` }}
                                transition={{ duration: 1, delay: 0.2 }}
                                viewport={{ once: true }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
