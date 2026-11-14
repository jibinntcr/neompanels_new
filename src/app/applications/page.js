import Link from 'next/link';

export const metadata = {
  title: 'Applications & Sectors | NEOM Panels',
  description:
    'Discover how NEOM Panels engineered wood substrates and decorative surfaces serve four vital industries: Construction, Manufacturing, Packaging & Warehousing, and Furniture & Interiors.',
  alternates: {
    canonical: '/applications'
  }
};

export default function ApplicationsPage() {
  return (
    <div className="page-view">
      {/* Page Header */}
      <section className="page-header-section bg-warm-ivory border-bottom-divider">
        <div className="container">
          <div className="page-header-content">
            <span className="section-eyebrow font-mono">SECTORS &amp; APPLICATIONS</span>
            <h1 className="page-title">One Brand. Multiple Industries.</h1>
            <p className="page-lead-text">
              Engineered wood panels, calibrated substrates, and decorative finishes tailored to the technical and operational demands of four foundational sectors.
            </p>
            <div className="page-header-cta-row">
              <Link href="/enquiry" className="btn btn-primary">
                <span>Discuss Project Requirements</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Applications Section */}
      <section className="section-spacing" aria-label="Core Supported Industries">
        <div className="container">
          <div className="applications-detailed-list">
            {/* Sector 1: Construction */}
            <article className="application-detail-block" id="construction">
              <div className="application-detail-grid">
                <div className="application-detail-img-wrap">
                  <img
                    src="/assets/sector-construction.jpg"
                    alt="Modern residential and commercial building construction site with structural timber frameworks"
                    className="application-detail-img"
                    width="700"
                    height="450"
                    loading="eager"
                  />
                  <div className="application-detail-badge font-mono">SECTOR 01</div>
                </div>

                <div className="application-detail-copy">
                  <span className="application-kicker font-mono">BUILDING &amp; INFRASTRUCTURE</span>
                  <h2 className="application-detail-title">Construction</h2>
                  <p className="application-lead-paragraph">
                    Residential, commercial, and project-led building applications requiring reliable panel substrates for interior partition framing, ceiling paneling, sub-flooring, and architectural joinery.
                  </p>
                  <p className="application-body-text">
                    In modern building construction, material consistency and reliable screw retention are vital to maintaining installation schedules. NEOM Panels supplies engineered multi-layer plywood and stable board substrates that integrate cleanly with conventional framing systems.
                  </p>

                  <div className="relevant-products-box">
                    <span className="relevant-box-title font-mono">RELEVANT PRODUCT FAMILIES</span>
                    <ul className="relevant-products-list" role="list">
                      <li>
                        <Link href="/products/plywood" className="relevant-product-link">
                          <strong>Structural &amp; Specialty Plywood:</strong> Marine and BWR / BWP grades for durable building partitions.
                        </Link>
                      </li>
                      <li>
                        <Link href="/products/engineered-boards" className="relevant-product-link">
                          <strong>Solid Engineered Boards:</strong> High-density MDF for moldings and architectural joinery trim.
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="application-actions">
                    <Link
                      href="/enquiry?category=Project+requirement&application=Construction"
                      className="btn btn-secondary"
                    >
                      <span>Enquire on Construction Supply</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Sector 2: Manufacturing */}
            <article className="application-detail-block" id="manufacturing" style={{ marginTop: '5rem' }}>
              <div className="application-detail-grid application-detail-grid--reverse">
                <div className="application-detail-copy">
                  <span className="application-kicker font-mono">INDUSTRIAL &amp; PRODUCTION</span>
                  <h2 className="application-detail-title">Manufacturing</h2>
                  <p className="application-lead-paragraph">
                    Industrial facilities, production environments, and utility spaces needing uniform wood substrates for batch processing, assembly workbenches, and protective fixtures.
                  </p>
                  <p className="application-body-text">
                    Industrial manufacturers depend on dimensional predictability and uniform thickness across large panel volumes to minimize machine setup adjustments and avoid production downtime.
                  </p>

                  <div className="relevant-products-box">
                    <span className="relevant-box-title font-mono">RELEVANT PRODUCT FAMILIES</span>
                    <ul className="relevant-products-list" role="list">
                      <li>
                        <Link href="/products/plywood" className="relevant-product-link">
                          <strong>Structural &amp; Specialty Plywood:</strong> Premium calibrated sheets for assembly jigs and durable utility paneling.
                        </Link>
                      </li>
                      <li>
                        <Link href="/products/engineered-boards" className="relevant-product-link">
                          <strong>Pre-Laminated MDF:</strong> Hard-wearing melamine surfaces for factory workstations and storage cabinetry.
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="application-actions">
                    <Link
                      href="/enquiry?category=Manufacturing+%26+recurring+supply&application=Manufacturing"
                      className="btn btn-secondary"
                    >
                      <span>Enquire on Manufacturing Supply</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>

                <div className="application-detail-img-wrap">
                  <img
                    src="/assets/sector-manufacturing.jpg"
                    alt="Industrial manufacturing floor and material processing setup"
                    className="application-detail-img"
                    width="700"
                    height="450"
                    loading="lazy"
                  />
                  <div className="application-detail-badge font-mono">SECTOR 02</div>
                </div>
              </div>
            </article>

            {/* Sector 3: Packaging & Warehousing */}
            <article className="application-detail-block" id="packaging" style={{ marginTop: '5rem' }}>
              <div className="application-detail-grid">
                <div className="application-detail-img-wrap">
                  <img
                    src="/assets/sector-packaging.jpg"
                    alt="Industrial packaging plywood crates, warehouse pallet racks, and shipping enclosures"
                    className="application-detail-img"
                    width="700"
                    height="450"
                    loading="lazy"
                  />
                  <div className="application-detail-badge font-mono">SECTOR 03</div>
                </div>

                <div className="application-detail-copy">
                  <span className="application-kicker font-mono">STORAGE &amp; LOGISTICS</span>
                  <h2 className="application-detail-title">Packaging &amp; Warehousing</h2>
                  <p className="application-lead-paragraph">
                    Storage systems, logistics environments, and warehouse-support spaces requiring tough packaging-grade panels for shipping crates, pallet collars, and internal dividers.
                  </p>
                  <p className="application-body-text">
                    Logistics operations and heavy machinery exporters require cost-effective, moisture-resistant plywood substrates that withstand handling stress, strapping tension, and multi-modal transit without splitting.
                  </p>

                  <div className="relevant-products-box">
                    <span className="relevant-box-title font-mono">RELEVANT PRODUCT FAMILIES</span>
                    <ul className="relevant-products-list" role="list">
                      <li>
                        <Link href="/products/plywood" className="relevant-product-link">
                          <strong>BWR / Moisture-Resistant Plywood:</strong> Resilient multi-ply sheets for export packaging cases, machinery crates, and cargo protection.
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="application-actions">
                    <Link
                      href="/enquiry?category=Industrial+Packaging+/+Packing+Plywood&application=Packaging+%26+Warehousing"
                      className="btn btn-secondary"
                    >
                      <span>Enquire on Packaging Plywood</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Sector 4: Furniture & Interiors */}
            <article className="application-detail-block" id="furniture" style={{ marginTop: '5rem' }}>
              <div className="application-detail-grid application-detail-grid--reverse">
                <div className="application-detail-copy">
                  <span className="application-kicker font-mono">JOINERY &amp; LIVING SPACES</span>
                  <h2 className="application-detail-title">Furniture &amp; Interiors</h2>
                  <p className="application-lead-paragraph">
                    Modular furniture, cabinetry, interior fit-outs, and design-led commercial spaces demanding tight calibration, clean CNC edge routing, and refined surface aesthetics.
                  </p>
                  <p className="application-body-text">
                    From residential modular kitchens and built-in wardrobes to corporate boardrooms and luxury hotel suites, this sector demands seamless harmony between structurally sound cores and expressive decorative surfaces.
                  </p>

                  <div className="relevant-products-box">
                    <span className="relevant-box-title font-mono">RELEVANT PRODUCT FAMILIES</span>
                    <ul className="relevant-products-list" role="list">
                      <li>
                        <Link href="/products/plywood" className="relevant-product-link">
                          <strong>Premium Calibrated Plywood:</strong> Warp-resistant core substrate for modular furniture carcasses.
                        </Link>
                      </li>
                      <li>
                        <Link href="/products/engineered-boards" className="relevant-product-link">
                          <strong>HDHMR &amp; MDF:</strong> High-density moisture-resistant cores for kitchen and vanity cabinetry.
                        </Link>
                      </li>
                      <li>
                        <Link href="/products/decorative-surfaces" className="relevant-product-link">
                          <strong>Decorative Surfaces:</strong> Natural veneers, high-gloss acrylic panels, and fluted charcoal panels.
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="application-actions">
                    <Link
                      href="/enquiry?category=Project+requirement&application=Furniture+%26+Interiors"
                      className="btn btn-secondary"
                    >
                      <span>Enquire on Interior Materials</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>

                <div className="application-detail-img-wrap">
                  <img
                    src="/assets/sector-furniture.jpg"
                    alt="Luxury architectural interior kitchen and modular furniture cabinetry"
                    className="application-detail-img"
                    width="700"
                    height="450"
                    loading="lazy"
                  />
                  <div className="application-detail-badge font-mono">SECTOR 04</div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Cross-link to Enquiry */}
      <section className="section-spacing bg-warm-ivory border-top-divider">
        <div className="container">
          <div className="consultation-banner">
            <div className="consultation-copy">
              <span className="section-eyebrow font-mono">SECTOR SPECIFICATION SUPPORT</span>
              <h2 className="section-title">Have a specific project or tender BOQ?</h2>
              <p className="consultation-desc">
                Submit your project drawings, substrate requirements, or volume schedules to our specification desk for tailored product recommendations and supply planning.
              </p>
            </div>
            <div className="consultation-action">
              <Link href="/enquiry" className="btn btn-primary">
                <span>Submit Tender / Project BOQ</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
