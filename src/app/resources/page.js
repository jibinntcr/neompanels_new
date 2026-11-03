import Link from 'next/link';
import { getSiteContent } from '@/lib/storage';
import DocumentRequestButton from '@/components/DocumentRequestButton';

export const metadata = {
  title: 'Resources & Buyer Guidance — NEOM Panels',
  description:
    'Company literature, Starwoods brand documents, technical data sheets, sustainability updates, and practical B2B buyer guidance from NEOM Panels.'
};

export default function ResourcesPage() {
  const siteData = getSiteContent();
  const docCategories = siteData.resourceCategories || [];
  const guides = siteData.buyerGuidance || [];

  return (
    <main id="main-content">
      {/* INNER HERO */}
      <section className="inner-hero bg-warm" aria-labelledby="resources-heading">
        <div className="container">
          <div className="inner-hero__grid">
            <div className="reveal">
              <div className="eyebrow">RESOURCES · TECHNICAL &amp; COMMERCIAL REFERENCE</div>
              <h1 id="resources-heading" className="h-inner">
                Information for a more useful material discussion.
              </h1>
              <p className="body-lead">
                Use this section for company literature, brand documents and practical buyer guidance as they are published.
              </p>
              <div className="btn-row">
                <a href="#document-categories" className="btn btn--primary">
                  Document Categories
                </a>
                <a href="#buyer-guidance" className="btn btn--secondary">
                  Buyer Guidance Briefings
                </a>
              </div>
            </div>

            <div className="reveal">
              <figure className="arch-visual">
                <img
                  src="/assets/starwoods-brand-showcase.jpg"
                  alt="Engineered wood-panel samples, grain swatches, and specification notes in a lighting studio"
                  width="760"
                  height="520"
                />
                <figcaption className="arch-visual__caption">
                  <span>Documentation &amp; Swatches · Request specific product data for your tender or factory run</span>
                  <span>B2B Reference Desk</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 — DOCUMENT CATEGORIES */}
      <section
        id="document-categories"
        className="section bg-white"
        aria-labelledby="doc-cat-heading"
      >
        <div className="container">
          <div className="section-header reveal">
            <div>
              <div className="eyebrow">DOCUMENT CATEGORIES</div>
              <h2 id="doc-cat-heading" className="h-section">
                Corporate, brand, and product literature.
              </h2>
            </div>
            <p className="body-lead" style={{ marginBottom: 0 }}>
              Where a document applies to a specific product grade, batch, or commercial requirement, use the request option to receive the relevant pack from our team.
            </p>
          </div>

          <div className="gov-grid reveal">
            {docCategories.map((cat) => (
              <article key={cat.code} className="gov-card">
                <div className="gov-card__meta">
                  <span className="gov-card__code">{cat.code}</span>
                  <span className="gov-card__status">{cat.availability}</span>
                </div>
                {cat.code === 'DOC-BRAND' ? (
                  <div style={{ marginBottom: '12px' }}>
                    <img
                      src="/assets/starwood-logo.png"
                      alt="Starwood — The Plywood Specialist"
                      className="starwood-logo-img--sm"
                      width="619"
                      height="177"
                    />
                  </div>
                ) : null}
                <h3 className="h-card" style={{ marginBottom: '10px' }}>
                  {cat.title}
                </h3>
                <p style={{ fontSize: '0.96rem', marginBottom: '20px', flex: 1 }}>
                  {cat.description}
                </p>
                <div
                  style={{
                    marginTop: 'auto',
                    paddingTop: '16px',
                    borderTop: '1px solid var(--color-border)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '12px',
                    flexWrap: 'wrap'
                  }}
                >
                  <DocumentRequestButton
                    documentCode={cat.code}
                    documentTitle={cat.title}
                    label="Request This Document"
                  />
                  <Link href="/enquiry" className="link-arrow" style={{ fontSize: '0.88rem' }}>
                    Full Enquiry
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
        className="section bg-sage"
        aria-labelledby="guidance-heading"
      >
        <div className="container">
          <div className="section-header reveal">
            <div>
              <div className="eyebrow">BUYER GUIDANCE TOPICS</div>
              <h2 id="guidance-heading" className="h-section">
                Practical briefings for procurement and specification teams.
              </h2>
            </div>
            <p className="body-lead" style={{ marginBottom: 0 }}>
              Structured checklists to help furniture manufacturers, interior contractors, and institutional buyers frame clear material specifications.
            </p>
          </div>

          <div className="reveal">
            {guides.map((guide, index) => (
              <details
                key={guide.id}
                id={guide.id}
                className="guidance-accordion"
                open={index === 0}
              >
                <summary>
                  <div>
                    <div className="eyebrow" style={{ marginBottom: '4px' }}>
                      {guide.readTime}
                    </div>
                    <h3 className="h-card" style={{ marginBottom: '4px' }}>
                      {guide.title}
                    </h3>
                    <p style={{ marginBottom: 0, fontSize: '0.94rem' }}>{guide.summary}</p>
                  </div>
                  <span
                    className="btn btn--secondary"
                    style={{ minHeight: '38px', padding: '6px 14px', fontSize: '0.82rem' }}
                  >
                    Read Briefing
                  </span>
                </summary>
                <div className="guidance-accordion__body">
                  <ul className="spec-list">
                    {guide.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <div style={{ marginTop: '20px' }}>
                    <Link href="/enquiry" className="link-arrow">
                      Discuss this topic with our team
                    </Link>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
