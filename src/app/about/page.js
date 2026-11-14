import Link from 'next/link';
import { buildPageMetadata, getBreadcrumbJsonLd, SITE_URL } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'About NEOM Panels — Indian Wood-Panel Manufacturing Company',
  description:
    'NEOM Panels is an Indian wood-panel manufacturing business and the company behind Starwoods and NEOM Packing Plywood. Learn about our factory, purpose, vision, mission and operating principles.',
  path: '/about',
  ogImage: '/assets/hero-neom-flagship.jpg',
  ogImageAlt: 'About NEOM Panels — Indian Wood-Panel Manufacturing Company',
  ogImages: [
    {
      url: '/assets/hero-neom-flagship.jpg',
      width: 1400,
      height: 933,
      alt: 'About NEOM Panels — Indian Wood-Panel Manufacturing Company'
    },
    {
      url: '/assets/starwoods-brand-showcase.jpg',
      width: 1400,
      height: 933,
      alt: 'Starwoods — Furniture & Interior Applications by NEOM Panels'
    },
    {
      url: '/assets/packing-plywood-showcase.jpg',
      width: 1400,
      height: 933,
      alt: 'NEOM Packing Plywood — Moisture-Resistant Industrial Packaging Plywood'
    },
    {
      url: '/assets/team/jibin-n.png',
      width: 800,
      height: 800,
      alt: 'Jibin N — Managing Director, NEOM Panels'
    }
  ],
  keywords: [
    'about NEOM Panels',
    'Indian wood panel manufacturing company',
    'plywood manufacturer corporate profile India',
    'Starwoods parent company NEOM Panels',
    'NEOM Packing Plywood manufacturer',
    'direct factory wood panel company India'
  ]
});

export default function AboutPage() {
  const aboutJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      getBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'About NEOM', path: '/about' }
      ]),
      {
        '@type': 'AboutPage',
        '@id': `${SITE_URL}/about#webpage`,
        name: 'About NEOM Panels — Indian Wood-Panel Manufacturing Business',
        url: `${SITE_URL}/about`,
        description:
          'NEOM Panels is an Indian wood-panel manufacturing business and the company behind Starwoods and NEOM Packing Plywood.'
      }
    ]
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutJsonLd) }}
      />
      <section className="page-header section--architectural-grid">
        <div className="container hero-split">
          <div className="hero-animate">
            <p className="eyebrow">ABOUT NEOM</p>
            <h1 id="main-heading" tabIndex={-1} className="page-title">
              A manufacturing business with a longer view.
            </h1>
            <p className="lead-text">
              NEOM Panels is an Indian wood-panel manufacturing business and the company behind
              Starwoods and NEOM Packing Plywood. With our own factory, we bring together panel
              solutions for furniture, interior projects and industrial packaging, supported by a
              focus on material quality and lasting business relationships.
            </p>
          </div>

          <figure className="architectural-photo-card hero-animate--delay" style={{ margin: 0 }}>
            <img
              src="/assets/hero-neom-flagship.jpg"
              alt="Calibrated multi-ply wood-panel substrates and warm oak architectural joinery in a contemporary studio."
              width="1400"
              height="933"
            />
            <figcaption className="architectural-photo-meta">
              <span>Furniture and Interior Applications</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section reveal-once">
        <div className="container editorial-statement">
          <div>
            <p className="eyebrow">OUR ROLE</p>
            <h2 className="section-title">Connecting manufacturing with material choices.</h2>
          </div>
          <div className="editorial-statement-body">
            <p className="lead-text">
              Manufacturers turn panels into furniture. Contractors and designers use materials to
              shape interiors. Packaging fabricators and industrial buyers rely on plywood for
              packing cases and crates. Institutions make purchasing decisions for the spaces
              people use every day. NEOM’s role is to develop the manufacturing business and
              information behind those material choices.
            </p>
            <p>
              By operating our own manufacturing facility in India and organising our commercial
              range under defined product brands—Starwoods and NEOM Packing Plywood—we focus on
              building consistent operating discipline, clear technical communication and
              dependable B2B relationships.
            </p>
            <div className="brand-architecture-tree" style={{ marginTop: 'var(--space-5)' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  gap: '0.75rem'
                }}
              >
                <span className="brand-spec-label">Official Product Brands of NEOM Panels</span>
                <Link href="/brands" className="editorial-link">
                  <span>Explore Brands</span>
                  <span className="link-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
              <div className="brand-architecture-children">
                <Link href="/brands#starwoods" className="brand-architecture-child-node">
                  <span className="brand-spec-label">Furniture &amp; Interiors</span>
                  <img
                    src="/assets/starwood-logo.png"
                    alt="Starwoods — The Plywood Specialist"
                    className="starwood-logo-img--xs"
                    width="619"
                    height="177"
                  />
                  <span
                    style={{
                      fontWeight: 600,
                      color: 'var(--color-forest)',
                      fontSize: '0.9rem'
                    }}
                  >
                    Starwoods
                  </span>
                </Link>

                <Link
                  href="/brands/neom-packing-plywood"
                  className="brand-architecture-child-node"
                >
                  <span className="brand-spec-label">Industrial Packaging</span>
                  <img
                    src="/assets/neom-packing-plywood-logo-compact.svg"
                    alt="NEOM Packing Plywood"
                    className="packing-logo-img--xs"
                    width="540"
                    height="112"
                  />
                  <span
                    style={{
                      fontWeight: 600,
                      color: 'var(--color-forest)',
                      fontSize: '0.9rem'
                    }}
                  >
                    NEOM Packing Plywood
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--warm reveal-once">
        <div className="container">
          <p className="eyebrow font-mono">STRATEGIC FOUNDATION · 2026–2036</p>
          <h2 className="section-title">Vision, mission &amp; brand promise.</h2>

          <div className="pillars-grid">
            <div className="pillar-cell">
              <p className="eyebrow font-mono">VISION</p>
              <h3 className="subsection-title">Where we are headed</h3>
              <p>
                To become one of the most trusted engineered wood and interior materials brands from
                India, recognized for quality, design relevance, sustainability, digital excellence,
                and international market reach.
              </p>
            </div>

            <div className="pillar-cell pillar-cell--highlight">
              <p className="eyebrow font-mono">BRAND PROMISE</p>
              <h3 className="subsection-title">Engineered Excellence, Designed for Spaces.</h3>
              <p>
                Our commitment to architects, builders, and manufacturing partners: reliable,
                precision-calibrated panel solutions engineered to endure and elevate every interior.
              </p>
            </div>

            <div className="pillar-cell">
              <p className="eyebrow font-mono">MISSION</p>
              <h3 className="subsection-title">How we deliver</h3>
              <p>
                To deliver reliable, design-ready, and scalable panel solutions through strong
                manufacturing partnerships, disciplined quality systems, dealer empowerment,
                architect engagement, project supply capability, and digital-first customer experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Stage Scalable Business Model */}
      <section className="section reveal-once">
        <div className="container">
          <p className="eyebrow font-mono">STRATEGIC GROWTH BLUEPRINT</p>
          <h2 className="section-title">A disciplined 4-stage business model.</h2>
          <p className="lead-text">
            From agile trading and contract manufacturing to long-term manufacturing partnerships
            and an integrated industrial ecosystem.
          </p>

          <div className="stages-flow-grid" style={{ marginTop: 'var(--space-6)' }}>
            <div className="business-stage-card">
              <span className="stage-pill font-mono">Stage 01</span>
              <h4 className="stage-title">Brand Building + Trading</h4>
              <p className="stage-desc">
                Build brand equity, expand curated product range, and establish strong market presence
                through disciplined trading and distribution channels.
              </p>
              <span className="stage-step-num font-mono">01</span>
            </div>

            <div className="business-stage-card">
              <span className="stage-pill font-mono">Stage 02</span>
              <h4 className="stage-title">Contract Manufacturing</h4>
              <p className="stage-desc">
                Leverage verified partner facilities to ensure thickness calibration, scalability,
                and cost efficiency while actively validating customer demand.
              </p>
              <span className="stage-step-num font-mono">02</span>
            </div>

            <div className="business-stage-card">
              <span className="stage-pill font-mono">Stage 03</span>
              <h4 className="stage-title">Manufacturing Partnerships</h4>
              <p className="stage-desc">
                Form strategic alliances with advanced manufacturers to secure dedicated capacity,
                technical innovation, and long-term supply stability.
              </p>
              <span className="stage-step-num font-mono">03</span>
            </div>

            <div className="business-stage-card">
              <span className="stage-pill font-mono">Stage 04</span>
              <h4 className="stage-title">Integrated Manufacturing Ecosystem</h4>
              <p className="stage-desc">
                Establish owned automated manufacturing infrastructure to achieve complete operational
                control, product diversification, and sustainable competitive advantage.
              </p>
              <span className="stage-step-num font-mono">04</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section reveal-once">
        <div className="container">
          <p className="eyebrow">OPERATING PRINCIPLES</p>
          <h2 className="section-title">Values that guide our decisions.</h2>
          <p className="secondary-text">
            How we approach materials, specifications, resources and commercial commitments.
          </p>

          <ol className="ledger-list" role="list">
            <li className="ledger-row">
              <span className="route-index">01</span>
              <h3 className="route-title">Care for the material</h3>
              <p style={{ margin: 0 }}>
                Understand the product, its application and opportunities for improvement.
              </p>
            </li>
            <li className="ledger-row">
              <span className="route-index">02</span>
              <h3 className="route-title">Clarity in business</h3>
              <p style={{ margin: 0 }}>Communicate requirements and commitments clearly.</p>
            </li>
            <li className="ledger-row">
              <span className="route-index">03</span>
              <h3 className="route-title">Respect for resources</h3>
              <p style={{ margin: 0 }}>
                Consider sourcing, material yield and resource use in business decisions.
              </p>
            </li>
            <li className="ledger-row">
              <span className="route-index">04</span>
              <h3 className="route-title">Accountability in action</h3>
              <p style={{ margin: 0 }}>
                Take responsibility and build systems that support follow-through.
              </p>
            </li>
            <li className="ledger-row">
              <span className="route-index">05</span>
              <h3 className="route-title">Long-term relationships</h3>
              <p style={{ margin: 0 }}>
                Develop customer, employee and partner relationships with a view to the future.
              </p>
            </li>
          </ol>
        </div>
      </section>

      <section className="section section--sage-subtle section--no-border reveal-once">
        <div className="container split-editorial">
          <div>
            <p className="eyebrow">EXPLORE FURTHER</p>
            <h2 className="section-title">See how the business is organised.</h2>
            <p className="lead-text">
              Review our brands, manufacturing operations, governance structure or begin a
              conversation about your next requirement.
            </p>
          </div>
          <div className="btn-group">
            <Link href="/team" className="btn btn--primary">
              Meet Our Leadership
            </Link>
            <Link href="/brands" className="btn btn--secondary">
              Explore Our Brands
            </Link>
            <Link href="/governance" className="btn btn--secondary">
              Governance &amp; Corporate Information
            </Link>
            <Link href="/enquiry" className="editorial-link">
              <span>Submit a Business Enquiry</span>
              <span className="link-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
