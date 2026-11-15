import Link from 'next/link';

export const metadata = {
  title: 'Partners & Stakeholder Ecosystem | NEOM Panels',
  description:
    'Collaborate with NEOM Panels. Tailored partnership pathways for architects, interior designers, dealers, distributors, furniture manufacturers, contractors, builders, and institutional buyers.',
  alternates: {
    canonical: '/partners'
  }
};

const STAKEHOLDERS = [
  {
    num: '01',
    title: 'Architects',
    desc: 'Collaborate on material specifications, evaluate core substrates, and align natural veneers or fluted cladding with architectural concepts.',
    cta: 'Architect / Designer Enquiry',
    href: '/enquiry?type=Sample+Request&role=Architects'
  },
  {
    num: '02',
    title: 'Interior Designers',
    desc: 'Explore tactile decorative surfaces—natural veneers, laminates, acrylics, and charcoal panels—backed by responsive swatch support.',
    cta: 'Architect / Designer Enquiry',
    href: '/enquiry?type=Sample+Request&role=Interior+Designers'
  },
  {
    num: '03',
    title: 'Dealers',
    desc: 'Grow retail trade business with unified brand presentation, clear portfolio cataloguing, and dependable regional stock replenishment.',
    cta: 'Discuss a Partnership',
    href: '/enquiry?type=Partnership&role=Dealers'
  },
  {
    num: '04',
    title: 'Distributors',
    desc: 'Develop regional wholesale coverage through coordinated production scheduling, structured commercial terms, and channel support.',
    cta: 'Discuss a Partnership',
    href: '/enquiry?type=Partnership&role=Distributors'
  },
  {
    num: '05',
    title: 'Furniture Manufacturers',
    desc: 'Procure calibrated plywood, MDF, HDHMR, and Pre-Laminated MDF suited for serial CNC machining, edge-banding, and modular assembly.',
    cta: 'Discuss Project Supply',
    href: '/enquiry?type=Project+Supply&role=Furniture+Manufacturers'
  },
  {
    num: '06',
    title: 'Contractors',
    desc: 'Keep commercial and residential interior fit-out schedules on track with coordinated multi-batch substrate and surface fulfilment.',
    cta: 'Discuss Project Supply',
    href: '/enquiry?type=Project+Supply&role=Contractors'
  },
  {
    num: '07',
    title: 'Builders',
    desc: 'Engage our specification desk for multi-unit residential towers, villa developments, and commercial building material packages.',
    cta: 'Discuss Project Supply',
    href: '/enquiry?type=Project+Supply&role=Builders'
  },
  {
    num: '08',
    title: 'Institutional Buyers',
    desc: 'Coordinate structured procurement for hospitality groups, corporate campuses, healthcare, education, and industrial crating needs.',
    cta: 'Discuss Project Supply',
    href: '/enquiry?type=Project+Supply&role=Institutional+Buyers'
  }
];

const PLANNED_TOOLS = [
  {
    title: 'Dealer Portal',
    desc: 'Planned partner workspace for authorized dealers to submit repeat allocation requests, access catalogues, and coordinate dispatches.'
  },
  {
    title: 'Architect Portal',
    desc: 'Planned specification hub enabling design studios to organize surface palettes, request swatch kits, and review technical documentation.'
  },
  {
    title: 'Sample Request System',
    desc: 'Streamlined swatch coordination workflow connecting physical substrate and surface samples with active design projects.'
  },
  {
    title: 'Dealer Locator',
    desc: 'Planned regional directory helping buyers and contractors connect with verified NEOM Panels channel partners as coverage expands.'
  },
  {
    title: 'Lead Management & CRM',
    desc: 'Structured enquiry routing ensuring trade, specifier, and project requirements reach the appropriate commercial specialist promptly.'
  },
  {
    title: 'Project Calculator',
    desc: 'Planned estimation utility assisting contractors and fabricators in translating room dimensions into preliminary sheet counts.'
  }
];

export default function PartnersPage() {
  return (
    <main id="main-content" className="page-view">
      {/* Architectural Page Hero */}
      <section className="arch-page-hero arch-page-hero--forest" aria-labelledby="main-heading">
        <div className="container">
          <nav className="breadcrumb-nav breadcrumb-nav--light" aria-label="Breadcrumb">
            <ol className="breadcrumb-list font-mono" role="list">
              <li><Link href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Partners &amp; Stakeholders</li>
            </ol>
          </nav>

          <div className="arch-page-hero__grid">
            <div className="arch-page-hero__copy">
              <span className="section-eyebrow text-gold font-mono">CHANNEL &amp; PROJECT COLLABORATION</span>
              <h1 id="main-heading" tabIndex={-1} className="page-title text-warm">
                Built Around the People Who Build Spaces.
              </h1>
              <p className="page-lead-text text-warm-muted">
                NEOM Panels connects eight core stakeholder groups across the architectural, trade distribution, fabrication, and institutional construction value chain.
              </p>
              <div className="page-header-cta-row">
                <Link href="/enquiry?type=Partnership" className="btn btn-gold">
                  <span>Discuss a Partnership</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="arch-page-hero__stat-card">
              <span className="arch-stat-label font-mono text-gold">PARTNER COMMITMENT</span>
              <p className="arch-stat-quote">
                “Clear product architecture, responsive communication, and commercial discipline across every trade and project engagement.”
              </p>
              <div className="arch-stat-meta font-mono">
                <span>8 Stakeholder Pathways</span>
                <span aria-hidden="true">·</span>
                <span>Direct Enquiry Routing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eight Stakeholder Pathways */}
      <section className="section-spacing" aria-label="Eight Stakeholder Groups">
        <div className="container">
          <div className="section-header-compact">
            <span className="section-eyebrow font-mono">STAKEHOLDER ARCHITECTURE</span>
            <h2 className="section-title">Eight Collaborative Pathways</h2>
            <p className="section-subtitle">
              Select your role below to start a tailored conversation around material sourcing, project supply, or regional distribution.
            </p>
          </div>

          <div className="stakeholders-grid">
            {STAKEHOLDERS.map((item) => (
              <article key={item.num} className="stakeholder-card">
                <div className="stakeholder-header">
                  <span className="stakeholder-num font-mono">{item.num}</span>
                  <h3 className="stakeholder-title">{item.title}</h3>
                </div>
                <p className="stakeholder-desc">{item.desc}</p>
                <div className="stakeholder-action">
                  <Link href={item.href} className="btn btn-secondary btn-sm">
                    <span>{item.cta}</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Planned Digital Platform Roadmap */}
      <section className="section-spacing bg-warm-ivory border-top-divider" aria-label="Digital Platform Roadmap">
        <div className="container">
          <div className="section-header-compact">
            <span className="section-eyebrow font-mono">DIGITAL INFRASTRUCTURE ROADMAP</span>
            <h2 className="section-title">Planned Digital Capabilities</h2>
            <p className="section-subtitle">
              Alongside today’s online portfolio and specification enquiry desk, NEOM Panels is progressively developing dedicated digital tools to support dealers, architects, and project teams.
            </p>
          </div>

          <div className="digital-roadmap-grid">
            {PLANNED_TOOLS.map((tool) => (
              <div key={tool.title} className="roadmap-tool-card">
                <div className="tool-card-status font-mono">PLANNED CAPABILITY</div>
                <h3 className="tool-card-title">{tool.title}</h3>
                <p className="tool-card-desc">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
