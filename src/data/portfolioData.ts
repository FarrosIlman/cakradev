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
    phone: "+62 856-0623-1627",
    whatsappNumber: "6285606231627",
    email: "cakradev.id@gmail.com",
    whatsapp:
      "https://wa.me/6285606231627?text=Halo%20CakraDev,%20saya%20ingin%20konsultasi%20pembuatan%20sistem",
    github: "https://github.com/cakradev",
    linkedin: "https://linkedin.com/company/cakradev",
    instagram: "https://instagram.com/cakradev",
    cvUrl: "https://portfolio-firdan.vercel.app/CV%20-%20Mohammad%20Firdan.pdf",
    companyProfileUrl:
      "https://wa.me/6285606231627?text=Halo%20CakraDev,%20saya%20ingin%20meminta%20katalog%20portfolio%20dan%20proposal%20CakraDev",
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
    "Undangan & Event",
    "Web Apps & EdTech",
    "POS & Toko Bangunan",
  ],

  projects: [
    {
      id: "01",
      code: "01_undangan-digital",
      title: "Malika.in — Platform Undangan Digital & RSVP Event Interaktif",
      category: "Undangan & Event",
      tags: ["Next.js", "Tailwind CSS", "RSVP WhatsApp", "Audio Player", "QRIS Angpao"],
      client: "rizalnabilahwedding.my.id",
      description:
        "Platform pembuatan website undangan pernikahan dan acara eksklusif berbasis cloud. Dilengkapi generator nama tamu personal otomatis, konfirmasi RSVP kehadiran terhubung WhatsApp, navigasi maps venue acara, amplop digital QRIS, dan live buku tamu interaktif.",
      status: "Live Production",
      responseTime: "Fast CDN Load",
      image: "/images/malikain-wedding.png",
      link: "https://www.rizalnabilahwedding.my.id/",
      liveDemoUrl: "https://www.rizalnabilahwedding.my.id/",
      year: "2026",
      features: [
        "Personalisasi nama tamu undangan otomatis via query parameter (to=NamaTamu)",
        "Konfirmasi kehadiran (RSVP) real-time dengan notifikasi langsung ke WhatsApp panitia",
        "Fitur amplop digital (kado cashless via QRIS dinamis & nomor rekening bank)",
        "Buku tamu interaktif ucapan doa online & integrasi countdown timer acara",
      ],
    },
    {
      id: "02",
      code: "02_saka-edtech",
      title: "SAKA — Smart Application for Kid's Speaking Activity",
      category: "Web Apps & EdTech",
      tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Speech AI", "EdTech"],
      client: "saka.malikadigital.my.id",
      description:
        "Aplikasi web pembelajaran interaktif untuk stimulasi wicara dan pelafalan anak usia dini. Dilengkapi pengenalan suara (speech recognition), kuis gamifikasi visual dengan badge reward, dan dashboard evaluasi perkembangan artikulasi kata untuk guru & orang tua.",
      status: "Live Production",
      responseTime: "Interactive Web",
      image: "/images/saka-edtech.png",
      link: "https://saka.malikadigital.my.id/",
      liveDemoUrl: "https://saka.malikadigital.my.id/",
      year: "2026",
      features: [
        "Engine speech recognition pengenalan artikulasi kata bahasa Indonesia ramah anak",
        "Gamifikasi interaktif dengan animasi karakter, skor bintang, dan sertifikat digital",
        "Portal monitoring laporan grafik perkembangan bicara anak berkala bagi orang tua",
        "Desain UI/UX responsif & ringan diakses lancar dari tablet, iPad, dan laptop",
      ],
    },
    {
      id: "03",
      code: "03_pos-bangunan",
      title: "MitraBangunan POS — Kasir Multi-Satuan & Bon Tempo Toko Material",
      category: "POS & Toko Bangunan",
      tags: ["Laravel 11", "React", "Multi-Satuan", "Thermal Print", "Surat Jalan", "Bon Tempo"],
      client: "kasirbangunan.cakradev.com",
      description:
        "Sistem Point of Sale (POS) dan pergudangan terpadu khusus toko bangunan dan depo material. Dilengkapi transaksi multi-satuan (Sak, Batang, Dus, Meter), pencatatan bon tempo (kredit) kontraktor, cetak surat jalan armada truk, dan pembukuan laba kotor harian otomatis.",
      status: "Siap Pakai & Kustom",
      responseTime: "Multi-Cabang Cloud",
      image: "/images/pos-toko-bangunan.jpg",
      link: "https://kasirbangunan.cakradev.com/",
      liveDemoUrl: "https://kasirbangunan.cakradev.com/",
      year: "2026",
      features: [
        "Konversi multi-satuan otomatis (1 Sak Semen = 50 Kg, 1 Dus Keramik = 1.44 m²)",
        "Buku pembantu bon tempo / piutang mandor & kontraktor lengkap tanggal jatuh tempo",
        "Cetak Surat Jalan pengiriman armada pickup/truk & struk thermal kasir 58/80mm",
        "Monitoring stok pasir, besi beton, cat, dan pipa PVC antar-cabang real-time",
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
      label: "01 / Paket Hemat & UMKM",
      items: [
        {
          id: "undangan-online",
          title: "undangan-digital-online/",
          description:
            "Website undangan pernikahan, aqiqah, wisuda, atau event. Musik latar, Google Maps venue, buku tamu ucapan, amplop digital QRIS, dan konfirmasi RSVP WhatsApp.",
          tag: "Mulai Rp 49.000",
          actionText: "Pesan Undangan Digital",
          duration: "Pengerjaan 1-2 Hari",
          features: [
            "Personalisasi nama tamu otomatis di URL",
            "Konfirmasi kehadiran (RSVP) terhubung ke WhatsApp",
            "Amplop digital cashless (QRIS & transfer bank)",
            "Musik latar & hitung mundur acara",
            "Tampilan modern responsif di semua HP",
          ],
        },
        {
          id: "pos-toko",
          title: "sistem-kasir-pos/",
          description:
            "Aplikasi kasir penjualan toko kelontong, retail, cafe, atau laundry. Input katalog barang, cetak struk thermal Bluetooth, QRIS dinamis, dan laporan omzet harian.",
          tag: "Mulai Rp 299.000",
          actionText: "Pesan Sistem Kasir",
          duration: "Pengerjaan 3-5 Hari",
          features: [
            "Transaksi kasir cepat & scan barcode kamera HP",
            "Cetak struk printer Bluetooth 58mm/80mm",
            "Integrasi QRIS pembayaran instan",
            "Rekap laba kotor & omzet harian",
            "Panduan penggunaan & training staf gratis",
          ],
        },
        {
          id: "company-profile",
          title: "web-profil-bisnis/",
          description:
            "Website profil bisnis, portofolio jasa, atau katalog UMKM yang cepat, elegan, dan siap tampil profesional di Google. Lengkap tombol chat WhatsApp langsung.",
          tag: "Mulai Rp 199.000",
          actionText: "Pesan Website Profil",
          duration: "Pengerjaan 2-4 Hari",
          features: [
            "Desain custom elegan responsif di semua perangkat",
            "Katalog produk / portofolio layanan usaha",
            "Integrasi tombol WhatsApp & navigasi Google Maps",
            "Optimasi kecepatan loading & SEO Google",
            "Setup domain & hosting siap pakai",
          ],
        },
      ],
    },
    {
      id: "paket-bisnis",
      label: "02 / Paket Bisnis & Toko Bangunan",
      items: [
        {
          id: "pos-bangunan",
          title: "pos-toko-bangunan/",
          description:
            "Sistem kasir dan manajemen toko material khusus: multi-satuan (sak, batang, dus, m²), bon tempo (kredit) tukang/kontraktor, cetak surat jalan armada, dan cek stok gudang.",
          tag: "Mulai Rp 699.000",
          actionText: "Pesan Kasir Toko Bangunan",
          duration: "Pengerjaan 1-2 Minggu",
          features: [
            "Konversi otomatis multi-satuan (Sak/Batang/Dus/m²)",
            "Buku bon tempo / piutang mandor & kontraktor",
            "Cetak Surat Jalan supir armada pickup/truk",
            "Cek stok pasir, semen, besi, cat real-time",
            "100% Hak milik source code & tanpa sewa bulanan",
          ],
        },
        {
          id: "web-custom-edtech",
          title: "web-app-custom-edtech/",
          description:
            "Pengembangan web application interaktif (seperti platform edukasi SAKA, portal reservasi, atau sistem operasional kustom) berbasis Next.js & Laravel.",
          tag: "Mulai Rp 799.000",
          actionText: "Konsultasi Web Custom",
          duration: "Pengerjaan 2-3 Minggu",
          features: [
            "Fitur interaktif custom sesuai kebutuhan Anda",
            "UI/UX modern, cepat, dan ringan",
            "Autentikasi user & dashboard admin terproteksi",
            "Integrasi database MySQL/PostgreSQL aman",
            "Garansi perbaikan bug & pendampingan teknis",
          ],
        },
        {
          id: "stok-gudang-basic",
          title: "sistem-stok-gudang/",
          description:
            "Pencatatan barang masuk & keluar, mutasi barang antar-lokasi, alert peringatan stok menipis, dan cetak rekap stok opname berkala dalam format PDF/Excel.",
          tag: "Mulai Rp 399.000",
          actionText: "Pesan Sistem Gudang",
          duration: "Pengerjaan 1 Minggu",
          features: [
            "Catat mutasi barang masuk, keluar & retur",
            "Notifikasi otomatis saat stok hampir habis",
            "Manajemen master data supplier & barang",
            "Export laporan stok opname ke Excel & PDF",
            "Source code diserahkan penuh tanpa sewa bulanan",
          ],
        },
      ],
    },
    {
      id: "paket-enterprise",
      label: "03 / Kustom Penuh & Pendampingan IT",
      items: [
        {
          id: "bimbingan-it-skripsi",
          title: "tugas-akhir-skripsi-it/",
          description:
            "Pendampingan dan pembuatan aplikasi untuk tugas akhir (TA) atau skripsi teknik informatika/sistem informasi. Lengkap source code bersih, penjelasan logika, dan bimbingan demo.",
          tag: "Mulai Rp 149.000",
          actionText: "Konsultasi Proyek IT",
          duration: "Pengerjaan Cepat Sesuai Deadline",
          features: [
            "Pengerjaan web (Laravel/Next.js/PHP) atau Android",
            "Kode bersih berstandar akademik & mudah dipahami",
            "Bimbingan penjelasan alur program dan database",
            "Bantuan instalasi lokal (XAMPP/Node.js/cPanel)",
            "Revisi hingga sistem dinyatakan siap sidang",
          ],
        },
        {
          id: "sistem-custom-penuh",
          title: "full-custom-system/",
          description:
            "Pengembangan sistem bisnis skala penuh (multi-cabang, rekam medis klinik EMR, atau ERP terintegrasi) yang disesuaikan spesifik dengan SOP perusahaan Anda.",
          tag: "Mulai Rp 1.200.000",
          actionText: "Jadwalkan Konsultasi",
          duration: "Pengerjaan 3-4 Minggu",
          features: [
            "Analisis kebutuhan alur operasional bisnis",
            "Pembagian hak akses staf (Owner, Manajer, Kasir, Gudang)",
            "Integrasi WhatsApp Gateway & Payment Gateway",
            "100% Source code milik klien tanpa biaya bulanan",
            "Pelatihan staf hingga operasional berjalan lancar",
          ],
        },
        {
          id: "maintenance-support",
          title: "pemeliharaan-berkala/",
          description:
            "Layanan perawatan sistem rutin untuk bisnis Anda: backup database mingguan, update keamanan server, penambahan fitur minor, dan bantuan teknis WhatsApp prioritas.",
          tag: "Mulai Rp 79.000 / Bulan",
          actionText: "Pilih Maintenance",
          duration: "Kontrak Fleksibel Bulanan",
          features: [
            "Backup database berkala aman ke cloud",
            "Monitoring kestabilan server & website",
            "Dukungan teknis prioritas via chat WhatsApp",
            "Penanganan darurat kendala bug sistem",
            "Biaya terjangkau tanpa perlu gaji tim IT tetap",
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
