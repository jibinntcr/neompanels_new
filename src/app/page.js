import Link from 'next/link';
import BrandMarkPlaque from '@/components/BrandMarkPlaque';
import FullScreenHeroSlider from '@/components/FullScreenHeroSlider';
import {
  PORTFOLIO_BRANDS,
  CUSTOMER_COMMITMENTS,
  CUSTOMER_GROUPS
} from '@/lib/portfolio-data';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  absoluteTitle: 'Indian Panel Manufacturing Company',
  description:
    'NEOM Panels is an Indian panel manufacturing company and the company behind Starwoods and NEOM Packing Plywood—helping businesses choose and source panel materials with clarity and confidence.',
  path: '/'
});

export default function HomePage() {
  return (
    <main id="main-content">
      {/* A. Full-Screen Hero Slider */}
      <FullScreenHeroSlider />

      {/* B. Company Introduction */}
      <section className="section-spacing bg-white border-bottom-divider" aria-labelledby="company-intro-heading">
        <div className="container">
          <div className="corp-intro-block">
            <span className="section-eyebrow">Who We Are</span>
            <h2 id="company-intro-heading" className="corp-section-title">
              Materials matter. So does the company behind them.
            </h2>
            <p className="corp-intro-block__body">
              Choosing materials also means choosing a business relationship. NEOM combines its
              manufacturing foundation with practical material guidance, clear order communication
              and support that continues after the sale.
            </p>
            <Link href="/about" className="corp-text-link">
              <span>Get to know NEOM</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* C. Our Brands — Two Active Brands */}
      <section className="section-spacing bg-warm-ivory border-bottom-divider" aria-labelledby="brands-directory-heading">
        <div className="container">
          <div className="corp-section-header">
            <span className="section-eyebrow">Our Brands</span>
            <h2 id="brands-directory-heading" className="corp-section-title">
              Two brands. One accountable company.
            </h2>
            <p className="corp-section-subtitle">
              Our brands address different material needs, with NEOM Panels providing the company
              identity and customer relationships behind them.
            </p>
          </div>

          <div className="brand-portfolio-grid brand-portfolio-grid--two">
            {PORTFOLIO_BRANDS.map((brand) => (
              <article key={brand.id} className="brand-card brand-card--editorial">
                <div className="brand-card__media">
                  <img
                    src={brand.image}
                    alt={brand.imageAlt}
                    width="900"
                    height="560"
                    loading="lazy"
                    className="brand-card__img"
                  />
                </div>

                <div className="brand-card__body">
                  <BrandMarkPlaque brand={brand} size="md" />
                  <h3 className="brand-card__title">{brand.name}</h3>
                  <p className="brand-card__descriptor" style={{ fontWeight: 600, color: '#103F2C', marginBottom: '0.5rem' }}>
                    {brand.descriptor}
                  </p>
                  <p className="brand-card__descriptor">{brand.homeCopy}</p>

                  <div className="brand-card__footer">
                    <Link href={brand.href} className="btn btn-primary brand-card__btn">
                      <span>{brand.actionLabel}</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* D. Manufacturing and Evidence */}
      <section className="section-spacing bg-white border-bottom-divider" aria-labelledby="capability-heading">
        <div className="container">
          <div className="corp-split-section">
            <div className="corp-split-section__copy">
              <span className="section-eyebrow">Manufacturing</span>
              <h2 id="capability-heading" className="corp-section-title">
                A manufacturing foundation you can understand.
              </h2>
              <p className="corp-body-text">
                Our own factory forms part of NEOM’s manufacturing foundation. Explore the people,
                processes and product information behind our business, and speak to us about the
                requirements relevant to your application.
              </p>
              <p className="corp-body-text corp-body-text--secondary">
                Product-level specifications, nominal thicknesses and manufacturing or sourcing
                context are confirmed clearly with our team against your enquiry scope.
              </p>
              <div className="corp-split-section__actions">
                <Link href="/manufacturing" className="btn btn-primary">
                  <span>Explore Our Manufacturing</span>
                </Link>
              </div>
            </div>

            <figure className="corp-split-section__media">
              <div className="corp-split-section__frame">
                <img
                  src="/assets/sector-manufacturing.jpg"
                  alt="Wood-panel manufacturing, sheet inspection and workshop handling environment"
                  width="960"
                  height="640"
                  decoding="async"
                  className="corp-split-section__img"
                />
              </div>
              <figcaption className="corp-media-caption">
                Panel production, sizing and pre-dispatch review context in India.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* E. Customer Commitments */}
      <section className="section-spacing bg-warm-ivory border-bottom-divider" aria-labelledby="commitments-heading">
        <div className="container">
          <div className="corp-section-header">
            <span className="section-eyebrow">How We Work</span>
            <h2 id="commitments-heading" className="corp-section-title">
              Clear communication. Accountable support.
            </h2>
          </div>

          <div className="corp-commitments-grid">
            {CUSTOMER_COMMITMENTS.map((item) => (
              <article key={item.title} className="corp-priority-card" style={{ backgroundColor: 'var(--color-white)' }}>
                <h3 className="corp-priority-card__title">{item.title}</h3>
                <p className="corp-priority-card__detail">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* F. Responsibility */}
      <section className="section-spacing bg-white border-bottom-divider" aria-labelledby="responsibility-heading">
        <div className="container">
          <div className="corp-split-section">
            <div className="corp-split-section__copy">
              <span className="section-eyebrow">Responsibility</span>
              <h2 id="responsibility-heading" className="corp-section-title">
                Responsibility in how we grow.
              </h2>
              <p className="corp-body-text">
                We want NEOM’s progress to reflect thoughtful material choices, better resource use
                and respect for people. These priorities define the responsible business we aim to
                build as our brands and relationships develop.
              </p>
              <div className="corp-split-section__actions">
                <Link href="/responsibility" className="btn btn-secondary">
                  <span>Our Approach to Responsibility</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            <figure className="corp-split-section__media">
              <div className="corp-split-section__frame">
                <img
                  src="/assets/product-engineered-boards.jpg"
                  alt="Engineered wood-fibre board cross-sections arranged for material comparison"
                  width="960"
                  height="640"
                  decoding="async"
                  className="corp-split-section__img"
                />
              </div>
              <figcaption className="corp-media-caption">
                Matching panel choice to real service conditions helps prevent avoidable material waste.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* G. Business Audience Pathways and Closing Action */}
      <section className="section-spacing bg-warm-ivory" aria-labelledby="relationships-heading">
        <div className="container">
          <div className="corp-section-header">
            <span className="section-eyebrow">Customer Pathways</span>
            <h2 id="relationships-heading" className="corp-section-title">
              Start with your business requirement.
            </h2>
          </div>

          <div className="corp-five-audiences-grid">
            {CUSTOMER_GROUPS.map((group) => (
              <article key={group.id} className="corp-audience-card">
                <h3 className="corp-audience-card__title">{group.title}</h3>
                <p className="corp-audience-card__summary">{group.summary}</p>
                <Link href={group.href} className="corp-text-link">
                  <span>{group.actionLabel}</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="closing-cta-panel" style={{ marginTop: '3rem' }}>
            <div className="closing-cta-panel__content">
              <h2 className="closing-cta-panel__title">
                Ready to discuss your requirement?
              </h2>
              <p className="closing-cta-panel__desc">
                Tell us what your business needs. We’ll help you connect with the relevant NEOM
                brand or team.
              </p>
              <div className="closing-cta-panel__actions">
                <Link href="/enquiry" className="btn btn-gold btn-lg">
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
