import Link from 'next/link';

export const metadata = {
  title: 'Products & Materials Portfolio | NEOM Panels',
  description:
    'Explore the NEOM Panels Phase 1 portfolio of engineered wood substrates: Structural & Specialty Plywood, Solid Engineered Boards (MDF & HDHMR), and Architectural Decorative Surfaces.',
  alternates: {
    canonical: '/products'
  }
};

export default function ProductsPage() {
  return (
    <div className="page-view">
      {/* Page Header */}
      <section className="page-header-section bg-warm-ivory border-bottom-divider">
        <div className="container">
          <div className="page-header-content">
            <span className="section-eyebrow font-mono">PHASE 1 ARCHITECTURE</span>
            <h1 className="page-title">The Materials Portfolio</h1>
            <p className="page-lead-text">
              An integrated collection of engineered wood substrates and surface materials designed for precision joinery, commercial interiors, and architectural spaces.
            </p>
            <div className="page-header-cta-row">
              <Link href="/enquiry" className="btn btn-primary">
                <span>Discuss Your Requirement</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Portfolio Sections */}
      <section className="section-spacing" aria-label="Portfolio Families">
        <div className="container">
          <div className="portfolio-family-blocks">
            {/* Family 1: Structural & Specialty Plywood */}
            <div className="portfolio-block">
              <div className="portfolio-block-grid">
                <div className="portfolio-block-img-wrap">
                  <img
                    src="/assets/product-structural-plywood.jpg"
                    alt="Multi-ply calibrated hardwood structural plywood panel stack"
                    className="portfolio-block-img"
                    width="700"
                    height="480"
                    loading="eager"
                  />
                  <div className="portfolio-block-badge font-mono">01 / SUBSTRATES</div>
                </div>

                <div className="portfolio-block-copy">
                  <span className="portfolio-category font-mono">STRUCTURAL &amp; SPECIALTY</span>
                  <h2 className="portfolio-title">Structural &amp; Specialty Plywood</h2>
                  <p className="portfolio-desc">
                    Engineered multi-layer wood panels manufactured through disciplined quality partnerships. Formulated to provide exceptional structural strength, dimensional stability, and dependable screw-holding capability across demanding residential, commercial, and wet-area interior applications.
                  </p>

                  <div className="portfolio-variants-card">
                    <h3 className="portfolio-variants-heading font-mono">PHASE 1 VARIANTS</h3>
                    <ul className="portfolio-variants-list" role="list">
                      <li>
                        <strong>Premium Plywood:</strong> Calibrated substrate engineered for bespoke furniture carcasses, architectural joinery, and wardrobe framing.
                      </li>
                      <li>
                        <strong>Marine Plywood:</strong> Specially bonded plywood substrate designed for high-moisture exposure, kitchen under-sink areas, and coastal environments.
                      </li>
                      <li>
                        <strong>BWR / BWP Plywood:</strong> Boiling water resistant and boiling water proof panels for enduring interior cabinetry and utility partitions.
                      </li>
                    </ul>
                  </div>

                  <div className="portfolio-specs-notice">
                    <span className="font-mono text-muted">Note:</span> Contact NEOM Panels for current product specifications, dimensions, and availability.
                  </div>

                  <div className="portfolio-actions-row">
                    <Link href="/products/plywood" className="btn btn-secondary">
                      <span>View Family Details</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                    <Link
                      href="/enquiry?family=Structural+%26+Specialty+Plywood"
                      className="btn btn-primary btn-sm"
                    >
                      Enquire on Plywood
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Family 2: Solid Engineered Boards */}
            <div className="portfolio-block" style={{ marginTop: '5rem' }}>
              <div className="portfolio-block-grid portfolio-block-grid--reverse">
                <div className="portfolio-block-copy">
                  <span className="portfolio-category font-mono">ENGINEERED CORES</span>
                  <h2 className="portfolio-title">Solid Engineered Boards</h2>
                  <p className="portfolio-desc">
                    High-density homogenous panels engineered from refined wood fibers. Designed specifically for flawless CNC routing, crisp edge profiling, and high-performance paint or laminate lamination without surface telegraphing.
                  </p>

                  <div className="portfolio-variants-card">
                    <h3 className="portfolio-variants-heading font-mono">PHASE 1 VARIANTS</h3>
                    <ul className="portfolio-variants-list" role="list">
                      <li>
                        <strong>Medium-Density Fiberboard (MDF):</strong> Consistent internal density panel engineered for smooth surface finishing, carved shutters, and interior moldings.
                      </li>
                      <li>
                        <strong>High-Density Moisture-Resistant (HDHMR):</strong> High-density moisture-resistant core panels built to withstand humidity and direct water contact in modular kitchens and vanity units.
                      </li>
                      <li>
                        <strong>Pre-Laminated MDF:</strong> Factory-pressed decorative melamine surfacing on high-density MDF cores, ready for direct modular panel processing.
                      </li>
                    </ul>
                  </div>

                  <div className="portfolio-specs-notice">
                    <span className="font-mono text-muted">Note:</span> Contact NEOM Panels for current product specifications, dimensions, and availability.
                  </div>

                  <div className="portfolio-actions-row">
                    <Link href="/products/engineered-boards" className="btn btn-secondary">
                      <span>View Family Details</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                    <Link
                      href="/enquiry?family=Engineered+Boards"
                      className="btn btn-primary btn-sm"
                    >
                      Enquire on Boards
                    </Link>
                  </div>
                </div>

                <div className="portfolio-block-img-wrap">
                  <img
                    src="/assets/product-engineered-boards.jpg"
                    alt="Cross-section of high-density MDF and HDHMR engineered boards"
                    className="portfolio-block-img"
                    width="700"
                    height="480"
                    loading="lazy"
                  />
                  <div className="portfolio-block-badge font-mono">02 / FIBER CORES</div>
                </div>
              </div>
            </div>

            {/* Family 3: Decorative Surfaces */}
            <div className="portfolio-block" style={{ marginTop: '5rem' }}>
              <div className="portfolio-block-grid">
                <div className="portfolio-block-img-wrap">
                  <img
                    src="/assets/product-decorative-surfaces.jpg"
                    alt="Architectural veneers, high-gloss acrylics, and fluted charcoal panels"
                    className="portfolio-block-img"
                    width="700"
                    height="480"
                    loading="lazy"
                  />
                  <div className="portfolio-block-badge font-mono">03 / SURFACES</div>
                </div>

                <div className="portfolio-block-copy">
                  <span className="portfolio-category font-mono">DECORATIVE SURFACES</span>
                  <h2 className="portfolio-title">Decorative Surfaces</h2>
                  <p className="portfolio-desc">
                    A curated collection of architectural finishes bringing tactile warmth, visual depth, and durability to interior spaces. Formulated to complement NEOM Panels substrates for seamless modular fabrication.
                  </p>

                  <div className="portfolio-variants-card">
                    <h3 className="portfolio-variants-heading font-mono">PHASE 1 VARIANTS</h3>
                    <ul className="portfolio-variants-list" role="list">
                      <li>
                        <strong>Architectural Natural &amp; Smoked Veneers:</strong> Premium sliced timber veneers highlighting organic grain patterns and natural wood tonality.
                      </li>
                      <li>
                        <strong>High-Pressure Laminates (HPL):</strong> Impact, scratch, and wear-resistant decorative surfacing sheets for heavy-traffic horizontal and vertical applications.
                      </li>
                      <li>
                        <strong>Acrylic Panels:</strong> Deep glass-effect high-gloss and seamless matte acrylic surfaces for contemporary kitchen shutters and bespoke millwork.
                      </li>
                      <li>
                        <strong>Charcoal Panels:</strong> Linear fluted and sculpted wall panels providing acoustic absorption and dramatic focal relief in commercial lounges.
                      </li>
                    </ul>
                  </div>

                  <div className="portfolio-specs-notice">
                    <span className="font-mono text-muted">Note:</span> Contact NEOM Panels for current product specifications, dimensions, and availability.
                  </div>

                  <div className="portfolio-actions-row">
                    <Link href="/products/decorative-surfaces" className="btn btn-secondary">
                      <span>View Family Details</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                    <Link
                      href="/enquiry?family=Decorative+Surfaces"
                      className="btn btn-primary btn-sm"
                    >
                      Enquire on Surfaces
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Material Consultation Section */}
      <section className="section-spacing bg-warm-ivory border-top-divider">
        <div className="container">
          <div className="consultation-banner">
            <div className="consultation-copy">
              <span className="section-eyebrow font-mono">SPECIFICATION ASSISTANCE</span>
              <h2 className="section-title">Need guidance on the right substrate?</h2>
              <p className="consultation-desc">
                Our team assists architects, furniture OEMs, and contractors in selecting the exact core composition, resin bonding, and surface finish for their target project environment.
              </p>
            </div>
            <div className="consultation-action">
              <Link href="/enquiry" className="btn btn-primary">
                <span>Request Specification Support</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
