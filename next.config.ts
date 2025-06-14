/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Portfoilio',
  assetPrefix: '/Portfoilio/',
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
