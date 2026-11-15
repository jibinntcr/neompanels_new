import Link from 'next/link';

export const metadata = {
  title: 'Structural & Specialty Plywood | NEOM Panels',
  description:
    'Explore NEOM Panels Structural & Specialty Plywood: Premium Plywood, Marine Plywood, and BWR / BWP Plywood engineered for furniture manufacturing, interior joinery, and building construction.',
  alternates: {
    canonical: '/products/plywood'
  }
};

export default function PlywoodFamilyPage() {
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
              <li aria-current="page">Structural &amp; Specialty Plywood</li>
            </ol>
          </nav>

          <div className="product-header-grid">
            <div className="product-header-copy">
              <span className="section-eyebrow text-gold font-mono">PRODUCT FAMILY 01 · CORE SUBSTRATES</span>
              <h1 id="main-heading" tabIndex={-1} className="page-title text-warm">
                Structural &amp; Specialty Plywood.
              </h1>
              <p className="page-lead-text text-warm-muted">
                Multi-layer engineered wood panels built for structural stability, moisture resilience, and reliable screw-holding across furniture manufacturing, commercial interiors, and building applications.
              </p>
              <div className="product-header-actions">
                <Link
                  href="/enquiry?family=Structural+%26+Specialty+Plywood"
                  className="btn btn-gold"
                >
                  <span>Enquire on Plywood</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/enquiry?type=Sample+Request&family=Structural+%26+Specialty+Plywood"
                  className="btn btn-outline-light"
                >
                  <span>Request Material Swatches</span>
                </Link>
              </div>
            </div>

            <div className="product-header-img-wrap">
              <img
                src="/assets/product-structural-plywood.jpg"
                alt="Stacked cross-sections of calibrated structural plywood panels showing multi-ply construction"
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
            <h2 className="section-title">Plywood Variants</h2>
            <p className="section-subtitle">
              Three core plywood formulations aligned with residential joinery, wet-area cabinetry, and commercial interior fit-outs.
            </p>
          </div>

          <div className="variants-detail-grid">
            <article className="variant-detail-card">
              <div className="variant-card-header">
                <span className="variant-badge font-mono">VARIANT 01</span>
                <h3 className="variant-title">Premium Plywood</h3>
              </div>
              <p className="variant-desc">
                Multi-ply substrate designed for bespoke furniture carcasses, architectural wall linings, and custom wardrobe systems where flat pressing and clean machining matter.
              </p>
              <div className="variant-applications-box">
                <span className="variant-box-title font-mono">TYPICAL USE CONTEXTS</span>
                <ul className="variant-app-list" role="list">
                  <li>• Residential &amp; executive office furniture carcasses</li>
                  <li>• Architectural wall paneling backing substrates</li>
                  <li>• Wardrobes, storage units, and shelving joinery</li>
                  <li>• Commercial &amp; hospitality fit-out packages</li>
                </ul>
              </div>
              <div className="variant-footer-action">
                <Link
                  href="/enquiry?family=Structural+%26+Specialty+Plywood&variant=Premium+Plywood"
                  className="btn btn-primary btn-sm"
                >
                  <span>Enquire on Premium Plywood</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            <article className="variant-detail-card">
              <div className="variant-card-header">
                <span className="variant-badge font-mono">VARIANT 02</span>
                <h3 className="variant-title">Marine Plywood</h3>
              </div>
              <p className="variant-desc">
                Formulated for high-humidity interiors, wet zones, and coastal climates requiring enhanced moisture-resisting bonding and long-term core stability.
              </p>
              <div className="variant-applications-box">
                <span className="variant-box-title font-mono">TYPICAL USE CONTEXTS</span>
                <ul className="variant-app-list" role="list">
                  <li>• Modular kitchen under-sink &amp; wet-zone cabinets</li>
                  <li>• Bathroom vanities and utility rooms</li>
                  <li>• Coastal residential and hospitality interiors</li>
                  <li>• Semi-exposed architectural soffits and joinery</li>
                </ul>
              </div>
              <div className="variant-footer-action">
                <Link
                  href="/enquiry?family=Structural+%26+Specialty+Plywood&variant=Marine+Plywood"
                  className="btn btn-primary btn-sm"
                >
                  <span>Enquire on Marine Plywood</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            <article className="variant-detail-card">
              <div className="variant-card-header">
                <span className="variant-badge font-mono">VARIANT 03</span>
                <h3 className="variant-title">BWR / BWP Plywood</h3>
              </div>
              <p className="variant-desc">
                Boiling Water Resistant (BWR) and Boiling Water Proof (BWP) panel options suited for everyday domestic kitchens, commercial pantries, and institutional cabinetry.
              </p>
              <div className="variant-applications-box">
                <span className="variant-box-title font-mono">TYPICAL USE CONTEXTS</span>
                <ul className="variant-app-list" role="list">
                  <li>• Modular kitchen carcasses &amp; tall units</li>
                  <li>• Commercial pantry, cafe, and dining counters</li>
                  <li>• Institutional furniture for education &amp; healthcare</li>
                  <li>• Interior partitions and utility enclosures</li>
                </ul>
              </div>
              <div className="variant-footer-action">
                <Link
                  href="/enquiry?family=Structural+%26+Specialty+Plywood&variant=BWR+/+BWP+Plywood"
                  className="btn btn-primary btn-sm"
                >
                  <span>Enquire on BWR / BWP</span>
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
              Contact NEOM Panels for current product specifications, sheet dimensions, thickness options, and batch availability.
            </p>
            <div className="spec-guidance-actions">
              <Link href="/enquiry?family=Structural+%26+Specialty+Plywood" className="btn btn-primary">
                <span>Contact Specification Desk</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/products/engineered-boards" className="btn btn-secondary">
                <span>Next: Solid Engineered Boards →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
