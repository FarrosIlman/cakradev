'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { PORTFOLIO_DATA } from '@/data/portfolioData';
import { scrambleText } from './MotionController';

export default function SelectedWork() {
  const projects = PORTFOLIO_DATA.projects;
  const [activeIndex, setActiveIndex] = useState(0);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const hostnameRef = useRef<HTMLDivElement>(null);

  const currentProject = projects[activeIndex];

  const triggerAnimation = (projectToAnimate?: typeof currentProject) => {
    if (typeof window === 'undefined') return;
    const ease = 'cubic-bezier(0.16, 1, 0.3, 1)';

    if (titleRef.current) {
      titleRef.current.animate(
        [
          { opacity: 0, transform: 'translateY(10px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
        { duration: 380, easing: ease, fill: 'forwards' }
      );
    }
    if (descRef.current) {
      descRef.current.animate(
        [
          { opacity: 0, transform: 'translateY(10px)' },
          { opacity: 1, transform: 'translateY(0)' },
        ],
        { duration: 380, easing: ease, fill: 'forwards' }
      );
    }
    if (mockupRef.current) {
      mockupRef.current.animate(
        [
          { transform: 'scale(0.96) translateY(8px)' },
          { transform: 'scale(1) translateY(0)' },
        ],
        { duration: 420, easing: 'cubic-bezier(0.34, 1.56, 0.64, 1)', fill: 'forwards' }
      );
    }
    if (hostnameRef.current) {
      const targetText = projectToAnimate?.title || currentProject.title;
      hostnameRef.current.setAttribute('data-txt', targetText);
      scrambleText(hostnameRef.current, targetText, 0.5);
    }
  };

  const handleSelect = (index: number) => {
    setActiveIndex(index);
    setTimeout(() => triggerAnimation(projects[index]), 10);
  };

  const handleNext = () => {
    const nextIdx = (activeIndex + 1) % projects.length;
    setActiveIndex(nextIdx);
    setTimeout(() => triggerAnimation(projects[nextIdx]), 10);
  };

  return (
    <section id="sistem">
      <h2 className="sec">portofolio-sistem/</h2>
      <div className="g g2 hl" style={{ padding: 0 }}>
        <div className="ls">
          <div className="ls-list">
            {projects.map((project, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={project.id}
                  className={`li ${isActive ? 'on' : ''}`}
                  onClick={() => handleSelect(idx)}
                >
                  <i>{project.id}</i>
                  <span>{project.code}</span>
                </button>
              );
            })}
          </div>
          <div className="ls-cta" style={{ padding: '20px 24px' }}>
            <Link href="#kontak" className="ob">
              Minta Demo Sistem Serupa
            </Link>
          </div>
        </div>

        <div style={{ padding: 0, borderRight: 0 }}>
          <div className="vid">
            <div className="pl">
              <div className="lb">preview_sistem/</div>
              <div className="browser-mockup" ref={mockupRef}>
                <div className="browser-top">
                  <div className="browser-dots" aria-hidden="true">
                    <span className="browser-dot dot-red" />
                    <span className="browser-dot dot-yellow" />
                    <span className="browser-dot dot-green" />
                  </div>
                  <div className="browser-address">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                    <span className="browser-url">
                      https://{currentProject.client}
                    </span>
                  </div>
                  <span className="browser-status-pill">
                    LIVE
                  </span>
                </div>
                <div className="browser-body">
                  <div
                    ref={hostnameRef}
                    id="bc"
                    style={{
                      color: 'var(--fg)',
                      fontWeight: 600,
                      marginBottom: 8,
                      fontSize: '0.85rem',
                    }}
                  >
                    {currentProject.title}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4 }}>
                    <span>kategori:</span>
                    <span style={{ color: 'var(--g)', fontWeight: 600 }}>
                      ● {currentProject.category || 'Sistem Bisnis'}
                    </span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                    <span>tipe_deployment:</span>
                    <span style={{ color: 'var(--fg)', fontWeight: 600 }}>
                      {currentProject.responseTime}
                    </span>
                  </div>

                  {currentProject.image && (
                    <div
                      style={{
                        marginTop: 12,
                        borderRadius: 4,
                        overflow: 'hidden',
                        border: '1px solid var(--ln)',
                        maxHeight: 140,
                      }}
                    >
                      <img
                        src={currentProject.image}
                        alt={currentProject.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          display: 'block',
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="lb" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>status: siap kustomisasi</span>
                <span style={{ color: 'var(--g)' }}>demo online</span>
              </div>
            </div>

            <div className="d">
              <div>
                <div className="lb" style={{ marginBottom: 8 }}>
                  fitur utama sistem
                </div>
                <h3 id="bh" ref={titleRef}>{currentProject.title}</h3>
                <p id="bp" ref={descRef}>{currentProject.description}</p>
                <div className="tag-list" id="btg">
                  {currentProject.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <button className="nxt" id="nx" onClick={handleNext}>
                Lihat Sistem Berikutnya →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
