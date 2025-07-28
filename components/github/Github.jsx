"use client";

import React, { useState, useEffect } from 'react';
import Modal from "./Modal";

export default function Github() {
  const [activeTab, setActiveTab] = useState('repos');
  const [repositories, setRepositories] = useState([]);
  const [starredRepos, setStarredRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  // Fetch repositories from GitHub API
  const fetchRepositories = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://api.github.com/users/louisphilip-s/repos?sort=updated&per_page=50');
      if (!response.ok) throw new Error('Failed to fetch repositories');
      const repos = await response.json();
      
      // Filter out forks and sort by stars/last updated
      const filteredRepos = repos
        .filter(repo => !repo.fork)
        .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
      
      setRepositories(filteredRepos);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching repositories:', error);
    }
  };

  // Fetch starred repositories
  const fetchStarredRepos = async () => {
    try {
      const response = await fetch('https://api.github.com/users/louisphilip-s/starred?per_page=30');
      if (!response.ok) throw new Error('Failed to fetch starred repositories');
      const starred = await response.json();
      setStarredRepos(starred);
    } catch (error) {
      console.error('Error fetching starred repositories:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await Promise.all([fetchRepositories(), fetchStarredRepos()]);
      setLoading(false);
    };
    fetchData();
  }, []);

  // Get programming languages/tech stack
  const getTechStack = (repo) => {
    const languages = [];
    if (repo.language) languages.push(repo.language);
    
    // Add some common tech based on repo topics
    if (repo.topics) {
      const techTopics = repo.topics.filter(topic => 
        ['react', 'nextjs', 'javascript', 'typescript', 'python', 'node', 'express', 'mongodb', 'firebase', 'tailwind'].includes(topic.toLowerCase())
      );
      languages.push(...techTopics);
    }
    
    return languages.slice(0, 3);
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 30) return `${diffDays} days ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  };

  // Format numbers (e.g., 1000 -> 1k)
  const formatNumber = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'k';
    }
    return num.toString();
  };

  // Get current repositories to display
  const currentRepos = activeTab === 'repos' ? repositories : starredRepos;

  if (loading) {
    return (
      <div className="bostami-page-content-wrap">
        <div className="section-wrapper pl-60 pr-60 pt-60">
          <div className="bostami-page-title-wrap mb-15">
            <h2 className="page-title">GitHub</h2>
          </div>
          <div className="loading-state text-center py-60">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading repositories...</p>
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
            <h2 className="page-title">GitHub</h2>
          </div>
          <div className="error-state text-center py-60">
            <i className="fa-brands fa-github fa-3x text-danger mb-3"></i>
            <h4>Unable to load repositories</h4>
            <p className="text-muted">{error}</p>
            <button 
              className="btn btn-outline-primary"
              onClick={() => {
                setError(null);
                fetchRepositories();
              }}
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
            <h2 className="page-title">GitHub</h2>
          </div>
          
          {/* Tab Navigation */}
          <div className="bostami-section-title-wrap mb-30">
            <ul className="fillter-btn-wrap buttonGroup isotop-menu-wrapper" style={{ 
              display: 'flex', 
              gap: '15px', 
              listStyle: 'none', 
              padding: 0, 
              margin: 0,
              justifyContent: 'center'
            }}>
              <li
                onClick={() => setActiveTab('repos')}
                className={`fillter-btn ${activeTab === 'repos' ? 'is-checked' : ''}`}
                style={{
                  cursor: 'pointer',
                  padding: '10px 20px',
                  borderRadius: '25px',
                  backgroundColor: activeTab === 'repos' ? '#007bff' : '#f8f9fa',
                  color: activeTab === 'repos' ? 'white' : '#666',
                  border: `1px solid ${activeTab === 'repos' ? '#007bff' : '#ddd'}`,
                  transition: 'all 0.3s ease',
                  fontSize: '14px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <i className="fa-regular fa-folder"></i>
                My Repositories ({repositories.length})
              </li>
              <li
                onClick={() => setActiveTab('starred')}
                className={`fillter-btn ${activeTab === 'starred' ? 'is-checked' : ''}`}
                style={{
                  cursor: 'pointer',
                  padding: '10px 20px',
                  borderRadius: '25px',
                  backgroundColor: activeTab === 'starred' ? '#007bff' : '#f8f9fa',
                  color: activeTab === 'starred' ? 'white' : '#666',
                  border: `1px solid ${activeTab === 'starred' ? '#007bff' : '#ddd'}`,
                  transition: 'all 0.3s ease',
                  fontSize: '14px',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <i className="fa-regular fa-star"></i>
                Starred ({starredRepos.length})
              </li>
            </ul>
          </div>
        </div>

        <div className="section-wrapper pr-60 pl-60 mb-60">
          {currentRepos.length === 0 ? (
            <div className="no-repos-state text-center py-60">
              <i className="fa-brands fa-github fa-3x text-muted mb-3"></i>
              <h4>No repositories found</h4>
              <p className="text-muted">
                {activeTab === 'repos' 
                  ? 'No public repositories available.'
                  : 'No starred repositories found.'
                }
              </p>
            </div>
          ) : (
            <div className="bostami-what-do-wrap mb-30">
              <div className="row">
                {currentRepos.map((repo, index) => (
                  <div key={repo.id} className="col-xxl-6 col-xl-6 col-lg-6 mb-30">
                    <div className="bostami-what-do-item bg-light-white-2">
                      {/* Repository Icon */}
                      <div className="icon" style={{ margin: "0", minWidth: "60px" }}>
                        <div style={{
                          width: "60px",
                          height: "60px",
                          backgroundColor: activeTab === 'repos' ? "#333" : "#ffc107",
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "white",
                          fontSize: "24px"
                        }}>
                          <i className={activeTab === 'repos' ? "fa-brands fa-github" : "fa-regular fa-star"}></i>
                        </div>
                      </div>

                      {/* Repository Content */}
                      <div className="text">
                        <h4 className="title">
                          <a 
                            href={repo.html_url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                          >
                            {repo.name}
                          </a>
                        </h4>

                        {/* Repository Description */}
                        {repo.description && (
                          <p style={{ 
                            margin: '10px 0 15px 0', 
                            lineHeight: '1.5',
                            fontSize: '14px',
                            color: '#666'
                          }}>
                            {repo.description}
                          </p>
                        )}

                        {/* Repository Stats */}
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '20px', 
                          marginBottom: '15px',
                          fontSize: '14px',
                          color: '#666'
                        }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <i className="fa-regular fa-star"></i>
                            {formatNumber(repo.stargazers_count)}
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <i className="fa-solid fa-code-branch"></i>
                            {formatNumber(repo.forks_count)}
                          </span>
                          <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                            <i className="fa-regular fa-clock"></i>
                            {formatDate(repo.updated_at)}
                          </span>
                        </div>

                        {/* Tech Stack */}
                        {getTechStack(repo).length > 0 && (
                          <div style={{ marginBottom: '15px' }}>
                            {getTechStack(repo).map((tech, techIndex) => (
                              <span 
                                key={techIndex}
                                style={{
                                  display: 'inline-block',
                                  backgroundColor: '#e3f2fd',
                                  color: '#1976d2',
                                  padding: '3px 8px',
                                  borderRadius: '12px',
                                  fontSize: '12px',
                                  fontWeight: '500',
                                  marginRight: '8px',
                                  marginBottom: '5px'
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}

                        {/* Repository Actions */}
                        <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                          <a 
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              backgroundColor: '#333',
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
                            onMouseOver={(e) => e.target.style.backgroundColor = '#555'}
                            onMouseOut={(e) => e.target.style.backgroundColor = '#333'}
                          >
                            <i className="fa-brands fa-github"></i>
                            View Code
                          </a>
                          {repo.homepage && (
                            <a 
                              href={repo.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{
                                backgroundColor: '#28a745',
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
                              onMouseOver={(e) => e.target.style.backgroundColor = '#218838'}
                              onMouseOut={(e) => e.target.style.backgroundColor = '#28a745'}
                            >
                              <i className="fa-solid fa-external-link"></i>
                              Live Demo
                            </a>
                          )}
                          <button
                            onClick={() => {
                              setModalContent(repo);
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
                            <i className="fa-regular fa-info-circle"></i>
                            Details
                          </button>
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