import Link from 'next/link';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Engineered Boards (MDF & HDHMR)',
  description:
    'Supporting information on Engineered Boards under Starwoods and NEOM Panels—covering MDF, HDHMR and Pre-Laminated MDF options where available in the current range.',
  path: '/products/engineered-boards'
});

export default function EngineeredBoardsFamilyPage() {
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
              <li aria-current="page">Engineered Boards</li>
            </ol>
          </nav>

          <div className="product-header-grid">
            <div className="product-header-copy">
              <span className="section-eyebrow text-gold">Starwoods Category · Wood-Fibre Boards</span>
              <h1 id="main-heading" className="page-title text-warm">
                Engineered Boards
              </h1>
              <p className="page-lead-text text-warm-muted">
                Engineered wood-fibre boards—including MDF and HDHMR where available in the current
                Starwoods range. Because density and moisture resistance differ by board type, each
                application is matched carefully with our team.
              </p>
              <div className="product-header-actions">
                <Link href="/enquiry?brand=Starwoods&family=Engineered+Boards" className="btn btn-gold">
                  <span>Enquire on Engineered Boards</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/enquiry?type=Sample+Request&family=Engineered+Boards"
                  className="btn btn-outline-light"
                >
                  <span>Submit a Sample Request</span>
                </Link>
              </div>
            </div>

            <div className="product-header-img-wrap">
              <img
                src="/assets/product-engineered-boards.jpg"
                alt="Plain MDF and moisture-resistant HDHMR engineered board cross-sections"
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
      <section className="section-spacing bg-warm-ivory border-bottom-divider" aria-labelledby="board-variants-heading">
        <div className="container">
          <div className="corp-section-header">
            <span className="section-eyebrow">Engineered Board Types</span>
            <h2 id="board-variants-heading" className="corp-section-title">
              Understanding MDF, HDHMR and Pre-Laminated MDF.
            </h2>
            <p className="corp-section-subtitle">
              Engineered boards are wood-fibre panels, not solid timber, and different grades serve
              different exposure levels. Confirm current availability and product specifications
              with our team before ordering.
            </p>
          </div>

          <div className="variants-detail-grid">
            <article className="variant-detail-card">
              <div className="variant-card-header">
                <span className="variant-badge">Board Type 01</span>
                <h3 className="variant-title">Medium-Density Fiberboard (MDF)</h3>
              </div>
              <p className="variant-desc">
                Smooth wood-fibre board intended strictly for dry-interior applications such as
                routed shutter profiles, trims and painted dry-zone furniture. Not suitable for wet
                or damp locations.
              </p>
              <div className="variant-applications-box">
                <span className="variant-box-title">Typical Dry-Interior Uses</span>
                <ul className="variant-app-list" role="list">
                  <li>• Dry-interior routed wardrobe and cabinet shutters</li>
                  <li>• Interior wall mouldings and decorative trims</li>
                  <li>• Retail displays and painted dry-zone furniture</li>
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
                <span className="variant-badge">Board Type 02</span>
                <h3 className="variant-title">HDHMR Engineered Board</h3>
              </div>
              <p className="variant-desc">
                Higher-density engineered fibreboard formulated for improved moisture resistance
                compared with standard MDF, where available in the current range. Suitability for
                specific humid zones should be reviewed against site conditions and edge sealing.
              </p>
              <div className="variant-applications-box">
                <span className="variant-box-title">Typical Application Discussions</span>
                <ul className="variant-app-list" role="list">
                  <li>• Shutters, drawers and cabinetry requiring higher screw holding</li>
                  <li>• Interior zones exposed to moderate ambient humidity when properly sealed</li>
                  <li>• Commercial workstations and modular furniture components</li>
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
                <span className="variant-badge">Board Type 03</span>
                <h3 className="variant-title">Pre-Laminated MDF</h3>
              </div>
              <p className="variant-desc">
                Factory-surfaced decorative MDF boards discussed for dry-interior modular shelving,
                wardrobe internals and office storage where available in the current range.
              </p>
              <div className="variant-applications-box">
                <span className="variant-box-title">Typical Dry-Interior Uses</span>
                <ul className="variant-app-list" role="list">
                  <li>• Dry-interior office pedestals and modular storage</li>
                  <li>• Wardrobe internals, shelves and dividers</li>
                  <li>• Commercial and institutional dry-zone furniture</li>
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

      {/* Specification & Category Switcher */}
      <section className="section-spacing bg-white" aria-label="Specifications and Other Categories">
        <div className="container">
          <div className="spec-guidance-card">
            <span className="section-eyebrow">Specifications &amp; Availability</span>
            <h2 className="spec-guidance-title">Confirm board availability and specifications.</h2>
            <p className="spec-guidance-text">
              Contact NEOM Panels to confirm available nominal thicknesses, sheet formats,
              manufacturing or sourcing scope and relevant specifications for your requirement.
            </p>
            <div className="spec-guidance-actions">
              <Link href="/enquiry?family=Engineered+Boards" className="btn btn-primary">
                <span>Business Enquiry</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/brands/starwoods" className="btn btn-secondary">
                <span>Explore Starwoods</span>
              </Link>
              <Link href="/products/plywood" className="btn btn-secondary">
                <span>View Plywood Category →</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
