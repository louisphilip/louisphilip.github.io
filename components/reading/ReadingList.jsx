"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import BookCard from "./BookCard";
import styles from "./Reading.module.scss";

const ITEMS_PER_PAGE = 12;

export default function ReadingList({ books }) {
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("rating"); // rating, title, year
    const [filterCategory, setFilterCategory] = useState("All");

    // Extract unique categories
    const categories = useMemo(() => {
        const cats = new Set(books.map(book => book.category));
        return ["All", ...Array.from(cats).sort()];
    }, [books]);

    // Filter and Sort
    const filteredAndSortedBooks = useMemo(() => {
        let result = [...books];

        // Filter by Category
        if (filterCategory !== "All") {
            result = result.filter(book => book.category === filterCategory);
        }

        // Filter by Search
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(book => 
                book.title.toLowerCase().includes(query) || 
                book.author.toLowerCase().includes(query)
            );
        }

        // Sort
        result.sort((a, b) => {
            switch (sortBy) {
                case "rating":
                    return b.rating - a.rating;
                case "year":
                    return b.year - a.year;
                case "title":
                    return a.title.localeCompare(b.title);
                default:
                    return 0;
            }
        });

        return result;
    }, [books, filterCategory, searchQuery, sortBy]);

    // Pagination
    const visibleBooks = useMemo(() => {
        return filteredAndSortedBooks.slice(0, page * ITEMS_PER_PAGE);
    }, [filteredAndSortedBooks, page]);

    const hasMore = visibleBooks.length < filteredAndSortedBooks.length;

    const handleLoadMore = () => {
        setPage(prev => prev + 1);
    };

    // Reset page when filters change
    useMemo(() => {
        setPage(1);
    }, [searchQuery, sortBy, filterCategory]);

    return (
        <div>
            <div className={styles.controls}>
                <div className={styles.searchWrapper}>
                    <input
                        type="text"
                        placeholder="Search books or authors..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className={styles.searchInput}
                    />
                </div>
                
                <div className={styles.filterGroup}>
                    <select 
                        value={filterCategory} 
                        onChange={(e) => setFilterCategory(e.target.value)}
                        className={styles.select}
                    >
                        {categories.map(cat => (
                            <option key={cat} value={cat}>{cat}</option>
                        ))}
                    </select>

                    <select 
                        value={sortBy} 
                        onChange={(e) => setSortBy(e.target.value)}
                        className={styles.select}
                    >
                        <option value="rating">Highest Rated</option>
                        <option value="year">Newest First</option>
                        <option value="title">Alphabetical</option>
                    </select>
                </div>
            </div>

            {visibleBooks.length > 0 ? (
                <>
                    <div className={styles.grid}>
                        <AnimatePresence mode="popLayout">
                            {visibleBooks.map((book, index) => (
                                <BookCard 
                                    key={book.id} 
                                    book={book} 
                                    priority={index < 6} // Prioritize loading first 6 images
                                />
                            ))}
                        </AnimatePresence>
                    </div>

                    {hasMore && (
                        <div className={styles.loadMoreContainer}>
                            <button onClick={handleLoadMore} className={styles.loadMoreBtn}>
                                Load More Books
                            </button>
                        </div>
                    )}
                </>
            ) : (
                <div className={styles.noResults}>
                    <p>No books found matching your criteria.</p>
                </div>
            )}
        </div>
    );
}
