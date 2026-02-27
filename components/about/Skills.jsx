"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { skillData } from "../../data/skills";
import styles from "./About.module.scss";

const SkillItem = ({ skill, index }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1 1"]
    });

    const yTransform = useTransform(scrollYProgress, [0, 1], [30, 0]);
    const opacityTransform = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <motion.div 
            ref={ref} 
            className={styles.skillItem}
            style={{ y: yTransform, opacity: opacityTransform }}
        >
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
        </motion.div>
    );
};

export default function Skills() {
    return (
        <div className={styles.skillsSection}>
            <h3 className={styles.sectionTitle}>Skills</h3>
            <div className={styles.skillsGrid}>
                {skillData.map((skill, index) => (
                    <SkillItem key={skill.id} skill={skill} index={index} />
                ))}
            </div>
        </div>
    );
}
