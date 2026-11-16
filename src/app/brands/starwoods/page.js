import Link from 'next/link';
import BrandMarkPlaque from '@/components/BrandMarkPlaque';
import { getBrandBySlug } from '@/lib/portfolio-data';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Starwoods — Plywood and Engineered Boards',
  description:
    'Starwoods is an active brand of NEOM Panels offering plywood and engineered-board options, including MDF and HDHMR where available in the current range.',
  path: '/brands/starwoods'
});

const STARWOODS_CATEGORIES = [
  {
    title: 'Plywood',
    detail:
      'Multi-ply wood panels across dry-interior and moisture-exposed grades. Specific bonding grade, core construction and nominal thickness are matched to the intended application.',
    href: '/products/plywood',
    linkLabel: 'View Plywood Information'
  },
  {
    title: 'Engineered Boards',
    detail:
      'Engineered wood-fibre boards—including MDF for dry-interior machining and HDHMR where improved moisture resistance is required and available in the current range.',
    href: '/products/engineered-boards',
    linkLabel: 'View Engineered Boards Information'
  }
];

const REQUIREMENT_CHECKLIST = [
  'Intended application and operating environment (for example dry-interior furniture, cabinetry or higher-humidity interior zones)',
  'Category of interest (plywood or engineered boards such as MDF or HDHMR) and nominal thickness in mm',
  'Approximate sheet quantity and whether the requirement is one-time or recurring',
  'Delivery location so our team can share current availability and relevant product information'
];

export default function StarwoodsBrandPage() {
  const brand = getBrandBySlug('starwoods');

  return (
    <main id="main-content">
      {/* Brand Header */}
      <section className="page-header-dark" aria-labelledby="main-heading">
        <div className="container page-header-inner">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-sep" aria-hidden="true">/</span>
            <Link href="/brands" className="breadcrumb-link">Our Brands</Link>
            <span className="breadcrumb-sep" aria-hidden="true">/</span>
            <span className="breadcrumb-current">Starwoods</span>
          </nav>

          <BrandMarkPlaque brand={brand} size="lg" />
          <span className="section-eyebrow text-gold">Active Brand of NEOM Panels</span>
          <h1 id="main-heading" className="page-hero-title text-warm">
            Starwoods
          </h1>
          <p className="page-hero-lead text-warm-muted">
            Plywood and engineered boards—backed by NEOM Panels’ material guidance, clear
            communication and accountable customer support.
          </p>
          <div className="page-header-cta-row" style={{ marginTop: '1.75rem' }}>
            <Link href={brand.enquiryHref} className="btn btn-gold btn-lg">
              <span>Enquire About Starwoods</span>
            </Link>
            <Link href="/brands" className="btn btn-outline-light btn-lg">
              <span>Our Brands</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Overview */}
      <section className="section-spacing bg-white border-bottom-divider" aria-labelledby="overview-heading">
        <div className="container">
          <div className="corp-split-section">
            <div className="corp-split-section__copy">
              <span className="section-eyebrow">Brand Scope</span>
              <h2 id="overview-heading" className="corp-section-title">
                Plywood and engineered-board options for business buyers.
              </h2>
              <p className="corp-body-text">
                {brand.homeCopy}
              </p>
              <p className="corp-body-text corp-body-text--secondary">
                Different boards carry different density, machining and moisture characteristics.
                Rather than making blanket performance claims across every board, our team helps
                dealers, builders, interior contractors, furniture manufacturers and institutional
                buyers identify the specific grade and product information suited to their job.
              </p>
            </div>

            <figure className="corp-split-section__media">
              <div className="corp-split-section__frame">
                <img
                  src={brand.image}
                  alt={brand.imageAlt}
                  width="960"
                  height="640"
                  loading="lazy"
                  className="corp-split-section__img"
                />
              </div>
              <figcaption className="corp-media-caption">{brand.imageCaption}</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Confirmed Categories */}
      <section className="section-spacing bg-warm-ivory border-bottom-divider" aria-labelledby="contexts-heading">
        <div className="container">
          <div className="corp-section-header">
            <span className="section-eyebrow">Product Scope</span>
            <h2 id="contexts-heading" className="corp-section-title">
              Confirmed categories under Starwoods.
            </h2>
          </div>

          <div className="brand-portfolio-grid brand-portfolio-grid--two">
            {STARWOODS_CATEGORIES.map((cat) => (
              <article key={cat.title} className="corp-audience-card">
                <h3 className="corp-audience-card__title">{cat.title}</h3>
                <p className="corp-audience-card__summary">{cat.detail}</p>
                <Link href={cat.href} className="corp-text-link">
                  <span>{cat.linkLabel}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quotation & Requirement Checklist */}
      <section className="section-spacing bg-white" aria-labelledby="checklist-heading">
        <div className="container">
          <div className="corp-split-section">
            <div>
              <span className="section-eyebrow">Preparing Your Enquiry</span>
              <h2 id="checklist-heading" className="corp-section-title">
                What to share when discussing Starwoods.
              </h2>
              <p className="corp-body-text corp-body-text--secondary">
                Board variants, nominal thicknesses, sheet dimensions and manufacturing or sourcing
                details vary by product line. Sharing these points helps us give you relevant
                information:
              </p>
              <ul className="brand-highlight-list">
                {REQUIREMENT_CHECKLIST.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href={brand.enquiryHref} className="btn btn-primary btn-lg">
                <span>Enquire About Starwoods</span>
              </Link>
            </div>

            <div className="resp-pillar-card" style={{ backgroundColor: 'var(--color-warm-ivory)' }}>
              <span className="section-eyebrow">Company Behind the Brand</span>
              <h3 className="brand-card__title">NEOM Panels</h3>
              <p className="corp-body-text corp-body-text--secondary" style={{ marginBottom: '0.85rem' }}>
                NEOM Panels is the Indian panel manufacturing company behind Starwoods—combining our
                manufacturing foundation with clear communication and continuing support after the
                sale.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem' }}>
                <Link href="/about" className="corp-text-link">
                  <span>About NEOM Panels</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <Link href="/manufacturing" className="corp-text-link">
                  <span>Explore Manufacturing</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
