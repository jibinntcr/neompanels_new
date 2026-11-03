import Link from 'next/link';

export const metadata = {
  title: 'Website Terms — NEOM Panels',
  description:
    'Terms of use governing access to the NEOM Panels corporate website, brand representations, and general specification guidance.'
};

export default function TermsPage() {
  return (
    <main id="main-content">
      <section className="inner-hero bg-warm" aria-labelledby="terms-heading">
        <div className="container">
          <div style={{ maxWidth: '760px' }} className="reveal">
            <div className="eyebrow">CORPORATE POLICY · LEGAL TERMS</div>
            <h1 id="terms-heading" className="h-inner">
              Website Terms.
            </h1>
            <p className="body-lead" style={{ marginBottom: 0 }}>
              Terms governing access to the NEOM Panels corporate website, brand representations, and general commercial information.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div>
              <h2 className="h-card" style={{ marginBottom: '10px' }}>
                1. Corporate information &amp; non-binding nature
              </h2>
              <p>
                Content published on this website is intended to introduce NEOM Panels, its manufacturing focus, and its brands (including Starwoods) to business buyers, specifiers, and partners. Website content does not constitute a binding commercial offer, product warranty, or automatic supply commitment.
              </p>
            </div>

            <div>
              <h2 className="h-card" style={{ marginBottom: '10px' }}>
                2. Technical specifications &amp; suitability
              </h2>
              <p>
                Wood-panel suitability depends on project-specific environmental conditions, fabrication methods, panel thickness, grade, and installation practices. Buyers and specifiers should confirm current technical data sheets, batch specifications, and commercial terms directly with NEOM Panels before placing purchase orders or commencing fabrication.
              </p>
            </div>

            <div>
              <h2 className="h-card" style={{ marginBottom: '10px' }}>
                3. Intellectual property &amp; brand marks
              </h2>
              <p>
                The NEOM Panels name, logo, tagline (<em>ENGINEERED EXCELLENCE, DESIGNED FOR SPACES</em>), the Starwoods brand name, website copy, and original illustrations are the property of NEOM Panels and may not be reproduced or misrepresented as third-party endorsements without prior written permission.
              </p>
            </div>

            <div>
              <h2 className="h-card" style={{ marginBottom: '10px' }}>
                4. Acceptable use of enquiry channels
              </h2>
              <p>
                Users submitting enquiries or uploading specification files warrant that they are authorised to share those materials for commercial review and that uploaded files do not contain malicious code or unlawful content.
              </p>
            </div>

            <div>
              <h2 className="h-card" style={{ marginBottom: '10px' }}>
                5. Governing law &amp; contact
              </h2>
              <p>
                These Website Terms are governed by the laws of India. For questions regarding corporate documentation or commercial terms, please contact us through the{' '}
                <Link href="/enquiry" style={{ color: 'var(--color-forest)', fontWeight: 600, textDecoration: 'underline' }}>
                  Business Enquiry
                </Link>{' '}
                page.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
