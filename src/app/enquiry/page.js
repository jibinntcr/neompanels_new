import { Suspense } from 'react';
import Link from 'next/link';
import EnquiryFormClient from '@/components/EnquiryFormClient';
import { PORTFOLIO_BRANDS, PARENT_COMPANY } from '@/lib/portfolio-data';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Business Enquiry',
  description:
    'Connect with NEOM Panels or its active brands—Starwoods and NEOM Packing Plywood—regarding material options, product specifications, samples, institutional procurement or trade partnerships.',
  path: '/enquiry'
});

export default function EnquiryPage() {
  return (
    <main id="main-content" className="page-view">
      {/* Page Header */}
      <section className="page-header-dark" aria-labelledby="main-heading">
        <div className="container page-header-inner">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-sep" aria-hidden="true">/</span>
            <span className="breadcrumb-current">Business Enquiry</span>
          </nav>

          <span className="section-eyebrow text-gold">Connect With NEOM Panels</span>
          <h1 id="main-heading" className="page-hero-title text-warm">
            Business Enquiry
          </h1>
          <p className="page-hero-lead text-warm-muted">
            Tell us what your business needs—whether you are enquiring about Starwoods, NEOM Packing
            Plywood, sample evaluation, institutional procurement or a general corporate and trade
            conversation.
          </p>
        </div>
      </section>

      {/* Main Form and Direct Contact Split */}
      <section className="section-spacing bg-warm-ivory" aria-label="Business Enquiry Form and Direct Contacts">
        <div className="container">
          <div className="enquiry-split-layout">
            <div className="enquiry-form-wrapper">
              <div className="form-card-box">
                <div className="form-card-header">
                  <span className="section-eyebrow">Enquiry Form</span>
                  <h2 className="form-card-title">Share your requirement.</h2>
                  <p className="form-card-subtitle">
                    You can submit a general corporate enquiry without selecting a specific product,
                    or choose Starwoods or NEOM Packing Plywood directly. Provide at least one valid
                    contact method—email or telephone—so our team can respond.
                  </p>
                </div>

                <Suspense fallback={<div className="form-loading">Loading enquiry form...</div>}>
                  <EnquiryFormClient />
                </Suspense>
              </div>
            </div>

            <aside
              id="direct-contact"
              className="enquiry-info-sidebar"
              aria-label="Confirmed Contact Details and Enquiry Process"
            >
              <div className="contact-card bg-forest text-warm">
                <span className="contact-card-tag text-gold">Direct Contact</span>
                <h3 className="contact-card-title text-warm">Reach NEOM Panels</h3>
                <p className="contact-card-text text-warm-muted">
                  Confirmed telephone and email for corporate, brand and trade enquiries in India:
                </p>

                <div className="contact-card-items">
                  <a href={PARENT_COMPANY.telHref} className="contact-card-link">
                    <div className="contact-icon text-gold" aria-hidden="true">TEL</div>
                    <div>
                      <span className="contact-label">TELEPHONE</span>
                      <span className="contact-value">{PARENT_COMPANY.phone}</span>
                    </div>
                  </a>

                  <a href={PARENT_COMPANY.mailtoHref} className="contact-card-link">
                    <div className="contact-icon text-gold" aria-hidden="true">MAIL</div>
                    <div>
                      <span className="contact-label">EMAIL</span>
                      <span className="contact-value">{PARENT_COMPANY.email}</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="contact-card bg-white border-strong">
                <span className="contact-card-tag text-forest">Our Active Brands</span>
                <h3 className="contact-card-title">Brand Scope</h3>
                <ul className="brand-highlight-list" style={{ margin: '0.5rem 0 1.15rem' }}>
                  {PORTFOLIO_BRANDS.map((b) => (
                    <li key={b.id}>
                      <strong>{b.name}:</strong> {b.descriptor}
                    </li>
                  ))}
                </ul>
                <Link href="/brands" className="corp-text-link">
                  <span>Explore Our Brands</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>

              <div className="contact-card bg-white border-strong">
                <span className="contact-card-tag text-forest">What Happens Next</span>
                <h3 className="contact-card-title">How we respond</h3>
                <p className="contact-card-text">
                  Every accepted submission receives an enquiry reference number. Our team reviews
                  your application details, confirms relevant product information or availability,
                  and contacts you via your preferred method.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
