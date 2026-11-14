import { Suspense } from 'react';
import Link from 'next/link';
import EnquiryFormClient from '@/components/EnquiryFormClient';

export const metadata = {
  title: 'Contact & Material Enquiry Desk | NEOM Panels',
  description:
    'Submit project requirements, sample requests, or partnership enquiries directly to the NEOM Panels specification team. Direct phone: +91 97454 50618, Email: neompanels@gmail.com.',
  alternates: {
    canonical: '/enquiry'
  }
};

export default function EnquiryPage() {
  return (
    <div className="page-view">
      {/* Page Header */}
      <section className="page-header-section bg-warm-ivory border-bottom-divider">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <ol className="breadcrumb-list font-mono" role="list">
              <li><Link href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Contact &amp; Enquiries</li>
            </ol>
          </nav>

          <div className="page-header-content">
            <span className="section-eyebrow font-mono">DIRECT SPECIFICATION DESK</span>
            <h1 className="page-title">Discuss Your Requirement</h1>
            <p className="page-lead-text">
              Connect with our material specialists for product information, substrate recommendations, architectural sample folders, or project supply planning.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form and Direct Contact Split */}
      <section className="section-spacing" aria-label="Enquiry Form and Direct Contacts">
        <div className="container">
          <div className="enquiry-split-layout">
            {/* Left: Interactive Form */}
            <div className="enquiry-form-wrapper">
              <div className="form-card-box">
                <div className="form-card-header">
                  <h2 className="form-card-title">Project &amp; Material Enquiry</h2>
                  <p className="form-card-subtitle">
                    Complete the fields below to register your requirement with our specification desk.
                  </p>
                </div>

                <Suspense fallback={<div className="form-loading font-mono">Loading enquiry desk...</div>}>
                  <EnquiryFormClient />
                </Suspense>
              </div>
            </div>

            {/* Right: Direct Verified Contact Cards */}
            <div className="enquiry-info-sidebar">
              <div className="contact-card bg-forest text-warm">
                <span className="contact-card-tag font-mono text-gold">OFFICIAL CONTACT POINTS</span>
                <h3 className="contact-card-title text-warm">Direct Communication</h3>
                <p className="contact-card-text text-warm-muted">
                  For immediate assistance with ongoing commercial tenders, dispatch logistics, or partnership queries, contact our desk directly:
                </p>

                <div className="contact-card-items">
                  <a href="tel:+919745450618" className="contact-card-link font-mono">
                    <div className="contact-icon font-mono text-gold" aria-hidden="true">TEL</div>
                    <div>
                      <span className="contact-label font-mono">TELEPHONE / MOBILE</span>
                      <span className="contact-value">+91 97454 50618</span>
                    </div>
                  </a>

                  <a href="mailto:neompanels@gmail.com" className="contact-card-link">
                    <div className="contact-icon font-mono text-gold" aria-hidden="true">MAIL</div>
                    <div>
                      <span className="contact-label font-mono">OFFICIAL EMAIL</span>
                      <span className="contact-value">neompanels@gmail.com</span>
                    </div>
                  </a>

                  <div className="contact-card-link" style={{ cursor: 'default' }}>
                    <div className="contact-icon font-mono text-gold" aria-hidden="true">WEB</div>
                    <div>
                      <span className="contact-label font-mono">OFFICIAL WEBSITE</span>
                      <span className="contact-value">www.neompanels.com</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-card bg-warm-ivory border-strong" style={{ marginTop: '2rem' }}>
                <span className="contact-card-tag font-mono">SUPPLY HORIZONS</span>
                <h3 className="contact-card-title">Geographic Focus</h3>
                <p className="contact-card-text text-body">
                  <strong>India Domestic Anchor:</strong> Supply across residential hubs, modular furniture clusters, and commercial interior projects nationwide.
                </p>
                <p className="contact-card-text text-body" style={{ marginTop: '0.75rem' }}>
                  <strong>GCC Expansion Corridor:</strong> Containerized export readiness for target markets in UAE, Saudi Arabia, Qatar, Oman, Bahrain, and Kuwait.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
