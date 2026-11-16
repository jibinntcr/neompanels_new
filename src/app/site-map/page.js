import Link from 'next/link';
import {
  buildPageMetadata,
  getBreadcrumbJsonLd,
  SITE_NAVIGATION_ITEMS,
  SITE_URL
} from '@/lib/seo';
import { LEADERSHIP_PROFILES } from '@/lib/leadership-data';

export const metadata = buildPageMetadata({
  title: 'Site Map',
  description:
    'Complete directory of NEOM Panels corporate pages, active brands (Starwoods and NEOM Packing Plywood), material categories, industries and leadership profiles.',
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
        name: 'Site Map | NEOM Panels',
        url: `${SITE_URL}/site-map`,
        description:
          'Complete structural index of corporate pages, portfolio brands, material categories and leadership profiles on the NEOM Panels website.'
      }
    ]
  };

  return (
    <main id="main-content" className="page-view">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(siteMapJsonLd) }}
      />

      <section className="page-header-dark" aria-labelledby="main-heading">
        <div className="container page-header-inner">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-sep" aria-hidden="true">/</span>
            <span className="breadcrumb-current">Site Map</span>
          </nav>

          <span className="section-eyebrow text-gold">Website Directory</span>
          <h1 id="main-heading" className="page-hero-title text-warm">
            Site Map
          </h1>
          <p className="page-hero-lead text-warm-muted">
            Navigate all public corporate pages, portfolio brand pages, material categories,
            industries and leadership profiles across NEOM Panels.
          </p>
        </div>
      </section>

      <section className="section-spacing bg-warm-ivory" aria-label="Primary Website Pages">
        <div className="container">
          <div className="corp-section-header">
            <span className="section-eyebrow">01 / Corporate &amp; Brand Pages</span>
            <h2 className="corp-section-title">Core Pages &amp; Portfolio</h2>
          </div>

          <div className="corp-audience-grid">
            {SITE_NAVIGATION_ITEMS.map((item) => (
              <article key={item.path} className="corp-audience-card">
                <span className="brand-card__relationship">{item.path}</span>
                <h3 className="corp-audience-card__title">{item.name}</h3>
                <p className="corp-audience-card__summary">{item.description}</p>
                <Link href={item.path} className="corp-text-link">
                  <span>Open Page</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="corp-section-header" style={{ marginTop: '3.5rem' }}>
            <span className="section-eyebrow">02 / Leadership</span>
            <h2 className="corp-section-title">Leadership Profiles</h2>
          </div>

          <div className="corp-audience-grid">
            {LEADERSHIP_PROFILES.map((leader) => (
              <article key={leader.id} className="corp-audience-card">
                <span className="brand-card__relationship">{leader.role}</span>
                <h3 className="corp-audience-card__title">{leader.name}</h3>
                <p className="corp-audience-card__summary">{leader.focus}</p>
                <Link href={leader.profileHref} className="corp-text-link">
                  <span>View Profile</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
