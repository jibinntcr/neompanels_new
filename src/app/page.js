import Link from 'next/link';
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

const CUSTOMER_PATHS = [
  {
    step: '01',
    tag: 'For Furniture & Interiors',
    title: 'Furniture, Kitchens & Interior Projects',
    description:
      'Calibrated plywood and wood panels for home and office furniture, modular kitchens, wardrobes and commercial interiors.',
    brandNote: 'Supplied under our Starwoods brand',
    href: '/brands#starwoods',
    cta: 'View Furniture & Interior Panels'
  },
  {
    step: '02',
    tag: 'For Industrial Packaging',
    title: 'Packing Cases, Crates & Box Panels',
    description:
      'Moisture-resistant (MR) packaging-grade plywood for machinery packing cases, export crates, pallet collars and dividers.',
    brandNote: 'Supplied under NEOM Packing Plywood',
    href: '/brands/neom-packing-plywood',
    cta: 'View Packing Plywood',
    isOak: true
  },
  {
    step: '03',
    tag: 'For Bulk & Trade Buyers',
    title: 'Factory Supply, Tenders & Dealerships',
    description:
      'Direct factory supply for large OEM production schedules, institutional project BOQs and regional plywood distributors.',
    brandNote: 'Direct from NEOM Panels Factory',
    href: '/enquiry',
    cta: 'Talk to Our Sales Team'
  }
];

const CORE_PRODUCTS = [
  {
    id: '01',
    category: 'Furniture Manufacturing',
    title: 'Furniture & OEM Plywood',
    description:
      'Flat, uniform-thickness plywood boards built for clean cutting, edge-banding and strong screw holding in beds, tables, sofas and storage units.',
    useCases: 'Home & office furniture, OEM serial production',
    image: '/assets/industry-furniture-oem.jpg',
    imageAlt: 'Wood-panel components stacked in a furniture workshop.',
    href: '/industries#furniture-oem',
    cta: 'See Furniture Specifications'
  },
  {
    id: '02',
    category: 'Kitchens & Wardrobes',
    title: 'Modular Kitchen & Wardrobe Panels',
    description:
      'Dimensionally stable wood panels designed for smooth laminate, acrylic or veneer pressing across cabinet boxes, shutters and loft storage.',
    useCases: 'Modular kitchens, wardrobes, shutters & carcasses',
    image: '/assets/industry-modular-interiors.jpg',
    imageAlt: 'Modular kitchen and wardrobe cabinetry made with calibrated wood panels.',
    href: '/industries#modular-furniture',
    cta: 'See Modular Kitchen Panels'
  },
  {
    id: '03',
    category: 'Commercial Fit-Outs',
    title: 'Commercial & Project Interior Panels',
    description:
      'Dependable panel supply for offices, hotels, hospitals, schools and retail spaces—matched to contractor schedules and project bills of quantities (BOQs).',
    useCases: 'Wall panelling, partitions, doors & custom joinery',
    image: '/assets/industry-commercial-projects.jpg',
    imageAlt: 'Commercial boardroom finished with warm wood wall panelling.',
    href: '/industries#projects-interiors',
    cta: 'See Project Supply Options'
  },
  {
    id: '04',
    category: 'Industrial Packaging',
    title: 'Moisture-Resistant (MR) Packing Plywood',
    description:
      'Strong, cost-effective MR packaging-grade plywood for industrial packing boxes, export crates, pallet bases, internal dividers and protective enclosures.',
    useCases: 'Packing cases, crates, dividers & protective liners',
    image: '/assets/packing-plywood-showcase.jpg',
    imageAlt: 'Bundled MR packaging-grade plywood sheets alongside an industrial crate.',
    href: '/brands/neom-packing-plywood',
    cta: 'Explore NEOM Packing Plywood',
    isOak: true
  }
];

const HOME_FAQS = [
  {
    question: 'What does NEOM Panels manufacture?',
    answer:
      'NEOM Panels manufactures wood-panel and plywood products in our own factory in India. We make panels for furniture manufacturing, modular kitchens and wardrobes, commercial interior projects, and moisture-resistant (MR) plywood for industrial packing cases and crates.'
  },
  {
    question: 'What is the difference between Starwoods and NEOM Packing Plywood?',
    answer:
      'NEOM Panels is the parent manufacturing company. To make choosing simple for buyers, we offer two dedicated product brands: Starwoods is for furniture, modular kitchens and interior projects, while NEOM Packing Plywood is for industrial packing cases, crates and protective packaging.'
  },
  {
    question: 'What details do I need to share to get a price quote?',
    answer:
      'Simply share what you are using the plywood for (furniture, interiors or packing crates), the required thickness in mm, sheet size (for example 8 × 4 ft), approximate quantity, and your delivery city or state in India.'
  },
  {
    question: 'Can I order recurring monthly batches or become a regional dealer?',
    answer:
      'Yes. We supply one-time project orders, scheduled monthly batches for furniture and packaging factories, and partner with regional plywood dealers and distributors across India.'
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
        itemListElement: CORE_PRODUCTS.map((prod, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: prod.title,
          description: prod.description,
          url: `${SITE_URL}${prod.href}`
        }))
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

      {/* 1. CLEAN, CLEAR, CUSTOMER-FRIENDLY HERO */}
      <section className="hero-section hero-section--dynamic section--architectural-grid">
        <div className="container">
          <div className="hero-split hero-split--clean">
            {/* Left Column: Simple, Clear Message + 2 Focused Actions */}
            <div className="hero-copy hero-animate">
              <div className="hero-kicker-bar">
                <span className="hero-kicker-dot" aria-hidden="true" />
                <span>NEOM PANELS · WOOD-PANEL MANUFACTURER IN INDIA</span>
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
                <Link href="/brands" className="btn btn--secondary">
                  Explore Our Brands
                </Link>
              </div>

              {/* Simple, Scannable Trust Points (No Clutter) */}
              <ul className="hero-simple-trust-list" aria-label="Why buyers work with NEOM Panels">
                <li>
                  <span className="hero-trust-check" aria-hidden="true">
                    ✓
                  </span>
                  <span>
                    <strong>Own Factory in India</strong> — Direct manufacturer supply
                  </span>
                </li>
                <li>
                  <span className="hero-trust-check" aria-hidden="true">
                    ✓
                  </span>
                  <span>
                    <strong>Quality Checked</strong> — Inspected for thickness &amp; flatness
                  </span>
                </li>
                <li>
                  <span className="hero-trust-check" aria-hidden="true">
                    ✓
                  </span>
                  <span>
                    <strong>B2B &amp; Project Orders</strong> — One-time BOQs or monthly supply
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Column: Single Clean Flagship Visual with Simple Caption */}
            <div className="hero-animate--delay">
              <figure className="hero-clean-visual-card">
                <div className="hero-clean-visual-img-wrap">
                  <img
                    src="/assets/hero-neom-flagship.jpg"
                    alt="Calibrated multi-ply wood-panel stacks and warm architectural joinery in the NEOM Panels studio."
                    width="1400"
                    height="933"
                  />
                  <span className="hero-clean-badge">Direct Factory Supply · India</span>
                </div>
                <figcaption className="hero-clean-visual-caption">
                  <div>
                    <strong>Furniture manufacturing · Interior projects · Industrial packaging</strong>
                    <p>
                      Precision-calibrated wood panels and moisture-resistant packaging plywood
                      built for dependable everyday use.
                    </p>
                  </div>
                  <Link href="/manufacturing" className="editorial-link">
                    <span>Inside Our Factory</span>
                    <span className="link-arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 2. "WHAT ARE YOU LOOKING FOR TODAY?" — 3 SIMPLE CUSTOMER PATHS */}
      <section
        className="section section--warm-white reveal-once"
        aria-labelledby="customer-paths-heading"
      >
        <div className="container">
          <div className="customer-section-intro">
            <p className="eyebrow">HOW CAN WE HELP YOU?</p>
            <h2 id="customer-paths-heading" className="section-title">
              Choose what you need panels for.
            </h2>
            <p className="lead-text" style={{ marginBottom: 0 }}>
              Whether you are making furniture, fitting out a building, packing industrial goods or
              sourcing in bulk, start with your requirement below:
            </p>
          </div>

          <div className="customer-paths-grid">
            {CUSTOMER_PATHS.map((item) => (
              <article
                key={item.step}
                className={`customer-path-card ${item.isOak ? 'customer-path-card--oak' : ''}`}
              >
                <div>
                  <div className="customer-path-top">
                    <span className="customer-path-tag">{item.tag}</span>
                    <span className="customer-path-num">{item.step}</span>
                  </div>
                  <h3 className="subsection-title">{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <div className="customer-path-footer">
                  <span className="customer-path-note">{item.brandNote}</span>
                  <Link href={item.href} className="editorial-link">
                    <span>{item.cta}</span>
                    <span className="link-arrow" aria-hidden="true">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCTS WE MANUFACTURE — 4 CLEAR VISUAL CARDS */}
      <section
        id="products"
        className="section section--architectural-grid reveal-once"
        aria-labelledby="products-heading"
      >
        <div className="container">
          <div className="section-header-split">
            <div>
              <p className="eyebrow">OUR PRODUCTS</p>
              <h2 id="products-heading" className="section-title">
                Wood panels we manufacture.
              </h2>
              <p className="lead-text" style={{ marginBottom: 0 }}>
                We manufacture four main types of wood panels in our factory—each built for a
                specific job.
              </p>
            </div>
            <div className="section-header-actions">
              <Link href="/enquiry" className="btn btn--primary">
                Request a Price Quote →
              </Link>
            </div>
          </div>

          <div className="product-matrix-grid">
            {CORE_PRODUCTS.map((product) => (
              <article
                key={product.id}
                className={`product-matrix-card ${product.isOak ? 'product-matrix-card--oak' : ''}`}
              >
                <div className="product-matrix-media">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    width="1400"
                    height="933"
                    loading="lazy"
                  />
                  <span className="product-matrix-index">{product.id}</span>
                </div>

                <div className="product-matrix-body">
                  <div>
                    <span className="product-matrix-kicker">{product.category}</span>
                    <h3 className="subsection-title" style={{ marginBottom: '0.5rem' }}>
                      {product.title}
                    </h3>
                    <p>{product.description}</p>
                  </div>

                  <div>
                    <div className="product-matrix-specs">
                      <span>
                        <strong>Common uses:</strong> {product.useCases}
                      </span>
                    </div>

                    <Link href={product.href} className="editorial-link">
                      <span>{product.cta}</span>
                      <span className="link-arrow" aria-hidden="true">
                        →
                      </span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE NEOM PANELS + SIMPLE 3-STEP ORDERING PROCESS */}
      <section
        className="section section--sage-tint reveal-once"
        aria-labelledby="why-neom-heading"
      >
        <div className="container">
          <div className="why-neom-grid">
            {/* Left: Why Buy From NEOM Panels */}
            <div>
              <p className="eyebrow">WHY CHOOSE NEOM PANELS</p>
              <h2 id="why-neom-heading" className="section-title">
                Made in our own factory. Checked before every dispatch.
              </h2>
              <p className="lead-text">
                When you buy from NEOM Panels, you deal directly with the manufacturer. We control
                every stage from raw veneer selection and hot-pressing to final thickness
                calibration.
              </p>

              <div className="why-neom-list">
                <div className="why-neom-item">
                  <span className="why-neom-badge">01</span>
                  <div>
                    <strong>Uniform Thickness &amp; Flat Sheets</strong>
                    <p>
                      Calibrated panels that cut cleanly on CNC routers or saws and speed up
                      furniture assembly.
                    </p>
                  </div>
                </div>

                <div className="why-neom-item">
                  <span className="why-neom-badge">02</span>
                  <div>
                    <strong>Strong Multi-Ply Core</strong>
                    <p>
                      Cross-laminated hardwood veneers pressed under controlled heat and pressure
                      for reliable strength.
                    </p>
                  </div>
                </div>

                <div className="why-neom-item">
                  <span className="why-neom-badge">03</span>
                  <div>
                    <strong>4-Stage Quality Inspection</strong>
                    <p>
                      Every batch is checked for thickness, length/width squareness, edge strength
                      and surface finish.
                    </p>
                  </div>
                </div>
              </div>

              <div className="btn-group" style={{ marginTop: 'var(--space-5)' }}>
                <Link href="/manufacturing" className="btn btn--secondary">
                  See How Our Factory Works →
                </Link>
              </div>
            </div>

            {/* Right: Simple 3-Step Ordering Card for Customers */}
            <div className="how-to-order-card">
              <div className="how-to-order-header">
                <p className="eyebrow" style={{ marginBottom: '0.25rem' }}>
                  SIMPLE B2B ORDERING
                </p>
                <h3 className="subsection-title" style={{ marginBottom: '0.25rem' }}>
                  How to order from NEOM Panels in 3 steps
                </h3>
                <p className="secondary-text" style={{ marginBottom: 0, fontSize: '0.9375rem' }}>
                  No complicated forms—just tell us what you are making and our team will guide you.
                </p>
              </div>

              <ol className="how-to-order-steps">
                <li>
                  <span className="how-to-order-step-num">Step 1</span>
                  <div>
                    <strong>Share your requirement</strong>
                    <p>
                      Tell us your application (furniture, interiors or packing crates), required
                      thickness (mm), sheet size and quantity.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="how-to-order-step-num">Step 2</span>
                  <div>
                    <strong>Receive specification &amp; quote</strong>
                    <p>
                      Our team recommends the right panel grade and sends you a clear quotation and
                      delivery timeline.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="how-to-order-step-num">Step 3</span>
                  <div>
                    <strong>Factory production &amp; dispatch</strong>
                    <p>
                      Your sheets are inspected, packed in protected pallet lots and dispatched to
                      your location in India.
                    </p>
                  </div>
                </li>
              </ol>

              <div className="how-to-order-footer">
                <Link href="/enquiry" className="btn btn--primary" style={{ width: '100%' }}>
                  Start Your Enquiry Now →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR TWO PRODUCT BRANDS — SIMPLE, CLEAR & EASY TO UNDERSTAND */}
      <section
        id="brands"
        className="section reveal-once"
        aria-labelledby="brands-heading"
      >
        <div className="container">
          <div className="section-header-split">
            <div>
              <p className="eyebrow">OUR BRANDS</p>
              <h2 id="brands-heading" className="section-title">
                Our brands. Built around your application.
              </h2>
              <p className="lead-text" style={{ marginBottom: 0 }}>
                Explore NEOM Panels’ product brands for furniture, interiors and industrial
                packaging. Start with your application, then connect with our team to discuss the
                relevant material and supply requirements.
              </p>
            </div>
            <div className="section-header-actions">
              <Link href="/brands" className="editorial-link">
                <span>Compare Both Brands</span>
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

      {/* 6. COMMON CUSTOMER QUESTIONS + DIRECT CONTACT BANNER */}
      <section
        className="section section--warm-white section--no-border reveal-once"
        aria-labelledby="seo-faq-heading"
      >
        <div className="container">
          <div className="section-header-split">
            <div>
              <p className="eyebrow">COMMON QUESTIONS</p>
              <h2 id="seo-faq-heading" className="section-title">
                Quick answers for buyers.
              </h2>
              <p className="lead-text" style={{ marginBottom: 0 }}>
                Everything you need to know before requesting product information or a price quote.
              </p>
            </div>
            <div className="section-header-actions">
              <Link href="/resources" className="btn btn--secondary">
                Download Buyer Checklists →
              </Link>
            </div>
          </div>

          <div style={{ marginTop: 'var(--space-5)' }}>
            {HOME_FAQS.map((faq, idx) => (
              <details key={idx} className="guidance-accordion" open={idx === 0}>
                <summary>
                  <div>
                    <h3 className="subsection-title" style={{ marginBottom: 0 }}>
                      {faq.question}
                    </h3>
                  </div>
                  <span className="guidance-accordion__action">View Answer</span>
                </summary>
                <div className="guidance-accordion__body">
                  <p style={{ marginBottom: 0 }}>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          {/* 7. CLEAR, FRIENDLY FINAL CONTACT BANNER */}
          <div className="home-cta-command-banner">
            <div className="home-cta-command-copy">
              <p className="home-cta-command-eyebrow">NEED HELP CHOOSING THE RIGHT PANEL?</p>
              <h2 className="home-cta-command-title">
                Tell us what you are building or packing.
              </h2>
              <p className="home-cta-command-desc">
                Share your required thickness, sheet size and quantity—our team will get back to you
                with product details and a quotation.
              </p>
            </div>
            <div className="home-cta-command-actions">
              <Link href="/enquiry" className="btn home-cta-btn-light">
                Request a Quote / Enquire →
              </Link>
              <Link href="/resources" className="btn home-cta-btn-outline">
                View Product Documents
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
