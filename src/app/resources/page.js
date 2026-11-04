import Link from 'next/link';
import { getSiteContent } from '@/lib/storage';
import DocumentRequestButton from '@/components/DocumentRequestButton';

export const metadata = {
  title: 'Resources & Technical Documents — NEOM Panels',
  description:
    'Request corporate profiles, Starwoods and NEOM Packing Plywood brand literature, technical specification sheets, and practical B2B buyer guidance from NEOM Panels.',
  alternates: {
    canonical: '/resources'
  }
};

export default function ResourcesPage() {
  const siteData = getSiteContent();
  const docCategories = siteData.resourceCategories || [];
  const guides = siteData.buyerGuidance || [];

  return (
    <main id="main-content">
      {/* PAGE HEADER */}
      <section
        className="page-header section--architectural-grid"
        aria-labelledby="main-heading"
      >
        <div className="container hero-split">
          <div className="hero-animate">
            <p className="eyebrow">RESOURCES &amp; TECHNICAL DOCUMENTS</p>
            <h1 id="main-heading" tabIndex={-1} className="page-title">
              Product literature and buyer checklists.
            </h1>
            <p className="lead-text">
              Request corporate profiles, Starwoods and NEOM Packing Plywood brand documents, and
              grade-specific technical specifications, or review our practical checklists before
              submitting an enquiry.
            </p>
            <div className="btn-group">
              <a href="#document-categories" className="btn btn--primary">
                Request Technical Documents
              </a>
              <a href="#buyer-guidance" className="btn btn--secondary">
                Buyer Checklists
              </a>
            </div>
          </div>

          <figure className="architectural-photo-card hero-animate--delay" style={{ margin: 0 }}>
            <img
              src="/assets/starwoods-brand-showcase.jpg"
              alt="Engineered wood-panel samples, grain swatches, and specification notes in a lighting studio."
              width="760"
              height="520"
            />
            <figcaption className="architectural-photo-meta">
              <span>Furniture and Interior Applications</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* SECTION 1 — DOCUMENT CATEGORIES */}
      <section
        id="document-categories"
        className="section reveal-once"
        aria-labelledby="doc-cat-heading"
      >
        <div className="container">
          <p className="eyebrow">DOCUMENT CATEGORIES</p>
          <h2 id="doc-cat-heading" className="section-title">
            Corporate, brand and technical documents.
          </h2>
          <p className="lead-text">
            Technical documents and batch specifications are issued against your target brand,
            grade and thickness so your procurement or project team reviews accurate parameters.
          </p>

          <div className="applications-cards-grid" style={{ marginTop: 'var(--space-6)' }}>
            {docCategories.map((cat) => (
              <article key={cat.id || cat.title} className="application-feature-card">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '0.75rem',
                    flexWrap: 'wrap'
                  }}
                >
                  <span className="status-pill">{cat.reviewType || cat.availability || 'Individual Review'}</span>
                  {cat.id === 'brand-literature' || cat.code === 'DOC-BRAND' ? (
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        gap: '0.75rem'
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
                    </div>
                  ) : null}
                </div>

                <h3 className="subsection-title" style={{ marginBottom: 0 }}>
                  {cat.title}
                </h3>
                <p style={{ margin: 0, flex: 1 }}>{cat.description}</p>

                <div
                  style={{
                    marginTop: 'auto',
                    paddingTop: 'var(--space-4)',
                    borderTop: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: 'var(--space-3)',
                    flexWrap: 'wrap'
                  }}
                >
                  <DocumentRequestButton
                    docCategory={cat.categoryLabel || 'Technical Documentation'}
                    documentTitle={cat.title}
                    label="Request Technical Documents"
                  />
                  <Link href="/enquiry?category=product-info" className="editorial-link">
                    <span>Submit Enquiry</span>
                    <span className="link-arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2 — BUYER GUIDANCE TOPICS */}
      <section
        id="buyer-guidance"
        className="section section--sage-subtle section--no-border reveal-once"
        aria-labelledby="guidance-heading"
      >
        <div className="container">
          <p className="eyebrow">BUYER GUIDANCE</p>
          <h2 id="guidance-heading" className="section-title">
            Practical checklists for procurement and specification teams.
          </h2>
          <p className="lead-text" style={{ marginBottom: 'var(--space-6)' }}>
            Use these checklists to prepare clear material specifications for furniture
            manufacturing, interior projects, institutional tenders or industrial packaging orders.
          </p>

          <div>
            {guides.map((guide, index) => (
              <details
                key={guide.id}
                id={guide.id}
                className="guidance-accordion"
                open={index === 0}
              >
                <summary>
                  <div>
                    <h3 className="subsection-title" style={{ marginBottom: '0.25rem' }}>
                      {guide.title}
                    </h3>
                    <p className="secondary-text" style={{ marginBottom: 0 }}>
                      {guide.summary}
                    </p>
                  </div>
                  <span className="guidance-accordion__action">View Checklist</span>
                </summary>
                <div className="guidance-accordion__body">
                  <ul className="checklist-items" style={{ marginBottom: 'var(--space-4)' }}>
                    {guide.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <Link href="/enquiry" className="editorial-link">
                    <span>Discuss this requirement with our team</span>
                    <span className="link-arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
