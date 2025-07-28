'use client';

import React, { useState } from 'react';
import { resourcesData, resourceCategories } from '@/data/resources';

export default function Resources() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredResources = resourcesData.filter(resource => {
    const matchesCategory =
      selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.tags.some(tag =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

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
              Curated Resources
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
              A carefully curated collection of tools, resources, and links I
              find valuable for creators and developers
            </p>
          </div>
        </div>

        <div className='section-wrapper pr-60 pl-60 mb-30'>
          {/* Search and Filter Section */}
          <div className='row mb-40'>
            <div className='col-lg-6'>
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
                    placeholder='Search resources...'
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
            <div className='col-lg-6'>
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
                    {resourceCategories.map(category => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Resources Grid */}
          <div className='row'>
            {filteredResources.map(resource => (
              <div key={resource.id} className='col-lg-6 col-md-6 mb-30'>
                <div
                  className='resource-card'
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
                    <div className='resource-header mb-20'>
                      <div className='d-flex align-items-center justify-content-between mb-15'>
                        <div className='d-flex align-items-center'>
                          <div
                            style={{
                              width: '50px',
                              height: '50px',
                              borderRadius: '12px',
                              background: 'var(--gradient-primary)',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              marginRight: '15px',
                            }}
                          >
                            <i
                              className={`${resource.icon}`}
                              style={{
                                fontSize: '24px',
                                color: 'white',
                              }}
                            ></i>
                          </div>
                          <span
                            className='badge'
                            style={{
                              fontSize: '12px',
                              padding: '8px 16px',
                              borderRadius: '25px',
                              backgroundColor: 'var(--light-white)',
                              color: 'var(--theme-primary)',
                              fontWeight: '600',
                              border: '1px solid var(--light-white-2)',
                            }}
                          >
                            {resource.category}
                          </span>
                        </div>
                      </div>
                      <h5
                        className='resource-title mb-15'
                        style={{
                          fontSize: '22px',
                          fontWeight: '700',
                          color: 'var(--body-heading)',
                          margin: '0',
                          lineHeight: '1.3',
                        }}
                      >
                        {resource.title}
                      </h5>
                    </div>

                    <div
                      className='resource-description mb-25'
                      style={{
                        fontSize: '16px',
                        color: 'var(--body-text)',
                        lineHeight: '1.7',
                        flex: '1',
                      }}
                    >
                      {resource.description}
                    </div>

                    <div className='resource-footer'>
                      <div className='resource-tags mb-20'>
                        {resource.tags.map((tag, index) => (
                          <span
                            key={index}
                            className='badge me-2 mb-2'
                            style={{
                              fontSize: '12px',
                              padding: '8px 12px',
                              borderRadius: '15px',
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

                      <a
                        href={resource.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='btn btn-primary btn-sm'
                        style={{
                          padding: '14px 24px',
                          fontSize: '15px',
                          borderRadius: '14px',
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          background: 'var(--gradient-primary)',
                          color: 'white',
                          fontWeight: '600',
                          border: 'none',
                          boxShadow: 'var(--shadow-light)',
                          transition: 'all 0.3s ease',
                          gap: '8px',
                        }}
                      >
                        <i className='fa-light fa-external-link'></i>
                        Visit Resource
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
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
                  className='fa-light fa-search'
                  style={{ fontSize: '32px', color: 'var(--theme-neutral)' }}
                ></i>
              </div>
              <h4
                style={{ color: 'var(--body-heading)', marginBottom: '10px' }}
              >
                No resources found
              </h4>
              <p style={{ color: 'var(--body-text)', fontSize: '16px' }}>
                Try adjusting your search criteria or category filter.
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
