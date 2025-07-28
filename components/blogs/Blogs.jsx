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
            <div className="alert alert-danger" role="alert">
              <h4 className="alert-heading">Unable to load articles</h4>
              <p>{error}</p>
              <hr />
              <p className="mb-0">
                <a 
                  href="https://medium.com/@louisphilip_s" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary"
                >
                  Read on Medium <i className="fab fa-medium ms-2"></i>
                </a>
              </p>
            </div>
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
            <p className="page-subtitle">Latest articles from Medium ({articles.length} articles)</p>
          </div>
        </div>

        <div className="section-wrapper pr-60 pl-60 mb-60">
          {articles.length === 0 ? (
            <div className="no-articles text-center py-60">
              <i className="fas fa-newspaper fa-3x text-muted mb-3"></i>
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
            <div className="blog-slider-wrap">
              <Swiper
                modules={[Navigation, Pagination]}
                pagination={{
                  el: ".blog-pagination",
                  clickable: true,
                  dynamicBullets: true,
                }}
                navigation={{
                  nextEl: ".blog-slider-next",
                  prevEl: ".blog-slider-prev",
                }}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  1200: {
                    slidesPerView: 3,
                  },
                }}
                loop={articles.length > 3}
                className="blog-slider"
              >
                {articles.map((article) => (
                  <SwiperSlide key={article.id}>
                    <article className="blog-card bg-prink">
                      {/* Article Image */}
                      <div className="blog-image-container">
                        {article.image ? (
                          <img
                            src={article.image}
                            alt={article.title}
                            className="blog-image"
                            style={{
                              width: "100%",
                              height: "200px",
                              objectFit: "cover",
                              borderRadius: "8px 8px 0 0"
                            }}
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div 
                          className="blog-image-fallback"
                          style={{
                            display: article.image ? 'none' : 'flex',
                            width: "100%",
                            height: "200px",
                            backgroundColor: "#f8f9fa",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "8px 8px 0 0"
                          }}
                        >
                          <i className="fab fa-medium fa-3x text-muted"></i>
                        </div>
                      </div>

                      {/* Article Content */}
                      <div className="blog-content p-4">
                        <div className="blog-meta mb-3">
                          <span className="blog-date">
                            <i className="fas fa-calendar-alt me-2"></i>
                            {article.publishDate}
                          </span>
                          <span className="blog-reading-time ms-3">
                            <i className="fas fa-clock me-2"></i>
                            {article.readingTime}
                          </span>
                        </div>

                        <h6 className="blog-title mb-3">
                          <a 
                            href={article.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-decoration-none"
                          >
                            {article.title}
                          </a>
                        </h6>

                        {article.cleanDescription && (
                          <p className="blog-excerpt text-muted mb-3">
                            {article.cleanDescription}
                          </p>
                        )}

                        {/* Categories */}
                        {article.categories && article.categories.length > 0 && (
                          <div className="blog-categories mb-3">
                            {article.categories.slice(0, 3).map((category, index) => (
                              <span key={index} className="category-tag badge bg-light text-dark me-2">
                                {category}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Article Actions */}
                        <div className="blog-actions d-flex justify-content-between align-items-center">
                          <a 
                            href={article.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="btn btn-sm btn-outline-primary"
                          >
                            Read More <i className="fas fa-arrow-right ms-1"></i>
                          </a>
                          <button
                            className="btn btn-sm btn-light"
                            onClick={() => {
                              setModalContent(article);
                              setShowModal(true);
                            }}
                          >
                            <i className="fas fa-info-circle"></i>
                          </button>
                        </div>
                      </div>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation */}
              <div className="blog-slider-navigation mt-4">
                <button className="blog-slider-prev slider-btn">
                  <i className="fas fa-chevron-left"></i>
                </button>
                <div className="blog-pagination"></div>
                <button className="blog-slider-next slider-btn">
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Article Modal */}
      {showModal && modalContent && (
        <Modal 
          setShowModal={setShowModal} 
          showModal={showModal} 
          modalContent={modalContent} 
        />
      )}
    </>
  );
}