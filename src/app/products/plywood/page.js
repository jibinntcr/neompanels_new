import Link from 'next/link';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Structural & Specialty Plywood',
  description:
    'Explore Structural & Specialty Plywood options through NEOM Panels: Premium Plywood, Marine Plywood and BWR / BWP Plywood matched to interior and moisture-prone applications.',
  path: '/products/plywood'
});

export default function PlywoodFamilyPage() {
  return (
    <main id="main-content" className="product-family-view">
      {/* Header */}
      <section className="arch-page-hero arch-page-hero--forest" aria-labelledby="main-heading">
        <div className="container">
          <nav className="breadcrumb-nav breadcrumb-nav--light" aria-label="Breadcrumb">
            <ol className="breadcrumb-list" role="list">
              <li><Link href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/products">Material Categories</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Structural &amp; Specialty Plywood</li>
            </ol>
          </nav>

          <div className="product-header-grid">
            <div className="product-header-copy">
              <span className="section-eyebrow text-gold">Material Category 01 · Plywood Substrates</span>
              <h1 id="main-heading" className="page-title text-warm">
                Structural &amp; Specialty Plywood
              </h1>
              <p className="page-lead-text text-warm-muted">
                Multi-layer wood panels across dry-interior and moisture-exposed bonding grades for
                furniture manufacturing, modular joinery and commercial interior fit-outs.
              </p>
              <div className="product-header-actions">
                <Link
                  href="/enquiry?brand=Starwoods&family=Structural+%26+Specialty+Plywood"
                  className="btn btn-gold"
                >
                  <span>Enquire on Plywood</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/enquiry?type=Sample+Request&family=Structural+%26+Specialty+Plywood"
                  className="btn btn-outline-light"
                >
                  <span>Discuss a Sample Request</span>
                </Link>
              </div>
            </div>

            <div className="product-header-img-wrap">
              <img
                src="/assets/product-structural-plywood.jpg"
                alt="Multi-ply wood-panel cross-sections stacked on a neutral surface"
                className="product-hero-img"
                width="700"
                height="460"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Variants */}
      <section className="section-spacing bg-warm-ivory border-bottom-divider" aria-labelledby="variants-heading">
        <div className="container">
          <div className="corp-section-header">
            <span className="section-eyebrow">Plywood Options</span>
            <h2 id="variants-heading" className="corp-section-title">
              Matching plywood grades to exposure conditions.
            </h2>
            <p className="corp-section-subtitle">
              Bonding grade, core species and nominal thickness vary by product line and are
              confirmed against your application before supply.
            </p>
          </div>

          <div className="variants-detail-grid">
            <article className="variant-detail-card">
              <div className="variant-card-header">
                <span className="variant-badge">Option 01</span>
                <h3 className="variant-title">Premium Plywood</h3>
              </div>
              <p className="variant-desc">
                Multi-ply wood substrate intended for dry-interior furniture carcasses, wardrobes
                and architectural wall panelling.
              </p>
              <div className="variant-applications-box">
                <span className="variant-box-title">Typical Use Contexts</span>
                <ul className="variant-app-list" role="list">
                  <li>• Dry-interior residential and office furniture carcasses</li>
                  <li>• Interior wall panelling backing substrates</li>
                  <li>• Wardrobes, storage units and shelving joinery</li>
                </ul>
              </div>
              <div className="variant-footer-action">
                <Link
                  href="/enquiry?brand=Starwoods&family=Structural+%26+Specialty+Plywood&variant=Premium+Plywood"
                  className="btn btn-primary btn-sm"
                >
                  <span>Enquire on Premium Plywood</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            <article className="variant-detail-card">
              <div className="variant-card-header">
                <span className="variant-badge">Option 02</span>
                <h3 className="variant-title">Marine Plywood</h3>
              </div>
              <p className="variant-desc">
                Moisture-resistant bonded plywood option selected for elevated-humidity interiors,
                kitchen sink cabinets and coastal interior joinery.
              </p>
              <div className="variant-applications-box">
                <span className="variant-box-title">Typical Use Contexts</span>
                <ul className="variant-app-list" role="list">
                  <li>• Kitchen wet-zone and under-sink cabinetry</li>
                  <li>• Bathroom vanities and humid utility interiors</li>
                  <li>• High-humidity coastal residential and commercial fit-outs</li>
                </ul>
              </div>
              <div className="variant-footer-action">
                <Link
                  href="/enquiry?brand=Starwoods&family=Structural+%26+Specialty+Plywood&variant=Marine+Plywood"
                  className="btn btn-primary btn-sm"
                >
                  <span>Enquire on Marine Plywood</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>

            <article className="variant-detail-card">
              <div className="variant-card-header">
                <span className="variant-badge">Option 03</span>
                <h3 className="variant-title">BWR / BWP Plywood</h3>
              </div>
              <p className="variant-desc">
                Boiling Water Resistant (BWR) and Boiling Water Proof (BWP) panel grades suited to
                domestic kitchens, commercial pantries and utility partitions.
              </p>
              <div className="variant-applications-box">
                <span className="variant-box-title">Typical Use Contexts</span>
                <ul className="variant-app-list" role="list">
                  <li>• Modular kitchen carcasses and tall units</li>
                  <li>• Commercial pantry and cafeteria cabinetry</li>
                  <li>• Institutional and commercial interior partitions</li>
                </ul>
              </div>
              <div className="variant-footer-action">
                <Link
                  href="/enquiry?brand=Starwoods&family=Structural+%26+Specialty+Plywood&variant=BWR+/+BWP+Plywood"
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

      {/* Brand Routing & Category Switcher */}
      <section className="section-spacing bg-white" aria-label="Brand Routing and Category Switcher">
        <div className="container">
          <div className="spec-guidance-card">
            <span className="section-eyebrow">Related Brands &amp; Categories</span>
            <h2 className="spec-guidance-title">Looking for furniture panels or industrial packaging plywood?</h2>
            <p className="spec-guidance-text">
              Explore <strong>Starwoods</strong> for furniture and interior panel solutions, or
              visit <strong>NEOM Packing Plywood</strong> for MR packaging-grade sheets for cases
              and crates.
            </p>
            <div className="spec-guidance-actions">
              <Link href="/brands/starwoods" className="btn btn-primary">
                <span>Explore Starwoods</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/brands/neom-packing-plywood" className="btn btn-secondary">
                <span>Explore NEOM Packing Plywood</span>
              </Link>
              <Link href="/products/engineered-boards" className="btn btn-secondary">
                <span>Next: Engineered Boards →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
