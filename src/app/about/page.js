import Link from 'next/link';
import BrandMarkPlaque from '@/components/BrandMarkPlaque';
import { LEADERSHIP_PROFILES } from '@/lib/leadership-data';
import {
  PORTFOLIO_BRANDS,
  PARENT_COMPANY,
  CUSTOMER_COMMITMENTS
} from '@/lib/portfolio-data';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'About NEOM',
  description:
    'NEOM Panels is an Indian panel manufacturing company and the company behind Starwoods and NEOM Packing Plywood—focused on making panel buying more dependable and transparent.',
  path: '/about'
});

export default function AboutPage() {
  return (
    <main id="main-content">
      {/* Corporate Header */}
      <section className="page-header-dark" aria-labelledby="main-heading">
        <div className="container page-header-inner">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-sep" aria-hidden="true">/</span>
            <span className="breadcrumb-current">About NEOM</span>
          </nav>

          <span className="section-eyebrow text-gold">Company Overview</span>
          <h1 id="main-heading" className="page-hero-title text-warm">
            The company behind Starwoods and NEOM Packing Plywood.
          </h1>
          <p className="page-hero-lead text-warm-muted">
            {PARENT_COMPANY.descriptor} We combine our manufacturing foundation with clear
            information and accountable relationships so business buyers can source materials with
            greater confidence.
          </p>
        </div>
      </section>

      {/* Who We Are & Why Dependable Buying Matters */}
      <section className="section-spacing bg-white border-bottom-divider" aria-labelledby="who-we-are-heading">
        <div className="container">
          <div className="corp-split-section">
            <div>
              <span className="section-eyebrow">Who We Are</span>
              <h2 id="who-we-are-heading" className="corp-section-title">
                Making material buying more dependable and transparent.
              </h2>
              <p className="corp-body-text">
                For dealers, contractors, furniture workshops, industrial packaging teams and
                institutional buyers, choosing panel materials involves more than comparing sheet
                prices. Buyers need honest clarity on what a board is suited to do, reliable updates
                on order schedules and a team that stays accountable if questions arise.
              </p>
              <p className="corp-body-text corp-body-text--secondary">
                NEOM Panels brings together its own factory foundation in India with two focused
                brands—<strong>Starwoods</strong> for plywood and engineered boards, and{' '}
                <strong>NEOM Packing Plywood</strong> for industrial packaging requirements—while
                confirming product-level manufacturing or sourcing details transparently per
                requirement.
              </p>
              <div className="corp-split-section__actions">
                <Link href="/brands" className="btn btn-primary">
                  <span>Explore Our Brands</span>
                </Link>
                <Link href="/manufacturing" className="btn btn-secondary">
                  <span>Explore Manufacturing</span>
                </Link>
              </div>
            </div>

            <div className="resp-pillar-card" style={{ backgroundColor: 'var(--color-warm-ivory)' }}>
              <span className="section-eyebrow">Brand Promise</span>
              <h3 className="corp-section-title" style={{ fontSize: '1.6rem' }}>
                “{PARENT_COMPANY.tagline}”
              </h3>
              <p className="corp-body-text corp-body-text--secondary" style={{ marginBottom: 0 }}>
                Supported in everyday practice by straightforward material guidance, clear order
                communication, ownership when issues arise and continuing availability after the
                sale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose, Vision, Mission & Behaviour-Based Values */}
      <section
        className="section-spacing bg-warm-ivory border-bottom-divider"
        id="purpose-vision-values"
        aria-labelledby="purpose-heading"
      >
        <div className="container">
          <div className="corp-section-header">
            <span className="section-eyebrow">Purpose, Vision &amp; Values</span>
            <h2 id="purpose-heading" className="corp-section-title">
              What guides NEOM Panels.
            </h2>
            <p className="corp-section-subtitle">
              <strong>Our Purpose:</strong> {PARENT_COMPANY.purpose}
            </p>
          </div>

          <div className="vision-mission-grid">
            <div className="vision-card bg-forest text-warm">
              <span className="vm-badge text-gold">Our Vision</span>
              <blockquote className="vm-statement">
                “{PARENT_COMPANY.vision}”
              </blockquote>
            </div>

            <div className="mission-card bg-white border-strong">
              <span className="vm-badge text-forest">Our Mission</span>
              <blockquote className="vm-statement text-forest">
                “{PARENT_COMPANY.mission}”
              </blockquote>
            </div>
          </div>

          <div style={{ marginTop: '3rem' }}>
            <h3 className="corp-section-title" style={{ fontSize: '1.5rem', marginBottom: '1.25rem' }}>
              Our values, expressed in everyday behaviour
            </h3>
            <div className="corp-five-audiences-grid">
              {PARENT_COMPANY.values.map((val) => (
                <article key={val.title} className="corp-priority-card" style={{ backgroundColor: 'var(--color-white)' }}>
                  <h4 className="corp-priority-card__title">{val.title}</h4>
                  <p className="corp-priority-card__detail">{val.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Two Active Brands & Customer Commitments */}
      <section className="section-spacing bg-white border-bottom-divider" aria-labelledby="portfolio-summary-heading">
        <div className="container">
          <div className="corp-section-header">
            <span className="section-eyebrow">Our Active Brands</span>
            <h2 id="portfolio-summary-heading" className="corp-section-title">
              Two brands. One accountable company.
            </h2>
            <p className="corp-section-subtitle">
              Our brands address different material needs, backed by the same customer commitments
              from NEOM Panels.
            </p>
          </div>

          <div className="brand-portfolio-grid brand-portfolio-grid--two">
            {PORTFOLIO_BRANDS.map((brand) => (
              <article key={brand.id} className="brand-card">
                <div className="brand-card__body">
                  <BrandMarkPlaque brand={brand} size="md" />
                  <span className="brand-card__relationship">{brand.relationship}</span>
                  <h3 className="brand-card__title">{brand.name}</h3>
                  <p className="brand-card__descriptor" style={{ fontWeight: 600, color: '#103F2C', marginBottom: '0.4rem' }}>
                    {brand.descriptor}
                  </p>
                  <p className="brand-card__descriptor">{brand.homeCopy}</p>
                  <div className="brand-card__footer">
                    <Link href={brand.href} className="corp-text-link">
                      <span>{brand.actionLabel}</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="corp-commitments-grid" style={{ marginTop: '2.5rem' }}>
            {CUSTOMER_COMMITMENTS.map((item) => (
              <article key={item.title} className="corp-priority-card">
                <h3 className="corp-priority-card__title">{item.title}</h3>
                <p className="corp-priority-card__detail">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary Corporate Leadership Summary */}
      <section className="section-spacing bg-warm-ivory border-bottom-divider" aria-labelledby="leadership-preview-heading">
        <div className="container">
          <div className="section-header-split">
            <div>
              <span className="section-eyebrow">Leadership</span>
              <h2 id="leadership-preview-heading" className="corp-section-title" style={{ marginBottom: '0.45rem' }}>
                Leadership behind NEOM Panels.
              </h2>
              <p className="corp-body-text corp-body-text--secondary" style={{ marginBottom: 0 }}>
                Explore the leadership team overseeing company direction, manufacturing execution,
                financial stewardship and digital workflows.
              </p>
            </div>
            <div className="section-header-action">
              <Link href="/team" className="btn btn-primary">
                <span>View Leadership Profiles</span>
              </Link>
            </div>
          </div>

          <div className="home-leaders-grid">
            {LEADERSHIP_PROFILES.map((leader) => (
              <article key={leader.id} className="home-leader-card">
                <Link href={leader.profileHref} className="home-leader-card__img-wrap">
                  <picture>
                    <source srcSet={leader.photo} type="image/webp" />
                    <img
                      src={leader.photoFallback || leader.photo}
                      alt={leader.photoAlt}
                      width="400"
                      height="400"
                      loading="lazy"
                      className="home-leader-card__img"
                    />
                  </picture>
                </Link>
                <div className="home-leader-card__body">
                  <span className="home-leader-card__role">{leader.role}</span>
                  <h3 className="home-leader-card__name">
                    <Link href={leader.profileHref}>{leader.name}</Link>
                  </h3>
                  <p className="home-leader-card__focus">{leader.focus}</p>
                  <div className="home-leader-card__links">
                    <Link href={leader.profileHref} className="home-leader-card__profile-link">
                      <span>View Profile</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Action */}
      <section className="section-spacing bg-white" aria-labelledby="about-closing-heading">
        <div className="container">
          <div className="closing-cta-panel">
            <div className="closing-cta-panel__content">
              <h2 id="about-closing-heading" className="closing-cta-panel__title">
                Start a conversation with NEOM Panels.
              </h2>
              <p className="closing-cta-panel__desc">
                Learn more about our responsible-growth direction, review corporate governance
                information or connect with our team regarding your requirement.
              </p>
              <div className="closing-cta-panel__actions">
                <Link href="/enquiry" className="btn btn-gold btn-lg">
                  <span>Business Enquiry</span>
                </Link>
                <Link href="/responsibility" className="btn btn-outline-light btn-lg">
                  <span>Responsibility</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
