import { SITE_URL } from '@/lib/seo';

export default function sitemap() {
  const lastModified = new Date('2026-11-04T12:00:00Z');

  const routes = [
    { path: '', changeFrequency: 'weekly', priority: 1.0 },
    { path: '/brands', changeFrequency: 'weekly', priority: 0.9 },
    { path: '/brands/neom-packing-plywood', changeFrequency: 'weekly', priority: 0.95 },
    { path: '/manufacturing', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/industries', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/resources', changeFrequency: 'weekly', priority: 0.85 },
    { path: '/enquiry', changeFrequency: 'monthly', priority: 0.9 },
    { path: '/about', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/sustainability', changeFrequency: 'monthly', priority: 0.8 },
    { path: '/governance', changeFrequency: 'monthly', priority: 0.75 },
    { path: '/team', changeFrequency: 'monthly', priority: 0.75 },
    { path: '/leadership', changeFrequency: 'monthly', priority: 0.7 },
    { path: '/privacy', changeFrequency: 'yearly', priority: 0.4 },
    { path: '/terms', changeFrequency: 'yearly', priority: 0.4 }
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }));
}
