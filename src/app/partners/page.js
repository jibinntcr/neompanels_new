import Link from 'next/link';
import { CUSTOMER_GROUPS } from '@/lib/portfolio-data';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Partners',
  description:
    'Business pathways with NEOM Panels for Dealers & Distributors, Builders & Interior Contractors, Furniture Manufacturers, Industrial Packaging Businesses and Government & Institutional Buyers.',
  path: '/partners'
});

export default function PartnersPage() {
  return (
    <main id="main-content" className="page-view">
      {/* Page Header */}
      <section className="page-header-dark" aria-labelledby="main-heading">
        <div className="container page-header-inner">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-sep" aria-hidden="true">/</span>
            <span className="breadcrumb-current">Partners</span>
          </nav>

          <span className="section-eyebrow text-gold">Business Relationships</span>
          <h1 id="main-heading" className="page-hero-title text-warm">
            Start with your business requirement.
          </h1>
          <p className="page-hero-lead text-warm-muted">
            NEOM Panels works with dealers and distributors, builders and interior contractors,
            furniture manufacturers, industrial packaging businesses and government or institutional
            buyers—connecting each conversation with Starwoods, NEOM Packing Plywood or our central
            team.
          </p>
          <div className="page-header-cta-row" style={{ marginTop: '1.75rem' }}>
            <Link href="/enquiry?type=Distribution+partnership" className="btn btn-gold">
              <span>Business Enquiry</span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/brands" className="btn btn-outline-light">
              <span>Explore Our Brands</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Five Confirmed Customer & Partner Groups */}
      <section className="section-spacing bg-warm-ivory border-bottom-divider" aria-labelledby="pathways-heading">
        <div className="container">
          <div className="corp-section-header">
            <span className="section-eyebrow">Customer &amp; Partner Groups</span>
            <h2 id="pathways-heading" className="corp-section-title">
              How we work across five business groups.
            </h2>
            <p className="corp-section-subtitle">
              Choose the pathway relevant to your business. Every preselected context on our
              enquiry form stays visible and editable before you submit.
            </p>
          </div>

          <div className="corp-five-audiences-grid">
            {CUSTOMER_GROUPS.map((group) => (
              <article key={group.id} className="corp-audience-card">
                <h3 className="corp-audience-card__title">{group.title}</h3>
                <p className="corp-audience-card__summary">{group.summary}</p>
                <Link href={group.href} className="corp-text-link">
                  <span>{group.actionLabel}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Supplier / Trade Dialogue */}
      <section className="section-spacing bg-white" aria-labelledby="supplier-cta-heading">
        <div className="container">
          <div className="closing-cta-panel">
            <div className="closing-cta-panel__content">
              <h2 id="supplier-cta-heading" className="closing-cta-panel__title">
                Ready to discuss a dealer, supply or procurement enquiry?
              </h2>
              <p className="closing-cta-panel__desc">
                Tell us what your business needs. We’ll help you connect with the relevant NEOM
                brand or team.
              </p>
              <div className="closing-cta-panel__actions">
                <Link href="/enquiry" className="btn btn-gold btn-lg">
                  <span>Business Enquiry</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
