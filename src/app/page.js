import Link from 'next/link';
import InteractiveApplicationExplorer from '@/components/InteractiveApplicationExplorer';
import DocumentRequestButton from '@/components/DocumentRequestButton';
import HeroInteractiveShowcase from '@/components/HeroInteractiveShowcase';

export default function HomePage() {
  return (
    <main id="main-content">
      {/* 1. DYNAMIC ARCHITECTURAL HERO */}
      <section className="hero-section hero-section--dynamic section--architectural-grid">
        <div className="container">
          <div className="hero-split hero-split--dynamic">
            <div className="hero-copy hero-animate">
              <div className="hero-kicker-bar">
                <span className="hero-kicker-dot" aria-hidden="true" />
                <span>NEOM PANELS · INDIAN WOOD-PANEL MANUFACTURING</span>
              </div>

              <h1 id="main-heading" tabIndex={-1} className="hero-title hero-title--tight">
                Wood panels.
                <br />
                <span className="hero-title-accent">Long-term thinking.</span>
              </h1>

              <p className="lead-text hero-lead">
                NEOM Panels manufactures wood-panel products for furniture, interior projects and
                industrial packaging. Our brands, Starwoods and NEOM Packing Plywood, serve
                manufacturers, contractors, procurement teams and trade partners.
              </p>

              <div className="btn-group hero-cta-row">
                <Link href="/brands" className="btn btn--primary">
                  <span>Explore Our Brands</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <Link href="/enquiry" className="btn btn--secondary">
                  Discuss Your Requirement
                </Link>
              </div>

              {/* Direct Brand Quick-Cards in Hero */}
              <div className="hero-brand-dock" aria-label="NEOM Panels Product Brands">
                <Link href="/brands#starwoods" className="hero-brand-mini-card">
                  <div className="hero-brand-mini-top">
                    <span className="brand-category-pill">Furniture &amp; Interiors</span>
                    <span className="hero-brand-mini-arrow" aria-hidden="true">
                      →
                    </span>
                  </div>
                  <img
                    src="/assets/starwood-logo.png"
                    alt="Starwoods — The Plywood Specialist"
                    className="starwood-logo-img--xs"
                    width="619"
                    height="177"
                  />
                  <p className="hero-brand-mini-desc">
                    Calibrated substrates for OEM furniture, modular systems &amp; commercial
                    fit-outs.
                  </p>
                </Link>

                <Link
                  href="/brands/neom-packing-plywood"
                  className="hero-brand-mini-card hero-brand-mini-card--oak"
                >
                  <div className="hero-brand-mini-top">
                    <span className="brand-category-pill brand-category-pill--oak">
                      Industrial Packaging
                    </span>
                    <span className="hero-brand-mini-arrow" aria-hidden="true">
                      →
                    </span>
                  </div>
                  <img
                    src="/assets/neom-packing-plywood-logo-compact.svg"
                    alt="NEOM Packing Plywood"
                    className="packing-logo-img--xs"
                    width="540"
                    height="112"
                  />
                  <p className="hero-brand-mini-desc">
                    Moisture-resistant (MR) plywood for packing cases, crates &amp; dividers.
                  </p>
                </Link>
              </div>

              <div className="hero-supporting-chips" aria-label="Primary application sectors">
                <span className="hero-sector-chip">Furniture manufacturing</span>
                <span className="hero-sector-chip">Interior projects</span>
                <span className="hero-sector-chip">Industrial packaging</span>
                <span className="hero-sector-chip">Institutional procurement</span>
              </div>
            </div>

            {/* Right Interactive Multi-Brand & Factory Stage */}
            <HeroInteractiveShowcase />
          </div>

          {/* Integrated Above-the-Fold B2B Capability Ribbon */}
          <div className="hero-capability-ribbon reveal-once" aria-label="Manufacturing and supply highlights">
            <div className="hero-capability-cell">
              <span className="hero-capability-num">01 · MANUFACTURING BASE</span>
              <strong className="hero-capability-heading">Company-Owned Factory in India</strong>
              <p className="hero-capability-text">
                Controlled veneer selection, hot-press bonding, calibration and pre-dispatch checks.
              </p>
            </div>
            <div className="hero-capability-cell">
              <span className="hero-capability-num">02 · STARWOODS BRAND</span>
              <strong className="hero-capability-heading">Furniture &amp; Architectural Panels</strong>
              <p className="hero-capability-text">
                Engineered panels for OEM production lines, modular kitchens, wardrobes and fit-outs.
              </p>
            </div>
            <div className="hero-capability-cell">
              <span className="hero-capability-num">03 · NEOM PACKING PLYWOOD</span>
              <strong className="hero-capability-heading">MR Packaging-Grade Plywood</strong>
              <p className="hero-capability-text">
                Practical sheet supply for industrial packing cases, crating and protective liners.
              </p>
            </div>
            <div className="hero-capability-cell">
              <span className="hero-capability-num">04 · COMMERCIAL DESK</span>
              <strong className="hero-capability-heading">Direct B2B &amp; Repeat Supply</strong>
              <p className="hero-capability-text">
                Structured quotations for single project BOQs, recurring OEM batches and trade stock.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PRODUCT BRANDS — VISUAL PORTFOLIO CARDS */}
      <section className="section section--warm reveal-once" id="brands-overview">
        <div className="container">
          <div className="section-header-split">
            <div>
              <p className="eyebrow">PRODUCT BRANDS</p>
              <h2 className="section-title">Our brands. Built around your application.</h2>
              <p className="lead-text" style={{ marginBottom: 0 }}>
                Explore NEOM Panels’ product brands for furniture, interiors and industrial
                packaging. Start with your application, then connect with our team to discuss the
                relevant material and supply requirements.
              </p>
            </div>
            <div className="section-header-actions">
              <Link href="/brands" className="btn btn--secondary">
                Compare Brand Architecture
              </Link>
            </div>
          </div>

          <div className="brands-dual-grid" role="region" aria-label="NEOM Panels Product Brands">
            {/* Card 1: Starwoods */}
            <article className="brand-portfolio-card brand-portfolio-card--visual">
              <div>
                <div className="brand-card-visual-banner">
                  <img
                    src="/assets/starwoods-brand-showcase.jpg"
                    alt="Starwoods calibrated wood panels and interior joinery finishes."
                    width="900"
                    height="520"
                    loading="lazy"
                  />
                  <div className="brand-card-visual-badges">
                    <span className="brand-category-pill">Furniture &amp; Interiors</span>
                    <span className="brand-visual-caption-tag">
                      Furniture and Interior Applications
                    </span>
                  </div>
                </div>

                <div className="starwood-logo-plaque">
                  <img
                    src="/assets/starwood-logo.png"
                    alt="Starwoods — The Plywood Specialist"
                    className="starwood-logo-img--sm"
                    width="619"
                    height="177"
                  />
                </div>

                <h3 className="subsection-title" style={{ fontSize: '1.5rem' }}>
                  Panels for furniture and interior spaces.
                </h3>
                <p>
                  Starwoods serves furniture manufacturers, modular kitchen and wardrobe
                  fabricators, interior contractors and channel partners looking for consistent
                  wood-panel substrates and clear specification support.
                </p>

                <div className="brand-spec-panel" style={{ marginTop: 'var(--space-4)' }}>
                  <dl className="brand-spec-list">
                    <div className="brand-spec-item">
                      <dt className="brand-spec-label">Applications</dt>
                      <dd className="brand-spec-value" style={{ margin: 0 }}>
                        Residential and commercial furniture, modular cabinetry, partitions and
                        interior fit-outs
                      </dd>
                    </div>
                    <div className="brand-spec-item">
                      <dt className="brand-spec-label">Buyer Groups</dt>
                      <dd className="brand-spec-value" style={{ margin: 0 }}>
                        OEM manufacturers, modular fabricators, fit-out contractors, architects and
                        distributors
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="btn-group" style={{ marginTop: 'var(--space-2)' }}>
                <Link href="/brands#starwoods" className="btn btn--primary">
                  Explore Starwoods
                </Link>
                <Link
                  href="/enquiry?brand=starwoods&category=product-info"
                  className="btn btn--secondary"
                >
                  Enquire About Starwoods
                </Link>
              </div>
            </article>

            {/* Card 2: NEOM Packing Plywood */}
            <article className="brand-portfolio-card brand-portfolio-card--packing brand-portfolio-card--visual">
              <div>
                <div className="brand-card-visual-banner">
                  <img
                    src="/assets/packing-plywood-showcase.jpg"
                    alt="NEOM Packing Plywood stacked moisture-resistant sheets and industrial packing crates."
                    width="900"
                    height="520"
                    loading="lazy"
                  />
                  <div className="brand-card-visual-badges">
                    <span className="brand-category-pill brand-category-pill--oak">
                      Industrial Packaging
                    </span>
                    <span className="brand-visual-caption-tag">Packaging-Grade Plywood</span>
                  </div>
                </div>

                <div className="packing-logo-plaque">
                  <img
                    src="/assets/neom-packing-plywood-logo.svg"
                    alt="NEOM Packing Plywood — Packaging Grade · Moisture Resistant"
                    className="packing-logo-img--sm"
                    width="680"
                    height="180"
                  />
                </div>

                <h3 className="subsection-title" style={{ fontSize: '1.5rem' }}>
                  Plywood for practical packing requirements.
                </h3>
                <p>
                  Moisture-resistant packaging-grade plywood for buyers sourcing material for
                  packing cases, crates and industrial packaging components. Share your application,
                  sheet dimensions and quantity requirements with our team.
                </p>

                <div className="brand-spec-panel" style={{ marginTop: 'var(--space-4)' }}>
                  <dl className="brand-spec-list">
                    <div className="brand-spec-item">
                      <dt className="brand-spec-label">Applications</dt>
                      <dd className="brand-spec-value" style={{ margin: 0 }}>
                        Packing cases, crates and protective enclosures, dividers, liners and
                        packaging panels
                      </dd>
                    </div>
                    <div className="brand-spec-item">
                      <dt className="brand-spec-label">Grade &amp; Purchasing</dt>
                      <dd className="brand-spec-value" style={{ margin: 0 }}>
                        Moisture Resistant (MR) packaging grade · One-time orders and recurring
                        supply
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>

              <div className="btn-group" style={{ marginTop: 'var(--space-2)' }}>
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
            </article>
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE APPLICATION EXPLORER */}
      <section className="section reveal-once">
        <div className="container">
          <div className="section-header-split">
            <div>
              <p className="eyebrow">APPLICATIONS &amp; BUYER ROUTES</p>
              <h2 className="section-title">Start with the application.</h2>
              <p className="lead-text" style={{ marginBottom: 0 }}>
                Select your sector below to review typical panel considerations, or choose your
                procurement route directly.
              </p>
            </div>
            <div className="section-header-actions">
              <Link href="/industries" className="editorial-link">
                <span>View All 7 Industry Sectors</span>
                <span className="link-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>

          <InteractiveApplicationExplorer />

          <ol className="numbered-rows" role="list">
            <li className="buyer-route-row">
              <Link
                href="/enquiry?brand=starwoods&category=manufacturing&application=Furniture+%26+OEM+Manufacturing"
                className="buyer-route-link"
              >
                <span className="route-index">01</span>
                <h3 className="route-title">Furniture &amp; Modular Manufacturing</h3>
                <p className="route-desc">
                  Panel substrates for serial furniture lines, modular kitchens, wardrobes and OEM
                  production schedules under Starwoods.
                </p>
                <span className="route-action">
                  <span>Discuss OEM Supply</span>
                  <span className="link-arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </Link>
            </li>
            <li className="buyer-route-row">
              <Link
                href="/enquiry?brand=starwoods&category=project-requirement&application=Projects+%26+Commercial+Interiors"
                className="buyer-route-link"
              >
                <span className="route-index">02</span>
                <h3 className="route-title">Projects &amp; Commercial Interiors</h3>
                <p className="route-desc">
                  BOQ-based supply for interior contractors, architects and commercial fit-out
                  programmes.
                </p>
                <span className="route-action">
                  <span>Share Project BOQ</span>
                  <span className="link-arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </Link>
            </li>
            <li className="buyer-route-row">
              <Link
                href="/enquiry?brand=neom-packing-plywood&category=industrial-packaging"
                className="buyer-route-link"
              >
                <span className="route-index">03</span>
                <h3 className="route-title">Industrial Packaging &amp; Crating</h3>
                <p className="route-desc">
                  MR packaging-grade plywood under NEOM Packing Plywood for packing cases, crates,
                  dividers and recurring industrial supply.
                </p>
                <span className="route-action">
                  <span>Request Packaging Quote</span>
                  <span className="link-arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </Link>
            </li>
            <li className="buyer-route-row">
              <Link
                href="/enquiry?category=institutional-procurement"
                className="buyer-route-link"
              >
                <span className="route-index">04</span>
                <h3 className="route-title">Institutions &amp; Channel Partners</h3>
                <p className="route-desc">
                  Specification alignment for public procurement tenders and regional distribution
                  partnerships across India.
                </p>
                <span className="route-action">
                  <span>Contact Commercial Team</span>
                  <span className="link-arrow" aria-hidden="true">
                    →
                  </span>
                </span>
              </Link>
            </li>
          </ol>
        </div>
      </section>

      {/* 4. MANUFACTURING CAPABILITIES & PRODUCT INFORMATION */}
      <section className="section section--sage-subtle section--no-border reveal-once">
        <div className="container">
          <div className="split-editorial">
            <div>
              <p className="eyebrow">MANUFACTURING &amp; QUALITY CONTROL</p>
              <h2 className="section-title">
                Built on factory discipline and clear specifications.
              </h2>
              <p className="lead-text">
                NEOM Panels operates its own wood-panel manufacturing facility in India. Our
                production process focuses on four core stages:
              </p>
              <ul className="priority-tag-list" role="list">
                <li className="priority-tag-item">Material selection</li>
                <li className="priority-tag-item">Pressing &amp; panel production</li>
                <li className="priority-tag-item">Dimensional &amp; surface checks</li>
                <li className="priority-tag-item">Packing &amp; dispatch</li>
              </ul>
              <p>
                Product specifications, available thicknesses, sheet dimensions and technical
                documents are provided against your exact brand and grade requirement so procurement
                and project teams can verify suitability before ordering.
              </p>
              <div className="btn-group" style={{ marginTop: 'var(--space-5)' }}>
                <Link href="/manufacturing" className="btn btn--primary">
                  View Manufacturing Process
                </Link>
                <DocumentRequestButton
                  docTitle="Grade-Specific Technical Specification & Brand Literature"
                  docCategory="Technical Documents"
                  label="Request Technical Documents"
                />
              </div>
            </div>

            <div className="manufacturing-highlight-stage">
              <figure className="architectural-photo-card" style={{ margin: 0 }}>
                <img
                  src="/assets/industry-furniture-oem.jpg"
                  alt="Calibrated multi-ply wood panels and precision-machined components in the factory inspection area."
                  width="1400"
                  height="933"
                  loading="lazy"
                />
                <figcaption className="architectural-photo-meta">
                  <span>Panel Inspection</span>
                  <span>India Manufacturing Facility</span>
                </figcaption>
              </figure>

              <div className="manufacturing-spec-strip">
                <div className="manufacturing-spec-pill">
                  <strong>Thickness &amp; Squareness</strong>
                  <span>Checked across production batches</span>
                </div>
                <div className="manufacturing-spec-pill">
                  <strong>B2B Dispatch</strong>
                  <span>Bundled &amp; corner-protected for transit</span>
                </div>
              </div>
            </div>
          </div>

          {/* 5. HIGH-CONTRAST B2B QUOTATION COMMAND BANNER */}
          <div className="home-cta-command-banner">
            <div className="home-cta-command-copy">
              <p className="home-cta-command-eyebrow">DIRECT B2B COMMERCIAL DESK</p>
              <h2 className="home-cta-command-title">
                Ready to discuss a panel specification or recurring supply schedule?
              </h2>
              <p className="home-cta-command-desc">
                Share your target application, thickness, sheet dimensions, quantity and delivery
                location. Every enquiry receives a reference ID for follow-up by our commercial and
                technical team.
              </p>
            </div>
            <div className="home-cta-command-actions">
              <Link href="/enquiry" className="btn home-cta-btn-light">
                Submit a Business Enquiry →
              </Link>
              <Link
                href="/enquiry?brand=neom-packing-plywood&category=industrial-packaging"
                className="btn home-cta-btn-outline"
              >
                Request Packing Plywood Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
