"use client";

import { motion } from "framer-motion";
import styles from "./AnimatedBackground.module.scss";

export default function AnimatedBackground() {
  return (
    <div className={styles.backgroundContainer}>
      <motion.div
        className={styles.blob1}
        animate={{
          x: [0, 100, 0, -100, 0],
          y: [0, 50, 100, 50, 0],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className={styles.blob2}
        animate={{
          x: [0, -150, 0, 150, 0],
          y: [0, 100, 0, -100, 0],
          rotate: [360, 270, 180, 90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className={styles.blob3}
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -100, 50, 0],
          scale: [1, 1.2, 0.8, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
