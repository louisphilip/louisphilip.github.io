"use client";

import styles from "./Footer.module.scss";
import { profileInfo } from "../../data/profileInfo";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { SiCredly } from "react-icons/si";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.socials}>
                    <a href={profileInfo.socials.github} target="_blank" rel="noopener noreferrer">
                        <FiGithub />
                    </a>
                    <a href={profileInfo.socials.linkedin} target="_blank" rel="noopener noreferrer">
                        <FiLinkedin />
                    </a>
                    <a href={profileInfo.socials.twitter} target="_blank" rel="noopener noreferrer">
                        <FaXTwitter />
                    </a>
                    <a href={profileInfo.socials.instagram} target="_blank" rel="noopener noreferrer">
                        <FaInstagram />
                    </a>
                    <a href={profileInfo.socials.credly} target="_blank" rel="noopener noreferrer">
                        <SiCredly />
                    </a>
                </div>
                <p className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Louis Philip. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
