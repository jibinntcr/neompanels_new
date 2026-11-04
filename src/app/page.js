import Link from 'next/link';
import InteractiveApplicationExplorer from '@/components/InteractiveApplicationExplorer';

export default function HomePage() {
  return (
    <main id="main-content">
      {/* Section 1 — Hero */}
      <section className="hero-section section--architectural-grid">
        <div className="container hero-split">
          <div className="hero-copy hero-animate">
            <p className="eyebrow">NEOM Panels · India</p>
            <h1 id="main-heading" tabIndex={-1} className="hero-title">
              Wood panels.
              <br />
              Long-term thinking.
            </h1>
            <p className="lead-text">
              NEOM Panels manufactures wood-panel products for furniture, interior projects and
              industrial packaging. Our brands, Starwoods and NEOM Packing Plywood, serve
              manufacturers, contractors, procurement teams and trade partners.
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
              Furniture manufacturing · Interior projects · Industrial packaging · Institutional
              procurement
            </p>
          </div>

          <div className="architectural-media-stage hero-animate--delay">
            <figure className="architectural-photo-card" style={{ margin: 0 }}>
              <img
                src="/assets/hero-architectural-panels.jpg"
                alt="Architectural interior with natural oak wood-panel wall cladding and calibrated multi-ply panel samples."
                width="1400"
                height="933"
                fetchPriority="high"
              />
              <figcaption className="architectural-photo-meta">
                <span>Furniture and Interior Applications</span>
              </figcaption>
            </figure>

            <div className="architectural-illustration-inset">
              <img
                src="/assets/illustration-home-materials.jpg"
                alt="Illustration of stacked wood-panel sheets beside an interior cabinetry unit."
                width="400"
                height="267"
                loading="lazy"
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
                  Direct factory supply for B2B buyers
                </p>
                <p className="secondary-text" style={{ fontSize: '0.875rem', margin: 0 }}>
                  Wood-panel substrates for furniture OEMs, modular interiors, commercial fit-outs
                  and industrial packing cases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Brands (Which brand serves each application) */}
      <section className="section section--warm reveal-once">
        <div className="container">
          <p className="eyebrow">Our Brands</p>
          <h2 className="section-title">Our brands. Built around your application.</h2>
          <p className="lead-text" style={{ maxWidth: '72ch' }}>
            NEOM Panels organises its wood-panel production across two product brands so buyers can
            match the right material to furniture, interior or industrial packaging requirements.
          </p>

          <div className="brands-dual-grid">
            {/* Card 1: Starwoods */}
            <article className="brand-portfolio-card">
              <div>
                <div className="brand-card-header">
                  <span className="brand-category-pill">Furniture &amp; Interiors</span>
                  <span className="brand-spec-label">A NEOM Panels Brand</span>
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

                <h3
                  className="subsection-title"
                  style={{ fontSize: '1.55rem', marginBottom: '0.5rem' }}
                >
                  Panels for furniture, modular systems and commercial interiors.
                </h3>
                <p>
                  Starwoods serves furniture manufacturers, modular kitchen and wardrobe
                  fabricators, commercial fit-out contractors and regional distribution partners.
                </p>

                <figure
                  className="architectural-photo-card"
                  style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-4)' }}
                >
                  <img
                    src="/assets/starwoods-brand-showcase.jpg"
                    alt="Starwoods natural oak, teak and ash wood-panel samples with calibrated multi-ply edges and brass caliper."
                    width="1400"
                    height="933"
                    loading="lazy"
                  />
                  <figcaption className="architectural-photo-meta">
                    <span>Material Selection</span>
                  </figcaption>
                </figure>

                <div className="brand-spec-panel">
                  <ul className="brand-spec-list" role="list">
                    <li className="brand-spec-item">
                      <span className="brand-spec-label">Applications</span>
                      <span className="brand-spec-value">
                        Serial furniture manufacturing, modular kitchens and wardrobes, commercial
                        joinery and channel distribution
                      </span>
                    </li>
                    <li className="brand-spec-item">
                      <span className="brand-spec-label">Product Information</span>
                      <span className="brand-spec-value">
                        Grade specifications and technical details provided per requirement scope
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="btn-group">
                <Link href="/brands#starwoods" className="btn btn--primary">
                  Explore Starwoods
                </Link>
                <Link href="/enquiry?brand=Starwoods" className="btn btn--secondary">
                  Enquire About Starwoods
                </Link>
              </div>
            </article>

            {/* Card 2: NEOM Packing Plywood */}
            <article className="brand-portfolio-card brand-portfolio-card--packing">
              <div>
                <div className="brand-card-header">
                  <span className="brand-category-pill brand-category-pill--oak">
                    Industrial Packaging
                  </span>
                  <span className="brand-spec-label">A NEOM Panels Brand</span>
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

                <h3
                  className="subsection-title"
                  style={{ fontSize: '1.55rem', marginBottom: '0.5rem' }}
                >
                  Moisture-resistant plywood for industrial packaging.
                </h3>
                <p>
                  MR packaging-grade plywood for buyers sourcing sheet material for packing cases,
                  crates, dividers and protective enclosures.
                </p>

                <figure
                  className="architectural-photo-card"
                  style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-4)' }}
                >
                  <img
                    src="/assets/packing-plywood-showcase.jpg"
                    alt="Stacked packaging-grade plywood sheets with visible cross-ply edges and an assembled timber and plywood packing case."
                    width="1400"
                    height="933"
                    loading="lazy"
                  />
                  <figcaption className="architectural-photo-meta">
                    <span>Packaging-Grade Plywood</span>
                  </figcaption>
                </figure>

                <div className="brand-spec-panel">
                  <ul className="brand-spec-list" role="list">
                    <li className="brand-spec-item">
                      <span className="brand-spec-label">Category &amp; Grade</span>
                      <span className="brand-spec-value">
                        Packaging-grade plywood · Moisture Resistant (MR)
                      </span>
                    </li>
                    <li className="brand-spec-item">
                      <span className="brand-spec-label">Applications</span>
                      <span className="brand-spec-value">
                        Packing cases, crates and protective enclosures, dividers, liners and
                        recurring packaging supply
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="btn-group">
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

      {/* Section 3 — Applications & Buyer Routes */}
      <section className="section reveal-once">
        <div className="container">
          <p className="eyebrow">Applications &amp; Enquiries</p>
          <h2 className="section-title">Start with your requirement.</h2>
          <p className="secondary-text">
            Select an application category below to open the enquiry form with your requirement
            preselected.
          </p>

          <ol className="numbered-rows" role="list">
            <li className="buyer-route-row">
              <Link href="/enquiry?category=manufacturing" className="buyer-route-link">
                <span className="route-index">01</span>
                <h3 className="route-title">Manufacturing &amp; recurring supply</h3>
                <p className="route-desc">
                  Panels for furniture OEMs and modular interior production, including scheduled
                  repeat supply.
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
              <Link href="/enquiry?category=project-requirement" className="buyer-route-link">
                <span className="route-index">02</span>
                <h3 className="route-title">Project requirement</h3>
                <p className="route-desc">
                  Material specifications, BOQ quantities and delivery schedules for interior and
                  commercial fit-out projects.
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
                href="/enquiry?category=institutional-procurement"
                className="buyer-route-link"
              >
                <span className="route-index">03</span>
                <h3 className="route-title">Institutional &amp; public procurement</h3>
                <p className="route-desc">
                  Specification details and technical documentation for institutional and tender
                  requirements.
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
                href="/enquiry?brand=neom-packing-plywood&category=industrial-packaging"
                className="buyer-route-link"
              >
                <span className="route-index">04</span>
                <h3 className="route-title">Industrial packaging / Packing plywood</h3>
                <p className="route-desc">
                  Moisture-resistant packaging-grade plywood for packing cases, crates, dividers and
                  protective enclosures.
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
              <Link href="/enquiry?category=distribution-partnership" className="buyer-route-link">
                <span className="route-index">05</span>
                <h3 className="route-title">Distribution &amp; channel partnership</h3>
                <p className="route-desc">
                  Regional distribution, dealer enquiries and trade supply partnerships across
                  India.
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

          <InteractiveApplicationExplorer />
        </div>
      </section>

      {/* Section 4 — Manufacturing Capabilities & Product Information */}
      <section className="section section--warm reveal-once">
        <div className="container split-editorial">
          <div className="split-editorial-content">
            <p className="eyebrow">Manufacturing &amp; Documentation</p>
            <h2 className="section-title">Company-owned production in India.</h2>
            <p className="lead-text">
              NEOM Panels operates its own wood-panel manufacturing facility in India, managing
              material selection, pressing and calibration, dimensional and surface checks, and
              palletised dispatch.
            </p>
            <ul className="checklist-items" style={{ marginTop: 'var(--space-4)' }}>
              <li>
                <strong>Material selection:</strong> Aligning veneer, core and adhesive inputs with
                furniture, interior or MR packaging applications.
              </li>
              <li>
                <strong>Dimensional &amp; surface checks:</strong> Inspecting nominal thickness,
                squareness, edge integrity and surface finish prior to packing.
              </li>
              <li>
                <strong>Available product information:</strong> Buyer checklists, specification
                parameters and technical documents provided on request for your requirement scope.
              </li>
            </ul>
            <div className="btn-group" style={{ marginTop: 'var(--space-5)' }}>
              <Link href="/manufacturing" className="btn btn--primary">
                Explore Manufacturing
              </Link>
              <Link href="/resources" className="btn btn--secondary">
                Product Information &amp; Guides
              </Link>
            </div>
          </div>

          <figure className="illustration-frame split-editorial-media">
            <img
              src="/assets/illustration-manufacturing.png"
              alt="Illustration showing a stacked wood-panel pallet, roller inspection table, panel sample block and caliper."
              width="1536"
              height="1024"
              loading="lazy"
            />
            <figcaption className="illustration-caption">Panel Inspection</figcaption>
          </figure>
        </div>
      </section>

      {/* Section 5 — Sustainability & Governance */}
      <section className="section reveal-once">
        <div className="container split-editorial split-editorial--reverse">
          <div className="split-editorial-content">
            <p className="eyebrow">Sustainability &amp; Governance</p>
            <h2 className="section-title">Practical resource use and clear accountability.</h2>
            <p className="lead-text">
              Our operational focus covers raw-material origin documentation, sheet yield and offcut
              handling, workplace safety on the factory floor, and accurate grade-specific product
              information aligned with UN SDG 12, SDG 9 and SDG 15.
            </p>

            <ul
              className="priority-tag-list"
              role="list"
              aria-label="Operational focus areas"
            >
              <li className="priority-tag-item">Supplier origin documentation</li>
              <li className="priority-tag-item">Yield &amp; offcut discipline</li>
              <li className="priority-tag-item">Workplace health &amp; safety</li>
              <li className="priority-tag-item">Grade-specific documentation</li>
            </ul>

            <div className="btn-group" style={{ marginTop: 'var(--space-4)' }}>
              <Link href="/sustainability" className="editorial-link">
                <span>Sustainability Practices</span>
                <span className="link-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
              <Link href="/governance" className="editorial-link">
                <span>Corporate Governance</span>
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
                alt="Materials studio workbench with raw timber veneer stacks, wood-panel offcuts and a young green oak sapling."
                width="1400"
                height="933"
                loading="lazy"
              />
              <figcaption className="architectural-photo-meta">
                <span>Material Selection</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Section 6 — Contact & Business Enquiry CTA */}
      <section className="section section--sage-subtle section--no-border reveal-once">
        <div className="container split-editorial">
          <div>
            <p className="eyebrow">Contact Our Team</p>
            <h2 className="section-title">Discuss your panel or packaging requirement.</h2>
            <p className="lead-text" style={{ marginBottom: 0 }}>
              Share your application, required thickness, sheet dimensions, quantity and delivery
              location through our Business Enquiry form to request product information or a
              quotation.
            </p>
          </div>
          <div className="btn-group">
            <Link href="/enquiry" className="btn btn--primary">
              Submit a Business Enquiry
            </Link>
            <Link
              href="/enquiry?brand=neom-packing-plywood&category=industrial-packaging"
              className="btn btn--secondary"
            >
              Request a Packing Plywood Quote
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
