import Link from 'next/link';
import { getSiteContent } from '@/lib/storage';

export const metadata = {
  title: 'Manufacturing — NEOM Panels',
  description:
    'NEOM Panels is a manufacturing business with its own factory. Explore how we review panel specifications, tolerance expectations, and production requirements.'
};

export default function ManufacturingPage() {
  const siteData = getSiteContent();
  const params = siteData.manufacturingParameters || [];

  return (
    <main id="main-content">
      {/* INNER HERO */}
      <section className="inner-hero bg-warm" aria-labelledby="manufacturing-heading">
        <div className="container">
          <div className="inner-hero__grid">
            <div className="reveal">
              <div className="eyebrow">MANUFACTURING · SPECIFICATION &amp; PROCESS</div>
              <h1 id="manufacturing-heading" className="h-inner">
                The factory behind our brands.
              </h1>
              <p className="body-lead">
                NEOM Panels is a manufacturing business with its own factory. Owning our production is central to how we develop our brands, support business buyers and improve our operations over time.
              </p>
              <div className="btn-row">
                <Link href="/enquiry?category=manufacturing" className="btn btn--primary">
                  Discuss a Manufacturing Requirement
                </Link>
                <Link href="/resources" className="btn btn--secondary">
                  Specification Guidance
                </Link>
              </div>
            </div>

            <div className="reveal">
              <figure className="editorial-art">
                <img
                  src="/assets/illustration-manufacturing.png"
                  alt="Conceptual illustration of a wood-panel stack, inspection table, measuring calliper, and material samples"
                  width="960"
                  height="680"
                />
                <figcaption className="editorial-art__caption">
                  <span>Conceptual illustration · Panel inspection &amp; material verification</span>
                  <span>Quality &amp; Tolerance Review</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1 — A REQUIREMENT BEGINS WITH THE RIGHT QUESTIONS */}
      <section className="section bg-white" aria-labelledby="questions-heading">
        <div className="container">
          <div className="split-editorial reveal">
            <div>
              <div className="eyebrow">01 · REQUIREMENT REVIEW</div>
              <h2 id="questions-heading" className="h-section">
                A requirement begins with the right questions.
              </h2>
              <p className="body-lead">
                Before recommending a product or quotation, we look at the intended application, environment, panel thickness, sheet size, surface expectation, quantity and delivery schedule. Clear specifications help avoid mismatches during fabrication and installation.
              </p>
              <div className="callout-box">
                <div className="callout-box__label">Pre-Production Alignment</div>
                <p style={{ marginBottom: 0 }}>
                  When an OEM or contractor shares machining methods (such as CNC routing, edge-banding, or membrane pressing) alongside panel dimensions, our commercial and factory teams can review suitability before quoting.
                </p>
              </div>
            </div>

            <div>
              <figure className="arch-visual">
                <img
                  src="/assets/industry-furniture-oem.jpg"
                  alt="Stacked engineered wood panels and precision carpentry profiles in an architectural studio"
                  width="760"
                  height="520"
                  loading="lazy"
                />
                <figcaption className="arch-visual__caption">
                  <span>Specification Discipline · Panel sizing, substrate selection &amp; edge preparation</span>
                  <span>OEM &amp; Project Supply</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — QUALITY NEEDS A SPECIFICATION + TECHNICAL TABLE */}
      <section className="section bg-sage" aria-labelledby="quality-spec-heading">
        <div className="container">
          <div className="section-header reveal">
            <div>
              <div className="eyebrow">02 · TECHNICAL PARAMETERS</div>
              <h2 id="quality-spec-heading" className="h-section">
                Quality needs a specification.
              </h2>
            </div>
            <p className="body-lead" style={{ marginBottom: 0 }}>
              Material quality is not a slogan. In panel manufacturing, it comes from clear raw-material expectations, controlled production steps, dimensional checks, surface inspection and careful handling before dispatch.
            </p>
          </div>

          <div className="spec-table-wrap reveal" role="region" aria-labelledby="quality-spec-heading" tabIndex={0}>
            <table className="spec-table">
              <thead>
                <tr>
                  <th scope="col" style={{ width: '10%' }}>Code</th>
                  <th scope="col" style={{ width: '24%' }}>Specification Parameter</th>
                  <th scope="col" style={{ width: '36%' }}>What Buyers Should Specify</th>
                  <th scope="col" style={{ width: '30%' }}>Why It Matters in Fabrication</th>
                </tr>
              </thead>
              <tbody>
                {params.map((item) => (
                  <tr key={item.code}>
                    <td style={{ fontWeight: 700, color: 'var(--color-forest)' }}>{item.code}</td>
                    <td style={{ fontWeight: 600, color: 'var(--color-forest)' }}>{item.parameter}</td>
                    <td>{item.buyerInput}</td>
                    <td>{item.manufacturingRelevance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 3 — DEVELOPING OUR MANUFACTURING BUSINESS */}
      <section className="section bg-white" aria-labelledby="developing-mfg-heading">
        <div className="container">
          <div className="split-editorial reveal">
            <div>
              <div className="eyebrow">03 · LONG-TERM OPERATIONS</div>
              <h2 id="developing-mfg-heading" className="h-section">
                Developing our manufacturing business.
              </h2>
              <p className="body-lead">
                Our focus is on strengthening process consistency, technical documentation and customer coordination as our brand portfolio grows. Specific product data and test information are shared where available for the relevant product.
              </p>
              <div className="btn-row">
                <Link href="/enquiry?category=manufacturing" className="btn btn--primary">
                  Share Your Panel Specification
                </Link>
                <Link href="/brands" className="btn btn--secondary">
                  View Starwoods Brand
                </Link>
              </div>
            </div>

            <div className="pillar-grid" style={{ gridTemplateColumns: '1fr', gap: '20px' }}>
              <article className="pillar-card">
                <div className="pillar-card__num">PROCESS 01</div>
                <h3 className="h-card">Raw-Material &amp; Batch Verification</h3>
                <p>
                  Reviewing incoming material inputs and maintaining structured production settings across pressing, conditioning, and finishing stages.
                </p>
              </article>
              <article className="pillar-card">
                <div className="pillar-card__num">PROCESS 02</div>
                <h3 className="h-card">Dimensional &amp; Surface Inspection</h3>
                <p>
                  Checking thickness uniformity, squareness, edge integrity, and surface cleanliness before panels are cleared for packing.
                </p>
              </article>
              <article className="pillar-card">
                <div className="pillar-card__num">PROCESS 03</div>
                <h3 className="h-card">Dispatch Coordination &amp; Documentation</h3>
                <p>
                  Matching packed pallet lots against buyer purchase orders, grade markings, and agreed delivery schedules.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
