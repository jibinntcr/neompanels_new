import { SITE_URL } from '@/lib/seo';
import { INITIAL_SEO_POSTS } from '@/lib/posts-store';

export default function sitemap() {
  const lastModified = new Date('2026-11-04T15:30:00Z');

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
      path: '/blog',
      changeFrequency: 'daily',
      priority: 0.92,
      images: [
        `${SITE_URL}/assets/hero-neom-flagship.jpg`,
        `${SITE_URL}/assets/packing-plywood-showcase.jpg`
      ]
    },
    ...INITIAL_SEO_POSTS.map((post) => ({
      path: `/blog/${post.slug}`,
      changeFrequency: 'weekly',
      priority: 0.85,
      images: post.coverImage ? [`${SITE_URL}${post.coverImage}`] : undefined
    })),
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
