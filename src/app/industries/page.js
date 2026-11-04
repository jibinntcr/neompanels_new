import Link from 'next/link';
import { buildPageMetadata, getBreadcrumbJsonLd, SITE_URL } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Industries & Applications — B2B Wood-Panel Specifications',
  description:
    'Start with the application. Explore NEOM Panels’ B2B wood-panel solutions for furniture OEMs, modular kitchens and wardrobes, commercial interiors, institutional procurement, industrial packaging and regional distribution in India.',
  path: '/industries',
  ogImage: '/assets/industry-furniture-oem.jpg',
  ogImageAlt: 'NEOM Panels — B2B Wood-Panel Applications for Furniture OEMs, Modular Interiors and Packaging',
  keywords: [
    'furniture OEM plywood supplier India',
    'modular kitchen carcass plywood India',
    'wardrobe shutter calibrated plywood',
    'commercial interior fit-out wood panels',
    'institutional plywood procurement India',
    'industrial packaging and crating plywood',
    'plywood distributor and dealer network India',
    'custom wood panel OEM manufacturing India'
  ]
});

export default function IndustriesPage() {
  const industriesJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      getBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Industries & Applications', path: '/industries' }
      ]),
      {
        '@type': 'CollectionPage',
        '@id': `${SITE_URL}/industries#webpage`,
        name: 'Industries & Wood-Panel Applications — NEOM Panels',
        url: `${SITE_URL}/industries`,
        description:
          'Application-first B2B wood-panel guidance for furniture OEMs, modular systems, commercial projects, institutions, industrial packaging and distributors.'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(industriesJsonLd) }}
      />
      <section className="page-header section--architectural-grid">
        <div className="container hero-animate">
          <p className="eyebrow">INDUSTRIES &amp; BUYER CONTEXTS</p>
          <h1 id="main-heading" tabIndex={-1} className="page-title">
            Start with the application.
          </h1>
          <p className="lead-text">
            A useful material discussion begins with what the panel needs to do. Share your
            application, specification and purchasing requirements so we can discuss the relevant
            product information and next steps.
          </p>

          <nav className="industry-nav-bar" aria-label="Industry sections">
            <a href="#furniture-oem" className="industry-jump-link">
              01. Furniture &amp; OEM Manufacturing
            </a>
            <a href="#modular-furniture" className="industry-jump-link">
              02. Modular Furniture &amp; Interior Systems
            </a>
            <a href="#projects-interiors" className="industry-jump-link">
              03. Projects &amp; Commercial Interiors
            </a>
            <a href="#institutions-procurement" className="industry-jump-link">
              04. Institutions &amp; Public Procurement
            </a>
            <a href="#distribution-partners" className="industry-jump-link">
              05. Distribution &amp; Channel Partnerships
            </a>
            <a href="#architects-designers" className="industry-jump-link">
              06. Architects &amp; Designers
            </a>
            <a href="#industrial-packaging" className="industry-jump-link">
              07. Industrial Packaging
            </a>
          </nav>
        </div>
      </section>

      <section
        className="section section--sage-subtle reveal-once"
        style={{ paddingBlock: 'var(--space-5)' }}
      >
        <div className="container">
          <p style={{ margin: 0, maxWidth: '85ch' }}>
            <strong>Note on material selection:</strong> Panel suitability depends on the specific
            product, grade, thickness and environmental exposure of the intended space. Always
            verify current technical documentation for the exact grade under consideration before
            finalising a production schedule or tender submission.
          </p>
        </div>
      </section>

      <section className="section section--no-border">
        <div className="container">
          {/* 01. Furniture & OEM Manufacturing */}
          <article
            className="industry-section-block reveal-once"
            id="furniture-oem"
            style={{ paddingTop: 0 }}
          >
            <div>
              <p className="eyebrow">01 · MANUFACTURING SUPPLY</p>
              <h2 className="section-title">Furniture &amp; OEM Manufacturing</h2>
              <p className="lead-text">
                Furniture manufacturers and OEMs work around machining schedules, panel yield,
                dimensional tolerances and repeatable batch supply.
              </p>
              <p>
                Whether you are producing residential furniture lines, office systems or OEM
                components for third-party brands, a practical supply discussion focuses on
                aligning panel dimensions and grade selection with your fabrication process and
                call-off calendar.
              </p>
              <figure
                className="architectural-photo-card"
                style={{ marginTop: 'var(--space-5)', marginBottom: 0 }}
              >
                <img
                  src="/assets/industry-furniture-oem.jpg"
                  alt="CNC-machined oak furniture components and calibrated panel stacks."
                  width="1400"
                  height="933"
                  loading="lazy"
                />
                <figcaption className="architectural-photo-meta">
                  <span>Serial Furniture Fabrication &amp; Calibrated Panel Stacks</span>
                  <span>01 · OEM Supply</span>
                </figcaption>
              </figure>
            </div>
            <div className="enquiry-checklist-box">
              <h3 className="enquiry-checklist-title">What to share in your enquiry</h3>
              <ul className="checklist-items">
                <li>
                  <strong>Application:</strong> Furniture category, structural or non-structural
                  component use.
                </li>
                <li>
                  <strong>Specification:</strong> Required panel grade, nominal thicknesses and
                  sheet dimensions.
                </li>
                <li>
                  <strong>Quantity &amp; frequency:</strong> Initial batch volume and monthly or
                  quarterly recurring schedule.
                </li>
                <li>
                  <strong>Destination:</strong> Factory delivery location and unloading format.
                </li>
              </ul>
              <Link
                href="/enquiry?category=Manufacturing+%26+recurring+supply&application=Furniture+%26+OEM+Manufacturing"
                className="btn btn--primary"
              >
                Discuss OEM Supply
              </Link>
            </div>
          </article>

          {/* 02. Modular Furniture & Interior Systems */}
          <article className="industry-section-block reveal-once" id="modular-furniture">
            <div>
              <p className="eyebrow">02 · MODULAR FABRICATION</p>
              <h2 className="section-title">Modular Furniture &amp; Interior Systems</h2>
              <p className="lead-text">
                Modular kitchen, wardrobe and workstation manufacturers require consistent
                thickness calibration, clean edge-processing behaviour and reliable replenishment
                across core thicknesses.
              </p>
              <p>
                Different interior zones—such as dry wardrobe carcasses versus sink-adjacent
                kitchen cabinetry—place distinct demands on panel substrates. Defining where each
                component will be installed helps identify the appropriate product information.
              </p>
              <figure
                className="architectural-photo-card"
                style={{ marginTop: 'var(--space-5)', marginBottom: 0 }}
              >
                <img
                  src="/assets/industry-modular-interiors.jpg"
                  alt="Modular kitchen and open wardrobe system built from natural oak and matte sage panels."
                  width="1400"
                  height="933"
                  loading="lazy"
                />
                <figcaption className="architectural-photo-meta">
                  <span>Modular Kitchen &amp; Wardrobe Systems</span>
                  <span>02 · Interior Systems</span>
                </figcaption>
              </figure>
            </div>
            <div className="enquiry-checklist-box">
              <h3 className="enquiry-checklist-title">What to share in your enquiry</h3>
              <ul className="checklist-items">
                <li>
                  <strong>Application:</strong> Carcass, shutter, shelving, partition or backing
                  component, and interior moisture conditions.
                </li>
                <li>
                  <strong>Specification:</strong> Preferred brand (such as Starwoods), substrate
                  expectations and surface finish workflow.
                </li>
                <li>
                  <strong>Quantity &amp; frequency:</strong> Thickness-wise volume breakdown and
                  replenishment cycle.
                </li>
                <li>
                  <strong>Destination:</strong> Production unit city and preferred dispatch
                  timeline.
                </li>
              </ul>
              <Link
                href="/enquiry?category=Manufacturing+%26+recurring+supply&application=Modular+Furniture+%26+Interior+Systems"
                className="btn btn--primary"
              >
                Discuss Modular Requirements
              </Link>
            </div>
          </article>

          {/* 03. Projects & Commercial Interiors */}
          <article className="industry-section-block reveal-once" id="projects-interiors">
            <div>
              <p className="eyebrow">03 · CONTRACTING &amp; FIT-OUT</p>
              <h2 className="section-title">Projects &amp; Commercial Interiors</h2>
              <p className="lead-text">
                Interior contractors and commercial fit-out companies procure materials against
                project bills of quantities (BOQs), consultant specifications and phased site
                handover schedules.
              </p>
              <p>
                Sharing your BOQ extract early allows us to review the specified parameters,
                confirm which products and grades are relevant to your scope, and discuss delivery
                phasing to match site readiness.
              </p>
              <figure
                className="architectural-photo-card"
                style={{ marginTop: 'var(--space-5)', marginBottom: 0 }}
              >
                <img
                  src="/assets/industry-commercial-projects.jpg"
                  alt="Executive commercial boardroom featuring acoustic slatted oak wall panels and custom joinery."
                  width="1400"
                  height="933"
                  loading="lazy"
                />
                <figcaption className="architectural-photo-meta">
                  <span>Commercial Fit-Outs, Boardrooms &amp; Acoustic Wall Panelling</span>
                  <span>03 · Project Supply</span>
                </figcaption>
              </figure>
            </div>
            <div className="enquiry-checklist-box">
              <h3 className="enquiry-checklist-title">What to share in your enquiry</h3>
              <ul className="checklist-items">
                <li>
                  <strong>Application:</strong> Commercial office, hospitality, retail, educational
                  or healthcare fit-out scope.
                </li>
                <li>
                  <strong>Specification:</strong> Consultant specification clauses or BOQ line items
                  (PDF/JPG/PNG attachments supported).
                </li>
                <li>
                  <strong>Quantity:</strong> Estimated sheet counts by thickness and project phase.
                </li>
                <li>
                  <strong>Destination &amp; documentation:</strong> Project site location, target
                  delivery dates and required technical submittals.
                </li>
              </ul>
              <Link
                href="/enquiry?category=Project+requirement&application=Projects+%26+Commercial+Interiors"
                className="btn btn--primary"
              >
                Share a Project Requirement
              </Link>
            </div>
          </article>

          {/* 04. Institutions & Public Procurement */}
          <article className="industry-section-block reveal-once" id="institutions-procurement">
            <div>
              <p className="eyebrow">04 · INSTITUTIONAL BUYERS</p>
              <h2 className="section-title">Institutions &amp; Public Procurement</h2>
              <p className="lead-text">
                Institutional buyers, government departments, public-sector undertakings (PSUs) and
                their executing contractors evaluate panel materials against defined technical
                standards and documentation checklists.
              </p>
              <p>
                Where an institutional requirement or tender specifies particular material grades,
                dimensional tolerances or test report scopes, share the exact specification clauses
                so we can confirm the current product documentation available for review.
              </p>
            </div>
            <div className="enquiry-checklist-box">
              <h3 className="enquiry-checklist-title">What to share in your enquiry</h3>
              <ul className="checklist-items">
                <li>
                  <strong>Application &amp; reference:</strong> Institutional furniture or building
                  interior scope, and procurement reference if applicable.
                </li>
                <li>
                  <strong>Specification:</strong> Relevant standard clauses, grade parameters and
                  nominal thicknesses.
                </li>
                <li>
                  <strong>Documentation:</strong> Required product data sheets, specification
                  confirmations or test report scopes.
                </li>
                <li>
                  <strong>Quantity &amp; destination:</strong> Schedule of quantities and regional
                  delivery points.
                </li>
              </ul>
              <Link
                href="/enquiry?category=Institutional+%26+public+procurement&application=Institutions+%26+Public+Procurement"
                className="btn btn--primary"
              >
                Enquire for Institutional Procurement
              </Link>
            </div>
          </article>

          {/* 05. Distribution & Channel Partnerships */}
          <article className="industry-section-block reveal-once" id="distribution-partners">
            <div>
              <p className="eyebrow">05 · CHANNEL NETWORK</p>
              <h2 className="section-title">Distribution &amp; Channel Partnerships</h2>
              <p className="lead-text">
                Distributors, stockists and timber-panel channel partners connect factory supply
                with regional furniture makers, contractors and trade buyers.
              </p>
              <p>
                NEOM Panels seeks long-term channel relationships with established trade partners
                looking to represent our brands, including Starwoods and NEOM Packing Plywood, in
                defined markets across India.
              </p>
            </div>
            <div className="enquiry-checklist-box">
              <h3 className="enquiry-checklist-title">What to share in your enquiry</h3>
              <ul className="checklist-items">
                <li>
                  <strong>Territory &amp; destination:</strong> Primary city, district or state
                  coverage area.
                </li>
                <li>
                  <strong>Business profile:</strong> Existing panel or building-material lines
                  handled, warehousing capacity and customer base.
                </li>
                <li>
                  <strong>Brand interest:</strong> Interest in Starwoods, NEOM Packing Plywood or
                  broader NEOM Panels supply programmes.
                </li>
                <li>
                  <strong>Frequency:</strong> Indicative stocking and dispatch expectations.
                </li>
              </ul>
              <Link
                href="/enquiry?category=Distribution+partnership&application=Distribution+%26+Channel+Partnerships"
                className="btn btn--primary"
              >
                Introduce a Distribution Proposal
              </Link>
            </div>
          </article>

          {/* 06. Architects & Designers */}
          <article className="industry-section-block reveal-once" id="architects-designers">
            <div>
              <p className="eyebrow">06 · SPECIFICATION TEAMS</p>
              <h2 className="section-title">Architects &amp; Designers</h2>
              <p className="lead-text">
                Architects, interior designers and project procurement teams need clear, accurate
                material information when preparing interior drawings and tender schedules.
              </p>
              <p>
                Whether you operate as an architectural firm or an independent design professional,
                you can contact NEOM Panels to request current product literature, discuss substrate
                selection for an interior application or align specifications ahead of contractor
                tendering.
              </p>
            </div>
            <div className="enquiry-checklist-box">
              <h3 className="enquiry-checklist-title">What to share in your enquiry</h3>
              <ul className="checklist-items">
                <li>
                  <strong>Application:</strong> Interior space type, joinery or furniture element,
                  and service conditions.
                </li>
                <li>
                  <strong>Specification:</strong> Target thicknesses, substrate considerations and
                  performance parameters.
                </li>
                <li>
                  <strong>Documentation:</strong> Product data sheets, brand literature or sample
                  requests.
                </li>
                <li>
                  <strong>Project location:</strong> City or region where the project will be
                  executed.
                </li>
              </ul>
              <Link
                href="/enquiry?category=Product+information&application=Architects+%26+Designers"
                className="btn btn--primary"
              >
                Request Specification Information
              </Link>
            </div>
          </article>

          {/* 07. Industrial Packaging & Packing-Case Manufacturing */}
          <article className="industry-section-block reveal-once" id="industrial-packaging">
            <div>
              <p className="eyebrow">07 · INDUSTRIAL PACKAGING</p>
              <h2 className="section-title">
                Industrial Packaging &amp; Packing-Case Manufacturing
              </h2>
              <p className="lead-text">
                Packaging manufacturers and industrial buyers source plywood around packing designs,
                fabrication requirements and dispatch schedules. NEOM Packing Plywood provides a
                dedicated brand for moisture-resistant packaging-grade plywood enquiries.
              </p>
              <p>
                Share the packaging application, required sheet dimensions, thicknesses and purchase
                volume so our team can discuss the relevant material and supply information.
              </p>
              <figure
                className="architectural-photo-card"
                style={{ marginTop: 'var(--space-5)', marginBottom: 0 }}
              >
                <img
                  src="/assets/packing-plywood-crates.jpg"
                  alt="Clean packing-case fabrication workbench showing slotted plywood crate dividers, stacked multi-ply panels and a steel vernier caliper for thickness measurement."
                  width="1400"
                  height="933"
                  loading="lazy"
                />
                <figcaption className="architectural-photo-meta">
                  <span>Packing Cases, Crates &amp; Industrial Packaging Components</span>
                  <span>07 · NEOM Packing Plywood</span>
                </figcaption>
              </figure>
            </div>
            <div className="enquiry-checklist-box">
              <div style={{ marginBottom: 'var(--space-3)' }}>
                <img
                  src="/assets/neom-packing-plywood-logo-compact.svg"
                  alt="NEOM Packing Plywood"
                  className="packing-logo-img--xs"
                  width="540"
                  height="112"
                />
              </div>
              <h3 className="enquiry-checklist-title">What to share in your enquiry</h3>
              <ul className="checklist-items">
                <li>
                  <strong>Application:</strong> Packing case, crate panel, liner, divider or other
                  packaging component.
                </li>
                <li>
                  <strong>Specification:</strong> Required thickness, sheet dimensions and any
                  buyer-defined material requirements.
                </li>
                <li>
                  <strong>Quantity and frequency:</strong> Initial quantity and expected repeat
                  purchasing schedule.
                </li>
                <li>
                  <strong>Destination and timing:</strong> Delivery location and required delivery
                  date.
                </li>
              </ul>
              <div className="btn-group">
                <Link
                  href="/enquiry?brand=neom-packing-plywood&category=industrial-packaging"
                  className="btn btn--primary"
                >
                  Discuss Packaging Supply
                </Link>
                <Link href="/brands/neom-packing-plywood" className="editorial-link">
                  <span>Explore NEOM Packing Plywood</span>
                  <span className="link-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
