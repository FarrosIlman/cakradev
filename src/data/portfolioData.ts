export interface Project {
  id: string;
  code: string;
  title: string;
  category: string;
  tags: string[];
  client: string;
  description: string;
  status: string;
  responseTime: string;
  image?: string;
  link?: string;
  liveDemoUrl?: string;
  features?: string[];
  year?: string;
}

export interface SkillCategory {
  number: string;
  category: string;
  title: string;
  subtitle: string;
}

export interface ServicePlanItem {
  id: string;
  title: string;
  description: string;
  tag: string;
  actionText: string;
  features?: string[];
  duration?: string;
}

export interface ServicePlanTab {
  id: string;
  label: string;
  items: ServicePlanItem[];
}

export interface TimelineItem {
  id: string;
  period: string;
  year: string;
  title: string;
  description: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role?: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "CakraDev — Jasa Pembuatan Sistem",
    shortYear: "CAKRADEV",
    logoText: "CAKRADEV",
    role: "Software House & Custom System Development",
    location: "Pekalongan, Jawa Tengah • Seluruh Indonesia",
    workType: "Jasa Pembuatan Sistem Informasi & Aplikasi Custom",
    focus: "Sistem Informasi, ERP, EMR Klinik, POS & Android",
    phone: "+62 858-7654-3210",
    whatsappNumber: "6285876543210",
    email: "cakradev.id@gmail.com",
    whatsapp:
      "https://wa.me/6285876543210?text=Halo%20CakraDev,%20saya%20ingin%20konsultasi%20pembuatan%20sistem",
    github: "https://github.com/cakradev",
    linkedin: "https://linkedin.com/company/cakradev",
    instagram: "https://instagram.com/cakradev",
    cvUrl: "https://portfolio-firdan.vercel.app/CV%20-%20Mohammad%20Firdan.pdf",
    companyProfileUrl:
      "https://wa.me/6285876543210?text=Halo%20CakraDev,%20saya%20ingin%20meminta%20katalog%20portfolio%20dan%20proposal%20CakraDev",
    avatarUrl: "https://portfolio-firdan.vercel.app/image2.png",
    aboutImageUrl: "https://portfolio-firdan.vercel.app/image4.png",
    officeHours: "Senin - Sabtu: 08.00 - 21.00 WIB (Online Response)",
    bio: "CakraDev adalah studio software engineering yang melayani jasa pembuatan sistem informasi manajemen (SIM), sistem rekam medis elektronik klinik (EMR), inventaris pergudangan, POS kasir, dan aplikasi mobile custom. Kami merancang solusi digital yang mempermudah operasional bisnis, mengotomatisasi alur kerja, dan meningkatkan efisiensi perusahaan Anda.",
    statement:
      "Ubah alur kerja manual bisnis Anda menjadi sistem digital modern yang otomatis, aman, dan mudah digunakan.",
    aboutHeading:
      "Membantu bisnis, UMKM, klinik, dan perusahaan bertransformasi ke sistem digital terintegrasi.",
    aboutDescription:
      "Kami berpengalaman merancang dan membangun sistem informasi manajemen (SIM), sistem rekam medis elektronik klinik (EMR), sistem inventaris pergudangan, POS kasir, hingga aplikasi mobile terintegrasi WhatsApp API dan payment gateway otomatis. Kode bersih, garansi maintenance, dan 100% hak milik source code untuk Anda.",
    stats: {
      dailyRequests: "50+",
      edgeLatency: "99.8%",
      uptimeSla: "100%",
      globalNodes: "24/7",
      stat1Label: "Sistem Telah Rilis",
      stat2Label: "Kepuasan Klien",
      stat3Label: "Source Code Milik Klien",
      stat4Label: "Garansi & Support",
    },
  },

  categories: [
    "Semua",
    "Kesehatan & EMR",
    "Inventaris & Gudang",
    "POS & Retail",
    "CRM & Properti",
    "Mobile Apps",
    "HRIS & Payroll",
  ],

  projects: [
    {
      id: "01",
      code: "01_emr-klinik",
      title: "Sistem Rekam Medis Elektronik (EMR Klinik Terpadu)",
      category: "Kesehatan & EMR",
      tags: ["Laravel 11", "React", "MySQL", "ICD-10", "SATUSEHAT Ready"],
      client: "medico-emr.cakradev.com",
      description:
        "Sistem informasi manajemen klinik rawat jalan terakreditasi: antrean pasien display TV, pencatatan rekam medis elektronik (RME) diagnosa ICD-10, resep apotek FIFO, kasir tagihan, dan laporan keuangan klinik.",
      status: "Siap Pakai & Kustom",
      responseTime: "Multi-Klinik Cloud",
      image: "https://portfolio-firdan.vercel.app/image4.png",
      link: "https://portfolio-firdan.vercel.app/",
      liveDemoUrl: "https://portfolio-firdan.vercel.app/",
      year: "2026",
      features: [
        "Pencatatan RME SOAP standar Permenkes & integrasi ICD-10",
        "Display antrean poliklinik otomatis & cetak nomor tiket",
        "Apotek farmasi dengan peringatan stok kadaluwarsa & restock",
        "Kasir pembayaran cetak invoice dan laporan pendapatan harian",
      ],
    },
    {
      id: "02",
      code: "02_inventaris-gudang",
      title: "Sistem Inventaris Pergudangan & Aset Multi-Cabang",
      category: "Inventaris & Gudang",
      tags: ["Next.js", "Laravel", "PostgreSQL", "Barcode Scanner", "PDF Report"],
      client: "masset-logistik.cakradev.com",
      description:
        "Platform pengelolaan inventaris barang dan pelacakan aset perusahaan multi-cabang. Dilengkapi fitur scan barcode/QR code, mutasi barang antar-lokasi, approval surat jalan, dan rekap depresiasi aset.",
      status: "Siap Pakai & Kustom",
      responseTime: "Multi-Gudang Sync",
      image: "https://portfolio-firdan.vercel.app/masset.png",
      link: "https://portfolio-firdan.vercel.app/",
      liveDemoUrl: "https://portfolio-firdan.vercel.app/",
      year: "2026",
      features: [
        "Scan barcode cepat dari HP atau scanner wireless",
        "Mutasi stok antar-cabang dengan sistem approval berjenjang",
        "Notifikasi stok menipis (reorder point alert) otomatis",
        "Cetak surat jalan resmi dan rekap stok opname PDF/Excel",
      ],
    },
    {
      id: "03",
      code: "03_pos-retail",
      title: "Sistem Kasir Cloud (POS) & Pembukuan Laba-Rugi Toko",
      category: "POS & Retail",
      tags: ["React", "Node.js", "Thermal Print", "QRIS Dinamis", "Offline Mode"],
      client: "kasir-pintar.cakradev.com",
      description:
        "Aplikasi kasir penjualan toko ritel, butik, dan cafe dengan antarmuka cepat. Cetak struk via printer thermal Bluetooth, pembukuan laba-rugi otomatis, dan integrasi pembayaran QRIS dinamis.",
      status: "Siap Pakai & Kustom",
      responseTime: "Realtime Sync",
      image: "https://portfolio-firdan.vercel.app/shoeshop.png",
      link: "https://portfolio-firdan.vercel.app/",
      liveDemoUrl: "https://portfolio-firdan.vercel.app/",
      year: "2026",
      features: [
        "Kasir instan dengan pencarian cepat nama & barcode produk",
        "Integrasi QRIS dinamis langsung verifikasi status pembayaran",
        "Cetak struk kasir Bluetooth thermal ukuran 58mm / 80mm",
        "Laporan laba-rugi bersih, omzet harian, dan produk terlaris",
      ],
    },
    {
      id: "04",
      code: "04_crm-properti",
      title: "Sistem CRM Penjualan & Portal Manajemen Properti",
      category: "CRM & Properti",
      tags: ["Next.js", "Tailwind", "Node.js", "KPR Simulator", "MongoDB"],
      client: "properti-crm.cakradev.com",
      description:
        "Platform CRM terpadu untuk developer perumahan dan agen properti. Kelola prospek pembeli (leads), jadwal survei lokasi, kalkulator simulasi KPR bank, dan monitoring ketersediaan kavling unit secara visual.",
      status: "Siap Pakai & Kustom",
      responseTime: "Cloud Ready",
      image: "https://portfolio-firdan.vercel.app/image2.png",
      link: "https://portfolio-firdan.vercel.app/",
      liveDemoUrl: "https://portfolio-firdan.vercel.app/",
      year: "2026",
      features: [
        "Siteplan denah kavling interaktif (Status: Booked, Terjual, Tersedia)",
        "Pipeline follow-up leads calon pembeli terstruktur",
        "Simulasi cicilan KPR dan generate Surat Pemesanan Rumah (SPR)",
        "Otomatisasi perhitungan komisi agen sales & marketing",
      ],
    },
    {
      id: "05",
      code: "05_mobile-travel",
      title: "Aplikasi Mobile Reservasi & Pemandu Wisata Tour",
      category: "Mobile Apps",
      tags: ["Kotlin Native", "Android", "Firebase", "Google Maps SDK", "Midtrans"],
      client: "waygo-travel.cakradev.com",
      description:
        "Aplikasi mobile Android native untuk agen tour & travel. Pemesanan paket wisata online, pembayaran tiket via payment gateway, notifikasi push jadwal keberangkatan, dan panduan peta wisata interaktif.",
      status: "Siap Pakai & Kustom",
      responseTime: "Android Native",
      image: "https://portfolio-firdan.vercel.app/image1.png",
      link: "https://portfolio-firdan.vercel.app/",
      liveDemoUrl: "https://portfolio-firdan.vercel.app/",
      year: "2026",
      features: [
        "Katalog paket wisata, open trip, & sewa armada transportasi",
        "Tiket digital dengan scan validator QR Code untuk check-in",
        "Pemberitahuan push notifikasi jadwal perjalanan & itinerary",
        "Peta interaktif titik jemput terhubung langsung ke Google Maps",
      ],
    },
    {
      id: "06",
      code: "06_hris-payroll",
      title: "Sistem HRIS, Presensi Selfie GPS & Penggajian Karyawan",
      category: "HRIS & Payroll",
      tags: ["Laravel 11", "Vue.js", "MySQL", "Geofencing GPS", "Auto Slip Gaji"],
      client: "pekalongan-hris.cakradev.com",
      description:
        "Sistem absensi pegawai berbasis geolokasi GPS selfie anti-fake GPS, pengajuan izin cuti & lembur online, rekap potongan keterlambatan, hingga otomatisasi kalkulasi gaji dan cetak slip gaji karyawan.",
      status: "Siap Pakai & Kustom",
      responseTime: "Role Based Access",
      image: "https://portfolio-firdan.vercel.app/pkl_trsm.png",
      link: "https://portfolio-firdan.vercel.app/",
      liveDemoUrl: "https://portfolio-firdan.vercel.app/",
      year: "2026",
      features: [
        "Presensi GPS radius kantor dengan verifikasi foto kamera selfie",
        "Pengajuan cuti, izin sakit, & lembur disetujui atasan via sistem",
        "Perhitungan otomatis potongan keterlambatan, BPJS, & tunjangan",
        "Generate slip gaji digital PDF terenkripsi kirim via WhatsApp",
      ],
    },
  ] as Project[],

  skills: [
    {
      number: "01 / WEB FRONTEND",
      category: "ANTARMUKA",
      title: "Next.js & React",
      subtitle: "Dashboard cepat, responsif di HP/laptop, SEO teroptimasi",
    },
    {
      number: "02 / APLIKASI MOBILE",
      category: "MOBILE",
      title: "Kotlin & Android Native",
      subtitle: "Aplikasi Android native, notifikasi push, performa enteng",
    },
    {
      number: "03 / BACKEND SISTEM",
      category: "SERVER",
      title: "Laravel 11 & Node.js",
      subtitle: "Logika bisnis kuat, REST API aman, arsitektur terstruktur",
    },
    {
      number: "04 / DATABASE",
      category: "DATABASE",
      title: "PostgreSQL & MySQL",
      subtitle: "Penyimpanan data terpusat, relasional, backup berkala",
    },
    {
      number: "05 / PAYMENT GATEWAY",
      category: "PEMBAYARAN",
      title: "Midtrans & Xendit",
      subtitle: "Pembayaran QRIS, transfer bank otomatis, e-wallet",
    },
    {
      number: "06 / OTOMASI PESAN",
      category: "INTEGRASI",
      title: "WhatsApp API & Email",
      subtitle: "Kirim invoice, tiket, dan notifikasi otomatis ke WA klien",
    },
    {
      number: "07 / KEAMANAN SISTEM",
      category: "SECURITY",
      title: "Enkripsi & Hak Akses",
      subtitle: "Role-based access (admin, kasir, staf), SSL aman",
    },
    {
      number: "08 / CLOUD DEPLOYMENT",
      category: "SERVER",
      title: "VPS Linux & Cloud",
      subtitle: "Setup domain kustom, cPanel / VPS, jaminan uptime tinggi",
    },
  ] as SkillCategory[],

  serviceTabs: [
    {
      id: "paket-umkm",
      label: "01 / Paket UMKM & Toko",
      items: [
        {
          id: "pos-toko",
          title: "sistem-kasir-pos/",
          description:
            "Aplikasi kasir penjualan toko / cafe. Input katalog produk, cetak struk kasir Bluetooth, laporan transaksi harian, dan pembayaran QRIS dinamis.",
          tag: "Mulai Rp 2.500.000",
          actionText: "Pesan Sistem Kasir",
          duration: "Pengerjaan 1-2 Minggu",
          features: [
            "Aplikasi kasir cepat & input barcode produk",
            "Cetak struk thermal Bluetooth 58mm/80mm",
            "Integrasi QRIS pembayaran instan",
            "Rekap pendapatan harian & laba kotor",
            "Garansi 3 bulan & training staf gratis",
          ],
        },
        {
          id: "company-profile",
          title: "web-profil-bisnis/",
          description:
            "Website profil bisnis profesional yang cepat dan modern. Tampilkan katalog jasa/produk, portofolio, peta Google Maps, dan tombol WhatsApp langsung.",
          tag: "Mulai Rp 1.500.000",
          actionText: "Pesan Website Profil",
          duration: "Pengerjaan 5-7 Hari",
          features: [
            "Desain custom responsif (HP, tablet, laptop)",
            "Optimasi SEO Google & kecepatan loading tinggi",
            "Katalog produk / portofolio layanan",
            "Integrasi WhatsApp chat langsung",
            "Gratis domain .com & hosting 1 tahun",
          ],
        },
        {
          id: "stok-gudang-basic",
          title: "sistem-stok-barang/",
          description:
            "Sistem pencatatan barang masuk & keluar, rekap supplier, peringatan stok menipis, dan cetak laporan stok berkala dalam format PDF/Excel.",
          tag: "Mulai Rp 3.000.000",
          actionText: "Pesan Sistem Stok",
          duration: "Pengerjaan 2 Minggu",
          features: [
            "Catat stok masuk, keluar, dan penyesuaian",
            "Notifikasi stok menipis otomatis",
            "Manajemen master data supplier & barang",
            "Export laporan stok ke Excel & PDF",
            "Source code 100% hak milik Anda",
          ],
        },
      ],
    },
    {
      id: "paket-bisnis",
      label: "02 / Paket Bisnis & Manajemen",
      items: [
        {
          id: "sim-klinik",
          title: "sistem-klinik-emr/",
          description:
            "Sistem informasi klinik dokter/gigi/umum: rekam medis elektronik (RME) terstandar, antrean pasien TV, inventaris obat farmasi, dan kasir.",
          tag: "Mulai Rp 5.500.000",
          actionText: "Konsultasi Sistem Klinik",
          duration: "Pengerjaan 3-4 Minggu",
          features: [
            "Pencatatan RME SOAP & standar ICD-10",
            "Antrean display poliklinik & cetak nomor tiket",
            "Manajemen stok obat apotek FIFO",
            "Kasir tagihan & rekap keuangan klinik",
            "Bimbingan staf & pendampingan go-live",
          ],
        },
        {
          id: "erp-custom",
          title: "erp-manajemen-bisnis/",
          description:
            "Sistem terpadu multi-cabang: inventaris gudang, kasir POS, laporan laba-rugi keuangan, hak akses admin/staf, dan dashboard analitik eksekutif.",
          tag: "Mulai Rp 7.500.000",
          actionText: "Konsultasi Sistem ERP",
          duration: "Pengerjaan 4-6 Minggu",
          features: [
            "Dashboard analitik omzet & performa cabang",
            "Sinkronisasi multi-gudang & mutasi barang",
            "Role terproteksi (Owner, Manajer, Kasir, Staf Gudang)",
            "Laporan laba-rugi & neraca otomatis",
            "Deployment ke VPS Cloud & backup database",
          ],
        },
        {
          id: "mobile-custom",
          title: "aplikasi-mobile-custom/",
          description:
            "Pembuatan aplikasi Android khusus pelanggan atau operasional lapangan. Terintegrasi REST API backend, notifikasi push, dan GPS realtime.",
          tag: "Mulai Rp 6.000.000",
          actionText: "Pesan Aplikasi Mobile",
          duration: "Pengerjaan 3-5 Minggu",
          features: [
            "Aplikasi Android native performa kencang",
            "Integrasi REST API backend terpusat",
            "Push notification & geolokasi GPS",
            "Bantuan rilis & upload ke Google Play Store",
            "Garansi perbaikan bug & maintenance",
          ],
        },
      ],
    },
    {
      id: "paket-enterprise",
      label: "03 / Enterprise & Kustom Penuh",
      items: [
        {
          id: "sistem-custom-penuh",
          title: "full-custom-system/",
          description:
            "Pengembangan sistem enterprise dari nol sesuai alur operasional unik perusahaan Anda. Termasuk analisis kebutuhan, arsitektur, dan testing menyeluruh.",
          tag: "Sesuai Kebutuhan",
          actionText: "Jadwalkan Konsultasi",
          duration: "Jadwal Fleksibel",
          features: [
            "Analisis bisnis & blueprint alur sistem lengkap",
            "Desain UI/UX eksklusif sesuai identitas brand",
            "Arsitektur database enterprise skala besar",
            "Integrasi API pihak ketiga (Payment, WA, ERP lain)",
            "Pelatihan menyeluruh seluruh departemen",
          ],
        },
        {
          id: "modernisasi-legacy",
          title: "migrasi-sistem-lama/",
          description:
            "Modernisasi sistem manual (buku/Excel) atau aplikasi desktop jadul ke sistem berbasis web cloud modern yang bisa diakses dari HP dan laptop mana saja.",
          tag: "Modernisasi Cloud",
          actionText: "Konsultasi Migrasi",
          duration: "Sesuai Kompleksitas",
          features: [
            "Audit & pembersihan data lama (data cleaning)",
            "Migrasi database lama ke arsitektur modern",
            "Antarmuka baru yang jauh lebih mudah digunakan",
            "Akses aman kapan saja dari HP, tablet, laptop",
            "Tanpa kehilangan riwayat data historis",
          ],
        },
        {
          id: "maintenance-support",
          title: "pemeliharaan-berkala/",
          description:
            "Layanan perawatan sistem rutin: backup database mingguan, update patch keamanan server, penambahan fitur minor, dan bantuan teknis prioritas.",
          tag: "Retainer Bulanan",
          actionText: "Pilih Maintenance",
          duration: "Kontrak Bulanan / Tahunan",
          features: [
            "Backup database otomatis berkala ke cloud terpisah",
            "Monitoring server uptime & performa 24/7",
            "Dukungan teknis prioritas via grup WhatsApp khusus",
            "Update patch keamanan berkala",
            "Penambahan fitur minor tanpa biaya proyek baru",
          ],
        },
      ],
    },
  ] as ServicePlanTab[],

  timeline: [
    {
      id: "alur-1",
      period: "// TAHAP 01",
      year: "Konsultasi",
      title: "Analisis Kebutuhan & Perumusan Alur Sistem",
      description:
        "Diskusi mendalam mengenai masalah alur kerja bisnis Anda, menentukan daftar fitur yang diperlukan, dan menyepakati estimasi waktu serta rincian biaya yang transparan.",
    },
    {
      id: "alur-2",
      period: "// TAHAP 02",
      year: "Desain UI/UX",
      title: "Perancangan Mockup & Alur Database",
      description:
        "Merancang antarmuka sistem yang modern, rapi, dan mudah dipahami oleh staf Anda, serta menyusun struktur database yang aman dan teruji.",
    },
    {
      id: "alur-3",
      period: "// TAHAP 03",
      year: "Pengerjaan",
      title: "Coding Sistem & Update Progres Mingguan",
      description:
        "Pengembangan sistem dengan standar kode bersih (clean code). Klien mendapatkan link demo untuk memantau langsung perkembangan sistem setiap minggu.",
    },
    {
      id: "alur-4",
      period: "// TAHAP 04",
      year: "Go-Live",
      title: "Testing, Training Staf & Serah Terima Source Code",
      description:
        "Uji coba menyeluruh bebas bug, pelatihan langsung cara penggunaan sistem untuk seluruh tim Anda, instalasi ke cloud server, dan garansi maintenance.",
    },
  ] as TimelineItem[],

  testimonials: [
    {
      id: "testi-1",
      quote:
        "Sistem manajemen klinik buatan CakraDev sangat membantu operasional kami. Antrean pasien jadi tertib, data rekam medis rapi tercatat, dan laporan keuangan bisa dilihat realtime dari HP.",
      author: "dr. Hendra Prasetyo",
      role: "Pemilik Klinik Sehat Bersama",
    },
    {
      id: "testi-2",
      quote:
        "Sebelumnya pencatatan stok gudang kami manual pakai buku dan sering selisih. Setelah dibuatkan sistem inventaris oleh CakraDev, mutasi barang antar-cabang terpantau akurat 100%.",
      author: "Budi Santoso",
      role: "Direktur Operasional CV Logistik Makmur",
    },
    {
      id: "testi-3",
      quote:
        "Pengerjaan tepat waktu, tim CakraDev komunikatif dan sabar saat training staf kami. Source code diserahkan penuh dan after-sales support-nya sangat responsif.",
      author: "Rina Kusuma",
      role: "Owner Retail Fashion & Kasir Multi-Store",
    },
  ] as Testimonial[],
};
