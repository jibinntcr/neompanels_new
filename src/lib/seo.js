export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://neompanels-new.vercel.app'
).replace(/\/$/, '');
export const SITE_NAME = 'NEOM Panels';
export const DEFAULT_OG_IMAGE = '/assets/hero-architectural-panels.jpg';

export const CORE_SEO_KEYWORDS = [
  'NEOM Panels',
  'Engineered Excellence Designed for Spaces',
  'engineered wood panels India',
  'structural plywood supplier India',
  'marine plywood India',
  'BWR BWP plywood',
  'solid engineered boards India',
  'MDF board supplier',
  'HDHMR board India',
  'pre-laminated MDF panels',
  'decorative surfaces India',
  'architectural wood veneers',
  'high pressure laminates HPL',
  'acrylic panels interior',
  'charcoal fluted wall panels',
  'GCC wood panel export corridor',
  'Jibin N NEOM Panels',
  'Muneer K H NEOM Panels'
];

export const SITE_NAVIGATION_ITEMS = [
  {
    name: 'Home — NEOM Panels',
    path: '/',
    description:
      'Engineered Excellence, Designed for Spaces. Integrated engineered wood, interior materials, and project supply ecosystem.'
  },
  {
    name: 'Products & Materials Portfolio',
    path: '/products',
    description:
      'Phase 1 portfolio: Structural & Specialty Plywood, Solid Engineered Boards, and Architectural Decorative Surfaces.'
  },
  {
    name: 'Structural & Specialty Plywood',
    path: '/products/plywood',
    description:
      'Premium Plywood, Marine Plywood, and BWR / BWP calibrated plywood substrates.'
  },
  {
    name: 'Solid Engineered Boards',
    path: '/products/engineered-boards',
    description:
      'High-density MDF, HDHMR moisture-resistant core boards, and pre-laminated MDF.'
  },
  {
    name: 'Architectural Decorative Surfaces',
    path: '/products/decorative-surfaces',
    description:
      'Architectural natural veneers, high-pressure laminates, acrylic panels, and fluted charcoal panels.'
  },
  {
    name: 'Applications & Sectors',
    path: '/applications',
    description:
      'Engineered wood solutions for Construction, Manufacturing, Packaging & Warehousing, and Furniture & Interiors.'
  },
  {
    name: 'About NEOM Panels',
    path: '/about',
    description:
      'Corporate vision, mission, 8 ecosystem pillars, market context, and 4-stage business growth model.'
  },
  {
    name: 'Executive Leadership & Team',
    path: '/team',
    description:
      'Meet the executive leadership team guiding NEOM Panels: Jibin N (MD), Muneer K H (CEO), Muhamad Raneef T A (CFO), and Muhammed Jabir (CTO).'
  },
  {
    name: 'Growth Vision & Expansion',
    path: '/growth-vision',
    description:
      '10-year development horizon: Indian domestic anchor and GCC strategic expansion corridor.'
  },
  {
    name: 'Partners & Ecosystem',
    path: '/partners',
    description:
      'Collaborative pathways for architects, interior designers, dealers, distributors, manufacturers, and buyers.'
  },
  {
    name: 'Resources & Material Specifications',
    path: '/resources',
    description:
      'Official technical data requests, physical material swatches, and specification assistance.'
  },
  {
    name: 'Contact & Enquiries',
    path: '/enquiry',
    description:
      'Direct specification desk, project enquiries, and official contact points (+91 97454 50618).'
  }
];

export function toAbsoluteAssetUrl(urlOrPath) {
  if (!urlOrPath) return `${SITE_URL}${DEFAULT_OG_IMAGE}`;
  if (urlOrPath.startsWith('http://') || urlOrPath.startsWith('https://')) {
    return urlOrPath;
  }
  const normalizedPath = urlOrPath.startsWith('/') ? urlOrPath : `/${urlOrPath}`;
  return `${SITE_URL}${normalizedPath}`;
}

export function buildPageMetadata({
  title,
  absoluteTitle,
  description,
  path = '/',
  keywords = [],
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = 'NEOM Panels — Engineered Excellence, Designed for Spaces',
  ogImages = [],
  type = 'website'
}) {
  const canonicalUrl = path === '/' ? SITE_URL : `${SITE_URL}${path}`;
  const mergedKeywords = Array.from(new Set([...keywords, ...CORE_SEO_KEYWORDS]));
  const primaryImageUrl = toAbsoluteAssetUrl(ogImage);

  const resolvedOgImages =
    ogImages && ogImages.length > 0
      ? ogImages.map((img) => ({
          url: toAbsoluteAssetUrl(img.url),
          width: img.width || 1200,
          height: img.height || 630,
          alt: img.alt || ogImageAlt
        }))
      : [
          {
            url: primaryImageUrl,
            width: 1400,
            height: 933,
            alt: ogImageAlt
          }
        ];

  return {
    ...(absoluteTitle ? { title: { absolute: absoluteTitle } } : { title }),
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: absoluteTitle || `${title} | ${SITE_NAME}`,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: 'en_IN',
      type,
      images: resolvedOgImages
    },
    twitter: {
      card: 'summary_large_image',
      title: absoluteTitle || `${title} | ${SITE_NAME}`,
      description,
      images: resolvedOgImages.map((img) => ({
        url: img.url,
        alt: img.alt || ogImageAlt
      }))
    },
    other: {
      image: primaryImageUrl,
      thumbnail: primaryImageUrl,
      'og:image:secure_url': primaryImageUrl
    }
  };
}

export function getOrganizationJsonLd(contact = {}) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'NEOM Panels',
        legalName: 'NEOM Panels',
        url: SITE_URL,
        logo: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/assets/logo-horizontal.png`,
          width: 970,
          height: 316
        },
        image: [
          `${SITE_URL}/assets/hero-architectural-panels.jpg`,
          `${SITE_URL}/assets/hero-neom-flagship.jpg`,
          `${SITE_URL}/assets/product-structural-plywood.jpg`,
          `${SITE_URL}/assets/product-engineered-boards.jpg`,
          `${SITE_URL}/assets/product-decorative-surfaces.jpg`
        ],
        slogan: 'Engineered Excellence, Designed for Spaces.',
        description:
          'NEOM Panels is building an integrated ecosystem of engineered wood, interior materials, and project supply solutions for India and global markets across Structural & Specialty Plywood, Solid Engineered Boards, and Decorative Surfaces.',
        areaServed: [
          { '@type': 'Country', name: 'India' }
        ],
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IN'
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'sales',
            areaServed: 'IN',
            availableLanguage: ['English', 'Hindi', 'Malayalam'],
            url: `${SITE_URL}/enquiry`,
            ...(contact.email ? { email: contact.email } : { email: 'neompanels@gmail.com' }),
            ...(contact.phone ? { telephone: contact.phone } : { telephone: '+91 97454 50618' })
          }
        ],
        knowsAbout: [
          'Structural & Specialty Plywood',
          'Marine & BWR / BWP Plywood',
          'Medium-Density Fiberboard (MDF)',
          'High-Density Moisture-Resistant Boards (HDHMR)',
          'Pre-Laminated MDF',
          'Architectural Wood Veneers',
          'High-Pressure Laminates (HPL)',
          'Acrylic & Fluted Charcoal Interior Panels'
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'NEOM Panels Phase 1 Materials Portfolio',
          itemListElement: [
            {
              '@type': 'OfferCatalog',
              name: 'Structural & Specialty Plywood',
              description:
                'Premium Plywood, Marine Plywood, and BWR / BWP engineered plywood panels.'
            },
            {
              '@type': 'OfferCatalog',
              name: 'Solid Engineered Boards',
              description:
                'MDF, HDHMR moisture-resistant cores, and Pre-Laminated MDF panels.'
            },
            {
              '@type': 'OfferCatalog',
              name: 'Architectural Decorative Surfaces',
              description:
                'Natural & smoked veneers, high-pressure laminates, acrylic panels, and charcoal fluted panels.'
            }
          ]
        }
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'NEOM Panels — Engineered Excellence, Designed for Spaces',
        publisher: {
          '@id': `${SITE_URL}/#organization`
        },
        inLanguage: 'en-IN'
      },
      {
        '@type': 'ItemList',
        '@id': `${SITE_URL}/#sitenavigation`,
        name: 'NEOM Panels Primary Site Navigation',
        itemListElement: SITE_NAVIGATION_ITEMS.map((nav, index) => ({
          '@type': 'SiteNavigationElement',
          position: index + 1,
          name: nav.name,
          description: nav.description,
          url: nav.path === '/' ? SITE_URL : `${SITE_URL}${nav.path}`
        }))
      }
    ]
  };
}

export function getBreadcrumbJsonLd(items = []) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: item.path === '/' ? SITE_URL : `${SITE_URL}${item.path}`
    }))
  };
}
