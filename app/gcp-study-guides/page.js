import styles from "./StudyGuides.module.scss";
import { FiDatabase, FiCpu, FiCode, FiLock, FiArrowRight, FiCheck } from "react-icons/fi";

export const metadata = {
    title: "GCP Study Labs | Louis Philip",
    description: "An interactive, visual, and case-driven study ecosystem for Google Cloud certifications.",
};

export default function GCPStudyGuides() {
    const guides = [
        {
            id: "pde",
            title: "Professional Data Engineer",
            category: "Data & AI Analytics",
            status: "Active Study Lab 🚀",
            badgeClass: styles.activeBadge,
            cardClass: styles.active,
            icon: <FiDatabase />,
            statusDesc: "Ready — Live on Custom Domain",
            description: "Deep-dives into scalable analytical warehousing, micro-windowed stream event orchestration, visual ETL pipelines, and structural ML data preps. Includes dynamic design decision trees, visual sketchnotes, and a 30-question interactive simulator.",
            bullets: [
                "30 scenario-based high-fidelity mock exam questions",
                "Interactive Step-by-Step Design Decision Wizards",
                "Priyanka Vergadia's conceptual visual sketchnotes integration",
                "Local Storage stateful Hands-on Lab checklist and milestones"
            ],
            link: "https://pde.louisphilipshahim.com",
            ctaText: "Launch Study Lab",
            disabled: false
        },
        {
            id: "pca",
            title: "Professional Cloud Architect",
            category: "Infrastructure & Security",
            status: "Upcoming Lab ⏳",
            badgeClass: styles.upcomingBadge,
            cardClass: styles.upcoming,
            icon: <FiCpu />,
            statusDesc: "Coming Soon — Q3 2026",
            description: "Designed to evaluate enterprise-grade business resilience, multi-region hybrid compute networking, complex storage scaling (Spanner vs Bigtable vs AlloyDB), and governance postures.",
            bullets: [
                "Resilient Disaster Recovery & Failover Workflows",
                "High-density GKE & Compute Hybrid Design Patterns",
                "Corporate Landing Zone & Network Perimeter Blueprints"
            ],
            link: "#",
            ctaText: "In Development",
            disabled: true
        },
        {
            id: "devops",
            title: "Professional Cloud DevOps Engineer",
            category: "CI/CD & Operations",
            status: "Pipeline Planned 🛠️",
            badgeClass: styles.upcomingBadge,
            cardClass: styles.upcoming,
            icon: <FiCode />,
            statusDesc: "Planned — Q4 2026",
            description: "Focuses on building fully-automated CI/CD pipelines, robust logging metrics architectures, Site Reliability Engineering (SRE) service boundaries, and complex Terraform state structures.",
            bullets: [
                "GitHub Actions & Cloud Build Orchestration Matrices",
                "Operations Suite Monitoring & SRE SLI/SLO Boundaries",
                "Multi-Environment Dry-run Terraform Blueprint States"
            ],
            link: "#",
            ctaText: "Planning",
            disabled: true
        },
        {
            id: "security",
            title: "Professional Cloud Security Engineer",
            category: "Identity & Protection",
            status: "Upcoming Blueprint 🛡️",
            badgeClass: styles.plannedBadge,
            cardClass: styles.upcoming,
            icon: <FiLock />,
            statusDesc: "Planned — Q1 2027",
            description: "Addresses advanced security posturing, VPC Service Controls (VPC-SC), Cloud KMS cryptographic architectures, column-level/IAM sharing topologies, and regulatory compliance benchmarks.",
            bullets: [
                "VPC-SC Perimeters & Cross-Project Bridge Connectors",
                "Hardware Security Module (HSM) & Customer-Managed Keys (CMEK)",
                "Security Command Center Alerts & Active Threat Appraisals"
            ],
            link: "#",
            ctaText: "Planning",
            disabled: true
        }
    ];

    return (
        <div className={`container section ${styles.container}`}>
            <div className={styles.headerSection}>
                <h1 className={styles.title}>GCP Study Labs</h1>
                <p className={styles.subtitle}>
                    An interactive, visual, and case-driven certification study ecosystem designed to bridge 
                    advanced Google Cloud engineering theory with production-ready reference architectures and blueprints.
                </p>
            </div>

            <div className={styles.grid}>
                {guides.map((guide) => (
                    <div key={guide.id} className={`${styles.card} ${guide.cardClass}`}>
                        <div>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconWrapper}>
                                    {guide.icon}
                                </div>
                                <span className={`${styles.badge} ${guide.badgeClass}`}>
                                    {guide.status}
                                </span>
                            </div>

                            <div className={styles.cardContent}>
                                <h3 className={styles.cardTitle}>{guide.title}</h3>
                                <p className={styles.cardStatus}>{guide.statusDesc}</p>
                                <p className={styles.cardDesc}>{guide.description}</p>

                                <ul className={styles.featuresList}>
                                    {guide.bullets.map((bullet, idx) => (
                                        <li key={idx} className={styles.featureItem}>
                                            <FiCheck />
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className={styles.buttonContainer}>
                            {guide.disabled ? (
                                <button className={`${styles.actionButton} ${styles.disabledButton}`} disabled>
                                    {guide.ctaText}
                                </button>
                            ) : (
                                <a 
                                    href={guide.link} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className={`${styles.actionButton} ${styles.activeButton}`}
                                >
                                    <span>{guide.ctaText}</span>
                                    <FiArrowRight />
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
