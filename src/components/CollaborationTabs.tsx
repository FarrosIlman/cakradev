'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function CollaborationTabs() {
  const tabs = PORTFOLIO_DATA.serviceTabs;
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
      <div className="lb" style={{ padding: '64px 28px 0' }}>
        biaya transparan / 100% hak milik source code tanpa biaya bulanan tersembunyi
      </div>
      <h2 className="sec" style={{ border: 0, paddingTop: 16 }}>
        paket-biaya-sistem/
      </h2>

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
        {activeTab.items.map((item) => (
          <div key={item.id} className="card" onMouseMove={handleMouseMove}>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
            <div>
              <div className="pr">{item.tag}</div>
              <Link
                href="#kontak"
                className="ob"
                style={{ width: '100%', maxWidth: '100%' }}
              >
                {item.actionText}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
