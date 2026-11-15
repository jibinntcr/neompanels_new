import { Suspense } from 'react';
import Link from 'next/link';
import EnquiryFormClient from '@/components/EnquiryFormClient';

export const metadata = {
  title: 'Contact & Material Enquiry Desk | NEOM Panels',
  description:
    'Submit project requirements, sample enquiries, or partnership interests to NEOM Panels. Direct phone: +91 97454 50618, Email: neompanels@gmail.com.',
  alternates: {
    canonical: '/enquiry'
  }
};

export default function EnquiryPage() {
  return (
    <main id="main-content" className="page-view">
      {/* Architectural Page Hero */}
      <section className="arch-page-hero arch-page-hero--forest" aria-labelledby="main-heading">
        <div className="container">
          <nav className="breadcrumb-nav breadcrumb-nav--light" aria-label="Breadcrumb">
            <ol className="breadcrumb-list font-mono" role="list">
              <li><Link href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Contact &amp; Enquiries</li>
            </ol>
          </nav>

          <div className="arch-page-hero__grid">
            <div className="arch-page-hero__copy">
              <span className="section-eyebrow text-gold font-mono">DIRECT SPECIFICATION DESK</span>
              <h1 id="main-heading" tabIndex={-1} className="page-title text-warm">
                Discuss Your Requirement.
              </h1>
              <p className="page-lead-text text-warm-muted">
                Connect with our team regarding product specifications, project supply, dealership partnerships, sample requests, or international trade enquiries.
              </p>
            </div>

            <div className="arch-page-hero__stat-card">
              <span className="arch-stat-label font-mono text-gold">DIRECT CHANNELS</span>
              <div className="enquiry-hero-contacts">
                <a href="tel:+919745450618" className="enquiry-hero-contact-row font-mono">
                  <span>TEL</span>
                  <strong>+91 97454 50618</strong>
                </a>
                <a href="mailto:neompanels@gmail.com" className="enquiry-hero-contact-row">
                  <span className="font-mono">MAIL</span>
                  <strong>neompanels@gmail.com</strong>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Form and Direct Contact Split */}
      <section className="section-spacing bg-warm-ivory" aria-label="Enquiry Form and Direct Contacts">
        <div className="container">
          <div className="enquiry-split-layout">
            <div className="enquiry-form-wrapper">
              <div className="form-card-box">
                <div className="form-card-header">
                  <span className="section-eyebrow font-mono">ENQUIRY REGISTRATION</span>
                  <h2 className="form-card-title">Project, Product &amp; Partnership Form</h2>
                  <p className="form-card-subtitle">
                    Share your details and requirement below. Provide either an email address or phone number so our team can respond directly.
                  </p>
                </div>

                <Suspense fallback={<div className="form-loading font-mono">Loading enquiry form...</div>}>
                  <EnquiryFormClient />
                </Suspense>
              </div>
            </div>

            <aside className="enquiry-info-sidebar" aria-label="Official Contact Details">
              <div className="contact-card bg-forest text-warm">
                <span className="contact-card-tag font-mono text-gold">OFFICIAL CONTACT POINTS</span>
                <h3 className="contact-card-title text-warm">Direct Communication</h3>
                <p className="contact-card-text text-warm-muted">
                  For immediate discussions around commercial requirements, dealership interest, or portfolio availability:
                </p>

                <div className="contact-card-items">
                  <a href="tel:+919745450618" className="contact-card-link font-mono">
                    <div className="contact-icon font-mono text-gold" aria-hidden="true">TEL</div>
                    <div>
                      <span className="contact-label font-mono">TELEPHONE</span>
                      <span className="contact-value">+91 97454 50618</span>
                    </div>
                  </a>

                  <a href="mailto:neompanels@gmail.com" className="contact-card-link">
                    <div className="contact-icon font-mono text-gold" aria-hidden="true">MAIL</div>
                    <div>
                      <span className="contact-label font-mono">EMAIL</span>
                      <span className="contact-value">neompanels@gmail.com</span>
                    </div>
                  </a>
                </div>
              </div>

              <div className="contact-card bg-white border-strong" style={{ marginTop: '1.5rem' }}>
                <span className="contact-card-tag font-mono text-forest">MARKET FOCUS</span>
                <h3 className="contact-card-title">India &amp; GCC Horizon</h3>
                <p className="contact-card-text">
                  <strong>India (Domestic Foundation):</strong> Serving architects, dealers, furniture manufacturers, contractors, and institutional buyers.
                </p>
                <p className="contact-card-text" style={{ marginBottom: 0 }}>
                  <strong>GCC Expansion Corridor:</strong> Strategic international trade focus across UAE, Saudi Arabia, Qatar, Oman, Bahrain, and Kuwait.
                </p>
              </div>

              <div className="contact-card bg-white border-strong" style={{ marginTop: '1.5rem' }}>
                <span className="contact-card-tag font-mono text-forest">EXECUTIVE TEAM</span>
                <h3 className="contact-card-title">Leadership Directory</h3>
                <p className="contact-card-text">
                  Looking to connect with our executive directors regarding strategic alliances or distribution?
                </p>
                <Link href="/team" className="btn btn-secondary btn-sm">
                  <span>View Leadership Team</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
