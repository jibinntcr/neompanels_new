import Link from 'next/link';
import BrandMarkPlaque from '@/components/BrandMarkPlaque';
import DocumentRequestButton from '@/components/DocumentRequestButton';
import { getSiteContent } from '@/lib/storage';
import { PORTFOLIO_BRANDS } from '@/lib/portfolio-data';
import { buildPageMetadata, getBreadcrumbJsonLd, SITE_URL } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Governance',
  description:
    'Corporate structure, verified company disclosures, portfolio brand ownership and adopted governance principles of NEOM Panels.',
  path: '/governance'
});

export default function GovernancePage() {
  const siteData = getSiteContent();
  const governance = siteData.governance || { companyInfo: [], policies: [] };
  const governanceJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      getBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Company', path: '/about' },
        { name: 'Governance', path: '/governance' }
      ]),
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/governance#webpage`,
        name: 'Governance | NEOM Panels',
        url: `${SITE_URL}/governance`,
        description:
          'Corporate structure, verified company information and adopted operating policies of NEOM Panels.'
      }
    ]
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(governanceJsonLd) }}
      />

      {/* Page Header */}
      <section className="page-header-dark" aria-labelledby="main-heading">
        <div className="container page-header-inner">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-sep" aria-hidden="true">/</span>
            <Link href="/about" className="breadcrumb-link">Company</Link>
            <span className="breadcrumb-sep" aria-hidden="true">/</span>
            <span className="breadcrumb-current">Governance</span>
          </nav>

          <span className="section-eyebrow text-gold">Corporate Governance</span>
          <h1 id="main-heading" className="page-hero-title text-warm">
            A company built on clear responsibilities.
          </h1>
          <p className="page-hero-lead text-warm-muted">
            NEOM Panels maintains straightforward corporate records and operating principles for
            customers, suppliers, institutional procurement teams and trade partners. Only verified
            company facts and adopted policies are published here.
          </p>
        </div>
      </section>

      {/* Section 1: Verified Company Information */}
      <section id="company-information" className="section-spacing bg-white border-bottom-divider" aria-labelledby="company-info-heading">
        <div className="container">
          <div className="corp-section-header">
            <span className="section-eyebrow">Corporate Record</span>
            <h2 id="company-info-heading" className="corp-section-title">
              Verified company information.
            </h2>
            <p className="corp-section-subtitle">
              Official corporate identity, brand portfolio ownership and enquiry channels for
              commercial and institutional counterparties.
            </p>
          </div>

          <div className="corp-table-wrap" role="region" aria-labelledby="company-info-heading" tabIndex={0}>
            <table className="corp-spec-table">
              <thead>
                <tr>
                  <th scope="col" style={{ width: '32%' }}>Corporate Item</th>
                  <th scope="col">Verified Details</th>
                </tr>
              </thead>
              <tbody>
                {governance.companyInfo.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>
                      {row.label === 'Active Brands' ||
                      row.label === 'Portfolio Brands' ||
                      row.label === 'Product Brands' ? (
                        <div>
                          <div
                            style={{
                              display: 'flex',
                              flexWrap: 'wrap',
                              alignItems: 'center',
                              gap: '0.85rem',
                              marginBottom: '0.65rem'
                            }}
                          >
                            {PORTFOLIO_BRANDS.map((b) => (
                              <BrandMarkPlaque key={b.id} brand={b} size="sm" />
                            ))}
                          </div>
                          <span>{row.value}</span>
                        </div>
                      ) : (
                        row.value
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 2: Adopted Policies */}
      <section id="corporate-policies" className="section-spacing bg-warm-ivory" aria-labelledby="policies-heading">
        <div className="container">
          <div className="corp-section-header">
            <span className="section-eyebrow">Operating Standards</span>
            <h2 id="policies-heading" className="corp-section-title">
              Adopted policies and principles.
            </h2>
            <p className="corp-section-subtitle">
              Operating principles governing commercial conduct, specification accuracy, workplace
              safety, supplier expectations and enquiry data handling.
            </p>
          </div>

          <div className="resp-pillar-grid">
            {governance.policies.map((policy) => (
              <article key={policy.id || policy.title} className="resp-pillar-card">
                <div>
                  <span className="section-eyebrow">{policy.status}</span>
                  <h3 className="brand-card__title">{policy.title}</h3>
                  <p className="corp-body-text corp-body-text--secondary" style={{ marginBottom: 0 }}>
                    {policy.summary}
                  </p>
                </div>
                <div style={{ marginTop: 'auto', paddingTop: '0.85rem', borderTop: '1px solid var(--color-border)' }}>
                  {policy.href ? (
                    <Link href={policy.href} className="corp-text-link">
                      <span>{policy.linkLabel || 'Read Published Document'}</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  ) : (
                    <DocumentRequestButton
                      docCategory="Corporate Governance Policy"
                      documentTitle={policy.title}
                      label="Request Policy Copy"
                    />
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
