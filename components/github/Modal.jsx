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
      day: 'numeric'
    });
  };

  const formatBytes = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  return (
    <>
      <div
        className={`modal portfolio-modal-box fade ${showModal ? "show" : ""}`}
        id="github-repo-modal"
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
            <div className="modal-body p-4">
              {/* Repository Header */}
              <div className="repo-modal-header mb-4">
                <div className="d-flex align-items-start justify-content-between">
                  <div className="flex-grow-1">
                    <h4 className="repo-title mb-2">
                      <i className="fab fa-github me-2"></i>
                      {modalContent.name}
                    </h4>
                    {modalContent.description && (
                      <p className="repo-description text-muted mb-3">
                        {modalContent.description}
                      </p>
                    )}
                  </div>
                  <div className="repo-visibility-badge">
                    <span className={`badge ${modalContent.private ? 'bg-warning' : 'bg-success'}`}>
                      <i className={`fas ${modalContent.private ? 'fa-lock' : 'fa-globe'} me-1`}></i>
                      {modalContent.private ? 'Private' : 'Public'}
                    </span>
                  </div>
                </div>
              </div>

              {/* Repository Stats */}
              <div className="repo-stats-grid mb-4">
                <div className="row g-3">
                  <div className="col-md-3 col-6">
                    <div className="stat-card text-center p-3 bg-light rounded">
                      <i className="fas fa-star text-warning mb-2"></i>
                      <div className="stat-number">{modalContent.stargazers_count}</div>
                      <div className="stat-label">Stars</div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="stat-card text-center p-3 bg-light rounded">
                      <i className="fas fa-code-branch text-info mb-2"></i>
                      <div className="stat-number">{modalContent.forks_count}</div>
                      <div className="stat-label">Forks</div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="stat-card text-center p-3 bg-light rounded">
                      <i className="fas fa-eye text-primary mb-2"></i>
                      <div className="stat-number">{modalContent.watchers_count}</div>
                      <div className="stat-label">Watchers</div>
                    </div>
                  </div>
                  <div className="col-md-3 col-6">
                    <div className="stat-card text-center p-3 bg-light rounded">
                      <i className="fas fa-exclamation-circle text-danger mb-2"></i>
                      <div className="stat-number">{modalContent.open_issues_count}</div>
                      <div className="stat-label">Issues</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Repository Details */}
              <div className="repo-details mb-4">
                <div className="row">
                  <div className="col-md-6">
                    <div className="detail-item mb-3">
                      <strong><i className="fas fa-code me-2"></i>Primary Language:</strong>
                      {modalContent.language ? (
                        <span className="language-badge ms-2 badge bg-secondary">
                          {modalContent.language}
                        </span>
                      ) : (
                        <span className="text-muted ms-2">Not specified</span>
                      )}
                    </div>
                    <div className="detail-item mb-3">
                      <strong><i className="fas fa-calendar-alt me-2"></i>Created:</strong>
                      <span className="ms-2">{formatDate(modalContent.created_at)}</span>
                    </div>
                    <div className="detail-item mb-3">
                      <strong><i className="fas fa-sync-alt me-2"></i>Last Updated:</strong>
                      <span className="ms-2">{formatDate(modalContent.updated_at)}</span>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="detail-item mb-3">
                      <strong><i className="fas fa-hdd me-2"></i>Size:</strong>
                      <span className="ms-2">{formatBytes(modalContent.size * 1024)}</span>
                    </div>
                    <div className="detail-item mb-3">
                      <strong><i className="fas fa-balance-scale me-2"></i>License:</strong>
                      <span className="ms-2">
                        {modalContent.license ? modalContent.license.name : 'No license'}
                      </span>
                    </div>
                    <div className="detail-item mb-3">
                      <strong><i className="fas fa-code-branch me-2"></i>Default Branch:</strong>
                      <span className="ms-2">{modalContent.default_branch}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Topics/Tags */}
              {modalContent.topics && modalContent.topics.length > 0 && (
                <div className="repo-topics mb-4">
                  <strong className="mb-2 d-block">
                    <i className="fas fa-tags me-2"></i>Topics:
                  </strong>
                  <div className="topics-container">
                    {modalContent.topics.map((topic, index) => (
                      <span key={index} className="topic-tag badge bg-light text-dark me-2 mb-2">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="repo-actions d-flex gap-2 flex-wrap">
                <a
                  href={modalContent.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <i className="fab fa-github me-2"></i>View Repository
                </a>
                {modalContent.homepage && (
                  <a
                    href={modalContent.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-primary"
                  >
                    <i className="fas fa-external-link-alt me-2"></i>Live Demo
                  </a>
                )}
                <a
                  href={`${modalContent.html_url}/issues`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-secondary"
                >
                  <i className="fas fa-bug me-2"></i>Issues
                </a>
                                 {!modalContent.fork && (
                   <a
                     href={`${modalContent.html_url}/fork`}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="btn btn-outline-info"
                   >
                     <i className="fas fa-code-branch me-2"></i>Fork
                   </a>
                 )}
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
