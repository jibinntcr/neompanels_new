import Link from 'next/link';

export const metadata = {
  title: 'Partners & Ecosystem | NEOM Panels',
  description:
    'Collaborate with NEOM Panels. Tailored partnership pathways for architects, interior designers, dealers, distributors, furniture manufacturers, contractors, builders, and institutional buyers.',
  alternates: {
    canonical: '/partners'
  }
};

export default function PartnersPage() {
  return (
    <div className="page-view">
      {/* Page Header */}
      <section className="page-header-section bg-warm-ivory border-bottom-divider">
        <div className="container">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <ol className="breadcrumb-list font-mono" role="list">
              <li><Link href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page">Partners &amp; Stakeholders</li>
            </ol>
          </nav>

          <div className="page-header-content">
            <span className="section-eyebrow font-mono">CHANNEL COLLABORATION</span>
            <h1 className="page-title">Built Around the People Who Build Spaces</h1>
            <p className="page-lead-text">
              Physical slide 10 of our strategic blueprint identifies eight key stakeholder groups at the center of the NEOM Panels ecosystem. We provide transparent communication and tailored supply pathways for each.
            </p>
            <div className="page-header-cta-row">
              <Link href="/enquiry?type=Partnership" className="btn btn-primary">
                <span>Discuss a Partnership</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The 8 Stakeholder Groups */}
      <section className="section-spacing" aria-label="Eight Stakeholder Groups">
        <div className="container">
          <div className="section-header-compact">
            <span className="section-eyebrow font-mono">STAKEHOLDER ARCHITECTURE</span>
            <h2 className="section-title">Eight Stakeholder Pathways</h2>
            <p className="section-subtitle">
              How architects, distributors, manufacturers, and buyers interact with the NEOM Panels materials ecosystem.
            </p>
          </div>

          <div className="stakeholders-grid">
            {/* 1. Architects */}
            <div className="stakeholder-card">
              <div className="stakeholder-header">
                <span className="stakeholder-num font-mono">01</span>
                <h3 className="stakeholder-title">Architects</h3>
              </div>
              <p className="stakeholder-desc">
                Collaborate on material specifications, explore veneer grain aesthetics, and evaluate core substrates for residential and commercial building frameworks.
              </p>
              <div className="stakeholder-action">
                <Link
                  href="/enquiry?type=Sample+Request&role=Architects"
                  className="btn btn-secondary btn-sm"
                >
                  <span>Architect Enquiry</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* 2. Interior Designers */}
            <div className="stakeholder-card">
              <div className="stakeholder-header">
                <span className="stakeholder-num font-mono">02</span>
                <h3 className="stakeholder-title">Interior Designers</h3>
              </div>
              <p className="stakeholder-desc">
                Select from our curated decorative surface portfolio—natural veneers, modern acrylics, and fluted charcoal panels—for bespoke hospitality and living spaces.
              </p>
              <div className="stakeholder-action">
                <Link
                  href="/enquiry?type=Sample+Request&role=Interior+Designers"
                  className="btn btn-secondary btn-sm"
                >
                  <span>Designer Enquiry</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* 3. Dealers */}
            <div className="stakeholder-card">
              <div className="stakeholder-header">
                <span className="stakeholder-num font-mono">03</span>
                <h3 className="stakeholder-title">Dealers</h3>
              </div>
              <p className="stakeholder-desc">
                Strengthen retail operations with branded display support, structured wholesale pricing, and consistent replenishment of fast-moving panel substrates.
              </p>
              <div className="stakeholder-action">
                <Link
                  href="/enquiry?type=Partnership&role=Dealers"
                  className="btn btn-secondary btn-sm"
                >
                  <span>Discuss Dealership</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* 4. Distributors */}
            <div className="stakeholder-card">
              <div className="stakeholder-header">
                <span className="stakeholder-num font-mono">04</span>
                <h3 className="stakeholder-title">Distributors</h3>
              </div>
              <p className="stakeholder-desc">
                Scale regional market coverage through direct multi-truckload allocation, planned production scheduling, and disciplined commercial terms.
              </p>
              <div className="stakeholder-action">
                <Link
                  href="/enquiry?type=Partnership&role=Distributors"
                  className="btn btn-secondary btn-sm"
                >
                  <span>Discuss Distribution</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* 5. Furniture Manufacturers */}
            <div className="stakeholder-card">
              <div className="stakeholder-header">
                <span className="stakeholder-num font-mono">05</span>
                <h3 className="stakeholder-title">Furniture Manufacturers</h3>
              </div>
              <p className="stakeholder-desc">
                Source calibrated plywood and high-density engineered boards specifically formulated for CNC nesting machines, edge-banders, and modular assembly lines.
              </p>
              <div className="stakeholder-action">
                <Link
                  href="/enquiry?type=Project+Supply&role=Furniture+Manufacturers"
                  className="btn btn-secondary btn-sm"
                >
                  <span>OEM Substrate Supply</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* 6. Contractors */}
            <div className="stakeholder-card">
              <div className="stakeholder-header">
                <span className="stakeholder-num font-mono">06</span>
                <h3 className="stakeholder-title">Contractors</h3>
              </div>
              <p className="stakeholder-desc">
                Ensure project site milestones are met with dependable multi-batch delivery, consistent panel flatness, and reliable screw-holding performance.
              </p>
              <div className="stakeholder-action">
                <Link
                  href="/enquiry?type=Project+Supply&role=Contractors"
                  className="btn btn-secondary btn-sm"
                >
                  <span>Contractor Supply</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* 7. Builders */}
            <div className="stakeholder-card">
              <div className="stakeholder-header">
                <span className="stakeholder-num font-mono">07</span>
                <h3 className="stakeholder-title">Builders</h3>
              </div>
              <p className="stakeholder-desc">
                Direct factory-partner coordination for residential towers, villa developments, and commercial properties requiring uniform wood panels.
              </p>
              <div className="stakeholder-action">
                <Link
                  href="/enquiry?type=Project+Supply&role=Builders"
                  className="btn btn-secondary btn-sm"
                >
                  <span>Discuss Project Supply</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* 8. Institutional Buyers */}
            <div className="stakeholder-card">
              <div className="stakeholder-header">
                <span className="stakeholder-num font-mono">08</span>
                <h3 className="stakeholder-title">Institutional Buyers</h3>
              </div>
              <p className="stakeholder-desc">
                Fulfill institutional procurement tenders for educational facilities, healthcare developments, government complexes, and export packaging contracts.
              </p>
              <div className="stakeholder-action">
                <Link
                  href="/enquiry?type=Project+Supply&role=Institutional+Buyers"
                  className="btn btn-secondary btn-sm"
                >
                  <span>Institutional Procurement</span>
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Planned Digital Platform Roadmap */}
      <section className="section-spacing bg-warm-ivory border-top-divider" aria-label="Digital Platform Roadmap">
        <div className="container">
          <div className="section-header-compact">
            <span className="section-eyebrow font-mono">DIGITAL INFRASTRUCTURE ROADMAP</span>
            <h2 className="section-title">Planned Digital Ecosystem Capabilities</h2>
            <p className="section-subtitle">
              From physical page 10 of our strategic blueprint. These proposed systems are currently in development as part of our digital infrastructure roadmap.
            </p>
          </div>

          <div className="digital-roadmap-grid">
            <div className="roadmap-tool-card">
              <div className="tool-card-status font-mono">PLANNED SYSTEM</div>
              <h3 className="tool-card-title">Dealer Portal</h3>
              <p className="tool-card-desc">
                Proposed dedicated interface for authorized dealers to manage repeat allocations, view invoice records, and coordinate regional dispatch.
              </p>
            </div>

            <div className="roadmap-tool-card">
              <div className="tool-card-status font-mono">PLANNED SYSTEM</div>
              <h3 className="tool-card-title">Architect Portal</h3>
              <p className="tool-card-desc">
                Proposed digital workspace for design firms to save material palettes, review specification guidelines, and track project sample kits.
              </p>
            </div>

            <div className="roadmap-tool-card">
              <div className="tool-card-status font-mono">PLANNED SYSTEM</div>
              <h3 className="tool-card-title">Sample Request System</h3>
              <p className="tool-card-desc">
                Streamlined dispatch channel connecting physical material swatches and substrate cross-sections directly to specifier studios.
              </p>
            </div>

            <div className="roadmap-tool-card">
              <div className="tool-card-status font-mono">PLANNED SYSTEM</div>
              <h3 className="tool-card-title">Dealer Locator</h3>
              <p className="tool-card-desc">
                Proposed interactive geographic directory assisting retail customers and contractors in finding certified NEOM Panels channel partners.
              </p>
            </div>

            <div className="roadmap-tool-card">
              <div className="tool-card-status font-mono">PLANNED SYSTEM</div>
              <h3 className="tool-card-title">Lead Management &amp; CRM</h3>
              <p className="tool-card-desc">
                Integrated backend enquiry routing ensuring prospective customer inquiries are forwarded promptly to local territory representatives.
              </p>
            </div>

            <div className="roadmap-tool-card">
              <div className="tool-card-status font-mono">PLANNED SYSTEM</div>
              <h3 className="tool-card-title">Project Calculator</h3>
              <p className="tool-card-desc">
                Proposed calculation utility to estimate substrate sheet requirements, edge-trim allowances, and cutting yield for commercial projects.
              </p>
            </div>
          </div>

          <div className="roadmap-disclaimer-note font-mono text-center text-muted" style={{ marginTop: '2.5rem' }}>
            Note: All digital tools listed above are future development commitments outlined in physical slide 10 of the NEOM Panels strategic blueprint.
          </div>
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="section-spacing border-top-divider">
        <div className="container">
          <div className="consultation-banner">
            <div className="consultation-copy">
              <span className="section-eyebrow font-mono">INITIATE PARTNERSHIP</span>
              <h2 className="section-title">Ready to connect with NEOM Panels?</h2>
              <p className="consultation-desc">
                Our management desk welcomes direct dialogue with qualified distributors, furniture OEMs, and architectural practices.
              </p>
            </div>
            <div className="consultation-action">
              <Link href="/enquiry?type=Partnership" className="btn btn-primary">
                <span>Start Partnership Conversation</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
