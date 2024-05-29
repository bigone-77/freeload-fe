/** @type {import('next').NextConfig} */

const withPWA = require('@ducanh2912/next-pwa').default({
  dest: 'public',
  register: true,
  skipWaiting: true,
  extendDefaultRuntimeCaching: true,
});

const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'openweathermap.org', 'loremflickr.com'],
  },
};

module.exports = withPWA(nextConfig);
