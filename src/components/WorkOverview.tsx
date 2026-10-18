'use client';

import Link from 'next/link';
import MosaicGrid from './MosaicGrid';

export default function WorkOverview() {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    target.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    target.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  return (
    <section id="layanan">
      {/* Row 1: Custom SIM & ERP */}
      <div className="g g2">
        <div className="cell" onMouseMove={handleMouseMove}>
          <div className="lb">01 / custom.sim()</div>
          <div className="t">
            Sistem Informasi Manajemen (SIM), ERP, dan Pergudangan Kustom Sesuai Bisnis Anda.
          </div>
          <p className="txt" style={{ fontSize: '0.86rem', marginTop: -12 }}>
            Tinggalkan pencatatan manual yang rawan selisih. Kami membangun sistem terintegrasi
            mulai dari stok barang multi-gudang, kasir POS, absensi karyawan, hingga laporan keuangan otomatis.
          </p>
          <Link href="#sistem" className="ob" style={{ maxWidth: 260 }}>
            Lihat Contoh Sistem
          </Link>
        </div>

        <div className="img">
          <div className="ph" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--g)', fontWeight: 600 }}>● SISTEM_TERINTEGRASI</span>
              <span className="tag" style={{ margin: 0 }}>Multi-Cabang &amp; Cloud</span>
            </div>

            <div
              className="code-box"
              style={{
                background: '#0d1117',
                borderRadius: 6,
                padding: '16px 20px',
                color: '#e6edf3',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.74rem',
                lineHeight: 1.6,
                border: '1px solid #30363d',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                overflowX: 'auto',
              }}
            >
              <div style={{ color: '#8b949e', marginBottom: 6 }}>
                // Alur Data Operasional Bisnis Real-Time
              </div>
              <div>
                <span style={{ color: '#7ee787' }}>✔</span> modul-gudang:{' '}
                <span style={{ color: '#58a6ff' }}>stok otomatis sinkron</span> (scan barcode)
              </div>
              <div>
                <span style={{ color: '#7ee787' }}>✔</span> modul-kasir:{' '}
                <span style={{ color: '#58a6ff' }}>cetak struk thermal</span> + QRIS dinamis
              </div>
              <div>
                <span style={{ color: '#7ee787' }}>✔</span> modul-keuangan:{' '}
                <span style={{ color: '#58a6ff' }}>laba/rugi otomatis</span> rekap harian
              </div>
              <div>
                <span style={{ color: '#7ee787' }}>✔</span> hak-akses-staf:{' '}
                <span style={{ color: '#58a6ff' }}>role terproteksi</span> (admin/kasir/gudang)
              </div>
              <div style={{ marginTop: 8, color: '#f0883e' }}>
                → Dashboard Owner: Akses monitoring langsung dari HP &amp; Laptop
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem' }}>
              <span>DATABASE: POSTGRESQL / MYSQL</span>
              <span>01 / 03</span>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2: Web App & Mobile Apps */}
      <div className="g g2 row-reverse-mobile">
        <div className="img">
          <div className="ph" style={{ padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--g)', fontWeight: 600 }}>● WEB_AND_MOBILE_SYNC</span>
              <span className="tag" style={{ margin: 0 }}>Android &amp; Next.js</span>
            </div>

            <div
              className="code-box"
              style={{
                background: '#0d1117',
                borderRadius: 6,
                padding: '16px 20px',
                color: '#e6edf3',
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '0.74rem',
                lineHeight: 1.6,
                border: '1px solid #30363d',
                boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
                overflowX: 'auto',
              }}
            >
              <div style={{ color: '#8b949e', marginBottom: 6 }}>
                // Arsitektur Integrasi API &amp; WhatsApp Gateway
              </div>
              <div>
                <span style={{ color: '#d2a8ff' }}>const</span> order ={' '}
                <span style={{ color: '#79c0ff' }}>await</span>{' '}
                <span style={{ color: '#ffa657' }}>SistemCakraDev</span>.createTransaction(&#123;
              </div>
              <div style={{ paddingLeft: 16 }}>
                payment: <span style={{ color: '#a5d6ff' }}>&apos;qris_otomatis&apos;</span>,
              </div>
              <div style={{ paddingLeft: 16 }}>
                notifikasiWA: <span style={{ color: '#a5d6ff' }}>&apos;kirim_invoice_otomatis&apos;</span>,
              </div>
              <div style={{ paddingLeft: 16 }}>
                updateStok: <span style={{ color: '#a5d6ff' }}>&apos;realtime_all_branch&apos;</span>,
              </div>
              <div>&#125;);</div>
              <div style={{ marginTop: 6, color: '#7ee787' }}>
                // Notifikasi instan terkirim ke WhatsApp pelanggan dalam 1 detik
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem' }}>
              <span>SECURITY: ENKRIPSI JWT &amp; SSL</span>
              <span>02 / 03</span>
            </div>
          </div>
        </div>

        <div className="cell" onMouseMove={handleMouseMove}>
          <div className="lb">02 / web.mobile()</div>
          <div className="t">
            Aplikasi Web Enterprise &amp; Mobile Android yang Ringan, Cepat, dan Nyaman Digunakan.
          </div>
          <p className="txt" style={{ fontSize: '0.86rem', marginTop: -12 }}>
            Sistem dirancang dengan tampilan modern yang intuitif sehingga karyawan Anda dapat
            langsung menggunakannya tanpa kendala teknis yang rumit. Dilengkapi pelatihan staf gratis.
          </p>
          <Link href="#tech" className="ob" style={{ maxWidth: 260 }}>
            Lihat Teknologi yang Digunakan
          </Link>
        </div>
      </div>

      {/* Row 3: Payment Gateway & Full Ownership */}
      <div className="g g2">
        <div className="cell" onMouseMove={handleMouseMove}>
          <div className="lb">03 / garansi.source_code()</div>
          <div className="t">
            100% Hak Milik Source Code, Tanpa Biaya Berlangganan Tersembunyi, dan Garansi Bug.
          </div>
          <p className="txt" style={{ fontSize: '0.86rem', marginTop: -12 }}>
            Setiap sistem yang dibangun adalah milik penuh Anda tanpa keterikatan lisensi per-user.
            Didukung garansi perbaikan bug dan pendampingan teknis saat go-live operasional.
          </p>
          <Link href="#paket" className="ob" style={{ maxWidth: 260 }}>
            Lihat Estimasi Paket Biaya
          </Link>
        </div>

        <div className="img">
          <MosaicGrid cols={8} rows={6} seed={3} id="m1" />
        </div>
      </div>
    </section>
  );
}
