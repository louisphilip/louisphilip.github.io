"use client";
import React, { useEffect } from "react";

export default function Modal({ setShowModal, showModal, modalContent }) {
  useEffect(() => {
    const handleDocumentClick = (event) => {
      const modalDialog = document.querySelector(".modal");
      const modalContentEl = document.querySelector(".modal-content");

      if (
        modalDialog &&
        modalContentEl &&
        !modalContentEl.contains(event.target) &&
        modalDialog.contains(event.target)
      ) {
        setShowModal(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [setShowModal]);

  if (!modalContent) return null;

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const extractImageFromContent = (content) => {
    if (!content) return null;
    const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
    return imgMatch ? imgMatch[1] : null;
  };

  const cleanContent = (content) => {
    if (!content) return '';
    // Remove HTML tags but preserve line breaks
    return content
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<[^>]*>/g, '')
      .replace(/\n{3,}/g, '\n\n')
      .trim();
  };

  const articleImage = extractImageFromContent(modalContent.description || modalContent.content);
  const cleanDescription = cleanContent(modalContent.description || modalContent.content);

  return (
    <>
      <div
        className={`modal portfolio-modal-box fade ${showModal ? "show" : ""}`}
        id="blog-article-modal"
        tabIndex="-1"
        role="dialog"
        style={{
          transition: "0.4s",
          display: "block",
          visibility: showModal ? "visible" : "hidden",
        }}
      >
        <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-body p-0">
              {/* Article Header with Image */}
              {articleImage && (
                <div className="article-hero-image">
                  <img
                    src={articleImage}
                    alt={modalContent.title}
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                      borderRadius: "8px 8px 0 0"
                    }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                </div>
              )}

              <div className="article-content p-4">
                {/* Article Title & Meta */}
                <div className="article-header mb-4">
                  <h3 className="article-title mb-3">
                    {modalContent.title}
                  </h3>
                  
                  <div className="article-meta d-flex flex-wrap align-items-center gap-3 mb-3">
                    <div className="meta-item">
                      <i className="fab fa-medium me-2 text-primary"></i>
                      <span className="text-muted">Published on Medium</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-calendar-alt me-2 text-muted"></i>
                      <span className="text-muted">{formatDate(modalContent.pubDate)}</span>
                    </div>
                    <div className="meta-item">
                      <i className="fas fa-user me-2 text-muted"></i>
                      <span className="text-muted">{modalContent.author || 'LP Shahim'}</span>
                    </div>
                  </div>

                  {/* Categories */}
                  {modalContent.categories && modalContent.categories.length > 0 && (
                    <div className="article-categories mb-3">
                      {modalContent.categories.map((category, index) => (
                        <span key={index} className="category-badge badge bg-light text-dark me-2 mb-2">
                          <i className="fas fa-tag me-1"></i>
                          {category}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Article Preview */}
                <div className="article-preview mb-4">
                  <h5 className="section-title mb-3">
                    <i className="fas fa-newspaper me-2"></i>
                    Article Preview
                  </h5>
                  <div className="preview-content p-3 bg-light rounded">
                    {cleanDescription ? (
                      <p className="preview-text mb-0" style={{ lineHeight: '1.6' }}>
                        {cleanDescription.length > 500 
                          ? cleanDescription.substring(0, 500) + '...' 
                          : cleanDescription
                        }
                      </p>
                    ) : (
                      <p className="text-muted mb-0">
                        <i className="fas fa-info-circle me-2"></i>
                        Full content available on Medium
                      </p>
                    )}
                  </div>
                </div>

                {/* Article Stats */}
                <div className="article-stats mb-4">
                  <div className="row g-3">
                    <div className="col-4">
                      <div className="stat-card text-center p-3 bg-light rounded">
                        <i className="fas fa-eye text-primary mb-2"></i>
                        <div className="stat-label">Read on</div>
                        <div className="stat-value">Medium</div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="stat-card text-center p-3 bg-light rounded">
                        <i className="fas fa-clock text-info mb-2"></i>
                        <div className="stat-label">Est. Reading</div>
                        <div className="stat-value">
                          {modalContent.readingTime || '5 min'}
                        </div>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className="stat-card text-center p-3 bg-light rounded">
                        <i className="fas fa-share-alt text-success mb-2"></i>
                        <div className="stat-label">Share</div>
                        <div className="stat-value">Available</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="article-actions d-flex gap-2 flex-wrap">
                  <a
                    href={modalContent.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary flex-fill"
                  >
                    <i className="fab fa-medium me-2"></i>
                    Read Full Article
                  </a>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: modalContent.title,
                          url: modalContent.link,
                        });
                      } else {
                        // Fallback to copying URL
                        navigator.clipboard.writeText(modalContent.link);
                        // You could add a toast notification here
                      }
                    }}
                  >
                    <i className="fas fa-share me-2"></i>
                    Share
                  </button>
                </div>

                {/* Additional Info */}
                <div className="article-footer mt-4 pt-3 border-top">
                  <div className="d-flex justify-content-between align-items-center text-muted small">
                    <span>
                      <i className="fas fa-external-link-alt me-1"></i>
                      External content from Medium
                    </span>
                    <span>
                      Article ID: {modalContent.guid?.split('/').pop() || modalContent.id}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Close Button */}
      {showModal && (
        <div className="modal-header">
          <button
            type="button"
            className="close"
            onClick={() => setShowModal(false)}
            aria-label="Close"
          >
            <i className="far fa-times"></i>
          </button>
        </div>
      )}
    </>
  );
}
