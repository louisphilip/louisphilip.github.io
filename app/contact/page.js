import Contact from "@/components/contact/Contact";

export const metadata = {
    title: "Contact | Louis Philip",
    description: "Get in touch with me.",
};

export default function ContactPage() {
    return (
        <div className="container section">
            <div style={{ marginBottom: '60px' }}>
                <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Get in Touch</h1>
                <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)', maxWidth: '800px' }}>
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
            </div>

            <Contact />
        </div>
    );
}
