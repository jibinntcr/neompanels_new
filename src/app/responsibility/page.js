import Link from 'next/link';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Responsibility',
  description:
    'How NEOM Panels intends to build responsibility into its next steps across Material Choices, Resource Use, People & Relationships and Clear Information.',
  path: '/responsibility'
});

const RESPONSIBILITY_PRIORITIES = [
  {
    id: 'material-choices',
    title: 'Material Choices',
    principle:
      'Pay close attention to the wood veneers, core inputs and engineered boards we produce or source, matching materials honestly to their intended service conditions.',
    intendedDirection:
      'As our brands develop, we aim to strengthen supplier documentation, origin clarity and practical guidance so customers avoid misapplying panels where they will fail prematurely.'
  },
  {
    id: 'resource-use',
    title: 'Resource Use',
    principle:
      'Treat raw timber veneers, process inputs, energy and protective packaging thoughtfully across manufacturing, sizing and dispatch.',
    intendedDirection:
      'We intend to build more structured tracking around sheet yield, offcut handling and factory resource efficiency as production processes mature.'
  },
  {
    id: 'people-relationships',
    title: 'People & Relationships',
    principle:
      'Treat factory teams, commercial colleagues, suppliers and customers with respect, clear expectations and everyday accountability.',
    intendedDirection:
      'We aim to keep strengthening workplace safety routines, practical training and responsive support across customer and partner relationships.'
  },
  {
    id: 'clear-information',
    title: 'Clear Information',
    principle:
      'Communicate plainly about what a panel grade is suited for, whether a product is manufactured in-house or sourced, and what documentation is available.',
    intendedDirection:
      'As formal product catalogues and test reports are completed for specific lines, we intend to publish clear, product-scoped specifications without exaggerated environmental or technical claims.'
  }
];

const SDG_TOPIC_CONNECTIONS = [
  {
    goal: 'SDG 12 — Primary Topic Reference',
    title: 'Responsible Consumption and Production',
    summary:
      'Closest background reference for our focus on thoughtful resource use, reducing avoidable material waste and helping buyers choose durable, fit-for-purpose panels.',
    href: 'https://sdgs.un.org/goals/goal12',
    isPrimary: true
  },
  {
    goal: 'SDG 9 — Supporting Topic Reference',
    title: 'Industry, Innovation and Infrastructure',
    summary:
      'Relates to our intention to keep improving manufacturing processes, quality discipline and dependable industrial supply in India.',
    href: 'https://sdgs.un.org/goals/goal9',
    isPrimary: false
  },
  {
    goal: 'SDG 15 — Supporting Topic Reference',
    title: 'Life on Land',
    summary:
      'Relates to long-term considerations around responsible timber and wood-fibre sourcing as supplier documentation practices develop.',
    href: 'https://sdgs.un.org/goals/goal15',
    isPrimary: false
  }
];

export default function ResponsibilityPage() {
  return (
    <main id="main-content">
      {/* Page Header — Exact Owner-Approved Principles Framing */}
      <section className="page-header-dark" aria-labelledby="main-heading">
        <div className="container page-header-inner">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-sep" aria-hidden="true">/</span>
            <span className="breadcrumb-current">Responsibility</span>
          </nav>

          <span className="section-eyebrow text-gold">Responsibility</span>
          <h1 id="main-heading" className="page-hero-title text-warm">
            Building responsibility into our next steps.
          </h1>
          <p className="page-hero-lead text-warm-muted">
            Our starting point is straightforward: pay attention to materials, use resources
            thoughtfully and treat people with respect. We want these principles to guide NEOM’s
            decisions as we develop our business and our brands.
          </p>
        </div>
      </section>

      {/* Four Priority Areas */}
      <section className="section-spacing bg-warm-ivory border-bottom-divider" aria-labelledby="pillars-heading">
        <div className="container">
          <div className="corp-section-header">
            <span className="section-eyebrow">Four Priority Areas</span>
            <h2 id="pillars-heading" className="corp-section-title">
              Principles and intended direction.
            </h2>
            <p className="corp-section-subtitle">
              Responsibility at NEOM Panels is a direction we are actively working to build—stated
              here as practical principles and intended next steps rather than claims of an already
              completed sustainability programme.
            </p>
          </div>

          <div className="resp-pillar-grid">
            {RESPONSIBILITY_PRIORITIES.map((sec) => (
              <article key={sec.id} id={sec.id} className="resp-pillar-card">
                <div>
                  <h3 className="brand-card__title">{sec.title}</h3>
                </div>

                <div className="resp-status-split">
                  <div className="resp-status-box">
                    <span className="resp-status-label">Guiding Principle</span>
                    <p className="resp-status-text">{sec.principle}</p>
                  </div>
                  <div className="resp-status-box resp-status-box--planned">
                    <span className="resp-status-label">Intended Direction</span>
                    <p className="resp-status-text">{sec.intendedDirection}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Background SDG Topic Context */}
      <section className="section-spacing bg-white border-bottom-divider" aria-labelledby="sdg-heading">
        <div className="container">
          <div className="corp-section-header">
            <span className="section-eyebrow">Background Context</span>
            <h2 id="sdg-heading" className="corp-section-title">
              Relevant UN Sustainable Development Goal topics.
            </h2>
            <p className="corp-section-subtitle">
              As background reference for the direction we want to develop, three UN Sustainable
              Development Goal topics relate most closely to material use, manufacturing improvement
              and wood-resource considerations:
            </p>
          </div>

          <div className="sdg-framework-grid">
            {SDG_TOPIC_CONNECTIONS.map((sdg) => (
              <article
                key={sdg.title}
                className={`sdg-card ${sdg.isPrimary ? 'sdg-card--primary' : ''}`}
              >
                <span className="sdg-card__tag">{sdg.goal}</span>
                <h3 className="sdg-card__title">{sdg.title}</h3>
                <p className="sdg-card__desc">{sdg.summary}</p>
                <a
                  href={sdg.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="corp-text-link"
                >
                  <span>Official UN Goal background</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>

          <p className="sdg-disclaimer">
            <strong>Scope note:</strong> These references describe proposed topic connections that
            inform NEOM Panels’ future planning. They do not represent verified corporate SDG
            alignment, environmental certification or endorsement by the United Nations. Any product
            test or compliance document applies strictly to the specific product and scope named in
            that document.
          </p>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-spacing bg-warm-ivory" aria-labelledby="resp-cta-heading">
        <div className="container">
          <div className="closing-cta-panel">
            <div className="closing-cta-panel__content">
              <h2 id="resp-cta-heading" className="closing-cta-panel__title">
                Need clear information for a material decision?
              </h2>
              <p className="closing-cta-panel__desc">
                Speak with our team about your intended application, exposure conditions and
                available product specifications across Starwoods and NEOM Packing Plywood.
              </p>
              <div className="closing-cta-panel__actions">
                <Link href="/enquiry?type=Product+information" className="btn btn-gold btn-lg">
                  <span>Ask Our Team</span>
                </Link>
                <Link href="/about#purpose-vision-values" className="btn btn-outline-light btn-lg">
                  <span>Purpose, Vision &amp; Values</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
