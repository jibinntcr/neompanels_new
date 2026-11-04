import Link from 'next/link';
import { getSiteContent } from '@/lib/storage';
import { buildPageMetadata, getBreadcrumbJsonLd, SITE_URL } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Sustainability — Responsible Wood-Panel Manufacturing',
  description:
    'In a wood-panel business, sustainability is shaped by practical choices across agro-forestry and timber sourcing, material efficiency, energy discipline, workplace safety and accurate product documentation.',
  path: '/sustainability',
  ogImage: '/assets/sustainability-materials-studio.jpg',
  ogImageAlt: 'NEOM Panels — Responsible Wood-Panel Sourcing and Material Efficiency',
  keywords: [
    'sustainable wood panels India',
    'responsible timber and veneer sourcing India',
    'agro-forestry plywood manufacturing',
    'eco-friendly commercial plywood sheets',
    'durable long service life interior panels',
    'resource-efficient wood panel factory India',
    'NEOM Panels sustainability'
  ]
});

export default function SustainabilityPage() {
  const siteData = getSiteContent();
  const currentPractices =
    siteData.sustainabilityCurrentPractices || siteData.sustainabilityPriorities || [];
  const futureAmbitions = siteData.sustainabilityFutureAmbitions || [];
  const sdgGoals = siteData.sdgAlignment || [];
  const sustainabilityJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      getBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Sustainability', path: '/sustainability' }
      ]),
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/sustainability#webpage`,
        name: 'Sustainability & Responsible Wood-Panel Manufacturing — NEOM Panels',
        url: `${SITE_URL}/sustainability`,
        description:
          'Practical operational sustainability across timber sourcing, material yield, energy discipline, workplace safety and product durability at NEOM Panels.'
      }
    ]
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sustainabilityJsonLd) }}
      />
      {/* PAGE HEADER */}
      <section
        className="page-header section--architectural-grid"
        aria-labelledby="main-heading"
      >
        <div className="container hero-split">
          <div className="hero-animate">
            <p className="eyebrow">SUSTAINABILITY</p>
            <h1 id="main-heading" tabIndex={-1} className="page-title">
              A practical approach to responsible growth.
            </h1>
            <p className="lead-text">
              In a wood-panel business, sustainability is shaped by practical choices: where raw
              materials come from, how efficiently panels are produced, how offcuts and process
              waste are managed, how energy and water are used, how safely people work, and how
              long finished products stay in service.
            </p>
            <div className="btn-group">
              <a href="#current-practices" className="btn btn--primary">
                Current Operational Practices
              </a>
              <Link href="/resources" className="btn btn--secondary">
                Request Technical Documents
              </Link>
            </div>
          </div>

          <figure className="architectural-photo-card hero-animate--delay" style={{ margin: 0 }}>
            <img
              src="/assets/illustration-sustainability.jpg"
              alt="Illustration of wood-panel samples, material offcuts, and timber stewardship."
              width="800"
              height="600"
            />
          </figure>
        </div>
      </section>

      {/* STUDIO VISUAL & OPERATIONAL CONTEXT */}
      <section className="section reveal-once" aria-labelledby="studio-context-heading">
        <div className="container split-editorial">
          <figure className="architectural-photo-card" style={{ margin: 0 }}>
            <img
              src="/assets/sustainability-materials-studio.jpg"
              alt="Raw wood veneers, timber fibres, and engineered wood-panel swatches in a materials studio."
              width="760"
              height="520"
              loading="lazy"
            />
            <figcaption className="architectural-photo-meta">
              <span>Material Selection</span>
            </figcaption>
          </figure>

          <div>
            <p className="eyebrow">OPERATIONAL DISCIPLINE</p>
            <h2 id="studio-context-heading" className="section-title">
              Why everyday material decisions matter.
            </h2>
            <p className="lead-text">
              For furniture manufacturers, fit-out contractors, and industrial packaging buyers,
              material stewardship begins with specifying the right panel grade the first time,
              cutting sheets with minimal waste, and matching substrate properties to the operating
              environment.
            </p>
            <p>
              We separate our current operational practices on the factory floor from the longer-term
              documentation and efficiency improvements we are working toward as the company grows.
            </p>
          </div>
        </div>
      </section>

      {/* CURRENT OPERATIONAL PRACTICES */}
      <section
        id="current-practices"
        className="section section--warm reveal-once"
        aria-labelledby="current-practices-heading"
      >
        <div className="container">
          <p className="eyebrow">CURRENT OPERATIONAL PRACTICES</p>
          <h2 id="current-practices-heading" className="section-title">
            What we do today in sourcing, production and documentation.
          </h2>
          <p className="lead-text">
            Five day-to-day practices across our manufacturing operations and commercial desk.
          </p>

          <ol className="ledger-list" role="list">
            {currentPractices.map((item) => (
              <li key={item.id} className="ledger-row">
                <span className="route-index">{item.number}</span>
                <div>
                  <h3 className="route-title">{item.title}</h3>
                  <span className="brand-spec-label">{item.focusArea}</span>
                </div>
                <p style={{ margin: 0 }}>{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FUTURE AMBITIONS & PLANNED IMPROVEMENTS */}
      <section
        id="future-ambitions"
        className="section section--sage-subtle reveal-once"
        aria-labelledby="future-ambitions-heading"
      >
        <div className="container">
          <p className="eyebrow">FUTURE AMBITIONS</p>
          <h2 id="future-ambitions-heading" className="section-title">
            Planned operational and documentation improvements.
          </h2>
          <p className="lead-text">
            As NEOM Panels expands its manufacturing and brand operations, we are working toward
            the following improvements rather than making broad environmental claims prematurely.
          </p>

          <div className="pillars-grid">
            {futureAmbitions.map((ambition) => (
              <article key={ambition.id} className="pillar-cell">
                <h3 className="subsection-title">{ambition.title}</h3>
                <p style={{ margin: 0 }}>{ambition.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GLOBAL CONTEXT — UN SUSTAINABLE DEVELOPMENT GOALS */}
      <section
        className="section section--no-border reveal-once"
        aria-labelledby="global-context-heading"
      >
        <div className="container">
          <p className="eyebrow">SUSTAINABLE DEVELOPMENT GOALS</p>
          <h2 id="global-context-heading" className="section-title">
            Operational activities linked to UN SDGs.
          </h2>
          <p className="lead-text">
            Our factory and commercial practices connect to three United Nations Sustainable
            Development Goals relevant to wood-panel manufacturing.
          </p>

          <div className="pillars-grid">
            {sdgGoals.map((goal) => (
              <article
                key={goal.goal}
                className={`pillar-cell ${goal.isPrimary ? 'pillar-cell--highlight' : ''}`}
              >
                <div style={{ marginBottom: 'var(--space-3)' }}>
                  <span className={goal.isPrimary ? 'sdg-primary-badge' : 'status-pill'}>
                    {goal.goal} · {goal.role}
                  </span>
                </div>
                <h3 className="subsection-title">{goal.title}</h3>
                <p>{goal.description}</p>
                {Array.isArray(goal.operationalActivities) &&
                goal.operationalActivities.length > 0 ? (
                  <div style={{ marginTop: 'var(--space-4)' }}>
                    <p
                      className="brand-spec-label"
                      style={{ marginBottom: '0.5rem', color: 'var(--color-forest)' }}
                    >
                      Linked operational activities
                    </p>
                    <ul className="checklist-items" style={{ marginBottom: 'var(--space-4)' }}>
                      {goal.operationalActivities.map((act) => (
                        <li key={act}>{act}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}
                <a
                  href={goal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="editorial-link"
                >
                  <span>Read {goal.goal} on UN.org</span>
                  <span className="link-arrow" aria-hidden="true">
                    →
                  </span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
