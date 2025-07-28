'use client';

import React, { useState } from 'react';
import { booksData, bookCategories, bookTypes } from '@/data/books';

export default function Books() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredBooks = booksData.filter(book => {
    const matchesCategory =
      selectedCategory === 'All' || book.category === selectedCategory;
    const matchesType = selectedType === 'All' || book.type === selectedType;
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.tags.some(tag =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return matchesCategory && matchesType && matchesSearch;
  });

  const renderStars = rating => {
    return Array.from({ length: 5 }, (_, index) => (
      <i
        key={index}
        className={`fa-solid fa-star ${index < rating ? 'text-warning' : 'text-muted'}`}
        style={{ fontSize: '14px' }}
      ></i>
    ));
  };

  return (
    <>
      <div className='bostami-page-content-wrap'>
        <div className='section-wrapper pl-60 pr-60 pt-60'>
          <div className='bostami-page-title-wrap mb-30'>
            <h2
              className='page-title'
              style={{
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                fontSize: '2.5rem',
                fontWeight: '800',
                marginBottom: '10px',
              }}
            >
              My Book Collection
            </h2>
            <p
              className='text-muted'
              style={{
                fontSize: '1.1rem',
                color: 'var(--body-text)',
                maxWidth: '600px',
                lineHeight: '1.6',
              }}
            >
              A curated collection of my favorite books and audiobooks that have
              shaped my thinking and growth
            </p>
          </div>
        </div>

        <div className='section-wrapper pr-60 pl-60 mb-30'>
          {/* Search and Filter Section */}
          <div className='row mb-40'>
            <div className='col-lg-4'>
              <div className='search-box'>
                <div style={{ position: 'relative' }}>
                  <i
                    className='fa-light fa-search'
                    style={{
                      position: 'absolute',
                      left: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--theme-neutral)',
                      fontSize: '16px',
                    }}
                  ></i>
                  <input
                    type='text'
                    placeholder='Search books...'
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                    className='form-control'
                    style={{
                      padding: '16px 20px 16px 45px',
                      borderRadius: '16px',
                      border: '2px solid var(--light-white-2)',
                      fontSize: '15px',
                      background: 'var(--common-white)',
                      color: 'var(--body-text)',
                      transition: 'all 0.3s ease',
                      boxShadow: 'var(--shadow-light)',
                    }}
                  />
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='category-filter'>
                <div style={{ position: 'relative' }}>
                  <i
                    className='fa-light fa-filter'
                    style={{
                      position: 'absolute',
                      left: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--theme-neutral)',
                      fontSize: '16px',
                      zIndex: '1',
                    }}
                  ></i>
                  <select
                    value={selectedCategory}
                    onChange={e => setSelectedCategory(e.target.value)}
                    className='form-control'
                    style={{
                      padding: '16px 20px 16px 45px',
                      borderRadius: '16px',
                      border: '2px solid var(--light-white-2)',
                      fontSize: '15px',
                      background: 'var(--common-white)',
                      color: 'var(--body-text)',
                      transition: 'all 0.3s ease',
                      boxShadow: 'var(--shadow-light)',
                      appearance: 'none',
                    }}
                  >
                    {bookCategories.map(category => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='type-filter'>
                <div style={{ position: 'relative' }}>
                  <i
                    className='fa-light fa-book'
                    style={{
                      position: 'absolute',
                      left: '16px',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: 'var(--theme-neutral)',
                      fontSize: '16px',
                      zIndex: '1',
                    }}
                  ></i>
                  <select
                    value={selectedType}
                    onChange={e => setSelectedType(e.target.value)}
                    className='form-control'
                    style={{
                      padding: '16px 20px 16px 45px',
                      borderRadius: '16px',
                      border: '2px solid var(--light-white-2)',
                      fontSize: '15px',
                      background: 'var(--common-white)',
                      color: 'var(--body-text)',
                      transition: 'all 0.3s ease',
                      boxShadow: 'var(--shadow-light)',
                      appearance: 'none',
                    }}
                  >
                    {bookTypes.map(type => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Books Grid */}
          <div className='row'>
            {filteredBooks.map(book => (
              <div key={book.id} className='col-lg-6 col-md-6 mb-30'>
                <div
                  className='book-card'
                  style={{
                    background: 'var(--common-white)',
                    borderRadius: '20px',
                    padding: '32px',
                    boxShadow: 'var(--shadow-light)',
                    border: '1px solid var(--light-white-2)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Gradient overlay on hover */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      right: '0',
                      bottom: '0',
                      background: 'var(--gradient-primary)',
                      opacity: '0',
                      transition: 'opacity 0.4s ease',
                      borderRadius: '20px',
                      zIndex: '0',
                    }}
                  ></div>

                  <div style={{ position: 'relative', zIndex: '1' }}>
                    <div className='book-header mb-20'>
                      <div className='d-flex align-items-start justify-content-between mb-15'>
                        <div className='d-flex align-items-center'>
                          <div
                            style={{
                              width: '80px',
                              height: '120px',
                              borderRadius: '12px',
                              overflow: 'hidden',
                              marginRight: '20px',
                              boxShadow: 'var(--shadow-medium)',
                              background: 'var(--light-white)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <img
                              src={book.coverImage}
                              alt={`${book.title} cover`}
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                              }}
                              onError={e => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                            <div
                              style={{
                                display: 'none',
                                width: '100%',
                                height: '100%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'var(--gradient-primary)',
                                color: 'white',
                                fontSize: '12px',
                                textAlign: 'center',
                                padding: '10px',
                              }}
                            >
                              {book.title.split(' ').slice(0, 2).join(' ')}
                            </div>
                          </div>
                          <div>
                            <span
                              className='badge'
                              style={{
                                fontSize: '11px',
                                padding: '6px 12px',
                                borderRadius: '20px',
                                backgroundColor:
                                  book.type === 'Audiobook'
                                    ? 'var(--theme-secondary)'
                                    : 'var(--theme-primary)',
                                color: 'white',
                                fontWeight: '600',
                                marginBottom: '8px',
                                display: 'inline-block',
                              }}
                            >
                              {book.type}
                            </span>
                            <div className='rating mb-10'>
                              {renderStars(book.rating)}
                              <span
                                style={{
                                  marginLeft: '8px',
                                  fontSize: '14px',
                                  color: 'var(--body-text)',
                                }}
                              >
                                ({book.rating}/5)
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <h5
                        className='book-title mb-10'
                        style={{
                          fontSize: '22px',
                          fontWeight: '700',
                          color: 'var(--body-heading)',
                          margin: '0',
                          lineHeight: '1.3',
                        }}
                      >
                        {book.title}
                      </h5>
                      <p
                        className='book-author mb-15'
                        style={{
                          fontSize: '16px',
                          color: 'var(--theme-primary)',
                          fontWeight: '600',
                          margin: '0',
                        }}
                      >
                        by {book.author}
                      </p>
                    </div>

                    <div
                      className='book-description mb-20'
                      style={{
                        fontSize: '15px',
                        color: 'var(--body-text)',
                        lineHeight: '1.6',
                        flex: '1',
                      }}
                    >
                      {book.description}
                    </div>

                    <div className='book-footer'>
                      <div className='book-meta mb-15'>
                        <div className='d-flex justify-content-between align-items-center mb-10'>
                          <span
                            style={{
                              fontSize: '14px',
                              color: 'var(--theme-neutral)',
                              fontWeight: '500',
                            }}
                          >
                            {book.year} • {book.category}
                          </span>
                          <span
                            style={{
                              fontSize: '14px',
                              color: 'var(--theme-neutral)',
                              fontWeight: '500',
                            }}
                          >
                            ISBN: {book.isbn}
                          </span>
                        </div>
                      </div>

                      <div className='book-tags mb-20'>
                        {book.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className='badge me-2 mb-2'
                            style={{
                              fontSize: '11px',
                              padding: '6px 10px',
                              borderRadius: '12px',
                              backgroundColor: 'var(--catkrill)',
                              color: 'var(--theme-primary)',
                              fontWeight: '500',
                              border: '1px solid rgba(99, 102, 241, 0.2)',
                              transition: 'all 0.3s ease',
                            }}
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <div className='book-actions'>
                        <div className='row'>
                          <div className='col-6'>
                            <a
                              href={book.amazonLink}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='btn btn-primary btn-sm w-100'
                              style={{
                                padding: '12px 16px',
                                fontSize: '13px',
                                borderRadius: '12px',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'var(--gradient-primary)',
                                color: 'white',
                                fontWeight: '600',
                                border: 'none',
                                boxShadow: 'var(--shadow-light)',
                                transition: 'all 0.3s ease',
                                gap: '6px',
                              }}
                            >
                              <i className='fa-brands fa-amazon'></i>
                              Amazon
                            </a>
                          </div>
                          <div className='col-6'>
                            <a
                              href={book.audibleLink}
                              target='_blank'
                              rel='noopener noreferrer'
                              className='btn btn-secondary btn-sm w-100'
                              style={{
                                padding: '12px 16px',
                                fontSize: '13px',
                                borderRadius: '12px',
                                textDecoration: 'none',
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'var(--gradient-secondary)',
                                color: 'white',
                                fontWeight: '600',
                                border: 'none',
                                boxShadow: 'var(--shadow-light)',
                                transition: 'all 0.3s ease',
                                gap: '6px',
                              }}
                            >
                              <i className='fa-solid fa-headphones'></i>
                              Audible
                            </a>
                          </div>
                        </div>
                        <div className='mt-15'>
                          <a
                            href={book.authorWebsite}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='btn btn-outline-primary btn-sm w-100'
                            style={{
                              padding: '10px 16px',
                              fontSize: '13px',
                              borderRadius: '12px',
                              textDecoration: 'none',
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              background: 'transparent',
                              color: 'var(--theme-primary)',
                              fontWeight: '600',
                              border: '2px solid var(--theme-primary)',
                              transition: 'all 0.3s ease',
                              gap: '6px',
                            }}
                          >
                            <i className='fa-light fa-globe'></i>
                            Author Website
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredBooks.length === 0 && (
            <div className='text-center py-60'>
              <div
                style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'var(--light-white)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}
              >
                <i
                  className='fa-light fa-book'
                  style={{ fontSize: '32px', color: 'var(--theme-neutral)' }}
                ></i>
              </div>
              <h4
                style={{ color: 'var(--body-heading)', marginBottom: '10px' }}
              >
                No books found
              </h4>
              <p style={{ color: 'var(--body-text)', fontSize: '16px' }}>
                Try adjusting your search criteria or filters.
              </p>
            </div>
          )}
        </div>

        <div className='footer-copyright text-center bg-light-white-2 pt-25 pb-25'>
          <span>
            © {new Date().getFullYear()} All Rights Reserved by LP Shahim.
          </span>
        </div>
      </div>
    </>
  );
}
