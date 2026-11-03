/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NODE_ENV === 'development' ? '.next.nosync' : '.next',
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  async rewrites() {
    return [
      { source: '/index.html', destination: '/' },
      { source: '/about.html', destination: '/about' },
      { source: '/brands.html', destination: '/brands' },
      { source: '/industries.html', destination: '/industries' },
      { source: '/manufacturing.html', destination: '/manufacturing' },
      { source: '/sustainability.html', destination: '/sustainability' },
      { source: '/governance.html', destination: '/governance' },
      { source: '/resources.html', destination: '/resources' },
      { source: '/enquiry.html', destination: '/enquiry' },
      { source: '/privacy.html', destination: '/privacy' },
      { source: '/terms.html', destination: '/terms' }
    ];
  }
};

export default nextConfig;
