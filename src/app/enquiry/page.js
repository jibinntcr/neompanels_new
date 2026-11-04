import { Suspense } from 'react';
import Link from 'next/link';
import EnquiryFormClient from '@/components/EnquiryFormClient';
import { getVerifiedContactDetails } from '@/lib/storage';
import { buildPageMetadata, getBreadcrumbJsonLd, SITE_URL } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Business Enquiry & Wood-Panel Quotation Request',
  description:
    'Submit a B2B enquiry to NEOM Panels. Share your required panel thickness, sheet dimensions, application and volume for Starwoods, NEOM Packing Plywood, OEM manufacturing or project supply in India.',
  path: '/enquiry',
  ogImage: '/assets/illustration-enquiry.jpg',
  ogImageAlt: 'NEOM Panels — Submit a B2B Wood-Panel Quotation or Technical Document Request',
  ogImages: [
    {
      url: '/assets/illustration-enquiry.jpg',
      width: 1400,
      height: 933,
      alt: 'NEOM Panels — Submit a B2B Wood-Panel Quotation or Technical Document Request'
    },
    {
      url: '/assets/hero-neom-flagship.jpg',
      width: 1400,
      height: 933,
      alt: 'NEOM Panels Wood-Panel Manufacturing & Direct Factory Supply'
    },
    {
      url: '/assets/packing-plywood-showcase.jpg',
      width: 1400,
      height: 933,
      alt: 'NEOM Packing Plywood Quotation & Bulk Order Desk'
    }
  ],
  keywords: [
    'request plywood quotation India',
    'NEOM Panels business enquiry',
    'bulk plywood wholesale enquiry India',
    'Starwoods plywood dealer enquiry',
    'NEOM Packing Plywood quotation request',
    'OEM furniture plywood quote India',
    'commercial project plywood BOQ enquiry'
  ]
});

export default function EnquiryPage() {
  const contactDetails = getVerifiedContactDetails();
  const enquiryJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      getBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Business Enquiry', path: '/enquiry' }
      ]),
      {
        '@type': 'ContactPage',
        '@id': `${SITE_URL}/enquiry#webpage`,
        name: 'Business Enquiry & Quotation Request — NEOM Panels',
        url: `${SITE_URL}/enquiry`,
        description:
          'Submit a business enquiry to NEOM Panels for wood-panel product information, technical documents or B2B quotations across India.'
      }
    ]
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(enquiryJsonLd) }}
      />
      {/* PAGE HEADER */}
      <section
        className="page-header section--architectural-grid"
        aria-labelledby="main-heading"
      >
        <div className="container hero-animate">
          <p className="eyebrow">BUSINESS ENQUIRY</p>
          <h1 id="main-heading" tabIndex={-1} className="page-title">
            Tell us what you need.
          </h1>
          <p className="lead-text" style={{ marginBottom: 0 }}>
            Share your requirement, target specification and contact details to request product
            information, technical documents or a quotation.
          </p>
        </div>
      </section>

      {/* ENQUIRY WORKSPACE */}
      <section className="section section--no-border" aria-label="Business enquiry form and guidance">
        <div className="container">
          <div className="enquiry-layout">
            {/* MAIN INTERACTIVE FORM */}
            <div className="reveal-once">
              <Suspense
                fallback={
                  <div className="enquiry-form-container">
                    <p>Loading business enquiry form…</p>
                  </div>
                }
              >
                <EnquiryFormClient />
              </Suspense>
            </div>

            {/* SIDEBAR: PRACTICAL GUIDANCE & VERIFIED CONTACT */}
            <aside className="enquiry-sidebar reveal-once" aria-label="Enquiry guidance">
              <div className="enquiry-sidebar__card">
                <figure className="architectural-photo-card" style={{ marginBottom: 'var(--space-4)' }}>
                  <img
                    src="/assets/illustration-enquiry.jpg"
                    alt="Illustration of a project specification sheet, architectural drawing, and wood-panel sample."
                    width="640"
                    height="480"
                  />
                </figure>
                <p className="eyebrow">WHAT TO INCLUDE</p>
                <h2 className="subsection-title">Information for an accurate response</h2>
                <p className="secondary-text" style={{ fontSize: '0.96rem' }}>
                  Every submitted enquiry is recorded with a reference ID for our commercial and
                  technical team:
                </p>
                <ul className="checklist-items" style={{ fontSize: '0.95rem', marginBottom: 0 }}>
                  <li>
                    <div style={{ marginBottom: '0.35rem' }}>
                      <img
                        src="/assets/starwood-logo.png"
                        alt="Starwoods — The Plywood Specialist"
                        className="starwood-logo-img--xs"
                        width="619"
                        height="177"
                      />
                    </div>
                    <strong>Starwoods (Furniture &amp; Interiors):</strong> Application, grade,
                    thickness, sheet dimensions and project or factory schedule.
                  </li>
                  <li>
                    <div style={{ marginBottom: '0.35rem' }}>
                      <img
                        src="/assets/neom-packing-plywood-logo-compact.svg"
                        alt="NEOM Packing Plywood"
                        className="packing-logo-img--xs"
                        width="540"
                        height="112"
                      />
                    </div>
                    <strong>NEOM Packing Plywood (Industrial Packaging):</strong> Packing cases,
                    crates or dividers, required thickness, sheet dimensions, quantity and delivery
                    location.
                  </li>
                  <li>
                    <strong>Manufacturing &amp; Recurring Supply:</strong> Monthly or scheduled
                    call-off volumes and delivery destination.
                  </li>
                  <li>
                    <strong>Institutional &amp; Channel Enquiries:</strong> Tender specification
                    clauses, required technical documents or regional distribution profile.
                  </li>
                </ul>
              </div>

              <div className="enquiry-sidebar__card enquiry-sidebar__card--sage">
                <p className="eyebrow">CONTACT &amp; LOCATION</p>
                <h3 className="subsection-title" style={{ marginBottom: '0.5rem' }}>
                  Manufacturing &amp; commercial desk
                </h3>
                <p style={{ fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                  <strong>Facility:</strong> {contactDetails.factoryLocation}
                </p>
                {contactDetails.officeAddress ? (
                  <p style={{ fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                    <strong>Office:</strong> {contactDetails.officeAddress}
                  </p>
                ) : null}
                {contactDetails.email ? (
                  <p style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                    <strong>Email:</strong>{' '}
                    <a href={`mailto:${contactDetails.email}`} className="footer-contact-link">
                      {contactDetails.email}
                    </a>
                  </p>
                ) : null}
                {contactDetails.phone ? (
                  <p style={{ fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                    <strong>Phone:</strong>{' '}
                    <a
                      href={`tel:${String(contactDetails.phone).replace(/\s+/g, '')}`}
                      className="footer-contact-link"
                    >
                      {contactDetails.phone}
                    </a>
                  </p>
                ) : null}
                {contactDetails.whatsapp ? (
                  <p style={{ fontSize: '0.95rem', marginBottom: '0.75rem' }}>
                    <strong>WhatsApp:</strong>{' '}
                    <a
                      href={`https://wa.me/${String(contactDetails.whatsapp).replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="footer-contact-link"
                    >
                      Message Commercial Team
                    </a>
                  </p>
                ) : null}
                <Link href="/resources#before-you-request-quotation" className="editorial-link">
                  <span>Read Quotation Checklist</span>
                  <span className="link-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
