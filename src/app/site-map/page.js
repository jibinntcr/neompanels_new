import Link from 'next/link';
import {
  buildPageMetadata,
  getBreadcrumbJsonLd,
  SITE_NAVIGATION_ITEMS,
  SITE_URL
} from '@/lib/seo';
import { LEADERSHIP_PROFILES } from '@/lib/leadership-data';

export const metadata = buildPageMetadata({
  title: 'Site Map & Directory — NEOM Panels',
  description:
    'Complete directory of NEOM Panels pages, Phase 1 product families, industry applications, executive leadership profiles, and growth vision.',
  path: '/site-map',
  keywords: ['NEOM Panels site map', 'NEOM Panels directory']
});

export default function SiteMapPage() {
  const siteMapJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      getBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Site Map', path: '/site-map' }
      ]),
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/site-map#webpage`,
        name: 'NEOM Panels Site Map & Directory',
        url: `${SITE_URL}/site-map`,
        description:
          'Complete structural index of pages, product families, applications, and executive leadership profiles on the NEOM Panels website.'
      }
    ]
  };

  return (
    <main id="main-content" className="page-view">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteMapJsonLd) }}
      />

      <section className="arch-page-hero arch-page-hero--forest" aria-labelledby="main-heading">
        <div className="container">
          <nav className="breadcrumb-nav breadcrumb-nav--light" aria-label="Breadcrumb">
            <ol className="breadcrumb-list font-mono" role="list">
              <li><Link href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Site Map</li>
            </ol>
          </nav>

          <div className="arch-page-hero__copy">
            <span className="section-eyebrow text-gold font-mono">WEBSITE DIRECTORY</span>
            <h1 id="main-heading" tabIndex={-1} className="page-title text-warm">
              Complete Website Architecture &amp; Index.
            </h1>
            <p className="page-lead-text text-warm-muted">
              Navigate all public pages, Phase 1 product families, industry sectors, and executive leadership profiles across NEOM Panels.
            </p>
          </div>
        </div>
      </section>

      <section className="section-spacing bg-warm-ivory" aria-label="Primary Website Pages">
        <div className="container">
          <div className="section-header-compact">
            <span className="section-eyebrow font-mono">01 / PRIMARY ROUTES</span>
            <h2 className="section-title">Core Pages &amp; Portfolio</h2>
          </div>

          <div className="stakeholders-grid">
            {SITE_NAVIGATION_ITEMS.map((item, idx) => (
              <article key={item.path} className="stakeholder-card">
                <div className="stakeholder-header">
                  <span className="stakeholder-num font-mono">
                    {String(idx + 1).padStart(2, '0')} · {item.path}
                  </span>
                  <h3 className="stakeholder-title">{item.name}</h3>
                </div>
                <p className="stakeholder-desc">{item.description}</p>
                <div className="stakeholder-action">
                  <Link href={item.path} className="btn btn-secondary btn-sm">
                    <span>Open Page</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="section-header-compact" style={{ marginTop: '4rem' }}>
            <span className="section-eyebrow font-mono">02 / EXECUTIVE LEADERSHIP</span>
            <h2 className="section-title">Individual Executive Profiles</h2>
          </div>

          <div className="stakeholders-grid">
            {LEADERSHIP_PROFILES.map((leader) => (
              <article key={leader.id} className="stakeholder-card">
                <div className="stakeholder-header">
                  <span className="stakeholder-num font-mono">{leader.role}</span>
                  <h3 className="stakeholder-title">{leader.name}</h3>
                </div>
                <p className="stakeholder-desc">{leader.focus}</p>
                <div className="stakeholder-action">
                  <Link href={leader.profileHref} className="btn btn-secondary btn-sm">
                    <span>View Profile</span>
                    <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
