import { SITE_URL } from '@/lib/seo';
import { LEADERSHIP_PROFILES } from '@/lib/leadership-data';

export default function sitemap() {
  const lastModified = new Date('2026-11-16T08:00:00Z');

  const routes = [
    {
      path: '',
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [`${SITE_URL}/assets/product-structural-plywood.jpg`]
    },
    {
      path: '/about',
      changeFrequency: 'monthly',
      priority: 0.92
    },
    {
      path: '/brands',
      changeFrequency: 'weekly',
      priority: 0.95,
      images: [
        `${SITE_URL}/assets/starwoods-brand-showcase.jpg`,
        `${SITE_URL}/assets/packing-plywood-showcase.jpg`
      ]
    },
    {
      path: '/brands/starwoods',
      changeFrequency: 'weekly',
      priority: 0.92,
      images: [`${SITE_URL}/assets/starwoods-brand-showcase.jpg`]
    },
    {
      path: '/brands/neom-packing-plywood',
      changeFrequency: 'weekly',
      priority: 0.92,
      images: [`${SITE_URL}/assets/packing-plywood-showcase.jpg`]
    },
    {
      path: '/manufacturing',
      changeFrequency: 'monthly',
      priority: 0.88,
      images: [`${SITE_URL}/assets/sector-manufacturing.jpg`]
    },
    {
      path: '/responsibility',
      changeFrequency: 'monthly',
      priority: 0.86
    },
    {
      path: '/products',
      changeFrequency: 'monthly',
      priority: 0.84,
      images: [
        `${SITE_URL}/assets/product-structural-plywood.jpg`,
        `${SITE_URL}/assets/product-engineered-boards.jpg`
      ]
    },
    {
      path: '/products/plywood',
      changeFrequency: 'monthly',
      priority: 0.82,
      images: [`${SITE_URL}/assets/product-structural-plywood.jpg`]
    },
    {
      path: '/products/engineered-boards',
      changeFrequency: 'monthly',
      priority: 0.82,
      images: [`${SITE_URL}/assets/product-engineered-boards.jpg`]
    },
    {
      path: '/applications',
      changeFrequency: 'monthly',
      priority: 0.84,
      images: [
        `${SITE_URL}/assets/sector-furniture.jpg`,
        `${SITE_URL}/assets/sector-packaging.jpg`,
        `${SITE_URL}/assets/sector-construction.jpg`,
        `${SITE_URL}/assets/sector-manufacturing.jpg`
      ]
    },
    {
      path: '/partners',
      changeFrequency: 'monthly',
      priority: 0.84
    },
    {
      path: '/resources',
      changeFrequency: 'monthly',
      priority: 0.78
    },
    {
      path: '/team',
      changeFrequency: 'monthly',
      priority: 0.84,
      images: LEADERSHIP_PROFILES.map((l) => `${SITE_URL}${l.photo}`)
    },
    ...LEADERSHIP_PROFILES.map((leader) => ({
      path: leader.profileHref,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [`${SITE_URL}${leader.photo}`]
    })),
    {
      path: '/governance',
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      path: '/enquiry',
      changeFrequency: 'monthly',
      priority: 0.92
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
