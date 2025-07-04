// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  cssModules: true,
  // You might also need these for more specific CSS configuration
  sassOptions: {
    includePaths: ['./styles'],
  },
  // If you want to customize the CSS Modules class naming
  webpack(config) {
    return config;
  },
};

export default nextConfig;
