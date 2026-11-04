import Link from 'next/link';
import {
  buildPageMetadata,
  getBreadcrumbJsonLd,
  SITE_NAVIGATION_ITEMS,
  SITE_URL
} from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Site Map & Crawler Index — Complete Website Structure',
  description:
    'Complete HTML site plan and directory of NEOM Panels pages, product brands (Starwoods & NEOM Packing Plywood), manufacturing specifications, B2B industry applications and XML crawler endpoints.',
  path: '/site-map',
  keywords: [
    'NEOM Panels site map',
    'NEOM Panels website directory',
    'Starwoods and NEOM Packing Plywood pages',
    'wood panel specification index India'
  ]
});

export default function SiteMapPage() {
  const siteMapJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      getBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Site Map & Crawler Index', path: '/site-map' }
      ]),
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/site-map#webpage`,
        name: 'NEOM Panels Complete HTML Site Plan & Crawler Directory',
        url: `${SITE_URL}/site-map`,
        description:
          'Complete structural index of all pages, product brands, B2B industry sections and technical crawler endpoints on the NEOM Panels website.'
      }
    ]
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteMapJsonLd) }}
      />

      <section
        className="page-header section--architectural-grid"
        aria-labelledby="main-heading"
      >
        <div className="container hero-animate">
          <p className="eyebrow">SITE PLAN &amp; SEARCH CRAWLER DIRECTORY</p>
          <h1 id="main-heading" tabIndex={-1} className="page-title">
            Complete website architecture &amp; index.
          </h1>
          <p className="lead-text" style={{ marginBottom: 0 }}>
            A complete structural overview of NEOM Panels’ corporate pages, manufactured wood-panel
            categories, product brands (Starwoods and NEOM Packing Plywood), B2B industry
            applications and machine-readable crawler feeds.
          </p>
        </div>
      </section>

      <section className="section section--no-border reveal-once">
        <div className="container">
          {/* 1. Primary Pages */}
          <div style={{ marginBottom: 'var(--space-8)' }}>
            <p className="eyebrow">01 · CORE CORPORATE &amp; MANUFACTURING ROUTES</p>
            <h2 className="section-title">Primary website pages</h2>
            <div className="applications-cards-grid" style={{ marginTop: 'var(--space-5)' }}>
              {SITE_NAVIGATION_ITEMS.map((item, idx) => (
                <article key={item.path} className="application-feature-card">
                  <span className="application-card-number">
                    ROUTE {String(idx + 1).padStart(2, '0')} · {item.path}
                  </span>
                  <h3 className="subsection-title" style={{ marginBottom: '0.25rem' }}>
                    <Link href={item.path} style={{ color: 'var(--color-forest)' }}>
                      {item.name}
                    </Link>
                  </h3>
                  <p style={{ marginBottom: 0 }}>{item.description}</p>
                </article>
              ))}
            </div>
          </div>

          {/* 2. Deep Section & Anchor Index */}
          <div className="seo-keyword-directory" style={{ marginTop: 0 }}>
            <div className="seo-keyword-col">
              <h2 className="seo-keyword-heading">
                Product Brands &amp; Specification Sections
              </h2>
              <ul className="seo-keyword-list" role="list">
                <li>
                  <Link href="/brands">Brands Overview — NEOM Panels Portfolio</Link>
                </li>
                <li>
                  <Link href="/brands#starwoods">
                    Starwoods — Furniture &amp; Interior Applications
                  </Link>
                </li>
                <li>
                  <Link href="/brands#neom-packing-plywood">
                    NEOM Packing Plywood — Overview on Brands Page
                  </Link>
                </li>
                <li>
                  <Link href="/brands/neom-packing-plywood">
                    NEOM Packing Plywood — Dedicated Brand Page
                  </Link>
                </li>
                <li>
                  <Link href="/brands/neom-packing-plywood#specifications">
                    NEOM Packing Plywood — Verified MR Grade Specification Table
                  </Link>
                </li>
                <li>
                  <Link href="/brands/neom-packing-plywood#applications">
                    NEOM Packing Plywood — Packing Cases, Crates &amp; Dividers
                  </Link>
                </li>
                <li>
                  <Link href="/brands/neom-packing-plywood#mr-guidance">
                    NEOM Packing Plywood — MR Grade Suitability Guidance
                  </Link>
                </li>
                <li>
                  <Link href="/brands/neom-packing-plywood#quotation-requirements">
                    NEOM Packing Plywood — Quotation Checklist
                  </Link>
                </li>
              </ul>
            </div>

            <div className="seo-keyword-col">
              <h2 className="seo-keyword-heading">
                Industries &amp; B2B Application Sections
              </h2>
              <ul className="seo-keyword-list" role="list">
                <li>
                  <Link href="/industries">
                    All Industries &amp; Wood-Panel Applications Overview
                  </Link>
                </li>
                <li>
                  <Link href="/industries#furniture-oem">
                    01 · Furniture &amp; OEM Manufacturing Substrates
                  </Link>
                </li>
                <li>
                  <Link href="/industries#modular-furniture">
                    02 · Modular Kitchen &amp; Wardrobe Interior Systems
                  </Link>
                </li>
                <li>
                  <Link href="/industries#projects-interiors">
                    03 · Projects &amp; Commercial Fit-Out Joinery
                  </Link>
                </li>
                <li>
                  <Link href="/industries#institutions-procurement">
                    04 · Institutions &amp; Public-Sector Procurement
                  </Link>
                </li>
                <li>
                  <Link href="/industries#distributors-channel">
                    05 · Regional Distributors &amp; Channel Partners
                  </Link>
                </li>
                <li>
                  <Link href="/industries#packing-cases-crates">
                    06 · Industrial Packaging, Packing Cases &amp; Crates
                  </Link>
                </li>
                <li>
                  <Link href="/industries#custom-oem">
                    07 · Custom &amp; OEM Manufacturing Enquiries
                  </Link>
                </li>
              </ul>
            </div>

            <div className="seo-keyword-col">
              <h2 className="seo-keyword-heading">
                Direct B2B Enquiry &amp; Crawler Feeds
              </h2>
              <ul className="seo-keyword-list" role="list">
                <li>
                  <Link href="/enquiry">General B2B Wood-Panel Business Enquiry</Link>
                </li>
                <li>
                  <Link href="/enquiry?brand=starwoods&category=product-info">
                    Starwoods Furniture &amp; Interior Panel Enquiry
                  </Link>
                </li>
                <li>
                  <Link href="/enquiry?brand=neom-packing-plywood&category=industrial-packaging">
                    NEOM Packing Plywood Quotation Request
                  </Link>
                </li>
                <li>
                  <Link href="/enquiry?category=manufacturing">
                    OEM &amp; Recurring Manufacturing Supply Enquiry
                  </Link>
                </li>
                <li>
                  <Link href="/enquiry?category=project-requirement">
                    Commercial &amp; Interior Project BOQ Enquiry
                  </Link>
                </li>
                <li>
                  <Link href="/enquiry?category=institutional-procurement">
                    Institutional &amp; Tender Procurement Enquiry
                  </Link>
                </li>
                <li>
                  <Link href="/enquiry?category=distribution-partnership">
                    Regional Distribution &amp; Dealer Partnership Enquiry
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    SEO Blog, Specification Articles &amp; Company News (/blog)
                  </Link>
                </li>
                <li>
                  <a href="/sitemap.xml">XML Sitemap for Search Crawlers (/sitemap.xml)</a>
                </li>
                <li>
                  <a href="/robots.txt">Robots Exclusion Protocol (/robots.txt)</a>
                </li>
                <li>
                  <a href="/llms.txt">AI &amp; LLM Discovery Index (/llms.txt)</a>
                </li>
                <li>
                  <Link href="/privacy">Privacy Notice (/privacy)</Link>
                </li>
                <li>
                  <Link href="/terms">Website Terms (/terms)</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
