/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // <=== enables static exports
  images: {
    domains: ['i.ibb.co'],
  },
};

module.exports = nextConfig;
