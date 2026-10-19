/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'portfolio-firdan.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  // Izinkan akses dev server dari perangkat lain dalam satu jaringan Wi-Fi
  // @ts-ignore
  allowedDevOrigins: [
    '172.20.10.7',
    'localhost:3000',
  ],
};

export default nextConfig;
