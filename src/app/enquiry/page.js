import { Suspense } from 'react';
import Link from 'next/link';
import EnquiryFormClient from '@/components/EnquiryFormClient';

export const metadata = {
  title: 'Business Enquiry — NEOM Panels',
  description:
    'Share details about your company and wood-panel requirement so the NEOM Panels commercial and technical team can direct your enquiry appropriately.'
};

export default function EnquiryPage() {
  return (
    <main id="main-content">
      {/* INNER HERO */}
      <section className="inner-hero bg-warm" aria-labelledby="enquiry-heading" style={{ paddingBottom: '48px' }}>
        <div className="container">
          <div style={{ maxWidth: '760px' }} className="reveal">
            <div className="eyebrow">COMMERCIAL DESK · DIRECT REQUIREMENT BRIEF</div>
            <h1 id="enquiry-heading" className="h-inner">
              Tell us what you need.
            </h1>
            <p className="body-lead" style={{ marginBottom: 0 }}>
              Share a few details about your company and requirement so our team can direct your enquiry appropriately.
            </p>
          </div>
        </div>
      </section>

      {/* ENQUIRY WORKSPACE */}
      <section className="section bg-white" aria-label="Business enquiry form and guidance">
        <div className="container">
          <div className="enquiry-layout">
            {/* LEFT SIDEBAR: ILLUSTRATION & ROUTING */}
            <aside className="enquiry-sidebar reveal" aria-label="Enquiry guidance">
              <div className="enquiry-sidebar__card">
                <figure className="editorial-art" style={{ marginBottom: '22px' }}>
                  <img
                    src="/assets/illustration-enquiry.jpg"
                    alt="Editorial illustration of a project specification sheet, architectural drawing, and wood-panel sample"
                    width="640"
                    height="480"
                  />
                </figure>
                <div className="eyebrow">HOW WE ROUTE YOUR BRIEF</div>
                <h2 className="h-card" style={{ marginBottom: '12px' }}>
                  Structured review for B2B enquiries
                </h2>
                <p style={{ fontSize: '0.94rem', marginBottom: '16px' }}>
                  Every enquiry submitted through this desk receives a reference ID and is directed to the relevant commercial or technical contact based on your requirement category:
                </p>
                <ul className="spec-list" style={{ fontSize: '0.9rem' }}>
                  <li>
                    <div style={{ marginBottom: '6px' }}>
                      <img
                        src="/assets/starwood-logo.png"
                        alt="Starwood — The Plywood Specialist"
                        className="starwood-logo-img--xs"
                        width="615"
                        height="149"
                      />
                    </div>
                    <strong>Product / Starwoods Enquiry:</strong> Range availability, thicknesses, and surface options.
                  </li>
                  <li>
                    <strong>Bulk / OEM Supply:</strong> Production schedules, pallet sizing, and repeat supply planning.
                  </li>
                  <li>
                    <strong>Project / Institutional:</strong> BOQ specification matching, test documents, and tender credentials.
                  </li>
                  <li>
                    <strong>Distributor / Channel:</strong> Regional representation and stocking discussions.
                  </li>
                </ul>
              </div>

              <div className="enquiry-sidebar__card" style={{ background: 'var(--color-sage)' }}>
                <div className="eyebrow">PREPARING YOUR SPECIFICATION</div>
                <h3 className="h-card" style={{ fontSize: '1.1rem', marginBottom: '8px' }}>
                  Need guidance before submitting a BOQ?
                </h3>
                <p style={{ fontSize: '0.92rem', marginBottom: '14px' }}>
                  Review our buyer checklist on what to include in a wood-panel quotation request.
                </p>
                <Link href="/resources#before-you-request-quotation" className="link-arrow">
                  Read Quotation Checklist
                </Link>
              </div>
            </aside>

            {/* RIGHT MAIN: INTERACTIVE FORM */}
            <div className="reveal">
              <Suspense
                fallback={
                  <div className="enquiry-form-card">
                    <p>Loading business enquiry form…</p>
                  </div>
                }
              >
                <EnquiryFormClient />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
