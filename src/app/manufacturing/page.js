import Link from 'next/link';
import { getSiteContent } from '@/lib/storage';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Manufacturing',
  description:
    'Learn about NEOM Panels’ manufacturing foundation in India, manufactured versus sourced product clarity, process stages and specification review parameters.',
  path: '/manufacturing'
});

const OPERATIONAL_STAGES = [
  {
    title: '1. Requirement & Application Review',
    detail:
      'Before recommending a product or preparing a quotation, we review whether the panel is intended for dry interior furniture, moisture-prone zones or industrial packaging.'
  },
  {
    title: '2. Material & Grade Alignment',
    detail:
      'Matching core veneer layup, engineered fibreboard selection and bonding grade to the specific Starwoods or NEOM Packing Plywood requirement.'
  },
  {
    title: '3. Pressing, Sizing & Surface Checks',
    detail:
      'Overseeing pressing, calibration, sanding and edge-trimming against the nominal thickness and sheet dimensions agreed for the order.'
  },
  {
    title: '4. Pre-Dispatch Inspection & Communication',
    detail:
      'Checking sheet condition, protective stacking and dispatch readiness while keeping customers informed on order progress and delivery expectations.'
  }
];

export default function ManufacturingPage() {
  const siteData = getSiteContent();
  const parameters = siteData.manufacturingParameters || [];

  return (
    <main id="main-content">
      {/* Page Header */}
      <section className="page-header-dark" aria-labelledby="main-heading">
        <div className="container page-header-inner">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-sep" aria-hidden="true">/</span>
            <span className="breadcrumb-current">Manufacturing</span>
          </nav>

          <span className="section-eyebrow text-gold">Manufacturing Foundation</span>
          <h1 id="main-heading" className="page-hero-title text-warm">
            A manufacturing foundation you can understand.
          </h1>
          <p className="page-hero-lead text-warm-muted">
            Our own factory in India forms part of NEOM Panels’ manufacturing foundation—giving our
            team practical knowledge of wood-panel materials, production discipline and specification
            details.
          </p>
        </div>
      </section>

      {/* Manufacturing Identity & Manufactured vs. Sourced Clarity */}
      <section className="section-spacing bg-white border-bottom-divider" aria-labelledby="foundation-heading">
        <div className="container">
          <div className="corp-split-section">
            <div className="corp-split-section__copy">
              <span className="section-eyebrow">How Our Supply Works</span>
              <h2 id="foundation-heading" className="corp-section-title">
                Practical manufacturing knowledge and clear product scope.
              </h2>
              <p className="corp-body-text">
                Having our own factory anchors NEOM Panels in real panel production—how veneers,
                adhesives, pressing cycles and sheet handling affect performance in a workshop,
                project site or packing line.
              </p>
              <p className="corp-body-text corp-body-text--secondary">
                Transparency also means explaining product scope accurately: operating our own
                factory does not mean every MDF, HDHMR or plywood variant across both brands is
                produced on a single line in-house. Where specific engineered boards or panel grades
                involve partner manufacturing lines, we state the product scope, available
                specifications and supporting documents clearly when you enquire.
              </p>
              <div className="corp-split-section__actions">
                <Link href="/resources" className="btn btn-secondary">
                  <span>Request Product Information</span>
                </Link>
              </div>
            </div>

            <figure className="corp-split-section__media">
              <div className="corp-split-section__frame">
                <img
                  src="/assets/sector-manufacturing.jpg"
                  alt="Wood-panel manufacturing, sheet inspection and workshop handling context"
                  width="960"
                  height="640"
                  loading="lazy"
                  className="corp-split-section__img"
                />
              </div>
              <figcaption className="corp-media-caption">
                Panel production, sizing and inspection workflow context in India.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 4 Operational Stages */}
      <section className="section-spacing bg-warm-ivory border-bottom-divider" aria-labelledby="stages-heading">
        <div className="container">
          <div className="corp-section-header">
            <span className="section-eyebrow">Process Context</span>
            <h2 id="stages-heading" className="corp-section-title">
              Four stages from requirement review to dispatch.
            </h2>
          </div>

          <div className="resp-pillar-grid">
            {OPERATIONAL_STAGES.map((stage) => (
              <article key={stage.title} className="corp-priority-card" style={{ backgroundColor: 'var(--color-white)' }}>
                <h3 className="corp-priority-card__title">{stage.title}</h3>
                <p className="corp-priority-card__detail">{stage.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5-Parameter Buyer Specification Table */}
      <section className="section-spacing bg-white border-bottom-divider" id="specification-parameters" aria-labelledby="params-heading">
        <div className="container">
          <div className="corp-section-header">
            <span className="section-eyebrow">Specification Alignment</span>
            <h2 id="params-heading" className="corp-section-title">
              Parameters reviewed before confirming supply.
            </h2>
            <p className="corp-section-subtitle">
              Available product specifications, test records or quality documents apply to the
              specific product, holder and scope stated on the document—never as a blanket claim. We
              review five practical parameters with buyers:
            </p>
          </div>

          <div className="corp-table-wrap" role="region" aria-labelledby="params-heading" tabIndex={0}>
            <table className="corp-spec-table">
              <thead>
                <tr>
                  <th scope="col">Specification Parameter</th>
                  <th scope="col">What Buyers Share</th>
                  <th scope="col">Why It Matters in Manufacturing &amp; Supply</th>
                </tr>
              </thead>
              <tbody>
                {parameters.map((row) => (
                  <tr key={row.parameter}>
                    <td>{row.parameter}</td>
                    <td>{row.buyerInput}</td>
                    <td>{row.manufacturingRelevance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-spacing bg-warm-ivory" aria-labelledby="mfg-cta-heading">
        <div className="container">
          <div className="closing-cta-panel">
            <div className="closing-cta-panel__content">
              <h2 id="mfg-cta-heading" className="closing-cta-panel__title">
                Speak to us about your material requirements.
              </h2>
              <p className="closing-cta-panel__desc">
                Share your intended application, nominal thickness and quantity to discuss relevant
                Starwoods or NEOM Packing Plywood options with our team.
              </p>
              <div className="closing-cta-panel__actions">
                <Link href="/enquiry?type=Manufacturing+%26+recurring+supply" className="btn btn-gold btn-lg">
                  <span>Business Enquiry</span>
                </Link>
                <Link href="/brands" className="btn btn-outline-light btn-lg">
                  <span>Explore Our Brands</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
