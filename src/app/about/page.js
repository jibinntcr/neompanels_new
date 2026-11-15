import Link from 'next/link';
import { LEADERSHIP_PROFILES } from '@/lib/leadership-data';

export const metadata = {
  title: 'About NEOM Panels — Vision, Mission & Ecosystem',
  description:
    'Learn about NEOM Panels: our corporate vision, mission, executive leadership team, 8 ecosystem pillars, market context, and 4-stage business growth model.',
  alternates: {
    canonical: '/about'
  }
};

export default function AboutPage() {
  return (
    <main id="main-content" className="page-view">
      {/* Architectural Page Hero */}
      <section className="arch-page-hero arch-page-hero--forest" aria-labelledby="main-heading">
        <div className="container">
          <nav className="breadcrumb-nav breadcrumb-nav--light" aria-label="Breadcrumb">
            <ol className="breadcrumb-list font-mono" role="list">
              <li><Link href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">About NEOM</li>
            </ol>
          </nav>

          <div className="arch-page-hero__grid">
            <div className="arch-page-hero__copy">
              <span className="section-eyebrow text-gold font-mono">PURPOSE &amp; CORPORATE IDENTITY</span>
              <h1 id="main-heading" tabIndex={-1} className="page-title text-warm">
                Building an Integrated Materials Ecosystem.
              </h1>
              <p className="page-lead-text text-warm-muted">
                NEOM Panels is an Indian engineered wood and interior materials brand created with a disciplined long-term horizon: bridging quality, design relevance, and dependable project supply for spaces across India and global markets.
              </p>
            </div>

            <div className="arch-page-hero__stat-card">
              <span className="arch-stat-label font-mono text-gold">BRAND PROMISE</span>
              <p className="arch-stat-quote">
                “Engineered Excellence, Designed for Spaces.”
              </p>
              <div className="arch-stat-meta font-mono">
                <span>An integrated engineered wood, interior materials, and project supply ecosystem</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section-spacing" id="vision-mission" aria-label="Vision and Mission">
        <div className="container">
          <div className="vision-mission-grid">
            <div className="vision-card bg-forest text-warm">
              <span className="vm-badge font-mono text-gold">01 / OUR VISION</span>
              <blockquote className="vm-statement">
                “To become one of the most trusted engineered wood and interior materials brands from India, recognized for quality, design relevance, sustainability, digital excellence, and international market reach.”
              </blockquote>
              <p className="vm-context text-warm-muted">
                Anchoring an enduring Indian materials standard built for domestic leadership and international credibility.
              </p>
            </div>

            <div className="mission-card bg-warm-ivory border-strong">
              <span className="vm-badge font-mono text-forest">02 / OUR MISSION</span>
              <blockquote className="vm-statement text-forest">
                “To deliver reliable, design-ready, and scalable panel solutions through strong manufacturing partnerships, disciplined quality systems, dealer empowerment, architect engagement, project supply capability, and digital-first customer experience.”
              </blockquote>
              <p className="vm-context text-muted">
                Translating architectural and commercial requirements into dependable everyday execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Six Market Demand Drivers */}
      <section className="section-spacing bg-warm-ivory" id="market-drivers" aria-label="Market Context and Drivers">
        <div className="container">
          <div className="section-header-compact">
            <span className="section-eyebrow font-mono">INDUSTRY CONTEXT</span>
            <h2 className="section-title">Six Structural Demand Drivers</h2>
            <p className="section-subtitle">
              The fundamental shifts reshaping how residential, commercial, and hospitality spaces specify engineered wood and interior surfaces.
            </p>
          </div>

          <div className="drivers-grid">
            <div className="driver-card">
              <span className="driver-num font-mono">01</span>
              <h3 className="driver-title">Urban Housing &amp; Modern Living</h3>
              <p className="driver-desc">
                Sustained residential apartment and villa development driving continuous demand for dimensionally stable furniture and interior panel substrates.
              </p>
            </div>

            <div className="driver-card">
              <span className="driver-num font-mono">02</span>
              <h3 className="driver-title">Modular Furniture Shift</h3>
              <p className="driver-desc">
                Rapid transition from manual site carpentry to factory-machined modular kitchens, wardrobes, and CNC-nested cabinetry systems.
              </p>
            </div>

            <div className="driver-card">
              <span className="driver-num font-mono">03</span>
              <h3 className="driver-title">Commercial Interiors</h3>
              <p className="driver-desc">
                Expansion across corporate workplaces, healthcare facilities, education, and organized retail requiring coordinated project supply.
              </p>
            </div>

            <div className="driver-card">
              <span className="driver-num font-mono">04</span>
              <h3 className="driver-title">Hospitality &amp; Tourism</h3>
              <p className="driver-desc">
                Growth in boutique hotels, resorts, and dining spaces demanding expressive decorative veneers, fluted cladding, and moisture-resilient cores.
              </p>
            </div>

            <div className="driver-card">
              <span className="driver-num font-mono">05</span>
              <h3 className="driver-title">Elevated Design Expectations</h3>
              <p className="driver-desc">
                Stronger specifier preference for authentic wood grain character, tactile matte finishes, and cohesive substrate-to-surface pairing.
              </p>
            </div>

            <div className="driver-card">
              <span className="driver-num font-mono">06</span>
              <h3 className="driver-title">Sustainability &amp; Low-Emission Focus</h3>
              <p className="driver-desc">
                Growing emphasis on agro-forestry plantation timber, efficient fibre utilization, and healthier interior air-quality preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 8 Ecosystem Pillars */}
      <section className="section-spacing" id="pillars" aria-label="The 8-Pillar Ecosystem">
        <div className="container">
          <div className="section-header-compact">
            <span className="section-eyebrow font-mono">OPERATING ARCHITECTURE</span>
            <h2 className="section-title">The Eight Ecosystem Pillars</h2>
            <p className="section-subtitle">
              Eight interconnected commitments guiding how NEOM Panels engages manufacturing partners, specifiers, dealers, and project buyers.
            </p>
          </div>

          <div className="pillars-grid-eight">
            {[
              { num: '01', title: 'Quality', desc: 'Disciplined manufacturing partner selection, raw veneer grading, and systematic core verification.' },
              { num: '02', title: 'Design Support', desc: 'Assisting specifiers with physical swatches, substrate pairing, and decorative finish selection.' },
              { num: '03', title: 'Dealer Enablement', desc: 'Structured wholesale support, clear cataloguing, and transparent regional replenishment.' },
              { num: '04', title: 'Architect Engagement', desc: 'Ongoing collaboration with design practices on emerging interior textures and joinery needs.' },
              { num: '05', title: 'Digital Infrastructure', desc: 'Modern digital touchpoints connecting material discovery, enquiries, and partner coordination.' },
              { num: '06', title: 'Project Supply', desc: 'Scheduled multi-batch fulfilment aligned with commercial, hospitality, and OEM timelines.' },
              { num: '07', title: 'Sustainability', desc: 'Promoting renewable plantation timber sourcing and responsible fibre-board utilization.' },
              { num: '08', title: 'Export Readiness', desc: 'Building packaging, documentation, and logistics standards for GCC and international corridors.' }
            ].map((pillar) => (
              <div key={pillar.num} className="pillar-item">
                <span className="pillar-item-num font-mono">{pillar.num}</span>
                <h3 className="pillar-item-title">{pillar.title}</h3>
                <p className="pillar-item-desc">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4-Stage Growth Model */}
      <section className="section-spacing bg-warm-ivory border-top-divider" id="growth-model" aria-label="Growth Model">
        <div className="container">
          <div className="section-header-split">
            <div>
              <span className="section-eyebrow font-mono">GROWTH MODEL</span>
              <h2 className="section-title">Four-Stage Operating Progression</h2>
              <p className="section-subtitle">
                A pragmatic, capital-disciplined roadmap scaling from market entry and contract manufacturing toward a fully integrated manufacturing ecosystem.
              </p>
            </div>
            <div className="section-header-action">
              <Link href="/growth-vision" className="btn btn-secondary">
                <span>10-Year Growth Vision</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="growth-stages-grid">
            <div className="growth-stage-card">
              <div className="stage-card-step font-mono">STAGE 01</div>
              <h3 className="stage-card-title">Brand Building + Trading</h3>
              <p className="stage-card-desc">
                Establishing the NEOM Panels brand identity, introducing Phase 1 product families, and cultivating core distributor and specifier relationships.
              </p>
            </div>

            <div className="growth-stage-card">
              <div className="stage-card-step font-mono">STAGE 02</div>
              <h3 className="stage-card-title">Contract Manufacturing</h3>
              <p className="stage-card-desc">
                Scaling dedicated production runs through vetted manufacturing partners under defined NEOM Panels quality and grading parameters.
              </p>
            </div>

            <div className="growth-stage-card">
              <div className="stage-card-step font-mono">STAGE 03</div>
              <h3 className="stage-card-title">Manufacturing Partnerships</h3>
              <p className="stage-card-desc">
                Deepening strategic joint production alliances to secure long-term capacity, specialized surface lines, and export-grade consistency.
              </p>
            </div>

            <div className="growth-stage-card">
              <div className="stage-card-step font-mono">STAGE 04</div>
              <h3 className="stage-card-title">Integrated Manufacturing Ecosystem</h3>
              <p className="stage-card-desc">
                Realizing an integrated production, R&amp;D, and global supply platform serving domestic Indian clusters and international trade corridors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Leadership Summary Strip */}
      <section className="section-spacing" aria-label="Executive Leadership Preview">
        <div className="container">
          <div className="section-header-split">
            <div>
              <span className="section-eyebrow font-mono">LEADERSHIP &amp; GOVERNANCE</span>
              <h2 className="section-title">Executive Team</h2>
              <p className="section-subtitle">
                Meet the directors guiding NEOM Panels across corporate strategy, wood-panel operations, finance, and digital systems.
              </p>
            </div>
            <div className="section-header-action">
              <Link href="/team" className="btn btn-primary">
                <span>View Full Team Page</span>
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
                      width="400"
                      height="400"
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
                      <span>Executive Bio</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
