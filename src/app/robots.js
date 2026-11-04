import { SITE_URL } from '@/lib/seo';

export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/']
      },
      {
        userAgent: [
          'Googlebot',
          'Googlebot-Image',
          'Google-Extended',
          'Bingbot',
          'Applebot',
          'DuckDuckBot',
          'OAI-SearchBot',
          'GPTBot',
          'PerplexityBot',
          'ClaudeBot'
        ],
        allow: '/',
        disallow: ['/api/']
      }
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL
  };
}
