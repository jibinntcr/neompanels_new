import Link from 'next/link';

export const metadata = {
  title: 'Decorative Surfaces (Veneers, Laminates & Acrylics) | NEOM Panels',
  description:
    'Explore NEOM Panels Decorative Surfaces: Veneers, Laminates, Acrylic Panels, and Charcoal Panels designed for contemporary interior architecture.',
  alternates: {
    canonical: '/products/decorative-surfaces'
  }
};

export default function DecorativeSurfacesFamilyPage() {
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
              <li aria-current="page">Decorative Surfaces</li>
            </ol>
          </nav>

          <div className="product-header-grid">
            <div className="product-header-copy">
              <span className="section-eyebrow text-gold font-mono">PRODUCT FAMILY 03 · ARCHITECTURAL FINISHES</span>
              <h1 id="main-heading" tabIndex={-1} className="page-title text-warm">
                Architectural Decorative Surfaces.
              </h1>
              <p className="page-lead-text text-warm-muted">
                Curated timber veneers, durable laminates, sleek acrylic panels, and sculpted charcoal wall profiles crafted to bring warmth and tactile depth to modern spaces.
              </p>
              <div className="product-header-actions">
                <Link href="/enquiry?family=Decorative+Surfaces" className="btn btn-gold">
                  <span>Enquire on Surfaces</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/enquiry?type=Sample+Request&family=Decorative+Surfaces"
                  className="btn btn-outline-light"
                >
                  <span>Request Material Swatches</span>
                </Link>
              </div>
            </div>

            <div className="product-header-img-wrap">
              <img
                src="/assets/product-decorative-surfaces.jpg"
                alt="Architectural wood veneers, matte acrylic surfaces, and fluted charcoal panels"
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
            <h2 className="section-title">Surface &amp; Texture Variants</h2>
            <p className="section-subtitle">
              Four distinct decorative categories designed to pair seamlessly with NEOM Panels plywood and engineered board cores.
            </p>
          </div>

          <div className="variants-detail-grid variants-detail-grid--two">
            <article className="variant-detail-card">
              <div className="variant-card-header">
                <span className="variant-badge font-mono">SURFACE 01</span>
                <h3 className="variant-title">Veneers</h3>
              </div>
              <p className="variant-desc">
                Natural and smoked architectural wood veneers showcasing authentic timber grain geometry and warm organic character when pressed over calibrated substrates.
              </p>
              <div className="variant-applications-box">
                <span className="variant-box-title font-mono">TYPICAL USE CONTEXTS</span>
                <ul className="variant-app-list" role="list">
                  <li>• Executive boardroom tables &amp; wall paneling</li>
                  <li>• Boutique hotel suites &amp; reception joinery</li>
                  <li>• Bespoke residential credenzas and wardrobes</li>
                </ul>
              </div>
              <div className="variant-footer-action">
                <Link
                  href="/enquiry?family=Decorative+Surfaces&variant=Veneers"
                  className="btn btn-primary btn-sm"
                >
                  <span>Enquire on Veneers</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            <article className="variant-detail-card">
              <div className="variant-card-header">
                <span className="variant-badge font-mono">SURFACE 02</span>
                <h3 className="variant-title">Laminates</h3>
              </div>
              <p className="variant-desc">
                Hard-wearing decorative laminate sheets offering everyday scratch and stain resistance across horizontal worktops and vertical cabinetry.
              </p>
              <div className="variant-applications-box">
                <span className="variant-box-title font-mono">TYPICAL USE CONTEXTS</span>
                <ul className="variant-app-list" role="list">
                  <li>• Commercial office desks, counters, and storage</li>
                  <li>• Modular kitchen shutters and pantry joinery</li>
                  <li>• Healthcare, retail, and educational interiors</li>
                </ul>
              </div>
              <div className="variant-footer-action">
                <Link
                  href="/enquiry?family=Decorative+Surfaces&variant=Laminates"
                  className="btn btn-primary btn-sm"
                >
                  <span>Enquire on Laminates</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            <article className="variant-detail-card">
              <div className="variant-card-header">
                <span className="variant-badge font-mono">SURFACE 03</span>
                <h3 className="variant-title">Acrylic Panels</h3>
              </div>
              <p className="variant-desc">
                Contemporary high-gloss mirror and soft-touch matte acrylic surfaces delivering crisp reflection and clean lines to minimalist cabinetry.
              </p>
              <div className="variant-applications-box">
                <span className="variant-box-title font-mono">TYPICAL USE CONTEXTS</span>
                <ul className="variant-app-list" role="list">
                  <li>• Handle-less modular kitchen cabinetry</li>
                  <li>• Contemporary sliding wardrobe doors</li>
                  <li>• Retail display units and vanity fronts</li>
                </ul>
              </div>
              <div className="variant-footer-action">
                <Link
                  href="/enquiry?family=Decorative+Surfaces&variant=Acrylic+Panels"
                  className="btn btn-primary btn-sm"
                >
                  <span>Enquire on Acrylic Panels</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            <article className="variant-detail-card">
              <div className="variant-card-header">
                <span className="variant-badge font-mono">SURFACE 04</span>
                <h3 className="variant-title">Charcoal Panels</h3>
              </div>
              <p className="variant-desc">
                Three-dimensional linear fluted and reeded decorative panels creating architectural shadow play and focal relief on interior feature walls.
              </p>
              <div className="variant-applications-box">
                <span className="variant-box-title font-mono">TYPICAL USE CONTEXTS</span>
                <ul className="variant-app-list" role="list">
                  <li>• Reception backdrops and elevator lobbies</li>
                  <li>• Living room media walls and lounge accents</li>
                  <li>• Hospitality dining and bar feature cladding</li>
                </ul>
              </div>
              <div className="variant-footer-action">
                <Link
                  href="/enquiry?family=Decorative+Surfaces&variant=Charcoal+Panels"
                  className="btn btn-primary btn-sm"
                >
                  <span>Enquire on Charcoal Panels</span>
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
            <h2 className="spec-guidance-title">Current Specifications &amp; Swatch Enquiries</h2>
            <p className="spec-guidance-text">
              Contact NEOM Panels for current decor availability, sheet dimensions, and sample swatch coordination.
            </p>
            <div className="spec-guidance-actions">
              <Link href="/enquiry?family=Decorative+Surfaces" className="btn btn-primary">
                <span>Contact Specification Desk</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/products" className="btn btn-secondary">
                <span>← Back to Complete Portfolio</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
