"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { SiCredly } from "react-icons/si";
import { profileInfo } from "../../data/profileInfo";
import styles from "./Header.module.scss";

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Writing", path: "/writing" },
    { name: "Reading", path: "/reading" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    <span>LP</span>
                    <span className={styles.dot}>.</span>
                </Link>

                {/* Desktop Nav */}
                <nav className={styles.desktopNav}>
                    {navItems.map((item) => (
                        item.external ? (
                            <a
                                key={item.name}
                                href={item.path}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.navLink}
                            >
                                {item.name}
                            </a>
                        ) : (
                            <Link
                                key={item.name}
                                href={item.path}
                                className={`${styles.navLink} ${pathname === item.path ? styles.active : ""
                                    }`}
                            >
                                {item.name}
                                {pathname === item.path && (
                                    <motion.div
                                        layoutId="underline"
                                        className={styles.underline}
                                    />
                                )}
                            </Link>
                        )
                    ))}
                </nav>

                <div className={styles.actions}>
                    <a
                        href={profileInfo.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.socialLink}
                    >
                        <FiGithub />
                    </a>
                    <button
                        className={styles.menuBtn}
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className={styles.mobileNav}
                    >
                        <div className={`container ${styles.mobileContainer}`}>
                            {navItems.map((item) => (
                                <Link
                                    key={item.path}
                                    href={item.path}
                                    className={`${styles.mobileLink} ${pathname === item.path ? styles.active : ""
                                        }`}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className={styles.mobileSocials}>
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
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
