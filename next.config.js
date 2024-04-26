/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');

const nextConfig = {
  ...withPWA({
    dest: 'public',
    register: true,
    skipWaiting: true,
    runtimeCaching: require('next-pwa/cache'),
  }),
  images: {
    domains: ['res.cloudinary.com'],
  },
};

module.exports = nextConfig;
