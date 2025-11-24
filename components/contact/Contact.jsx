"use client";

import { motion } from "framer-motion";
import { contactData } from "../../data/contactData";
import styles from "./Contact.module.scss";

export default function Contact() {
    return (
        <div className={styles.grid}>
            {contactData.map((item, index) => (
                <motion.div
                    key={item.id}
                    className={styles.card}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    style={{ borderColor: item.color }}
                >
                    <div className={styles.iconWrapper} style={{ color: item.color }}>
                        <i className={item.iconClass}></i>
                    </div>
                    <div className={styles.content}>
                        <span className={styles.label}>{item.text.label}</span>
                        <h4 className={styles.value}>{item.text.value}</h4>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
