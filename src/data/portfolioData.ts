export interface Project {
  id: string;
  code: string;
  title: string;
  tags: string[];
  client: string;
  description: string;
  status: string;
  responseTime: string;
  image?: string;
  link?: string;
  category?: string;
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
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "CakraDev — Jasa Pembuatan Sistem",
    shortYear: "CAKRADEV",
    logoText: "CD//26",
    role: "Software House & Custom System Development",
    location: "Pekalongan, Jawa Tengah • Seluruh Indonesia",
    workType: "Jasa Pembuatan Sistem & Aplikasi Custom",
    focus: "Sistem Informasi, ERP, Web App & Mobile Apps",
    bio: "CakraDev adalah studio software engineering yang melayani jasa pembuatan sistem informasi, aplikasi web enterprise, dan aplikasi mobile custom. Kami merancang solusi digital yang mempermudah operasional bisnis, mengotomatisasi alur kerja, dan meningkatkan efisiensi perusahaan Anda.",
    statement: "Ubah alur kerja manual bisnis Anda menjadi sistem digital modern yang otomatis, aman, dan mudah digunakan.",
    aboutHeading: "Membantu bisnis, UMKM, klinik, dan perusahaan bertransformasi ke sistem digital terintegrasi.",
    aboutDescription:
      "Kami berpengalaman merancang dan membangun sistem informasi manajemen (SIM), sistem rekam medis elektronik klinik (EMR), sistem inventaris pergudangan, POS kasir, hingga aplikasi mobile terintegrasi WhatsApp API dan payment gateway otomatis. Kode bersih, garansi maintenance, dan 100% hak milik source code untuk Anda.",
    email: "cakradev.id@gmail.com",
    whatsapp: "https://wa.me/6285876543210?text=Halo%20CakraDev,%20saya%20ingin%20konsultasi%20pembuatan%20sistem",
    github: "https://github.com/cakradev",
    linkedin: "https://linkedin.com/company/cakradev",
    instagram: "https://instagram.com/cakradev",
    cvUrl: "https://portfolio-firdan.vercel.app/CV%20-%20Mohammad%20Firdan.pdf",
    avatarUrl: "https://portfolio-firdan.vercel.app/image2.png",
    aboutImageUrl: "https://portfolio-firdan.vercel.app/image4.png",
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

  projects: [
    {
      id: "01",
      code: "01_sistem-medico",
      title: "Sistem Rekam Medis Elektronik (EMR Klinik)",
      tags: ["PHP", "Laravel", "MySQL", "Tailwind", "REST API"],
      client: "medico-emr.app",
      description:
        "Sistem informasi manajemen klinik terpadu: antrean pasien realtime, pencatatan rekam medis digital (diagnosa ICD-10), resep obat farmasi, kasir, dan laporan keuangan klinik.",
      status: "siap_pakai",
      responseTime: "Multi-Klinik",
      image: "https://portfolio-firdan.vercel.app/image4.png",
      link: "https://portfolio-firdan.vercel.app/",
      category: "Sistem Kesehatan",
    },
    {
      id: "02",
      code: "02_masset-gudang",
      title: "Sistem Manajemen Inventaris & Aset Multi-Gudang",
      tags: ["React", "Laravel", "Tailwind", "MySQL", "Barcode Scanner"],
      client: "masset-system.app",
      description:
        "Aplikasi pengelolaan inventaris barang dan pelacakan aset perusahaan. Dilengkapi fitur scan barcode, mutasi barang antar-cabang, rekap depresiasi aset, dan notifikasi stok menipis.",
      status: "siap_pakai",
      responseTime: "Multi-Gudang",
      image: "https://portfolio-firdan.vercel.app/masset.png",
      link: "https://portfolio-firdan.vercel.app/",
      category: "Pergudangan & Aset",
    },
    {
      id: "03",
      code: "03_sinar-properti",
      title: "Sistem CRM & Portal Manajemen Properti",
      tags: ["React", "Next.js", "MongoDB", "Node.js", "Tailwind"],
      client: "sinar-properti.app",
      description:
        "Sistem listing dan CRM penjualan properti modern. Pengelolaan data prospek (leads), jadwal survei unit, kalkulator simulasi KPR, dan sistem komisi agen otomatis.",
      status: "siap_pakai",
      responseTime: "Cloud Ready",
      image: "https://portfolio-firdan.vercel.app/image2.png",
      link: "https://portfolio-firdan.vercel.app/",
      category: "CRM & Properti",
    },
    {
      id: "04",
      code: "04_pos-kasir",
      title: "Sistem Kasir Cloud (Point of Sale) & Laba Rugi",
      tags: ["React", "Next.js", "NodeJS", "Thermal Print", "QRIS"],
      client: "shoeshop-pos.app",
      description:
        "Aplikasi kasir penjualan toko dengan antarmuka cepat, cetak struk via printer thermal Bluetooth, pembukuan laba-rugi otomatis, dan integrasi pembayaran QRIS dinamis.",
      status: "siap_pakai",
      responseTime: "Realtime Sync",
      image: "https://portfolio-firdan.vercel.app/shoeshop.png",
      link: "https://portfolio-firdan.vercel.app/",
      category: "Retail & POS",
    },
    {
      id: "05",
      code: "05_waygo-mobile",
      title: "Aplikasi Mobile Reservasi & Pemandu Wisata",
      tags: ["Kotlin", "Android Native", "Firebase", "Google Maps API"],
      client: "waygo-travel.app",
      description:
        "Aplikasi mobile Android interaktif untuk reservasi paket wisata, itinerary rundown otomatis, notifikasi jadwal perjalanan, dan integrasi maps pemandu rute.",
      status: "siap_pakai",
      responseTime: "Android Native",
      image: "https://portfolio-firdan.vercel.app/image1.png",
      link: "https://portfolio-firdan.vercel.app/",
      category: "Mobile Apps",
    },
    {
      id: "06",
      code: "06_hrms-payroll",
      title: "Sistem Informasi HRD, Absensi GPS & Penggajian",
      tags: ["Laravel", "Vue.js", "MySQL", "Geolocation", "PDF Generator"],
      client: "pekalongan-system.id",
      description:
        "Sistem absensi pegawai berbasis geolokasi GPS selfie, pengajuan cuti & lembur online, kalkulasi potongan keterlambatan, hingga otomatisasi cetak slip gaji karyawan.",
      status: "siap_pakai",
      responseTime: "Role Based",
      image: "https://portfolio-firdan.vercel.app/pkl_trsm.png",
      link: "https://portfolio-firdan.vercel.app/",
      category: "HRD & Payroll",
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
      title: "Kotlin & Android",
      subtitle: "Aplikasi Android native, notifikasi push, performa enteng",
    },
    {
      number: "03 / BACKEND SISTEM",
      category: "SERVER",
      title: "Laravel & Node.js",
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
            "Aplikasi kasir penjualan toko / cafe. Input katalog produk, cetak struk kasir bluetooth, laporan transaksi harian, dan pembayaran QRIS.",
          tag: "Mulai Rp 2.500.000",
          actionText: "Pesan Sistem Kasir",
        },
        {
          id: "company-profile",
          title: "web-profil-bisnis/",
          description:
            "Website profil bisnis profesional yang cepat dan modern. Tampilkan katalog jasa, portofolio, peta lokasi, dan tombol chat WhatsApp langsung.",
          tag: "Mulai Rp 1.500.000",
          actionText: "Pesan Website Profil",
        },
        {
          id: "stok-gudang-basic",
          title: "sistem-stok-barang/",
          description:
            "Sistem pencatatan barang masuk & keluar, rekap supplier, peringatan stok menipis, dan cetak laporan stok berkala dalam format PDF/Excel.",
          tag: "Mulai Rp 3.000.000",
          actionText: "Pesan Sistem Stok",
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
            "Sistem informasi klinik dokter/gigi: rekam medis elektronik terstandar, antrean pasien, inventaris obat farmasi, dan kasir pembayaran.",
          tag: "Mulai Rp 5.500.000",
          actionText: "Konsultasi Sistem Klinik",
        },
        {
          id: "erp-custom",
          title: "erp-manajemen-bisnis/",
          description:
            "Sistem terpadu multi-cabang: inventaris gudang, kasir POS, laporan laba-rugi keuangan, hak akses admin/staf, dan dashboard analitik eksekutif.",
          tag: "Mulai Rp 7.500.000",
          actionText: "Konsultasi Sistem ERP",
        },
        {
          id: "mobile-custom",
          title: "aplikasi-mobile-custom/",
          description:
            "Pembuatan aplikasi Android khusus pelanggan atau operasional lapangan. Terintegrasi REST API backend, notifikasi push, dan GPS realtime.",
          tag: "Mulai Rp 6.000.000",
          actionText: "Pesan Aplikasi Mobile",
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
        },
        {
          id: "modernisasi-legacy",
          title: "migrasi-sistem-lama/",
          description:
            "Modernisasi sistem manual (buku/Excel) atau sistem desktop lama ke sistem berbasis cloud modern yang bisa diakses dari HP dan laptop mana saja.",
          tag: "Modernisasi Cloud",
          actionText: "Konsultasi Migrasi",
        },
        {
          id: "maintenance-support",
          title: "pemeliharaan-berkala/",
          description:
            "Layanan perawatan sistem rutin: backup database mingguan, update keamanan, penambahan fitur minor, dan bantuan teknis prioritas.",
          tag: "Retainer Bulanan",
          actionText: "Pilih Maintenance",
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
        "Diskusi mendalam mengenai masalah alur kerja bisnis Anda, menentukan daftar fitur yang diperlukan, dan menyepakati estimasi waktu serta rincian biaya.",
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
      author: "— dr. Hendra Prasetyo, Pemilik Klinik Sehat Bersama",
    },
    {
      id: "testi-2",
      quote:
        "Sebelumnya pencatatan stok gudang kami manual pakai buku dan sering selisih. Setelah dibuatkan sistem inventaris oleh CakraDev, mutasi barang antar-cabang terpantau akurat 100%.",
      author: "— Budi Santoso, Direktur Operasional CV Logistik Makmur",
    },
    {
      id: "testi-3",
      quote:
        "Pengerjaan tepat waktu, tim CakraDev komunikatif dan sabar saat training staf kami. Source code diserahkan penuh dan after-sales support-nya sangat responsif.",
      author: "— Rina Kusuma, Owner Retail Fashion & Kasir Multi-Store",
    },
  ] as Testimonial[],
};
