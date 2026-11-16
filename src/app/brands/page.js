import Link from 'next/link';
import BrandMarkPlaque from '@/components/BrandMarkPlaque';
import { PORTFOLIO_BRANDS, MATERIAL_CATEGORIES } from '@/lib/portfolio-data';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Our Brands',
  description:
    'Explore the two active brands of NEOM Panels—Starwoods for plywood and engineered boards, and NEOM Packing Plywood for industrial packaging requirements.',
  path: '/brands'
});

export default function BrandsPage() {
  return (
    <main id="main-content">
      {/* Page Header */}
      <section className="page-header-dark" aria-labelledby="main-heading">
        <div className="container page-header-inner">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-sep" aria-hidden="true">/</span>
            <span className="breadcrumb-current">Our Brands</span>
          </nav>

          <span className="section-eyebrow text-gold">NEOM Panels Brands</span>
          <h1 id="main-heading" className="page-hero-title text-warm">
            Two brands. One accountable company.
          </h1>
          <p className="page-hero-lead text-warm-muted">
            NEOM Panels is the Indian panel manufacturing company behind Starwoods and NEOM Packing
            Plywood. Our brands address different material needs, with NEOM Panels providing the
            company identity, clear communication and customer relationships behind them.
          </p>
        </div>
      </section>

      {/* Active Brand Showcases */}
      <section className="section-spacing bg-warm-ivory border-bottom-divider" aria-labelledby="portfolio-list-heading">
        <div className="container">
          <div className="corp-section-header">
            <span className="section-eyebrow">Active Brands</span>
            <h2 id="portfolio-list-heading" className="corp-section-title">
              Choose the brand that fits your requirement.
            </h2>
            <p className="corp-section-subtitle">
              Explore Starwoods for plywood and engineered boards, or NEOM Packing Plywood for
              industrial packaging applications. If you are unsure which brand fits your need, our
              team can guide you.
            </p>
          </div>

          <div className="brand-showcase-list">
            {PORTFOLIO_BRANDS.map((brand) => (
              <article key={brand.id} id={brand.slug} className="brand-showcase-row">
                <div className="brand-showcase-copy">
                  <BrandMarkPlaque brand={brand} size="lg" />
                  <span className="brand-card__relationship">{brand.relationship}</span>
                  <h3 className="corp-section-title" style={{ marginTop: '0.25rem' }}>
                    {brand.name}
                  </h3>
                  <p className="corp-body-text" style={{ fontWeight: 600 }}>
                    {brand.descriptor}
                  </p>
                  <p className="corp-body-text corp-body-text--secondary">{brand.summary}</p>

                  <ul className="brand-highlight-list">
                    {brand.offerHighlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>

                  <div className="brand-audience-pills" aria-label={`Customer groups served by ${brand.name}`}>
                    {brand.audienceGroups.map((group) => (
                      <span key={group} className="brand-audience-pill">
                        {group}
                      </span>
                    ))}
                  </div>

                  <div className="portfolio-actions">
                    <Link href={brand.href} className="btn btn-primary">
                      <span>{brand.actionLabel}</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                    <Link href={brand.enquiryHref} className="btn btn-secondary">
                      <span>{brand.enquiryLabel}</span>
                    </Link>
                  </div>
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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Supporting Material Reference */}
      <section className="section-spacing bg-white border-bottom-divider" aria-labelledby="categories-ref-heading">
        <div className="container">
          <div className="corp-section-header">
            <span className="section-eyebrow">Supporting Material Information</span>
            <h2 id="categories-ref-heading" className="corp-section-title">
              Starwoods material categories.
            </h2>
            <p className="corp-section-subtitle">
              Review supporting information on plywood and engineered boards, and discuss your
              application with our team to confirm current availability and specifications.
            </p>
          </div>

          <div className="brand-portfolio-grid brand-portfolio-grid--two">
            {MATERIAL_CATEGORIES.map((cat) => (
              <article key={cat.id} className="corp-audience-card">
                <span className="brand-card__relationship">{cat.brandContext}</span>
                <h3 className="corp-audience-card__title">{cat.name}</h3>
                <p className="corp-audience-card__summary">{cat.summary}</p>
                <Link href={cat.href} className="corp-text-link">
                  <span>View {cat.name}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Help Me Choose Banner */}
      <section className="section-spacing bg-warm-ivory" aria-labelledby="help-choose-heading">
        <div className="container">
          <div className="closing-cta-panel">
            <div className="closing-cta-panel__content">
              <h2 id="help-choose-heading" className="closing-cta-panel__title">
                Need help selecting the right material or brand?
              </h2>
              <p className="closing-cta-panel__desc">
                Tell us what your business needs. We’ll help you connect with Starwoods, NEOM
                Packing Plywood or the right member of the NEOM team.
              </p>
              <div className="closing-cta-panel__actions">
                <Link href="/enquiry?brand=Help+Me+Choose" className="btn btn-gold btn-lg">
                  <span>Business Enquiry</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
