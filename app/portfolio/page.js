import ProjectCard from "@/components/portfolio/ProjectCard";
import { fetchStarredRepos } from "@/lib/github";
import styles from "@/components/portfolio/Portfolio.module.scss";

export const metadata = {
    title: "Portfolio | Louis Philip",
    description: "A collection of repositories I've starred on GitHub.",
};

export default async function Portfolio() {
    const projects = await fetchStarredRepos();

    return (
        <div className="container section">
            <div style={{ marginBottom: '60px' }}>
                <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Starred Repos</h1>
                <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)', maxWidth: '800px' }}>
                    A collection of interesting repositories I've discovered and starred on GitHub.
                </p>
            </div>

            <div className={styles.grid}>
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
}
