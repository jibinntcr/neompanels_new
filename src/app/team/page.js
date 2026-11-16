import Link from 'next/link';
import { SITE_URL, buildPageMetadata } from '@/lib/seo';
import { LEADERSHIP_PROFILES } from '@/lib/leadership-data';

export const metadata = buildPageMetadata({
  title: 'Leadership',
  description:
    'Meet the leadership team at NEOM Panels: Managing Director Jibin N, Chief Executive Officer Muneer K H, Chief Financial Officer Muhamad Raneef T A and Chief Technology Officer Muhammed Jabir.',
  path: '/team',
  ogImage: '/assets/team/jibin-n-neom-panels-managing-director.webp',
  ogImageAlt: 'Jibin N, Managing Director of NEOM Panels',
  keywords: [
    'NEOM Panels leadership',
    'NEOM Panels team',
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
          { '@type': 'ListItem', position: 2, name: 'Company', item: `${SITE_URL}/about` },
          { '@type': 'ListItem', position: 3, name: 'Leadership', item: `${SITE_URL}/team` }
        ]
      },
      {
        '@type': 'AboutPage',
        '@id': `${SITE_URL}/team#webpage`,
        url: `${SITE_URL}/team`,
        name: 'Leadership | NEOM Panels',
        description:
          'Leadership team guiding NEOM Panels across corporate strategy, wood-panel operations, finance and digital systems.',
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

      {/* Page Header */}
      <section className="page-header-dark" aria-labelledby="main-heading">
        <div className="container page-header-inner">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-sep" aria-hidden="true">/</span>
            <Link href="/about" className="breadcrumb-link">Company</Link>
            <span className="breadcrumb-sep" aria-hidden="true">/</span>
            <span className="breadcrumb-current">Leadership</span>
          </nav>

          <span className="section-eyebrow text-gold">Company Leadership</span>
          <h1 id="main-heading" className="page-hero-title text-warm">
            Leadership guiding NEOM Panels and its brands.
          </h1>
          <p className="page-hero-lead text-warm-muted">
            NEOM Panels is led by a leadership team combining entrepreneurial direction, practical
            wood-panel manufacturing and trade experience, financial discipline and digital
            operations.
          </p>
        </div>
      </section>

      {/* Leadership Profiles 2x2 Gallery */}
      <section className="section-spacing bg-warm-ivory border-bottom-divider" aria-labelledby="directory-heading">
        <div className="container">
          <div className="section-header-split">
            <div>
              <span className="section-eyebrow">Leadership Directory</span>
              <h2 id="directory-heading" className="corp-section-title" style={{ marginBottom: 0 }}>
                Meet our leadership team.
              </h2>
            </div>
            <p className="section-subtitle" style={{ maxWidth: '48ch' }}>
              Select any profile below to read full professional background, core responsibilities
              at NEOM Panels and verified contact details.
            </p>
          </div>

          <div className="team-exec-grid">
            {LEADERSHIP_PROFILES.map((leader) => (
              <article key={leader.id} className="team-exec-card">
                <div className="team-exec-card__media">
                  <Link
                    href={leader.profileHref}
                    className="team-exec-card__portrait-link"
                    aria-label={`View ${leader.name} profile`}
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
                </div>

                <div className="team-exec-card__body">
                  <div className="team-exec-card__role-row">
                    <span className="team-exec-card__role">{leader.role}</span>
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
                      <span>View Profile</span>
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

      {/* Closing Engagement Banner */}
      <section className="section-spacing bg-white" aria-labelledby="team-cta-heading">
        <div className="container">
          <div className="closing-cta-panel">
            <div className="closing-cta-panel__content">
              <h2 id="team-cta-heading" className="closing-cta-panel__title">
                Connect directly with the NEOM Panels team.
              </h2>
              <p className="closing-cta-panel__desc">
                Whether exploring regional trade partnerships, recurring supply schedules or
                interior project specifications, our team welcomes direct conversation.
              </p>
              <div className="closing-cta-panel__actions">
                <Link href="/enquiry" className="btn btn-gold btn-lg">
                  <span>Business Enquiry</span>
                </Link>
                <Link href="/brands" className="btn btn-outline-light btn-lg">
                  <span>Explore Our Brands</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
