import { SITE_URL } from '@/lib/seo';
import { LEADERSHIP_PROFILES } from '@/lib/leadership-data';

export default function sitemap() {
  const lastModified = new Date('2026-11-15T06:00:00Z');

  const routes = [
    {
      path: '',
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [
        `${SITE_URL}/assets/hero-architectural-panels.jpg`,
        `${SITE_URL}/assets/hero-neom-flagship.jpg`
      ]
    },
    {
      path: '/products',
      changeFrequency: 'weekly',
      priority: 0.95,
      images: [
        `${SITE_URL}/assets/product-structural-plywood.jpg`,
        `${SITE_URL}/assets/product-engineered-boards.jpg`,
        `${SITE_URL}/assets/product-decorative-surfaces.jpg`
      ]
    },
    {
      path: '/products/plywood',
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [`${SITE_URL}/assets/product-structural-plywood.jpg`]
    },
    {
      path: '/products/engineered-boards',
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [`${SITE_URL}/assets/product-engineered-boards.jpg`]
    },
    {
      path: '/products/decorative-surfaces',
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [`${SITE_URL}/assets/product-decorative-surfaces.jpg`]
    },
    {
      path: '/applications',
      changeFrequency: 'monthly',
      priority: 0.88,
      images: [
        `${SITE_URL}/assets/sector-construction.jpg`,
        `${SITE_URL}/assets/sector-manufacturing.jpg`,
        `${SITE_URL}/assets/sector-packaging.jpg`,
        `${SITE_URL}/assets/sector-furniture.jpg`
      ]
    },
    {
      path: '/about',
      changeFrequency: 'monthly',
      priority: 0.85,
      images: [`${SITE_URL}/assets/hero-neom-flagship.jpg`]
    },
    {
      path: '/team',
      changeFrequency: 'monthly',
      priority: 0.88,
      images: LEADERSHIP_PROFILES.map((l) => `${SITE_URL}${l.photo}`)
    },
    ...LEADERSHIP_PROFILES.map((leader) => ({
      path: leader.profileHref,
      changeFrequency: 'monthly',
      priority: 0.84,
      images: [`${SITE_URL}${leader.photo}`]
    })),
    {
      path: '/growth-vision',
      changeFrequency: 'monthly',
      priority: 0.82,
      images: [
        `${SITE_URL}/assets/gcc-dubai.jpg`,
        `${SITE_URL}/assets/gcc-riyadh.jpg`
      ]
    },
    {
      path: '/partners',
      changeFrequency: 'monthly',
      priority: 0.82
    },
    {
      path: '/resources',
      changeFrequency: 'monthly',
      priority: 0.78
    },
    {
      path: '/enquiry',
      changeFrequency: 'monthly',
      priority: 0.9
    },
    {
      path: '/privacy',
      changeFrequency: 'yearly',
      priority: 0.4
    },
    {
      path: '/terms',
      changeFrequency: 'yearly',
      priority: 0.4
    },
    {
      path: '/site-map',
      changeFrequency: 'monthly',
      priority: 0.5
    }
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
    ...(route.images ? { images: route.images } : {})
  }));
}
