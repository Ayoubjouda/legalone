/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
      {
        protocol: 'https',
        hostname: 'ik.imagekit.io',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
};

module.exports = nextConfig;
