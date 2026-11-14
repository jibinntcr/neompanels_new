import Link from 'next/link';

export const metadata = {
  title: 'Resources & Material Information | NEOM Panels',
  description:
    'Request verified product information, material specifications, and architectural sample folders from the NEOM Panels specification desk.',
  alternates: {
    canonical: '/resources'
  }
};

export default function ResourcesPage() {
  return (
    <div className="page-view">
      {/* Page Header */}
      <section className="page-header-section bg-warm-ivory border-bottom-divider">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <ol className="breadcrumb-list font-mono" role="list">
              <li><Link href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Resources</li>
            </ol>
          </nav>

          <div className="page-header-content">
            <span className="section-eyebrow font-mono">SPECIFICATION DESK</span>
            <h1 className="page-title">Resources &amp; Material Information</h1>
            <p className="page-lead-text">
              Direct access to verified product data, technical guidance, and physical material swatch folders for architects, specifiers, and procurement managers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Request Options */}
      <section className="section-spacing" aria-label="Resource Request Options">
        <div className="container">
          <div className="resource-options-grid">
            {/* Card 1: Technical Information */}
            <div className="resource-card bg-warm-ivory border-strong">
              <span className="resource-card-tag font-mono">TECHNICAL DATA</span>
              <h2 className="resource-card-title">Product Information &amp; Data Sheets</h2>
              <p className="resource-card-desc">
                Request up-to-date panel composition details, thickness options, surface tolerances, and palletization guidelines for our Structural Plywood, MDF, HDHMR, and Decorative Surfaces.
              </p>
              <div className="resource-card-action">
                <Link
                  href="/enquiry?type=Product+Enquiry&document=Technical+Data+Sheet"
                  className="btn btn-primary"
                >
                  <span>Request Technical Information</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Card 2: Material Swatches */}
            <div className="resource-card bg-forest text-warm">
              <span className="resource-card-tag font-mono text-gold">PHYSICAL SAMPLES</span>
              <h2 className="resource-card-title text-warm">Architectural Swatch Boxes</h2>
              <p className="resource-card-desc text-warm-muted">
                Registered design practices, interior creators, and modular furniture OEMs can request sample boxes containing core substrate cross-sections and decorative veneer/acrylic swatches.
              </p>
              <div className="resource-card-action">
                <Link
                  href="/enquiry?type=Sample+Request"
                  className="btn btn-secondary text-warm"
                >
                  <span>Request Material Swatches</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Card 3: Project Supply & Tender Documentation */}
            <div className="resource-card border-strong">
              <span className="resource-card-tag font-mono">PROJECT SUPPLY</span>
              <h2 className="resource-card-title">Tender &amp; BOQ Specification Guidance</h2>
              <p className="resource-card-desc">
                Procurement managers and institutional contractors can submit bill-of-quantities (BOQ) schedules to receive material compatibility advice and batch fulfillment schedules.
              </p>
              <div className="resource-card-action">
                <Link
                  href="/enquiry?type=Project+Supply"
                  className="btn btn-secondary"
                >
                  <span>Submit BOQ Schedule</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>

          <div className="resource-disclaimer-box font-mono text-center text-muted" style={{ marginTop: '3.5rem' }}>
            NEOM Panels adheres to strict truthfulness: we only distribute current, verified technical documentation. To request official information, submit your project requirement above or email <a href="mailto:neompanels@gmail.com" className="text-forest underline">neompanels@gmail.com</a>.
          </div>
        </div>
      </section>
    </div>
  );
}
