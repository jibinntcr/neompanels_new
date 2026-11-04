'use client';

import { useState } from 'react';
import Link from 'next/link';

const ENVIRONMENTS = [
  {
    id: 'oem',
    tabLabel: 'Furniture & OEM Fabrication',
    eyebrow: 'Furniture Manufacturing',
    title: 'Panels for repeatable furniture production.',
    description:
      'Furniture manufacturers and OEMs rely on consistent sheet thickness, clean machining behaviour and scheduled batch supply across core thicknesses.',
    checklist: [
      'Furniture component type (carcass, tabletop, shelving or framing)',
      'Required nominal thickness in mm and sheet dimensions',
      'One-time batch or recurring monthly/quarterly schedule'
    ],
    image: '/assets/industry-furniture-oem.jpg',
    imageAlt:
      'CNC-machined natural oak furniture components and calibrated wood-panel stacks in a fabrication studio.',
    caption: 'Furniture and Interior Applications',
    ctaLabel: 'Discuss Manufacturing Supply',
    ctaHref:
      '/enquiry?brand=Starwoods&category=manufacturing&application=Furniture+%26+OEM+Manufacturing'
  },
  {
    id: 'modular',
    tabLabel: 'Modular Kitchens & Wardrobes',
    eyebrow: 'Modular Interior Systems',
    title: 'Substrates for kitchen and wardrobe systems.',
    description:
      'Modular furniture makers balance dry-zone wardrobe carcasses with moisture-prone kitchen cabinetry, aligning panel selection with each interior zone.',
    checklist: [
      'Carcass, shutter, partition or backing component and interior zone',
      'Starwoods panel preference and surface laminating or edge workflow',
      'Thickness-wise quantities and replenishment schedule'
    ],
    image: '/assets/industry-modular-interiors.jpg',
    imageAlt:
      'Contemporary modular kitchen and open wardrobe cabinetry built from natural oak and matte sage-green panels.',
    caption: 'Furniture and Interior Applications',
    ctaLabel: 'Discuss Modular Requirements',
    ctaHref:
      '/enquiry?brand=Starwoods&category=manufacturing&application=Modular+Furniture+%26+Interior+Systems'
  },
  {
    id: 'commercial',
    tabLabel: 'Commercial & Institutional Projects',
    eyebrow: 'Projects & Fit-Outs',
    title: 'Specification-led supply for interior fit-outs and public projects.',
    description:
      'Interior contractors, project consultants and institutional buyers source panels against bills of quantities (BOQs), specification clauses and phased site deliveries.',
    checklist: [
      'Project BOQ line items or architectural specification clauses',
      'Required technical specification documents',
      'Phased site delivery schedule and destination'
    ],
    image: '/assets/industry-commercial-projects.jpg',
    imageAlt:
      'Commercial boardroom interior featuring natural oak wall panels and custom joinery.',
    caption: 'Furniture and Interior Applications',
    ctaLabel: 'Share a Project Requirement',
    ctaHref:
      '/enquiry?category=project-requirement&application=Projects+%26+Commercial+Interiors'
  },
  {
    id: 'packaging',
    tabLabel: 'Industrial Packaging & Crates',
    eyebrow: 'NEOM Packing Plywood',
    title: 'Moisture-resistant plywood for packing cases and crates.',
    description:
      'Packaging manufacturers, case fabricators and industrial dispatch teams source MR packaging-grade plywood around crate designs, sheet dimensions and repeat shipment schedules.',
    checklist: [
      'Packaging application (packing cases, crates, dividers or liners)',
      'Required thickness in mm, sheet dimensions and handling conditions',
      'Quantity, unit and one-time or recurring purchase schedule'
    ],
    image: '/assets/packing-plywood-showcase.jpg',
    imageAlt:
      'Stacked packaging-grade plywood sheets with visible cross-ply edges beside an assembled timber and plywood packing case.',
    caption: 'Packing Cases and Crates',
    ctaLabel: 'Request a Packaging Quote',
    ctaHref: '/enquiry?brand=neom-packing-plywood&category=industrial-packaging'
  }
];

export default function InteractiveApplicationExplorer() {
  const [activeId, setActiveId] = useState('oem');
  const current = ENVIRONMENTS.find((env) => env.id === activeId) || ENVIRONMENTS[0];

  return (
    <div className="application-explorer">
      <div className="explorer-tabs" role="tablist" aria-label="Application categories">
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
          <h3 className="section-title" style={{ fontSize: '1.75rem' }}>
            {current.title}
          </h3>
          <p className="lead-text">{current.description}</p>
          <ul className="checklist-items" style={{ marginTop: '1.125rem' }}>
            {current.checklist.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
          <div className="btn-group" style={{ marginTop: '1.5rem' }}>
            <Link href={current.ctaHref} className="btn btn--primary">
              {current.ctaLabel}
            </Link>
            <Link href="/industries" className="editorial-link">
              <span>View All Industry Applications</span>
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
          </figcaption>
        </figure>
      </div>
    </div>
  );
}
