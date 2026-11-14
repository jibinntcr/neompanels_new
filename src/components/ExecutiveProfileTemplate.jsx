import Link from 'next/link';
import { SITE_URL } from '@/lib/seo';
import { LEADERSHIP_PROFILES } from '@/lib/leadership-data';

export function buildLeaderMetadata(leader) {
  return {
    title: leader.metaTitle,
    description: leader.metaDescription,
    path: leader.profileHref,
    type: 'profile',
    ogImage: leader.photo,
    ogImageAlt: leader.photoAlt,
    ogImages: [
      {
        url: leader.photo,
        width: 800,
        height: 800,
        alt: leader.photoAlt
      },
      {
        url: leader.photoFallback,
        width: 800,
        height: 800,
        alt: leader.photoAlt
      }
    ],
    keywords: leader.keywords
  };
}

export default function ExecutiveProfileTemplate({ leader }) {
  const profileUrl = `${SITE_URL}${leader.profileHref}`;

  const profileJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${profileUrl}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Team',
            item: `${SITE_URL}/team`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: leader.name,
            item: profileUrl
          }
        ]
      },
      {
        '@type': 'ImageObject',
        '@id': `${profileUrl}#primaryimage`,
        url: `${SITE_URL}${leader.photo}`,
        contentUrl: `${SITE_URL}${leader.photo}`,
        width: 800,
        height: 800,
        caption: leader.photoAlt
      },
      {
        '@type': 'Person',
        '@id': `${profileUrl}#person`,
        name: leader.name,
        jobTitle: leader.role,
        url: profileUrl,
        description: leader.biographyParagraphs[0],
        image: {
          '@id': `${profileUrl}#primaryimage`
        },
        worksFor: {
          '@id': `${SITE_URL}/#organization`
        },
        ...(leader.schemaAffiliations && leader.schemaAffiliations.length > 0
          ? { affiliation: leader.schemaAffiliations }
          : {}),
        ...(leader.schemaMemberOf && leader.schemaMemberOf.length > 0
          ? { memberOf: leader.schemaMemberOf }
          : {}),
        ...(leader.phone ? { telephone: leader.phone } : {}),
        ...(leader.linkedin ? { sameAs: [leader.linkedin] } : {})
      },
      {
        '@type': 'ProfilePage',
        '@id': `${profileUrl}#profilepage`,
        url: profileUrl,
        name: leader.metaTitle,
        description: leader.metaDescription,
        inLanguage: 'en-IN',
        isPartOf: {
          '@id': `${SITE_URL}/#website`
        },
        breadcrumb: {
          '@id': `${profileUrl}#breadcrumb`
        },
        primaryImageOfPage: {
          '@id': `${profileUrl}#primaryimage`
        },
        about: {
          '@id': `${profileUrl}#person`
        },
        mainEntity: {
          '@id': `${profileUrl}#person`
        }
      }
    ]
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />

      {/* TOP IDENTITY HEADER */}
      <section
        className="page-header section--architectural-grid"
        aria-labelledby="main-heading"
      >
        <div className="container">
          <div className="exec-profile-nav-row">
            <nav className="exec-breadcrumb" aria-label="Breadcrumb">
              <ol className="exec-breadcrumb-list">
                <li className="exec-breadcrumb-item">
                  <Link href="/" className="exec-breadcrumb-link">
                    Home
                  </Link>
                </li>
                <li className="exec-breadcrumb-sep" aria-hidden="true">
                  →
                </li>
                <li className="exec-breadcrumb-item">
                  <Link href="/team" className="exec-breadcrumb-link">
                    Team
                  </Link>
                </li>
                <li className="exec-breadcrumb-sep" aria-hidden="true">
                  →
                </li>
                <li className="exec-breadcrumb-current" aria-current="page">
                  {leader.name}
                </li>
              </ol>
            </nav>

            <Link href="/team" className="exec-back-link">
              <span aria-hidden="true">←</span>
              <span>Back to Team</span>
            </Link>
          </div>

          <div className="exec-identity-card">
            <div className="exec-identity-portrait-col">
              <figure className="exec-identity-portrait-frame">
                <picture>
                  <source srcSet={leader.photo} type="image/webp" />
                  <img
                    src={leader.photo}
                    alt={leader.photoAlt}
                    width="800"
                    height="800"
                    sizes="(max-width: 768px) 220px, 232px"
                    fetchPriority="high"
                    decoding="async"
                    className="exec-identity-portrait-img"
                  />
                </picture>
              </figure>
            </div>

            <div className="exec-identity-info-col">
              <div>
                <span className="exec-identity-badge">{leader.role}</span>
                <h1 id="main-heading" tabIndex={-1} className="exec-identity-name">
                  {leader.name}
                </h1>
                <p className="exec-identity-designation">{leader.designationFull}</p>
                <p className="exec-identity-supporting">{leader.focus}</p>
                <p className="exec-identity-summary">{leader.heroSummary}</p>
              </div>

              <div className="exec-identity-actions-bar">
                <div className="exec-identity-social-group">
                  {leader.telHref ? (
                    <a
                      href={leader.telHref}
                      className="leader-phone-logo-only"
                      aria-label={`Call ${leader.name} (${leader.phone})`}
                      title={`Call ${leader.name} (${leader.phone})`}
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
                  {leader.linkedin ? (
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer me"
                      className="leader-linkedin-logo-only"
                      aria-label={`${leader.name} on LinkedIn`}
                      title={`${leader.name} — LinkedIn`}
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

                <div className="exec-identity-cta-group">
                  <Link href="/enquiry" className="btn btn--primary exec-identity-btn">
                    Business Enquiry
                  </Link>
                  <Link href="/brands" className="btn btn--secondary exec-identity-btn">
                    Explore Product Brands
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRUCTURED 2-COLUMN PROFILE BODY */}
      <section className="section reveal-once" aria-label={`${leader.name} Biography and Role`}>
        <div className="container">
          <div className="exec-profile-body-grid">
            {/* LEFT / MAIN COLUMN: BIOGRAPHY & RESPONSIBILITIES */}
            <div className="exec-profile-main-col">
              <article className="exec-content-card" aria-labelledby="biography-heading">
                <div className="exec-card-header">
                  <p className="eyebrow" style={{ marginBottom: '0.25rem' }}>
                    EXECUTIVE BIOGRAPHY
                  </p>
                  <h2 id="biography-heading" className="exec-card-title">
                    Professional Biography
                  </h2>
                </div>
                <div className="exec-bio-paragraphs">
                  {leader.biographyParagraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </article>

              <article className="exec-content-card" aria-labelledby="responsibilities-heading">
                <div className="exec-card-header">
                  <p className="eyebrow" style={{ marginBottom: '0.25rem' }}>
                    ROLE AT NEOM PANELS
                  </p>
                  <h2 id="responsibilities-heading" className="exec-card-title">
                    Responsibilities at NEOM Panels
                  </h2>
                </div>
                <div className="exec-responsibilities-list">
                  {leader.responsibilities.map((item, idx) => (
                    <div key={item.title} className="exec-responsibility-row">
                      <span className="exec-responsibility-num">0{idx + 1}</span>
                      <div>
                        <h3 className="exec-responsibility-title">{item.title}</h3>
                        <p className="exec-responsibility-desc">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            {/* RIGHT / SIDEBAR COLUMN: PROFESSIONAL BACKGROUND & PEER PROFILES */}
            <aside className="exec-profile-side-col" aria-label="Professional Background and Team">
              <div className="exec-side-card" aria-labelledby="background-heading">
                <div className="exec-card-header">
                  <p className="eyebrow" style={{ marginBottom: '0.25rem' }}>
                    PROFESSIONAL BACKGROUND
                  </p>
                  <h2 id="background-heading" className="exec-side-title">
                    Organisations &amp; Activities
                  </h2>
                </div>
                <ul className="exec-background-list" role="list">
                  {leader.backgroundItems.map((item) => (
                    <li key={item.organisation} className="exec-background-item">
                      <div className="exec-background-item-top">
                        <strong className="exec-background-item-org">{item.organisation}</strong>
                        <span className="exec-background-item-badge">{item.role}</span>
                      </div>
                      <p className="exec-background-item-desc">{item.summary}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="exec-side-card" aria-labelledby="team-directory-heading">
                <div className="exec-card-header">
                  <p className="eyebrow" style={{ marginBottom: '0.25rem' }}>
                    EXECUTIVE LEADERSHIP
                  </p>
                  <h2 id="team-directory-heading" className="exec-side-title">
                    NEOM Panels Leadership Team
                  </h2>
                </div>
                <ul className="exec-peer-list" role="list">
                  {LEADERSHIP_PROFILES.map((peer) => {
                    const isCurrent = peer.slug === leader.slug;
                    return (
                      <li key={peer.slug}>
                        <Link
                          href={peer.profileHref}
                          className={`exec-peer-link ${isCurrent ? 'is-current' : ''}`}
                          aria-current={isCurrent ? 'page' : undefined}
                        >
                          <img
                            src={peer.photo}
                            alt={peer.photoAlt}
                            width="46"
                            height="46"
                            className="exec-peer-avatar"
                          />
                          <div style={{ minWidth: 0, flex: 1 }}>
                            <div className="exec-peer-name">{peer.name}</div>
                            <div className="exec-peer-role">{peer.role}</div>
                          </div>
                          <span className="exec-peer-arrow" aria-hidden="true">
                            {isCurrent ? '●' : '→'}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* CONTACT CTA & BACK TO TEAM */}
      <section
        className="section section--sage-subtle section--no-border reveal-once"
        aria-labelledby="profile-cta-heading"
      >
        <div className="container split-editorial">
          <div>
            <p className="eyebrow">BUSINESS ENQUIRIES &amp; LEADERSHIP</p>
            <h2 id="profile-cta-heading" className="section-title">
              Connect with NEOM Panels
            </h2>
            <p className="lead-text" style={{ marginBottom: 0 }}>
              For product specifications, OEM wood-panel supply, industrial packaging plywood or
              distribution enquiries, contact our commercial team or return to the full leadership
              overview.
            </p>
          </div>
          <div className="btn-group">
            <Link href="/enquiry" className="btn btn--primary">
              Submit a Business Enquiry
            </Link>
            <Link href="/team" className="btn btn--secondary">
              Back to Team Overview
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
