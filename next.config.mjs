/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir:
    process.env.NEXT_BUILD_DIR ||
    (process.env.NODE_ENV === 'development' ? '.next.nosync' : '.next'),
  reactStrictMode: true,
  optimizeFonts: false,
  staticPageGenerationTimeout: 60,
  ...(process.env.VERCEL
    ? {}
    : {
        experimental: {
          workerThreads: true,
          cpus: 1
        }
      }),
  images: {
    unoptimized: true
  },
  async redirects() {
    return [
      {
        source: '/growth-vision',
        destination: '/about#purpose-vision-values',
        permanent: true
      },
      {
        source: '/brands/neom-architectural',
        destination: '/brands',
        permanent: true
      },
      {
        source: '/products/decorative-surfaces',
        destination: '/products',
        permanent: true
      },
      {
        source: '/sustainability',
        destination: '/responsibility',
        permanent: true
      },
      {
        source: '/sustainability.html',
        destination: '/responsibility',
        permanent: true
      },
      {
        source: '/industries',
        destination: '/applications',
        permanent: true
      },
      {
        source: '/industries.html',
        destination: '/applications',
        permanent: true
      },
      {
        source: '/leadership',
        destination: '/team',
        permanent: true
      },
      {
        source: '/leadership.html',
        destination: '/team',
        permanent: true
      },
      {
        source: '/contact',
        destination: '/enquiry',
        permanent: true
      }
    ];
  },
  async rewrites() {
    return [
      { source: '/index.html', destination: '/' },
      { source: '/about.html', destination: '/about' },
      { source: '/brands.html', destination: '/brands' },
      { source: '/manufacturing.html', destination: '/manufacturing' },
      { source: '/responsibility.html', destination: '/responsibility' },
      { source: '/governance.html', destination: '/governance' },
      { source: '/resources.html', destination: '/resources' },
      { source: '/enquiry.html', destination: '/enquiry' },
      { source: '/privacy.html', destination: '/privacy' },
      { source: '/terms.html', destination: '/terms' },
      { source: '/team.html', destination: '/team' }
    ];
  }
};

export default nextConfig;
