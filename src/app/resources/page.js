import Link from 'next/link';
import DocumentRequestButton from '@/components/DocumentRequestButton';
import { getSiteContent } from '@/lib/storage';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Product Information',
  description:
    'Submit a request for Starwoods or NEOM Packing Plywood product information, specification details, sample evaluation or corporate vendor details.',
  path: '/resources'
});

export default function ResourcesPage() {
  const siteData = getSiteContent();
  const resourceCategories = siteData.resourceCategories || [];
  const buyerGuidance = siteData.buyerGuidance || [];

  return (
    <main id="main-content" className="page-view">
      {/* Page Header */}
      <section className="page-header-dark" aria-labelledby="main-heading">
        <div className="container page-header-inner">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-sep" aria-hidden="true">/</span>
            <span className="breadcrumb-current">Product Information</span>
          </nav>

          <span className="section-eyebrow text-gold">Product &amp; Company Information</span>
          <h1 id="main-heading" className="page-hero-title text-warm">
            Product Information &amp; Requests
          </h1>
          <p className="page-hero-lead text-warm-muted">
            Because board specifications, nominal thicknesses and test documents apply to specific
            products under Starwoods and NEOM Packing Plywood, information requests and sample
            enquiries are reviewed directly by our team against your application.
          </p>
          <div className="page-header-cta-row" style={{ marginTop: '1.75rem' }}>
            <Link href="/enquiry?type=Product+information" className="btn btn-gold">
              <span>Request Product Information</span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/enquiry?type=Sample+Request" className="btn btn-outline-light">
              <span>Submit a Sample Request</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Information Request Pathways (Clearly Labelled as Requests) */}
      <section className="section-spacing bg-warm-ivory border-bottom-divider" aria-labelledby="doc-requests-heading">
        <div className="container">
          <div className="corp-section-header">
            <span className="section-eyebrow">Information Requests</span>
            <h2 id="doc-requests-heading" className="corp-section-title">
              Submit an information request to our team.
            </h2>
            <p className="corp-section-subtitle">
              Items below register an information request with our team rather than triggering an
              instant file download, so we share only current, scope-matched specifications for
              Starwoods or NEOM Packing Plywood.
            </p>
          </div>

          <div className="resp-pillar-grid">
            {resourceCategories.map((item) => (
              <article key={item.id} className="resp-pillar-card">
                <div>
                  <span className="section-eyebrow">
                    {item.categoryLabel} · {item.reviewType}
                  </span>
                  <h3 className="brand-card__title">{item.title}</h3>
                  <p className="corp-body-text corp-body-text--secondary" style={{ marginBottom: 0 }}>
                    {item.description}
                  </p>
                </div>
                <div style={{ marginTop: 'auto', paddingTop: '0.85rem', borderTop: '1px solid var(--color-border)' }}>
                  <DocumentRequestButton
                    docCategory={item.categoryLabel}
                    documentTitle={item.title}
                    label="Submit Information Request"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Buyer Preparation Guides */}
      <section className="section-spacing bg-white" aria-labelledby="guides-heading">
        <div className="container">
          <div className="corp-section-header">
            <span className="section-eyebrow">Buyer Guidance</span>
            <h2 id="guides-heading" className="corp-section-title">
              Practical checklists before you enquire or order.
            </h2>
          </div>

          <div className="resp-pillar-grid">
            {buyerGuidance.map((guide) => (
              <article key={guide.id} className="resp-pillar-card" style={{ backgroundColor: 'var(--color-warm-ivory)' }}>
                <div>
                  <span className="section-eyebrow">{guide.topicLabel}</span>
                  <h3 className="brand-card__title">{guide.title}</h3>
                  <p className="corp-body-text corp-body-text--secondary">{guide.summary}</p>
                </div>
                <ul className="brand-highlight-list" style={{ margin: 0 }}>
                  {guide.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
