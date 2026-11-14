import Link from 'next/link';

export const metadata = {
  title: 'Strategic Growth Vision & GCC Expansion | NEOM Panels',
  description:
    'Discover the NEOM Panels 10-year growth blueprint: establishing an Indian domestic foundation, scaling multi-state distribution, and expanding into high-value GCC markets.',
  alternates: {
    canonical: '/growth-vision'
  }
};

export default function GrowthVisionPage() {
  return (
    <div className="page-view">
      {/* Page Header */}
      <section className="page-header-section bg-warm-ivory border-bottom-divider">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <ol className="breadcrumb-list font-mono" role="list">
              <li><Link href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/about">About NEOM</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Growth Vision</li>
            </ol>
          </nav>

          <div className="page-header-content">
            <span className="section-eyebrow font-mono">10-YEAR BLUEPRINT (2026–2036)</span>
            <h1 className="page-title">Growth Vision &amp; Geographic Expansion</h1>
            <p className="page-lead-text">
              A structured roadmap built on a disciplined India-first domestic anchor, followed by strategic market entry into high-growth Gulf Cooperation Council (GCC) corridors.
            </p>
          </div>
        </div>
      </section>

      {/* Domestic Foundation vs GCC Corridor */}
      <section className="section-spacing" id="gcc-corridor" aria-label="Dual Corridor Strategy">
        <div className="container">
          <div className="corridor-strategy-grid">
            {/* Column 1: India Domestic Foundation (Page 4) */}
            <div className="corridor-card bg-warm-ivory border-strong">
              <span className="corridor-badge font-mono">DOMESTIC ANCHOR</span>
              <h2 className="corridor-card-title">The India Opportunity</h2>
              <p className="corridor-card-lead">
                India represents one of the world&apos;s fastest-growing wood-panel and interior materials markets, driven by structural shifts in urban housing, commercial interiors, and organized retail joinery.
              </p>
              <ul className="corridor-card-points" role="list">
                <li>
                  <strong>Urban Housing Demand:</strong> Continuous expansion of high-density residential developments driving large volumes of structural and calibrated panel substrates.
                </li>
                <li>
                  <strong>Shift to Factory-Finished Modular Joinery:</strong> Growth of modular kitchen and wardrobe OEMs requiring calibrated thickness consistency for automated CNC machining.
                </li>
                <li>
                  <strong>Commercial Infrastructure:</strong> Massive expansion in corporate office parks, healthcare institutions, and hospitality destinations requiring reliable BOQ project supply.
                </li>
                <li>
                  <strong>Formalisation of the Timber Sector:</strong> Increasing preference among architects and institutional buyers for disciplined, branded, and quality-verified wood panels.
                </li>
              </ul>
              <div className="corridor-card-footer font-mono">
                Source: Physical Page 4 · NEOM Panels Strategic Market Study
              </div>
            </div>

            {/* Column 2: GCC Strategic Expansion Corridor (Page 5) */}
            <div className="corridor-card bg-forest text-warm">
              <span className="corridor-badge font-mono text-gold">STRATEGIC EXPANSION</span>
              <h2 className="corridor-card-title text-warm">The GCC Target Corridor</h2>
              <p className="corridor-card-lead text-warm-muted">
                The Gulf Cooperation Council (GCC) presents a high-value geographic expansion corridor for NEOM Panels, connected directly via maritime shipping routes from Western Indian ports.
              </p>
              <div className="gcc-target-list">
                <span className="gcc-target-heading font-mono text-gold">TARGET MARKETS FOR EXPANSION</span>
                <ul className="gcc-target-grid" role="list">
                  <li>• <strong>United Arab Emirates:</strong> Dubai &amp; Abu Dhabi commercial fit-out &amp; hospitality markets</li>
                  <li>• <strong>Kingdom of Saudi Arabia:</strong> Riyadh urban expansion and giga-project interior developments</li>
                  <li>• <strong>State of Qatar:</strong> High-spec architectural hospitality and institutional spaces</li>
                  <li>• <strong>Sultanate of Oman:</strong> Regional distribution and commercial packaging needs</li>
                  <li>• <strong>Kingdom of Bahrain:</strong> Residential joinery and commercial interior procurement</li>
                  <li>• <strong>State of Kuwait:</strong> Premium residential cabinetry and decorative surfaces</li>
                </ul>
              </div>
              <p className="gcc-context-text text-warm-muted">
                NEOM Panels approaches the GCC as an export expansion corridor built through phased partner distributor networks, rather than active direct factory infrastructure today.
              </p>
              <div className="corridor-card-footer font-mono text-gold" style={{ borderColor: 'rgba(255,255,255,0.15)' }}>
                Source: Physical Page 5 · NEOM Panels Strategic Market Study
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10-Year Growth Timeline (Page 11) */}
      <section className="section-spacing bg-warm-ivory border-top-divider" aria-label="10-Year Roadmap">
        <div className="container">
          <div className="section-header-compact">
            <span className="section-eyebrow font-mono">STRATEGIC MILESTONES</span>
            <h2 className="section-title">The 10-Year Development Horizon</h2>
            <p className="section-subtitle">
              From physical page 11 of the pitch deck: an orderly multi-stage progression from brand establishment to regional leadership.
            </p>
          </div>

          <div className="timeline-vertical-flow">
            {/* Year 1 */}
            <div className="timeline-node">
              <div className="timeline-marker font-mono">YEAR 01</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Brand Establishment</h3>
                <p className="timeline-desc">
                  Establish the NEOM Panels master brand identity, introduce Phase 1 product portfolio (Plywood, Engineered Boards, Decorative Surfaces), validate market acceptance, and initiate core dealer partnerships in key regional markets.
                </p>
              </div>
            </div>

            {/* Year 2 */}
            <div className="timeline-node">
              <div className="timeline-marker font-mono">YEAR 02</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Regional Expansion</h3>
                <p className="timeline-desc">
                  Expand distribution into adjacent southern and western Indian states, establish initial OEM supply agreements with modular furniture fabricators, and initiate product certification trials for target export markets.
                </p>
              </div>
            </div>

            {/* Year 3 */}
            <div className="timeline-node">
              <div className="timeline-marker font-mono">YEAR 03</div>
              <div className="timeline-content">
                <h3 className="timeline-title">Multi-State Presence</h3>
                <p className="timeline-desc">
                  Scale a multi-state distribution network across major Indian commercial hubs, strengthen contract manufacturing alliances, and initiate trial container shipments into select GCC trade partners.
                </p>
              </div>
            </div>

            {/* Year 5 */}
            <div className="timeline-node">
              <div className="timeline-marker font-mono">YEAR 05</div>
              <div className="timeline-content">
                <h3 className="timeline-title">National Expansion</h3>
                <p className="timeline-desc">
                  Achieve national brand footprint across Tier 1 and Tier 2 cities in India, launch dedicated architect engagement programs, and consolidate recurring project supply pipelines in the UAE and Saudi Arabia.
                </p>
              </div>
            </div>

            {/* Year 10 */}
            <div className="timeline-node">
              <div className="timeline-marker font-mono">YEAR 10</div>
              <div className="timeline-content">
                <h3 className="timeline-title">India + GCC Leadership</h3>
                <p className="timeline-desc">
                  Realize an integrated engineered wood and materials ecosystem with established leadership across Indian domestic markets and a recognised brand presence across the GCC corridor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Revenue Targets (Clearly labeled as future projections) */}
      <section className="section-spacing" aria-label="Strategic Revenue Targets">
        <div className="container">
          <div className="financial-roadmap-wrapper">
            <div className="section-header-compact text-center">
              <span className="section-eyebrow font-mono">FINANCIAL ASPIRATION</span>
              <h2 className="section-title">Strategic Revenue Targets</h2>
              <p className="section-subtitle" style={{ marginInline: 'auto' }}>
                From physical page 11 of the pitch deck. The figures below represent strategic growth targets and future business projections, not historical or guaranteed operational revenues.
              </p>
            </div>

            <div className="targets-metric-grid">
              <div className="target-metric-card">
                <span className="target-metric-period font-mono">YEAR 1 TARGET</span>
                <div className="target-metric-figure font-mono">₹10–15 Cr</div>
                <p className="target-metric-label">Brand establishment &amp; initial trade channel distribution</p>
              </div>

              <div className="target-metric-card">
                <span className="target-metric-period font-mono">YEAR 2 TARGET</span>
                <div className="target-metric-figure font-mono">₹25–40 Cr</div>
                <p className="target-metric-label">Regional distribution expansion &amp; OEM supply agreements</p>
              </div>

              <div className="target-metric-card">
                <span className="target-metric-period font-mono">YEAR 3 TARGET</span>
                <div className="target-metric-figure font-mono">₹50–75 Cr</div>
                <p className="target-metric-label">Multi-state presence &amp; initial GCC trial shipments</p>
              </div>

              <div className="target-metric-card">
                <span className="target-metric-period font-mono">YEAR 5 TARGET</span>
                <div className="target-metric-figure font-mono">₹150–250 Cr</div>
                <p className="target-metric-label">Pan-India distribution &amp; established GCC project supply</p>
              </div>

              <div className="target-metric-card target-metric-card--highlight">
                <span className="target-metric-period font-mono text-gold">YEAR 10 TARGET</span>
                <div className="target-metric-figure font-mono text-gold">₹500+ Cr</div>
                <p className="target-metric-label">Full ecosystem scale across India &amp; international markets</p>
              </div>
            </div>

            <div className="target-disclaimer-box font-mono">
              <strong>Source Reference:</strong> Physical Slide 11, NEOM Panels Pitch Deck · Forward-looking strategic business targets for investor planning and operational milestones.
            </div>
          </div>
        </div>
      </section>

      {/* Action Banner */}
      <section className="section-spacing bg-warm-ivory border-top-divider">
        <div className="container">
          <div className="consultation-banner">
            <div className="consultation-copy">
              <span className="section-eyebrow font-mono">CHANNEL COLLABORATION</span>
              <h2 className="section-title">Join our growth journey</h2>
              <p className="consultation-desc">
                We are actively discussing regional dealership and distribution opportunities with qualified business partners across India and the GCC corridor.
              </p>
            </div>
            <div className="consultation-action">
              <Link href="/enquiry?type=Partnership" className="btn btn-primary">
                <span>Discuss Channel Partnership</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
