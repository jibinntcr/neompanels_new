import Link from 'next/link';

export const metadata = {
  title: {
    absolute: 'NEOM Packing Plywood | MR Packaging-Grade Plywood | NEOM Panels'
  },
  description:
    'Explore NEOM Packing Plywood, a NEOM Panels brand offering moisture-resistant packaging-grade plywood. Enquire about specifications, quantities and supply.'
};

const APPLICATION_CARDS = [
  {
    number: '01 · APPLICATION',
    title: 'Packing Cases',
    description:
      'Sheet material enquiries for fabricated packing cases used in product handling, storage and dispatch.'
  },
  {
    number: '02 · APPLICATION',
    title: 'Crates and Enclosures',
    description:
      'Plywood requirements for crate panels and protective enclosures, subject to the packaging design and selected specification.'
  },
  {
    number: '03 · APPLICATION',
    title: 'Industrial Packaging Components',
    description:
      'Material enquiries for panels, dividers, liners and other plywood components within a packaging assembly.'
  },
  {
    number: '04 · APPLICATION',
    title: 'Recurring Packaging Supply',
    description:
      'Procurement enquiries from packaging manufacturers and businesses planning repeat material purchases.'
  }
];

const SPECIFICATION_PARAMETERS = [
  'Intended packaging application',
  'Required sheet dimensions',
  'Required thickness',
  'Quantity and unit',
  'One-time or recurring requirement',
  'Delivery location',
  'Required delivery date',
  'Relevant drawings or specification documents',
  'Expected handling and moisture exposure'
];

export default function NeomPackingPlywoodPage() {
  const brandJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Brand',
    name: 'NEOM Packing Plywood',
    description:
      'Moisture-resistant packaging-grade plywood for business buyers sourcing material for packing cases, crates and related industrial packaging applications.',
    parentOrganization: {
      '@type': 'Organization',
      name: 'NEOM Panels'
    }
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandJsonLd) }}
      />

      {/* Section 1 — Hero */}
      <section className="page-header section--architectural-grid">
        <div className="container hero-split">
          <div className="hero-copy hero-animate">
            <div className="packing-logo-plaque">
              <img
                src="/assets/neom-packing-plywood-logo-horizontal.svg"
                alt="NEOM Packing Plywood — Packaging Grade · Moisture Resistant — A NEOM Panels Brand"
                className="packing-logo-img"
                width="580"
                height="168"
              />
            </div>

            <p className="eyebrow">NEOM PACKING PLYWOOD</p>
            <h1 id="main-heading" tabIndex={-1} className="page-title">
              Built around your packing requirements.
            </h1>
            <p className="lead-text">
              Moisture-resistant packaging-grade plywood for packing cases, crates and industrial
              packaging applications.
            </p>
            <p style={{ maxWidth: '64ch' }}>
              Whether you manufacture packaging or source material for your own dispatch operations,
              NEOM Packing Plywood gives you a dedicated starting point. Share your application and
              specifications to discuss material availability and supply requirements.
            </p>

            <div className="btn-group" style={{ marginTop: 'var(--space-5)' }}>
              <Link
                href="/enquiry?brand=neom-packing-plywood&category=industrial-packaging"
                className="btn btn--primary"
              >
                Request a Quote
              </Link>
              <Link
                href="/enquiry?brand=neom-packing-plywood&category=industrial-packaging#neom-enquiry-form"
                className="btn btn--secondary"
              >
                Discuss Your Application
              </Link>
            </div>

            <div className="supporting-labels-row" aria-label="Brand attributes">
              <span className="supporting-label-chip">Packaging Grade</span>
              <span className="supporting-label-chip supporting-label-chip--oak">
                Moisture Resistant
              </span>
              <span className="supporting-label-chip">A NEOM Panels Brand</span>
            </div>
          </div>

          <div className="architectural-media-stage hero-animate--delay">
            <figure className="architectural-photo-card" style={{ margin: 0 }}>
              <img
                src="/assets/packing-plywood-showcase.jpg"
                alt="Stacked packaging-grade plywood sheets with visible layered cross-ply edges in the foreground and an assembled timber and plywood packing case in an organised warehouse setting."
                width="1400"
                height="933"
                fetchPriority="high"
              />
              <figcaption className="architectural-photo-meta">
                <span>Indicative Packaging-Grade Plywood &amp; Case Assembly Illustration</span>
                <span>NEOM Packing Plywood</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Section 2 — Product Introduction */}
      <section className="section reveal-once">
        <div className="container split-editorial">
          <div className="split-editorial-content">
            <p className="eyebrow">PRODUCT INTRODUCTION</p>
            <h2 className="section-title">Material selection starts with what you need to pack.</h2>
            <p className="lead-text">
              Packing requirements vary with the product, its weight, the handling method and the
              conditions it may encounter during storage and transport. Choosing plywood begins with
              understanding those requirements.
            </p>
            <p>
              NEOM Packing Plywood offers moisture-resistant packaging-grade plywood for buyers
              planning packing cases, crates and related components. Our team can review your
              required dimensions, thicknesses and quantities before preparing a quotation.
            </p>

            <div
              style={{
                marginTop: 'var(--space-5)',
                padding: 'var(--space-4) var(--space-5)',
                backgroundColor: '#FCF9F4',
                border: '1px solid #DFD2BE',
                borderRadius: 'var(--radius-sm)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: 'var(--space-4)'
              }}
            >
              <img
                src="/assets/neom-packing-plywood-logo-stacked.svg"
                alt="NEOM Packing Plywood — Stacked Brand Lockup"
                className="packing-logo-stacked-img"
                width="520"
                height="260"
                loading="lazy"
              />
              <div style={{ flex: '1 1 16rem' }}>
                <span className="brand-spec-label" style={{ display: 'block' }}>
                  Confirmed Product Description
                </span>
                <p
                  style={{
                    fontWeight: 600,
                    color: 'var(--color-forest)',
                    margin: '0.25rem 0 0.25rem 0'
                  }}
                >
                  Moisture-resistant packaging-grade plywood (MR Grade)
                </p>
                <p className="secondary-text" style={{ fontSize: '0.875rem', margin: 0 }}>
                  Enquiry-led specification review for packing cases, crates and industrial
                  packaging components.
                </p>
              </div>
            </div>
          </div>

          <figure className="architectural-photo-card split-editorial-media" style={{ margin: 0 }}>
            <img
              src="/assets/packing-plywood-crates.jpg"
              alt="Clean packing-case fabrication workbench showing slotted plywood crate dividers, stacked multi-ply panels and a steel vernier caliper for thickness measurement."
              width="1400"
              height="933"
              loading="lazy"
            />
            <figcaption className="architectural-photo-meta">
              <span>Crate Panels, Dividers &amp; Thickness Verification</span>
              <span>Industrial Packaging Context</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Section 3 — Applications */}
      <section className="section section--warm reveal-once" id="applications">
        <div className="container">
          <p className="eyebrow">APPLICATIONS</p>
          <h2 className="section-title">Explore packaging applications.</h2>

          <div className="applications-cards-grid">
            {APPLICATION_CARDS.map((card) => (
              <article key={card.title} className="application-feature-card">
                <span className="application-card-number">{card.number}</span>
                <h3 className="subsection-title" style={{ marginBottom: 0 }}>
                  {card.title}
                </h3>
                <p style={{ margin: 0 }}>{card.description}</p>
              </article>
            ))}
          </div>

          <div
            className="progress-callout"
            style={{ marginTop: 'var(--space-6)', marginBottom: 0 }}
          >
            <p style={{ margin: 0, fontWeight: 500, color: 'var(--color-forest)' }}>
              Final suitability depends on the selected plywood specification, packaging design,
              load, handling method and exposure conditions.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4 — Buyer Section & Section 5 — Moisture Resistance Section */}
      <section className="section reveal-once">
        <div className="container">
          <div className="editorial-statement" style={{ marginBottom: 'var(--space-8)' }}>
            <div>
              <p className="eyebrow">BUYER PROFILE</p>
              <h2 className="section-title">
                For businesses that make, source and manage packaging.
              </h2>
            </div>
            <div className="editorial-statement-body">
              <p className="lead-text" style={{ marginBottom: 'var(--space-4)' }}>
                We welcome enquiries from packaging manufacturers, packing-case fabricators,
                industrial businesses, procurement teams and trade suppliers. From an initial
                requirement to a recurring purchasing schedule, share the details that will help us
                respond accurately.
              </p>
              <div className="btn-group">
                <Link
                  href="/enquiry?brand=neom-packing-plywood&category=industrial-packaging"
                  className="editorial-link"
                >
                  <span>Start a Packaging Plywood Enquiry</span>
                  <span className="link-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
                <Link href="/industries#industrial-packaging" className="editorial-link">
                  <span>View Industry Context</span>
                  <span className="link-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>

          <div
            className="editorial-statement"
            style={{
              paddingTop: 'var(--space-7)',
              borderTop: '1px solid var(--color-border)'
            }}
          >
            <div>
              <p className="eyebrow">GRADE GUIDANCE</p>
              <h2 className="section-title">Understanding the MR grade.</h2>
            </div>
            <div className="editorial-statement-body">
              <p className="lead-text">
                NEOM Packing Plywood is offered in a moisture-resistant grade. Share the expected
                storage and transport conditions with our team so the material can be considered
                against your application.
              </p>
              <div className="mr-grade-notice-box">
                <p style={{ margin: 0, fontWeight: 600, color: 'var(--color-forest)' }}>
                  Moisture resistance does not mean waterproof performance. Confirm the exact
                  specification before selecting plywood for prolonged wet conditions or demanding
                  outdoor exposure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6 — Specification Enquiry Section */}
      <section className="section section--sage-subtle reveal-once" id="specification-checklist">
        <div className="container">
          <div style={{ maxWidth: '72ch' }}>
            <p className="eyebrow">SPECIFICATION ENQUIRY</p>
            <h2 className="section-title">Tell us your specification.</h2>
            <p className="lead-text" style={{ marginBottom: 0 }}>
              A clear requirement helps us prepare a more relevant response.
            </p>
          </div>

          <ul className="spec-parameters-grid" role="list" aria-label="Enquiry specification parameters">
            {SPECIFICATION_PARAMETERS.map((param, idx) => (
              <li key={param} className="spec-parameter-item">
                <span className="spec-parameter-index">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <span>{param}</span>
              </li>
            ))}
          </ul>

          <div
            style={{
              marginTop: 'var(--space-5)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'var(--space-4)',
              paddingTop: 'var(--space-4)',
              borderTop: '1px solid var(--color-border)'
            }}
          >
            <p className="secondary-text" style={{ margin: 0, maxWidth: '72ch' }}>
              Request current sizes, thicknesses, availability and technical details from our team
              against your specific packing requirement.
            </p>
            <Link
              href="/brands"
              className="editorial-link"
            >
              <span>Back to All NEOM Brands</span>
              <span className="link-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7 — Closing CTA */}
      <section className="section section--no-border reveal-once">
        <div className="container split-editorial">
          <div>
            <p className="eyebrow">QUOTATION &amp; SUPPLY DESK</p>
            <h2 className="section-title">Let’s discuss your next packing requirement.</h2>
            <p className="lead-text" style={{ marginBottom: 0 }}>
              Send us your application, dimensions, quantity and delivery location. Our team will
              respond with the relevant product and quotation information.
            </p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
            <Link
              href="/enquiry?brand=neom-packing-plywood&category=industrial-packaging"
              className="btn btn--primary"
            >
              Enquire About NEOM Packing Plywood
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
