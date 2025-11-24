"use client";

import { motion } from "framer-motion";
import {
    SiGooglecloud,
    SiTerraform,
    SiAmazon,
    SiGithubactions,
    SiFlutter,
    SiPrisma,
    SiGoogle
} from "react-icons/si";
import styles from "./TechSlider.module.scss";

const technologies = [
    { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
    { name: "Terraform", icon: SiTerraform, color: "#7B42BC" },
    { name: "AWS", icon: SiAmazon, color: "#FF9900" },
    { name: "CI/CD", icon: SiGithubactions, color: "#2088FF" },
    { name: "Flutter", icon: SiFlutter, color: "#02569B" },
    { name: "Prisma Cloud", icon: SiPrisma, color: "#2D3748" },
    { name: "Google Workspace", icon: SiGoogle, color: "#4285F4" },
];

export default function TechSlider() {
    return (
        <div className={styles.sliderContainer}>
            <div className={styles.sliderTrack}>
                {/* Duplicate the list to create infinite loop effect */}
                {[...technologies, ...technologies, ...technologies, ...technologies].map((tech, index) => (
                    <div key={`${tech.name}-${index}`} className={styles.slide}>
                        <tech.icon className={styles.icon} style={{ color: tech.color }} />
                        <span className={styles.name}>{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
