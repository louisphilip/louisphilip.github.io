import Experience from "@/components/about/Experience";
import Skills from "@/components/about/Skills";
import { bioData } from "@/data/bioData";

export const metadata = {
    title: "About | Louis Philip",
    description: "Learn more about my experience and skills.",
};

export default function About() {
    return (
        <div className="container section">
            <div style={{ marginBottom: '60px' }}>
                <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>About Me</h1>
                <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)', maxWidth: '800px' }}>
                    {bioData.descTwo}
                </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px' }}>
                <Experience />
                <Skills />
            </div>
        </div>
    );
}
