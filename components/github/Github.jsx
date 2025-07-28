"use client";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";
import Modal from "./Modal";

export default function Github() {
  const [repositories, setRepositories] = useState([]);
  const [starredRepos, setStarredRepos] = useState([]);
  const [activeTab, setActiveTab] = useState("repositories");
  const [modalContent, setModalContent] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch user repositories
  const fetchRepositories = async () => {
    try {
      const response = await fetch('https://api.github.com/users/louisphilip/repos?sort=updated&per_page=20', {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        }
      });
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }
      
      const data = await response.json();
      return data.filter(repo => !repo.fork); // Exclude forked repositories
    } catch (error) {
      console.error('Error fetching repositories:', error);
      throw error;
    }
  };

  // Fetch starred repositories
  const fetchStarredRepositories = async () => {
    try {
      const response = await fetch('https://api.github.com/users/louisphilip/starred?per_page=20', {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        }
      });
      
      if (!response.ok) {
        throw new Error(`GitHub API error: ${response.status}`);
      }
      
      return await response.json();
    } catch (error) {
      console.error('Error fetching starred repositories:', error);
      throw error;
    }
  };

  useEffect(() => {
    const loadGitHubData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const [repos, starred] = await Promise.all([
          fetchRepositories(),
          fetchStarredRepositories()
        ]);
        
        setRepositories(repos);
        setStarredRepos(starred);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    loadGitHubData();
  }, []);

  const getCurrentItems = () => {
    return activeTab === "repositories" ? repositories : starredRepos;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getTechStack = (repo) => {
    const languages = repo.language ? [repo.language] : [];
    if (repo.topics && repo.topics.length > 0) {
      return [...languages, ...repo.topics.slice(0, 3)];
    }
    return languages;
  };

  if (loading) {
    return (
      <div className="bostami-page-content-wrap">
        <div className="section-wrapper pl-60 pr-60 pt-60">
          <div className="bostami-page-title-wrap mb-15">
            <h2 className="page-title">GitHub</h2>
          </div>
          <div className="loading-state">
            <i className="fab fa-github"></i>
            <h4>Loading Repositories</h4>
            <p>Fetching the latest GitHub repositories and starred projects...</p>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
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
          <div className="error-state">
            <i className="fas fa-exclamation-triangle"></i>
            <h4>Unable to Load Repositories</h4>
            <p>We're having trouble fetching GitHub data at the moment. Please try again later or visit my GitHub profile directly.</p>
            <a href="https://github.com/louisphilip" target="_blank" rel="noopener noreferrer" className="action-btn">
              <i className="fab fa-github"></i>
              View on GitHub
            </a>
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
            <p className="page-subtitle">Explore my open-source contributions and curated projects</p>
          </div>
        </div>

        <div className="section-wrapper pr-60 pl-60 mb-60">
          {/* Tab Navigation */}
          <div className="row mb-30">
            <div className="col-12">
              <ul className="fillter-btn-wrap buttonGroup isotop-menu-wrapper">
                <li
                  onClick={() => setActiveTab("repositories")}
                  className={`fillter-btn ${activeTab === "repositories" ? "is-checked" : ""}`}
                >
                  My Repositories ({repositories.length})
                </li>
                <li
                  onClick={() => setActiveTab("starred")}
                  className={`fillter-btn ${activeTab === "starred" ? "is-checked" : ""}`}
                >
                  Starred ({starredRepos.length})
                </li>
              </ul>
            </div>
          </div>

          {/* Repository Grid */}
          <div className="row">
            <div className="col-12">
              <div id="fillter-item-active" className="fillter-item-wrap">
                <AnimatePresence>
                  <ResponsiveMasonry
                    columnsCountBreakPoints={{
                      350: 1,
                      850: 2,
                      1200: 3,
                    }}
                  >
                    <Masonry gutter="20px">
                      {getCurrentItems().map((repo, index) => (
                        <motion.div
                          layout
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.5 }}
                          transition={{ duration: 0.3 }}
                          key={repo.id}
                          style={{ width: "100%" }}
                        >
                          <div className={`github-repo-card fillter-item ${index % 2 === 0 ? 'bg-prink' : 'bg-catkrill'}`}>
                            <div className="repo-header">
                              <h6 className="item-title">
                                <a 
                                  href={repo.html_url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="cursor-pointer text-decoration-none"
                                >
                                  {repo.name}
                                </a>
                              </h6>
                              <div className="repo-stats">
                                <span className="stat-item">
                                  <i className="fas fa-star"></i> {repo.stargazers_count}
                                </span>
                                <span className="stat-item">
                                  <i className="fas fa-code-branch"></i> {repo.forks_count}
                                </span>
                              </div>
                            </div>
                            
                            {repo.description && (
                              <p className="repo-description">{repo.description}</p>
                            )}
                            
                            <div className="repo-tech-stack">
                              {getTechStack(repo).map((tech, index) => (
                                <span key={index} className="tech-tag">
                                  {tech}
                                </span>
                              ))}
                            </div>
                            
                            <div className="repo-footer">
                              <span className="repo-date">
                                Updated {formatDate(repo.updated_at)}
                              </span>
                              <div className="repo-actions">
                                <a 
                                  href={repo.html_url} 
                                  target="_blank" 
                                  rel="noopener noreferrer"
                                  className="action-btn"
                                >
                                  <i className="fab fa-github"></i>
                                </a>
                                {repo.homepage && (
                                  <a 
                                    href={repo.homepage} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="action-btn"
                                  >
                                    <i className="fas fa-external-link-alt"></i>
                                  </a>
                                )}
                                <button
                                  className="action-btn"
                                  onClick={() => {
                                    setModalContent(repo);
                                    setShowModal(true);
                                  }}
                                >
                                  <i className="fas fa-info-circle"></i>
                                </button>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </Masonry>
                  </ResponsiveMasonry>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Modal */}
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
}