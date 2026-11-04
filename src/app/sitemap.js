import { SITE_URL } from '@/lib/seo';

export default function sitemap() {
  const lastModified = new Date('2026-11-04T12:15:00Z');

  const routes = [
    {
      path: '',
      changeFrequency: 'weekly',
      priority: 1.0,
      images: [
        `${SITE_URL}/assets/hero-neom-flagship.jpg`,
        `${SITE_URL}/assets/industry-furniture-oem.jpg`,
        `${SITE_URL}/assets/industry-modular-interiors.jpg`,
        `${SITE_URL}/assets/industry-commercial-projects.jpg`,
        `${SITE_URL}/assets/packing-plywood-showcase.jpg`
      ]
    },
    {
      path: '/brands',
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [
        `${SITE_URL}/assets/starwoods-brand-showcase.jpg`,
        `${SITE_URL}/assets/packing-plywood-showcase.jpg`
      ]
    },
    {
      path: '/brands/neom-packing-plywood',
      changeFrequency: 'weekly',
      priority: 0.95,
      images: [
        `${SITE_URL}/assets/packing-plywood-showcase.jpg`,
        `${SITE_URL}/assets/packing-plywood-crates.jpg`
      ]
    },
    {
      path: '/manufacturing',
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [
        `${SITE_URL}/assets/illustration-manufacturing.png`,
        `${SITE_URL}/assets/hero-neom-flagship.jpg`
      ]
    },
    {
      path: '/industries',
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [
        `${SITE_URL}/assets/industry-furniture-oem.jpg`,
        `${SITE_URL}/assets/industry-modular-interiors.jpg`,
        `${SITE_URL}/assets/industry-commercial-projects.jpg`,
        `${SITE_URL}/assets/packing-plywood-crates.jpg`
      ]
    },
    {
      path: '/resources',
      changeFrequency: 'weekly',
      priority: 0.85,
      images: [`${SITE_URL}/assets/illustration-home-materials.jpg`]
    },
    {
      path: '/enquiry',
      changeFrequency: 'monthly',
      priority: 0.9,
      images: [`${SITE_URL}/assets/illustration-enquiry.jpg`]
    },
    {
      path: '/about',
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [`${SITE_URL}/assets/hero-neom-flagship.jpg`]
    },
    {
      path: '/sustainability',
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [`${SITE_URL}/assets/sustainability-materials-studio.jpg`]
    },
    {
      path: '/governance',
      changeFrequency: 'monthly',
      priority: 0.75,
      images: [`${SITE_URL}/assets/hero-neom-flagship.jpg`]
    },
    {
      path: '/team',
      changeFrequency: 'monthly',
      priority: 0.75,
      images: [
        `${SITE_URL}/assets/team/jibin-n.png`,
        `${SITE_URL}/assets/team/muneer-k-h.png`,
        `${SITE_URL}/assets/team/muhamad-raneef.jpeg`,
        `${SITE_URL}/assets/team/muhammed-jabir.png`
      ]
    },
    {
      path: '/leadership',
      changeFrequency: 'monthly',
      priority: 0.7
    },
    {
      path: '/site-map',
      changeFrequency: 'weekly',
      priority: 0.75
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
