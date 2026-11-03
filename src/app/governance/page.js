import Link from 'next/link';
import { getSiteContent } from '@/lib/storage';
import DocumentRequestButton from '@/components/DocumentRequestButton';

export const metadata = {
  title: 'Governance & Corporate Information — NEOM Panels',
  description:
    'Corporate structure, official company information, and adopted policies for customers, suppliers, institutional buyers, and stakeholders of NEOM Panels.'
};

export default function GovernancePage() {
  const siteData = getSiteContent();
  const governance = siteData.governance || { companyInfo: [], policies: [] };

  return (
    <main id="main-content">
      {/* INNER HERO */}
      <section className="inner-hero bg-warm" aria-labelledby="governance-heading">
        <div className="container">
          <div className="inner-hero__grid">
            <div className="reveal">
              <div className="eyebrow">CORPORATE GOVERNANCE · OFFICIAL RECORD</div>
              <h1 id="governance-heading" className="h-inner">
                A company built on clear responsibilities.
              </h1>
              <p className="body-lead">
                As NEOM Panels grows, we are building a clear corporate structure for customers, suppliers, partners and future stakeholders. Official company information and policies are published here as they are finalised.
              </p>
              <div className="btn-row">
                <a href="#company-information" className="btn btn--primary">
                  Company Information
                </a>
                <a href="#corporate-policies" className="btn btn--secondary">
                  Policies &amp; Documents
                </a>
              </div>
            </div>

            <div className="reveal">
              <div
                style={{
                  background: 'var(--color-white)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '32px'
                }}
              >
                <div className="eyebrow">DOCUMENTATION PRINCIPLE</div>
                <h2 className="h-card" style={{ marginBottom: '12px' }}>
                  Verified corporate disclosures
                </h2>
                <p style={{ fontSize: '0.96rem', marginBottom: '18px' }}>
                  NEOM Panels maintains a disciplined corporate record designed for commercial accountability, institutional vendor onboarding, and long-term organisational clarity.
                </p>
                <div
                  style={{
                    padding: '16px 18px',
                    background: 'var(--color-warm-white)',
                    borderLeft: '3px solid var(--color-forest)',
                    fontSize: '0.9rem',
                    color: 'var(--color-text-secondary)'
                  }}
                >
                  Only verified company facts and formally adopted policy documents are listed on this page. Counterparties requiring vendor registration packs may request controlled copies directly from our corporate desk.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 — COMPANY INFORMATION */}
      <section
        id="company-information"
        className="section bg-white"
        aria-labelledby="company-info-heading"
      >
        <div className="container">
          <div className="section-header reveal">
            <div>
              <div className="eyebrow">CORPORATE RECORD</div>
              <h2 id="company-info-heading" className="h-section">
                Company information.
              </h2>
            </div>
            <p className="body-lead" style={{ marginBottom: 0 }}>
              Official corporate identity, brand ownership, and communication routes for commercial and institutional counterparties.
            </p>
          </div>

          <div className="spec-table-wrap reveal" role="region" aria-labelledby="company-info-heading" tabIndex={0}>
            <table className="spec-table">
              <thead>
                <tr>
                  <th scope="col" style={{ width: '32%' }}>Corporate Item</th>
                  <th scope="col">Verified Details</th>
                </tr>
              </thead>
              <tbody>
                {governance.companyInfo.map((row) => (
                  <tr key={row.label}>
                    <td style={{ fontWeight: 600, color: 'var(--color-forest)' }}>{row.label}</td>
                    <td>
                      {row.label === 'Official Brand Relationships' ? (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', flexWrap: 'wrap' }}>
                          <img
                            src="/assets/starwood-logo.png"
                            alt="Starwood — The Plywood Specialist"
                            className="starwood-logo-img--xs"
                            width="615"
                            height="149"
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
        className="section bg-sage"
        aria-labelledby="policies-heading"
      >
        <div className="container">
          <div className="section-header reveal">
            <div>
              <div className="eyebrow">GOVERNANCE FRAMEWORK</div>
              <h2 id="policies-heading" className="h-section">
                Policies and documents.
              </h2>
            </div>
            <p className="body-lead" style={{ marginBottom: 0 }}>
              Approved corporate policies and operating principles governing business conduct, product documentation, workplace safety, sourcing, and data handling.
            </p>
          </div>

          <div className="gov-grid reveal">
            {governance.policies.map((policy) => (
              <article key={policy.code} className="gov-card">
                <div className="gov-card__meta">
                  <span className="gov-card__code">{policy.code}</span>
                  <span className="gov-card__status">{policy.status}</span>
                </div>
                <h3 className="h-card" style={{ marginBottom: '10px' }}>
                  {policy.title}
                </h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '20px', flex: 1 }}>
                  {policy.summary}
                </p>
                <div style={{ marginTop: 'auto', paddingTop: '14px', borderTop: '1px solid var(--color-border)' }}>
                  {policy.href ? (
                    <Link href={policy.href} className="link-arrow">
                      Read Published Document
                    </Link>
                  ) : (
                    <DocumentRequestButton
                      documentCode={policy.code}
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
