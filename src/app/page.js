import Link from 'next/link';
import InteractiveApplicationExplorer from '@/components/InteractiveApplicationExplorer';
import DocumentRequestButton from '@/components/DocumentRequestButton';
import HeroInteractiveShowcase from '@/components/HeroInteractiveShowcase';
import { buildPageMetadata, SITE_URL } from '@/lib/seo';

export const metadata = buildPageMetadata({
  absoluteTitle:
    'NEOM Panels | Indian Wood-Panel Manufacturer — Calibrated Furniture, Interior & Industrial Packaging Plywood',
  description:
    'NEOM Panels manufactures wood-panel products in India for furniture OEMs, modular kitchens, commercial interior projects and industrial packaging. Home to Starwoods and NEOM Packing Plywood.',
  path: '/',
  keywords: [
    'NEOM Panels',
    'wood panel manufacturer India',
    'plywood manufacturer in India',
    'calibrated plywood manufacturer India',
    'OEM furniture plywood supplier',
    'modular kitchen plywood India',
    'wardrobe grade plywood substrates',
    'architectural joinery wood panels',
    'commercial interior plywood BOQ supplier',
    'industrial packaging plywood manufacturer India',
    'MR grade packing plywood sheets',
    'moisture resistant packaging plywood',
    'plywood for packing cases and crates',
    'Starwoods plywood India',
    'NEOM Packing Plywood',
    'bulk plywood wholesale factory India'
  ]
});

const HOME_FAQS = [
  {
    question: 'What wood-panel products does NEOM Panels manufacture in India?',
    answer:
      'NEOM Panels manufactures calibrated multi-ply wood-panel substrates for serial furniture and OEM production, modular kitchen and wardrobe systems, commercial and institutional interior joinery, and moisture-resistant (MR) packaging-grade plywood for industrial packing cases, crates and protective enclosures.'
  },
  {
    question: 'How do Starwoods and NEOM Packing Plywood fit within NEOM Panels?',
    answer:
      'NEOM Panels is the parent wood-panel manufacturing company operating its own production facility in India. Starwoods is NEOM Panels’ brand dedicated to furniture manufacturing, modular cabinetry and interior applications, while NEOM Packing Plywood is our brand dedicated to moisture-resistant (MR) industrial packaging plywood for crates, boxes and logistics components.'
  },
  {
    question: 'What specifications should B2B buyers share when requesting a wood-panel quotation?',
    answer:
      'To receive an accurate technical recommendation and commercial quotation, share your end application (furniture carcass, modular shutter, commercial panelling or industrial packing crate), required nominal thickness in mm, sheet dimensions (for example 8 × 4 ft / 2440 × 1220 mm), grade requirement (Interior or MR packaging grade), order quantity (one-time project BOQ or recurring monthly schedule) and delivery destination in India.'
  },
  {
    question: 'Does NEOM Panels support OEM recurring supply and institutional project BOQs?',
    answer:
      'Yes. NEOM Panels works directly with furniture OEMs, modular kitchen factories, turnkey interior contractors, industrial packaging fabricators, institutional procurement teams and regional channel partners across India for both scheduled batch supply and phased project deliveries.'
  }
];

export default function HomePage() {
  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        '@id': `${SITE_URL}/#manufactured-products`,
        name: 'NEOM Panels Manufactured Wood-Panel Solutions',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Calibrated Furniture & OEM Panels',
            description:
              'Uniform thickness and dense multi-ply core construction engineered for CNC routing, clean edge-banding and serial furniture production.',
            url: `${SITE_URL}/industries#furniture-oem`
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Modular Kitchen & Wardrobe Substrates',
            description:
              'Dimensionally stable wood-panel substrates suited for laminate, veneer or acrylic pressing across wardrobe carcasses and kitchen cabinetry.',
            url: `${SITE_URL}/industries#modular-furniture`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Architectural Joinery & Commercial Project Panels',
            description:
              'Project-grade wood panels aligned with consultant specifications, tender schedules and commercial fit-out bills of quantities (BOQs).',
            url: `${SITE_URL}/industries#projects-interiors`
          },
          {
            '@type': 'ListItem',
            position: 4,
            name: 'Moisture-Resistant (MR) Industrial Packaging Plywood',
            description:
              'MR packaging-grade multi-ply plywood engineered for packing cases, export crates, pallet collars, dividers and protective liners.',
            url: `${SITE_URL}/brands/neom-packing-plywood`
          }
        ]
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/#faq`,
        mainEntity: HOME_FAQS.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer
          }
        }))
      }
    ]
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      {/* 1. PARENT COMPANY FLAGSHIP HERO — NEOM PANELS */}
      <section className="hero-section hero-section--dynamic section--architectural-grid">
        <div className="container">
          <div className="hero-split hero-split--dynamic">
            <div className="hero-copy hero-animate">
              <div className="hero-kicker-bar">
                <span className="hero-kicker-dot" aria-hidden="true" />
                <span>NEOM PANELS · ENGINEERED EXCELLENCE, DESIGNED FOR SPACES</span>
              </div>

              <h1 id="main-heading" tabIndex={-1} className="hero-title hero-title--tight">
                Wood panels.
                <br />
                <span className="hero-title-accent">Long-term thinking.</span>
              </h1>

              <p className="lead-text hero-lead">
                NEOM Panels manufactures wood-panel products for furniture, interior projects and
                industrial packaging. Our brands, Starwoods and NEOM Packing Plywood, serve
                manufacturers, contractors, procurement teams and trade partners.
              </p>

              <div className="btn-group hero-cta-row">
                <Link href="/enquiry" className="btn btn--primary">
                  <span>Discuss Your Requirement</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <Link href="/manufacturing" className="btn btn--secondary">
                  Our Manufacturing Facility
                </Link>
                <Link href="/brands" className="editorial-link" style={{ marginLeft: '0.25rem' }}>
                  <span>Explore Our Brands</span>
                  <span className="link-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>

              {/* Parent Company Core Value Pillars (No Child Brand Logo Clutter) */}
              <div
                className="hero-parent-pillars"
                aria-label="NEOM Panels manufacturing pillars"
              >
                <div className="hero-parent-pillar">
                  <span className="hero-parent-pillar-tag">IN-HOUSE PRODUCTION</span>
                  <strong className="hero-parent-pillar-title">
                    Company-Owned Factory in India
                  </strong>
                  <p className="hero-parent-pillar-desc">
                    Direct control over veneer grading, core assembly, hot-pressing and calibration.
                  </p>
                </div>

                <div className="hero-parent-pillar hero-parent-pillar--oak">
                  <span className="hero-parent-pillar-tag">ENGINEERED CONSISTENCY</span>
                  <strong className="hero-parent-pillar-title">
                    Specification-First B2B Supply
                  </strong>
                  <p className="hero-parent-pillar-desc">
                    Built around thickness tolerances, core stability, project BOQs and repeat OEM
                    schedules.
                  </p>
                </div>
              </div>

              <div className="hero-supporting-chips" aria-label="Primary application sectors">
                <span className="hero-sector-chip">Furniture manufacturing</span>
                <span className="hero-sector-chip">Interior projects</span>
                <span className="hero-sector-chip">Industrial packaging</span>
                <span className="hero-sector-chip">Institutional procurement</span>
              </div>
            </div>

            {/* Right Interactive Material & Manufacturing Stage */}
            <HeroInteractiveShowcase />
          </div>

          {/* Parent Company Architectural Credentials Ribbon */}
          <div
            className="hero-capability-ribbon reveal-once"
            aria-label="NEOM Panels corporate credentials"
          >
            <div className="hero-capability-cell">
              <span className="hero-capability-num">01 · MANUFACTURING ORIGIN</span>
              <strong className="hero-capability-heading">Own Factory in India</strong>
              <p className="hero-capability-text">
                Dedicated wood-panel production lines built for B2B batch repeatability.
              </p>
            </div>
            <div className="hero-capability-cell">
              <span className="hero-capability-num">02 · CORE ENGINEERING</span>
              <strong className="hero-capability-heading">Calibrated Multi-Ply Panels</strong>
              <p className="hero-capability-text">
                Balanced cross-laminated veneer construction for flatness and machining precision.
              </p>
            </div>
            <div className="hero-capability-cell">
              <span className="hero-capability-num">03 · QUALITY PROTOCOL</span>
              <strong className="hero-capability-heading">4-Stage Factory Inspection</strong>
              <p className="hero-capability-text">
                Checked for nominal thickness, squareness, edge straightness and surface finish.
              </p>
            </div>
            <div className="hero-capability-cell">
              <span className="hero-capability-num">04 · SUPPLY COVERAGE</span>
              <strong className="hero-capability-heading">Pan-India B2B Dispatch</strong>
              <p className="hero-capability-text">
                Direct factory supply for OEMs, interior contractors, institutions and distributors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT NEOM PANELS MANUFACTURES — CORE PRODUCT & SUBSTRATE MATRIX */}
      <section className="section reveal-once" id="product-solutions">
        <div className="container">
          <div className="section-header-split">
            <div>
              <p className="eyebrow">WHAT WE MANUFACTURE</p>
              <h2 className="section-title">
                Engineered wood-panel solutions across four core applications.
              </h2>
              <p className="lead-text" style={{ marginBottom: 0 }}>
                At NEOM Panels, we manufacture panel substrates around the physical demands of how
                the sheet will be cut, machined, fastened and used in service.
              </p>
            </div>
            <div className="section-header-actions">
              <Link href="/enquiry" className="btn btn--primary">
                Request Specification &amp; Quote
              </Link>
            </div>
          </div>

          <div className="product-matrix-grid">
            <article className="product-matrix-card">
              <div className="product-matrix-media">
                <img
                  src="/assets/industry-furniture-oem.jpg"
                  alt="CNC-machined oak furniture components and calibrated panel stacks."
                  width="700"
                  height="460"
                  loading="lazy"
                />
                <span className="product-matrix-index">01</span>
              </div>
              <div className="product-matrix-body">
                <span className="product-matrix-kicker">SERIAL &amp; OEM MANUFACTURING</span>
                <h3 className="subsection-title">Calibrated Furniture &amp; OEM Panels</h3>
                <p>
                  Uniform thickness and dense multi-ply core construction engineered for CNC
                  routing, clean edge-banding, reliable screw-holding and repeatable batch yield.
                </p>
                <ul className="product-matrix-specs">
                  <li>
                    <strong>Use cases:</strong> Residential &amp; office furniture, beds, tables,
                    storage &amp; OEM components
                  </li>
                  <li>
                    <strong>Supply mode:</strong> Scheduled monthly or quarterly production batches
                  </li>
                </ul>
                <Link
                  href="/enquiry?category=manufacturing&application=Furniture+%26+OEM+Manufacturing"
                  className="editorial-link"
                >
                  <span>Enquire for Furniture Production</span>
                  <span className="link-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </article>

            <article className="product-matrix-card">
              <div className="product-matrix-media">
                <img
                  src="/assets/industry-modular-interiors.jpg"
                  alt="Modular kitchen and open wardrobe system built from natural oak and matte sage panels."
                  width="700"
                  height="460"
                  loading="lazy"
                />
                <span className="product-matrix-index">02</span>
              </div>
              <div className="product-matrix-body">
                <span className="product-matrix-kicker">MODULAR INTERIOR SYSTEMS</span>
                <h3 className="subsection-title">Modular Kitchen &amp; Wardrobe Substrates</h3>
                <p>
                  Dimensionally stable panel substrates suited for laminate, veneer or acrylic
                  pressing across dry wardrobe carcasses and moisture-prone kitchen cabinetry zones.
                </p>
                <ul className="product-matrix-specs">
                  <li>
                    <strong>Use cases:</strong> Carcasses, shutters, loft panels, shelving &amp;
                    drawer systems
                  </li>
                  <li>
                    <strong>Supply mode:</strong> Thickness-wise replenishment for modular factories
                  </li>
                </ul>
                <Link
                  href="/enquiry?category=manufacturing&application=Modular+Furniture+%26+Interior+Systems"
                  className="editorial-link"
                >
                  <span>Enquire for Modular Systems</span>
                  <span className="link-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </article>

            <article className="product-matrix-card">
              <div className="product-matrix-media">
                <img
                  src="/assets/industry-commercial-projects.jpg"
                  alt="Executive commercial boardroom featuring acoustic slatted oak wall panels and custom joinery."
                  width="700"
                  height="460"
                  loading="lazy"
                />
                <span className="product-matrix-index">03</span>
              </div>
              <div className="product-matrix-body">
                <span className="product-matrix-kicker">COMMERCIAL &amp; INSTITUTIONAL FIT-OUTS</span>
                <h3 className="subsection-title">Architectural Joinery &amp; Project Panels</h3>
                <p>
                  Panel supply matched to consultant specifications, tender schedules and project
                  bills of quantities (BOQs) for offices, hospitality, healthcare and institutions.
                </p>
                <ul className="product-matrix-specs">
                  <li>
                    <strong>Use cases:</strong> Wall panelling, acoustic joinery, partitions &amp;
                    custom millwork
                  </li>
                  <li>
                    <strong>Supply mode:</strong> Phased site-wise dispatch &amp; technical
                    submittals
                  </li>
                </ul>
                <Link
                  href="/enquiry?category=project-requirement&application=Projects+%26+Commercial+Interiors"
                  className="editorial-link"
                >
                  <span>Share a Project BOQ</span>
                  <span className="link-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </article>

            <article className="product-matrix-card product-matrix-card--oak">
              <div className="product-matrix-media">
                <img
                  src="/assets/packing-plywood-showcase.jpg"
                  alt="Stacked moisture-resistant packaging-grade plywood sheets and industrial packing crates."
                  width="700"
                  height="460"
                  loading="lazy"
                />
                <span className="product-matrix-index">04</span>
              </div>
              <div className="product-matrix-body">
                <span className="product-matrix-kicker">INDUSTRIAL PACKAGING &amp; LOGISTICS</span>
                <h3 className="subsection-title">
                  Moisture-Resistant (MR) Packaging Plywood
                </h3>
                <p>
                  Practical MR packaging-grade multi-ply plywood engineered for heavy machinery
                  packing cases, export crates, pallet collars, internal dividers and protective
                  liners.
                </p>
                <ul className="product-matrix-specs">
                  <li>
                    <strong>Use cases:</strong> Packing cases, crates, protective enclosures &amp;
                    dividers
                  </li>
                  <li>
                    <strong>Supply mode:</strong> One-time batch orders &amp; recurring industrial
                    supply
                  </li>
                </ul>
                <Link
                  href="/enquiry?brand=neom-packing-plywood&category=industrial-packaging"
                  className="editorial-link"
                >
                  <span>Request Packaging Quote</span>
                  <span className="link-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 3. PANEL ANATOMY & MATERIAL STUDIO — INSIDE A NEOM PANEL */}
      <section className="section section--warm reveal-once" id="panel-engineering">
        <div className="container">
          <div className="split-editorial">
            <div>
              <p className="eyebrow">MATERIAL ARCHITECTURE</p>
              <h2 className="section-title">
                Engineered from the core out for flatness and strength.
              </h2>
              <p className="lead-text">
                A panel’s performance on a CNC router, laminate press or packing-case assembly line
                is determined long before it leaves the factory.
              </p>
              <p>
                At NEOM Panels, our manufacturing discipline focuses on balanced veneer layup,
                controlled resin bonding and calibrated surface finishing so every sheet behaves
                predictably during fabrication.
              </p>

              <div className="material-swatch-strip">
                <div className="swatch-card">
                  <div className="swatch-sample swatch-sample--natural-oak" aria-hidden="true" />
                  <p className="swatch-title">Smooth Face Veneer</p>
                  <p className="swatch-meta">Ready for lamination &amp; joinery</p>
                </div>
                <div className="swatch-card">
                  <div
                    className="swatch-sample swatch-sample--calibrated-core"
                    aria-hidden="true"
                  />
                  <p className="swatch-title">Cross-Band Core</p>
                  <p className="swatch-meta">Balanced multi-ply stability</p>
                </div>
                <div className="swatch-card">
                  <div className="swatch-sample swatch-sample--warm-timber" aria-hidden="true" />
                  <p className="swatch-title">Graded Hardwood</p>
                  <p className="swatch-meta">Selected for density &amp; screw hold</p>
                </div>
                <div className="swatch-card">
                  <div
                    className="swatch-sample swatch-sample--architectural-sage"
                    aria-hidden="true"
                  />
                  <p className="swatch-title">MR &amp; Interior Grades</p>
                  <p className="swatch-meta">Matched to exposure conditions</p>
                </div>
              </div>
            </div>

            <div className="anatomy-layers-panel">
              <div className="anatomy-layers-header">
                <span className="eyebrow" style={{ marginBottom: '0.25rem' }}>
                  CONSTRUCTION PRINCIPLES
                </span>
                <h3 className="subsection-title" style={{ marginBottom: 0 }}>
                  Four layers of manufacturing control
                </h3>
              </div>

              <ol className="anatomy-layer-list" role="list">
                <li className="anatomy-layer-item">
                  <span className="anatomy-layer-num">01</span>
                  <div>
                    <strong>Veneer Grading &amp; Moisture Conditioning</strong>
                    <p>
                      Incoming timber veneers are inspected for thickness uniformity and conditioned
                      to target moisture levels before core assembly.
                    </p>
                  </div>
                </li>
                <li className="anatomy-layer-item">
                  <span className="anatomy-layer-num">02</span>
                  <div>
                    <strong>Cross-Laminated Multi-Ply Layup</strong>
                    <p>
                      Alternating grain orientation across core plies distributes structural load
                      and resists warping or twisting across wide spans.
                    </p>
                  </div>
                </li>
                <li className="anatomy-layer-item">
                  <span className="anatomy-layer-num">03</span>
                  <div>
                    <strong>Controlled Hot-Press Bonding</strong>
                    <p>
                      Calibrated temperature, pressure and curing cycles ensure consistent adhesive
                      bonding suited to interior or MR packaging service.
                    </p>
                  </div>
                </li>
                <li className="anatomy-layer-item">
                  <span className="anatomy-layer-num">04</span>
                  <div>
                    <strong>Precision Calibration &amp; Edge Trimming</strong>
                    <p>
                      Finished sheets are trimmed for squareness and checked for thickness
                      uniformity across the panel face prior to dispatch.
                    </p>
                  </div>
                </li>
              </ol>

              <div className="anatomy-layers-footer">
                <Link href="/manufacturing" className="editorial-link">
                  <span>Inspect Our Full Manufacturing Workflow</span>
                  <span className="link-arrow" aria-hidden="true">
                    →
                  </span>
                </Link>
                <DocumentRequestButton
                  docTitle="Grade-Specific Technical Specification & Handling Notes"
                  docCategory="Technical Documents"
                  label="Request Technical Documents"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE APPLICATION EXPLORER */}
      <section className="section reveal-once">
        <div className="container">
          <div className="section-header-split">
            <div>
              <p className="eyebrow">INDUSTRIES &amp; APPLICATIONS</p>
              <h2 className="section-title">Start with the application.</h2>
              <p className="lead-text" style={{ marginBottom: 0 }}>
                Select your industry below to review typical panel considerations, specification
                checklists and direct B2B procurement routes.
              </p>
            </div>
            <div className="section-header-actions">
              <Link href="/industries" className="btn btn--secondary">
                Explore All 7 Industries
              </Link>
            </div>
          </div>

          <InteractiveApplicationExplorer />
        </div>
      </section>

      {/* 5. PRODUCT BRANDS UNDER NEOM PANELS — RESTRAINED CORPORATE PORTFOLIO */}
      <section className="section section--sage-subtle section--no-border reveal-once" id="brands-overview">
        <div className="container">
          <div className="section-header-split">
            <div>
              <p className="eyebrow">NEOM PANELS PORTFOLIO</p>
              <h2 className="section-title">Our brands. Built around your application.</h2>
              <p className="lead-text" style={{ marginBottom: 0 }}>
                Explore NEOM Panels’ product brands for furniture, interiors and industrial
                packaging. Start with your application, then connect with our team to discuss the
                relevant material and supply requirements.
              </p>
            </div>
            <div className="section-header-actions">
              <Link href="/brands" className="editorial-link">
                <span>View Brand Architecture</span>
                <span className="link-arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>

          <div className="brands-dual-grid" role="region" aria-label="NEOM Panels Product Brands">
            {/* Card 1: Starwoods */}
            <article className="brand-portfolio-card">
              <div>
                <div className="brand-card-header">
                  <span className="brand-category-pill">Furniture &amp; Interiors</span>
                  <span className="brand-spec-label">A NEOM Panels Brand</span>
                </div>

                <div className="starwood-logo-plaque">
                  <img
                    src="/assets/starwood-logo.png"
                    alt="Starwoods — The Plywood Specialist"
                    className="starwood-logo-img--xs"
                    width="619"
                    height="177"
                  />
                </div>

                <h3 className="subsection-title">Panels for furniture and interior spaces.</h3>
                <p>
                  Starwoods serves furniture manufacturers, modular kitchen and wardrobe
                  fabricators, interior contractors and channel partners looking for consistent
                  wood-panel substrates and clear specification support.
                </p>
              </div>

              <div className="btn-group">
                <Link href="/brands#starwoods" className="btn btn--primary">
                  Explore Starwoods
                </Link>
                <Link
                  href="/enquiry?brand=starwoods&category=product-info"
                  className="btn btn--secondary"
                >
                  Enquire About Starwoods
                </Link>
              </div>
            </article>

            {/* Card 2: NEOM Packing Plywood */}
            <article className="brand-portfolio-card brand-portfolio-card--packing">
              <div>
                <div className="brand-card-header">
                  <span className="brand-category-pill brand-category-pill--oak">
                    Industrial Packaging
                  </span>
                  <span className="brand-spec-label">A NEOM Panels Brand</span>
                </div>

                <div className="packing-logo-plaque">
                  <img
                    src="/assets/neom-packing-plywood-logo-compact.svg"
                    alt="NEOM Packing Plywood"
                    className="packing-logo-img--xs"
                    width="540"
                    height="112"
                  />
                </div>

                <h3 className="subsection-title">Plywood for practical packing requirements.</h3>
                <p>
                  Moisture-resistant packaging-grade plywood for buyers sourcing material for
                  packing cases, crates and industrial packaging components. Share your application,
                  sheet dimensions and quantity requirements with our team.
                </p>
              </div>

              <div className="btn-group">
                <Link href="/brands/neom-packing-plywood" className="btn btn--primary">
                  Explore NEOM Packing Plywood
                </Link>
                <Link
                  href="/enquiry?brand=neom-packing-plywood&category=industrial-packaging"
                  className="btn btn--secondary"
                >
                  Request a Quote
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* 6. B2B WOOD-PANEL SPECIFICATION FAQ & SEARCHABLE APPLICATION DIRECTORY */}
      <section
        className="section section--warm-white section--no-border reveal-once"
        aria-labelledby="seo-faq-heading"
      >
        <div className="container">
          <div className="section-header-split">
            <div>
              <p className="eyebrow">B2B PROCUREMENT &amp; SPECIFICATION GUIDE</p>
              <h2 id="seo-faq-heading" className="section-title">
                Frequently asked questions about sourcing wood panels from NEOM Panels.
              </h2>
              <p className="lead-text" style={{ marginBottom: 0 }}>
                Key technical and commercial answers for furniture OEMs, modular interior
                fabricators, project contractors, industrial packaging buyers and trade distributors
                across India.
              </p>
            </div>
            <div className="section-header-actions">
              <Link href="/resources" className="btn btn--secondary">
                View All Buyer Checklists →
              </Link>
            </div>
          </div>

          <div style={{ marginTop: 'var(--space-5)' }}>
            {HOME_FAQS.map((faq, idx) => (
              <details key={idx} className="guidance-accordion" open={idx === 0}>
                <summary>
                  <div>
                    <span className="spec-label">0{idx + 1} · B2B SOURCING FAQ</span>
                    <h3 className="subsection-title" style={{ marginBottom: 0 }}>
                      {faq.question}
                    </h3>
                  </div>
                  <span className="guidance-accordion__action">Read Answer</span>
                </summary>
                <div className="guidance-accordion__body">
                  <p style={{ marginBottom: 0 }}>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          {/* Semantic B2B Keyword & Specification Directory for Search Indexing & Quick Navigation */}
          <div className="seo-keyword-directory" aria-label="B2B Wood-Panel Specification Index">
            <div className="seo-keyword-col">
              <h3 className="seo-keyword-heading">Furniture &amp; Modular Interior Substrates</h3>
              <ul className="seo-keyword-list" role="list">
                <li>
                  <Link href="/industries#furniture-oem">
                    Calibrated Plywood for Serial Furniture &amp; OEM Manufacturing
                  </Link>
                </li>
                <li>
                  <Link href="/industries#modular-furniture">
                    Modular Kitchen Carcass &amp; Wardrobe Plywood Substrates
                  </Link>
                </li>
                <li>
                  <Link href="/brands#starwoods">
                    Starwoods Interior &amp; Furniture-Grade Wood Panels
                  </Link>
                </li>
                <li>
                  <Link href="/manufacturing">
                    Multi-Ply Hardwood Core &amp; Precision Thickness Calibration
                  </Link>
                </li>
              </ul>
            </div>

            <div className="seo-keyword-col">
              <h3 className="seo-keyword-heading">Commercial Projects &amp; Institutional Supply</h3>
              <ul className="seo-keyword-list" role="list">
                <li>
                  <Link href="/industries#projects-interiors">
                    Architectural Joinery &amp; Commercial Fit-Out Panel Supply
                  </Link>
                </li>
                <li>
                  <Link href="/industries#institutions-procurement">
                    Institutional &amp; Public-Sector Wood-Panel Procurement (BOQs)
                  </Link>
                </li>
                <li>
                  <Link href="/industries#distributors-channel">
                    Regional Plywood Distributor &amp; Trade Channel Partnerships
                  </Link>
                </li>
                <li>
                  <Link href="/governance">
                    Corporate Governance, Quality Policy &amp; Vendor Compliance
                  </Link>
                </li>
              </ul>
            </div>

            <div className="seo-keyword-col">
              <h3 className="seo-keyword-heading">Industrial Packaging &amp; Crating Plywood</h3>
              <ul className="seo-keyword-list" role="list">
                <li>
                  <Link href="/brands/neom-packing-plywood">
                    NEOM Packing Plywood — Moisture-Resistant (MR) Grade
                  </Link>
                </li>
                <li>
                  <Link href="/brands/neom-packing-plywood#applications">
                    Plywood for Industrial Packing Cases, Crates &amp; Enclosures
                  </Link>
                </li>
                <li>
                  <Link href="/brands/neom-packing-plywood#specifications">
                    Packaging Plywood Thickness, Sheet Dimensions &amp; Bulk Supply
                  </Link>
                </li>
                <li>
                  <Link href="/enquiry?brand=neom-packing-plywood&category=industrial-packaging">
                    Request an Industrial Packing Plywood Quotation in India
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* 7. HIGH-CONTRAST PARENT COMPANY B2B COMMAND BANNER */}
          <div className="home-cta-command-banner">
            <div className="home-cta-command-copy">
              <p className="home-cta-command-eyebrow">NEOM PANELS · COMMERCIAL &amp; TECHNICAL DESK</p>
              <h2 className="home-cta-command-title">
                Ready to discuss your wood-panel specification or production schedule?
              </h2>
              <p className="home-cta-command-desc">
                Connect directly with NEOM Panels for OEM furniture batches, interior project BOQs,
                industrial packaging plywood or regional channel partnerships across India.
              </p>
            </div>
            <div className="home-cta-command-actions">
              <Link href="/enquiry" className="btn home-cta-btn-light">
                Submit a Business Enquiry →
              </Link>
              <Link href="/resources" className="btn home-cta-btn-outline">
                Request Technical Documents
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
