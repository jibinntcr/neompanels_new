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
    <div className="product-family-view">
      {/* Breadcrumb & Header */}
      <section className="product-header-section bg-warm-ivory border-bottom-divider">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
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
              <span className="section-eyebrow font-mono">PRODUCT FAMILY 02</span>
              <h1 className="page-title">Solid Engineered Boards</h1>
              <p className="page-lead-text">
                Homogeneous, high-density fiber-based panels engineered for precision CNC routing, smooth surface lacquering, and moisture-resisting interior joinery across commercial and residential environments.
              </p>
              <div className="product-header-actions">
                <Link
                  href="/enquiry?family=Engineered+Boards"
                  className="btn btn-primary"
                >
                  <span>Enquire on Engineered Boards</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/enquiry?type=Sample+Request&family=Engineered+Boards"
                  className="btn btn-secondary"
                >
                  Request Material Samples
                </Link>
              </div>
            </div>

            <div className="product-header-img-wrap">
              <img
                src="/assets/product-engineered-boards.jpg"
                alt="High-density fiberboard and engineered wood panel core cross-section showing uniform density"
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
      <section className="section-spacing" aria-label="Product Variants">
        <div className="container">
          <div className="section-header-compact">
            <span className="section-eyebrow font-mono">PHASE 1 PORTFOLIO</span>
            <h2 className="section-title">Engineered Board Variants</h2>
            <p className="section-subtitle">
              Precision fiber cores tailored for intricate edge profiling, wet-zone cabinetry, and factory-finished decorative surfaces.
            </p>
          </div>

          <div className="variants-detail-grid">
            {/* Variant 1: MDF */}
            <div className="variant-detail-card">
              <div className="variant-card-header">
                <span className="variant-badge font-mono">BOARD 01</span>
                <h3 className="variant-title">Medium-Density Fiberboard (MDF)</h3>
              </div>
              <p className="variant-desc">
                Uniform internal composition and ultra-smooth surface texture make MDF the preferred engineered substrate for detailed router carving, architectural moldings, and premium polyurethane / duco paint finishes.
              </p>
              <div className="variant-applications-box">
                <span className="variant-box-title font-mono">SUGGESTED APPLICATIONS</span>
                <ul className="variant-app-list" role="list">
                  <li>• Detailed CNC routed wardrobe and shutter faces</li>
                  <li>• Interior moldings, cornices, and architectural trim</li>
                  <li>• Exhibition display stands and retail fixtures</li>
                  <li>• High-gloss and matte paint-finished cabinetry</li>
                </ul>
              </div>
              <div className="variant-footer-action">
                <Link
                  href="/enquiry?family=Engineered+Boards&variant=MDF"
                  className="btn btn-secondary btn-sm"
                >
                  <span>Enquire on MDF</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Variant 2: HDHMR */}
            <div className="variant-detail-card">
              <div className="variant-card-header">
                <span className="variant-badge font-mono">BOARD 02</span>
                <h3 className="variant-title">High-Density Moisture-Resistant (HDHMR)</h3>
              </div>
              <p className="variant-desc">
                Specially formulated high-density fiber panel engineered with moisture-resisting resins. Designed to endure challenging climatic humidity and wet interior zones while maintaining sharp screw-holding integrity.
              </p>
              <div className="variant-applications-box">
                <span className="variant-box-title font-mono">SUGGESTED APPLICATIONS</span>
                <ul className="variant-app-list" role="list">
                  <li>• Modular kitchen shutters, drawer boxes, and frames</li>
                  <li>• Bathroom vanity units and mirror cabinets</li>
                  <li>• High-traffic commercial office workstations</li>
                  <li>• Humid regional and coastal interior joinery</li>
                </ul>
              </div>
              <div className="variant-footer-action">
                <Link
                  href="/enquiry?family=Engineered+Boards&variant=HDHMR"
                  className="btn btn-secondary btn-sm"
                >
                  <span>Enquire on HDHMR</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Variant 3: Pre-Laminated MDF */}
            <div className="variant-detail-card">
              <div className="variant-card-header">
                <span className="variant-badge font-mono">BOARD 03</span>
                <h3 className="variant-title">Pre-Laminated MDF</h3>
              </div>
              <p className="variant-desc">
                High-density MDF boards surfaced under high pressure with decorative melamine-impregnated paper on one or both sides. Offers instant fabrication readiness with consistent decorative aesthetics and wear resistance.
              </p>
              <div className="variant-applications-box">
                <span className="variant-box-title font-mono">SUGGESTED APPLICATIONS</span>
                <ul className="variant-app-list" role="list">
                  <li>• Fast-turnaround commercial office furniture</li>
                  <li>• Modular wardrobe carcasses and internal shelving</li>
                  <li>• Educational institutions and student hostel desks</li>
                  <li>• Retail shelving and wall display panels</li>
                </ul>
              </div>
              <div className="variant-footer-action">
                <Link
                  href="/enquiry?family=Engineered+Boards&variant=Pre-Laminated+MDF"
                  className="btn btn-secondary btn-sm"
                >
                  <span>Enquire on Pre-Laminated MDF</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specification Guidance & Truthful Notice */}
      <section className="section-spacing bg-warm-ivory border-top-divider" aria-label="Specifications and Ordering">
        <div className="container">
          <div className="spec-guidance-card">
            <span className="section-eyebrow font-mono">TECHNICAL DATA &amp; AVAILABILITY</span>
            <h2 className="spec-guidance-title">Product Specifications &amp; Ordering Information</h2>
            <p className="spec-guidance-text">
              Contact NEOM Panels for current product specifications, board dimensions, thickness availabilities, and delivery lead times for containerized or truckload quantities.
            </p>
            <div className="spec-guidance-actions">
              <Link
                href="/enquiry?family=Engineered+Boards"
                className="btn btn-primary"
              >
                <span>Request Current Technical Specifications</span>
                <span aria-hidden="true">→</span>
              </Link>
              <a href="tel:+919745450618" className="btn btn-secondary font-mono">
                Call +91 97454 50618
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
