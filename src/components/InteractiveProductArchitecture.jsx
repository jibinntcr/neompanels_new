'use client';

import { useState } from 'react';
import Link from 'next/link';

export const PORTFOLIO_DATA = {
  plywood: {
    id: 'plywood',
    category: 'Category 01 · Structural Core',
    title: 'Structural & Specialty Plywood',
    subtitle: 'Precision-calibrated hardwood cores built for extreme mechanical loads, zero core voids, and CNC routing precision.',
    image: '/assets/product-structural-plywood.jpg',
    leadSpec: 'IS:710 & IS:303 Compliant · ±0.2mm Quad-Press Calibrated',
    items: [
      {
        name: 'NEOM Calibrated Premium Plywood',
        tag: 'Flagship OEM Core',
        standard: 'IS:303 / MR & BWR',
        thicknesses: '6mm, 9mm, 12mm, 16mm, 18mm, 25mm',
        density: '720 – 760 kg/m³',
        bonding: 'Fortified Melamine Urea Formaldehyde / Phenolic',
        applications: 'Modular kitchen carcasses, wardrobe boxes, beds, office workstations',
        highlights: [
          'Quad-press 4-stage thickness calibration (tolerance ±0.2mm)',
          '100% selected plantation hardwood veneers with zero core gap',
          'Satin-smooth dual-grit sanded face for flawless laminate adhesion'
        ]
      },
      {
        name: 'NEOM Marine Grade Plywood (IS:710)',
        tag: '72-Hour Boiling Water Proof',
        standard: 'IS:710 Certified',
        thicknesses: '6mm, 9mm, 12mm, 16mm, 18mm, 19mm, 25mm',
        density: '780 – 820 kg/m³',
        bonding: '100% Undiluted Phenol Formaldehyde (BWP) Resin',
        applications: 'Wet-area cabinetry, bathroom vanities, external architectural soffits, high-moisture commercial kitchens',
        highlights: [
          'Withstands 72+ hours of boiling water without delamination',
          'Vacuum pressure impregnated with organic biocide against borers & termites',
          'High tensile cross-laminated plies for immense screw-holding torque'
        ]
      },
      {
        name: 'NEOM BWR / BWP Structural Plywood',
        tag: 'Weather & Moisture Resistant',
        standard: 'IS:303 BWR / IS:710',
        thicknesses: '9mm, 12mm, 16mm, 18mm',
        density: '730 – 770 kg/m³',
        bonding: 'Synthetic Phenolic Resin Adhesive',
        applications: 'Residential cabinetry, partition walls, commercial ceiling framing, hospitality fit-outs',
        highlights: [
          'Boiling water resistant for 8+ hours cyclical immersion',
          'Even core layer distribution preventing warping over long spans',
          'Clean edge profiling with zero chip-out on high-speed CNC cutters'
        ]
      }
    ]
  },
  engineered: {
    id: 'engineered',
    category: 'Category 02 · Solid Composite Substrates',
    title: 'Engineered Boards (MDF & HDHMR)',
    subtitle: 'Ultra-homogeneous wood fiber matrices with high density, superior edge machinability, and moisture resilience.',
    image: '/assets/product-engineered-boards.jpg',
    leadSpec: 'High Density > 850 kg/m³ · E0 / CARB P2 Low Emissions',
    items: [
      {
        name: 'NEOM HDHMR (High Density High Moisture Resistance)',
        tag: 'Signature Green Core',
        standard: 'IS:14587 / High Density',
        thicknesses: '3mm, 5.5mm, 8mm, 12mm, 16.75mm, 18mm, 25mm',
        density: '850 – 900 kg/m³',
        bonding: 'Hydrophobic Polymeric Resin Matrix',
        applications: 'Kitchen shutters, bathroom panelling, laser-cut decorative jalis, routed door skins',
        highlights: [
          'Specially engineered green core with exceptional water repellence',
          'Zero fiber swell after 24h water soak test (< 4.5% thickness swelling)',
          'Flawless router cut edges that accept PU paint directly without putty filling'
        ]
      },
      {
        name: 'NEOM High-Density MDF',
        tag: 'Precision Architectural Substrate',
        standard: 'IS:12406 / E1 & E0 Available',
        thicknesses: '2.5mm, 5.5mm, 8mm, 11mm, 15mm, 18mm, 25mm',
        density: '780 – 820 kg/m³',
        bonding: 'Low-Emission E0 / E1 Certified Binder',
        applications: 'Architectural wall panelling, bespoke cabinetry, CNC grooving, acoustic louvers',
        highlights: [
          'Ultra-fine hardwood fiber structure with glass-smooth surface',
          'Uniform density throughout the entire core depth',
          'Optimal substrate for high-gloss acrylic and ultra-thin paper foil pressing'
        ]
      },
      {
        name: 'NEOM Pre-Laminated MDF Boards',
        tag: 'Ready-to-Assemble Decors',
        standard: 'Synchronized & Textured Melamine',
        thicknesses: '9mm, 12mm, 16.75mm, 18mm, 25mm',
        density: '800 – 850 kg/m³',
        bonding: 'Thermal Fused Melamine (TFM) Overlay',
        applications: 'Modular office desking, retail display systems, hotel wardrobe interiors, fast-track fitouts',
        highlights: [
          'Pre-finished on one or both faces with scratch-resistant melamine papers',
          'Curated decors: Warm Natural Oak, Smoked Walnut, Concrete Grey, Alabaster',
          'Eliminates on-site laminate pressing labor and dramatically cuts project lead times'
        ]
      }
    ]
  },
  decorative: {
    id: 'decorative',
    category: 'Category 03 · Architectural Finishes',
    title: 'Decorative Surfaces & Architectural Panels',
    subtitle: 'From natural fluted veneers to mirror-finish acrylics and acoustic charcoal panels, designed for interior impact.',
    image: '/assets/product-decorative-surfaces.jpg',
    leadSpec: 'Natural Woodgrain Textures · Anti-Fingerprint · 6H Scratch Resistance',
    items: [
      {
        name: 'NEOM Architectural Natural & Smoked Veneers',
        tag: 'Artisan Wood Craft',
        standard: 'European Slicing & Smoked Oak Tech',
        thicknesses: '3.5mm – 4mm backing (Veneer face: 0.55mm – 1.2mm)',
        density: 'Natural Specie Dependent (FSC Certified)',
        bonding: 'Formaldehyde-Free Cold Press Adhesive',
        applications: 'Luxury boardroom feature walls, presidential suites, bespoke dining credenzas, custom entry portals',
        highlights: [
          'Quarter-cut, crown-cut, and book-matched oak, American walnut, and teak',
          'Deep reactive fume/smoke treatment for rich through-body color patina',
          'Fleece-backed and calibrated for seamless curved joinery work'
        ]
      },
      {
        name: 'NEOM High-Pressure Architectural Laminates (HPL)',
        tag: 'Tactile Matte & Suede',
        standard: 'EN 438 / IS:2046',
        thicknesses: '0.8mm, 1.0mm, 1.2mm',
        density: '1,400 kg/m³',
        bonding: 'Thermosetting Phenolic Core + Melamine Face',
        applications: 'Commercial table tops, hospital corridors, kitchen fronts, high-traffic retail counters',
        highlights: [
          'Advanced thermal nanotechnology for micro-scratch self-healing',
          'Anti-fingerprint ultra-matte surface with soft-touch haptic feel',
          'High resistance to impact, household chemicals, and UV fading'
        ]
      },
      {
        name: 'NEOM 6H Ultra-Gloss Acrylic Panels',
        tag: 'Glass-Reflective Finish',
        standard: '6H Pencil Hardness UV Coated',
        thicknesses: '18mm on Calibrated MDF/HDHMR Core',
        density: 'Acrylic Sheet (1.5mm) on 820 kg/m³ Core',
        bonding: 'PUR Hot-Melt Adhesive System',
        applications: 'High-end modular kitchen shutters, luxury vanity doors, designer bar counters',
        highlights: [
          '99% optical mirror reflectivity with zero orange peel distortion',
          'Proprietary UV cured top-coat providing 6H scratch resistance',
          'Zero color change over 10+ years with complete color fastness'
        ]
      },
      {
        name: 'NEOM Charcoal & Fluted 3D Wall Panels',
        tag: 'Architectural Louvers',
        standard: 'Acoustic & Moisture-Proof Polymer Matrix',
        thicknesses: '12mm – 25mm profile depth',
        density: 'Lightweight Engineered Polymeric Composite',
        bonding: 'Direct Interlocking Tongue & Groove',
        applications: 'TV backdrops, reception lobby walls, acoustic ceiling baffles, restaurant booths',
        highlights: [
          '3D fluted relief ribs that soften acoustics and create dramatic light-and-shadow play',
          '100% waterproof and borer-proof formulation for humid coastal climates',
          'Fast clip-lock installation directly over masonry or plywood substrates'
        ]
      }
    ]
  }
};

export default function InteractiveProductArchitecture() {
  const [activeTab, setActiveTab] = useState('plywood');
  const [activeProductIdx, setActiveProductIdx] = useState(0);

  const currentCategory = PORTFOLIO_DATA[activeTab];
  const activeProduct = currentCategory.items[activeProductIdx] || currentCategory.items[0];

  return (
    <div className="product-architecture-wrapper">
      {/* Category Navigation Pills */}
      <div className="portfolio-tabs-bar" role="tablist" aria-label="Product Portfolio Categories">
        {Object.values(PORTFOLIO_DATA).map((cat) => {
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              className={`portfolio-tab-btn ${isActive ? 'portfolio-tab-btn--active' : ''}`}
              onClick={() => {
                setActiveTab(cat.id);
                setActiveProductIdx(0);
              }}
            >
              <span className="portfolio-tab-cat">{cat.category.split(' · ')[1]}</span>
              <span className="portfolio-tab-title">{cat.title}</span>
            </button>
          );
        })}
      </div>

      {/* Main Interactive Showcase Grid */}
      <div className="portfolio-stage-card">
        <div className="portfolio-stage-split">
          {/* Left Column: Visual & Lead Spec */}
          <div className="portfolio-stage-visual-col">
            <div className="portfolio-visual-frame">
              <img
                src={currentCategory.image}
                alt={currentCategory.title}
                className="portfolio-stage-img"
                width="800"
                height="500"
                loading="lazy"
              />
              <div className="portfolio-visual-overlay">
                <span className="portfolio-spec-badge">{currentCategory.leadSpec}</span>
              </div>
            </div>

            <div className="portfolio-stage-intro">
              <h3 className="portfolio-stage-headline">{currentCategory.title}</h3>
              <p className="portfolio-stage-desc">{currentCategory.subtitle}</p>
            </div>

            <div className="portfolio-visual-action-bar">
              <Link
                href={`/enquiry?category=product-spec&product=${encodeURIComponent(activeProduct.name)}`}
                className="btn btn--primary"
              >
                <span>Request Quotation &amp; Specs</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link
                href={`/enquiry?category=sample-request&product=${encodeURIComponent(activeProduct.name)}`}
                className="btn btn--secondary"
              >
                Order Material Sample
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Product Specification Matrix */}
          <div className="portfolio-stage-specs-col">
            <div className="portfolio-items-selector" role="tablist" aria-label="Specific products">
              {currentCategory.items.map((item, idx) => {
                const isSelected = activeProductIdx === idx;
                return (
                  <button
                    key={item.name}
                    role="tab"
                    aria-selected={isSelected}
                    className={`portfolio-item-chip ${isSelected ? 'portfolio-item-chip--active' : ''}`}
                    onClick={() => setActiveProductIdx(idx)}
                  >
                    <span className="chip-name">{item.name}</span>
                    <span className="chip-tag">{item.tag}</span>
                  </button>
                );
              })}
            </div>

            {/* Active Product Detailed Technical Sheet */}
            <div className="portfolio-active-spec-card">
              <div className="spec-card-header">
                <div>
                  <span className="spec-card-kicker">{activeProduct.tag}</span>
                  <h4 className="spec-card-title">{activeProduct.name}</h4>
                </div>
                <span className="spec-standard-pill">{activeProduct.standard}</span>
              </div>

              {/* Technical Specifications Grid */}
              <div className="spec-metrics-grid">
                <div className="spec-metric-cell">
                  <span className="metric-label">AVAILABLE THICKNESSES</span>
                  <span className="metric-value font-mono">{activeProduct.thicknesses}</span>
                </div>
                <div className="spec-metric-cell">
                  <span className="metric-label">DENSITY RANGE</span>
                  <span className="metric-value font-mono">{activeProduct.density}</span>
                </div>
                <div className="spec-metric-cell">
                  <span className="metric-label">RESIN &amp; BOND SYSTEM</span>
                  <span className="metric-value">{activeProduct.bonding}</span>
                </div>
                <div className="spec-metric-cell">
                  <span className="metric-label">COMMON APPLICATIONS</span>
                  <span className="metric-value">{activeProduct.applications}</span>
                </div>
              </div>

              {/* Engineering Highlights */}
              <div className="spec-highlights-block">
                <span className="highlights-title">ENGINEERING &amp; FABRICATION HIGHLIGHTS</span>
                <ul className="highlights-list">
                  {activeProduct.highlights.map((point, i) => (
                    <li key={i}>
                      <span className="highlight-check" aria-hidden="true">✓</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="spec-card-footer">
                <span className="spec-b2b-note">
                  Direct OEM factory supply · Custom dimensions &amp; recurring batches available
                </span>
                <Link
                  href={`/enquiry?brand=NEOM&product=${encodeURIComponent(activeProduct.name)}`}
                  className="editorial-link"
                >
                  <span>Spec this for your project</span>
                  <span className="link-arrow" aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
