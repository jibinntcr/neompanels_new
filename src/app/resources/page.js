import Link from 'next/link';

export const metadata = {
  title: 'Resources & Material Information | NEOM Panels',
  description:
    'Request verified product information, material guidance, and sample coordination from the NEOM Panels specification desk.',
  alternates: {
    canonical: '/resources'
  }
};

export default function ResourcesPage() {
  return (
    <main id="main-content" className="page-view">
      {/* Architectural Page Hero */}
      <section className="arch-page-hero arch-page-hero--forest" aria-labelledby="main-heading">
        <div className="container">
          <nav className="breadcrumb-nav breadcrumb-nav--light" aria-label="Breadcrumb">
            <ol className="breadcrumb-list font-mono" role="list">
              <li><Link href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Resources</li>
            </ol>
          </nav>

          <div className="arch-page-hero__copy" style={{ maxWidth: '720px' }}>
            <span className="section-eyebrow text-gold font-mono">SPECIFICATION DESK</span>
            <h1 id="main-heading" tabIndex={-1} className="page-title text-warm">
              Resources &amp; Product Information.
            </h1>
            <p className="page-lead-text text-warm-muted">
              Request current product information, substrate guidance, and sample coordination directly from the NEOM Panels team.
            </p>
          </div>
        </div>
      </section>

      {/* Main Request Options */}
      <section className="section-spacing" aria-label="Resource Request Options">
        <div className="container">
          <div className="resource-options-grid">
            <div className="resource-card bg-warm-ivory border-strong">
              <span className="resource-card-tag font-mono">01 / PRODUCT DATA</span>
              <h2 className="resource-card-title">Request Product Information</h2>
              <p className="resource-card-desc">
                Receive current portfolio details, available sheet dimensions, and application suitability guidance across Plywood, Engineered Boards, and Decorative Surfaces.
              </p>
              <div className="resource-card-action">
                <Link href="/enquiry?type=Product" className="btn btn-primary">
                  <span>Request Product Information</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="resource-card bg-forest text-warm">
              <span className="resource-card-tag font-mono text-gold">02 / MATERIAL SWATCHES</span>
              <h2 className="resource-card-title text-warm">Sample &amp; Swatch Enquiry</h2>
              <p className="resource-card-desc text-warm-muted">
                Architects, interior designers, and furniture manufacturers can register sample requests for active residential, commercial, or OEM evaluations.
              </p>
              <div className="resource-card-action">
                <Link href="/enquiry?type=Sample+Request" className="btn btn-gold">
                  <span>Submit Sample Enquiry</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <div className="resource-card border-strong">
              <span className="resource-card-tag font-mono">03 / PROJECT SCHEDULES</span>
              <h2 className="resource-card-title">Project &amp; Tender Guidance</h2>
              <p className="resource-card-desc">
                Share project requirements or quantity schedules with our commercial desk to discuss compatible core-and-surface combinations and supply planning.
              </p>
              <div className="resource-card-action">
                <Link href="/enquiry?type=Project+Supply" className="btn btn-secondary">
                  <span>Discuss Project Supply</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
