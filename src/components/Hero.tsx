'use client';

import { PORTFOLIO_DATA } from '@/data/portfolioData';

export default function Hero() {
  const { location, stats, whatsapp } = PORTFOLIO_DATA.personal;

  return (
    <header id="top" style={{ borderBottom: '1px solid var(--ln)' }}>
      {/* Studio Header Badge */}
      <div
        style={{
          padding: '16px 20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 10,
          borderBottom: '1px solid var(--ln)',
          background: 'var(--cd)',
        }}
      >
        <div className="lb" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ color: 'var(--g)', fontWeight: 700 }}>●</span>
          <span>STUDIO SOFTWARE ENGINEERING // {location}</span>
        </div>
        <div
          className="lb"
          style={{
            color: 'var(--g)',
            fontWeight: 600,
            background: 'rgba(16, 185, 129, 0.08)',
            padding: '4px 8px',
            borderRadius: 4,
            border: '1px solid rgba(16, 185, 129, 0.2)',
            fontSize: '0.65rem',
          }}
        >
          STATUS: SIAP MENERIMA PROYEK BARU
        </div>
      </div>

      {/* Main Hero Statement */}
      <div className="hero-container">
        <h1 className="hero-headline">
          Bangun Sistem Informasi &amp; Aplikasi Kustom untuk Efisiensi Bisnis Anda.
        </h1>

        <p className="hero-description">
          CakraDev merancang dan membangun sistem informasi manajemen (SIM), sistem rekam medis elektronik klinik (EMR), inventaris gudang, kasir POS, dan aplikasi mobile enterprise. Kode rapi, teruji, <strong>100% hak milik source code</strong> untuk Anda, dan didukung garansi resmi.
        </p>

        <div className="hero-btn-row">
          <a
            className="gb"
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Konsultasikan Kebutuhan Sistem Anda
          </a>
          <a
            className="ob"
            href="#sistem"
          >
            Lihat Portofolio Sistem
          </a>
        </div>
      </div>

      {/* 4 Pillars of Trust / KPI Stats */}
      <div className="g g4 hero-stats-grid">
        <div className="hero-stat-card">
          <div className="lb">PORTOFOLIO RILIS</div>
          <div className="hero-stat-num">{stats.dailyRequests}</div>
          <div className="hero-stat-sub">Sistem aktif digunakan klien</div>
        </div>

        <div className="hero-stat-card">
          <div className="lb">KEPUASAN KLIEN</div>
          <div className="hero-stat-num" style={{ color: 'var(--g)' }}>{stats.edgeLatency}</div>
          <div className="hero-stat-sub">Ulasan positif &amp; repeat order</div>
        </div>

        <div className="hero-stat-card">
          <div className="lb">HAK CIPTA PENUH</div>
          <div className="hero-stat-num">{stats.uptimeSla}</div>
          <div className="hero-stat-sub">Source code diserahkan 100%</div>
        </div>

        <div className="hero-stat-card">
          <div className="lb">GARANSI &amp; SUPPORT</div>
          <div className="hero-stat-num">{stats.globalNodes}</div>
          <div className="hero-stat-sub">Perbaikan bug &amp; training staf</div>
        </div>
      </div>
    </header>
  );
}
