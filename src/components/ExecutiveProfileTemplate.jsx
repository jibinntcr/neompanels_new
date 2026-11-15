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
  const otherLeaders = LEADERSHIP_PROFILES.filter((item) => item.slug !== leader.slug);

  const profileJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${profileUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Leadership Team', item: `${SITE_URL}/team` },
          { '@type': 'ListItem', position: 3, name: leader.name, item: profileUrl }
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
        image: { '@id': `${profileUrl}#primaryimage` },
        worksFor: { '@id': `${SITE_URL}/#organization` },
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
        isPartOf: { '@id': `${SITE_URL}/#website` },
        breadcrumb: { '@id': `${profileUrl}#breadcrumb` },
        primaryImageOfPage: { '@id': `${profileUrl}#primaryimage` },
        about: { '@id': `${profileUrl}#person` },
        mainEntity: { '@id': `${profileUrl}#person` }
      }
    ]
  };

  return (
    <main id="main-content" className="page-view">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />

      {/* Executive Profile Hero Header */}
      <section className="arch-page-hero arch-page-hero--forest" aria-labelledby="main-heading">
        <div className="container">
          <div className="exec-hero-topbar">
            <nav className="breadcrumb-nav breadcrumb-nav--light" aria-label="Breadcrumb" style={{ marginBottom: 0 }}>
              <ol className="breadcrumb-list font-mono" role="list">
                <li><Link href="/">Home</Link></li>
                <li aria-hidden="true">/</li>
                <li><Link href="/team">Leadership Team</Link></li>
                <li aria-hidden="true">/</li>
                <li aria-current="page">{leader.name}</li>
              </ol>
            </nav>

            <Link href="/team" className="exec-back-pill font-mono">
              <span aria-hidden="true">←</span>
              <span>All Executive Profiles</span>
            </Link>
          </div>

          <div className="exec-hero-card">
            <div className="exec-hero-portrait-wrap">
              <picture>
                <source srcSet={leader.photo} type="image/webp" />
                <img
                  src={leader.photoFallback || leader.photo}
                  alt={leader.photoAlt}
                  width="640"
                  height="640"
                  fetchPriority="high"
                  decoding="async"
                  className="exec-hero-portrait"
                />
              </picture>
            </div>

            <div className="exec-hero-details">
              <span className="exec-role-pill font-mono">{leader.role}</span>
              <h1 id="main-heading" tabIndex={-1} className="exec-hero-name">
                {leader.name}
              </h1>
              <p className="exec-hero-focus">{leader.focus}</p>
              <p className="exec-hero-summary">{leader.heroSummary}</p>

              <div className="exec-hero-actions">
                <Link href="/enquiry" className="btn btn-gold">
                  <span>Business Enquiry</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <Link href="/products" className="btn btn-outline-light">
                  <span>Explore Materials Portfolio</span>
                </Link>
                {leader.telHref && (
                  <a href={leader.telHref} className="btn btn-outline-light font-mono">
                    <span>{leader.phone}</span>
                  </a>
                )}
                {leader.linkedin && (
                  <a
                    href={leader.linkedin}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="btn btn-outline-light"
                    aria-label={`${leader.name} on LinkedIn`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Two-Column Executive Detail Body */}
      <section className="section-spacing bg-warm-ivory" aria-label={`${leader.name} Biography and Responsibilities`}>
        <div className="container">
          <div className="exec-detail-layout">
            {/* Main Biography & Responsibilities */}
            <div className="exec-detail-main">
              <article className="exec-panel-card" aria-labelledby="biography-heading">
                <span className="section-eyebrow font-mono">EXECUTIVE BIOGRAPHY</span>
                <h2 id="biography-heading" className="exec-panel-title">
                  Professional Overview
                </h2>
                <div className="exec-bio-prose">
                  {leader.biographyParagraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </article>

              <article className="exec-panel-card" aria-labelledby="responsibilities-heading">
                <span className="section-eyebrow font-mono">MANDATE AT NEOM PANELS</span>
                <h2 id="responsibilities-heading" className="exec-panel-title">
                  Core Executive Responsibilities
                </h2>
                <div className="exec-resp-list">
                  {leader.responsibilities.map((item, idx) => (
                    <div key={item.title} className="exec-resp-item">
                      <span className="exec-resp-num font-mono">0{idx + 1}</span>
                      <div>
                        <h3 className="exec-resp-heading">{item.title}</h3>
                        <p className="exec-resp-text">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </article>
            </div>

            {/* Sidebar: Career Credentials & Fellow Directors */}
            <aside className="exec-detail-sidebar" aria-label="Background and Fellow Executives">
              <div className="exec-panel-card">
                <span className="section-eyebrow font-mono">CREDENTIALS &amp; AFFILIATIONS</span>
                <h2 className="exec-sidebar-heading">Professional Background</h2>
                <ul className="exec-bg-list" role="list">
                  {leader.backgroundItems.map((bg) => (
                    <li key={`${bg.organisation}-${bg.role}`} className="exec-bg-item">
                      <span className="exec-bg-role font-mono">{bg.role}</span>
                      <strong className="exec-bg-org">{bg.organisation}</strong>
                      <p className="exec-bg-summary">{bg.summary}</p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="exec-panel-card">
                <span className="section-eyebrow font-mono">EXECUTIVE BOARD</span>
                <h2 className="exec-sidebar-heading">Fellow Leadership Members</h2>
                <ul className="exec-peers-list" role="list">
                  {otherLeaders.map((peer) => (
                    <li key={peer.id}>
                      <Link href={peer.profileHref} className="exec-peer-link">
                        <img
                          src={peer.photo}
                          alt={peer.photoAlt}
                          width="56"
                          height="56"
                          loading="lazy"
                          className="exec-peer-avatar"
                        />
                        <div className="exec-peer-info">
                          <strong className="exec-peer-name">{peer.name}</strong>
                          <span className="exec-peer-role font-mono">{peer.role}</span>
                        </div>
                        <span className="exec-peer-arrow" aria-hidden="true">→</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
