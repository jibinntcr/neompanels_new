import Link from 'next/link';
import { buildPageMetadata, getBreadcrumbJsonLd, SITE_URL } from '@/lib/seo';
import { LEADERSHIP_PROFILES } from '@/lib/leadership-data';

export const metadata = buildPageMetadata({
  title: 'Our Leadership — The People Behind NEOM Panels',
  description:
    'NEOM Panels brings together executive experience in wood-panel manufacturing, business operations, technology and people development. Meet Managing Director Jibin N, CEO Muneer K H, CFO Muhamad Raneef T A and CTO Muhammed Jabir.',
  path: '/team',
  ogImage: '/assets/team/jibin-n-neom-panels-managing-director.webp',
  ogImageAlt: 'Jibin N, Managing Director of NEOM Panels',
  ogImages: [
    ...LEADERSHIP_PROFILES.map((member) => ({
      url: member.photo,
      width: 800,
      height: 800,
      alt: member.photoAlt
    })),
    {
      url: '/assets/hero-neom-flagship.jpg',
      width: 1400,
      height: 933,
      alt: 'NEOM Panels — Indian Wood-Panel Manufacturing Company'
    }
  ],
  keywords: [
    'NEOM Panels leadership team',
    'Jibin N Managing Director NEOM Panels',
    'Muneer K H CEO NEOM Panels',
    'Muhamad Raneef T A CFO NEOM Panels',
    'Muhammed Jabir CTO NEOM Panels',
    'wood panel manufacturing leadership India'
  ]
});

export default function TeamPage() {
  const teamJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      getBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Team', path: '/team' }
      ]),
      {
        '@type': 'CollectionPage',
        '@id': `${SITE_URL}/team#webpage`,
        name: 'Our Leadership — The People Behind NEOM Panels',
        url: `${SITE_URL}/team`,
        description:
          'Meet the executive leadership team behind NEOM Panels: Managing Director Jibin N, CEO Muneer K H, CFO Muhamad Raneef T A and CTO Muhammed Jabir.',
        isPartOf: {
          '@id': `${SITE_URL}/#website`
        },
        about: {
          '@id': `${SITE_URL}/#organization`
        },
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/assets/team/jibin-n-neom-panels-managing-director.webp`,
          width: 800,
          height: 800,
          caption: 'Jibin N, Managing Director of NEOM Panels'
        },
        image: LEADERSHIP_PROFILES.map((member) => ({
          '@type': 'ImageObject',
          url: `${SITE_URL}${member.photo}`,
          width: 800,
          height: 800,
          caption: member.photoAlt
        })),
        hasPart: LEADERSHIP_PROFILES.map((member) => ({
          '@id': `${SITE_URL}${member.profileHref}#person`
        }))
      },
      ...LEADERSHIP_PROFILES.map((member) => ({
        '@type': 'Person',
        '@id': `${SITE_URL}${member.profileHref}#person`,
        name: member.name,
        jobTitle: member.role,
        url: `${SITE_URL}${member.profileHref}`,
        description: member.overviewBio,
        image: {
          '@type': 'ImageObject',
          url: `${SITE_URL}${member.photo}`,
          width: 800,
          height: 800,
          caption: member.photoAlt
        },
        worksFor: {
          '@id': `${SITE_URL}/#organization`
        },
        ...(member.phone ? { telephone: member.phone } : {}),
        ...(member.linkedin ? { sameAs: [member.linkedin] } : {})
      }))
    ]
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamJsonLd) }}
      />
      {/* PAGE HEADER */}
      <section
        className="page-header section--architectural-grid"
        aria-labelledby="main-heading"
      >
        <div className="container hero-split">
          <div className="hero-animate">
            <p className="eyebrow">OUR LEADERSHIP</p>
            <h1 id="main-heading" tabIndex={-1} className="page-title">
              The People Behind NEOM Panels
            </h1>
            <p className="lead-text" style={{ marginBottom: 0 }}>
              NEOM Panels brings together experience in business, technology, wood-panel solutions
              and people development. Our leadership team shares a commitment to building a
              dependable Indian manufacturing company through quality products, responsible growth
              and lasting customer relationships.
            </p>
          </div>

          <div className="brand-architecture-card hero-animate--delay">
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.25rem' }}>
                MANAGEMENT STEWARDSHIP
              </p>
              <h2 className="subsection-title" style={{ marginBottom: '0.35rem' }}>
                Executive team guiding NEOM Panels
              </h2>
              <p className="secondary-text" style={{ fontSize: '0.92rem', marginBottom: 0 }}>
                Executive leadership across NEOM Panels and its product brands—Starwoods and NEOM
                Packing Plywood—focuses on operational discipline, specification clarity and
                long-term B2B relationships.
              </p>
            </div>
            <div
              className="leader-quick-directory"
              aria-label="Executive team quick directory"
            >
              {LEADERSHIP_PROFILES.map((member) => (
                <Link
                  key={member.id}
                  href={member.profileHref}
                  className="leader-quick-chip"
                >
                  <img
                    src={member.photo}
                    alt={member.photoAlt}
                    width="44"
                    height="44"
                    className="leader-quick-chip-avatar"
                  />
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div className="leader-quick-chip-name">{member.name}</div>
                    <div className="leader-quick-chip-role">{member.role}</div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="brand-architecture-row">
              <img
                src="/assets/starwood-logo.png"
                alt="Starwoods — The Plywood Specialist"
                className="starwood-logo-img--xs"
                width="619"
                height="177"
              />
              <img
                src="/assets/neom-packing-plywood-logo-compact.svg"
                alt="NEOM Packing Plywood"
                className="packing-logo-img--xs"
                width="540"
                height="112"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP PROFILES GRID */}
      <section className="section reveal-once" aria-label="Executive Leadership Profiles">
        <div className="container">
          <div className="leadership-grid">
            {LEADERSHIP_PROFILES.map((member, index) => (
              <article
                key={member.id}
                id={member.id}
                className="leader-card"
                style={{ '--card-index': index }}
              >
                <div className="leader-card-top">
                  <div className="leader-portrait-wrap">
                    <Link
                      href={member.profileHref}
                      aria-label={`View ${member.name}'s profile`}
                    >
                      <img
                        src={member.photo}
                        alt={member.photoAlt}
                        className="leader-portrait"
                        width="800"
                        height="800"
                        sizes="(max-width: 520px) 148px, 148px"
                      />
                    </Link>
                  </div>
                  <div className="leader-header-meta">
                    <div className="leader-role-row">
                      <span className="leader-role">{member.role}</span>
                    </div>
                    <h2 className="leader-name">
                      <Link href={member.profileHref} className="leader-name-link">
                        {member.name}
                      </Link>
                    </h2>
                    <p className="leader-focus-tag">{member.focus}</p>
                  </div>
                </div>

                <div className="leader-body">
                  <p className="leader-bio">{member.overviewBio}</p>

                  <div className="leader-footer">
                    <Link href={member.profileHref} className="leader-view-profile-link">
                      <span>View Profile</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                    <div className="leader-footer-actions">
                      {member.telHref ? (
                        <a
                          href={member.telHref}
                          className="leader-phone-logo-only"
                          aria-label={`Call ${member.name} (${member.phone})`}
                          title={`Call ${member.name} (${member.phone})`}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2z" />
                          </svg>
                        </a>
                      ) : null}
                      {member.linkedin ? (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="leader-linkedin-logo-only"
                          aria-label={`${member.name} on LinkedIn`}
                          title={`${member.name} — LinkedIn`}
                        >
                          <svg
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                          </svg>
                        </a>
                      ) : null}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNANCE & ENQUIRY BAND */}
      <section className="section section--sage-subtle section--no-border reveal-once">
        <div className="container split-editorial">
          <div>
            <p className="eyebrow">CORPORATE STEWARDSHIP</p>
            <h2 className="section-title">Accountable management and direct communication.</h2>
            <p className="lead-text">
              Explore our corporate governance framework, learn more about our manufacturing
              operations, or begin a business conversation with our team.
            </p>
          </div>
          <div className="btn-group">
            <Link href="/enquiry" className="btn btn--primary">
              Submit a Business Enquiry
            </Link>
            <Link href="/governance" className="btn btn--secondary">
              Governance &amp; Corporate Info
            </Link>
            <Link href="/about" className="editorial-link">
              <span>About NEOM</span>
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
