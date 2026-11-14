import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'NEOM Panels | Engineered Excellence, Designed for Spaces',
  description:
    'NEOM Panels is building an integrated ecosystem of engineered wood, interior materials and project supply solutions for India and global markets. Explore our Phase 1 portfolio of structural plywood, engineered boards, and decorative surfaces.',
  alternates: {
    canonical: '/'
  }
};

export default function HomePage() {
  return (
    <div className="home-view">
      {/* SECTION A: HEADER & HERO */}
      <section className="hero-section" aria-label="NEOM Panels Hero">
        <div className="container">
          <div className="hero-split-grid">
            {/* Left Column: Copy (45%) */}
            <div className="hero-copy-col">
              <span className="hero-eyebrow font-mono">
                ENGINEERED WOOD &amp; INTERIOR MATERIALS
              </span>
              <h1 className="hero-headline">
                Engineered Excellence, Designed for Spaces.
              </h1>
              <p className="hero-lead-text">
                NEOM Panels is building an integrated ecosystem of engineered wood, interior materials and project supply solutions for India and global markets.
              </p>
              <div className="hero-actions-row">
                <Link href="/products" className="btn btn-primary">
                  <span>Explore Products</span>
                  <svg className="btn-icon-arrow" aria-hidden="true" viewBox="0 0 16 16" width="14" height="14">
                    <path fill="currentColor" d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06l2.97-2.97H2.75a.75.75 0 0 1 0-1.5h8.44L8.22 4.03a.75.75 0 0 1 0-1.06Z" />
                  </svg>
                </Link>
                <Link href="/enquiry" className="btn btn-secondary">
                  <span>Discuss Your Requirement</span>
                </Link>
              </div>
              <div className="hero-category-line font-mono">
                <span>Plywood</span>
                <span className="hero-dot-separator" aria-hidden="true">/</span>
                <span>Engineered Boards</span>
                <span className="hero-dot-separator" aria-hidden="true">/</span>
                <span>Decorative Surfaces</span>
              </div>
            </div>

            {/* Right Column: Architectural Scene (55%) */}
            <div className="hero-visual-col">
              <div className="hero-visual-frame">
                <img
                  src="/assets/arch-lobby-reception.jpg"
                  alt="Contemporary architectural interior featuring engineered timber wall paneling and reception joinery"
                  className="hero-main-img"
                  width="1200"
                  height="800"
                  loading="eager"
                  fetchPriority="high"
                />
                <div className="hero-caption-card">
                  <span className="hero-caption-label font-mono">MATERIAL HARMONY</span>
                  <span className="hero-caption-text">Precision wood substrates for enduring spaces</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION B: THREE PRODUCT FAMILIES */}
      <section className="section-spacing bg-warm-ivory" id="products-overview" aria-label="Product Families">
        <div className="container">
          <div className="section-header-compact">
            <span className="section-eyebrow font-mono">PHASE 1 PORTFOLIO</span>
            <h2 className="section-title">Materials for the spaces you create.</h2>
            <p className="section-subtitle">
              Engineered substrates and decorative surfaces formulated for commercial stability, interior joinery, and design integrity.
            </p>
          </div>

          <div className="products-card-grid">
            {/* Card 1: Structural & Specialty Plywood */}
            <div className="product-family-card">
              <div className="product-card-img-wrap">
                <img
                  src="/assets/product-structural-plywood.jpg"
                  alt="Multi-ply calibrated hardwood structural plywood panel stack"
                  className="product-card-img"
                  width="600"
                  height="400"
                  loading="lazy"
                />
                <span className="product-card-tag font-mono">CORE SUBSTRATES</span>
              </div>
              <div className="product-card-body">
                <h3 className="product-card-title">Structural &amp; Specialty Plywood</h3>
                <p className="product-card-desc">
                  Engineered multi-layer wood panels built for structural strength, moisture resistance, and dimensional stability.
                </p>
                <div className="product-variants-box">
                  <span className="product-variants-label font-mono">PORTFOLIO VARIANTS</span>
                  <ul className="product-variants-list" role="list">
                    <li>• Premium Plywood</li>
                    <li>• Marine Plywood</li>
                    <li>• BWR / BWP Plywood</li>
                  </ul>
                </div>
                <div className="product-card-actions">
                  <Link href="/products/plywood" className="btn btn-secondary btn-sm">
                    <span>Explore Range</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                  <Link href="/enquiry?family=Structural+%26+Specialty+Plywood" className="product-card-link-enquire">
                    Enquire
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2: Engineered Boards */}
            <div className="product-family-card">
              <div className="product-card-img-wrap">
                <img
                  src="/assets/product-engineered-boards.jpg"
                  alt="High-density fiberboard and engineered wood panel core cross-section"
                  className="product-card-img"
                  width="600"
                  height="400"
                  loading="lazy"
                />
                <span className="product-card-tag font-mono">DENSE CORE</span>
              </div>
              <div className="product-card-body">
                <h3 className="product-card-title">Solid Engineered Boards</h3>
                <p className="product-card-desc">
                  High-density homogenous panels designed for precision CNC routing, moisture-critical interiors, and smooth surface finishing.
                </p>
                <div className="product-variants-box">
                  <span className="product-variants-label font-mono">PORTFOLIO VARIANTS</span>
                  <ul className="product-variants-list" role="list">
                    <li>• Medium-Density Fiberboard (MDF)</li>
                    <li>• High-Density Moisture-Resistant (HDHMR)</li>
                    <li>• Pre-Laminated MDF</li>
                  </ul>
                </div>
                <div className="product-card-actions">
                  <Link href="/products/engineered-boards" className="btn btn-secondary btn-sm">
                    <span>Explore Range</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                  <Link href="/enquiry?family=Engineered+Boards" className="product-card-link-enquire">
                    Enquire
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 3: Decorative Surfaces */}
            <div className="product-family-card">
              <div className="product-card-img-wrap">
                <img
                  src="/assets/product-decorative-surfaces.jpg"
                  alt="Architectural wood veneers, acrylic surfaces, and fluted acoustic wall panels"
                  className="product-card-img"
                  width="600"
                  height="400"
                  loading="lazy"
                />
                <span className="product-card-tag font-mono">FINISHES &amp; TEXTURES</span>
              </div>
              <div className="product-card-body">
                <h3 className="product-card-title">Decorative Surfaces</h3>
                <p className="product-card-desc">
                  Curated architectural veneers, durable laminates, and textured panels providing refined visual character to modern spaces.
                </p>
                <div className="product-variants-box">
                  <span className="product-variants-label font-mono">PORTFOLIO VARIANTS</span>
                  <ul className="product-variants-list" role="list">
                    <li>• Architectural Natural &amp; Smoked Veneers</li>
                    <li>• High-Pressure Laminates (HPL)</li>
                    <li>• Acrylic &amp; Fluted Charcoal Panels</li>
                  </ul>
                </div>
                <div className="product-card-actions">
                  <Link href="/products/decorative-surfaces" className="btn btn-secondary btn-sm">
                    <span>Explore Range</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                  <Link href="/enquiry?family=Decorative+Surfaces" className="product-card-link-enquire">
                    Enquire
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION C: APPLICATIONS */}
      <section className="section-spacing" aria-label="Supported Industries">
        <div className="container">
          <div className="section-header-compact">
            <span className="section-eyebrow font-mono">SECTORS &amp; APPLICATIONS</span>
            <h2 className="section-title">One brand. Multiple industries.</h2>
            <p className="section-subtitle">
              Engineered wood and interior materials configured for the specific operating conditions of four key sectors.
            </p>
          </div>

          <div className="applications-grid">
            {/* Sector 1: Construction */}
            <div className="application-card">
              <div className="application-img-wrap">
                <img
                  src="/assets/sector-construction.jpg"
                  alt="Architectural construction site and timber framing"
                  className="application-img"
                  width="600"
                  height="360"
                  loading="lazy"
                />
              </div>
              <div className="application-content">
                <span className="application-num font-mono">01</span>
                <h3 className="application-title">Construction</h3>
                <p className="application-desc">
                  Residential, commercial, and project-led building applications requiring reliable panel substrates for structural framing, formwork, and partitions.
                </p>
                <Link href="/applications#construction" className="application-link">
                  <span>View Specifications</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Sector 2: Manufacturing */}
            <div className="application-card">
              <div className="application-img-wrap">
                <img
                  src="/assets/sector-manufacturing.jpg"
                  alt="Industrial manufacturing facility and panel assembly line"
                  className="application-img"
                  width="600"
                  height="360"
                  loading="lazy"
                />
              </div>
              <div className="application-content">
                <span className="application-num font-mono">02</span>
                <h3 className="application-title">Manufacturing</h3>
                <p className="application-desc">
                  Industrial facilities, production environments, and utility spaces needing uniform wood substrates for batch processing and industrial workbenches.
                </p>
                <Link href="/applications#manufacturing" className="application-link">
                  <span>View Specifications</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Sector 3: Packaging & Warehousing */}
            <div className="application-card">
              <div className="application-img-wrap">
                <img
                  src="/assets/sector-packaging.jpg"
                  alt="Industrial warehouse logistics, pallet storage, and plywood crates"
                  className="application-img"
                  width="600"
                  height="360"
                  loading="lazy"
                />
              </div>
              <div className="application-content">
                <span className="application-num font-mono">03</span>
                <h3 className="application-title">Packaging &amp; Warehousing</h3>
                <p className="application-desc">
                  Storage systems, logistics environments, and warehouse-support spaces requiring tough packaging-grade panels for shipping crates and dividers.
                </p>
                <Link href="/applications#packaging" className="application-link">
                  <span>View Specifications</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Sector 4: Furniture & Interiors */}
            <div className="application-card">
              <div className="application-img-wrap">
                <img
                  src="/assets/sector-furniture.jpg"
                  alt="Luxury modern modular cabinetry, wardrobe joinery, and interior surfaces"
                  className="application-img"
                  width="600"
                  height="360"
                  loading="lazy"
                />
              </div>
              <div className="application-content">
                <span className="application-num font-mono">04</span>
                <h3 className="application-title">Furniture &amp; Interiors</h3>
                <p className="application-desc">
                  Modular kitchens, wardrobe carcasses, architectural millwork, and design-led commercial spaces demanding crisp calibration and decorative finishes.
                </p>
                <Link href="/applications#furniture" className="application-link">
                  <span>View Specifications</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION D: NEOM ECOSYSTEM (8 PILLARS) */}
      <section className="section-spacing bg-forest text-warm" aria-label="Ecosystem Pillars">
        <div className="container">
          <div className="section-header-compact text-center">
            <span className="section-eyebrow text-gold font-mono">STRATEGIC CAPABILITIES</span>
            <h2 className="section-title text-warm">More than materials. A connected approach.</h2>
            <p className="section-subtitle text-warm-muted" style={{ marginInline: 'auto' }}>
              Eight core commitments forming the structural foundation of the NEOM Panels operating ecosystem.
            </p>
          </div>

          <div className="ecosystem-editorial-grid">
            <div className="ecosystem-pillar-card">
              <span className="pillar-num font-mono">01</span>
              <h3 className="pillar-title">Quality</h3>
              <p className="pillar-desc">
                Disciplined manufacturing partnerships and rigorous verification protocols ensuring consistent dimensional stability and core integrity.
              </p>
            </div>

            <div className="ecosystem-pillar-card">
              <span className="pillar-num font-mono">02</span>
              <h3 className="pillar-title">Design Support</h3>
              <p className="pillar-desc">
                Assisting architects and interior specifiers with material compatibility, veneer grain orientation, and substrate selection guidance.
              </p>
            </div>

            <div className="ecosystem-pillar-card">
              <span className="pillar-num font-mono">03</span>
              <h3 className="pillar-title">Dealer Enablement</h3>
              <p className="pillar-desc">
                Empowering channel distributors with transparent cataloguing, reliable delivery schedules, and dedicated regional product support.
              </p>
            </div>

            <div className="ecosystem-pillar-card">
              <span className="pillar-num font-mono">04</span>
              <h3 className="pillar-title">Architect Engagement</h3>
              <p className="pillar-desc">
                Direct collaborative dialogue with design practices to align upcoming surface trends and project-specific interior requirements.
              </p>
            </div>

            <div className="ecosystem-pillar-card">
              <span className="pillar-num font-mono">05</span>
              <h3 className="pillar-title">Digital Infrastructure</h3>
              <p className="pillar-desc">
                Building modern digital channels to streamline product enquiries, specification workflows, and partner communication.
              </p>
            </div>

            <div className="ecosystem-pillar-card">
              <span className="pillar-num font-mono">06</span>
              <h3 className="pillar-title">Project Supply</h3>
              <p className="pillar-desc">
                Scalable fulfilment capability designed to meet the strict delivery timelines of commercial, residential, and institutional contracts.
              </p>
            </div>

            <div className="ecosystem-pillar-card">
              <span className="pillar-num font-mono">07</span>
              <h3 className="pillar-title">Sustainability</h3>
              <p className="pillar-desc">
                Prioritising plantation agro-forestry timber, resource-efficient core compositions, and low-emission resin technologies.
              </p>
            </div>

            <div className="ecosystem-pillar-card">
              <span className="pillar-num font-mono">08</span>
              <h3 className="pillar-title">Export Readiness</h3>
              <p className="pillar-desc">
                Developing product standards and containerised logistics frameworks aligned with the expansion into the GCC and international markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION E: PARTNERSHIP INVITATION */}
      <section className="section-spacing bg-warm-ivory" aria-label="Partnerships">
        <div className="container">
          <div className="section-header-compact">
            <span className="section-eyebrow font-mono">CHANNEL &amp; COLLABORATION</span>
            <h2 className="section-title">Built around the people who build spaces.</h2>
            <p className="section-subtitle">
              Whether specifying materials for a commercial landmark or stocking a regional distribution hub, we provide direct partnership channels.
            </p>
          </div>

          <div className="partner-groups-grid">
            <div className="partner-group-card">
              <h3 className="partner-group-title">Architects &amp; Interior Designers</h3>
              <p className="partner-group-desc">
                Explore material combinations, request physical surface swatches, and review substrate specifications for custom interior projects.
              </p>
              <Link href="/enquiry?type=Sample+Request&role=Architects" className="btn btn-secondary btn-sm">
                <span>Request Material Swatches</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="partner-group-card">
              <h3 className="partner-group-title">Dealers &amp; Distributors</h3>
              <p className="partner-group-desc">
                Establish a reliable supply relationship with structured wholesale terms, catalog support, and disciplined regional delivery.
              </p>
              <Link href="/enquiry?type=Partnership&role=Dealers" className="btn btn-secondary btn-sm">
                <span>Discuss Dealership</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="partner-group-card">
              <h3 className="partner-group-title">Manufacturers &amp; Contractors</h3>
              <p className="partner-group-desc">
                Source calibrated plywood and engineered boards tailored for precision CNC nesting, modular cabinetry, and bulk interior execution.
              </p>
              <Link href="/enquiry?type=Project+Supply&role=Furniture+Manufacturers" className="btn btn-secondary btn-sm">
                <span>Procure Substrates</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="partner-group-card">
              <h3 className="partner-group-title">Institutional Buyers</h3>
              <p className="partner-group-desc">
                Direct engagement for large-scale enterprise, hospitality, government, and infrastructure project procurement needs.
              </p>
              <Link href="/enquiry?type=Project+Supply&role=Institutional+Buyers" className="btn btn-secondary btn-sm">
                <span>Institutional Enquiry</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION F: INDIA AND GCC AMBITION */}
      <section className="section-spacing" aria-label="India and GCC Growth Corridor">
        <div className="container">
          <div className="corridor-editorial-layout">
            <div className="corridor-copy">
              <span className="section-eyebrow font-mono">GROWTH HORIZON</span>
              <h2 className="section-title">Rooted in India. Looking towards the GCC.</h2>
              <p className="corridor-lead">
                India forms our primary domestic manufacturing and consumption foundation, anchored by the nationwide growth of urban residential housing, commercial fit-outs, and modular joinery.
              </p>
              <p className="corridor-body">
                Building outward from this solid base, NEOM Panels views the Gulf Cooperation Council (GCC) as a natural, high-value strategic expansion corridor. Proximity to Western Indian maritime ports provides direct logistics access to key target markets across the Arabian Peninsula.
              </p>

              <div className="target-markets-box">
                <span className="target-markets-title font-mono">TARGET EXPANSION CORRIDORS</span>
                <div className="target-markets-tags">
                  <span className="market-tag">United Arab Emirates (Dubai &amp; Abu Dhabi)</span>
                  <span className="market-tag">Kingdom of Saudi Arabia (Riyadh &amp; Red Sea)</span>
                  <span className="market-tag">State of Qatar</span>
                  <span className="market-tag">Sultanate of Oman</span>
                  <span className="market-tag">Kingdom of Bahrain</span>
                  <span className="market-tag">State of Kuwait</span>
                </div>
              </div>

              <div className="corridor-cta-row">
                <Link href="/growth-vision" className="btn btn-secondary">
                  <span>Explore 10-Year Growth Vision</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="corridor-visual">
              <div className="corridor-img-grid">
                <div className="corridor-img-card">
                  <img
                    src="/assets/gcc-dubai.jpg"
                    alt="Dubai modern architectural skyline and commercial interior developments"
                    className="corridor-img"
                    width="500"
                    height="350"
                    loading="lazy"
                  />
                  <div className="corridor-img-label font-mono">DUBAI &amp; UAE CORRIDOR</div>
                </div>
                <div className="corridor-img-card">
                  <img
                    src="/assets/gcc-riyadh.jpg"
                    alt="Riyadh urban expansion and hospitality infrastructure"
                    className="corridor-img"
                    width="500"
                    height="350"
                    loading="lazy"
                  />
                  <div className="corridor-img-label font-mono">RIYADH &amp; KSA EXPANSION</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION G: CLOSING ENQUIRY */}
      <section className="section-spacing bg-forest-ghost border-top-divider" aria-label="Contact and Enquiry Desk">
        <div className="container">
          <div className="closing-enquiry-box">
            <span className="section-eyebrow font-mono">DIRECT SPECIFICATION DESK</span>
            <h2 className="section-title">Let’s build better spaces together.</h2>
            <p className="closing-lead-text">
              Connect with our material specialists to discuss project requirements, sample requests, or partnership opportunities.
            </p>

            <div className="closing-action-buttons">
              <Link href="/enquiry" className="btn btn-primary">
                <span>Send Detailed Enquiry</span>
                <svg className="btn-icon-arrow" aria-hidden="true" viewBox="0 0 16 16" width="14" height="14">
                  <path fill="currentColor" d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06l2.97-2.97H2.75a.75.75 0 0 1 0-1.5h8.44L8.22 4.03a.75.75 0 0 1 0-1.06Z" />
                </svg>
              </Link>
            </div>

            <div className="closing-contact-row font-mono">
              <a href="tel:+919745450618" className="closing-contact-pill">
                <span className="contact-pill-label">PHONE:</span>
                <span className="contact-pill-val">+91 97454 50618</span>
              </a>
              <a href="mailto:neompanels@gmail.com" className="closing-contact-pill">
                <span className="contact-pill-label">EMAIL:</span>
                <span className="contact-pill-val">neompanels@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
