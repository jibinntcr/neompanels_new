'use client';

import { useState } from 'react';
import Link from 'next/link';

const SPACES_SHOWCASE = [
  {
    id: 'kitchens',
    label: 'Modular Kitchens & Cabinetry',
    headline: 'High-Moisture Tolerant Substrates for Heavy-Use Cabinetry',
    subtext: 'High-density calibrated plywood and HDHMR cores resist continuous humidity, steam exposure, and daily hinge fatigue without edge swelling.',
    image: '/assets/arch-luxury-kitchen.jpg',
    specs: ['IS:710 Marine / BWR Grade', 'Zero Core Gap Calibration', 'PUR Edge-Banding Stability'],
    cta: 'Explore Modular Substrates',
    href: '/industries#modular-furniture'
  },
  {
    id: 'offices',
    label: 'Commercial & Corporate Fit-Outs',
    headline: 'Specification-Grade Wood Panels for Fast-Track Project BOQs',
    subtext: 'Precision dimensional stability for expansive wall cladding, executive workstations, and acoustic baffles delivered on strict contractor delivery cadences.',
    image: '/assets/arch-modern-office.jpg',
    specs: ['E0 Low Emission Standard', 'CNC High-Speed Routing Ready', 'Synchronized Melamine Faces'],
    cta: 'Explore Commercial Solutions',
    href: '/industries#projects-interiors'
  },
  {
    id: 'hospitality',
    label: 'Hospitality Suites & Luxury Living',
    headline: 'Artisan Architectural Finishes for 5-Star Living Spaces',
    subtext: 'Fluted 3D wall louvers, quarter-cut smoked veneers, and anti-fingerprint surfaces curated to elevate hotel rooms, lobbies, and luxury residential towers.',
    image: '/assets/arch-hotel-suite.jpg',
    specs: ['Quarter-Cut Natural Veneers', 'Acoustic Fluted Wall Panels', '6H Ultra-Gloss Acrylics'],
    cta: 'Explore Decorative Surfaces',
    href: '/brands#decorative-surfaces'
  }
];

const MACRO_DRIVERS = [
  {
    icon: '🏢',
    num: '01',
    title: 'Urban Housing Boom',
    desc: 'Rapid high-rise urbanization across Tier-1 & Tier-2 cities driving demand for durable, non-toxic, long-lifespan interior materials.'
  },
  {
    icon: '📐',
    num: '02',
    title: 'Modular Furniture Surge',
    desc: 'Factory-made flat-pack cabinetry demands strict thickness tolerance (±0.2mm) to prevent CNC errors and hinge misalignments.'
  },
  {
    icon: '🏛️',
    num: '03',
    title: 'Commercial Expansion',
    desc: 'Corporate offices, co-working spaces, and retail chains requiring fast-track, certified fire-retardant and low-emission panels.'
  },
  {
    icon: '🛎️',
    num: '04',
    title: 'Hospitality & Tourism',
    desc: 'Massive hotel pipeline across India and the GCC needing premium aesthetics that endure heavy guest turnover and humid climates.'
  },
  {
    icon: '✨',
    num: '05',
    title: 'Architectural Design Relevance',
    desc: 'Architects and interior designers want curated tactile textures, synchronized grains, and integrated specification support.'
  },
  {
    icon: '🌱',
    num: '06',
    title: 'Low-Emission Standards',
    desc: 'Global shift towards E0, CARB P2, and green-building certified materials for healthy indoor air quality and LEED credits.'
  }
];

export default function InteractiveMarketShift() {
  const [activeSpaceIdx, setActiveSpaceIdx] = useState(0);
  const activeSpace = SPACES_SHOWCASE[activeSpaceIdx];

  return (
    <div className="market-shift-container">
      {/* Editorial Core Banner */}
      <div className="market-shift-banner">
        <div className="shift-banner-eyebrow">
          <span className="shift-dot" aria-hidden="true" />
          <span>INDUSTRY PARADIGM SHIFT · 2026–2036 BLUEPRINT</span>
        </div>
        <h3 className="shift-banner-title">
          The wood panel industry is moving from a product-led commodity market to a specification-led interior materials ecosystem.
        </h3>
        <p className="shift-banner-lead">
          Today’s architects, OEM manufacturers, and institutional developers do not buy generic timber boards—they specify certified performance systems tailored to environmental exposure, fabrication automation, and architectural intent.
        </p>
        <div className="shift-banner-quote">
          <span className="quote-mark" aria-hidden="true">“</span>
          <strong>The opportunity is no longer just manufacturing. It is ecosystem participation.</strong>
        </div>
      </div>

      {/* Interactive Space Visualizer */}
      <div className="market-spaces-visualizer">
        <div className="spaces-tab-nav" role="tablist" aria-label="Designed Spaces">
          {SPACES_SHOWCASE.map((space, idx) => {
            const isActive = activeSpaceIdx === idx;
            return (
              <button
                key={space.id}
                role="tab"
                aria-selected={isActive}
                className={`spaces-tab-btn ${isActive ? 'spaces-tab-btn--active' : ''}`}
                onClick={() => setActiveSpaceIdx(idx)}
              >
                <span className="spaces-tab-num">0{idx + 1}</span>
                <span className="spaces-tab-text">{space.label}</span>
              </button>
            );
          })}
        </div>

        <div className="space-display-card">
          <div className="space-display-media">
            <img
              src={activeSpace.image}
              alt={activeSpace.label}
              className="space-display-img"
              width="900"
              height="550"
              loading="lazy"
            />
            <div className="space-specs-overlay">
              {activeSpace.specs.map((spec, i) => (
                <span key={i} className="space-spec-tag font-mono">
                  {spec}
                </span>
              ))}
            </div>
          </div>

          <div className="space-display-content">
            <span className="space-tag-kicker">{activeSpace.label}</span>
            <h4 className="space-headline">{activeSpace.headline}</h4>
            <p className="space-subtext">{activeSpace.subtext}</p>
            <div className="space-actions">
              <Link href={activeSpace.href} className="btn btn--primary">
                <span>{activeSpace.cta}</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/enquiry" className="btn btn--secondary">
                Request Project BOQ Quote
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 6 Macro Drivers Grid */}
      <div className="macro-drivers-section">
        <div className="macro-drivers-header">
          <p className="eyebrow">MACRO FORCES SHAPING DEMAND</p>
          <h4 className="macro-drivers-title">Six Structural Drivers Driving Specification-Led Demand</h4>
        </div>

        <div className="macro-drivers-grid">
          {MACRO_DRIVERS.map((driver) => (
            <div key={driver.num} className="macro-driver-card">
              <div className="driver-card-top">
                <span className="driver-icon">{driver.icon}</span>
                <span className="driver-num font-mono">{driver.num}</span>
              </div>
              <h5 className="driver-title">{driver.title}</h5>
              <p className="driver-desc">{driver.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
