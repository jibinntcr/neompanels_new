export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://neompanels-new.vercel.app'
).replace(/\/$/, '');
export const SITE_NAME = 'NEOM Panels';
export const DEFAULT_OG_IMAGE = '/assets/arch-lobby-reception.jpg';

export const CORE_SEO_KEYWORDS = [
  'NEOM Panels',
  'Engineered Excellence Designed for Spaces',
  'wood panel ecosystem India',
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
  'engineered wood ecosystem'
];

export const SITE_NAVIGATION_ITEMS = [
  {
    name: 'Home — NEOM Panels',
    path: '/',
    description:
      'Engineered Excellence, Designed for Spaces. Integrated engineered wood and interior materials ecosystem.'
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
  },
  {
    name: 'HTML Site Map & Crawler Index',
    path: '/site-map',
    description:
      'Complete structural site plan of all pages, product categories, industry applications and specification anchors.'
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
  ogImageAlt = 'NEOM Panels — Indian Wood-Panel Manufacturing for Furniture, Interiors and Industrial Packaging',
  ogImages = [],
  type = 'website'
}) {
  const canonicalPath = path.startsWith('/') ? path : `/${path}`;
  const fullUrl = canonicalPath === '/' ? SITE_URL : `${SITE_URL}${canonicalPath}`;
  const mergedKeywords = Array.from(new Set([...keywords, ...CORE_SEO_KEYWORDS]));
  const socialTitle = absoluteTitle || `${title} | ${SITE_NAME}`;

  const rawImageEntries =
    Array.isArray(ogImages) && ogImages.length > 0
      ? ogImages
      : [
          {
            url: ogImage,
            width: 1400,
            height: 933,
            alt: ogImageAlt
          }
        ];

  const resolvedOgImages = rawImageEntries.map((item) => {
    if (typeof item === 'string') {
      return {
        url: toAbsoluteAssetUrl(item),
        width: 1400,
        height: 933,
        alt: ogImageAlt
      };
    }
    return {
      url: toAbsoluteAssetUrl(item.url || ogImage),
      width: item.width || 1400,
      height: item.height || 933,
      alt: item.alt || ogImageAlt
    };
  });

  const primaryImageUrl = resolvedOgImages[0]?.url || toAbsoluteAssetUrl(ogImage);

  return {
    metadataBase: new URL(SITE_URL),
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    keywords: mergedKeywords,
    authors: [{ name: 'NEOM Panels', url: SITE_URL }],
    creator: 'NEOM Panels',
    publisher: 'NEOM Panels',
    category: 'Wood-Panel Manufacturing & Industrial B2B Supply',
    alternates: {
      canonical: fullUrl,
      languages: {
        'en-IN': fullUrl,
        en: fullUrl,
        'x-default': fullUrl
      }
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1
      }
    },
    openGraph: {
      title: socialTitle,
      description,
      url: fullUrl,
      siteName: SITE_NAME,
      locale: 'en_IN',
      type,
      images: resolvedOgImages
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
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
        '@type': ['Organization', 'Manufacturer'],
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
          `${SITE_URL}${DEFAULT_OG_IMAGE}`,
          `${SITE_URL}/assets/starwoods-brand-showcase.jpg`,
          `${SITE_URL}/assets/packing-plywood-showcase.jpg`,
          `${SITE_URL}/assets/packing-plywood-crates.jpg`,
          `${SITE_URL}/assets/industry-furniture-oem.jpg`,
          `${SITE_URL}/assets/industry-modular-interiors.jpg`,
          `${SITE_URL}/assets/industry-commercial-projects.jpg`
        ],
        slogan: 'ENGINEERED EXCELLENCE, DESIGNED FOR SPACES',
        description:
          'NEOM Panels is an Indian wood-panel manufacturing company producing calibrated furniture panels, modular interior substrates, architectural joinery panels and moisture-resistant industrial packaging plywood. Home to Starwoods and NEOM Packing Plywood.',
        areaServed: [
          { '@type': 'Country', name: 'India' },
          { '@type': 'AdministrativeArea', name: 'Kerala' },
          { '@type': 'AdministrativeArea', name: 'Karnataka' },
          { '@type': 'AdministrativeArea', name: 'Tamil Nadu' },
          { '@type': 'AdministrativeArea', name: 'Maharashtra' },
          { '@type': 'AdministrativeArea', name: 'Telangana' },
          { '@type': 'AdministrativeArea', name: 'Gujarat' },
          { '@type': 'AdministrativeArea', name: 'Delhi NCR' }
        ],
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IN',
          addressRegion: contact.address || contact.factoryLocation || 'India'
        },
        contactPoint: [
          {
            '@type': 'ContactPoint',
            contactType: 'sales',
            areaServed: 'IN',
            availableLanguage: ['English', 'Hindi', 'Malayalam'],
            url: `${SITE_URL}/enquiry`,
            ...(contact.email ? { email: contact.email } : {}),
            ...(contact.phone ? { telephone: contact.phone } : {})
          }
        ],
        knowsAbout: [
          'Wood-Panel Manufacturing',
          'Calibrated Plywood Substrates',
          'Furniture & OEM Wood Panels',
          'Modular Kitchen & Wardrobe Substrates',
          'Commercial & Architectural Joinery Panels',
          'Moisture-Resistant (MR) Industrial Packaging Plywood',
          'Packing Cases and Export Crating Plywood',
          'Institutional Wood-Panel Procurement'
        ],
        brand: [
          {
            '@type': 'Brand',
            '@id': `${SITE_URL}/brands#starwoods`,
            name: 'Starwoods',
            url: `${SITE_URL}/brands#starwoods`,
            logo: `${SITE_URL}/assets/starwood-logo.png`,
            image: `${SITE_URL}/assets/starwoods-brand-showcase.jpg`,
            description:
              'NEOM Panels product brand for calibrated furniture manufacturing, modular kitchen and wardrobe interiors, and commercial fit-out applications.'
          },
          {
            '@type': 'Brand',
            '@id': `${SITE_URL}/brands/neom-packing-plywood#brand`,
            name: 'NEOM Packing Plywood',
            url: `${SITE_URL}/brands/neom-packing-plywood`,
            logo: `${SITE_URL}/assets/neom-packing-plywood-logo-horizontal.png`,
            image: [
              `${SITE_URL}/assets/packing-plywood-showcase.jpg`,
              `${SITE_URL}/assets/packing-plywood-crates.jpg`
            ],
            description:
              'Moisture-resistant (MR) packaging-grade plywood for industrial packing cases, heavy-duty crates, pallet collars, dividers and protective enclosures.'
          }
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'NEOM Panels Manufactured Wood-Panel Solutions',
          itemListElement: [
            {
              '@type': 'OfferCatalog',
              name: 'Calibrated Furniture & OEM Panels',
              description:
                'Uniform-thickness multi-ply wood-panel substrates engineered for CNC routing, edge-banding and serial furniture manufacturing.'
            },
            {
              '@type': 'OfferCatalog',
              name: 'Modular Kitchen & Wardrobe Substrates',
              description:
                'Dimensionally stable plywood panels suited for laminate, acrylic or veneer pressing across modular cabinetry and carcass systems.'
            },
            {
              '@type': 'OfferCatalog',
              name: 'Architectural Joinery & Commercial Project Panels',
              description:
                'Project-grade wood panels aligned with consultant specifications, tender schedules and bills of quantities (BOQs).'
            },
            {
              '@type': 'OfferCatalog',
              name: 'Moisture-Resistant (MR) Industrial Packaging Plywood',
              description:
                'Practical MR packaging-grade plywood for packing cases, export crates, pallet collars, dividers and industrial enclosures.'
            }
          ]
        }
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'NEOM Panels — Indian Wood-Panel Manufacturing',
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
