import BookCard from "@/components/reading/BookCard";
import { booksData } from "@/data/books";
import styles from "@/components/reading/Reading.module.scss";

export const metadata = {
    title: "Reading | Louis Philip",
    description: "A collection of books I've read and recommend.",
};

export default function Reading() {
    return (
        <div className="container section">
            <div style={{ marginBottom: '60px' }}>
                <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Reading List</h1>
                <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-secondary)', maxWidth: '800px' }}>
                    Books are a uniquely portable magic. Here are some of the books that have shaped my thinking.
                    Most of these are from my Audible library.
                </p>
            </div>

            <div className={styles.grid}>
                {booksData.map((book) => (
                    <BookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
}
