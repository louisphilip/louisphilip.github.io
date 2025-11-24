"use client";

import { motion } from "framer-motion";
import { experiences } from "../../data/experience";
import styles from "./About.module.scss";

export default function Experience() {
    return (
        <div className={styles.experienceSection}>
            <h3 className={styles.sectionTitle}>Experience</h3>
            <div className={styles.timeline}>
                {experiences.map((item, index) => (
                    <motion.div
                        key={item.id}
                        className={styles.timelineItem}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.timelineDot}></div>
                        <div className={styles.timelineContent}>
                            <span className={styles.session}>{item.session}</span>
                            <h4 className={styles.role}>{item.role}</h4>
                            <p className={styles.company}>{item.company}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
