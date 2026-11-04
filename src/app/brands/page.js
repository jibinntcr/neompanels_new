import Link from 'next/link';
import { buildPageMetadata, getBreadcrumbJsonLd, SITE_URL } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Brands — Starwoods & NEOM Packing Plywood',
  description:
    'Explore NEOM Panels’ product brands: Starwoods for furniture, modular interiors and commercial fit-outs, and NEOM Packing Plywood for moisture-resistant (MR) industrial packaging.',
  path: '/brands',
  ogImage: '/assets/starwoods-brand-showcase.jpg',
  ogImageAlt: 'NEOM Panels Product Brands — Starwoods and NEOM Packing Plywood',
  keywords: [
    'NEOM Panels brands',
    'Starwoods plywood',
    'Starwoods furniture and interior panels',
    'NEOM Packing Plywood',
    'moisture resistant industrial packaging plywood',
    'plywood brands in India',
    'furniture grade plywood brand India',
    'packing plywood brand India'
  ]
});

export default function BrandsPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Brands', path: '/brands' }
  ]);

  const brandsCollectionJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${SITE_URL}/brands#webpage`,
    name: 'NEOM Panels Brands — Starwoods & NEOM Packing Plywood',
    url: `${SITE_URL}/brands`,
    description:
      'Explore NEOM Panels’ product brands: Starwoods for furniture and interior applications, and NEOM Packing Plywood for moisture-resistant industrial packaging.',
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Starwoods — Furniture & Interior Applications',
          url: `${SITE_URL}/brands#starwoods`
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'NEOM Packing Plywood — Moisture-Resistant Industrial Packaging',
          url: `${SITE_URL}/brands/neom-packing-plywood`
        }
      ]
    }
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandsCollectionJsonLd) }}
      />
      <section className="page-header section--architectural-grid">
        <div className="container hero-split">
          <div className="hero-animate">
            <p className="eyebrow">Brands</p>
            <h1 id="main-heading" tabIndex={-1} className="page-title">
              Distinct brands. One manufacturing company behind them.
            </h1>
            <p className="lead-text">
              NEOM Panels manufactures wood-panel products under two focused brands: Starwoods for
              furniture and interior projects, and NEOM Packing Plywood for industrial packaging.
            </p>
            <nav className="industry-nav-bar" aria-label="Product brands">
              <a href="#starwoods" className="industry-jump-link">
                Starwoods
              </a>
              <a href="#neom-packing-plywood" className="industry-jump-link">
                NEOM Packing Plywood
              </a>
            </nav>
          </div>

          <div className="brand-architecture-card hero-animate--delay">
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.25rem' }}>
                Brand Portfolio
              </p>
              <h2 className="subsection-title" style={{ marginBottom: '0.25rem' }}>
                Parent company &amp; product brands
              </h2>
              <p className="secondary-text" style={{ fontSize: '0.9rem', marginBottom: 0 }}>
                Manufacturing, specification review and corporate governance under NEOM Panels.
              </p>
            </div>

            <div className="brand-architecture-tree">
              <div>
                <span
                  className="brand-spec-label"
                  style={{ display: 'block', marginBottom: '0.35rem' }}
                >
                  Parent Company
                </span>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.85rem',
                    flexWrap: 'wrap'
                  }}
                >
                  <img
                    src="/assets/logo-horizontal.png"
                    alt="NEOM Panels"
                    style={{ height: '2.5rem', width: 'auto', objectFit: 'contain' }}
                    width="540"
                    height="136"
                  />
                  <span style={{ fontWeight: 600, color: 'var(--color-forest)' }}>
                    NEOM Panels
                  </span>
                </div>
              </div>

              <div
                className="brand-architecture-children"
                role="list"
                aria-label="NEOM Panels product brands"
              >
                <Link
                  href="#starwoods"
                  role="listitem"
                  className="brand-architecture-child-node"
                >
                  <span className="brand-spec-label">Furniture &amp; Interiors</span>
                  <img
                    src="/assets/starwood-logo.png"
                    alt="Starwoods — The Plywood Specialist"
                    className="starwood-logo-img--xs"
                    width="619"
                    height="177"
                  />
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      color: 'var(--color-forest)'
                    }}
                  >
                    Starwoods
                  </span>
                </Link>

                <Link
                  href="/brands/neom-packing-plywood"
                  role="listitem"
                  className="brand-architecture-child-node"
                >
                  <span className="brand-spec-label">Industrial Packaging</span>
                  <img
                    src="/assets/neom-packing-plywood-logo-compact.svg"
                    alt="NEOM Packing Plywood"
                    className="packing-logo-img--xs"
                    width="540"
                    height="112"
                  />
                  <span
                    style={{
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      color: 'var(--color-forest)'
                    }}
                  >
                    NEOM Packing Plywood
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand 1: Starwoods */}
      <section className="section reveal-once" id="starwoods">
        <div className="container">
          <p className="eyebrow">A NEOM Panels Brand</p>
          <h2 className="section-title">Starwoods</h2>

          <div className="brand-showcase">
            <div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '0.75rem'
                }}
              >
                <span className="brand-category-pill">Furniture &amp; Interiors</span>
              </div>
              <div className="starwood-logo-plaque">
                <img
                  src="/assets/starwood-logo.png"
                  alt="Starwoods — The Plywood Specialist"
                  className="starwood-logo-img"
                  width="619"
                  height="177"
                />
              </div>
              <p className="lead-text">
                Wood-panel products for furniture manufacturing, modular interior systems and
                commercial fit-out projects.
              </p>
              <p>
                Buyers sourcing Starwoods panels for serial furniture production, modular kitchen
                and wardrobe fabrication, commercial interiors or regional distribution can share
                their application, thicknesses and sheet dimensions directly with NEOM Panels.
              </p>

              <div className="brand-spec-panel" style={{ marginTop: 'var(--space-5)' }}>
                <h3 className="subsection-title" style={{ marginBottom: 'var(--space-3)' }}>
                  Brand Profile
                </h3>
                <ul className="brand-spec-list" role="list">
                  <li className="brand-spec-item">
                    <span className="brand-spec-label">Brand</span>
                    <span className="brand-spec-value">Starwoods</span>
                  </li>
                  <li className="brand-spec-item">
                    <span className="brand-spec-label">Parent company</span>
                    <span className="brand-spec-value">NEOM Panels</span>
                  </li>
                  <li className="brand-spec-item">
                    <span className="brand-spec-label">Buyer groups</span>
                    <span className="brand-spec-value">
                      Furniture &amp; OEM manufacturers, modular furniture makers, interior
                      contractors, channel partners and institutional buyers
                    </span>
                  </li>
                  <li className="brand-spec-item">
                    <span className="brand-spec-label">Product information</span>
                    <span className="brand-spec-value">
                      Provided per product and grade against your requirement scope
                    </span>
                  </li>
                </ul>
              </div>

              <div className="btn-group" style={{ marginTop: 'var(--space-5)' }}>
                <Link href="/enquiry?brand=Starwoods" className="btn btn--primary">
                  Enquire About Starwoods
                </Link>
                <Link href="/resources#document-categories" className="btn btn--secondary">
                  Request Technical Documents
                </Link>
              </div>
            </div>

            <figure className="architectural-photo-card" style={{ margin: 0 }}>
              <img
                src="/assets/starwoods-brand-showcase.jpg"
                alt="Starwoods studio material showcase featuring natural oak, teak and ash wood-panel samples with calibrated multi-ply cores."
                width="1400"
                height="933"
                loading="lazy"
              />
              <figcaption className="architectural-photo-meta">
                <span>Furniture and Interior Applications</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Brand 2: NEOM Packing Plywood */}
      <section className="section section--warm reveal-once" id="neom-packing-plywood">
        <div className="container">
          <p className="eyebrow">A NEOM Panels Brand</p>
          <h2 className="section-title">NEOM Packing Plywood</h2>

          <div
            className="brand-showcase"
            style={{
              backgroundColor: 'var(--color-white)',
              borderLeftColor: 'var(--color-oak)'
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '0.75rem'
                }}
              >
                <span className="brand-category-pill brand-category-pill--oak">
                  Industrial Packaging
                </span>
              </div>

              <div className="packing-logo-plaque">
                <img
                  src="/assets/neom-packing-plywood-logo-horizontal.svg"
                  alt="NEOM Packing Plywood — Packaging Grade · Moisture Resistant"
                  className="packing-logo-img"
                  width="580"
                  height="168"
                />
              </div>

              <p className="lead-text">
                Moisture-resistant packaging-grade plywood for packing cases, crates, dividers and
                protective enclosures.
              </p>
              <p>
                NEOM Packing Plywood serves packaging manufacturers, case fabricators and industrial
                dispatch teams sourcing sheet material for one-time or recurring packaging
                schedules.
              </p>

              <div
                className="brand-spec-panel"
                style={{
                  marginTop: 'var(--space-5)',
                  backgroundColor: 'var(--color-warm-white)'
                }}
              >
                <h3 className="subsection-title" style={{ marginBottom: 'var(--space-3)' }}>
                  Brand Profile
                </h3>
                <ul className="brand-spec-list" role="list">
                  <li className="brand-spec-item">
                    <span className="brand-spec-label">Brand</span>
                    <span className="brand-spec-value">NEOM Packing Plywood</span>
                  </li>
                  <li className="brand-spec-item">
                    <span className="brand-spec-label">Parent company</span>
                    <span className="brand-spec-value">NEOM Panels</span>
                  </li>
                  <li className="brand-spec-item">
                    <span className="brand-spec-label">Product category &amp; grade</span>
                    <span className="brand-spec-value">
                      Packaging-grade plywood · Moisture Resistant (MR)
                    </span>
                  </li>
                  <li className="brand-spec-item">
                    <span className="brand-spec-label">Buyer groups</span>
                    <span className="brand-spec-value">
                      Industrial packaging manufacturers, packing-case fabricators, manufacturers,
                      procurement teams and trade suppliers
                    </span>
                  </li>
                </ul>
              </div>

              <div className="btn-group" style={{ marginTop: 'var(--space-5)' }}>
                <Link href="/brands/neom-packing-plywood" className="btn btn--primary">
                  Explore NEOM Packing Plywood
                </Link>
                <Link
                  href="/enquiry?brand=neom-packing-plywood&category=industrial-packaging"
                  className="btn btn--secondary"
                >
                  Request a Quote
                </Link>
              </div>
            </div>

            <figure className="architectural-photo-card" style={{ margin: 0 }}>
              <img
                src="/assets/packing-plywood-showcase.jpg"
                alt="Stacked packaging-grade plywood sheets with visible layered cross-ply edges in the foreground and an assembled timber and plywood packing case in the background."
                width="1400"
                height="933"
                loading="lazy"
              />
              <figcaption className="architectural-photo-meta">
                <span>Packaging-Grade Plywood</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section section--sage-subtle section--no-border reveal-once">
        <div className="container split-editorial">
          <div>
            <p className="eyebrow">Application Guidance</p>
            <h2 className="section-title">Not sure which brand fits your requirement?</h2>
            <p className="lead-text" style={{ marginBottom: 0 }}>
              Share your intended application, sheet dimensions and quantity through our enquiry
              form and select “Help Me Choose”.
            </p>
          </div>
          <div className="btn-group">
            <Link href="/enquiry?brand=help-me-choose" className="btn btn--primary">
              Discuss Your Requirement
            </Link>
            <Link href="/industries" className="editorial-link">
              <span>View Applications by Industry</span>
              <span className="link-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
