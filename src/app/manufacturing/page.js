import Link from 'next/link';
import { getSiteContent } from '@/lib/storage';
import { buildPageMetadata, getBreadcrumbJsonLd, SITE_URL } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Manufacturing — Wood-Panel Production, Calibration & Quality Checks',
  description:
    'NEOM Panels operates its own wood-panel manufacturing facility in India, covering timber and veneer selection, hot-press bonding, thickness calibration, 4-stage quality inspection and palletised B2B dispatch.',
  path: '/manufacturing',
  ogImage: '/assets/illustration-manufacturing.png',
  ogImageAlt: 'NEOM Panels Wood-Panel Manufacturing Process and Panel Inspection in India',
  keywords: [
    'wood panel manufacturing facility India',
    'calibrated plywood factory India',
    'multi-ply core hot press bonding',
    'plywood thickness calibration process',
    '4-stage plywood quality inspection',
    'veneer grading and moisture conditioning',
    'direct factory plywood supply India',
    'NEOM Panels manufacturing plant'
  ]
});

const MANUFACTURING_STAGES = [
  {
    step: '01',
    title: 'Material selection',
    summary:
      'Reviewing incoming timber, veneer and adhesive inputs and aligning substrate selection with the intended furniture, interior or industrial packaging application.'
  },
  {
    step: '02',
    title: 'Production',
    summary:
      'Layup, pressing, conditioning, calibration and edge-trimming at our manufacturing facility in India, set to the required sheet dimensions and nominal thickness.'
  },
  {
    step: '03',
    title: 'Dimensional and surface checks',
    summary:
      'Inspecting panel thickness uniformity, length and width tolerances, diagonal squareness, edge integrity and surface condition before release.'
  },
  {
    step: '04',
    title: 'Packing and dispatch',
    summary:
      'Sorting verified sheets into protected pallet lots matched to purchase orders, brand and grade markings, and buyer delivery schedules.'
  }
];

export default function ManufacturingPage() {
  const siteData = getSiteContent();
  const params = siteData.manufacturingParameters || [];
  const manufacturingJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      getBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Manufacturing', path: '/manufacturing' }
      ]),
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/manufacturing#webpage`,
        name: 'Wood-Panel Manufacturing & Quality Control — NEOM Panels',
        url: `${SITE_URL}/manufacturing`,
        description:
          'Material selection, multi-ply layup and hot-pressing, dimensional and surface inspection, and palletised dispatch at NEOM Panels in India.'
      }
    ]
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(manufacturingJsonLd) }}
      />
      {/* Page Header */}
      <section className="page-header section--architectural-grid">
        <div className="container hero-split">
          <div className="hero-copy hero-animate">
            <p className="eyebrow">Manufacturing · India</p>
            <h1 id="main-heading" tabIndex={-1} className="page-title">
              The factory behind our brands.
            </h1>
            <p className="lead-text">
              NEOM Panels operates its own wood-panel manufacturing facility in India, producing
              panel substrates for Starwoods (furniture and interiors) and NEOM Packing Plywood
              (MR industrial packaging).
            </p>
            <div className="btn-group" style={{ marginTop: 'var(--space-5)' }}>
              <Link href="/enquiry?category=manufacturing" className="btn btn--primary">
                Discuss a Manufacturing Requirement
              </Link>
              <Link href="/resources" className="btn btn--secondary">
                Specification Guidance
              </Link>
            </div>
          </div>

          <div className="hero-animate--delay">
            <figure className="illustration-frame">
              <img
                src="/assets/illustration-manufacturing.png"
                alt="Illustration of a wood-panel stack, roller inspection table, caliper and material sample block."
                width="1536"
                height="1024"
                fetchPriority="high"
              />
              <figcaption className="illustration-caption">Panel Inspection</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Section 1 — Four Core Manufacturing Activities */}
      <section className="section reveal-once" id="manufacturing-activities">
        <div className="container">
          <p className="eyebrow">Manufacturing Process</p>
          <h2 className="section-title">From raw material to palletised dispatch.</h2>
          <p className="lead-text" style={{ maxWidth: '70ch' }}>
            Every order is reviewed against four core operational stages at our Indian
            manufacturing facility.
          </p>

          <div className="applications-cards-grid">
            {MANUFACTURING_STAGES.map((stage) => (
              <article key={stage.title} className="application-feature-card">
                <span className="route-index" style={{ alignSelf: 'flex-start' }}>
                  {stage.step}
                </span>
                <h3 className="subsection-title" style={{ marginBottom: 0 }}>
                  {stage.title}
                </h3>
                <p style={{ margin: 0 }}>{stage.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Pre-production Specification Alignment + Existing Visual */}
      <section className="section section--warm reveal-once">
        <div className="container split-editorial">
          <div>
            <p className="eyebrow">Pre-Production Review</p>
            <h2 className="section-title">Aligning specifications before fabrication.</h2>
            <p className="lead-text">
              Before recommending a panel grade or preparing a quotation, we review the intended
              application, moisture exposure, nominal thickness, sheet dimensions, machining method
              and delivery schedule.
            </p>
            <ul className="checklist-items" style={{ marginTop: 'var(--space-4)' }}>
              <li>
                <strong>Operating facility:</strong> Company-owned wood-panel manufacturing plant in
                India.
              </li>
              <li>
                <strong>Product brands supported:</strong> Starwoods (furniture &amp; interiors) and
                NEOM Packing Plywood (MR industrial packaging).
              </li>
              <li>
                <strong>Supply formats:</strong> Single-project BOQ batches and scheduled recurring
                OEM or packaging call-offs.
              </li>
            </ul>
          </div>

          <figure className="architectural-photo-card" style={{ margin: 0 }}>
            <img
              src="/assets/industry-furniture-oem.jpg"
              alt="Stacked engineered wood panels and precision carpentry profiles in a fabrication studio."
              width="1400"
              height="933"
              loading="lazy"
            />
            <figcaption className="architectural-photo-meta">
              <span>Material Selection</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Section 3 — Technical Specification Parameters Table */}
      <section className="section reveal-once" id="specification-parameters">
        <div className="container">
          <p className="eyebrow">Specification Parameters</p>
          <h2 id="quality-spec-heading" className="section-title">
            What buyers specify and how it informs production.
          </h2>
          <p className="secondary-text" style={{ maxWidth: '72ch' }}>
            Sharing clear specification parameters allows our factory and commercial team to match
            substrate selection, calibration and packing to your workflow.
          </p>

          <div
            className="table-responsive"
            role="region"
            aria-labelledby="quality-spec-heading"
            tabIndex={0}
          >
            <table className="spec-table">
              <thead>
                <tr>
                  <th scope="col" style={{ width: '28%' }}>
                    Parameter
                  </th>
                  <th scope="col" style={{ width: '36%' }}>
                    What Buyers Should Specify
                  </th>
                  <th scope="col" style={{ width: '36%' }}>
                    Manufacturing &amp; Dispatch Relevance
                  </th>
                </tr>
              </thead>
              <tbody>
                {params.map((item) => (
                  <tr key={item.parameter}>
                    <td style={{ fontWeight: 600, color: 'var(--color-forest)' }}>
                      {item.parameter}
                    </td>
                    <td>{item.buyerInput}</td>
                    <td>{item.manufacturingRelevance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Section 4 — Closing Action */}
      <section className="section section--sage-subtle section--no-border reveal-once">
        <div className="container split-editorial">
          <div>
            <p className="eyebrow">Manufacturing Enquiries</p>
            <h2 className="section-title">Share your panel specification.</h2>
            <p className="lead-text" style={{ marginBottom: 0 }}>
              Open the Business Enquiry form with Manufacturing &amp; recurring supply preselected.
            </p>
          </div>
          <div className="btn-group">
            <Link href="/enquiry?category=manufacturing" className="btn btn--primary">
              Discuss a Manufacturing Requirement
            </Link>
            <Link href="/brands" className="btn btn--secondary">
              Explore Our Brands
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
