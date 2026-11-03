import Link from 'next/link';

export const metadata = {
  title: 'About NEOM — Indian Panel Manufacturing Business',
  description:
    'NEOM Panels is an Indian panel manufacturing business with its own factory and product brands, including Starwoods. Learn about our purpose, vision, mission and values.'
};

export default function AboutPage() {
  return (
    <>
      <section className="page-header section--architectural-grid">
        <div className="container hero-split">
          <div className="hero-animate">
            <p className="eyebrow">ABOUT NEOM</p>
            <h1 id="main-heading" tabIndex={-1} className="page-title">
              A manufacturing business with a longer view.
            </h1>
            <p className="lead-text">
              NEOM Panels is an Indian panel manufacturing business with its own factory and
              product brands, including Starwoods. We are developing a company that connects
              material supply with a clear commercial identity and a long-term approach to growth.
            </p>
          </div>

          <figure className="architectural-photo-card hero-animate--delay" style={{ margin: 0 }}>
            <img
              src="/assets/hero-architectural-panels.jpg"
              alt="Architectural wood-panel cladding and calibrated panel substrates in a contemporary interior."
              width="1400"
              height="933"
            />
            <figcaption className="architectural-photo-meta">
              <span>NEOM Panels — Corporate &amp; Manufacturing Identity</span>
              <span>ENGINEERED EXCELLENCE, DESIGNED FOR SPACES</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section reveal-once">
        <div className="container editorial-statement">
          <div>
            <p className="eyebrow">OUR ROLE</p>
            <h2 className="section-title">Connecting manufacturing with material choices.</h2>
          </div>
          <div className="editorial-statement-body">
            <p className="lead-text">
              Manufacturers turn panels into furniture. Contractors and designers use materials to
              shape interiors. Institutions make purchasing decisions for the spaces people use
              every day. NEOM’s role is to develop the manufacturing business and information
              behind those material choices.
            </p>
            <p>
              By operating our own manufacturing facility in India and organising our commercial
              range under defined product brands such as Starwoods, we focus on building consistent
              operating discipline, clear technical communication and dependable B2B relationships.
            </p>
            <div className="brand-architecture-row" style={{ marginTop: 'var(--space-5)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <img
                  src="/assets/starwood-logo.png"
                  alt="Starwood — The Plywood Specialist"
                  className="starwood-logo-img--sm"
                  width="619"
                  height="177"
                />
                <div>
                  <span className="brand-spec-label" style={{ display: 'block' }}>
                    Official Product Brand
                  </span>
                  <span style={{ fontWeight: 600, color: 'var(--color-forest)', fontSize: '0.95rem' }}>
                    Starwoods · A NEOM Panels Brand
                  </span>
                </div>
              </div>
              <Link href="/brands#starwoods" className="editorial-link">
                <span>Explore Brand</span>
                <span className="link-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--warm reveal-once">
        <div className="container">
          <p className="eyebrow">FOUNDATION</p>
          <h2 className="section-title">Purpose, vision and mission.</h2>

          <div className="pillars-grid">
            <div className="pillar-cell">
              <p className="eyebrow">PURPOSE</p>
              <h3 className="subsection-title">Why we operate</h3>
              <p>
                To supply panels for useful, well-considered spaces and build lasting value through
                the business behind them.
              </p>
            </div>

            <div className="pillar-cell pillar-cell--highlight">
              <p className="eyebrow">VISION</p>
              <h3 className="subsection-title">Where we are headed</h3>
              <p>
                To build an enduring Indian panel company, recognised for its products, responsible
                practices and strong business relationships.
              </p>
            </div>

            <div className="pillar-cell">
              <p className="eyebrow">MISSION</p>
              <h3 className="subsection-title">How we work</h3>
              <p>
                To develop our manufacturing business and brands through attention to material
                quality, clear product information, resource efficiency and accountable
                partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal-once">
        <div className="container">
          <p className="eyebrow">OPERATING PRINCIPLES</p>
          <h2 className="section-title">Values that guide our decisions.</h2>
          <p className="secondary-text">
            How we approach materials, specifications, resources and commercial commitments.
          </p>

          <ol className="ledger-list" role="list">
            <li className="ledger-row">
              <span className="route-index">01</span>
              <h3 className="route-title">Care for the material</h3>
              <p style={{ margin: 0 }}>
                Understand the product, its application and opportunities for improvement.
              </p>
            </li>
            <li className="ledger-row">
              <span className="route-index">02</span>
              <h3 className="route-title">Clarity in business</h3>
              <p style={{ margin: 0 }}>Communicate requirements and commitments clearly.</p>
            </li>
            <li className="ledger-row">
              <span className="route-index">03</span>
              <h3 className="route-title">Respect for resources</h3>
              <p style={{ margin: 0 }}>
                Consider sourcing, material yield and resource use in business decisions.
              </p>
            </li>
            <li className="ledger-row">
              <span className="route-index">04</span>
              <h3 className="route-title">Accountability in action</h3>
              <p style={{ margin: 0 }}>
                Take responsibility and build systems that support follow-through.
              </p>
            </li>
            <li className="ledger-row">
              <span className="route-index">05</span>
              <h3 className="route-title">Long-term relationships</h3>
              <p style={{ margin: 0 }}>
                Develop customer, employee and partner relationships with a view to the future.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section section--sage-subtle section--no-border reveal-once">
        <div className="container split-editorial">
          <div>
            <p className="eyebrow">EXPLORE FURTHER</p>
            <h2 className="section-title">See how the business is organised.</h2>
            <p className="lead-text">
              Review our brands, manufacturing perspective, governance structure or begin a
              conversation about your next requirement.
            </p>
          </div>
          <div className="btn-group">
            <Link href="/team" className="btn btn--primary">
              Meet Our Leadership
            </Link>
            <Link href="/brands" className="btn btn--secondary">
              Explore Our Brands
            </Link>
            <Link href="/governance" className="btn btn--secondary">
              Governance &amp; Corporate Information
            </Link>
            <Link href="/enquiry" className="editorial-link">
              <span>Submit a Business Enquiry</span>
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
