'use client';

import { useState } from 'react';
import Link from 'next/link';

const ENVIRONMENTS = [
  {
    id: 'oem',
    tabLabel: '01 · Furniture & OEM Fabrication',
    eyebrow: 'SERIAL PRODUCTION & OEM SUPPLY',
    title: 'Panels for repeatable furniture manufacturing.',
    description:
      'Furniture manufacturers and OEMs depend on predictable sheet calibration, clean CNC machining behaviour and scheduled batch supply across core thicknesses.',
    checklist: [
      'Specify furniture component type (carcass, tabletop, shelving or structural framing)',
      'Share nominal thickness range, sheet dimensions and calibration expectations',
      'Indicate monthly or quarterly call-off schedule and factory unloading format'
    ],
    image: '/assets/industry-furniture-oem.jpg',
    imageAlt:
      'Precision CNC-machined natural oak furniture components and calibrated wood-panel stacks in a modern fabrication studio.',
    caption: 'Application Context // 01 — Serial Furniture & Component Fabrication',
    ctaLabel: 'Discuss OEM Supply',
    ctaHref:
      '/enquiry?category=Manufacturing+%26+recurring+supply&application=Furniture+%26+OEM+Manufacturing'
  },
  {
    id: 'modular',
    tabLabel: '02 · Modular Kitchens & Wardrobes',
    eyebrow: 'MODULAR INTERIOR SYSTEMS',
    title: 'Consistent substrates for kitchen and wardrobe systems.',
    description:
      'Modular furniture makers balance dry-zone wardrobe carcasses with moisture-prone kitchen cabinetry, requiring clear specification alignment by interior zone.',
    checklist: [
      'Identify carcass, shutter, partition or backing element and interior moisture exposure',
      'Select preferred brand (such as Starwoods) and surface laminating or edge workflow',
      'Outline thickness-wise batch quantities and replenishment cadence'
    ],
    image: '/assets/industry-modular-interiors.jpg',
    imageAlt:
      'Contemporary modular kitchen and open wardrobe cabinetry built from natural oak and matte sage-green panels.',
    caption: 'Application Context // 02 — Modular Wardrobe & Kitchen Cabinetry',
    ctaLabel: 'Discuss Modular Requirements',
    ctaHref:
      '/enquiry?category=Manufacturing+%26+recurring+supply&application=Modular+Furniture+%26+Interior+Systems'
  },
  {
    id: 'commercial',
    tabLabel: '03 · Commercial & Institutional Spaces',
    eyebrow: 'PROJECTS, FIT-OUTS & INSTITUTIONS',
    title: 'Specification-led supply for interior fit-outs and public projects.',
    description:
      'Interior contractors, project consultants and institutional buyers work against bills of quantities (BOQs), specification clauses and phased site delivery milestones.',
    checklist: [
      'Share project BOQ line items or architectural specification clauses',
      'Confirm required product data sheets and grade-specific test report scope',
      'Coordinate phased site delivery schedules and regional destination details'
    ],
    image: '/assets/industry-commercial-projects.jpg',
    imageAlt:
      'Executive commercial boardroom and atrium featuring acoustic and decorative natural oak wall panels and custom joinery.',
    caption: 'Application Context // 03 — Commercial Fit-Out & Institutional Joinery',
    ctaLabel: 'Share a Project Requirement',
    ctaHref:
      '/enquiry?category=Project+requirement&application=Projects+%26+Commercial+Interiors'
  },
  {
    id: 'packaging',
    tabLabel: '04 · Industrial Packaging & Crates',
    eyebrow: 'NEOM PACKING PLYWOOD · MR GRADE',
    title: 'Moisture-resistant packaging-grade plywood for cases and crates.',
    description:
      'Packaging manufacturers, case fabricators and industrial dispatch teams source plywood around packing designs, sheet dimensions, thicknesses and repeat shipment schedules.',
    checklist: [
      'Specify intended packaging application (packing case, crate panel, divider or liner)',
      'Share required sheet dimensions, nominal thicknesses and expected handling conditions',
      'Indicate quantity, unit and whether the requirement is one-time or recurring'
    ],
    image: '/assets/packing-plywood-showcase.jpg',
    imageAlt:
      'Stacked packaging-grade plywood sheets with visible layered cross-ply edges in the foreground and an assembled timber and plywood packing case in the background.',
    caption: 'Application Context // 04 — Industrial Packing Cases & Crate Fabrication',
    ctaLabel: 'Discuss Packaging Supply',
    ctaHref: '/enquiry?brand=neom-packing-plywood&category=industrial-packaging'
  }
];

export default function InteractiveApplicationExplorer() {
  const [activeId, setActiveId] = useState('oem');
  const current = ENVIRONMENTS.find((env) => env.id === activeId) || ENVIRONMENTS[0];

  return (
    <div className="application-explorer">
      <div className="explorer-tabs" role="tablist" aria-label="Application environments">
        {ENVIRONMENTS.map((env) => {
          const isSelected = env.id === current.id;
          return (
            <button
              key={env.id}
              type="button"
              role="tab"
              id={`tab-${env.id}`}
              aria-selected={isSelected ? 'true' : 'false'}
              aria-controls={`panel-${env.id}`}
              className="explorer-tab-btn"
              onClick={() => setActiveId(env.id)}
            >
              {env.tabLabel}
            </button>
          );
        })}
      </div>

      <div
        id={`panel-${current.id}`}
        role="tabpanel"
        aria-labelledby={`tab-${current.id}`}
        className="explorer-panel"
      >
        <div>
          <p className="eyebrow">{current.eyebrow}</p>
          <h3 className="section-title" style={{ fontSize: '1.85rem' }}>
            {current.title}
          </h3>
          <p className="lead-text">{current.description}</p>
          <ul className="checklist-items" style={{ marginTop: '1.25rem' }}>
            {current.checklist.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <div className="btn-group" style={{ marginTop: '1.5rem' }}>
            <Link href={current.ctaHref} className="btn btn--primary">
              {current.ctaLabel}
            </Link>
            <Link href="/industries" className="editorial-link">
              <span>All 7 Industry Segments</span>
              <span className="link-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>

        <figure className="architectural-photo-card" style={{ margin: 0 }}>
          <img
            src={current.image}
            alt={current.imageAlt}
            width="1400"
            height="933"
            loading="lazy"
          />
          <figcaption className="architectural-photo-meta">
            <span>{current.caption}</span>
            <span>NEOM Panels · Application Guide</span>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
