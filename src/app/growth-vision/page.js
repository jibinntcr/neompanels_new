import Link from 'next/link';

export const metadata = {
  title: 'Strategic Growth Vision & GCC Expansion | NEOM Panels',
  description:
    'Explore the NEOM Panels 10-year growth roadmap: establishing a strong Indian domestic foundation, scaling multi-state distribution, and expanding into strategic GCC corridors.',
  alternates: {
    canonical: '/growth-vision'
  }
};

export default function GrowthVisionPage() {
  return (
    <main id="main-content" className="page-view">
      {/* Architectural Page Hero */}
      <section className="arch-page-hero arch-page-hero--forest" aria-labelledby="main-heading">
        <div className="container">
          <nav className="breadcrumb-nav breadcrumb-nav--light" aria-label="Breadcrumb">
            <ol className="breadcrumb-list font-mono" role="list">
              <li><Link href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/about">About NEOM</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Growth Vision</li>
            </ol>
          </nav>

          <div className="arch-page-hero__grid">
            <div className="arch-page-hero__copy">
              <span className="section-eyebrow text-gold font-mono">STRATEGIC HORIZON (2026–2036)</span>
              <h1 id="main-heading" tabIndex={-1} className="page-title text-warm">
                Growth Vision &amp; Geographic Expansion.
              </h1>
              <p className="page-lead-text text-warm-muted">
                A disciplined ten-year roadmap anchored in India’s domestic demand fundamentals, followed by phased expansion into high-value Gulf Cooperation Council (GCC) trade corridors.
              </p>
            </div>

            <div className="arch-page-hero__stat-card">
              <span className="arch-stat-label font-mono text-gold">EXPANSION PHILOSOPHY</span>
              <p className="arch-stat-quote">
                “Build deep domestic trust and supply discipline in India first—then scale methodically into neighboring international corridors.”
              </p>
              <div className="arch-stat-meta font-mono">
                <span>India Foundation</span>
                <span aria-hidden="true">→</span>
                <span>6 Target GCC Markets</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Domestic Foundation vs GCC Corridor */}
      <section className="section-spacing" id="gcc-corridor" aria-label="Dual Corridor Strategy">
        <div className="container">
          <div className="corridor-strategy-grid">
            <div className="corridor-card bg-warm-ivory border-strong">
              <span className="corridor-badge font-mono">01 / DOMESTIC ANCHOR</span>
              <h2 className="corridor-card-title">The India Foundation</h2>
              <p className="corridor-card-lead">
                India represents one of the fastest-expanding engineered wood and interior materials markets globally, supported by sustained urbanisation, modular furniture adoption, and commercial fit-out growth.
              </p>
              <ul className="corridor-card-points" role="list">
                <li>
                  <strong>Residential &amp; Urban Housing:</strong> Ongoing apartment and villa construction creating steady demand for reliable interior substrates.
                </li>
                <li>
                  <strong>Factory-Built Modular Joinery:</strong> Increasing shift toward automated CNC kitchen and wardrobe manufacturing requiring uniform panel quality.
                </li>
                <li>
                  <strong>Commercial &amp; Hospitality Fit-Outs:</strong> Growing office, retail, healthcare, and hospitality developments seeking dependable project supply.
                </li>
                <li>
                  <strong>Preference for Structured Brands:</strong> Specifiers and trade partners increasingly favour transparent, design-aware panel brands over fragmented unbranded supply.
                </li>
              </ul>
            </div>

            <div className="corridor-card bg-forest text-warm">
              <span className="corridor-badge font-mono text-gold">02 / STRATEGIC EXPANSION CORRIDOR</span>
              <h2 className="corridor-card-title text-warm">The GCC Horizon</h2>
              <p className="corridor-card-lead text-warm-muted">
                The Gulf Cooperation Council serves as NEOM Panels’ primary future international corridor—accessible via direct maritime logistics from Western Indian ports as domestic capacity matures.
              </p>
              <div className="gcc-target-list">
                <span className="gcc-target-heading font-mono text-gold">SIX TARGET EXPANSION MARKETS</span>
                <ul className="gcc-target-grid" role="list">
                  <li>• <strong>United Arab Emirates:</strong> Commercial interiors, hospitality, and regional trade distribution</li>
                  <li>• <strong>Saudi Arabia:</strong> Urban housing, commercial fit-outs, and large-scale hospitality developments</li>
                  <li>• <strong>Qatar:</strong> Architectural joinery and institutional interior projects</li>
                  <li>• <strong>Oman:</strong> Trade distribution, residential joinery, and industrial packaging</li>
                  <li>• <strong>Bahrain:</strong> Commercial interiors and residential cabinetry supply</li>
                  <li>• <strong>Kuwait:</strong> Modular furniture fabrication and decorative surfaces</li>
                </ul>
              </div>
              <p className="gcc-context-text text-warm-muted">
                GCC countries represent planned target markets within our phased expansion strategy, developed progressively through regional distribution and project partnerships.
              </p>
            </div>
          </div>

          {/* Visual Corridor Showcase */}
          <div className="corridor-visual" style={{ marginTop: '3rem' }}>
            <div className="corridor-img-grid corridor-img-grid--two">
              <div className="corridor-img-card">
                <img
                  src="/assets/gcc-dubai.jpg"
                  alt="Dubai architectural skyline and waterfront timber pavilion"
                  className="corridor-img"
                  width="640"
                  height="400"
                  loading="lazy"
                />
                <div className="corridor-img-label font-mono">UAE &amp; GULF MARITIME GATEWAY</div>
              </div>
              <div className="corridor-img-card">
                <img
                  src="/assets/gcc-riyadh.jpg"
                  alt="Riyadh contemporary architectural district with timber mashrabiya shading"
                  className="corridor-img"
                  width="640"
                  height="400"
                  loading="lazy"
                />
                <div className="corridor-img-label font-mono">SAUDI ARABIA &amp; REGIONAL HORIZON</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10-Year Growth Milestones */}
      <section className="section-spacing bg-warm-ivory border-top-divider" aria-label="10-Year Roadmap">
        <div className="container">
          <div className="section-header-compact">
            <span className="section-eyebrow font-mono">OPERATING MILESTONES</span>
            <h2 className="section-title">Ten-Year Development Roadmap</h2>
            <p className="section-subtitle">
              A phased progression from initial brand establishment to national Indian coverage and GCC corridor leadership.
            </p>
          </div>

          <div className="timeline-vertical-flow">
            {[
              {
                marker: 'YEAR 01',
                title: 'Brand Establishment',
                desc: 'Launch the unified NEOM Panels brand identity, introduce the Phase 1 product portfolio across Plywood, Engineered Boards, and Decorative Surfaces, and onboard foundational dealer and specifier partners.'
              },
              {
                marker: 'YEAR 02',
                title: 'Regional Expansion',
                desc: 'Deepen regional trade distribution across core Indian clusters, expand recurring supply relationships with modular furniture manufacturers, and strengthen contract manufacturing alignment.'
              },
              {
                marker: 'YEAR 03',
                title: 'Multi-State Presence',
                desc: 'Establish multi-state distribution hubs across key Indian commercial centers, broaden architect engagement initiatives, and prepare export-ready trade documentation.'
              },
              {
                marker: 'YEAR 05',
                title: 'National Expansion',
                desc: 'Scale national coverage across major Tier 1 and Tier 2 Indian markets while building active distributor and project-supply partnerships in priority GCC markets.'
              },
              {
                marker: 'YEAR 10',
                title: 'India + GCC Leadership',
                desc: 'Operate an integrated engineered wood and interior materials ecosystem recognized across India and key GCC corridors for quality, design relevance, and dependable supply.'
              }
            ].map((node) => (
              <div key={node.marker} className="timeline-node">
                <div className="timeline-marker font-mono">{node.marker}</div>
                <div className="timeline-content">
                  <h3 className="timeline-title">{node.title}</h3>
                  <p className="timeline-desc">{node.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Revenue Targets (Secondary & Clearly Labelled) */}
      <section className="section-spacing" aria-label="Strategic Revenue Targets">
        <div className="container">
          <div className="financial-roadmap-wrapper">
            <div className="section-header-compact text-center" style={{ marginInline: 'auto' }}>
              <span className="section-eyebrow font-mono">LONG-TERM GROWTH AMBITION</span>
              <h2 className="section-title">Strategic Revenue Targets</h2>
              <p className="section-subtitle" style={{ marginInline: 'auto' }}>
                The figures below represent forward-looking strategic revenue ambitions across our ten-year plan—not historical performance or guaranteed revenue.
              </p>
            </div>

            <div className="targets-metric-grid">
              <div className="target-metric-card">
                <span className="target-metric-period font-mono">YEAR 1 AMBITION</span>
                <div className="target-metric-figure font-mono">₹10–15 Cr</div>
                <p className="target-metric-label">Brand establishment &amp; core regional trade channels</p>
              </div>

              <div className="target-metric-card">
                <span className="target-metric-period font-mono">YEAR 2 AMBITION</span>
                <div className="target-metric-figure font-mono">₹25–40 Cr</div>
                <p className="target-metric-label">Regional expansion &amp; OEM supply partnerships</p>
              </div>

              <div className="target-metric-card">
                <span className="target-metric-period font-mono">YEAR 3 AMBITION</span>
                <div className="target-metric-figure font-mono">₹50–75 Cr</div>
                <p className="target-metric-label">Multi-state presence &amp; export corridor preparation</p>
              </div>

              <div className="target-metric-card">
                <span className="target-metric-period font-mono">YEAR 5 AMBITION</span>
                <div className="target-metric-figure font-mono">₹150–250 Cr</div>
                <p className="target-metric-label">National footprint &amp; active GCC partner channels</p>
              </div>

              <div className="target-metric-card target-metric-card--highlight">
                <span className="target-metric-period font-mono text-gold">YEAR 10 AMBITION</span>
                <div className="target-metric-figure font-mono text-gold">₹500+ Cr</div>
                <p className="target-metric-label">Integrated India &amp; international materials ecosystem</p>
              </div>
            </div>

            <div className="target-disclaimer-box font-mono">
              Note: All financial milestones above represent long-term strategic planning targets and aspirations rather than achieved historical results.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
