export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://neompanels-new.vercel.app'
).replace(/\/$/, '');
export const SITE_NAME = 'NEOM Panels';
export const DEFAULT_OG_IMAGE = '/assets/hero-neom-flagship.jpg';

export const CORE_SEO_KEYWORDS = [
  'NEOM Panels',
  'wood panel manufacturer India',
  'plywood manufacturer in India',
  'calibrated plywood manufacturer India',
  'B2B plywood supplier India',
  'OEM furniture plywood substrates',
  'modular kitchen plywood manufacturer',
  'wardrobe grade calibrated plywood',
  'architectural joinery wood panels',
  'commercial interior plywood supplier India',
  'industrial packaging plywood manufacturer',
  'MR grade packing plywood India',
  'moisture resistant packaging plywood',
  'plywood for packing cases and crates',
  'Starwoods plywood',
  'NEOM Packing Plywood',
  'multi-ply hardwood core panels',
  'direct factory plywood supply India',
  'institutional plywood procurement India',
  'bulk plywood wholesale supplier India',
  'plywood manufacturer Kerala India',
  'commercial grade MR plywood wholesale'
];

export const SITE_NAVIGATION_ITEMS = [
  {
    name: 'Home — NEOM Panels Wood-Panel Manufacturing',
    path: '/',
    description:
      'Parent company overview, core manufactured panel substrates, material architecture and B2B specification desk.'
  },
  {
    name: 'Brands — Starwoods & NEOM Packing Plywood',
    path: '/brands',
    description:
      'Brand architecture showing NEOM Panels as parent company behind Starwoods and NEOM Packing Plywood.'
  },
  {
    name: 'NEOM Packing Plywood — Moisture-Resistant Industrial Packaging',
    path: '/brands/neom-packing-plywood',
    description:
      'MR packaging-grade plywood for packing cases, export crates, pallet collars, dividers and protective enclosures.'
  },
  {
    name: 'Manufacturing — Production, Calibration & 4-Stage Quality Checks',
    path: '/manufacturing',
    description:
      'In-house wood-panel production in India covering material selection, pressing, calibration, inspection and palletised dispatch.'
  },
  {
    name: 'Industries & Applications — B2B Buyer Contexts',
    path: '/industries',
    description:
      'Specification guidance for furniture OEMs, modular kitchens, commercial interiors, institutional procurement, industrial packaging and distributors.'
  },
  {
    name: 'Resources & Technical Documents',
    path: '/resources',
    description:
      'Corporate profiles, Starwoods and NEOM Packing Plywood literature, technical specification sheets and B2B buyer checklists.'
  },
  {
    name: 'Insights, SEO Articles & Company News',
    path: '/blog',
    description:
      'Technical B2B wood-panel specification guides, calibrated plywood buying checklists, MR packaging plywood articles and NEOM Panels company news.'
  },
  {
    name: 'Sustainability — Responsible Wood-Panel Operations',
    path: '/sustainability',
    description:
      'Practical sustainability across timber and agro-forestry veneer sourcing, material efficiency, workplace safety and durable panels.'
  },
  {
    name: 'About NEOM Panels',
    path: '/about',
    description:
      'Company background, purpose, vision, mission and operating principles of NEOM Panels.'
  },
  {
    name: 'Our Leadership Team',
    path: '/team',
    description:
      'Executive leadership team guiding NEOM Panels: Managing Director Jibin N, CEO Muneer K H, CFO Muhamad Raneef T A and CTO Muhammed Jabir.'
  },
  {
    name: 'Jibin N — Managing Director Profile',
    path: '/team/jibin-n',
    description:
      'Dedicated leadership profile for Jibin N, Managing Director of NEOM Panels, focused on strategic direction, brand development and business growth.'
  },
  {
    name: 'Governance & Corporate Information',
    path: '/governance',
    description:
      'Official company facts, vendor onboarding details and adopted corporate governance policies.'
  },
  {
    name: 'Business Enquiry & Quotation Request',
    path: '/enquiry',
    description:
      'Direct B2B enquiry form for Starwoods, NEOM Packing Plywood, OEM manufacturing, project BOQs and distribution partnerships.'
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
