import Link from 'next/link';

export const metadata = {
  title: 'About NEOM Panels — Vision, Mission & Ecosystem',
  description:
    'Learn about NEOM Panels: our corporate vision, mission, 8 ecosystem pillars, market context, and 4-stage business growth model for engineered wood and interior materials.',
  alternates: {
    canonical: '/about'
  }
};

export default function AboutPage() {
  return (
    <div className="page-view">
      {/* Page Header */}
      <section className="page-header-section bg-warm-ivory border-bottom-divider">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <ol className="breadcrumb-list font-mono" role="list">
              <li><Link href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">About NEOM</li>
            </ol>
          </nav>

          <div className="page-header-content">
            <span className="section-eyebrow font-mono">OUR PURPOSE &amp; PHILOSOPHY</span>
            <h1 className="page-title">Building an Integrated Materials Ecosystem</h1>
            <p className="page-lead-text">
              NEOM Panels is an Indian engineered wood and interior materials brand established with a clear long-term horizon: bridging the structural gaps in quality, design support, and supply reliability for spaces across India and global markets.
            </p>
            <div className="brand-promise-callout font-mono">
              <span className="promise-tag">BRAND PROMISE:</span>
              <span className="promise-quote">“Engineered Excellence, Designed for Spaces.”</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="section-spacing" id="vision-mission" aria-label="Vision and Mission">
        <div className="container">
          <div className="vision-mission-grid">
            {/* Vision */}
            <div className="vision-card bg-forest text-warm">
              <span className="vm-badge font-mono text-gold">OUR VISION</span>
              <blockquote className="vm-statement">
                “To become one of the most trusted engineered wood and interior materials brands from India, recognized for quality, design relevance, sustainability, digital excellence, and international market reach.”
              </blockquote>
              <p className="vm-context text-warm-muted">
                From physical slide 3 of the NEOM Panels strategic blueprint: anchoring an enduring corporate standard for domestic and export markets.
              </p>
            </div>

            {/* Mission */}
            <div className="mission-card bg-warm-ivory border-strong">
              <span className="vm-badge font-mono text-forest">OUR MISSION</span>
              <blockquote className="vm-statement text-forest">
                “To deliver reliable, design-ready, and scalable panel solutions through strong manufacturing partnerships, disciplined quality systems, dealer empowerment, architect engagement, project supply capability, and digital-first customer experience.”
              </blockquote>
              <p className="vm-context text-muted">
                From physical slide 3 of the NEOM Panels strategic blueprint: translating customer requirements into disciplined operational execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Drivers Section */}
      <section className="section-spacing bg-warm-ivory" id="market-drivers" aria-label="Market Context and Drivers">
        <div className="container">
          <div className="section-header-compact">
            <span className="section-eyebrow font-mono">MARKET EVOLUTION</span>
            <h2 className="section-title">Six Key Demand Drivers</h2>
            <p className="section-subtitle">
              The structural forces reshaping the Indian engineered wood and interior materials landscape.
            </p>
          </div>

          <div className="drivers-grid">
            <div className="driver-card">
              <span className="driver-num font-mono">01</span>
              <h3 className="driver-title">Urban Housing &amp; Modern Living</h3>
              <p className="driver-desc">
                Accelerated urbanisation and residential apartment construction creating continuous baseline demand for calibrated furniture and interior panel substrates.
              </p>
            </div>

            <div className="driver-card">
              <span className="driver-num font-mono">02</span>
              <h3 className="driver-title">Modular Furniture Boom</h3>
              <p className="driver-desc">
                Transition from manual on-site carpentry toward factory-finished modular kitchens, precision-machined wardrobes, and pre-fabricated joinery systems.
              </p>
            </div>

            <div className="driver-card">
              <span className="driver-num font-mono">03</span>
              <h3 className="driver-title">Commercial &amp; Institutional Interiors</h3>
              <p className="driver-desc">
                Substantial expansion in flexible corporate offices, co-working spaces, healthcare infrastructure, and retail developments requiring reliable BOQ supply.
              </p>
            </div>

            <div className="driver-card">
              <span className="driver-num font-mono">04</span>
              <h3 className="driver-title">Hospitality &amp; Experiential Spaces</h3>
              <p className="driver-desc">
                Rise in domestic tourism, luxury boutique hotels, and dining destinations demanding distinctive decorative finishes and durable wet-area substrates.
              </p>
            </div>

            <div className="driver-card">
              <span className="driver-num font-mono">05</span>
              <h3 className="driver-title">Evolving Design &amp; Aesthetic Expectations</h3>
              <p className="driver-desc">
                Growing client appreciation for refined wood textures, fluted wall treatments, matte acrylics, and natural veneers over generic plain surfaces.
              </p>
            </div>

            <div className="driver-card">
              <span className="driver-num font-mono">06</span>
              <h3 className="driver-title">Sustainability &amp; Low-Emission Preferences</h3>
              <p className="driver-desc">
                Increasing specifier and institutional focus on agro-forestry timber sourcing, circular raw material utilization, and healthier indoor air formulations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The 8 Ecosystem Pillars */}
      <section className="section-spacing" id="pillars" aria-label="The 8-Pillar Ecosystem">
        <div className="container">
          <div className="section-header-compact">
            <span className="section-eyebrow font-mono">INTEGRATED ARCHITECTURE</span>
            <h2 className="section-title">The Eight Ecosystem Pillars</h2>
            <p className="section-subtitle">
              Physical page 8 of our strategic blueprint establishes eight operational commitments guiding how NEOM Panels engages the market.
            </p>
          </div>

          <div className="pillars-grid-eight">
            <div className="pillar-item">
              <div className="pillar-item-header">
                <span className="pillar-item-num font-mono">01</span>
                <h3 className="pillar-item-title">Quality</h3>
              </div>
              <p className="pillar-item-desc">
                Disciplined manufacturing partner selection, strict raw veneer grading, and verified resin formulation to deliver consistent panel flat-bonding.
              </p>
            </div>

            <div className="pillar-item">
              <div className="pillar-item-header">
                <span className="pillar-item-num font-mono">02</span>
                <h3 className="pillar-item-title">Design Support</h3>
              </div>
              <p className="pillar-item-desc">
                Providing architectural specifiers with physical sample swatches, technical edge-banding guidance, and grain-matching advice.
              </p>
            </div>

            <div className="pillar-item">
              <div className="pillar-item-header">
                <span className="pillar-item-num font-mono">03</span>
                <h3 className="pillar-item-title">Dealer Enablement</h3>
              </div>
              <p className="pillar-item-desc">
                Transparent stock communication, structured regional wholesale supply, and promotional materials to empower local retail partners.
              </p>
            </div>

            <div className="pillar-item">
              <div className="pillar-item-header">
                <span className="pillar-item-num font-mono">04</span>
                <h3 className="pillar-item-title">Architect Engagement</h3>
              </div>
              <p className="pillar-item-desc">
                Continuous dialogue with design practices to anticipate emerging interior textures, acoustic cladding needs, and bespoke joinery requirements.
              </p>
            </div>

            <div className="pillar-item">
              <div className="pillar-item-header">
                <span className="pillar-item-num font-mono">05</span>
                <h3 className="pillar-item-title">Digital Infrastructure</h3>
              </div>
              <p className="pillar-item-desc">
                Developing digital channels to connect enquiry processing, order specifications, and dealer support in a cohesive framework.
              </p>
            </div>

            <div className="pillar-item">
              <div className="pillar-item-header">
                <span className="pillar-item-num font-mono">06</span>
                <h3 className="pillar-item-title">Project Supply</h3>
              </div>
              <p className="pillar-item-desc">
                Dependable multi-truckload and scheduled container fulfillment designed for the rigorous milestones of large commercial projects.
              </p>
            </div>

            <div className="pillar-item">
              <div className="pillar-item-header">
                <span className="pillar-item-num font-mono">07</span>
                <h3 className="pillar-item-title">Sustainability</h3>
              </div>
              <p className="pillar-item-desc">
                Promoting renewable agro-forestry plantation timber (eucalyptus, poplar) and low-emission resin technologies to reduce ecological footprint.
              </p>
            </div>

            <div className="pillar-item">
              <div className="pillar-item-header">
                <span className="pillar-item-num font-mono">08</span>
                <h3 className="pillar-item-title">Export Readiness</h3>
              </div>
              <p className="pillar-item-desc">
                Developing product standards, packaging compliance, and logistics protocols geared toward maritime export to GCC nations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Stage Growth Model */}
      <section className="section-spacing bg-warm-ivory border-top-divider" id="growth-model" aria-label="4-Stage Growth Model">
        <div className="container">
          <div className="section-header-compact">
            <span className="section-eyebrow font-mono">BUSINESS PROGRESSION</span>
            <h2 className="section-title">The 4-Stage Growth Model</h2>
            <p className="section-subtitle">
              From physical page 9 of the pitch deck: our structured operational evolution from market entry to an integrated manufacturing ecosystem.
            </p>
          </div>

          <div className="growth-stages-grid">
            <div className="growth-stage-card">
              <div className="stage-card-step font-mono">STAGE 01</div>
              <h3 className="stage-card-title">Brand Building + Trading</h3>
              <p className="stage-card-desc">
                Establishing the NEOM Panels brand presence, validating market acceptance, building initial distribution relationships, and developing customer trust.
              </p>
            </div>

            <div className="growth-stage-card">
              <div className="stage-card-step font-mono">STAGE 02</div>
              <h3 className="stage-card-title">Contract Manufacturing</h3>
              <p className="stage-card-desc">
                Securing disciplined contract production capacity with vetted manufacturing facilities operating under NEOM Panels quality guidelines and formulations.
              </p>
            </div>

            <div className="growth-stage-card">
              <div className="stage-card-step font-mono">STAGE 03</div>
              <h3 className="stage-card-title">Manufacturing Partnerships</h3>
              <p className="stage-card-desc">
                Deepening manufacturing alliances, implementing dedicated production lines, and standardizing quality control across multi-state production centers.
              </p>
            </div>

            <div className="growth-stage-card">
              <div className="stage-card-step font-mono">STAGE 04</div>
              <h3 className="stage-card-title">Integrated Manufacturing Ecosystem</h3>
              <p className="stage-card-desc">
                Realizing a fully integrated manufacturing ecosystem combining owned facilities, joint ventures, direct timber sourcing, and automated logistics.
              </p>
            </div>
          </div>

          <div className="growth-model-note">
            <p className="secondary-text font-mono text-center">
              Strategic Blueprint Reference: Physical Page 9 · Structured progression roadmap for long-term value creation.
            </p>
          </div>

          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <Link href="/growth-vision" className="btn btn-secondary">
              <span>View 10-Year Strategic Growth Vision</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
