import Link from 'next/link';
import BrandMarkPlaque from '@/components/BrandMarkPlaque';
import { getBrandBySlug } from '@/lib/portfolio-data';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'NEOM Packing Plywood — Industrial Packaging Plywood',
  description:
    'NEOM Packing Plywood is an active brand of NEOM Panels supplying plywood for industrial packaging requirements, guided by intended application and available specifications.',
  path: '/brands/neom-packing-plywood'
});

const PACKAGING_USES = [
  {
    title: 'Packing Cases',
    detail:
      'Plywood sheets discussed for fabricated packing cases used to enclose machinery, components and consolidated industrial goods.'
  },
  {
    title: 'Crates & Protective Enclosures',
    detail:
      'Side panels, top sheathing and protective enclosures for timber-framed industrial crates and covered warehouse storage.'
  },
  {
    title: 'Dividers, Liners & Packaging Panels',
    detail:
      'Internal partition boards, pallet layer pads and protective liners sized for industrial dispatch and material handling.'
  }
];

const PACKAGING_CHECKLIST = [
  'Intended packaging application (packing cases, crates/enclosures, dividers or protective liners)',
  'Required nominal sheet thickness and standard or custom panel dimensions',
  'Approximate quantity and schedule (single order or recurring requirement)',
  'Expected storage and handling conditions (note: MR packaging plywood resists indoor/covered humidity and is not waterproof or automatically certified for export treatment unless specifically agreed)'
];

export default function NeomPackingPlywoodPage() {
  const brand = getBrandBySlug('neom-packing-plywood');

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
            <span className="breadcrumb-current">NEOM Packing Plywood</span>
          </nav>

          <BrandMarkPlaque brand={brand} size="lg" />
          <span className="section-eyebrow text-gold">Active Brand of NEOM Panels</span>
          <h1 id="main-heading" className="page-hero-title text-warm">
            NEOM Packing Plywood
          </h1>
          <p className="page-hero-lead text-warm-muted">
            Plywood for industrial packaging requirements—with product selection guided by the
            intended application and available specifications.
          </p>
          <div className="page-header-cta-row" style={{ marginTop: '1.75rem' }}>
            <Link href={brand.enquiryHref} className="btn btn-gold btn-lg">
              <span>Enquire About NEOM Packing Plywood</span>
            </Link>
            <Link href="/brands" className="btn btn-outline-light btn-lg">
              <span>Our Brands</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Overview */}
      <section className="section-spacing bg-white border-bottom-divider" aria-labelledby="packing-overview-heading">
        <div className="container">
          <div className="corp-split-section">
            <div className="corp-split-section__copy">
              <span className="section-eyebrow">Industrial Packaging Brand</span>
              <h2 id="packing-overview-heading" className="corp-section-title">
                Practical packaging-grade plywood guided by your application.
              </h2>
              <p className="corp-body-text">
                {brand.homeCopy}
              </p>
              <p className="corp-body-text corp-body-text--secondary">
                NEOM Packing Plywood offers moisture-resistant (MR) packaging-grade plywood for
                industrial packaging businesses, crate fabricators and factory dispatch teams.
                Because packaging requirements vary widely by cargo geometry, handling conditions
                and destination rules, our team reviews available sheet thicknesses and product
                specifications directly against your brief without making blanket load or export-treatment claims.
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

      {/* 3 Industrial Packaging Applications */}
      <section className="section-spacing bg-warm-ivory border-bottom-divider" aria-labelledby="uses-heading">
        <div className="container">
          <div className="corp-section-header">
            <span className="section-eyebrow">Packaging Applications</span>
            <h2 id="uses-heading" className="corp-section-title">
              Common industrial packaging uses.
            </h2>
          </div>

          <div className="corp-priority-grid">
            {PACKAGING_USES.map((use) => (
              <article key={use.title} className="corp-priority-card">
                <h3 className="corp-priority-card__title">{use.title}</h3>
                <p className="corp-priority-card__detail">{use.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Quotation Checklist */}
      <section className="section-spacing bg-white" aria-labelledby="packing-checklist-heading">
        <div className="container">
          <div className="corp-split-section">
            <div>
              <span className="section-eyebrow">Quotation Details</span>
              <h2 id="packing-checklist-heading" className="corp-section-title">
                What to include in a packaging plywood enquiry.
              </h2>
              <p className="corp-body-text corp-body-text--secondary">
                Sharing your application details helps our team confirm available MR packaging-grade
                sheet options and delivery expectations:
              </p>
              <ul className="brand-highlight-list">
                {PACKAGING_CHECKLIST.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link href={brand.enquiryHref} className="btn btn-primary btn-lg">
                <span>Discuss Packaging Requirements</span>
              </Link>
            </div>

            <div className="resp-pillar-card" style={{ backgroundColor: 'var(--color-warm-ivory)' }}>
              <span className="section-eyebrow">Company Behind the Brand</span>
              <h3 className="brand-card__title">NEOM Panels</h3>
              <p className="corp-body-text corp-body-text--secondary" style={{ marginBottom: '0.85rem' }}>
                NEOM Packing Plywood is an active brand of NEOM Panels—connecting industrial
                packaging buyers with clear order communication and accountable customer support.
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
