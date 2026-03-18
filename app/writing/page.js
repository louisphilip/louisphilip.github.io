import WritingContent from "@/components/writing/WritingContent";

export const metadata = {
    title: "Writing | Louis Philip",
    description: "Thoughts on software engineering, cloud architecture, and more.",
};

export default function Writing() {
    return (
        <div className="container section">
            <div style={{ marginBottom: '60px' }}>
                <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Writing</h1>
                <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)', maxWidth: '800px' }}>
                    I write about cloud computing, software architecture, and my journey in tech.
                    Check out my latest articles from Medium.
                </p>
            </div>

            <WritingContent />
        </div>
    );
}
