import Link from 'next/link';

export const metadata = {
  title: 'Solid Engineered Boards (MDF & HDHMR) | NEOM Panels',
  description:
    'Explore NEOM Panels Solid Engineered Boards: Medium-Density Fiberboard (MDF), High-Density Moisture-Resistant (HDHMR), and Pre-Laminated MDF engineered for CNC routing and modern cabinetry.',
  alternates: {
    canonical: '/products/engineered-boards'
  }
};

export default function EngineeredBoardsFamilyPage() {
  return (
    <main id="main-content" className="product-family-view">
      {/* Architectural Product Family Hero */}
      <section className="arch-page-hero arch-page-hero--forest" aria-labelledby="main-heading">
        <div className="container">
          <nav className="breadcrumb-nav breadcrumb-nav--light" aria-label="Breadcrumb">
            <ol className="breadcrumb-list font-mono" role="list">
              <li><Link href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/products">Products</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Solid Engineered Boards</li>
            </ol>
          </nav>

          <div className="product-header-grid">
            <div className="product-header-copy">
              <span className="section-eyebrow text-gold font-mono">PRODUCT FAMILY 02 · FIBRE CORES</span>
              <h1 id="main-heading" tabIndex={-1} className="page-title text-warm">
                Solid Engineered Boards.
              </h1>
              <p className="page-lead-text text-warm-muted">
                Homogeneous high-density wood-fibre panels engineered for precision CNC routing, smooth lacquer or film pressing, and moisture-resisting modular joinery.
              </p>
              <div className="product-header-actions">
                <Link href="/enquiry?family=Engineered+Boards" className="btn btn-gold">
                  <span>Enquire on Engineered Boards</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/enquiry?type=Sample+Request&family=Engineered+Boards"
                  className="btn btn-outline-light"
                >
                  <span>Request Material Swatches</span>
                </Link>
              </div>
            </div>

            <div className="product-header-img-wrap">
              <img
                src="/assets/product-engineered-boards.jpg"
                alt="High-density MDF and green HDHMR engineered board cross-sections"
                className="product-hero-img"
                width="700"
                height="460"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Variants Section */}
      <section className="section-spacing bg-warm-ivory" aria-label="Product Variants">
        <div className="container">
          <div className="section-header-compact">
            <span className="section-eyebrow font-mono">PHASE 1 PORTFOLIO</span>
            <h2 className="section-title">Engineered Board Variants</h2>
            <p className="section-subtitle">
              Three precision fibre-board options tailored for routed shutters, humid interior cabinetry, and rapid modular manufacturing.
            </p>
          </div>

          <div className="variants-detail-grid">
            <article className="variant-detail-card">
              <div className="variant-card-header">
                <span className="variant-badge font-mono">BOARD 01</span>
                <h3 className="variant-title">Medium-Density Fiberboard (MDF)</h3>
              </div>
              <p className="variant-desc">
                Uniform internal fibre composition and smooth surfaces make MDF well suited for CNC grooved profiles, decorative wall moldings, and painted shutters.
              </p>
              <div className="variant-applications-box">
                <span className="variant-box-title font-mono">TYPICAL USE CONTEXTS</span>
                <ul className="variant-app-list" role="list">
                  <li>• CNC-routed wardrobe &amp; cabinet shutter faces</li>
                  <li>• Architectural wall moldings, trims, and wainscots</li>
                  <li>• Retail fixtures and exhibition displays</li>
                  <li>• Lacquered and PU-painted interior furniture</li>
                </ul>
              </div>
              <div className="variant-footer-action">
                <Link
                  href="/enquiry?family=Engineered+Boards&variant=MDF"
                  className="btn btn-primary btn-sm"
                >
                  <span>Enquire on MDF</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            <article className="variant-detail-card">
              <div className="variant-card-header">
                <span className="variant-badge font-mono">BOARD 02</span>
                <h3 className="variant-title">High-Density Moisture-Resistant (HDHMR)</h3>
              </div>
              <p className="variant-desc">
                Dense fibre core formulated for enhanced moisture tolerance and dependable hardware retention across kitchens, vanities, and humid climates.
              </p>
              <div className="variant-applications-box">
                <span className="variant-box-title font-mono">TYPICAL USE CONTEXTS</span>
                <ul className="variant-app-list" role="list">
                  <li>• Modular kitchen carcasses, shutters, and drawers</li>
                  <li>• Bathroom vanities and utility storage</li>
                  <li>• High-traffic commercial workstations</li>
                  <li>• Humid regional residential &amp; hospitality joinery</li>
                </ul>
              </div>
              <div className="variant-footer-action">
                <Link
                  href="/enquiry?family=Engineered+Boards&variant=HDHMR"
                  className="btn btn-primary btn-sm"
                >
                  <span>Enquire on HDHMR</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            <article className="variant-detail-card">
              <div className="variant-card-header">
                <span className="variant-badge font-mono">BOARD 03</span>
                <h3 className="variant-title">Pre-Laminated MDF</h3>
              </div>
              <p className="variant-desc">
                Factory-surfaced decorative melamine boards offering immediate cut-and-edge readiness for fast-turnaround modular wardrobes and office furniture.
              </p>
              <div className="variant-applications-box">
                <span className="variant-box-title font-mono">TYPICAL USE CONTEXTS</span>
                <ul className="variant-app-list" role="list">
                  <li>• Modular office workstations &amp; storage pedestals</li>
                  <li>• Wardrobe internals, shelves, and partitions</li>
                  <li>• Educational and institutional furniture</li>
                  <li>• Commercial retail shelving systems</li>
                </ul>
              </div>
              <div className="variant-footer-action">
                <Link
                  href="/enquiry?family=Engineered+Boards&variant=Pre-Laminated+MDF"
                  className="btn btn-primary btn-sm"
                >
                  <span>Enquire on Pre-Laminated MDF</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Specification Guidance & Family Switcher */}
      <section className="section-spacing border-top-divider" aria-label="Specifications and Other Families">
        <div className="container">
          <div className="spec-guidance-card">
            <span className="section-eyebrow font-mono">SPECIFICATIONS &amp; AVAILABILITY</span>
            <h2 className="spec-guidance-title">Current Specifications &amp; Ordering</h2>
            <p className="spec-guidance-text">
              Contact NEOM Panels for current product specifications, board dimensions, thickness options, and batch availability.
            </p>
            <div className="spec-guidance-actions">
              <Link href="/enquiry?family=Engineered+Boards" className="btn btn-primary">
                <span>Contact Specification Desk</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/products/decorative-surfaces" className="btn btn-secondary">
                <span>Next: Decorative Surfaces →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
