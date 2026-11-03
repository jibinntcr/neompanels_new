import Link from 'next/link';

export const metadata = {
  title: 'Privacy Notice — NEOM Panels',
  description:
    'Privacy Notice explaining how NEOM Panels collects, uses, stores, and safeguards business enquiry and corporate contact information.'
};

export default function PrivacyPage() {
  return (
    <main id="main-content">
      <section className="inner-hero bg-warm" aria-labelledby="privacy-heading">
        <div className="container">
          <div style={{ maxWidth: '760px' }} className="reveal">
            <div className="eyebrow">CORPORATE POLICY · DATA GOVERNANCE</div>
            <h1 id="privacy-heading" className="h-inner">
              Privacy Notice.
            </h1>
            <p className="body-lead" style={{ marginBottom: 0 }}>
              How NEOM Panels collects, uses, retains, and safeguards contact and specification details shared through our corporate website and business enquiry channels.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container" style={{ maxWidth: '860px' }}>
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div>
              <h2 className="h-card" style={{ marginBottom: '10px' }}>
                1. Scope of this notice
              </h2>
              <p>
                This Privacy Notice applies to business representatives, prospective buyers, specifiers, channel partners, institutional procurement teams, and suppliers who submit enquiries or document requests through the NEOM Panels website.
              </p>
            </div>

            <div>
              <h2 className="h-card" style={{ marginBottom: '10px' }}>
                2. Information we collect
              </h2>
              <p>
                When you submit a Business Enquiry or a Document Request, we collect the information you choose to provide: your full name, company or organisation name, role or buyer type, email address, phone number, city/state/country, requirement category, brand interest, project or manufacturing specification summary, and any attached specification or BOQ file (PDF, JPG, or PNG).
              </p>
            </div>

            <div>
              <h2 className="h-card" style={{ marginBottom: '10px' }}>
                3. How we use your information
              </h2>
              <p>
                We use the information you submit solely for legitimate B2B commercial and administrative purposes:
              </p>
              <ul className="spec-list">
                <li>Reviewing your material specification, project schedule, or partnership proposal.</li>
                <li>Routing your enquiry to the appropriate commercial, brand (such as Starwoods), or technical representative within NEOM Panels.</li>
                <li>Providing requested corporate policies, product data sheets, or vendor registration information.</li>
                <li>Maintaining an internal audit record of commercial correspondence and enquiries.</li>
              </ul>
            </div>

            <div>
              <h2 className="h-card" style={{ marginBottom: '10px' }}>
                4. File attachments &amp; storage security
              </h2>
              <p>
                Specification files uploaded through the Business Enquiry form are validated for permitted file types and size limits and are stored outside publicly browsable web directories. Access is restricted to authorised NEOM Panels personnel reviewing your requirement.
              </p>
            </div>

            <div>
              <h2 className="h-card" style={{ marginBottom: '10px' }}>
                5. Data sharing
              </h2>
              <p>
                NEOM Panels does not sell or rent business contact lists. Information is shared only within NEOM Panels and, where relevant to fulfil your enquiry, with authorised brand or distribution representatives involved in responding to your requirement.
              </p>
            </div>

            <div>
              <h2 className="h-card" style={{ marginBottom: '10px' }}>
                6. Contact &amp; updates to your records
              </h2>
              <p>
                To update or request removal of your business contact details from our enquiry records, please contact our corporate desk through the{' '}
                <Link href="/enquiry" style={{ color: 'var(--color-forest)', fontWeight: 600, textDecoration: 'underline' }}>
                  Business Enquiry
                </Link>{' '}
                page and reference your enquiry ID if available.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
