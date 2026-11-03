import Link from 'next/link';

export const metadata = {
  title: 'Brands — Corporate Identity Behind Starwoods',
  description:
    'NEOM Panels provides the corporate identity behind its product brands, including Starwoods. Explore Starwoods or discuss your panel requirement with NEOM.'
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
          </div>

          <div className="brand-architecture-card hero-animate--delay">
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.25rem' }}>
                BRAND ARCHITECTURE
              </p>
              <h2 className="subsection-title" style={{ marginBottom: '0.25rem' }}>
                Corporate parent &amp; product brand
              </h2>
              <p className="secondary-text" style={{ fontSize: '0.9rem', marginBottom: 0 }}>
                Manufacturing, quality specification, and corporate governance under NEOM Panels.
              </p>
            </div>
            <div className="brand-architecture-row">
              <div>
                <span className="brand-spec-label" style={{ display: 'block', marginBottom: '0.35rem' }}>
                  Manufacturing Parent
                </span>
                <img
                  src="/assets/logo-horizontal.png"
                  alt="NEOM Panels"
                  style={{ height: '2.5rem', width: 'auto', objectFit: 'contain' }}
                  width="540"
                  height="180"
                />
              </div>
              <div style={{ color: 'var(--color-secondary)', fontWeight: 600, fontSize: '1.25rem' }} aria-hidden="true">
                →
              </div>
              <div>
                <span className="brand-spec-label" style={{ display: 'block', marginBottom: '0.35rem' }}>
                  Product Brand
                </span>
                <img
                  src="/assets/starwood-logo.png"
                  alt="Starwood — The Plywood Specialist"
                  className="starwood-logo-img--sm"
                  width="615"
                  height="149"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal-once" id="starwoods">
        <div className="container">
          <p className="eyebrow">PRODUCT BRAND</p>
          <h2 className="section-title">Starwoods</h2>

          <div className="brand-showcase">
            <div>
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
                <span className="brand-badge" style={{ marginBottom: 0 }}>Official Brand of NEOM Panels</span>
              </div>
              <div className="starwood-logo-plaque">
                <img
                  src="/assets/starwood-logo.png"
                  alt="Starwood — The Plywood Specialist"
                  className="starwood-logo-img"
                  width="615"
                  height="149"
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
                    <span className="brand-spec-label">Brand Identity</span>
                    <span
                      className="brand-spec-value"
                      style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', marginTop: '0.2rem' }}
                    >
                      <img
                        src="/assets/starwood-logo.png"
                        alt="Starwood — The Plywood Specialist"
                        className="starwood-logo-img--xs"
                        width="615"
                        height="149"
                      />
                      <span>Starwoods (The Plywood Specialist)</span>
                    </span>
                  </li>
                  <li className="brand-spec-item">
                    <span className="brand-spec-label">Manufacturing &amp; Corporate Parent</span>
                    <span className="brand-spec-value">NEOM Panels (India)</span>
                  </li>
                  <li className="brand-spec-item">
                    <span className="brand-spec-label">Primary Buyer Audiences</span>
                    <span className="brand-spec-value">
                      Furniture &amp; OEM manufacturers, modular furniture makers, interior
                      contractors, channel partners and institutional buyers
                    </span>
                  </li>
                  <li className="brand-spec-item">
                    <span className="brand-spec-label">Product Documentation</span>
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
                <Link href="/resources#brand-literature" className="btn btn--secondary">
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

      <section className="section section--warm reveal-once">
        <div className="container editorial-statement">
          <div>
            <p className="eyebrow">BRAND ORGANISATION</p>
            <h2 className="section-title">How NEOM and its brands work together.</h2>
          </div>
          <div className="editorial-statement-body">
            <p className="lead-text">
              When sourcing panels for manufacturing schedules, commercial interiors or
              distribution networks, buyers evaluate both the product brand and the manufacturing
              company standing behind it.
            </p>
            <p>
              NEOM Panels maintains the factory operations, quality specification standards,
              resource priorities and corporate governance that support Starwoods. Whether you are
              requesting grade-specific literature for Starwoods or discussing a multi-application
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
