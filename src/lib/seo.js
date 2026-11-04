export const SITE_URL = 'https://neompanels-new.vercel.app';
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
  'bulk plywood wholesale supplier India'
];

export function buildPageMetadata({
  title,
  absoluteTitle,
  description,
  path = '/',
  keywords = [],
  ogImage = DEFAULT_OG_IMAGE,
  ogImageAlt = 'NEOM Panels — Indian Wood-Panel Manufacturing for Furniture, Interiors and Industrial Packaging',
  type = 'website'
}) {
  const canonicalPath = path.startsWith('/') ? path : `/${path}`;
  const fullUrl = canonicalPath === '/' ? SITE_URL : `${SITE_URL}${canonicalPath}`;
  const mergedKeywords = Array.from(new Set([...keywords, ...CORE_SEO_KEYWORDS]));
  const socialTitle = absoluteTitle || `${title} | ${SITE_NAME}`;

  return {
    title: absoluteTitle ? { absolute: absoluteTitle } : title,
    description,
    keywords: mergedKeywords,
    authors: [{ name: 'NEOM Panels', url: SITE_URL }],
    creator: 'NEOM Panels',
    publisher: 'NEOM Panels',
    category: 'Wood-Panel Manufacturing & Industrial B2B Supply',
    alternates: {
      canonical: canonicalPath
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
      images: [
        {
          url: ogImage,
          width: 1400,
          height: 933,
          alt: ogImageAlt
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [ogImage]
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
        logo: `${SITE_URL}/assets/logo-header.png`,
        image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
        slogan: 'ENGINEERED EXCELLENCE, DESIGNED FOR SPACES',
        description:
          'NEOM Panels is an Indian wood-panel manufacturing company producing calibrated furniture panels, modular interior substrates, architectural joinery panels and moisture-resistant industrial packaging plywood. Home to Starwoods and NEOM Packing Plywood.',
        areaServed: {
          '@type': 'Country',
          name: 'India'
        },
        address: {
          '@type': 'PostalAddress',
          addressCountry: 'IN',
          addressRegion: contact.address || contact.factoryLocation || 'India'
        },
        ...(contact.email ? { email: contact.email } : {}),
        ...(contact.phone ? { telephone: contact.phone } : {}),
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
            description:
              'NEOM Panels product brand for calibrated furniture manufacturing, modular kitchen and wardrobe interiors, and commercial fit-out applications.'
          },
          {
            '@type': 'Brand',
            '@id': `${SITE_URL}/brands/neom-packing-plywood#brand`,
            name: 'NEOM Packing Plywood',
            url: `${SITE_URL}/brands/neom-packing-plywood`,
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
