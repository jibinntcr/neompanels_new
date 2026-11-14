import Link from 'next/link';
import { buildPageMetadata, SITE_URL } from '@/lib/seo';
import InteractiveProductArchitecture from '@/components/InteractiveProductArchitecture';
import InteractiveMarketShift from '@/components/InteractiveMarketShift';
import InteractiveEcosystemExplorer from '@/components/InteractiveEcosystemExplorer';
import InteractiveGccCorridor from '@/components/InteractiveGccCorridor';

export const metadata = buildPageMetadata({
  absoluteTitle:
    'NEOM Panels | Engineered Excellence, Designed for Spaces — Indian Wood Panels & GCC Supply Ecosystem',
  description:
    'NEOM Panels is building a next-generation engineered wood, interior materials, and project supply ecosystem for India and global markets. Phase 1 portfolio includes calibrated plywood, marine grade IS:710, HDHMR, MDF, and decorative surfaces.',
  path: '/',
  ogImage: '/assets/arch-lobby-reception.jpg',
  ogImageAlt: 'NEOM Panels — Engineered Excellence, Designed for Spaces',
  ogImages: [
    {
      url: '/assets/arch-lobby-reception.jpg',
      width: 1400,
      height: 933,
      alt: 'NEOM Panels — Corporate Lobby & Architectural Joinery'
    },
    {
      url: '/assets/product-structural-plywood.jpg',
      width: 1400,
      height: 933,
      alt: 'NEOM Panels — Structural & Specialty Calibrated Plywood'
    },
    {
      url: '/assets/product-engineered-boards.jpg',
      width: 1400,
      height: 933,
      alt: 'NEOM Panels — High-Density HDHMR & Engineered MDF'
    },
    {
      url: '/assets/product-decorative-surfaces.jpg',
      width: 1400,
      height: 933,
      alt: 'NEOM Panels — Architectural Veneers, Acrylics and Laminates'
    }
  ],
  keywords: [
    'NEOM Panels',
    'Engineered Excellence Designed for Spaces',
    'wood panel manufacturer India',
    'plywood manufacturer India',
    'calibrated plywood supplier',
    'marine plywood IS 710',
    'HDHMR green board India',
    'architectural MDF panels',
    'natural wood veneers India',
    'acrylic cabinetry panels',
    'fluted charcoal wall panels',
    'GCC wood panel supply',
    'Dubai plywood export',
    'Saudi Arabia interior panels',
    'Starwoods plywood',
    'NEOM Packing Plywood'
  ]
});

const SECTORS_WE_SUPPORT = [
  {
    id: 'construction',
    num: '01',
    title: 'Construction & Real Estate',
    subtitle: 'High-rise residential towers, commercial complexes, and project-led building envelopes.',
    description:
      'Dimensionally stable structural plywood and formwork substrates engineered to withstand heavy casting cycles, high shear stress, and demanding site conditions.',
    image: '/assets/sector-construction.jpg',
    useCases: 'Structural joinery, partitions, ceiling framing, concrete formwork',
    href: '/industries#projects-interiors'
  },
  {
    id: 'manufacturing',
    num: '02',
    title: 'Industrial Manufacturing',
    subtitle: 'Production environments, machinery platforms, and utility facilities.',
    description:
      'High-density, cross-laminated wood composite panels engineered for high point-load bearing, electrical non-conductivity, and long operational fatigue resistance.',
    image: '/assets/sector-manufacturing.jpg',
    useCases: 'Machinery baseboards, industrial workbenches, electrical backing, utility walls',
    href: '/industries#furniture-oem'
  },
  {
    id: 'packaging',
    num: '03',
    title: 'Packaging & Warehousing',
    subtitle: 'Heavy-duty packing cases, export shipping crates, and logistics support systems.',
    description:
      'Moisture-resistant (MR) industrial packaging-grade plywood built to protect heavy machinery, automotive components, and sensitive equipment during intercontinental transit.',
    image: '/assets/sector-packaging.jpg',
    useCases: 'Heavy equipment packing cases, export crates, pallet collars, internal dividers',
    href: '/brands/neom-packing-plywood'
  },
  {
    id: 'furniture',
    num: '04',
    title: 'Furniture & Interiors',
    subtitle: 'Modular cabinetry, wardrobes, bespoke kitchens, and luxury architectural fit-outs.',
    description:
      'Quad-press calibrated plywood, water-repellent HDHMR, and synchronized pre-laminated boards built for clean CNC cutting, tight edge-banding, and high screw-holding torque.',
    image: '/assets/sector-furniture.jpg',
    useCases: 'Modular kitchens, wardrobes, luxury wall panelling, executive office desks',
    href: '/industries#modular-furniture'
  }
];

const MARKET_GAPS_SOLUTIONS = [
  {
    gap: 'Fragmented Product Discovery',
    gapDesc: 'Architects and buyers struggle through fragmented physical catalogs with outdated stock visibility.',
    solution: 'Unified Digital Platform & Product Selector',
    solutionDesc: 'Centralized digital catalog with technical filters, live specs, and 48h physical sample ordering.'
  },
  {
    gap: 'Inconsistent Quality Visibility',
    gapDesc: 'Uneven sheet thickness, hidden core voids, and delamination causing costly CNC routing errors on shop floors.',
    solution: 'Quad-Press Calibration & Batch Testing',
    solutionDesc: '100% calibrated thickness (±0.2mm), zero core gaps, and certified IS:710 / IS:303 batch validation.'
  },
  {
    gap: 'Limited Technical Guidance',
    gapDesc: 'Generic timber sales reps unable to advise on resin chemistry, emission grades, or acoustic performance.',
    solution: 'Architectural Spec Concierge & BIM Data',
    solutionDesc: 'Dedicated technical team offering CAD/BIM details, fire/moisture ratings, and customized BOQ guidance.'
  },
  {
    gap: 'Weak Architect Engagement',
    gapDesc: 'Specifiers neglected by traditional commodity distributors who only focus on retail counter sales.',
    solution: 'Architect Portal & Physical Sample Boxes',
    solutionDesc: 'Curated material swatch boxes delivered directly to architectural studios and OEM procurement desks.'
  },
  {
    gap: 'Traditional Channel Dependency',
    gapDesc: 'Opaque pricing, multi-tier middleman markups, and uncertain project dispatch timelines.',
    solution: 'Hybrid B2B Dealer Enablement Network',
    solutionDesc: 'Direct manufacturer coordination empowering regional dealers with digital inventory and transparent terms.'
  },
  {
    gap: 'Low Digital Adoption & Project Tracking',
    gapDesc: 'Paper-based quotation processes leading to delayed site deliveries and misplaced project BOQs.',
    solution: 'Real-Time Project Dispatch & BOQ Calculator',
    solutionDesc: 'End-to-end digital order pipeline, material yield calculators, and scheduled site delivery tracking.'
  }
];

const BUSINESS_STAGES = [
  {
    stage: 'Stage 01',
    title: 'Brand Building + Trading',
    desc: 'Build strong brand equity, expand curated product range, and establish robust market presence through disciplined trading and regional distribution.'
  },
  {
    stage: 'Stage 02',
    title: 'Contract Manufacturing',
    desc: 'Leverage partner facilities with proprietary quality protocols to ensure scalability, cost efficiency, and rigorous thickness calibration while validating demand.'
  },
  {
    stage: 'Stage 03',
    title: 'Manufacturing Partnerships',
    desc: 'Form strategic joint alliances with advanced manufacturers to secure dedicated capacity, technical innovation, and long-term supply stability.'
  },
  {
    stage: 'Stage 04',
    title: 'Integrated Manufacturing Ecosystem',
    desc: 'Establish company-owned automated manufacturing infrastructure to achieve complete operational control, product diversification, and international competitive edge.'
  }
];

const SCALE_ROADMAP = [
  {
    year: 'Year 1',
    phase: 'Brand Establishment',
    target: '₹10–15 Crore',
    desc: 'Establish flagship presence, seed architect & OEM networks, launch digital platform.'
  },
  {
    year: 'Year 2',
    phase: 'Regional Expansion',
    target: '₹25–40 Crore',
    desc: 'Deepen distribution across key southern & western states, expand contractor network.'
  },
  {
    year: 'Year 3',
    phase: 'Multi-State Presence',
    target: '₹50–75 Crore',
    desc: 'Scale OEM contract manufacturing, launch full decorative surface lines, enter metro markets.'
  },
  {
    year: 'Year 5',
    phase: 'National Expansion',
    target: '₹150–250 Crore',
    desc: 'Pan-India supply infrastructure, establish owned manufacturing facilities, initiate GCC corridors.'
  },
  {
    year: 'Year 10',
    phase: 'India + GCC Leadership',
    target: '₹500+ Crore',
    desc: 'Integrated multinational materials ecosystem leading both domestic Indian and GCC trade markets.'
  }
];

const HOME_FAQS = [
  {
    question: 'What is NEOM Panels and what does the company manufacture?',
    answer:
      'NEOM Panels is a next-generation engineered wood, interior materials, and project supply company. Our Phase 1 portfolio encompasses three core pillars: Structural & Specialty Plywood (Calibrated, Marine Grade IS:710, BWR/BWP), Solid Engineered Boards (High-Density HDHMR Green Core, MDF, Pre-Laminated), and Decorative Architectural Surfaces (Natural & Smoked Veneers, High-Pressure Laminates, 6H Acrylics, Charcoal Fluted Panels).'
  },
  {
    question: 'What is the brand architecture of NEOM Panels, Starwoods, and NEOM Packing Plywood?',
    answer:
      'NEOM Panels operates as the parent corporate entity and ecosystem brand. Starwoods is our dedicated brand specializing in furniture manufacturing and modular interior substrates, while NEOM Packing Plywood specializes in moisture-resistant industrial packaging plywood for machinery cases and export crates.'
  },
  {
    question: 'What makes NEOM Panels calibrated plywood suitable for OEM and modular furniture factories?',
    answer:
      'Our calibrated panels undergo a 4-stage quad-press thickness calibration process that guarantees a tight tolerance of ±0.2mm across the entire 8×4 ft sheet. This uniform thickness eliminates cutter deflection on CNC nesting machines, ensures seamless edge-banding without glue lines, and prevents hinge misalignments in factory-made cabinetry.'
  },
  {
    question: 'How can architects and interior designers request material samples?',
    answer:
      'Architects and specifiers can request the NEOM Architecture Sample Box directly through our website. The box contains physical swatches of our calibrated plywood, HDHMR green core, architectural veneers, and acrylic panels, delivered directly to your studio within 48 to 72 hours.'
  },
  {
    question: 'What is NEOM Panels’ export capability and GCC expansion corridor?',
    answer:
      'NEOM Panels operates a strategic supply corridor connecting Western Indian manufacturing and maritime ports with key GCC markets, including the UAE (Dubai trade gateway), Saudi Arabia (Riyadh & Giga-projects), Qatar, Oman, Bahrain, and Kuwait. All export orders feature ISPM-15 compliant packaging and containerized moisture-proof bundling.'
  },
  {
    question: 'What information is needed to receive a formal B2B quotation?',
    answer:
      'Simply share your application (furniture OEM, modular kitchen, commercial interior fit-out, or industrial packaging), required panel thickness (mm), sheet dimensions, approximate sheet quantity or recurring monthly requirement, and delivery destination.'
  }
];

export default function HomePage() {
  const homeJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'NEOM Panels',
        url: SITE_URL,
        logo: `${SITE_URL}/assets/logo-full.png`,
        slogan: 'Engineered Excellence, Designed for Spaces',
        description:
          'Building a next-generation engineered wood, interior materials, and project supply ecosystem for India and global markets.'
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

      {/* 1. HERO SECTION — ARCHITECTURAL PRESTIGE & SPECIFICATION RIGOR */}
      <section className="hero-section hero-section--architectural section--architectural-grid">
        <div className="container">
          <div className="hero-split hero-split--elevated">
            {/* Left Column: Vision, Headline & Action */}
            <div className="hero-copy hero-animate">
              <div className="hero-kicker-bar">
                <span className="hero-kicker-dot" aria-hidden="true" />
                <span className="font-mono">NEOM PANELS · STRATEGIC BLUEPRINT 2026–2036</span>
              </div>

              <h1 id="main-heading" tabIndex={-1} className="hero-title">
                Engineered Excellence,
                <br />
                <span className="hero-title-accent">Designed for Spaces.</span>
              </h1>

              <p className="lead-text hero-lead">
                Building a next-generation engineered wood, interior materials, and project supply
                ecosystem for India and global markets. From precision-calibrated core substrates to
                artisan architectural surfaces.
              </p>

              <div className="btn-group hero-cta-row">
                <a href="#portfolio" className="btn btn--primary">
                  <span>Explore Phase 1 Portfolio</span>
                  <span aria-hidden="true">↓</span>
                </a>
                <Link href="/enquiry?category=sample-request" className="btn btn--secondary">
                  Order Sample Box
                </Link>
                <a href="#gcc-corridor" className="editorial-link" style={{ marginLeft: '0.5rem' }}>
                  <span>India &amp; GCC Corridor</span>
                  <span className="link-arrow" aria-hidden="true">→</span>
                </a>
              </div>

              {/* Scannable Specifier Trust Metrics */}
              <div className="hero-spec-strip" aria-label="Key Engineering Specifications">
                <div className="hero-spec-chip">
                  <span className="spec-chip-label">THICKNESS TOLERANCE</span>
                  <strong className="spec-chip-val font-mono">±0.2mm Calibrated</strong>
                </div>
                <div className="hero-spec-chip">
                  <span className="spec-chip-label">CERTIFICATION STANDARDS</span>
                  <strong className="spec-chip-val font-mono">IS:710 · IS:303 · E0</strong>
                </div>
                <div className="hero-spec-chip">
                  <span className="spec-chip-label">GLOBAL SUPPLY REACH</span>
                  <strong className="spec-chip-val font-mono">Pan-India + 6 GCC States</strong>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Visual Stage with Live Spec Overlays */}
            <div className="hero-visual-stage hero-animate--delay">
              <div className="hero-visual-frame">
                <img
                  src="/assets/arch-lobby-reception.jpg"
                  alt="NEOM Panels flagship architectural reception with fluted timber panelling and warm illuminated joinery."
                  className="hero-main-img"
                  width="1400"
                  height="933"
                  priority="true"
                />

                {/* Floating Architectural Spec Badges */}
                <div className="hero-floating-badge hero-floating-badge--top">
                  <span className="floating-badge-dot" aria-hidden="true" />
                  <div>
                    <span className="floating-badge-title">QUAD-PRESS CALIBRATED</span>
                    <span className="floating-badge-sub font-mono">100% Flatness · Zero Voids</span>
                  </div>
                </div>

                <div className="hero-floating-badge hero-floating-badge--bottom">
                  <span className="floating-badge-icon" aria-hidden="true">⚓</span>
                  <div>
                    <span className="floating-badge-title">IS:710 MARINE GRADE</span>
                    <span className="floating-badge-sub font-mono">72H Boiling Water Proof</span>
                  </div>
                </div>

                <span className="hero-location-badge font-mono">
                  DIRECT FACTORY SUPPLY · INDIA &amp; GCC
                </span>
              </div>

              <div className="hero-visual-caption">
                <span className="caption-tag">STRATEGIC BLUEPRINT</span>
                <p>
                  Integrated manufacturing and digital supply infrastructure designed to meet the
                  rigorous specifications of architects, furniture OEMs, and high-rise builders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE BIG MARKET SHIFT (SLIDE 2) */}
      <section id="market-shift" className="section section--warm-white reveal-once" aria-labelledby="market-shift-heading">
        <div className="container">
          <InteractiveMarketShift />
        </div>
      </section>

      {/* 3. PHASE 1 PRODUCT PORTFOLIO ARCHITECTURE (SLIDE 9) */}
      <section id="portfolio" className="section section--architectural-grid reveal-once" aria-labelledby="portfolio-heading">
        <div className="container">
          <div className="section-header-split">
            <div>
              <p className="eyebrow">PHASE 1 PRODUCT ARCHITECTURE</p>
              <h2 id="portfolio-heading" className="section-title">
                Engineered for precision. Crafted for spaces.
              </h2>
              <p className="lead-text" style={{ marginBottom: 0 }}>
                Explore NEOM Panels’ comprehensive material portfolio across structural core substrates, solid composite boards, and luxury architectural surface finishes.
              </p>
            </div>
            <div className="section-header-actions">
              <Link href="/enquiry?category=sample-request" className="btn btn--primary">
                Order Architectural Sample Box →
              </Link>
            </div>
          </div>

          <div style={{ marginTop: 'var(--space-6)' }}>
            <InteractiveProductArchitecture />
          </div>
        </div>
      </section>

      {/* 4. INDUSTRIES WE SUPPORT (SLIDE 7) */}
      <section id="industries" className="section section--warm-white reveal-once" aria-labelledby="industries-heading">
        <div className="container">
          <div className="section-header-split">
            <div>
              <p className="eyebrow">APPLICATION SECTORS</p>
              <h2 id="industries-heading" className="section-title">
                One brand. Multiple industries.
              </h2>
              <p className="lead-text" style={{ marginBottom: 0 }}>
                Scalable wood-panel applications engineered across build, produce, store, and furnish environments.
              </p>
            </div>
            <div className="section-header-actions">
              <Link href="/industries" className="editorial-link">
                <span>View All Technical Industry Specs</span>
                <span className="link-arrow" aria-hidden="true">→</span>
              </Link>
            </div>
          </div>

          <div className="sectors-quad-grid" style={{ marginTop: 'var(--space-6)' }}>
            {SECTORS_WE_SUPPORT.map((sector) => (
              <article key={sector.id} className="sector-card">
                <div className="sector-media-wrap">
                  <img
                    src={sector.image}
                    alt={sector.title}
                    className="sector-img"
                    width="800"
                    height="450"
                    loading="lazy"
                  />
                  <span className="sector-num font-mono">{sector.num}</span>
                </div>

                <div className="sector-body">
                  <span className="sector-kicker font-mono">SECTOR {sector.num}</span>
                  <h3 className="sector-title">{sector.title}</h3>
                  <p className="sector-subtitle">{sector.subtitle}</p>
                  <p className="sector-desc">{sector.description}</p>

                  <div className="sector-meta">
                    <span className="sector-meta-label">KEY USE CASES:</span>
                    <span className="sector-meta-val">{sector.useCases}</span>
                  </div>

                  <Link href={sector.href} className="editorial-link" style={{ marginTop: 'auto' }}>
                    <span>Explore Specifications</span>
                    <span className="link-arrow" aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 5. THE 8-PILLAR ECOSYSTEM (SLIDE 8) */}
      <section id="ecosystem" className="section section--sage-tint reveal-once" aria-labelledby="ecosystem-heading">
        <div className="container">
          <InteractiveEcosystemExplorer />
        </div>
      </section>

      {/* 6. INDIA & GCC EXPANSION CORRIDOR (SLIDE 4 & 5) */}
      <section id="gcc-corridor" className="section section--architectural-grid reveal-once" aria-labelledby="gcc-heading">
        <div className="container">
          <InteractiveGccCorridor />
        </div>
      </section>

      {/* 7. WHAT THE MARKET STILL LACKS & OUR SOLUTION (SLIDE 6) */}
      <section id="market-gaps" className="section section--warm-white reveal-once" aria-labelledby="gaps-heading">
        <div className="container">
          <div className="section-header-split">
            <div>
              <p className="eyebrow">CLOSING CRITICAL INDUSTRY GAPS</p>
              <h2 id="gaps-heading" className="section-title">
                What the market still lacks.
              </h2>
              <p className="lead-text" style={{ marginBottom: 0 }}>
                The wood panel industry still suffers from fragmentation and opacity. NEOM Panels is built from the ground up to replace friction with structure, service, and digital access.
              </p>
            </div>
            <div className="section-header-actions">
              <span className="badge-highlight font-mono">STRUCTURE · SERVICE · DIGITAL ACCESS</span>
            </div>
          </div>

          <div className="gaps-comparison-grid" style={{ marginTop: 'var(--space-6)' }}>
            {MARKET_GAPS_SOLUTIONS.map((item, idx) => (
              <div key={idx} className="gap-solution-card">
                {/* Friction / Gap */}
                <div className="gap-side">
                  <div className="gap-badge">
                    <span className="gap-indicator" aria-hidden="true">✕</span>
                    <span className="gap-tag font-mono">INDUSTRY FRICTION</span>
                  </div>
                  <h4 className="gap-title">{item.gap}</h4>
                  <p className="gap-desc">{item.gapDesc}</p>
                </div>

                {/* Arrow */}
                <div className="gap-arrow" aria-hidden="true">→</div>

                {/* NEOM Solution */}
                <div className="solution-side">
                  <div className="solution-badge">
                    <span className="solution-indicator" aria-hidden="true">✔</span>
                    <span className="solution-tag font-mono">NEOM PANELS SOLUTION</span>
                  </div>
                  <h4 className="solution-title">{item.solution}</h4>
                  <p className="solution-desc">{item.solutionDesc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. DIGITAL GROWTH ENGINE & SPECIFIER PLATFORM (SLIDE 10) */}
      <section id="digital-platform" className="section section--architectural-grid reveal-once" aria-labelledby="platform-heading">
        <div className="container">
          <div className="digital-platform-split">
            {/* Left: Digital Platform Showcase */}
            <div>
              <p className="eyebrow">GO-TO-MARKET &amp; DIGITAL PLATFORM</p>
              <h2 id="platform-heading" className="section-title">
                Digital infrastructure as a competitive advantage.
              </h2>
              <p className="lead-text">
                We empower 8 critical stakeholder channels—dealers, distributors, architects, interior designers, furniture manufacturers, contractors, builders, and institutional procurement—with integrated digital tools.
              </p>

              <div className="digital-tools-list">
                <div className="digital-tool-item">
                  <span className="tool-icon">📱</span>
                  <div>
                    <strong>Architect &amp; Specifier Portal</strong>
                    <p>Instant access to BIM models, high-res texture maps, and 1-click sample box orders.</p>
                  </div>
                </div>

                <div className="digital-tool-item">
                  <span className="tool-icon">📊</span>
                  <div>
                    <strong>Dealer Order &amp; Stock Portal</strong>
                    <p>Direct B2B lot bookings, invoice downloads, dispatch notifications, and regional trade support.</p>
                  </div>
                </div>

                <div className="digital-tool-item">
                  <span className="tool-icon">🧮</span>
                  <div>
                    <strong>Project BOQ &amp; Thickness Calculator</strong>
                    <p>Calculate sheet requirements, optimal cutting layouts, and weight specifications in seconds.</p>
                  </div>
                </div>

                <div className="digital-tool-item">
                  <span className="tool-icon">📦</span>
                  <div>
                    <strong>Sample Request &amp; Tracking System</strong>
                    <p>Doorstep delivery of physical 150×150mm hand swatches with live tracking.</p>
                  </div>
                </div>
              </div>

              <div className="btn-group" style={{ marginTop: 'var(--space-5)' }}>
                <Link href="/enquiry?category=sample-request" className="btn btn--primary">
                  <span>Order Sample Box</span>
                  <span aria-hidden="true">→</span>
                </Link>
                <Link href="/resources" className="btn btn--secondary">
                  Access Spec Center
                </Link>
              </div>
            </div>

            {/* Right: Platform Visual */}
            <div className="digital-platform-media">
              <figure className="digital-platform-card">
                <img
                  src="/assets/digital-platform-laptop.jpg"
                  alt="NEOM Panels B2B Dashboard and physical wood sample blocks on a designer desk."
                  width="1000"
                  height="650"
                  className="digital-laptop-img"
                  loading="lazy"
                />
                <figcaption className="digital-caption">
                  <div>
                    <strong>NEOM Panels Digital Platform</strong>
                    <p>Connecting physical timber engineering with digital convenience.</p>
                  </div>
                  <span className="digital-status-live font-mono">● LIVE B2B PORTAL</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SCALABLE BUSINESS MODEL & ROADMAP TO SCALE (SLIDE 9 & 11) */}
      <section id="roadmap" className="section section--warm-white reveal-once" aria-labelledby="roadmap-heading">
        <div className="container">
          <div className="section-header-split">
            <div>
              <p className="eyebrow">SCALE BLUEPRINT 2026–2036</p>
              <h2 id="roadmap-heading" className="section-title">
                A disciplined roadmap to long-term scale.
              </h2>
              <p className="lead-text" style={{ marginBottom: 0 }}>
                Combining strong brand building, disciplined contract manufacturing, strategic partnerships, and an integrated manufacturing ecosystem.
              </p>
            </div>
            <div className="section-header-actions">
              <span className="badge-highlight font-mono">10-YEAR GROWTH HORIZON</span>
            </div>
          </div>

          {/* 4 Business Model Stages */}
          <div className="stages-flow-grid" style={{ marginTop: 'var(--space-6)' }}>
            {BUSINESS_STAGES.map((s, idx) => (
              <div key={idx} className="business-stage-card">
                <span className="stage-pill font-mono">{s.stage}</span>
                <h4 className="stage-title">{s.title}</h4>
                <p className="stage-desc">{s.desc}</p>
                <span className="stage-step-num font-mono">0{idx + 1}</span>
              </div>
            ))}
          </div>

          {/* 10-Year Revenue Roadmap */}
          <div className="scale-milestones-box" style={{ marginTop: 'var(--space-7)' }}>
            <div className="scale-milestones-header">
              <h3 className="milestones-title">10-Year Scale &amp; Expansion Milestones</h3>
              <span className="milestones-note font-mono">TARGET HORIZON: 2026 – 2036</span>
            </div>

            <div className="scale-milestones-grid">
              {SCALE_ROADMAP.map((m, idx) => (
                <div key={idx} className="scale-milestone-cell">
                  <div className="milestone-year font-mono">{m.year}</div>
                  <div className="milestone-target font-mono">{m.target}</div>
                  <div className="milestone-phase">{m.phase}</div>
                  <p className="milestone-desc">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. COMMON SPECIFICATION QUESTIONS (FAQS) */}
      <section id="faq" className="section section--warm-white section--no-border reveal-once" aria-labelledby="faq-heading">
        <div className="container">
          <div className="section-header-split">
            <div>
              <p className="eyebrow">TECHNICAL GUIDANCE &amp; PROCUREMENT FAQ</p>
              <h2 id="faq-heading" className="section-title">
                Frequently asked specification questions.
              </h2>
              <p className="lead-text" style={{ marginBottom: 0 }}>
                Essential information for architects, furniture OEMs, institutional buyers, and export partners.
              </p>
            </div>
            <div className="section-header-actions">
              <Link href="/resources" className="btn btn--secondary">
                Download Technical Datasheets →
              </Link>
            </div>
          </div>

          <div style={{ marginTop: 'var(--space-6)' }}>
            {HOME_FAQS.map((faq, idx) => (
              <details key={idx} className="guidance-accordion" open={idx === 0}>
                <summary>
                  <div>
                    <h3 className="subsection-title" style={{ marginBottom: 0 }}>
                      {faq.question}
                    </h3>
                  </div>
                  <span className="guidance-accordion__action">View Specification</span>
                </summary>
                <div className="guidance-accordion__body">
                  <p style={{ marginBottom: 0 }}>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>

          {/* 11. COMMAND ACTION BANNER — DIRECT CONTACT (SLIDE 12) */}
          <div className="home-cta-command-banner">
            <div className="home-cta-command-copy">
              <p className="home-cta-command-eyebrow font-mono">LET&apos;S BUILD BETTER SPACES TOGETHER</p>
              <h2 className="home-cta-command-title">
                Ready to specify NEOM Panels for your next project?
              </h2>
              <p className="home-cta-command-desc">
                Order an architectural sample box, submit a project BOQ, or discuss regional dealership and export supply terms directly with our executive team.
              </p>
              <div className="home-cta-contacts-strip">
                <a href="tel:+919745450618" className="cta-contact-pill font-mono">
                  📞 +91 97454 50618
                </a>
                <a href="mailto:neompanels@gmail.com" className="cta-contact-pill font-mono">
                  ✉️ neompanels@gmail.com
                </a>
                <span className="cta-contact-pill font-mono">
                  🌐 www.neompanels.com
                </span>
              </div>
            </div>
            <div className="home-cta-command-actions">
              <Link href="/enquiry" className="btn home-cta-btn-light">
                Submit Project Requirement →
              </Link>
              <Link href="/enquiry?category=sample-request" className="btn home-cta-btn-outline">
                Order Material Sample Box
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
