import Link from 'next/link';
import HeroSlider from '@/components/HeroSlider';
import { LEADERSHIP_PROFILES } from '@/lib/leadership-data';

export const metadata = {
  title: 'NEOM Panels | Engineered Excellence, Designed for Spaces',
  description:
    'NEOM Panels is building an integrated ecosystem of engineered wood, interior materials, and project supply solutions for India and global markets. Explore Structural & Specialty Plywood, Solid Engineered Boards, and Decorative Surfaces.',
  alternates: {
    canonical: '/'
  }
};

export default function HomePage() {
  return (
    <main id="main-content" className="home-view">
      {/* SECTION 1: FULL-BLEED ARCHITECTURAL HERO SLIDER */}
      <HeroSlider />

      {/* SECTION 2: ARCHITECTURAL PORTFOLIO RIBBON */}
      <section className="arch-ribbon" aria-label="Portfolio Overview Highlights">
        <div className="container">
          <div className="arch-ribbon__grid">
            <div className="arch-ribbon__item">
              <span className="arch-ribbon__num font-mono">03</span>
              <div className="arch-ribbon__text">
                <strong>Core Material Families</strong>
                <span>Plywood, Engineered Boards &amp; Decorative Surfaces</span>
              </div>
            </div>
            <div className="arch-ribbon__item">
              <span className="arch-ribbon__num font-mono">04</span>
              <div className="arch-ribbon__text">
                <strong>Supported Industries</strong>
                <span>Construction, Manufacturing, Packaging &amp; Interiors</span>
              </div>
            </div>
            <div className="arch-ribbon__item">
              <span className="arch-ribbon__num font-mono">08</span>
              <div className="arch-ribbon__text">
                <strong>Ecosystem Commitments</strong>
                <span>Quality, Design Support, Digital &amp; Project Supply</span>
              </div>
            </div>
            <div className="arch-ribbon__item">
              <span className="arch-ribbon__num font-mono">IN → GCC</span>
              <div className="arch-ribbon__text">
                <strong>Market Horizon</strong>
                <span>India Domestic Foundation &amp; GCC Expansion Corridor</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THREE PRODUCT FAMILIES */}
      <section className="section-spacing bg-warm-ivory" id="products-overview" aria-label="Product Families">
        <div className="container">
          <div className="section-header-split">
            <div>
              <span className="section-eyebrow font-mono">PHASE 1 MATERIALS PORTFOLIO</span>
              <h2 className="section-title">Materials for the spaces you create.</h2>
              <p className="section-subtitle">
                Engineered wood substrates and architectural decorative surfaces formulated for dimensional stability, precision joinery, and enduring design character.
              </p>
            </div>
            <div className="section-header-action">
              <Link href="/products" className="btn btn-secondary">
                <span>View Complete Portfolio</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="products-card-grid">
            {/* Family 01 */}
            <article className="product-family-card">
              <Link href="/products/plywood" className="product-card-img-wrap" aria-label="Explore Structural & Specialty Plywood">
                <img
                  src="/assets/product-structural-plywood.jpg"
                  alt="Stacked multi-ply calibrated hardwood structural plywood panels in architectural studio"
                  className="product-card-img"
                  width="640"
                  height="440"
                  loading="lazy"
                />
                <span className="product-card-float-num font-mono">01</span>
              </Link>
              <div className="product-card-body">
                <div className="product-card-eyebrow-row font-mono">
                  <span className="product-card-tag">CORE SUBSTRATES</span>
                  <span className="product-card-phase">3 VARIANTS</span>
                </div>
                <h3 className="product-card-title">
                  <Link href="/products/plywood" className="card-title-link">
                    Structural &amp; Specialty Plywood
                  </Link>
                </h3>
                <p className="product-card-desc">
                  Engineered multi-layer wood panels built for structural integrity, moisture resilience, and dependable screw retention across interior and utility spaces.
                </p>
                <div className="product-variants-box">
                  <span className="product-variants-label font-mono">PORTFOLIO RANGE</span>
                  <ul className="product-variant-pills" role="list">
                    <li>Premium Plywood</li>
                    <li>Marine Plywood</li>
                    <li>BWR / BWP Plywood</li>
                  </ul>
                </div>
                <div className="product-card-actions">
                  <Link href="/products/plywood" className="btn btn-primary btn-sm">
                    <span>Explore Range</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                  <Link href="/enquiry?family=Structural+%26+Specialty+Plywood" className="product-card-link-enquire">
                    Specify / Enquire
                  </Link>
                </div>
              </div>
            </article>

            {/* Family 02 */}
            <article className="product-family-card">
              <Link href="/products/engineered-boards" className="product-card-img-wrap" aria-label="Explore Solid Engineered Boards">
                <img
                  src="/assets/product-engineered-boards.jpg"
                  alt="High-density MDF and green moisture-resistant HDHMR engineered board cross-sections"
                  className="product-card-img"
                  width="640"
                  height="440"
                  loading="lazy"
                />
                <span className="product-card-float-num font-mono">02</span>
              </Link>
              <div className="product-card-body">
                <div className="product-card-eyebrow-row font-mono">
                  <span className="product-card-tag">FIBRE CORES</span>
                  <span className="product-card-phase">3 VARIANTS</span>
                </div>
                <h3 className="product-card-title">
                  <Link href="/products/engineered-boards" className="card-title-link">
                    Solid Engineered Boards
                  </Link>
                </h3>
                <p className="product-card-desc">
                  Homogeneous high-density panels engineered for precision CNC routing, moisture-exposed modular kitchens, and smooth architectural finishing.
                </p>
                <div className="product-variants-box">
                  <span className="product-variants-label font-mono">PORTFOLIO RANGE</span>
                  <ul className="product-variant-pills" role="list">
                    <li>MDF</li>
                    <li>HDHMR</li>
                    <li>Pre-Laminated MDF</li>
                  </ul>
                </div>
                <div className="product-card-actions">
                  <Link href="/products/engineered-boards" className="btn btn-primary btn-sm">
                    <span>Explore Range</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                  <Link href="/enquiry?family=Engineered+Boards" className="product-card-link-enquire">
                    Specify / Enquire
                  </Link>
                </div>
              </div>
            </article>

            {/* Family 03 */}
            <article className="product-family-card">
              <Link href="/products/decorative-surfaces" className="product-card-img-wrap" aria-label="Explore Decorative Surfaces">
                <img
                  src="/assets/product-decorative-surfaces.jpg"
                  alt="Natural walnut wood veneer, fluted charcoal panel, and matte acrylic surface flatlay"
                  className="product-card-img"
                  width="640"
                  height="440"
                  loading="lazy"
                />
                <span className="product-card-float-num font-mono">03</span>
              </Link>
              <div className="product-card-body">
                <div className="product-card-eyebrow-row font-mono">
                  <span className="product-card-tag">ARCHITECTURAL FINISHES</span>
                  <span className="product-card-phase">4 VARIANTS</span>
                </div>
                <h3 className="product-card-title">
                  <Link href="/products/decorative-surfaces" className="card-title-link">
                    Decorative Surfaces
                  </Link>
                </h3>
                <p className="product-card-desc">
                  Curated timber veneers, high-pressure laminates, acrylic sheets, and sculpted fluted charcoal panels delivering tactile warmth to interior architecture.
                </p>
                <div className="product-variants-box">
                  <span className="product-variants-label font-mono">PORTFOLIO RANGE</span>
                  <ul className="product-variant-pills" role="list">
                    <li>Veneers</li>
                    <li>Laminates</li>
                    <li>Acrylic Panels</li>
                    <li>Charcoal Panels</li>
                  </ul>
                </div>
                <div className="product-card-actions">
                  <Link href="/products/decorative-surfaces" className="btn btn-primary btn-sm">
                    <span>Explore Range</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                  <Link href="/enquiry?family=Decorative+Surfaces" className="product-card-link-enquire">
                    Specify / Enquire
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 4: SUPPORTED INDUSTRIES & APPLICATIONS */}
      <section className="section-spacing" aria-label="Supported Industries">
        <div className="container">
          <div className="section-header-split">
            <div>
              <span className="section-eyebrow font-mono">SECTORS &amp; APPLICATIONS</span>
              <h2 className="section-title">One brand. Multiple industries.</h2>
              <p className="section-subtitle">
                Panel substrates and surface solutions aligned with the functional demands of four foundational sectors.
              </p>
            </div>
            <div className="section-header-action">
              <Link href="/applications" className="btn btn-secondary">
                <span>Explore All Sectors</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="applications-grid">
            <article className="application-card">
              <div className="application-img-wrap">
                <img
                  src="/assets/sector-construction.jpg"
                  alt="Contemporary mass-timber commercial atrium and architectural building construction"
                  className="application-img"
                  width="600"
                  height="380"
                  loading="lazy"
                />
                <span className="application-badge font-mono">01 / SECTOR</span>
              </div>
              <div className="application-content">
                <h3 className="application-title">Construction</h3>
                <p className="application-desc">
                  Residential, commercial, and project-led building applications requiring dependable panel substrates for interior partitions, ceiling treatments, and joinery.
                </p>
                <Link href="/applications#construction" className="application-link">
                  <span>Sector Overview</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            <article className="application-card">
              <div className="application-img-wrap">
                <img
                  src="/assets/sector-manufacturing.jpg"
                  alt="Industrial wood-panel manufacturing and precision assembly environment"
                  className="application-img"
                  width="600"
                  height="380"
                  loading="lazy"
                />
                <span className="application-badge font-mono">02 / SECTOR</span>
              </div>
              <div className="application-content">
                <h3 className="application-title">Manufacturing</h3>
                <p className="application-desc">
                  Industrial facilities, production environments, and utility spaces requiring uniform substrates for serial processing, jigs, and industrial workstations.
                </p>
                <Link href="/applications#manufacturing" className="application-link">
                  <span>Sector Overview</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            <article className="application-card">
              <div className="application-img-wrap">
                <img
                  src="/assets/sector-packaging.jpg"
                  alt="Organized industrial warehouse with engineered plywood shipping crates and pallet systems"
                  className="application-img"
                  width="600"
                  height="380"
                  loading="lazy"
                />
                <span className="application-badge font-mono">03 / SECTOR</span>
              </div>
              <div className="application-content">
                <h3 className="application-title">Packaging &amp; Warehousing</h3>
                <p className="application-desc">
                  Storage systems, logistics hubs, and warehouse-support environments needing resilient panels for protective crates, pallet collars, and dividers.
                </p>
                <Link href="/applications#packaging" className="application-link">
                  <span>Sector Overview</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            <article className="application-card">
              <div className="application-img-wrap">
                <img
                  src="/assets/sector-furniture.jpg"
                  alt="Refined modular kitchen cabinetry, bespoke wardrobe joinery, and decorative wood surfaces"
                  className="application-img"
                  width="600"
                  height="380"
                  loading="lazy"
                />
                <span className="application-badge font-mono">04 / SECTOR</span>
              </div>
              <div className="application-content">
                <h3 className="application-title">Furniture &amp; Interiors</h3>
                <p className="application-desc">
                  Modular furniture, bespoke cabinetry, commercial fit-outs, and hospitality interiors pairing calibrated cores with expressive architectural finishes.
                </p>
                <Link href="/applications#furniture" className="application-link">
                  <span>Sector Overview</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION 5: NEOM 8-PILLAR ECOSYSTEM */}
      <section className="section-spacing bg-forest-deep text-warm" aria-label="Ecosystem Pillars">
        <div className="container">
          <div className="section-header-split section-header-split--dark">
            <div>
              <span className="section-eyebrow text-gold font-mono">INTEGRATED ECOSYSTEM</span>
              <h2 className="section-title text-warm">More than materials. A connected approach.</h2>
              <p className="section-subtitle text-warm-muted">
                Eight core commitments guiding how NEOM Panels builds quality, supports design specifiers, and scales supply reliability.
              </p>
            </div>
            <div className="section-header-action">
              <Link href="/about#pillars" className="btn btn-outline-light">
                <span>About Our Philosophy</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="ecosystem-editorial-grid">
            <div className="ecosystem-pillar-card">
              <span className="pillar-num font-mono">01 / QUALITY</span>
              <h3 className="pillar-title">Quality</h3>
              <p className="pillar-desc">
                Disciplined manufacturing partnerships and systematic verification checks focused on core bonding, flatness, and consistent grading.
              </p>
            </div>

            <div className="ecosystem-pillar-card">
              <span className="pillar-num font-mono">02 / DESIGN</span>
              <h3 className="pillar-title">Design Support</h3>
              <p className="pillar-desc">
                Helping architects and interior designers pair core substrates with compatible veneers, laminates, acrylics, and fluted profiles.
              </p>
            </div>

            <div className="ecosystem-pillar-card">
              <span className="pillar-num font-mono">03 / CHANNEL</span>
              <h3 className="pillar-title">Dealer Enablement</h3>
              <p className="pillar-desc">
                Empowering trade dealers and regional distributors with structured cataloguing, transparent communication, and dependable replenishment.
              </p>
            </div>

            <div className="ecosystem-pillar-card">
              <span className="pillar-num font-mono">04 / SPECIFIERS</span>
              <h3 className="pillar-title">Architect Engagement</h3>
              <p className="pillar-desc">
                Collaborative dialogue with architectural studios to align emerging interior surface palettes with practical joinery substrates.
              </p>
            </div>

            <div className="ecosystem-pillar-card">
              <span className="pillar-num font-mono">05 / DIGITAL</span>
              <h3 className="pillar-title">Digital Infrastructure</h3>
              <p className="pillar-desc">
                Building modern digital workflows that simplify material discovery, specification enquiries, sample coordination, and partner updates.
              </p>
            </div>

            <div className="ecosystem-pillar-card">
              <span className="pillar-num font-mono">06 / FULFILMENT</span>
              <h3 className="pillar-title">Project Supply</h3>
              <p className="pillar-desc">
                Coordinated batch scheduling designed around the milestone timelines of commercial fit-outs, hospitality spaces, and OEM production.
              </p>
            </div>

            <div className="ecosystem-pillar-card">
              <span className="pillar-num font-mono">07 / STEWARDSHIP</span>
              <h3 className="pillar-title">Sustainability</h3>
              <p className="pillar-desc">
                Prioritising plantation agro-forestry timber sources, responsible fibre utilization, and healthier interior resin preferences.
              </p>
            </div>

            <div className="ecosystem-pillar-card">
              <span className="pillar-num font-mono">08 / GLOBAL</span>
              <h3 className="pillar-title">Export Readiness</h3>
              <p className="pillar-desc">
                Developing packaging, documentation, and logistics standards aligned with phased expansion into GCC and international markets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: EXECUTIVE LEADERSHIP PREVIEW */}
      <section className="section-spacing bg-warm-ivory" aria-label="Executive Leadership">
        <div className="container">
          <div className="section-header-split">
            <div>
              <span className="section-eyebrow font-mono">EXECUTIVE BOARD</span>
              <h2 className="section-title">Guided by experienced leadership.</h2>
              <p className="section-subtitle">
                Meet the leadership team driving NEOM Panels’ strategic direction, wood-panel operations, financial governance, and digital workflows.
              </p>
            </div>
            <div className="section-header-action">
              <Link href="/team" className="btn btn-secondary">
                <span>Meet Full Leadership Team</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="home-leaders-grid">
            {LEADERSHIP_PROFILES.map((leader) => (
              <article key={leader.id} className="home-leader-card">
                <Link href={leader.profileHref} className="home-leader-card__img-wrap">
                  <picture>
                    <source srcSet={leader.photo} type="image/webp" />
                    <img
                      src={leader.photoFallback || leader.photo}
                      alt={leader.photoAlt}
                      width="440"
                      height="440"
                      loading="lazy"
                      className="home-leader-card__img"
                    />
                  </picture>
                </Link>
                <div className="home-leader-card__body">
                  <span className="home-leader-card__role font-mono">{leader.role}</span>
                  <h3 className="home-leader-card__name">
                    <Link href={leader.profileHref}>{leader.name}</Link>
                  </h3>
                  <p className="home-leader-card__focus">{leader.focus}</p>
                  <div className="home-leader-card__links">
                    <Link href={leader.profileHref} className="home-leader-card__profile-link">
                      <span>View Profile</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                    {leader.linkedin && (
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="home-leader-card__linkedin"
                        aria-label={`${leader.name} on LinkedIn`}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: PARTNERSHIP INVITATION */}
      <section className="section-spacing" aria-label="Partnerships">
        <div className="container">
          <div className="section-header-split">
            <div>
              <span className="section-eyebrow font-mono">CHANNEL &amp; COLLABORATION</span>
              <h2 className="section-title">Built around the people who build spaces.</h2>
              <p className="section-subtitle">
                Dedicated enquiry and supply pathways for design studios, regional trade partners, fabricators, and institutional buyers.
              </p>
            </div>
            <div className="section-header-action">
              <Link href="/partners" className="btn btn-secondary">
                <span>Partner Ecosystem</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="partner-groups-grid">
            <div className="partner-group-card">
              <span className="partner-group-num font-mono">01 / DESIGN</span>
              <h3 className="partner-group-title">Architects &amp; Interior Designers</h3>
              <p className="partner-group-desc">
                Evaluate core substrates, explore decorative surface pairings, and request physical swatch folders for active interior concepts.
              </p>
              <Link href="/enquiry?type=Sample+Request&role=Architects" className="btn btn-secondary btn-sm">
                <span>Architect / Designer Enquiry</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="partner-group-card">
              <span className="partner-group-num font-mono">02 / TRADE</span>
              <h3 className="partner-group-title">Dealers &amp; Distributors</h3>
              <p className="partner-group-desc">
                Build a dependable regional trade relationship backed by clear product architecture, display support, and structured wholesale supply.
              </p>
              <Link href="/enquiry?type=Partnership&role=Dealers" className="btn btn-secondary btn-sm">
                <span>Discuss a Partnership</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="partner-group-card">
              <span className="partner-group-num font-mono">03 / EXECUTION</span>
              <h3 className="partner-group-title">Manufacturers, Contractors &amp; Builders</h3>
              <p className="partner-group-desc">
                Source calibrated plywood and high-density engineered boards suited for CNC nesting, modular joinery, and commercial site execution.
              </p>
              <Link href="/enquiry?type=Project+Supply&role=Furniture+Manufacturers" className="btn btn-secondary btn-sm">
                <span>Discuss Project Supply</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="partner-group-card">
              <span className="partner-group-num font-mono">04 / ENTERPRISE</span>
              <h3 className="partner-group-title">Institutional Buyers</h3>
              <p className="partner-group-desc">
                Coordinate volume requirements for hospitality developments, corporate campuses, educational infrastructure, and export crating.
              </p>
              <Link href="/enquiry?type=Project+Supply&role=Institutional+Buyers" className="btn btn-secondary btn-sm">
                <span>Institutional Enquiry</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: INDIA AND GCC AMBITION */}
      <section className="section-spacing bg-warm-ivory border-top-divider" aria-label="India and GCC Growth Corridor">
        <div className="container">
          <div className="corridor-editorial-layout">
            <div className="corridor-copy">
              <span className="section-eyebrow font-mono">GEOGRAPHIC HORIZON</span>
              <h2 className="section-title">Rooted in India. Looking towards the GCC.</h2>
              <p className="corridor-lead">
                India serves as our primary domestic foundation—driven by rapid growth in urban residential housing, modular cabinetry, and commercial interiors.
              </p>
              <p className="corridor-body">
                Building methodically from a strong domestic base, NEOM Panels identifies the Gulf Cooperation Council (GCC) as a strategic future expansion corridor, leveraging maritime connectivity from Western Indian ports to serve regional distributor and project partners.
              </p>

              <div className="target-markets-box">
                <span className="target-markets-title font-mono">STRATEGIC GCC TARGET MARKETS</span>
                <div className="target-markets-tags">
                  <span className="market-tag">United Arab Emirates</span>
                  <span className="market-tag">Saudi Arabia</span>
                  <span className="market-tag">Qatar</span>
                  <span className="market-tag">Oman</span>
                  <span className="market-tag">Bahrain</span>
                  <span className="market-tag">Kuwait</span>
                </div>
              </div>

              <div className="corridor-cta-row">
                <Link href="/growth-vision" className="btn btn-primary">
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
                    alt="Waterfront architectural timber pavilion overlooking the Dubai skyline"
                    className="corridor-img"
                    width="600"
                    height="380"
                    loading="lazy"
                  />
                  <div className="corridor-img-label font-mono">UAE &amp; COMMERCIAL HOSPITALITY CORRIDOR</div>
                </div>
                <div className="corridor-img-card">
                  <img
                    src="/assets/gcc-riyadh.jpg"
                    alt="Contemporary Riyadh architectural district with warm timber louver detailing"
                    className="corridor-img"
                    width="600"
                    height="380"
                    loading="lazy"
                  />
                  <div className="corridor-img-label font-mono">SAUDI ARABIA &amp; REGIONAL EXPANSION</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: CLOSING ENQUIRY BANNER */}
      <section className="section-spacing" aria-label="Contact and Enquiry Desk">
        <div className="container">
          <div className="closing-cta-panel">
            <div className="closing-cta-panel__content">
              <span className="section-eyebrow text-gold font-mono">DIRECT SPECIFICATION DESK</span>
              <h2 className="closing-cta-panel__title">Let’s build better spaces together.</h2>
              <p className="closing-cta-panel__desc">
                Share your material requirement, request product information, or start a dealership conversation with the NEOM Panels team.
              </p>
              <div className="closing-cta-panel__actions">
                <Link href="/enquiry" className="btn btn-gold btn-lg">
                  <span>Discuss Your Requirement</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <a href="tel:+919745450618" className="btn btn-outline-light font-mono">
                  <span>+91 97454 50618</span>
                </a>
                <a href="mailto:neompanels@gmail.com" className="btn btn-outline-light">
                  <span>neompanels@gmail.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
