'use client';

import { useState } from 'react';
import Link from 'next/link';

const ECOSYSTEM_PILLARS = [
  {
    id: 'quality',
    number: '01',
    title: 'Disciplined Quality',
    shortDesc: 'Automated 4-stage inspection, precision quad-press thickness calibration (±0.2mm), and full IS:710 & IS:303 lab batch testing.',
    icon: '🛡️',
    deliverables: [
      'Quad-press thickness calibration for precision CNC processing',
      'Batch-tested 72-hour boiling water proof (BWP) validation',
      'Digital batch quality certificates accessible via QR code on every sheet'
    ],
    targetStakeholder: 'OEM Manufacturers & Structural Engineers'
  },
  {
    id: 'design',
    number: '02',
    title: 'Design Support',
    shortDesc: 'Curated architectural surfaces, synchronized woodgrains, custom veneer matching, and CAD/BIM detailing assistance.',
    icon: '✏️',
    deliverables: [
      'Synchronized decor matching between laminates, edge-bands, and panels',
      'BIM & CAD parametric detail files for fast architectural drafting',
      'Design advisory for high-humidity, acoustic, and heavy-wear zones'
    ],
    targetStakeholder: 'Interior Designers & Specifiers'
  },
  {
    id: 'dealer',
    number: '03',
    title: 'Dealer Enablement',
    shortDesc: 'Empowering regional trade partners with brand display kits, transparent trade terms, lead routing, and digital stock tools.',
    icon: '👥',
    deliverables: [
      'B2B dealer order portal with real-time dispatch tracking',
      'Showroom visual merchandising kits & tactile material sample displays',
      'Direct regional contractor lead forwarding to local verified dealers'
    ],
    targetStakeholder: 'Distributors & Regional Plywood Dealers'
  },
  {
    id: 'architect',
    number: '04',
    title: 'Architect Engagement',
    shortDesc: 'Direct studio partnerships, 48-hour physical sample box fulfillment, and mock-up board support for project presentations.',
    icon: '🏛️',
    deliverables: [
      'NEOM Architecture Sample Box with hand-curated material swatches',
      'Dedicated Architect Concierge for custom dimensions and finishes',
      'Continuing education on low-emission (E0) standards and sustainable wood'
    ],
    targetStakeholder: 'Architectural Practices & Design Consultancies'
  },
  {
    id: 'digital',
    number: '05',
    title: 'Digital Infrastructure',
    shortDesc: 'End-to-end digital platform: Product Selector, Architect Portal, Dealer Portal, BOQ Calculator, and automated sample tracking.',
    icon: '💻',
    deliverables: [
      'Online Interactive Material Selector with live technical filters',
      'One-click Sample Request Engine with 48–72 hour door delivery',
      'Project BOQ and sheet optimizer for zero wastage on shop floors'
    ],
    targetStakeholder: 'Procurement Heads, Estimators & Tech-Forward Buyers'
  },
  {
    id: 'supply',
    number: '06',
    title: 'Project Supply Capability',
    shortDesc: 'Dependable factory-direct fulfillment for large commercial BOQs, OEM monthly run-rates, and multi-location site dispatches.',
    icon: '🚚',
    deliverables: [
      'Scheduled recurring monthly lot production for furniture factories',
      'Palletized edge-protected packaging preventing site transit damage',
      'Single point of contact for institutional and government tender supplies'
    ],
    targetStakeholder: 'General Contractors & Project Procurement Teams'
  },
  {
    id: 'sustainability',
    number: '07',
    title: 'Sustainability & ESG',
    shortDesc: '100% sustainable agro-forestry timber, zero-waste thermal biomass recovery, and strict low-emission resin formulations.',
    icon: '🌱',
    deliverables: [
      'Plantation-grown eucalyptus and poplar preventing forest depletion',
      'E0 and CARB Phase 2 compliant low-formaldehyde bonding options',
      '100% manufacturing wood-waste redirected into factory energy generation'
    ],
    targetStakeholder: 'Green Building Assessors & ESG Compliance Officers'
  },
  {
    id: 'export',
    number: '08',
    title: 'Export Readiness & GCC Corridor',
    shortDesc: 'International sizing specifications, fumigation compliance, sea-worthy container bundling, and active GCC market corridors.',
    icon: '🌐',
    deliverables: [
      'Direct trade link to UAE (Dubai hub), Saudi Arabia, Qatar, Oman & Kuwait',
      'ISPM-15 heat-treated / fumigated moisture-sealed export packaging',
      'Compliance with international building codes and GCC climate requirements'
    ],
    targetStakeholder: 'Global Importers, GCC Fit-Out Firms & Trading Houses'
  }
];

export default function InteractiveEcosystemExplorer() {
  const [selectedPillarId, setSelectedPillarId] = useState('quality');
  const activePillar = ECOSYSTEM_PILLARS.find((p) => p.id === selectedPillarId) || ECOSYSTEM_PILLARS[0];

  return (
    <div className="ecosystem-explorer-wrap">
      <div className="ecosystem-intro-split">
        <div>
          <p className="eyebrow">INTEGRATED VALUE CHAIN</p>
          <h3 className="section-title">An integrated engineered wood, interior materials, and project supply ecosystem.</h3>
        </div>
        <div>
          <p className="lead-text" style={{ marginBottom: 0 }}>
            NEOM Panels connects every node of the value chain—from factory press to design studio, dealer counter, and high-rise construction site. Click each pillar below to explore our operating commitments.
          </p>
        </div>
      </div>

      <div className="ecosystem-interactive-stage">
        {/* The 8 Pillar Orbit Bar */}
        <div className="ecosystem-orbit-grid" role="tablist" aria-label="Ecosystem 8 Pillars">
          {ECOSYSTEM_PILLARS.map((pillar) => {
            const isSelected = selectedPillarId === pillar.id;
            return (
              <button
                key={pillar.id}
                role="tab"
                aria-selected={isSelected}
                className={`ecosystem-orbit-btn ${isSelected ? 'ecosystem-orbit-btn--active' : ''}`}
                onClick={() => setSelectedPillarId(pillar.id)}
              >
                <div className="orbit-btn-top">
                  <span className="orbit-icon">{pillar.icon}</span>
                  <span className="orbit-num font-mono">{pillar.number}</span>
                </div>
                <span className="orbit-title">{pillar.title}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Pillar Detailed Card */}
        <div className="ecosystem-active-pillar-card">
          <div className="pillar-card-header">
            <div>
              <span className="pillar-num-badge font-mono">PILLAR {activePillar.number} OF 08</span>
              <h4 className="pillar-card-title">{activePillar.title}</h4>
            </div>
            <div className="pillar-stakeholder-tag">
              <span className="stakeholder-label">PRIMARY STAKEHOLDER:</span>
              <strong>{activePillar.targetStakeholder}</strong>
            </div>
          </div>

          <p className="pillar-card-lead">{activePillar.shortDesc}</p>

          <div className="pillar-deliverables-box">
            <span className="deliverables-heading">CORE ECOSYSTEM DELIVERABLES &amp; STANDARDS:</span>
            <div className="deliverables-grid">
              {activePillar.deliverables.map((item, idx) => (
                <div key={idx} className="deliverable-item">
                  <span className="deliverable-check" aria-hidden="true">✔</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pillar-card-footer">
            <div className="pillar-quick-meta">
              <span>Part of the NEOM Panels 2026–2036 Strategic Blueprint</span>
            </div>
            <div className="btn-group">
              <Link href="/about" className="editorial-link">
                <span>Learn about our Corporate Foundation</span>
                <span className="link-arrow" aria-hidden="true">→</span>
              </Link>
              <Link href="/enquiry" className="btn btn--secondary btn--sm">
                Discuss Partnership
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
