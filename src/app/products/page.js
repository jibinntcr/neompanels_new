import Link from 'next/link';
import { PORTFOLIO_BRANDS } from '@/lib/portfolio-data';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Material Categories',
  description:
    'Supporting material-category information for NEOM Panels and Starwoods: Structural & Specialty Plywood and Engineered Boards (including MDF and HDHMR where available).',
  path: '/products'
});

export default function ProductsPage() {
  return (
    <main id="main-content" className="page-view">
      {/* Page Header */}
      <section className="page-header-dark" aria-labelledby="main-heading">
        <div className="container page-header-inner">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-sep" aria-hidden="true">/</span>
            <Link href="/brands" className="breadcrumb-link">Our Brands</Link>
            <span className="breadcrumb-sep" aria-hidden="true">/</span>
            <span className="breadcrumb-current">Material Categories</span>
          </nav>

          <span className="section-eyebrow text-gold">Supporting Material Reference</span>
          <h1 id="main-heading" className="page-hero-title text-warm">
            Plywood and engineered-board categories.
          </h1>
          <p className="page-hero-lead text-warm-muted">
            Review supporting category information for <strong>Starwoods</strong>—covering plywood
            and engineered boards. For industrial packaging sheets, explore{' '}
            <Link href="/brands/neom-packing-plywood" style={{ color: '#D2B683', textDecoration: 'underline' }}>
              NEOM Packing Plywood
            </Link>
            .
          </p>
          <div className="page-header-cta-row" style={{ marginTop: '1.75rem' }}>
            <Link href="/brands" className="btn btn-gold">
              <span>Explore Our Brands</span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/enquiry?type=Sample+Request" className="btn btn-outline-light">
              <span>Submit a Sample Request</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Two Confirmed Material Category Blocks */}
      <section className="section-spacing bg-white border-bottom-divider" aria-label="Material Categories">
        <div className="container">
          <div className="portfolio-family-blocks">
            {/* Category 1: Structural & Specialty Plywood */}
            <article className="portfolio-block" id="family-plywood">
              <div className="portfolio-block-grid">
                <div className="portfolio-block-img-wrap">
                  <img
                    src="/assets/product-structural-plywood.jpg"
                    alt="Multi-ply wood-panel cross-sections stacked on a studio surface"
                    className="portfolio-block-img"
                    width="700"
                    height="480"
                    loading="eager"
                  />
                </div>

                <div className="portfolio-block-copy">
                  <span className="section-eyebrow">Starwoods Category 01 · Plywood</span>
                  <h2 className="portfolio-title">Structural &amp; Specialty Plywood</h2>
                  <p className="portfolio-desc">
                    Multi-layer wood panels across dry-interior and moisture-exposed bonding grades
                    for furniture carcasses, modular joinery and interior fit-outs. Specific grade
                    availability, core construction and nominal thickness are matched to your
                    application when you enquire.
                  </p>

                  <div className="portfolio-variants-card">
                    <h3 className="portfolio-variants-heading">Plywood Grade Contexts</h3>
                    <ul className="portfolio-variants-list" role="list">
                      <li>
                        <strong>Premium Plywood:</strong> Multi-ply substrate discussed for
                        dry-interior furniture carcasses, wardrobes and general interior joinery.
                      </li>
                      <li>
                        <strong>Marine Plywood:</strong> Moisture-resistant bonded plywood option
                        reviewed for higher-humidity interior zones where available.
                      </li>
                      <li>
                        <strong>BWR / BWP Plywood:</strong> Boiling Water Resistant and Boiling
                        Water Proof grades selected according to actual humidity exposure and
                        current availability.
                      </li>
                    </ul>
                  </div>

                  <div className="portfolio-specs-notice">
                    Available grades, nominal thicknesses and specification sheets are confirmed per
                    enquiry.
                  </div>

                  <div className="portfolio-actions-row">
                    <Link href="/products/plywood" className="btn btn-primary">
                      <span>View Plywood Category</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                    <Link
                      href="/enquiry?brand=Starwoods&family=Structural+%26+Specialty+Plywood"
                      className="btn btn-secondary"
                    >
                      <span>Enquire on Plywood</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Category 2: Engineered Boards */}
            <article className="portfolio-block" id="family-boards">
              <div className="portfolio-block-grid portfolio-block-grid--reverse">
                <div className="portfolio-block-copy">
                  <span className="section-eyebrow">Starwoods Category 02 · Wood-Fibre Boards</span>
                  <h2 className="portfolio-title">Engineered Boards</h2>
                  <p className="portfolio-desc">
                    Engineered wood-fibre panels—including MDF and HDHMR where available in the
                    current Starwoods range. Each board type has distinct density and moisture
                    limits, so suitability is reviewed against the actual application rather than
                    assumed across all boards.
                  </p>

                  <div className="portfolio-variants-card">
                    <h3 className="portfolio-variants-heading">Engineered Board Types</h3>
                    <ul className="portfolio-variants-list" role="list">
                      <li>
                        <strong>Medium-Density Fiberboard (MDF):</strong> Smooth wood-fibre board
                        for dry-interior CNC routing, trims and painted shutters (not for wet zones).
                      </li>
                      <li>
                        <strong>HDHMR Boards:</strong> Higher-density moisture-resistant fibreboard
                        option discussed where improved humidity resistance is needed and available
                        in the current range.
                      </li>
                      <li>
                        <strong>Pre-Laminated MDF:</strong> Factory-surfaced MDF boards for
                        dry-interior shelving, storage internals and office furniture where
                        available.
                      </li>
                    </ul>
                  </div>

                  <div className="portfolio-specs-notice">
                    Board density, moisture class, manufacturing or sourcing scope and sheet formats
                    are confirmed per product line upon enquiry.
                  </div>

                  <div className="portfolio-actions-row">
                    <Link href="/products/engineered-boards" className="btn btn-primary">
                      <span>View Engineered Boards</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                    <Link
                      href="/enquiry?brand=Starwoods&family=Engineered+Boards"
                      className="btn btn-secondary"
                    >
                      <span>Enquire on Engineered Boards</span>
                    </Link>
                  </div>
                </div>

                <div className="portfolio-block-img-wrap">
                  <img
                    src="/assets/product-engineered-boards.jpg"
                    alt="Plain MDF and moisture-resistant HDHMR engineered fibreboard samples"
                    className="portfolio-block-img"
                    width="700"
                    height="480"
                    loading="lazy"
                  />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Connect Categories Back to Active Brands */}
      <section className="section-spacing bg-warm-ivory" aria-labelledby="brands-connection-heading">
        <div className="container">
          <div className="corp-section-header">
            <span className="section-eyebrow">Our Active Brands</span>
            <h2 id="brands-connection-heading" className="corp-section-title">
              Connect through Starwoods or NEOM Packing Plywood.
            </h2>
          </div>

          <div className="brand-portfolio-grid brand-portfolio-grid--two">
            {PORTFOLIO_BRANDS.map((brand) => (
              <article key={brand.id} className="corp-audience-card">
                <h3 className="corp-audience-card__title">{brand.name}</h3>
                <p className="corp-audience-card__summary">{brand.descriptor} {brand.homeCopy}</p>
                <Link href={brand.href} className="corp-text-link">
                  <span>{brand.actionLabel}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
