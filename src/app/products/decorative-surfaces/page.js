import Link from 'next/link';

export const metadata = {
  title: 'Decorative Surfaces (Veneers, Laminates & Acrylics) | NEOM Panels',
  description:
    'Explore NEOM Panels Decorative Surfaces: Architectural Natural Veneers, High-Pressure Laminates (HPL), Acrylic Panels, and Charcoal Fluted Panels designed for bespoke interiors.',
  alternates: {
    canonical: '/products/decorative-surfaces'
  }
};

export default function DecorativeSurfacesFamilyPage() {
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
              <li aria-current="page">Decorative Surfaces</li>
            </ol>
          </nav>

          <div className="product-header-grid">
            <div className="product-header-copy">
              <span className="section-eyebrow font-mono">PRODUCT FAMILY 03</span>
              <h1 className="page-title">Architectural Decorative Surfaces</h1>
              <p className="page-lead-text">
                Refined tactile materials, natural timber veneers, durable high-pressure laminates, and textured wall panels engineered to elevate interior architecture and commercial cabinetry.
              </p>
              <div className="product-header-actions">
                <Link
                  href="/enquiry?family=Decorative+Surfaces"
                  className="btn btn-primary"
                >
                  <span>Enquire on Surfaces</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/enquiry?type=Sample+Request&family=Decorative+Surfaces"
                  className="btn btn-secondary"
                >
                  Request Material Swatches
                </Link>
              </div>
            </div>

            <div className="product-header-img-wrap">
              <img
                src="/assets/product-decorative-surfaces.jpg"
                alt="Architectural wood veneers, acrylic surfaces, and fluted charcoal panels"
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
            <h2 className="section-title">Surface &amp; Texture Variants</h2>
            <p className="section-subtitle">
              Four architectural surface categories combining natural organic warmth with contemporary industrial durability.
            </p>
          </div>

          <div className="variants-detail-grid">
            {/* Variant 1: Veneers */}
            <div className="variant-detail-card">
              <div className="variant-card-header">
                <span className="variant-badge font-mono">SURFACE 01</span>
                <h3 className="variant-title">Architectural Natural &amp; Smoked Veneers</h3>
              </div>
              <p className="variant-desc">
                Finely sliced natural timber veneers sourced to showcase authentic grain geometry, warm wood tones, and organic beauty. Perfectly suited for hot-press bonding onto calibrated plywood and MDF substrates.
              </p>
              <div className="variant-applications-box">
                <span className="variant-box-title font-mono">SUGGESTED APPLICATIONS</span>
                <ul className="variant-app-list" role="list">
                  <li>• Executive boardroom tables and feature paneling</li>
                  <li>• High-end residential wall claddings &amp; ceiling baffles</li>
                  <li>• Custom bespoke furniture and boutique millwork</li>
                  <li>• Luxury hospitality guestroom headboards</li>
                </ul>
              </div>
              <div className="variant-footer-action">
                <Link
                  href="/enquiry?family=Decorative+Surfaces&variant=Veneers"
                  className="btn btn-secondary btn-sm"
                >
                  <span>Enquire on Veneers</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Variant 2: Laminates */}
            <div className="variant-detail-card">
              <div className="variant-card-header">
                <span className="variant-badge font-mono">SURFACE 02</span>
                <h3 className="variant-title">High-Pressure Laminates (HPL)</h3>
              </div>
              <p className="variant-desc">
                Robust decorative surfacing sheets crafted from multiple kraft paper layers impregnated with thermosetting resins. Delivers outstanding surface resistance against scratches, impacts, and daily commercial cleaning.
              </p>
              <div className="variant-applications-box">
                <span className="variant-box-title font-mono">SUGGESTED APPLICATIONS</span>
                <ul className="variant-app-list" role="list">
                  <li>• High-traffic commercial office worktops &amp; desks</li>
                  <li>• Modular kitchen and pantry shutters</li>
                  <li>• Educational institution tabletops &amp; storage</li>
                  <li>• Healthcare and retail display counters</li>
                </ul>
              </div>
              <div className="variant-footer-action">
                <Link
                  href="/enquiry?family=Decorative+Surfaces&variant=Laminates"
                  className="btn btn-secondary btn-sm"
                >
                  <span>Enquire on Laminates</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Variant 3: Acrylic Panels */}
            <div className="variant-detail-card">
              <div className="variant-card-header">
                <span className="variant-badge font-mono">SURFACE 03</span>
                <h3 className="variant-title">Acrylic Panels</h3>
              </div>
              <p className="variant-desc">
                High-clarity acrylic sheets fused over calibrated solid cores to achieve a glass-like mirror gloss or refined anti-fingerprint silky matte finish. Non-yellowing and moisture-tolerant for modern minimalist cabinetry.
              </p>
              <div className="variant-applications-box">
                <span className="variant-box-title font-mono">SUGGESTED APPLICATIONS</span>
                <ul className="variant-app-list" role="list">
                  <li>• Handle-less modular kitchen upper &amp; lower shutters</li>
                  <li>• Luxury wardrobe sliding doors</li>
                  <li>• Vanity cabinets and retail cosmetic showcases</li>
                  <li>• Contemporary reception desk facias</li>
                </ul>
              </div>
              <div className="variant-footer-action">
                <Link
                  href="/enquiry?family=Decorative+Surfaces&variant=Acrylic+Panels"
                  className="btn btn-secondary btn-sm"
                >
                  <span>Enquire on Acrylic Panels</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Variant 4: Charcoal Panels */}
            <div className="variant-detail-card">
              <div className="variant-card-header">
                <span className="variant-badge font-mono">SURFACE 04</span>
                <h3 className="variant-title">Charcoal &amp; Fluted Wall Panels</h3>
              </div>
              <p className="variant-desc">
                Three-dimensional linear fluted and reeded panels manufactured with high-density polymer and charcoal composites. Provides acoustic damping and sculpted visual rhythm for accent interior feature walls.
              </p>
              <div className="variant-applications-box">
                <span className="variant-box-title font-mono">SUGGESTED APPLICATIONS</span>
                <ul className="variant-app-list" role="list">
                  <li>• TV accent walls and living lounge feature surfaces</li>
                  <li>• Commercial reception and elevator lobby surrounds</li>
                  <li>• Restaurant, cafe, and hospitality bar claddings</li>
                  <li>• Architectural column wraps and corridor accents</li>
                </ul>
              </div>
              <div className="variant-footer-action">
                <Link
                  href="/enquiry?family=Decorative+Surfaces&variant=Charcoal+Panels"
                  className="btn btn-secondary btn-sm"
                >
                  <span>Enquire on Charcoal Panels</span>
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
            <h2 className="spec-guidance-title">Surface Samples &amp; Specification Support</h2>
            <p className="spec-guidance-text">
              Material swatch samples, texture folders, and application guidelines are available for registered architects, interior designers, and institutional specifiers. Contact NEOM Panels to request sample literature.
            </p>
            <div className="spec-guidance-actions">
              <Link
                href="/enquiry?type=Sample+Request&family=Decorative+Surfaces"
                className="btn btn-primary"
              >
                <span>Request Surface Samples</span>
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
