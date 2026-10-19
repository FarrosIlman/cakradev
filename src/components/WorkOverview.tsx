'use client';

import Link from 'next/link';

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
      <div className="work-row">
        <div className="work-content" onMouseMove={handleMouseMove}>
          <div className="lb" style={{ color: 'var(--g)', fontWeight: 600 }}>
            01 // SOLUSI OPERASIONAL
          </div>
          <div className="t">
            Sistem Informasi Manajemen (SIM), ERP, &amp; Inventaris Gudang Kustom
          </div>
          <p className="txt" style={{ fontSize: '0.88rem' }}>
            Tinggalkan pencatatan manual di buku atau spreadsheet yang rentan selisih dan lambat. Kami membangun sistem digital terintegrasi mulai dari stok barang multi-gudang, kasir toko POS, hingga pembukuan laba-rugi otomatis.
          </p>
          <div className="work-cta-desktop">
            <Link href="#sistem" className="ob" style={{ maxWidth: 260 }}>
              Lihat Contoh Sistem
            </Link>
          </div>
        </div>

        <div className="work-preview">
          <div className="ph">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--g)', fontWeight: 600 }}>● ARSITEKTUR TERINTEGRASI</span>
              <span className="tag" style={{ margin: 0 }}>Multi-Cabang &amp; Cloud</span>
            </div>

            <div className="work-card-inner">
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: 'var(--mut)' }}>
                // Alur Data Operasional Bisnis Real-Time
              </div>
              <div className="work-feature-item">
                <span style={{ color: 'var(--g)', fontWeight: 700 }}>✔</span>
                <span><strong>Modul Gudang:</strong> Stok otomatis tersinkron saat transaksi kasir</span>
              </div>
              <div className="work-feature-item">
                <span style={{ color: 'var(--g)', fontWeight: 700 }}>✔</span>
                <span><strong>Modul Kasir POS:</strong> Cetak struk printer Bluetooth &amp; QRIS dinamis</span>
              </div>
              <div className="work-feature-item">
                <span style={{ color: 'var(--g)', fontWeight: 700 }}>✔</span>
                <span><strong>Modul Keuangan:</strong> Rekap omzet, HPP, &amp; laba bersih otomatis</span>
              </div>
              <div className="work-feature-item">
                <span style={{ color: 'var(--g)', fontWeight: 700 }}>✔</span>
                <span><strong>Hak Akses:</strong> Pembagian wewenang aman (Owner, Kasir, Gudang)</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--mut)' }}>
              <span>DATABASE: POSTGRESQL / MYSQL</span>
              <span>01 / 03</span>
            </div>
          </div>
        </div>

        <div className="work-cta-mobile">
          <Link href="#sistem" className="ob mobile-full-btn">
            Lihat Contoh Sistem
          </Link>
        </div>
      </div>

      {/* Row 2: Web App & Mobile Apps (Alternating on desktop) */}
      <div className="work-row work-row-alternate">
        <div className="work-content" onMouseMove={handleMouseMove}>
          <div className="lb" style={{ color: 'var(--g)', fontWeight: 600 }}>
            02 // PENGALAMAN PENGGUNA
          </div>
          <div className="t">
            Aplikasi Web Enterprise &amp; Mobile Android yang Ringan dan Cepat
          </div>
          <p className="txt" style={{ fontSize: '0.88rem' }}>
            Sistem dirancang dengan tampilan modern dan alur kerja yang mudah dipelajari, sehingga karyawan Anda dapat langsung menggunakannya tanpa kendala teknis yang rumit. Dilengkapi panduan dan pelatihan staf gratis.
          </p>
          <div className="work-cta-desktop">
            <Link href="#tech" className="ob" style={{ maxWidth: 260 }}>
              Eksplorasi Teknologi
            </Link>
          </div>
        </div>

        <div className="work-preview">
          <div className="ph">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--g)', fontWeight: 600 }}>● WEB &amp; ANDROID SYNC</span>
              <span className="tag" style={{ margin: 0 }}>Next.js &amp; Kotlin</span>
            </div>

            <div className="work-card-inner">
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: 'var(--mut)' }}>
                // Otomatisasi Notifikasi &amp; Pembayaran Digital
              </div>
              <div className="work-feature-item">
                <span style={{ color: 'var(--g)', fontWeight: 700 }}>✔</span>
                <span><strong>WhatsApp Gateway:</strong> Kirim invoice &amp; tiket otomatis ke WhatsApp klien</span>
              </div>
              <div className="work-feature-item">
                <span style={{ color: 'var(--g)', fontWeight: 700 }}>✔</span>
                <span><strong>Payment Gateway:</strong> Pembayaran QRIS &amp; Transfer Bank terverifikasi instan</span>
              </div>
              <div className="work-feature-item">
                <span style={{ color: 'var(--g)', fontWeight: 700 }}>✔</span>
                <span><strong>Mobile Friendly:</strong> Tampilan responsif nyaman diakses dari HP &amp; laptop</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--mut)' }}>
              <span>SECURITY: ENKRIPSI JWT &amp; SSL</span>
              <span>02 / 03</span>
            </div>
          </div>
        </div>

        <div className="work-cta-mobile">
          <Link href="#tech" className="ob mobile-full-btn">
            Eksplorasi Teknologi
          </Link>
        </div>
      </div>

      {/* Row 3: Full Ownership & Warranty */}
      <div className="work-row">
        <div className="work-content" onMouseMove={handleMouseMove}>
          <div className="lb" style={{ color: 'var(--g)', fontWeight: 600 }}>
            03 // KEAMANAN INVESTASI
          </div>
          <div className="t">
            100% Hak Milik Source Code, Tanpa Biaya Lisensi Bulanan, dan Bergaransi
          </div>
          <p className="txt" style={{ fontSize: '0.88rem' }}>
            Setiap sistem yang dibangun adalah milik penuh perusahaan Anda. Kode program diserahkan sepenuhnya tanpa keterikatan lisensi per-user bulanan. Didukung garansi perbaikan bug dan pendampingan saat go-live.
          </p>
          <div className="work-cta-desktop">
            <Link href="#paket" className="ob" style={{ maxWidth: 260 }}>
              Lihat Paket &amp; Biaya
            </Link>
          </div>
        </div>

        <div className="work-preview">
          <div className="ph">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ color: 'var(--g)', fontWeight: 600 }}>● STANDAR PENGEMBANGAN</span>
              <span className="tag" style={{ margin: 0 }}>Garansi Resmi</span>
            </div>

            <div className="work-card-inner">
              <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '0.72rem', color: 'var(--mut)' }}>
                // Jaminan Kualitas &amp; Kepemilikan Sistem
              </div>
              <div className="work-feature-item">
                <span style={{ color: 'var(--g)', fontWeight: 700 }}>✔</span>
                <span><strong>Source Code Lengkap:</strong> Diserahkan 100% ke repositori klien</span>
              </div>
              <div className="work-feature-item">
                <span style={{ color: 'var(--g)', fontWeight: 700 }}>✔</span>
                <span><strong>Bebas Lisensi Bulanan:</strong> Tidak ada tagihan sewa software berkala</span>
              </div>
              <div className="work-feature-item">
                <span style={{ color: 'var(--g)', fontWeight: 700 }}>✔</span>
                <span><strong>Garansi Bug:</strong> Bantuan perbaikan prioritas selama masa garansi</span>
              </div>
              <div className="work-feature-item">
                <span style={{ color: 'var(--g)', fontWeight: 700 }}>✔</span>
                <span><strong>Training Staf:</strong> Bimbingan langsung cara penggunaan sampai lancar</span>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: 'var(--mut)' }}>
              <span>KONTRAK RESMI &amp; INVOICE</span>
              <span>03 / 03</span>
            </div>
          </div>
        </div>

        <div className="work-cta-mobile">
          <Link href="#paket" className="ob mobile-full-btn">
            Lihat Paket &amp; Biaya
          </Link>
        </div>
      </div>
    </section>
  );
}
