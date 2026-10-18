import type { Metadata, Viewport } from 'next';
import './globals.css';
import { PORTFOLIO_DATA } from '@/data/portfolioData';

export const metadata: Metadata = {
  metadataBase: new URL('https://cakradev.com'),
  title: 'CakraDev — Jasa Pembuatan Sistem Informasi & Aplikasi Custom',
  description:
    'CakraDev melayani jasa pembuatan sistem informasi manajemen, aplikasi web enterprise, sistem rekam medis klinik, POS kasir, inventaris gudang, dan aplikasi mobile custom dengan jaminan garansi & 100% hak milik source code.',
  authors: [{ name: 'CakraDev' }],
  keywords: [
    'Jasa Pembuatan Sistem',
    'Jasa Pembuatan Sistem Informasi',
    'Jasa Pembuatan Aplikasi Web',
    'Jasa Pembuatan Aplikasi Mobile',
    'Software House Indonesia',
    'Software House Pekalongan',
    'Sistem Rekam Medis Klinik EMR',
    'Sistem Inventaris Gudang',
    'Sistem Kasir POS',
    'CakraDev',
  ],
  openGraph: {
    title: 'CakraDev — Jasa Pembuatan Sistem Informasi & Aplikasi Custom',
    description: PORTFOLIO_DATA.personal.statement,
    url: 'https://cakradev.com',
    siteName: 'CakraDev',
    type: 'website',
    locale: 'id_ID',
    images: [
      {
        url: PORTFOLIO_DATA.personal.avatarUrl,
        width: 1200,
        height: 630,
        alt: 'CakraDev Jasa Pembuatan Sistem',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CakraDev — Jasa Pembuatan Sistem Informasi & Aplikasi Custom',
    description: PORTFOLIO_DATA.personal.statement,
    images: [PORTFOLIO_DATA.personal.avatarUrl],
  },
};

export const viewport: Viewport = {
  themeColor: '#fafafa',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Mona+Sans:ital,wdth,wght@0,75..125,200..900;1,75..125,200..900&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
