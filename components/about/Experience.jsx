"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { experiences } from "../../data/experience";
import styles from "./About.module.scss";

const TimelineItem = ({ item, index }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.2 1"]
    });

    const yTransform = useTransform(scrollYProgress, [0, 1], [50, 0]);
    const opacityTransform = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <motion.div
            ref={ref}
            className={styles.timelineItem}
            style={{ y: yTransform, opacity: opacityTransform }}
        >
            <div className={styles.timelineDot}></div>
            <div className={styles.timelineContent}>
                <span className={styles.session}>{item.session}</span>
                <h4 className={styles.role}>{item.role}</h4>
                <p className={styles.company}>{item.company}</p>
            </div>
        </motion.div>
    );
};

export default function Experience() {
    return (
        <div className={styles.experienceSection}>
            <h3 className={styles.sectionTitle}>Experience</h3>
            <div className={styles.timeline}>
                {experiences.map((item, index) => (
                    <TimelineItem key={item.id} item={item} index={index} />
                ))}
            </div>
        </div>
    );
}
