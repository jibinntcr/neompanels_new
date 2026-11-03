import Link from 'next/link';

export const metadata = {
  title: 'Brands — Corporate Identity Behind Starwoods & NEOM Packing Plywood',
  description:
    'NEOM Panels provides the corporate identity behind its product brands: Starwoods and NEOM Packing Plywood. Explore our brands or discuss your panel requirement with NEOM.'
};

export default function BrandsPage() {
  return (
    <>
      <section className="page-header section--architectural-grid">
        <div className="container hero-split">
          <div className="hero-animate">
            <p className="eyebrow">BRANDS</p>
            <h1 id="main-heading" tabIndex={-1} className="page-title">
              Distinct brands. One company behind them.
            </h1>
            <p className="lead-text">
              NEOM Panels provides the corporate identity behind its product brands. Each brand is a
              route to relevant product information; NEOM is the place to understand the company and
              discuss a broader business requirement.
            </p>
            <nav className="industry-nav-bar" aria-label="Product brands">
              <a href="#starwoods" className="industry-jump-link">
                01. Starwoods
              </a>
              <a href="#neom-packing-plywood" className="industry-jump-link">
                02. NEOM Packing Plywood
              </a>
            </nav>
          </div>

          <div className="brand-architecture-card hero-animate--delay">
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.25rem' }}>
                BRAND ARCHITECTURE
              </p>
              <h2 className="subsection-title" style={{ marginBottom: '0.25rem' }}>
                Corporate parent &amp; product brands
              </h2>
              <p className="secondary-text" style={{ fontSize: '0.9rem', marginBottom: 0 }}>
                Manufacturing, quality specification, and corporate governance under NEOM Panels.
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
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexWrap: 'wrap' }}>
                  <img
                    src="/assets/logo-horizontal.png"
                    alt="NEOM Panels"
                    style={{ height: '2.5rem', width: 'auto', objectFit: 'contain' }}
                    width="540"
                    height="180"
                  />
                  <span style={{ fontWeight: 600, color: 'var(--color-forest)' }}>
                    NEOM Panels
                  </span>
                </div>
              </div>

              <div className="brand-architecture-children" role="list" aria-label="NEOM Panels product brands">
                <Link
                  href="#starwoods"
                  role="listitem"
                  className="brand-architecture-child-node"
                >
                  <span className="brand-spec-label">Product Brand 01 · Furniture &amp; Interiors</span>
                  <img
                    src="/assets/starwood-logo.png"
                    alt="Starwoods — The Plywood Specialist"
                    className="starwood-logo-img--xs"
                    width="619"
                    height="177"
                  />
                  <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-forest)' }}>
                    Starwoods
                  </span>
                </Link>

                <Link
                  href="/brands/neom-packing-plywood"
                  role="listitem"
                  className="brand-architecture-child-node"
                >
                  <span className="brand-spec-label">Product Brand 02 · Industrial Packaging</span>
                  <img
                    src="/assets/neom-packing-plywood-logo-compact.svg"
                    alt="NEOM Packing Plywood"
                    className="packing-logo-img--xs"
                    width="540"
                    height="112"
                  />
                  <span style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--color-forest)' }}>
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
          <p className="eyebrow">A NEOM PANELS BRAND</p>
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
                <span className="brand-badge" style={{ marginBottom: 0 }}>
                  Official Brand of NEOM Panels
                </span>
                <span className="brand-category-pill">Furniture &amp; Interiors</span>
              </div>
              <div className="starwood-logo-plaque">
                <img
                  src="/assets/starwood-logo.png"
                  alt="Starwood — The Plywood Specialist"
                  className="starwood-logo-img"
                  width="619"
                  height="177"
                />
              </div>
              <h3 className="brand-monograph-title">Starwoods</h3>
              <p className="lead-text">
                Starwoods is a NEOM Panels brand. Explore its available range or share your
                requirement with NEOM to discuss the next step.
              </p>
              <p>
                Buyers looking for Starwoods panels for furniture production, modular interior
                systems, commercial fit-outs or regional distribution can initiate their
                requirement directly through NEOM Panels. Tell us the application, dimensions and
                product documentation you need so we can respond with current information for the
                relevant product and grade.
              </p>

              <div className="brand-spec-panel" style={{ marginTop: 'var(--space-5)' }}>
                <h4 className="subsection-title" style={{ marginBottom: 'var(--space-3)' }}>
                  Brand &amp; Enquiry Profile
                </h4>
                <ul className="brand-spec-list" role="list">
                  <li className="brand-spec-item">
                    <span className="brand-spec-label">Brand</span>
                    <span
                      className="brand-spec-value"
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.75rem',
                        flexWrap: 'wrap',
                        marginTop: '0.2rem'
                      }}
                    >
                      <img
                        src="/assets/starwood-logo.png"
                        alt="Starwood — The Plywood Specialist"
                        className="starwood-logo-img--xs"
                        width="619"
                        height="177"
                      />
                      <span>Starwoods</span>
                    </span>
                  </li>
                  <li className="brand-spec-item">
                    <span className="brand-spec-label">Parent Company</span>
                    <span className="brand-spec-value">NEOM Panels</span>
                  </li>
                  <li className="brand-spec-item">
                    <span className="brand-spec-label">Buyer Groups</span>
                    <span className="brand-spec-value">
                      Furniture &amp; OEM manufacturers, modular furniture makers, interior
                      contractors, channel partners and institutional buyers
                    </span>
                  </li>
                  <li className="brand-spec-item">
                    <span className="brand-spec-label">Product Information</span>
                    <span className="brand-spec-value">
                      Provided per exact product and grade against your enquiry scope
                    </span>
                  </li>
                </ul>
              </div>

              <div className="btn-group" style={{ marginTop: 'var(--space-5)' }}>
                <Link href="/enquiry?brand=Starwoods" className="btn btn--primary">
                  Enquire About Starwoods
                </Link>
                <Link href="/resources#document-categories" className="btn btn--secondary">
                  Request Starwoods Literature
                </Link>
              </div>
            </div>

            <figure className="architectural-photo-card" style={{ margin: 0 }}>
              <img
                src="/assets/starwoods-brand-showcase.jpg"
                alt="Starwoods studio material showcase featuring natural oak, teak and ash wood-panel samples with calibrated multi-ply cores."
                width="1400"
                height="933"
              />
              <figcaption className="architectural-photo-meta">
                <span>Starwoods — Engineered Wood-Panel Substrates &amp; Surface Finishes</span>
                <span>NEOM Panels Brand</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Brand 2: NEOM Packing Plywood */}
      <section className="section section--warm reveal-once" id="neom-packing-plywood">
        <div className="container">
          <p className="eyebrow">A NEOM PANELS BRAND</p>
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
                <span className="brand-badge" style={{ marginBottom: 0 }}>
                  A NEOM PANELS BRAND
                </span>
                <span className="brand-category-pill brand-category-pill--oak">
                  Industrial Packaging
                </span>
              </div>

              <div className="packing-logo-plaque">
                <img
                  src="/assets/neom-packing-plywood-logo-horizontal.svg"
                  alt="NEOM Packing Plywood — Packaging Grade · Moisture Resistant — A NEOM Panels Brand"
                  className="packing-logo-img"
                  width="580"
                  height="168"
                />
              </div>

              <h3 className="brand-monograph-title">NEOM Packing Plywood</h3>
              <p className="lead-text" style={{ fontWeight: 600, color: 'var(--color-forest)' }}>
                Packaging-grade plywood for business requirements.
              </p>
              <p>
                NEOM Packing Plywood brings a dedicated packaging-focused offering to the NEOM
                Panels brand portfolio. Our moisture-resistant packaging-grade plywood is intended
                for buyers sourcing sheet material for packing cases, crates and related industrial
                packaging applications.
              </p>
              <p>
                Tell us what you are packing, how the packaging will be handled and the material
                specifications you require. Our team can discuss the relevant product information,
                availability and quotation requirements.
              </p>

              <div
                className="brand-spec-panel"
                style={{
                  marginTop: 'var(--space-5)',
                  backgroundColor: 'var(--color-warm-white)'
                }}
              >
                <h4 className="subsection-title" style={{ marginBottom: 'var(--space-3)' }}>
                  Brand Profile
                </h4>
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
                    <span className="brand-spec-label">Product category</span>
                    <span className="brand-spec-value">Packaging-grade plywood</span>
                  </li>
                  <li className="brand-spec-item">
                    <span className="brand-spec-label">Grade</span>
                    <span className="brand-spec-value">Moisture Resistant — MR</span>
                  </li>
                  <li className="brand-spec-item">
                    <span className="brand-spec-label">Buyer groups</span>
                    <span className="brand-spec-value">
                      Industrial packaging manufacturers, packing-case fabricators, manufacturers,
                      procurement teams and trade suppliers
                    </span>
                  </li>
                  <li className="brand-spec-item">
                    <span className="brand-spec-label">Product information</span>
                    <span className="brand-spec-value">
                      Request current sizes, thicknesses, availability and technical details from
                      our team.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="btn-group" style={{ marginTop: 'var(--space-5)' }}>
                <Link href="/brands/neom-packing-plywood" className="btn btn--primary">
                  Explore the Brand
                </Link>
                <Link
                  href="/enquiry?brand=neom-packing-plywood&category=industrial-packaging"
                  className="btn btn--secondary"
                >
                  Enquire About Packing Plywood
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
                <span>NEOM Packing Plywood — MR Packaging-Grade Plywood</span>
                <span>A NEOM Panels Brand</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section reveal-once">
        <div className="container editorial-statement">
          <div>
            <p className="eyebrow">BRAND ORGANISATION</p>
            <h2 className="section-title">How NEOM and its brands work together.</h2>
          </div>
          <div className="editorial-statement-body">
            <p className="lead-text">
              When sourcing panels for manufacturing schedules, commercial interiors, industrial
              packaging or distribution networks, buyers evaluate both the product brands and the
              manufacturing company standing behind them.
            </p>
            <p>
              NEOM Panels maintains the factory operations, quality specification standards,
              resource priorities and corporate governance that support Starwoods and NEOM Packing
              Plywood. Whether you are requesting grade-specific literature for Starwoods, sourcing
              packaging-grade plywood for crate fabrication, or discussing a multi-application
              supply arrangement with NEOM Panels, your requirement is routed to the appropriate
              commercial desk.
            </p>
            <div style={{ marginTop: 'var(--space-5)' }}>
              <Link href="/manufacturing" className="editorial-link">
                <span>Explore Our Manufacturing Perspective</span>
                <span className="link-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--no-border reveal-once">
        <div className="container split-editorial">
          <div>
            <p className="eyebrow">APPLICATION-LED ENQUIRIES</p>
            <h2 className="section-title">Need help finding the right starting point?</h2>
            <p className="lead-text">
              Begin with your application. Tell us what you are planning and any specification you
              already have.
            </p>
          </div>
          <div className="btn-group">
            <Link href="/enquiry" className="btn btn--primary">
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
    </>
  );
}
