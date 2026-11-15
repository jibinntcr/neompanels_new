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
    <main id="main-content" className="page-view">
      {/* Architectural Page Hero */}
      <section className="arch-page-hero arch-page-hero--forest" aria-labelledby="main-heading">
        <div className="container">
          <nav className="breadcrumb-nav breadcrumb-nav--light" aria-label="Breadcrumb">
            <ol className="breadcrumb-list font-mono" role="list">
              <li><Link href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Applications &amp; Sectors</li>
            </ol>
          </nav>

          <div className="arch-page-hero__grid">
            <div className="arch-page-hero__copy">
              <span className="section-eyebrow text-gold font-mono">INDUSTRIES SERVED</span>
              <h1 id="main-heading" tabIndex={-1} className="page-title text-warm">
                One Brand. Multiple Industries.
              </h1>
              <p className="page-lead-text text-warm-muted">
                Engineered wood panels, high-density fibre cores, and decorative finishes configured for the practical demands of four foundational sectors.
              </p>
              <div className="page-header-cta-row">
                <Link href="/enquiry?type=Project+Supply" className="btn btn-gold">
                  <span>Discuss Project Requirements</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="arch-page-hero__stat-card">
              <span className="arch-stat-label font-mono text-gold">SECTOR INDEX</span>
              <ul className="arch-jump-list" role="list">
                <li><a href="#construction">01 / Construction &amp; Building →</a></li>
                <li><a href="#manufacturing">02 / Manufacturing Facilities →</a></li>
                <li><a href="#packaging">03 / Packaging &amp; Warehousing →</a></li>
                <li><a href="#furniture">04 / Furniture &amp; Interiors →</a></li>
              </ul>
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
                    alt="Modern commercial building construction atrium with architectural timber framing"
                    className="application-detail-img"
                    width="700"
                    height="450"
                    loading="eager"
                  />
                  <div className="application-detail-badge font-mono">SECTOR 01</div>
                </div>

                <div className="application-detail-copy">
                  <span className="application-kicker font-mono">BUILDING &amp; FIT-OUTS</span>
                  <h2 className="application-detail-title">Construction</h2>
                  <p className="application-lead-paragraph">
                    Residential, commercial, and project-led building applications requiring dependable substrates for interior partitions, ceiling paneling, wall linings, and architectural joinery.
                  </p>
                  <p className="application-body-text">
                    Coordinated batch delivery and predictable panel machining help contractors and site teams maintain installation momentum across residential developments and commercial properties. Selection is always matched to specific project conditions upon consultation.
                  </p>

                  <div className="relevant-products-box">
                    <span className="relevant-box-title font-mono">POTENTIALLY RELEVANT FAMILIES</span>
                    <ul className="relevant-products-list" role="list">
                      <li>
                        <Link href="/products/plywood" className="relevant-product-link">
                          <strong>Structural &amp; Specialty Plywood:</strong> Marine and BWR / BWP grades for interior building partitions and utility zones.
                        </Link>
                      </li>
                      <li>
                        <Link href="/products/engineered-boards" className="relevant-product-link">
                          <strong>Solid Engineered Boards:</strong> MDF and HDHMR for architectural moldings, door linings, and trim.
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="application-actions">
                    <Link
                      href="/enquiry?type=Project+Supply&family=Structural+%26+Specialty+Plywood"
                      className="btn btn-primary"
                    >
                      <span>Enquire on Construction Supply</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Sector 2: Manufacturing */}
            <article className="application-detail-block" id="manufacturing">
              <div className="application-detail-grid application-detail-grid--reverse">
                <div className="application-detail-copy">
                  <span className="application-kicker font-mono">INDUSTRIAL &amp; PRODUCTION</span>
                  <h2 className="application-detail-title">Manufacturing</h2>
                  <p className="application-lead-paragraph">
                    Industrial facilities, production environments, and utility spaces needing uniform wood substrates for serial processing, assembly workstations, and shop-floor fixtures.
                  </p>
                  <p className="application-body-text">
                    Production teams rely on consistent thickness and clean cutting characteristics across repeat panel batches to support smooth CNC and panel-saw operations.
                  </p>

                  <div className="relevant-products-box">
                    <span className="relevant-box-title font-mono">POTENTIALLY RELEVANT FAMILIES</span>
                    <ul className="relevant-products-list" role="list">
                      <li>
                        <Link href="/products/plywood" className="relevant-product-link">
                          <strong>Structural &amp; Specialty Plywood:</strong> Multi-ply sheets for industrial worktops, assembly fixtures, and utility paneling.
                        </Link>
                      </li>
                      <li>
                        <Link href="/products/engineered-boards" className="relevant-product-link">
                          <strong>Pre-Laminated MDF:</strong> Ready-surfaced boards for industrial storage units and facility cabinetry.
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="application-actions">
                    <Link
                      href="/enquiry?type=Project+Supply&role=Furniture+Manufacturers"
                      className="btn btn-primary"
                    >
                      <span>Enquire on Manufacturing Supply</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>

                <div className="application-detail-img-wrap">
                  <img
                    src="/assets/sector-manufacturing.jpg"
                    alt="Industrial manufacturing floor and panel processing setup"
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
            <article className="application-detail-block" id="packaging">
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
                    Storage systems, logistics spaces, and warehouse-support environments requiring practical panels for protective crates, pallet collars, shelving decks, and cargo dividers.
                  </p>
                  <p className="application-body-text">
                    Export fabricators and warehousing operators partner with NEOM Panels to align sheet grades and thickness selections with specific cargo protection and storage workflows.
                  </p>

                  <div className="relevant-products-box">
                    <span className="relevant-box-title font-mono">POTENTIALLY RELEVANT FAMILIES</span>
                    <ul className="relevant-products-list" role="list">
                      <li>
                        <Link href="/products/plywood" className="relevant-product-link">
                          <strong>Structural &amp; Specialty Plywood:</strong> Multi-ply sheets suited for industrial cases, crates, and warehouse storage decking.
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="application-actions">
                    <Link
                      href="/enquiry?type=Project+Supply&family=Structural+%26+Specialty+Plywood"
                      className="btn btn-primary"
                    >
                      <span>Enquire on Packaging &amp; Storage</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Sector 4: Furniture & Interiors */}
            <article className="application-detail-block" id="furniture">
              <div className="application-detail-grid application-detail-grid--reverse">
                <div className="application-detail-copy">
                  <span className="application-kicker font-mono">JOINERY &amp; DESIGN-LED SPACES</span>
                  <h2 className="application-detail-title">Furniture &amp; Interiors</h2>
                  <p className="application-lead-paragraph">
                    Modular furniture, cabinetry, interior fit-outs, and design-led spaces demanding cohesive harmony between dimensionally stable cores and expressive surface finishes.
                  </p>
                  <p className="application-body-text">
                    From modular kitchens and residential wardrobes to executive boardrooms and hospitality lounges, NEOM Panels enables specifiers and fabricators to source both substrates and decorative surfaces from one unified portfolio.
                  </p>

                  <div className="relevant-products-box">
                    <span className="relevant-box-title font-mono">POTENTIALLY RELEVANT FAMILIES</span>
                    <ul className="relevant-products-list" role="list">
                      <li>
                        <Link href="/products/plywood" className="relevant-product-link">
                          <strong>Premium Plywood:</strong> Stable multi-ply core substrate for modular furniture carcasses.
                        </Link>
                      </li>
                      <li>
                        <Link href="/products/engineered-boards" className="relevant-product-link">
                          <strong>HDHMR &amp; MDF:</strong> Dense fibre cores for routed shutters, kitchens, and vanities.
                        </Link>
                      </li>
                      <li>
                        <Link href="/products/decorative-surfaces" className="relevant-product-link">
                          <strong>Decorative Surfaces:</strong> Veneers, laminates, acrylic panels, and fluted charcoal wall panels.
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="application-actions">
                    <Link
                      href="/enquiry?type=Sample+Request&family=Decorative+Surfaces"
                      className="btn btn-primary"
                    >
                      <span>Enquire on Interior Materials</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>

                <div className="application-detail-img-wrap">
                  <img
                    src="/assets/sector-furniture.jpg"
                    alt="Contemporary architectural interior kitchen and modular furniture cabinetry"
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
    </main>
  );
}
