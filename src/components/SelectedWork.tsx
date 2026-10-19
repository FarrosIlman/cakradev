'use client';

import { useState, useRef, useEffect } from 'react';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioData';

export default function SelectedWork() {
  const allProjects = PORTFOLIO_DATA.projects;
  const categories = PORTFOLIO_DATA.categories || ['Semua'];
  const { whatsappNumber } = PORTFOLIO_DATA.personal;

  const [selectedCategory, setSelectedCategory] = useState('Semua');
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxData, setLightboxData] = useState<{
    image: string;
    title: string;
    client: string;
  } | null>(null);

  const showcaseRef = useRef<HTMLDivElement>(null);

  const filteredProjects =
    selectedCategory === 'Semua'
      ? allProjects
      : allProjects.filter((p) => p.category === selectedCategory);

  const currentProject: Project =
    filteredProjects[activeIndex] || filteredProjects[0] || allProjects[0];

  const triggerAnimation = () => {
    if (typeof window === 'undefined' || !showcaseRef.current) return;
    const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';
    showcaseRef.current.animate(
      [
        { opacity: 0.4, transform: 'translateY(8px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ],
      { duration: 320, easing: ease, fill: 'forwards' }
    );
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setActiveIndex(0);
    setTimeout(triggerAnimation, 20);
  };

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    setTimeout(triggerAnimation, 10);
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % filteredProjects.length;
    setActiveIndex(nextIdx);
    setTimeout(triggerAnimation, 10);
  };

  const handlePrev = () => {
    const prevIdx =
      (activeIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setActiveIndex(prevIdx);
    setTimeout(triggerAnimation, 10);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxData(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const projectWhatsAppUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Halo CakraDev, saya ingin konsultasi kebutuhan pembuatan sistem: ${currentProject.title}`
  )}`;

  return (
    <section id="sistem" style={{ borderTop: '1px solid var(--ln)' }}>
      {/* Header Section */}
      <div
        className="section-header-wrap"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: 16,
        }}
      >
        <div>
          <div className="lb" style={{ color: 'var(--g)', fontWeight: 600 }}>
            PORTOFOLIO SISTEM // TERUJI &amp; SIAP PAKAI
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.7rem, 3.2vw, 2.6rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              marginTop: 8,
              lineHeight: 1.2,
            }}
          >
            Portofolio Sistem Pilihan Klien
          </h2>
          <p
            style={{
              color: 'var(--mut)',
              fontSize: '0.92rem',
              marginTop: 8,
              maxWidth: 620,
              lineHeight: 1.6,
            }}
          >
            Solusi digital yang telah kami bangun untuk berbagai sektor bisnis. Anda dapat memesan sistem serupa atau mengkustomisasi fitur sesuai alur kerja Anda.
          </p>
        </div>

        {/* System Count Indicator */}
        <div
          className="lb"
          style={{
            background: 'var(--hv)',
            padding: '8px 14px',
            borderRadius: 6,
            border: '1px solid var(--ln)',
            fontSize: '0.72rem',
          }}
        >
          <span>Menampilkan: </span>
          <strong style={{ color: 'var(--fg)' }}>
            {filteredProjects.length} Sistem Terverifikasi
          </strong>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="portfolio-filter-bar">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          const count =
            cat === 'Semua'
              ? allProjects.length
              : allProjects.filter((p) => p.category === cat).length;
          return (
            <button
              key={cat}
              className={`portfolio-filter-btn ${isActive ? 'active' : ''}`}
              onClick={() => handleCategoryChange(cat)}
            >
              <span>{cat}</span>
              <span style={{ opacity: 0.65, fontSize: '0.68rem' }}>({count})</span>
            </button>
          );
        })}
      </div>

      {/* Spacious 2-Column Showcase Area */}
      <div ref={showcaseRef} className="portfolio-showcase-grid">
        {/* Left Column: Clean, Large Browser Mockup */}
        <div className="portfolio-mockup-col">
          {/* Browser Window Mockup */}
          <div
            style={{
              background: 'var(--cd)',
              border: '1px solid var(--ln)',
              borderRadius: 10,
              overflow: 'hidden',
              boxShadow: '0 20px 40px -15px rgba(0,0,0,0.08)',
              width: '100%',
            }}
          >
            {/* Browser Top Bar */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '10px 14px',
                background: 'var(--hv)',
                borderBottom: '1px solid var(--ln)',
                gap: 10,
              }}
            >
              <div style={{ display: 'flex', gap: 5, alignItems: 'center', flexShrink: 0 }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ff5f56', display: 'inline-block' }} />
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#ffbd2e', display: 'inline-block' }} />
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#27c93f', display: 'inline-block' }} />
              </div>
              <div
                className="browser-address"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  background: 'var(--cd)',
                  border: '1px solid var(--ln)',
                  borderRadius: 5,
                  padding: '3px 10px',
                  fontSize: '0.7rem',
                  color: 'var(--mut)',
                  fontFamily: 'JetBrains Mono, monospace',
                  minWidth: 0,
                  flex: 1,
                }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  https://{currentProject.client}
                </span>
              </div>
              <span
                style={{
                  fontSize: '0.62rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  color: 'var(--g)',
                  background: 'rgba(16, 185, 129, 0.12)',
                  padding: '3px 8px',
                  borderRadius: 4,
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                ● LIVE
              </span>
            </div>

            {/* Main Screenshot Container */}
            <div
              style={{
                position: 'relative',
                background: '#090d16',
                cursor: 'pointer',
                overflow: 'hidden',
                minHeight: 200,
                maxHeight: 380,
              }}
              onClick={() =>
                setLightboxData({
                  image: currentProject.image || '',
                  title: currentProject.title,
                  client: currentProject.client,
                })
              }
              title="Klik untuk memperbesar screenshot"
            >
              {currentProject.image ? (
                <img
                  src={currentProject.image}
                  alt={currentProject.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    maxHeight: 380,
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                  }}
                  className="portfolio-preview-img"
                />
              ) : (
                <div style={{ padding: 40, color: 'var(--mut)', textAlign: 'center' }}>
                  [ Screenshot Tampilan Sistem ]
                </div>
              )}
              <div className="portfolio-preview-overlay">
                <span>🔍 Klik untuk Perbesar</span>
              </div>
            </div>

            {/* Quick action beneath image */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '10px 14px',
                background: 'var(--cd)',
                borderTop: '1px solid var(--ln)',
                fontSize: '0.72rem',
                fontFamily: 'JetBrains Mono, monospace',
              }}
            >
              <button
                type="button"
                onClick={() =>
                  setLightboxData({
                    image: currentProject.image || '',
                    title: currentProject.title,
                    client: currentProject.client,
                  })
                }
                style={{
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--mut)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 4,
                  fontSize: '0.72rem',
                }}
              >
                🔍 Perbesar
              </button>

              {currentProject.liveDemoUrl && (
                <a
                  href={currentProject.liveDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: 'var(--fg)',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4,
                  }}
                >
                  Buka Demo ↗
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Right Column: Clean Business Solution Details */}
        <div className="portfolio-details-col">
          <div>
            {/* Category & Status Pill */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: 10,
              }}
            >
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.72rem',
                  color: 'var(--g)',
                  fontWeight: 600,
                }}
              >
                [ {currentProject.category.toUpperCase()} // {currentProject.year || '2026'} ]
              </span>
              <span
                style={{
                  fontSize: '0.72rem',
                  fontFamily: 'JetBrains Mono, monospace',
                  color: 'var(--mut)',
                }}
              >
                {currentProject.code}
              </span>
            </div>

            {/* System Title */}
            <h3
              style={{
                fontSize: 'clamp(1.4rem, 2.4vw, 1.95rem)',
                fontWeight: 700,
                letterSpacing: '-0.025em',
                lineHeight: 1.25,
                color: 'var(--fg)',
                marginBottom: 12,
              }}
            >
              {currentProject.title}
            </h3>

            {/* Business Solution Description */}
            <p
              style={{
                fontSize: '0.92rem',
                color: 'var(--mut)',
                lineHeight: 1.65,
                marginBottom: 20,
              }}
            >
              {currentProject.description}
            </p>

            {/* Key Modules / Features Checklist */}
            {currentProject.features && currentProject.features.length > 0 && (
              <div style={{ marginBottom: 20 }}>
                <div
                  className="lb"
                  style={{
                    fontSize: '0.7rem',
                    marginBottom: 8,
                    color: 'var(--fg)',
                    fontWeight: 600,
                  }}
                >
                  MODUL &amp; FITUR UTAMA:
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 8,
                  }}
                >
                  {currentProject.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: 10,
                        fontSize: '0.84rem',
                        lineHeight: 1.45,
                        color: 'var(--fg)',
                      }}
                    >
                      <span style={{ color: 'var(--g)', fontWeight: 700, flexShrink: 0 }}>
                        ✔
                      </span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Pills */}
            <div style={{ marginBottom: 12 }}>
              <div
                className="lb"
                style={{
                  fontSize: '0.68rem',
                  marginBottom: 6,
                  color: 'var(--mut)',
                }}
              >
                TEKNOLOGI SISTEM:
              </div>
              <div className="tag-list" style={{ gap: 6, margin: 0 }}>
                {currentProject.tags.map((tag) => (
                  <span key={tag} className="tag" style={{ margin: 0 }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="portfolio-action-row">
            <a
              href={projectWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="gb mobile-full-btn"
              style={{
                flex: '1 1 200px',
                textAlign: 'center',
                padding: '13px 20px',
                fontSize: '0.86rem',
              }}
            >
              Konsultasi Sistem Ini via WA
            </a>
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                type="button"
                onClick={handlePrev}
                className="ob"
                style={{
                  width: 44,
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                }}
                aria-label="Sistem Sebelumnya"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={handleNext}
                className="ob"
                style={{
                  width: 44,
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.2rem',
                }}
                aria-label="Sistem Berikutnya"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Horizontal Project Switcher Bar */}
      <div className="portfolio-bottom-switcher">
        {filteredProjects.map((proj, idx) => {
          const isSelected = idx === activeIndex;
          return (
            <button
              key={proj.id}
              onClick={() => handleSelect(idx)}
              style={{
                background: isSelected ? 'var(--hv)' : 'transparent',
                border: isSelected ? '1px solid var(--fg)' : '1px solid var(--ln)',
                borderRadius: 6,
                padding: '8px 14px',
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                minWidth: 200,
                flexShrink: 0,
                transition: 'all 0.2s ease',
              }}
            >
              <span
                style={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '0.74rem',
                  fontWeight: 700,
                  color: isSelected ? 'var(--g)' : 'var(--mut)',
                }}
              >
                {proj.id}
              </span>
              <div style={{ overflow: 'hidden' }}>
                <div
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: isSelected ? 600 : 500,
                    color: 'var(--fg)',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {proj.title}
                </div>
                <div
                  style={{
                    fontSize: '0.66rem',
                    color: 'var(--mut)',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  {proj.category}
                </div>
              </div>
            </button>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {lightboxData && (
        <div className="lightbox-backdrop" onClick={() => setLightboxData(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-header">
              <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', paddingRight: 8 }}>
                <strong>{lightboxData.title}</strong>
              </div>
              <button
                className="lightbox-close-btn"
                onClick={() => setLightboxData(null)}
                aria-label="Tutup preview"
              >
                ✕
              </button>
            </div>
            <div className="lightbox-body">
              <img src={lightboxData.image} alt={lightboxData.title} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
