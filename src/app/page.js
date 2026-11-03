import Link from 'next/link';
import InteractiveApplicationExplorer from '@/components/InteractiveApplicationExplorer';

export default function HomePage() {
  return (
    <>
      {/* Section 1 — Hero */}
      <section className="hero-section section--architectural-grid">
        <div className="container hero-split">
          <div className="hero-copy hero-animate">
            <p className="eyebrow">NEOM PANELS · INDIAN PANEL MANUFACTURER</p>
            <h1 id="main-heading" tabIndex={-1} className="hero-title">
              Wood panels.
              <br />
              Long-term thinking.
            </h1>
            <p className="lead-text">
              NEOM Panels is an Indian panel manufacturing business and the company behind
              Starwoods. With our own factory, we are building our business around material
              quality, lasting partnerships and a considered approach to resources.
            </p>
            <div className="btn-group" style={{ marginTop: 'var(--space-5)' }}>
              <Link href="/brands" className="btn btn--primary">
                Explore Our Brands
              </Link>
              <Link href="/enquiry" className="btn btn--secondary">
                Discuss Your Requirement
              </Link>
            </div>
            <p className="hero-supporting-line">
              Furniture manufacturing · Interior projects · Institutional procurement
            </p>
          </div>

          <div className="architectural-media-stage hero-animate--delay">
            <figure className="architectural-photo-card" style={{ margin: 0 }}>
              <img
                src="/assets/hero-architectural-panels.jpg"
                alt="Sunlit architectural gallery interior with full-height natural oak wood-panel cladding and foreground sample table displaying calibrated multi-ply panel edges."
                width="1400"
                height="933"
                fetchPriority="high"
              />
              <figcaption className="architectural-photo-meta">
                <span>Architectural Panel Applications &amp; Calibrated Substrates</span>
                <span>NEOM Panels · India</span>
              </figcaption>
            </figure>

            <div className="architectural-illustration-inset">
              <img
                src="/assets/illustration-home-materials.jpg"
                alt="Editorial drawing of stacked wood-panel sheets beside a modular interior."
                width="400"
                height="267"
              />
              <div>
                <p
                  style={{
                    fontWeight: 600,
                    color: 'var(--color-forest)',
                    fontSize: '0.9375rem',
                    marginBottom: '0.2rem'
                  }}
                >
                  From raw sheet to completed space
                </p>
                <p className="secondary-text" style={{ fontSize: '0.875rem', margin: 0 }}>
                  Supplying B2B buyers across furniture fabrication, interior contracting and
                  institutional procurement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Company */}
      <section className="section reveal-once">
        <div className="container">
          <div className="editorial-statement">
            <div>
              <p className="eyebrow">COMPANY</p>
              <h2 className="section-title">The business behind the panel.</h2>
            </div>
            <div className="editorial-statement-body">
              <p className="lead-text">
                A panel becomes part of a larger commitment: a production schedule, a furniture
                range or a completed space. Buyers need to understand the material they are
                choosing and the company they are dealing with.
              </p>
              <p>
                NEOM brings its manufacturing business and product brands together under one
                corporate identity. Explore the company, learn about our brands and begin a
                conversation about your requirements.
              </p>
              <div style={{ marginTop: 'var(--space-5)' }}>
                <Link href="/about" className="editorial-link">
                  <span>About NEOM</span>
                  <span className="link-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>

          {/* Tactile Material Swatch Strip */}
          <div className="material-swatch-strip" aria-label="Material finish and substrate palette">
            <div className="swatch-card">
              <div className="swatch-sample swatch-sample--natural-oak" aria-hidden="true" />
              <p className="swatch-title">Natural Timber Grain</p>
              <p className="swatch-meta">Interior joinery &amp; cabinetry</p>
            </div>
            <div className="swatch-card">
              <div className="swatch-sample swatch-sample--calibrated-core" aria-hidden="true" />
              <p className="swatch-title">Calibrated Multi-Ply Core</p>
              <p className="swatch-meta">Dimensional stability &amp; machining</p>
            </div>
            <div className="swatch-card">
              <div className="swatch-sample swatch-sample--warm-timber" aria-hidden="true" />
              <p className="swatch-title">Warm Architectural Teak</p>
              <p className="swatch-meta">Commercial fit-out &amp; wall cladding</p>
            </div>
            <div className="swatch-card">
              <div
                className="swatch-sample swatch-sample--architectural-sage"
                aria-hidden="true"
              />
              <p className="swatch-title">Matte Architectural Surface</p>
              <p className="swatch-meta">Modular wardrobe &amp; kitchen systems</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 — Brands */}
      <section className="section section--warm reveal-once">
        <div className="container">
          <p className="eyebrow">BRANDS</p>
          <h2 className="section-title">Our brands. Your starting point.</h2>
          <p className="lead-text">
            Explore the brands within NEOM Panels for product information and business enquiries.
          </p>

          <div className="brand-showcase">
            <div>
              <span className="brand-badge">NEOM Panels Brand</span>
              <h3 className="brand-monograph-title">Starwoods</h3>
              <p className="lead-text">
                Starwoods is a NEOM Panels brand. Explore its available range or share your
                requirement with NEOM to discuss the next step.
              </p>

              <div className="brand-spec-panel" style={{ marginTop: 'var(--space-5)' }}>
                <ul className="brand-spec-list" role="list">
                  <li className="brand-spec-item">
                    <span className="brand-spec-label">Parent Company</span>
                    <span className="brand-spec-value">NEOM Panels (India)</span>
                  </li>
                  <li className="brand-spec-item">
                    <span className="brand-spec-label">Commercial Scope</span>
                    <span className="brand-spec-value">
                      Furniture manufacturing, modular interiors, commercial fit-outs and regional
                      distribution
                    </span>
                  </li>
                  <li className="brand-spec-item">
                    <span className="brand-spec-label">Enquiry &amp; Documentation Route</span>
                    <span className="brand-spec-value">
                      Direct specification review with Starwoods preselected
                    </span>
                  </li>
                </ul>
              </div>

              <div className="btn-group" style={{ marginTop: 'var(--space-5)' }}>
                <Link href="/enquiry?brand=Starwoods" className="btn btn--primary">
                  Enquire About Starwoods
                </Link>
                <Link href="/brands#starwoods" className="editorial-link">
                  <span>Brand Overview</span>
                  <span className="link-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>

            <figure className="architectural-photo-card" style={{ margin: 0 }}>
              <img
                src="/assets/starwoods-brand-showcase.jpg"
                alt="Curated studio flat-lay of Starwoods natural oak, teak and ash wood-panel swatches with calibrated multi-ply edges and precision brass caliper."
                width="1400"
                height="933"
                loading="lazy"
              />
              <figcaption className="architectural-photo-meta">
                <span>Starwoods — Material Swatches &amp; Calibrated Core Samples</span>
                <span>NEOM Panels Brand</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Section 4 — Buyer routes + Interactive Application Explorer */}
      <section className="section reveal-once">
        <div className="container">
          <p className="eyebrow">BUYER ROUTES</p>
          <h2 className="section-title">What are you planning?</h2>
          <p className="secondary-text">
            Select the route that matches your commercial requirement to open the relevant enquiry
            category.
          </p>

          <ol className="numbered-rows" role="list">
            <li className="buyer-route-row">
              <Link
                href="/enquiry?category=Manufacturing+%26+recurring+supply"
                className="buyer-route-link"
              >
                <span className="route-index">01</span>
                <h3 className="route-title">Manufacturing requirement</h3>
                <p className="route-desc">
                  Discuss panels for a furniture or interior manufacturing requirement, including
                  repeat supply needs.
                </p>
                <span className="route-action">
                  Start enquiry{' '}
                  <span className="link-arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </Link>
            </li>
            <li className="buyer-route-row">
              <Link href="/enquiry?category=Project+requirement" className="buyer-route-link">
                <span className="route-index">02</span>
                <h3 className="route-title">Project requirement</h3>
                <p className="route-desc">
                  Share the material specification, quantities and destination for your interior or
                  fit-out project.
                </p>
                <span className="route-action">
                  Start enquiry{' '}
                  <span className="link-arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </Link>
            </li>
            <li className="buyer-route-row">
              <Link
                href="/enquiry?category=Institutional+%26+public+procurement"
                className="buyer-route-link"
              >
                <span className="route-index">03</span>
                <h3 className="route-title">Institutional requirement</h3>
                <p className="route-desc">
                  Ask about product information and documentation for institutional or
                  public-procurement requirements.
                </p>
                <span className="route-action">
                  Start enquiry{' '}
                  <span className="link-arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </Link>
            </li>
            <li className="buyer-route-row">
              <Link href="/enquiry?category=Distribution+partnership" className="buyer-route-link">
                <span className="route-index">04</span>
                <h3 className="route-title">Business partnership</h3>
                <p className="route-desc">
                  Introduce your distribution, supply or other commercial proposal.
                </p>
                <span className="route-action">
                  Start enquiry{' '}
                  <span className="link-arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </Link>
            </li>
          </ol>

          {/* Interactive Application Context Explorer */}
          <InteractiveApplicationExplorer />
        </div>
      </section>

      {/* Section 5 — Manufacturing */}
      <section className="section section--warm reveal-once">
        <div className="container split-editorial">
          <div className="split-editorial-content">
            <p className="eyebrow">MANUFACTURING</p>
            <h2 className="section-title">Our own factory. A direct manufacturing perspective.</h2>
            <p className="lead-text">
              Manufacturing gives NEOM a direct stake in the material behind its brands. Our
              factory is central to the business we are building and to our plans for stronger
              processes, better information and responsible growth.
            </p>
            <div style={{ marginTop: 'var(--space-5)' }}>
              <Link href="/manufacturing" className="editorial-link">
                <span>Explore Manufacturing</span>
                <span className="link-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>

          <figure className="illustration-frame split-editorial-media">
            <img
              src="/assets/illustration-manufacturing.png"
              alt="Conceptual manufacturing illustration showing a stacked wood-panel pallet, roller inspection table, panel sample block and caliper."
              width="1536"
              height="1024"
              loading="lazy"
            />
            <figcaption className="illustration-caption">
              Conceptual editorial illustration of panel stacking, roller inspection and caliper
              verification.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Section 6 — Sustainability */}
      <section className="section reveal-once">
        <div className="container split-editorial split-editorial--reverse">
          <div className="split-editorial-content">
            <p className="eyebrow">SUSTAINABILITY</p>
            <h2 className="section-title">
              Better use of resources starts with everyday decisions.
            </h2>
            <p className="lead-text">
              Sourcing, production and material use all belong in the sustainability conversation.
              NEOM’s priorities are to improve how these decisions are made and build a clearer
              record of progress as the business develops.
            </p>

            <ul
              className="priority-tag-list"
              role="list"
              aria-label="Sustainability priorities"
            >
              <li className="priority-tag-item">Material sourcing</li>
              <li className="priority-tag-item">Resource efficiency</li>
              <li className="priority-tag-item">People and safety</li>
              <li className="priority-tag-item">Transparent information</li>
            </ul>

            <div style={{ marginTop: 'var(--space-4)' }}>
              <Link href="/sustainability" className="editorial-link">
                <span>Our Sustainability Approach</span>
                <span className="link-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>

          <div className="architectural-media-stage split-editorial-media">
            <figure className="architectural-photo-card" style={{ margin: 0 }}>
              <img
                src="/assets/sustainability-materials-studio.jpg"
                alt="Material research studio workbench with raw timber veneer stacks, wood-panel offcuts, a young green oak sapling and glass measurement beakers."
                width="1400"
                height="933"
                loading="lazy"
              />
              <figcaption className="architectural-photo-meta">
                <span>Material Origins, Offcut Discipline &amp; Resource Measurement</span>
                <span>SDG 12 · Primary Reference</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Section 7 — Corporate direction */}
      <section className="section section--sage-subtle reveal-once">
        <div className="container editorial-statement">
          <div>
            <p className="eyebrow">CORPORATE DIRECTION</p>
            <h2 className="section-title">Building the company alongside the brand.</h2>
          </div>
          <div className="editorial-statement-body">
            <p className="lead-text">
              Our ambition is to build an enduring Indian panel business. That means developing our
              brands while strengthening the management systems, accountability and business
              relationships behind them.
            </p>
            <div style={{ marginTop: 'var(--space-5)' }}>
              <Link href="/governance" className="editorial-link">
                <span>Company &amp; Governance</span>
                <span className="link-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8 — Closing action */}
      <section className="section section--no-border reveal-once">
        <div className="container split-editorial">
          <div>
            <p className="eyebrow">BUSINESS ENQUIRY</p>
            <h2 className="section-title">Bring us your next requirement.</h2>
            <p className="lead-text">
              Tell us what you are making, where the material is needed and the information you
              have so far.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Link href="/enquiry" className="btn btn--primary">
              Submit a Business Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
