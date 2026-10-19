'use client';

import { useState, useRef } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function CollaborationTabs() {
  const tabs = PORTFOLIO_DATA.serviceTabs;
  const { whatsappNumber } = PORTFOLIO_DATA.personal;
  const [activeTabId, setActiveTabId] = useState(tabs[0].id);
  const panelRef = useRef<HTMLDivElement>(null);

  const activeTab = tabs.find((t) => t.id === activeTabId) || tabs[0];

  const handleTabChange = (tabId: string) => {
    setActiveTabId(tabId);
    if (typeof window === 'undefined') return;
    setTimeout(() => {
      if (panelRef.current) {
        const children = Array.from(panelRef.current.children) as HTMLElement[];
        children.forEach((child, i) => {
          child.animate(
            [
              { opacity: 0, transform: 'translateY(18px)' },
              { opacity: 1, transform: 'translateY(0)' },
            ],
            {
              duration: 450,
              delay: i * 70,
              easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
              fill: 'forwards',
            }
          );
        });
      }
    }, 10);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    target.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="paket">
      <div style={{ padding: '60px 28px 20px', background: 'var(--cd)', borderBottom: '1px solid var(--ln)' }}>
        <div className="lb" style={{ color: 'var(--g)', fontWeight: 600 }}>
          BIAYA TRANSPARAN // 100% HAK MILIK SOURCE CODE
        </div>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 700, letterSpacing: '-0.03em', marginTop: 8 }}>
          Estimasi Paket &amp; Biaya Pembuatan Sistem
        </h2>
        <p style={{ color: 'var(--mut)', fontSize: '0.92rem', marginTop: 6, maxWidth: 640 }}>
          Tanpa biaya lisensi bulanan per-user. Anda mendapatkan sistem siap pakai, pelatihan staf langsung, garansi resmi, dan source code penuh.
        </p>
      </div>

      <div className="tabs">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              className={`tab ${isActive ? 'on' : ''}`}
              data-t={tab.id}
              onClick={() => handleTabChange(tab.id)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div className="g g3 pn on" id={activeTabId} ref={panelRef}>
        {activeTab.items.map((item) => {
          const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            `Halo CakraDev, saya ingin konsultasi dan pesan paket sistem: ${item.title} (${item.tag})`
          )}`;

          return (
            <div key={item.id} className="card" onMouseMove={handleMouseMove}>
              <div>
                {item.duration && (
                  <span className="service-delivery-tag">
                    ⏱ {item.duration}
                  </span>
                )}
                <h3>{item.title}</h3>
                <p>{item.description}</p>

                {item.features && item.features.length > 0 && (
                  <ul className="service-feature-list">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="service-feature-item">
                        <span className="icon">✔</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
              <div style={{ marginTop: 'auto', paddingTop: 16 }}>
                <div className="pr">{item.tag}</div>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ob"
                  style={{ width: '100%', maxWidth: '100%', textAlign: 'center', display: 'block' }}
                >
                  {item.actionText} ↗
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
