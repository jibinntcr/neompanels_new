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
    <main id="main-content" className="page-view">
      {/* Architectural Page Hero */}
      <section className="arch-page-hero arch-page-hero--forest" aria-labelledby="main-heading">
        <div className="container">
          <nav className="breadcrumb-nav breadcrumb-nav--light" aria-label="Breadcrumb">
            <ol className="breadcrumb-list font-mono" role="list">
              <li><Link href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Products &amp; Materials</li>
            </ol>
          </nav>

          <div className="arch-page-hero__grid">
            <div className="arch-page-hero__copy">
              <span className="section-eyebrow text-gold font-mono">PHASE 1 PORTFOLIO</span>
              <h1 id="main-heading" tabIndex={-1} className="page-title text-warm">
                The Materials Portfolio.
              </h1>
              <p className="page-lead-text text-warm-muted">
                Three cohesive material families—engineered plywood substrates, high-density fibre cores, and curated decorative surfaces—designed to work together across residential, commercial, and industrial applications.
              </p>
              <div className="page-header-cta-row" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <Link href="/enquiry" className="btn btn-gold">
                  <span>Discuss Your Requirement</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <Link href="/enquiry?type=Sample+Request" className="btn btn-outline-light">
                  <span>Request Material Swatches</span>
                </Link>
              </div>
            </div>

            <div className="arch-page-hero__stat-card">
              <span className="arch-stat-label font-mono text-gold">QUICK FAMILY JUMP</span>
              <ul className="arch-jump-list" role="list">
                <li><a href="#family-plywood">01 / Structural &amp; Specialty Plywood →</a></li>
                <li><a href="#family-boards">02 / Solid Engineered Boards →</a></li>
                <li><a href="#family-surfaces">03 / Architectural Decorative Surfaces →</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Main Portfolio Sections */}
      <section className="section-spacing" aria-label="Portfolio Families">
        <div className="container">
          <div className="portfolio-family-blocks">
            {/* Family 1: Structural & Specialty Plywood */}
            <article className="portfolio-block" id="family-plywood">
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
                  <div className="portfolio-block-badge font-mono">01 / CORE SUBSTRATES</div>
                </div>

                <div className="portfolio-block-copy">
                  <span className="portfolio-category font-mono">FAMILY 01 · PLYWOOD</span>
                  <h2 className="portfolio-title">Structural &amp; Specialty Plywood</h2>
                  <p className="portfolio-desc">
                    Engineered multi-layer wood panels produced through disciplined manufacturing partnerships. Formulated for structural stability, moisture resilience, and dependable screw-holding across furniture carcasses, interior fit-outs, and wet-zone cabinetry.
                  </p>

                  <div className="portfolio-variants-card">
                    <h3 className="portfolio-variants-heading font-mono">PHASE 1 VARIANTS</h3>
                    <ul className="portfolio-variants-list" role="list">
                      <li>
                        <strong>Premium Plywood:</strong> Calibrated multi-ply substrate for bespoke furniture carcasses, wardrobes, and architectural joinery.
                      </li>
                      <li>
                        <strong>Marine Plywood:</strong> Moisture-resisting bonded plywood designed for elevated humidity, kitchen wet areas, and coastal interiors.
                      </li>
                      <li>
                        <strong>BWR / BWP Plywood:</strong> Boiling water resistant and boiling water proof grades for enduring cabinetry and utility partitions.
                      </li>
                    </ul>
                  </div>

                  <div className="portfolio-specs-notice">
                    Contact NEOM Panels for current product specifications, sheet dimensions, and availability.
                  </div>

                  <div className="portfolio-actions-row">
                    <Link href="/products/plywood" className="btn btn-primary">
                      <span>Explore Plywood Family</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                    <Link
                      href="/enquiry?family=Structural+%26+Specialty+Plywood"
                      className="btn btn-secondary"
                    >
                      <span>Enquire on Plywood</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Family 2: Solid Engineered Boards */}
            <article className="portfolio-block" id="family-boards">
              <div className="portfolio-block-grid portfolio-block-grid--reverse">
                <div className="portfolio-block-copy">
                  <span className="portfolio-category font-mono">FAMILY 02 · FIBRE CORES</span>
                  <h2 className="portfolio-title">Solid Engineered Boards</h2>
                  <p className="portfolio-desc">
                    High-density homogeneous panels engineered from refined wood fibres for precision CNC routing, clean edge profiling, and smooth lacquer, acrylic, or laminate pressing without surface telegraphing.
                  </p>

                  <div className="portfolio-variants-card">
                    <h3 className="portfolio-variants-heading font-mono">PHASE 1 VARIANTS</h3>
                    <ul className="portfolio-variants-list" role="list">
                      <li>
                        <strong>Medium-Density Fiberboard (MDF):</strong> Uniform-density core for carved shutters, wall moldings, and painted cabinetry.
                      </li>
                      <li>
                        <strong>High-Density Moisture-Resistant (HDHMR):</strong> Dense moisture-resisting fibre board built for humid environments, kitchens, and vanities.
                      </li>
                      <li>
                        <strong>Pre-Laminated MDF:</strong> Factory-pressed decorative melamine boards ready for rapid modular furniture fabrication.
                      </li>
                    </ul>
                  </div>

                  <div className="portfolio-specs-notice">
                    Contact NEOM Panels for current product specifications, sheet dimensions, and availability.
                  </div>

                  <div className="portfolio-actions-row">
                    <Link href="/products/engineered-boards" className="btn btn-primary">
                      <span>Explore Engineered Boards</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                    <Link
                      href="/enquiry?family=Engineered+Boards"
                      className="btn btn-secondary"
                    >
                      <span>Enquire on Boards</span>
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
                  <div className="portfolio-block-badge font-mono">02 / FIBRE CORES</div>
                </div>
              </div>
            </article>

            {/* Family 3: Decorative Surfaces */}
            <article className="portfolio-block" id="family-surfaces">
              <div className="portfolio-block-grid">
                <div className="portfolio-block-img-wrap">
                  <img
                    src="/assets/product-decorative-surfaces.jpg"
                    alt="Architectural veneers, matte acrylics, and fluted charcoal panels"
                    className="portfolio-block-img"
                    width="700"
                    height="480"
                    loading="lazy"
                  />
                  <div className="portfolio-block-badge font-mono">03 / FINISHES &amp; TEXTURES</div>
                </div>

                <div className="portfolio-block-copy">
                  <span className="portfolio-category font-mono">FAMILY 03 · DECORATIVE SURFACES</span>
                  <h2 className="portfolio-title">Architectural Decorative Surfaces</h2>
                  <p className="portfolio-desc">
                    A curated range of interior surface materials bringing natural timber warmth, contemporary sheen, and three-dimensional fluted texture to modern residential and commercial spaces.
                  </p>

                  <div className="portfolio-variants-card">
                    <h3 className="portfolio-variants-heading font-mono">PHASE 1 VARIANTS</h3>
                    <ul className="portfolio-variants-list" role="list">
                      <li>
                        <strong>Veneers:</strong> Natural and smoked architectural wood veneers highlighting authentic timber grain geometry.
                      </li>
                      <li>
                        <strong>Laminates:</strong> Durable high-pressure decorative laminates built for daily wear resistance across worktops and cabinetry.
                      </li>
                      <li>
                        <strong>Acrylic Panels:</strong> High-clarity mirror gloss and silky anti-fingerprint matte surfaces for sleek modern shutters.
                      </li>
                      <li>
                        <strong>Charcoal Panels:</strong> Linear fluted and sculpted wall panels creating focal depth in lounges, lobbies, and feature walls.
                      </li>
                    </ul>
                  </div>

                  <div className="portfolio-specs-notice">
                    Contact NEOM Panels for current product specifications, sheet dimensions, and availability.
                  </div>

                  <div className="portfolio-actions-row">
                    <Link href="/products/decorative-surfaces" className="btn btn-primary">
                      <span>Explore Decorative Surfaces</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                    <Link
                      href="/enquiry?family=Decorative+Surfaces"
                      className="btn btn-secondary"
                    >
                      <span>Enquire on Surfaces</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Spaces & Material Inspiration Gallery */}
      <section className="section-spacing bg-warm-ivory border-top-divider" aria-label="Spaces and Material Inspiration">
        <div className="container">
          <div className="section-header-compact">
            <span className="section-eyebrow font-mono">SPACES &amp; MATERIAL INSPIRATION</span>
            <h2 className="section-title">Designed for Architectural Harmony</h2>
            <p className="section-subtitle">
              Visual inspiration illustrating how engineered wood cores and decorative finishes shape contemporary workplaces, kitchens, and fabrication studios.
            </p>
          </div>

          <div className="inspiration-gallery-grid">
            <figure className="inspiration-card">
              <img
                src="/assets/industry-commercial-projects.jpg"
                alt="Commercial executive boardroom with fluted timber cladding and oak joinery"
                width="640"
                height="420"
                loading="lazy"
              />
              <figcaption className="font-mono">Commercial Workplaces &amp; Acoustic Cladding</figcaption>
            </figure>
            <figure className="inspiration-card">
              <img
                src="/assets/industry-modular-interiors.jpg"
                alt="Sage and natural oak modular kitchen and custom wardrobe joinery"
                width="640"
                height="420"
                loading="lazy"
              />
              <figcaption className="font-mono">Modular Kitchens &amp; Residential Wardrobes</figcaption>
            </figure>
            <figure className="inspiration-card">
              <img
                src="/assets/industry-furniture-oem.jpg"
                alt="Precision CNC woodworking and serial furniture manufacturing studio"
                width="640"
                height="420"
                loading="lazy"
              />
              <figcaption className="font-mono">Serial OEM Furniture &amp; CNC Joinery</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
