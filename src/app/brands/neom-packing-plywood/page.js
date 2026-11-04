import Link from 'next/link';
import DocumentRequestButton from '@/components/DocumentRequestButton';
import { buildPageMetadata, getBreadcrumbJsonLd, SITE_URL } from '@/lib/seo';

export const metadata = buildPageMetadata({
  absoluteTitle:
    'NEOM Packing Plywood | Moisture-Resistant Industrial Packaging Plywood | NEOM Panels',
  description:
    'MR packaging-grade plywood for packing cases, crates, dividers and protective enclosures. Share your required thickness, sheet dimensions, quantity and delivery location to request product information and a quotation.',
  path: '/brands/neom-packing-plywood',
  ogImage: '/assets/packing-plywood-showcase.jpg',
  ogImageAlt: 'NEOM Packing Plywood — Moisture-Resistant (MR) Packaging-Grade Plywood Sheets and Crates',
  ogImages: [
    {
      url: '/assets/packing-plywood-showcase.jpg',
      width: 1400,
      height: 933,
      alt: 'NEOM Packing Plywood — Moisture-Resistant (MR) Packaging-Grade Plywood Sheets and Crates'
    },
    {
      url: '/assets/packing-plywood-crates.jpg',
      width: 1400,
      height: 933,
      alt: 'NEOM Packing Plywood — Industrial Packing Cases, Crates and Slotted Plywood Dividers'
    },
    {
      url: '/assets/neom-packing-plywood-logo-stacked.png',
      width: 520,
      height: 260,
      alt: 'NEOM Packing Plywood — Official Stacked Brand Mark'
    },
    {
      url: '/assets/neom-packing-plywood-logo-horizontal.png',
      width: 580,
      height: 168,
      alt: 'NEOM Packing Plywood — Packaging Grade · Moisture Resistant'
    }
  ],
  keywords: [
    'NEOM Packing Plywood',
    'industrial packaging plywood manufacturer India',
    'moisture resistant packaging plywood',
    'MR grade packing plywood sheets',
    'plywood for packing cases and crates',
    'heavy duty export crate plywood India',
    'wooden and plywood crates material supplier',
    'pallet collar plywood sheets',
    'packaging grade plywood wholesale India',
    'industrial crating plywood quotation'
  ]
});

const VERIFIED_SPECIFICATIONS = [
  {
    parameter: 'Product category',
    value: 'Packaging-grade plywood'
  },
  {
    parameter: 'Grade',
    value: 'Moisture Resistant (MR)'
  },
  {
    parameter: 'Supply coverage',
    value:
      'India — B2B supply for packaging manufacturers, packing-case fabricators, industrial buyers and trade suppliers'
  },
  {
    parameter: 'Available technical documents',
    value:
      'Product specification sheets and handling guidance provided on individual review against requirement scope'
  }
];

const APPLICATION_CATEGORIES = [
  {
    title: 'Packing cases',
    description:
      'Sheet material for fabricated packing cases used to protect machinery, engineered components and commercial goods during storage and transit.'
  },
  {
    title: 'Crates and protective enclosures',
    description:
      'Plywood panels for industrial crates, reinforced box enclosures and outer protective sheathing matched to load and handling conditions.'
  },
  {
    title: 'Dividers, liners and packaging panels',
    description:
      'Internal partition dividers, case liners, base boards, layer pads and custom-cut packaging panels within multi-part assemblies.'
  }
];

const QUOTATION_CHECKLIST = [
  {
    label: 'Application',
    detail: 'Packing cases, crates and protective enclosures, or dividers, liners and panels'
  },
  {
    label: 'Required thickness',
    detail: 'Nominal thickness(es) in mm'
  },
  {
    label: 'Sheet dimensions',
    detail: 'Required length and width in mm or ft'
  },
  {
    label: 'Quantity and unit',
    detail: 'Estimated volume in sheets, sq. m, sq. ft or truckload'
  },
  {
    label: 'Purchase schedule',
    detail: 'One-time purchase or recurring monthly/quarterly supply'
  },
  {
    label: 'Delivery & timing',
    detail: 'Delivery city/state, required delivery date and any supporting drawings'
  }
];

export default function NeomPackingPlywoodPage() {
  const brandJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      getBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Brands', path: '/brands' },
        { name: 'NEOM Packing Plywood', path: '/brands/neom-packing-plywood' }
      ]),
      {
        '@type': 'WebPage',
        '@id': `${SITE_URL}/brands/neom-packing-plywood#webpage`,
        name: 'NEOM Packing Plywood — Moisture-Resistant Industrial Packaging Plywood',
        url: `${SITE_URL}/brands/neom-packing-plywood`,
        description:
          'MR packaging-grade plywood for packing cases, crates, dividers and protective enclosures manufactured by NEOM Panels in India.',
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/assets/packing-plywood-showcase.jpg`,
          width: 1400,
          height: 933,
          caption: 'NEOM Packing Plywood — Moisture-Resistant Packaging-Grade Plywood Sheets and Crates'
        },
        image: [
          `${SITE_URL}/assets/packing-plywood-showcase.jpg`,
          `${SITE_URL}/assets/packing-plywood-crates.jpg`,
          `${SITE_URL}/assets/neom-packing-plywood-logo-stacked.png`,
          `${SITE_URL}/assets/neom-packing-plywood-logo-horizontal.png`
        ]
      },
      {
        '@type': 'Brand',
        '@id': `${SITE_URL}/brands/neom-packing-plywood#brand`,
        name: 'NEOM Packing Plywood',
        url: `${SITE_URL}/brands/neom-packing-plywood`,
        logo: `${SITE_URL}/assets/neom-packing-plywood-logo-horizontal.png`,
        image: [
          `${SITE_URL}/assets/packing-plywood-showcase.jpg`,
          `${SITE_URL}/assets/packing-plywood-crates.jpg`
        ],
        description:
          'MR packaging-grade plywood for packing cases, crates, dividers and protective enclosures.',
        parentOrganization: {
          '@type': 'Organization',
          name: 'NEOM Panels',
          url: SITE_URL
        }
      },
      {
        '@type': 'Product',
        name: 'NEOM Packing Plywood — Moisture-Resistant (MR) Packaging-Grade Plywood',
        image: [
          `${SITE_URL}/assets/packing-plywood-showcase.jpg`,
          `${SITE_URL}/assets/packing-plywood-crates.jpg`,
          `${SITE_URL}/assets/neom-packing-plywood-logo-stacked.png`
        ],
        description:
          'Moisture-resistant (MR) packaging-grade plywood manufactured by NEOM Panels in India for industrial packing cases, export crates, dividers, liners and protective enclosures.',
        brand: {
          '@type': 'Brand',
          name: 'NEOM Packing Plywood'
        },
        manufacturer: {
          '@type': 'Organization',
          name: 'NEOM Panels',
          url: SITE_URL
        },
        category: 'Industrial Packaging Plywood',
        material: 'Multi-Ply Moisture-Resistant (MR) Wood Veneer',
        additionalProperty: VERIFIED_SPECIFICATIONS.map((spec) => ({
          '@type': 'PropertyValue',
          name: spec.parameter,
          value: spec.value
        }))
      }
    ]
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(brandJsonLd) }}
      />

      {/* 1. Hero and existing product visual */}
      <section className="page-header section--architectural-grid">
        <div className="container hero-split">
          <div className="hero-copy hero-animate">
            <div className="packing-logo-plaque">
              <img
                src="/assets/neom-packing-plywood-logo-horizontal.svg"
                alt="NEOM Packing Plywood — Packaging Grade · Moisture Resistant"
                className="packing-logo-img"
                width="580"
                height="168"
              />
            </div>

            <p className="eyebrow">A NEOM Panels Brand</p>
            <h1 id="main-heading" tabIndex={-1} className="page-title">
              Moisture-Resistant Plywood for Industrial Packaging
            </h1>
            <p className="lead-text">
              MR packaging-grade plywood for packing cases, crates, dividers and protective
              enclosures. Share your required thickness, sheet dimensions, quantity and delivery
              location to request product information and a quotation.
            </p>

            <div className="btn-group" style={{ marginTop: 'var(--space-5)' }}>
              <Link
                href="/enquiry?brand=neom-packing-plywood&category=industrial-packaging"
                className="btn btn--primary"
              >
                Request a Quote
              </Link>
              <a href="#applications" className="btn btn--secondary">
                View Applications
              </a>
            </div>

            <div className="supporting-labels-row" aria-label="Brand attributes">
              <span className="supporting-label-chip">Packaging Grade</span>
              <span className="supporting-label-chip supporting-label-chip--oak">
                Moisture Resistant (MR)
              </span>
              <span className="supporting-label-chip">A NEOM Panels Brand</span>
            </div>
          </div>

          <div className="architectural-media-stage hero-animate--delay">
            <figure className="architectural-photo-card" style={{ margin: 0 }}>
              <img
                src="/assets/packing-plywood-showcase.jpg"
                alt="Stacked packaging-grade plywood sheets with visible layered cross-ply edges in the foreground and an assembled timber and plywood packing case in the background."
                width="1400"
                height="933"
                fetchPriority="high"
              />
              <figcaption className="architectural-photo-meta">
                <span>Packaging-Grade Plywood</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* 2. Product overview and verified specifications */}
      <section className="section reveal-once" id="product-overview">
        <div className="container">
          <div className="split-editorial">
            <div className="split-editorial-content">
              <p className="eyebrow">Product Overview</p>
              <h2 className="section-title">Material selection starts with what you need to pack.</h2>
              <p className="lead-text">
                Packing requirements depend on product weight, geometry, handling method and
                storage or transport conditions. NEOM Packing Plywood supplies moisture-resistant
                packaging-grade plywood for industrial case fabricators and dispatch operations.
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
                  alt="NEOM Packing Plywood stacked brand mark"
                  className="packing-logo-stacked-img"
                  width="520"
                  height="260"
                  loading="lazy"
                />
                <div style={{ flex: '1 1 15rem' }}>
                  <p
                    style={{
                      fontWeight: 600,
                      color: 'var(--color-forest)',
                      margin: '0 0 0.35rem 0'
                    }}
                  >
                    Verified Product Scope
                  </p>
                  <p className="secondary-text" style={{ fontSize: '0.9rem', margin: 0 }}>
                    Thicknesses (mm), sheet dimensions, core construction and order quantities are
                    confirmed against your specific packing requirement prior to quotation.
                  </p>
                </div>
              </div>
            </div>

            <figure className="architectural-photo-card split-editorial-media" style={{ margin: 0 }}>
              <img
                src="/assets/packing-plywood-crates.jpg"
                alt="Packing-case fabrication workbench showing slotted plywood crate dividers, stacked multi-ply panels and a steel vernier caliper."
                width="1400"
                height="933"
                loading="lazy"
              />
              <figcaption className="architectural-photo-meta">
                <span>Packing Cases and Crates</span>
              </figcaption>
            </figure>
          </div>

          <div
            className="table-responsive"
            role="region"
            aria-labelledby="verified-specs-caption"
            tabIndex={0}
            style={{ marginTop: 'var(--space-7)' }}
          >
            <table className="spec-table">
              <caption id="verified-specs-caption">
                NEOM Packing Plywood — Verified Product &amp; Supply Information
              </caption>
              <thead>
                <tr>
                  <th scope="col" style={{ width: '32%' }}>
                    Specification Parameter
                  </th>
                  <th scope="col">Verified Detail</th>
                </tr>
              </thead>
              <tbody>
                {VERIFIED_SPECIFICATIONS.map((row) => (
                  <tr key={row.parameter}>
                    <td style={{ fontWeight: 600, color: 'var(--color-forest)' }}>
                      {row.parameter}
                    </td>
                    <td>{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div
            style={{
              marginTop: 'var(--space-4)',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'var(--space-3)'
            }}
          >
            <p className="secondary-text" style={{ fontSize: '0.9375rem', margin: 0 }}>
              Need nominal thicknesses (mm), sheet dimensions, core construction details or minimum
              order quantities for your schedule?
            </p>
            <DocumentRequestButton
              documentTitle="NEOM Packing Plywood — Technical Specification & Grade Details"
              docCategory="NEOM Packing Plywood"
              label="Request Technical Documents"
            />
          </div>
        </div>
      </section>

      {/* 3. Applications + Recurring Supply Purchasing Option */}
      <section className="section section--warm reveal-once" id="applications">
        <div className="container">
          <p className="eyebrow">Applications</p>
          <h2 className="section-title">Industrial packaging applications.</h2>

          <div className="applications-cards-grid applications-cards-grid--three">
            {APPLICATION_CATEGORIES.map((card) => (
              <article key={card.title} className="application-feature-card">
                <h3 className="subsection-title" style={{ marginBottom: 0 }}>
                  {card.title}
                </h3>
                <p style={{ margin: 0 }}>{card.description}</p>
              </article>
            ))}
          </div>

          {/* Separate Purchasing Option: Recurring Supply */}
          <div className="recurring-supply-banner">
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.35rem' }}>
                Purchasing Option
              </p>
              <h3 className="subsection-title" style={{ marginBottom: '0.35rem' }}>
                Recurring supply for packaging manufacturers and industrial buyers
              </h3>
              <p style={{ margin: 0 }}>
                In addition to single-batch orders, NEOM Packing Plywood supports scheduled monthly
                and quarterly supply arrangements for packing-case fabricators and manufacturing
                plants with ongoing dispatch requirements.
              </p>
            </div>
            <div style={{ flexShrink: 0 }}>
              <Link
                href="/enquiry?brand=neom-packing-plywood&category=industrial-packaging&frequency=Recurring+monthly+%2F+scheduled+supply"
                className="btn btn--secondary"
              >
                Enquire About Recurring Supply
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MR grade guidance */}
      <section className="section reveal-once" id="mr-grade-guidance">
        <div className="container editorial-statement">
          <div>
            <p className="eyebrow">MR Grade Guidance</p>
            <h2 className="section-title">Suitability and exposure conditions.</h2>
          </div>
          <div className="editorial-statement-body">
            <div className="mr-grade-notice-box" style={{ marginTop: 0 }}>
              <p
                style={{
                  margin: 0,
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: 'var(--color-forest)'
                }}
              >
                Moisture-resistant plywood is not waterproof. Confirm suitability against the
                expected storage, handling and transport conditions before ordering.
              </p>
            </div>
            <p style={{ marginTop: 'var(--space-4)', marginBottom: 0 }}>
              Final performance depends on packaging design, load distribution, fastener selection,
              warehouse storage and transit humidity exposure.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Quotation requirements */}
      <section className="section section--sage-subtle reveal-once" id="quotation-requirements">
        <div className="container">
          <div style={{ maxWidth: '72ch' }}>
            <p className="eyebrow">Quotation Requirements</p>
            <h2 className="section-title">What to include for a quotation.</h2>
            <p className="secondary-text" style={{ marginBottom: 0 }}>
              Include the details you have available; optional specifications can be finalised with
              our team during review.
            </p>
          </div>

          <ul
            className="spec-parameters-grid"
            role="list"
            aria-label="Quotation requirement parameters"
          >
            {QUOTATION_CHECKLIST.map((item) => (
              <li key={item.label} className="spec-parameter-item" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.25rem' }}>
                <strong style={{ color: 'var(--color-forest)' }}>{item.label}</strong>
                <span className="secondary-text" style={{ fontSize: '0.9rem', fontWeight: 400 }}>
                  {item.detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. Final enquiry action */}
      <section className="section section--no-border reveal-once">
        <div className="container split-editorial">
          <div>
            <p className="eyebrow">Enquiry &amp; Quotation</p>
            <h2 className="section-title">Request a quotation for NEOM Packing Plywood.</h2>
            <p className="lead-text" style={{ marginBottom: 0 }}>
              Open the enquiry form with NEOM Packing Plywood and Industrial Packaging preselected.
            </p>
          </div>
          <div className="btn-group">
            <Link
              href="/enquiry?brand=neom-packing-plywood&category=industrial-packaging"
              className="btn btn--primary"
            >
              Request a Quote
            </Link>
            <Link href="/brands" className="editorial-link">
              <span>View All NEOM Brands</span>
              <span className="link-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
