export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://neompanels-new.vercel.app'
).replace(/\/$/, '');
export const SITE_NAME = 'NEOM Panels';
export const DEFAULT_OG_IMAGE = '/assets/product-structural-plywood.jpg';

export const CORE_SEO_KEYWORDS = [
  'NEOM Panels',
  'Indian panel manufacturing company',
  'Starwoods',
  'NEOM Packing Plywood',
  'plywood and engineered boards India',
  'MDF and HDHMR boards India',
  'industrial packaging plywood India',
  'MR packaging grade plywood'
];

export const SITE_NAVIGATION_ITEMS = [
  {
    name: 'Home',
    path: '/',
    description:
      'NEOM Panels is an Indian panel manufacturing company and the company behind Starwoods and NEOM Packing Plywood.'
  },
  {
    name: 'About NEOM',
    path: '/about',
    description:
      'Company introduction, purpose, vision, mission, behaviour-based values and manufacturing context.'
  },
  {
    name: 'Our Brands',
    path: '/brands',
    description:
      'Explore the two active brands of NEOM Panels: Starwoods and NEOM Packing Plywood.'
  },
  {
    name: 'Starwoods',
    path: '/brands/starwoods',
    description:
      'Starwoods — plywood and engineered boards, including MDF and HDHMR where available in the current range.'
  },
  {
    name: 'NEOM Packing Plywood',
    path: '/brands/neom-packing-plywood',
    description:
      'NEOM Packing Plywood — plywood for industrial packaging requirements.'
  },
  {
    name: 'Manufacturing',
    path: '/manufacturing',
    description:
      'NEOM Panels’ manufacturing foundation in India, process context and specification review parameters.'
  },
  {
    name: 'Responsibility',
    path: '/responsibility',
    description:
      'Principles and intended direction across Material Choices, Resource Use, People & Relationships and Clear Information.'
  },
  {
    name: 'Industries',
    path: '/applications',
    description:
      'Panel applications organised around real customer needs across furniture, construction, manufacturing and packaging.'
  },
  {
    name: 'Partners',
    path: '/partners',
    description:
      'Business pathways for dealers, builders, furniture manufacturers, packaging businesses and institutional buyers.'
  },
  {
    name: 'Product Information',
    path: '/resources',
    description:
      'Request brand catalogues, product specification details and sample evaluations from NEOM Panels.'
  },
  {
    name: 'Leadership',
    path: '/team',
    description:
      'Leadership team at NEOM Panels: Jibin N, Muneer K H, Muhamad Raneef T A and Muhammed Jabir.'
  },
  {
    name: 'Business Enquiry',
    path: '/enquiry',
    description:
      'Start a corporate, brand, product or partnership enquiry with NEOM Panels (+91 97454 50618).'
  }
];

export function stripBrandSuffix(rawTitle = '') {
  return String(rawTitle)
    .replace(/\s*[|—–-]\s*NEOM Panels\s*$/i, '')
    .trim();
}

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
  ogImageAlt = 'NEOM Panels — Indian panel manufacturing company behind Starwoods and NEOM Packing Plywood',
  ogImages = [],
  type = 'website'
}) {
  const canonicalUrl = path === '/' ? SITE_URL : `${SITE_URL}${path}`;
  const mergedKeywords = Array.from(new Set([...keywords, ...CORE_SEO_KEYWORDS]));
  const primaryImageUrl = toAbsoluteAssetUrl(ogImage);
  const cleanTitle = title ? stripBrandSuffix(title) : SITE_NAME;
  const fullOgTitle = absoluteTitle
    ? `${stripBrandSuffix(absoluteTitle)} | ${SITE_NAME}`
    : cleanTitle === SITE_NAME
    ? SITE_NAME
    : `${cleanTitle} | ${SITE_NAME}`;

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
    ...(absoluteTitle
      ? { title: { absolute: fullOgTitle } }
      : { title: cleanTitle }),
    description,
    keywords: mergedKeywords,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: fullOgTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: 'en_IN',
      type,
      images: resolvedOgImages
    },
    twitter: {
      card: 'summary_large_image',
      title: fullOgTitle,
      description,
      images: resolvedOgImages.map((img) => ({
        url: img.url,
        alt: img.alt || ogImageAlt
      }))
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
          `${SITE_URL}/assets/product-structural-plywood.jpg`,
          `${SITE_URL}/assets/starwoods-brand-showcase.jpg`,
          `${SITE_URL}/assets/packing-plywood-showcase.jpg`
        ],
        slogan: 'Engineered Excellence, Designed for Spaces.',
        description:
          'NEOM Panels is an Indian panel manufacturing company and the company behind Starwoods and NEOM Packing Plywood.',
        areaServed: [{ '@type': 'Country', name: 'India' }],
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IN'
        },
        brand: [
          {
            '@type': 'Brand',
            name: 'Starwoods',
            description: 'Plywood and engineered boards.',
            url: `${SITE_URL}/brands/starwoods`
          },
          {
            '@type': 'Brand',
            name: 'NEOM Packing Plywood',
            description: 'Plywood for industrial packaging requirements.',
            url: `${SITE_URL}/brands/neom-packing-plywood`
          }
        ],
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'sales',
            areaServed: 'IN',
            availableLanguage: ['English', 'Hindi', 'Malayalam'],
            url: `${SITE_URL}/enquiry`,
            email: contact.email || 'neompanels@gmail.com',
            telephone: contact.phone || '+91 97454 50618'
          }
        ]
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'NEOM Panels',
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
