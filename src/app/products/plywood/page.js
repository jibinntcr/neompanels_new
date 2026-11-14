import Link from 'next/link';

export const metadata = {
  title: 'Structural & Specialty Plywood | NEOM Panels',
  description:
    'Explore NEOM Panels Structural & Specialty Plywood portfolio: Premium Plywood, Marine Plywood, and BWR / BWP Plywood engineered for furniture manufacturing, interior joinery, and building construction.',
  alternates: {
    canonical: '/products/plywood'
  }
};

export default function PlywoodFamilyPage() {
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
              <li aria-current="page">Structural &amp; Specialty Plywood</li>
            </ol>
          </nav>

          <div className="product-header-grid">
            <div className="product-header-copy">
              <span className="section-eyebrow font-mono">PRODUCT FAMILY 01</span>
              <h1 className="page-title">Structural &amp; Specialty Plywood</h1>
              <p className="page-lead-text">
                Multi-layer engineered timber panels built for structural strength, moisture resistance, and dimensional stability across furniture manufacturing, commercial interiors, and building construction.
              </p>
              <div className="product-header-actions">
                <Link
                  href="/enquiry?family=Structural+%26+Specialty+Plywood"
                  className="btn btn-primary"
                >
                  <span>Enquire on Plywood</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/enquiry?type=Sample+Request&family=Structural+%26+Specialty+Plywood"
                  className="btn btn-secondary"
                >
                  Request Material Samples
                </Link>
              </div>
            </div>

            <div className="product-header-img-wrap">
              <img
                src="/assets/product-structural-plywood.jpg"
                alt="Stacked cross-sections of calibrated structural plywood panels showing solid multi-ply construction"
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
            <h2 className="section-title">Engineered Plywood Variants</h2>
            <p className="section-subtitle">
              Three distinct formulations engineered for specific application demands, moisture exposures, and structural loads.
            </p>
          </div>

          <div className="variants-detail-grid">
            {/* Variant 1: Premium Plywood */}
            <div className="variant-detail-card">
              <div className="variant-card-header">
                <span className="variant-badge font-mono">SUBSTRATE 01</span>
                <h3 className="variant-title">Premium Plywood</h3>
              </div>
              <p className="variant-desc">
                High-calibre structural plywood manufactured for high-end furniture manufacturing, architectural joinery, and custom wardrobe carcasses where thickness consistency and structural integrity are paramount.
              </p>
              <div className="variant-applications-box">
                <span className="variant-box-title font-mono">SUGGESTED APPLICATIONS</span>
                <ul className="variant-app-list" role="list">
                  <li>• Bespoke residential &amp; office furniture carcasses</li>
                  <li>• Architectural wall paneling substrates</li>
                  <li>• Wardrobes, credenzas, and shelving joinery</li>
                  <li>• Commercial interior fit-outs</li>
                </ul>
              </div>
              <div className="variant-footer-action">
                <Link
                  href="/enquiry?family=Structural+%26+Specialty+Plywood&variant=Premium+Plywood"
                  className="btn btn-secondary btn-sm"
                >
                  <span>Enquire on Premium Plywood</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Variant 2: Marine Plywood */}
            <div className="variant-detail-card">
              <div className="variant-card-header">
                <span className="variant-badge font-mono">SUBSTRATE 02</span>
                <h3 className="variant-title">Marine Plywood</h3>
              </div>
              <p className="variant-desc">
                Engineered specifically for elevated moisture conditions, high-humidity environments, and exterior-facing installations. Formulated with water-resistant resin bonding to ensure long-term stability without core delamination.
              </p>
              <div className="variant-applications-box">
                <span className="variant-box-title font-mono">SUGGESTED APPLICATIONS</span>
                <ul className="variant-app-list" role="list">
                  <li>• Modular kitchen under-sink and wet zones</li>
                  <li>• Bathroom vanities and laundry storage</li>
                  <li>• Coastal and high-humidity regional projects</li>
                  <li>• Covered exterior and semi-exposed joinery</li>
                </ul>
              </div>
              <div className="variant-footer-action">
                <Link
                  href="/enquiry?family=Structural+%26+Specialty+Plywood&variant=Marine+Plywood"
                  className="btn btn-secondary btn-sm"
                >
                  <span>Enquire on Marine Plywood</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Variant 3: BWR / BWP Plywood */}
            <div className="variant-detail-card">
              <div className="variant-card-header">
                <span className="variant-badge font-mono">SUBSTRATE 03</span>
                <h3 className="variant-title">BWR / BWP Plywood</h3>
              </div>
              <p className="variant-desc">
                Boiling Water Resistant (BWR) and Boiling Water Proof (BWP) panel grades designed for versatile domestic and commercial applications requiring dependable resistance against water splashing, ambient moisture, and weather variations.
              </p>
              <div className="variant-applications-box">
                <span className="variant-box-title font-mono">SUGGESTED APPLICATIONS</span>
                <ul className="variant-app-list" role="list">
                  <li>• Modular kitchen cabinetry and carcass frames</li>
                  <li>• Commercial pantry and dining joinery</li>
                  <li>• Institutional furniture for schools &amp; healthcare</li>
                  <li>• Demountable office partitions</li>
                </ul>
              </div>
              <div className="variant-footer-action">
                <Link
                  href="/enquiry?family=Structural+%26+Specialty+Plywood&variant=BWR+/+BWP+Plywood"
                  className="btn btn-secondary btn-sm"
                >
                  <span>Enquire on BWR / BWP</span>
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
              Panel dimensions, thickness ranges, palletization standards, and lead times vary by production run and project volume. Contact the NEOM Panels specification desk for current technical data sheets and delivery schedules.
            </p>
            <div className="spec-guidance-actions">
              <Link
                href="/enquiry?family=Structural+%26+Specialty+Plywood"
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
