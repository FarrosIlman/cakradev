'use client';

import DinoRunner from './DinoRunner';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Hero() {
  const { shortYear, location, workType, focus, bio, statement, stats } =
    PORTFOLIO_DATA.personal;

  return (
    <header id="top">
      <div className="wm">{shortYear}</div>

      <div className="g g3 hero">
        <div className="lb">
          software-house 2026 / {location}
          <br />
          <br />
          <span>{workType}</span>
        </div>
        <div className="txt">{bio}</div>
        <div
          className="lb hero-status"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            color: 'var(--fg)',
            textAlign: 'right',
            gap: 4,
          }}
        >
          <span>fokus: {focus}</span>
          <span style={{ color: 'var(--g)', fontWeight: 600 }}>
            ● status: siap menerima proyek baru
          </span>
        </div>
      </div>

      <div className="g g2 hero-action-row" style={{ borderTop: 0 }}>
        <div className="big" style={{ borderBottom: 0 }}>
          bangun-sistem-digital/
        </div>
        <div style={{ padding: 0 }}>
          <a
            className="gb hero-cta"
            href="#kontak"
            style={{
              width: '100%',
              height: '100%',
              minHeight: 84,
              padding: '0 28px',
            }}
          >
            Konsultasikan Kebutuhan Sistem Anda
          </a>
        </div>
      </div>

      <DinoRunner />

      <p className="stm">{statement}</p>

      {/* Software House KPI Metrics Bar */}
      <div className="g g4" style={{ background: 'var(--cd)' }}>
        <div>
          <div className="lb">PORTOFOLIO RILIS</div>
          <div
            style={{
              fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              marginTop: 8,
              color: 'var(--fg)',
            }}
          >
            {stats.dailyRequests}
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--mut)', marginTop: 4 }}>
            {stats.stat1Label || 'Sistem Berhasil Rilis'}
          </div>
        </div>
        <div>
          <div className="lb">KEPUASAN KLIEN</div>
          <div
            style={{
              fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              marginTop: 8,
              color: 'var(--g)',
            }}
          >
            {stats.edgeLatency}
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--mut)', marginTop: 4 }}>
            {stats.stat2Label || 'Ulasan Positif Bisnis'}
          </div>
        </div>
        <div>
          <div className="lb">HAK CIPTA PENUH</div>
          <div
            style={{
              fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              marginTop: 8,
              color: 'var(--fg)',
            }}
          >
            {stats.uptimeSla}
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--mut)', marginTop: 4 }}>
            {stats.stat3Label || 'Source Code Milik Anda'}
          </div>
        </div>
        <div>
          <div className="lb">DUKUNGAN TEKNIS</div>
          <div
            style={{
              fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              marginTop: 8,
              color: 'var(--fg)',
            }}
          >
            {stats.globalNodes}
          </div>
          <div style={{ fontSize: '0.72rem', color: 'var(--mut)', marginTop: 4 }}>
            {stats.stat4Label || 'Garansi & Maintenance'}
          </div>
        </div>
      </div>
    </header>
  );
}
