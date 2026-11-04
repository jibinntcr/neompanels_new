import Link from 'next/link';
import { getSiteContent } from '@/lib/storage';
import DocumentRequestButton from '@/components/DocumentRequestButton';

export const metadata = {
  title: 'Governance & Corporate Information — NEOM Panels',
  description:
    'Corporate structure, official company information, and adopted policies for customers, suppliers, institutional buyers, and stakeholders of NEOM Panels.',
  alternates: {
    canonical: '/governance'
  }
};

export default function GovernancePage() {
  const siteData = getSiteContent();
  const governance = siteData.governance || { companyInfo: [], policies: [] };

  return (
    <main id="main-content">
      {/* PAGE HEADER */}
      <section
        className="page-header section--architectural-grid"
        aria-labelledby="main-heading"
      >
        <div className="container hero-split">
          <div className="hero-animate">
            <p className="eyebrow">CORPORATE GOVERNANCE</p>
            <h1 id="main-heading" tabIndex={-1} className="page-title">
              A company built on clear responsibilities.
            </h1>
            <p className="lead-text">
              NEOM Panels maintains a clear corporate structure for customers, suppliers,
              institutional procurement teams and trade partners. Verified company facts and
              adopted policies are published below.
            </p>
            <div className="btn-group">
              <a href="#company-information" className="btn btn--primary">
                Company Information
              </a>
              <a href="#corporate-policies" className="btn btn--secondary">
                Policies &amp; Documents
              </a>
            </div>
          </div>

          <div className="brand-architecture-card hero-animate--delay">
            <div>
              <p className="eyebrow">DOCUMENTATION PRINCIPLE</p>
              <h2 className="subsection-title">Verified corporate disclosures</h2>
              <p className="secondary-text">
                NEOM Panels maintains a disciplined corporate record designed for commercial
                accountability, institutional vendor onboarding and long-term organisational
                clarity.
              </p>
            </div>
            <div className="mr-grade-notice-box" style={{ marginTop: 0 }}>
              <p style={{ margin: 0, fontSize: '0.95rem' }}>
                Only verified company facts and formally adopted policy documents are listed on this
                page. Counterparties requiring vendor registration packs can request copies through
                our corporate desk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 — COMPANY INFORMATION */}
      <section
        id="company-information"
        className="section reveal-once"
        aria-labelledby="company-info-heading"
      >
        <div className="container">
          <p className="eyebrow">CORPORATE RECORD</p>
          <h2 id="company-info-heading" className="section-title">
            Company information.
          </h2>
          <p className="lead-text">
            Official corporate identity, brand ownership and communication routes for commercial
            and institutional counterparties.
          </p>

          <div
            className="table-responsive"
            role="region"
            aria-labelledby="company-info-heading"
            tabIndex={0}
          >
            <table className="spec-table">
              <caption>NEOM Panels — Verified Corporate Registry</caption>
              <thead>
                <tr>
                  <th scope="col" style={{ width: '32%' }}>
                    Corporate Item
                  </th>
                  <th scope="col">Verified Details</th>
                </tr>
              </thead>
              <tbody>
                {governance.companyInfo.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td>
                      {row.label === 'Product Brands' ||
                      row.label === 'Official Brand Relationships' ? (
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.125rem',
                            flexWrap: 'wrap'
                          }}
                        >
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

      {/* SECTION 2 — POLICIES AND DOCUMENTS */}
      <section
        id="corporate-policies"
        className="section section--sage-subtle section--no-border reveal-once"
        aria-labelledby="policies-heading"
      >
        <div className="container">
          <p className="eyebrow">GOVERNANCE FRAMEWORK</p>
          <h2 id="policies-heading" className="section-title">
            Policies and documents.
          </h2>
          <p className="lead-text">
            Approved corporate policies and operating principles governing business conduct,
            product documentation, workplace safety, sourcing and data handling.
          </p>

          <div className="applications-cards-grid" style={{ marginTop: 'var(--space-6)' }}>
            {governance.policies.map((policy) => (
              <article key={policy.id || policy.title} className="application-feature-card">
                <div>
                  <span className="status-pill">{policy.status}</span>
                </div>
                <h3 className="subsection-title" style={{ marginBottom: 0 }}>
                  {policy.title}
                </h3>
                <p style={{ margin: 0, flex: 1 }}>{policy.summary}</p>
                <div
                  style={{
                    marginTop: 'auto',
                    paddingTop: 'var(--space-4)',
                    borderTop: '1px solid var(--color-border)'
                  }}
                >
                  {policy.href ? (
                    <Link href={policy.href} className="editorial-link">
                      <span>{policy.linkLabel || 'Read Published Document'}</span>
                      <span className="link-arrow" aria-hidden="true">
                        →
                      </span>
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
