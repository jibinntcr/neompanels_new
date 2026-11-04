import Link from 'next/link';
import { buildPageMetadata, getBreadcrumbJsonLd } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Website Terms — Commercial & Specification Terms of Use',
  description:
    'Terms of use governing access to the NEOM Panels corporate website, Starwoods and NEOM Packing Plywood brand representations, and general B2B specification guidance.',
  path: '/terms',
  keywords: ['NEOM Panels website terms', 'NEOM Panels commercial terms of use']
});

export default function TermsPage() {
  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: 'Home', path: '/' },
    { name: 'Website Terms', path: '/terms' }
  ]);

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <section
        className="page-header section--architectural-grid"
        aria-labelledby="main-heading"
      >
        <div className="container hero-animate" style={{ maxWidth: '860px', marginInline: 0 }}>
          <p className="eyebrow">CORPORATE POLICY · LEGAL TERMS</p>
          <h1 id="main-heading" tabIndex={-1} className="page-title">
            Website Terms.
          </h1>
          <p className="lead-text" style={{ marginBottom: 0 }}>
            Terms governing access to the NEOM Panels corporate website, brand representations, and
            general commercial information.
          </p>
        </div>
      </section>

      <section className="section section--no-border reveal-once">
        <div className="container" style={{ maxWidth: '860px', marginInline: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)' }}>
            <div>
              <h2 className="subsection-title">1. Corporate information &amp; non-binding nature</h2>
              <p>
                Content published on this website is intended to introduce NEOM Panels, its
                manufacturing operations, and its product brands (Starwoods and NEOM Packing
                Plywood) to business buyers, specifiers, and trade partners. Website content does
                not constitute a binding commercial offer, product warranty, or automatic supply
                commitment.
              </p>
            </div>

            <div>
              <h2 className="subsection-title">2. Technical specifications &amp; suitability</h2>
              <p>
                Wood-panel suitability depends on project-specific environmental conditions,
                storage and transport exposure, fabrication methods, panel thickness, grade, and
                installation practices. Buyers and specifiers should confirm current technical
                documents, batch specifications, and commercial terms directly with NEOM Panels
                before placing purchase orders or commencing fabrication.
              </p>
            </div>

            <div>
              <h2 className="subsection-title">3. Intellectual property &amp; brand marks</h2>
              <p>
                The NEOM Panels name and logo, the Starwoods brand name and logo, the NEOM Packing
                Plywood brand name and wordmark, website copy, and visual assets are the property
                of NEOM Panels and may not be reproduced or misrepresented as third-party
                endorsements without prior written permission.
              </p>
            </div>

            <div>
              <h2 className="subsection-title">4. Acceptable use of enquiry channels</h2>
              <p>
                Users submitting enquiries or uploading specification files warrant that they are
                authorised to share those materials for commercial review and that uploaded files
                do not contain malicious code or unlawful content.
              </p>
            </div>

            <div>
              <h2 className="subsection-title">5. Governing law &amp; contact</h2>
              <p>
                These Website Terms are governed by the laws of India. For questions regarding
                corporate documentation or commercial terms, please contact us through the{' '}
                <Link
                  href="/enquiry"
                  style={{
                    color: 'var(--color-forest)',
                    fontWeight: 600,
                    textDecoration: 'underline'
                  }}
                >
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
