import Link from 'next/link';
import { SITE_URL, buildPageMetadata } from '@/lib/seo';
import { LEADERSHIP_PROFILES } from '@/lib/leadership-data';

export const metadata = buildPageMetadata({
  title: 'Executive Leadership & Team',
  description:
    'Meet the executive leadership team guiding NEOM Panels: Managing Director Jibin N, Chief Executive Officer Muneer K H, Chief Financial Officer Muhamad Raneef T A, and Chief Technology Officer Muhammed Jabir.',
  path: '/team',
  ogImage: '/assets/team/jibin-n-neom-panels-managing-director.webp',
  ogImageAlt: 'Jibin N, Managing Director of NEOM Panels',
  keywords: [
    'NEOM Panels team',
    'NEOM Panels leadership',
    'Jibin N Managing Director NEOM Panels',
    'Muneer K H CEO NEOM Panels',
    'Muhamad Raneef T A CFO NEOM Panels',
    'Muhammed Jabir CTO NEOM Panels'
  ]
});

export default function TeamPage() {
  const teamJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${SITE_URL}/team#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Leadership Team', item: `${SITE_URL}/team` }
        ]
      },
      {
        '@type': 'AboutPage',
        '@id': `${SITE_URL}/team#webpage`,
        url: `${SITE_URL}/team`,
        name: 'Executive Leadership & Team | NEOM Panels',
        description:
          'Executive leadership team guiding NEOM Panels across strategic direction, wood-panel operations, financial stewardship, and digital infrastructure.',
        isPartOf: { '@id': `${SITE_URL}/#website` },
        breadcrumb: { '@id': `${SITE_URL}/team#breadcrumb` },
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: LEADERSHIP_PROFILES.map((leader, idx) => ({
            '@type': 'ListItem',
            position: idx + 1,
            item: {
              '@type': 'Person',
              '@id': `${SITE_URL}${leader.profileHref}#person`,
              name: leader.name,
              jobTitle: leader.role,
              url: `${SITE_URL}${leader.profileHref}`,
              image: `${SITE_URL}${leader.photo}`,
              worksFor: { '@id': `${SITE_URL}/#organization` },
              ...(leader.linkedin ? { sameAs: [leader.linkedin] } : {}),
              ...(leader.phone ? { telephone: leader.phone } : {})
            }
          }))
        }
      }
    ]
  };

  return (
    <main id="main-content" className="page-view">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamJsonLd) }}
      />

      {/* Architectural Dark-Forest Page Hero */}
      <section className="arch-page-hero arch-page-hero--forest" aria-labelledby="main-heading">
        <div className="container">
          <nav className="breadcrumb-nav breadcrumb-nav--light" aria-label="Breadcrumb">
            <ol className="breadcrumb-list font-mono" role="list">
              <li><Link href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/about">About NEOM</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Leadership Team</li>
            </ol>
          </nav>

          <div className="arch-page-hero__grid">
            <div className="arch-page-hero__copy">
              <span className="section-eyebrow text-gold font-mono">EXECUTIVE BOARD &amp; STEWARDSHIP</span>
              <h1 id="main-heading" tabIndex={-1} className="page-title text-warm">
                Leadership Guiding the NEOM Panels Ecosystem.
              </h1>
              <p className="page-lead-text text-warm-muted">
                NEOM Panels is led by an executive team combining entrepreneurial vision, wood-panel manufacturing and trading insight, disciplined financial governance, and digital systems capability.
              </p>
            </div>

            <div className="arch-page-hero__stat-card">
              <span className="arch-stat-label font-mono text-gold">UNIFIED MANDATE</span>
              <p className="arch-stat-quote">
                “Building one of India’s most trusted engineered wood and interior materials brands—anchored in quality, design relevance, and international readiness.”
              </p>
              <div className="arch-stat-meta font-mono">
                <span>4 Executive Directors</span>
                <span aria-hidden="true">·</span>
                <span>India &amp; GCC Horizon</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Profiles 2x2 Architectural Gallery */}
      <section className="section-spacing bg-warm-ivory" aria-label="Executive Leadership Profiles">
        <div className="container">
          <div className="section-header-split">
            <div>
              <span className="section-eyebrow font-mono">EXECUTIVE DIRECTORY</span>
              <h2 className="section-title">Board &amp; Executive Management</h2>
            </div>
            <p className="section-subtitle">
              Select any executive profile below to view full professional background, core responsibilities, and direct communication channels.
            </p>
          </div>

          <div className="team-exec-grid">
            {LEADERSHIP_PROFILES.map((leader) => (
              <article key={leader.id} className="team-exec-card">
                <div className="team-exec-card__media">
                  <Link
                    href={leader.profileHref}
                    className="team-exec-card__portrait-link"
                    aria-label={`View ${leader.name} full executive profile`}
                  >
                    <picture>
                      <source srcSet={leader.photo} type="image/webp" />
                      <img
                        src={leader.photoFallback || leader.photo}
                        alt={leader.photoAlt}
                        width="640"
                        height="640"
                        loading="eager"
                        decoding="async"
                        className="team-exec-card__img"
                      />
                    </picture>
                  </Link>
                  <span className="team-exec-card__index font-mono">{leader.order}</span>
                </div>

                <div className="team-exec-card__body">
                  <div className="team-exec-card__role-row">
                    <span className="team-exec-card__role font-mono">{leader.role}</span>
                  </div>

                  <h3 className="team-exec-card__name">
                    <Link href={leader.profileHref} className="team-exec-card__name-link">
                      {leader.name}
                    </Link>
                  </h3>

                  <p className="team-exec-card__focus">{leader.focus}</p>
                  <p className="team-exec-card__bio">{leader.overviewBio}</p>

                  <ul className="team-exec-card__pillars" role="list">
                    {leader.responsibilities.map((resp) => (
                      <li key={resp.title} className="team-exec-card__pillar-chip">
                        {resp.title}
                      </li>
                    ))}
                  </ul>

                  <div className="team-exec-card__footer">
                    <Link href={leader.profileHref} className="btn btn-secondary btn-sm">
                      <span>Executive Profile</span>
                      <span aria-hidden="true">→</span>
                    </Link>

                    <div className="team-exec-card__contacts">
                      {leader.telHref && (
                        <a
                          href={leader.telHref}
                          className="team-contact-icon-btn"
                          aria-label={`Call ${leader.name} at ${leader.phone}`}
                          title={`Call ${leader.phone}`}
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                          </svg>
                        </a>
                      )}
                      {leader.linkedin && (
                        <a
                          href={leader.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="team-contact-icon-btn"
                          aria-label={`${leader.name} on LinkedIn`}
                          title="LinkedIn Profile"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Four Pillars of Leadership Stewardship */}
      <section className="section-spacing" aria-label="Leadership Principles">
        <div className="container">
          <div className="section-header-compact">
            <span className="section-eyebrow font-mono">HOW WE OPERATE</span>
            <h2 className="section-title">Complementary Capabilities Across Every Stage</h2>
            <p className="section-subtitle">
              Our leadership structure is deliberately balanced across strategy, manufacturing partnerships, financial discipline, and digital operations.
            </p>
          </div>

          <div className="stewardship-grid">
            <div className="stewardship-card">
              <span className="stewardship-num font-mono">01 / STRATEGY &amp; BRAND</span>
              <h3 className="stewardship-title">Long-Term Brand Architecture</h3>
              <p className="stewardship-desc">
                Building NEOM Panels with clear market positioning, design-first material presentation, and structured expansion across India and global corridors.
              </p>
            </div>

            <div className="stewardship-card">
              <span className="stewardship-num font-mono">02 / OPERATIONS &amp; QUALITY</span>
              <h3 className="stewardship-title">Disciplined Supply Execution</h3>
              <p className="stewardship-desc">
                Working hands-on with manufacturing alliances and grading checkpoints so substrates and decorative surfaces meet real-world joinery demands.
              </p>
            </div>

            <div className="stewardship-card">
              <span className="stewardship-num font-mono">03 / FINANCIAL GOVERNANCE</span>
              <h3 className="stewardship-title">Transparent Commercial Terms</h3>
              <p className="stewardship-desc">
                Maintaining responsible capital allocation, accountable procurement, and dependable commercial commitments with dealers and institutional buyers.
              </p>
            </div>

            <div className="stewardship-card">
              <span className="stewardship-num font-mono">04 / DIGITAL WORKFLOWS</span>
              <h3 className="stewardship-title">Connected Customer Experience</h3>
              <p className="stewardship-desc">
                Connecting modern digital enquiry systems with practical trading and logistics coordination for responsive B2B communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Executive Engagement Banner */}
      <section className="section-spacing bg-forest text-warm" aria-label="Connect with Leadership">
        <div className="container">
          <div className="consultation-banner">
            <div className="consultation-copy">
              <span className="section-eyebrow text-gold font-mono">PARTNERSHIPS &amp; COMMERCIAL DIALOGUE</span>
              <h2 className="section-title text-warm">Connect directly with the NEOM Panels team.</h2>
              <p className="consultation-desc text-warm-muted">
                Whether exploring regional dealership opportunities, OEM supply schedules, or architectural project specifications, our team welcomes direct conversation.
              </p>
            </div>
            <div className="consultation-action" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              <Link href="/enquiry?type=Partnership" className="btn btn-gold">
                <span>Discuss a Partnership</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/products" className="btn btn-outline-light">
                <span>Explore Portfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
