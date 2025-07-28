"use client";

import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
import Modal from "./Modal";

export default function Blogs() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalContent, setModalContent] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Extract image from Medium article content
  const extractImageFromContent = (content) => {
    if (!content) return null;
    
    const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
    return imgMatch ? imgMatch[1] : null;
  };

  // Clean and truncate description
  const cleanDescription = (description, maxLength = 150) => {
    if (!description) return '';
    
    // Remove HTML tags
    const cleanText = description.replace(/<[^>]*>/g, '');
    
    // Truncate if too long
    if (cleanText.length > maxLength) {
      return cleanText.substring(0, maxLength) + '...';
    }
    
    return cleanText;
  };

  // Format publish date
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Calculate reading time estimate
  const estimateReadingTime = (content) => {
    if (!content) return '5 min read';
    
    const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length;
    const minutes = Math.ceil(words / 200); // Average reading speed
    return `${minutes} min read`;
  };

  useEffect(() => {
    const fetchMediumArticles = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@louisphilip_s',
          {
            headers: {
              'Accept': 'application/json',
            }
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch articles: ${response.status}`);
        }

        const data = await response.json();
        
        if (data.status !== 'ok') {
          throw new Error('RSS feed parsing failed');
        }

        // Process and enhance articles
        const processedArticles = data.items.map((article, index) => ({
          ...article,
          id: article.guid || index,
          image: extractImageFromContent(article.description || article.content),
          cleanDescription: cleanDescription(article.description || article.content),
          readingTime: estimateReadingTime(article.description || article.content),
          publishDate: formatDate(article.pubDate),
        }));

        setArticles(processedArticles);
      } catch (error) {
        console.error('Error fetching Medium articles:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMediumArticles();
  }, []);

  if (loading) {
    return (
      <div className="bostami-page-content-wrap">
        <div className="section-wrapper pl-60 pr-60 pt-60">
          <div className="bostami-page-title-wrap mb-15">
            <h2 className="page-title">LP's Blogs</h2>
          </div>
          <div className="loading-state text-center py-60">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading Medium articles...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bostami-page-content-wrap">
        <div className="section-wrapper pl-60 pr-60 pt-60">
          <div className="bostami-page-title-wrap mb-15">
            <h2 className="page-title">LP's Blogs</h2>
          </div>
          <div className="error-state text-center py-60">
            <i className="fa-brands fa-medium fa-3x text-danger mb-3"></i>
            <h4>Unable to load articles</h4>
            <p className="text-muted">{error}</p>
            <button 
              className="btn btn-outline-primary"
              onClick={() => window.location.reload()}
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="bostami-page-content-wrap">
        <div className="section-wrapper pl-60 pr-60 pt-60">
          <div className="bostami-page-title-wrap mb-15">
            <h2 className="page-title">LP's Blogs</h2>
          </div>
        </div>

        <div className="section-wrapper pr-60 pl-60 mb-60">
          {articles.length === 0 ? (
            <div className="no-articles text-center py-60">
              <i className="fa-brands fa-medium fa-3x text-muted mb-3"></i>
              <h4>No articles found</h4>
              <p className="text-muted">Check back later for new content!</p>
              <a 
                href="https://medium.com/@louisphilip_s" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline-primary"
              >
                Visit Medium Profile
              </a>
            </div>
          ) : (
            <div className="bostami-what-do-wrap mb-30">
              <div className="row">
                {articles.map((article, index) => (
                  <div key={article.id} className="col-xxl-6 col-xl-6 col-lg-6 mb-30">
                    <div className="bostami-what-do-item bg-light-white-2">
                      {/* Article Icon */}
                      <div className="icon" style={{ margin: "0", minWidth: "60px" }}>
                        <div style={{
                          width: "60px",
                          height: "60px",
                          backgroundColor: "#00ab6c",
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          fontSize: "24px"
                        }}>
                          <i className="fa-brands fa-medium"></i>
                        </div>
                      </div>

                      {/* Article Content */}
                      <div className="text">
                        <h4 className="title">
                          <a 
                            href={article.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                          >
                            {article.title}
                          </a>
                        </h4>

                        {/* Article Meta */}
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '15px', 
                          marginBottom: '15px',
                          fontSize: '14px',
                          color: '#666'
                        }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <i className="fa-regular fa-calendar"></i>
                            {article.publishDate}
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <i className="fa-regular fa-clock"></i>
                            {article.readingTime}
                          </span>
                        </div>

                        {/* Categories */}
                        {article.categories && article.categories.length > 0 && (
                          <div style={{ marginBottom: '15px' }}>
                            {article.categories.slice(0, 2).map((category, catIndex) => (
                              <span 
                                key={catIndex}
                                style={{
                                  display: 'inline-block',
                                  backgroundColor: '#e5f3ff',
                                  color: '#0066cc',
                                  padding: '3px 8px',
                                  borderRadius: '12px',
                                  fontSize: '12px',
                                  fontWeight: '500',
                                  marginRight: '8px',
                                  marginBottom: '5px'
                                }}
                              >
                                {category}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Article Actions */}
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                          <button
                            onClick={() => {
                              setModalContent(article);
                              setShowModal(true);
                            }}
                            style={{
                              backgroundColor: '#007bff',
                              color: 'white',
                              border: 'none',
                              padding: '8px 16px',
                              borderRadius: '6px',
                              fontSize: '14px',
                              cursor: 'pointer',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}
                          >
                            <i className="fa-regular fa-eye"></i>
                            Preview
                          </button>
                          <a 
                            href={article.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              backgroundColor: '#00ab6c',
                              color: 'white',
                              textDecoration: 'none',
                              padding: '8px 16px',
                              borderRadius: '6px',
                              fontSize: '14px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => e.target.style.backgroundColor = '#008f5a'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#00ab6c'}
                          >
                            <i className="fa-solid fa-external-link"></i>
                            Read on Medium
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          showModal={showModal}
          modalContent={modalContent}
        />
      )}
    </>
  );
}