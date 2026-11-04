'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const HERO_SLIDES = [
  {
    id: 'architectural-substrates',
    tabLabel: 'Calibrated Panel Substrates',
    badge: 'NEOM PANELS · ENGINEERED SUBSTRATES',
    badgeTone: 'forest',
    title: 'Precision-calibrated wood panels built for dimensional stability',
    subtitle:
      'Multi-ply hardwood cores, controlled hot-press bonding and uniform thickness calibration for demanding furniture and interior applications.',
    image: '/assets/hero-neom-flagship.jpg',
    imageAlt:
      'Precision-calibrated multi-ply hardwood panels and vernier calliper on an oak display table in an architectural studio.',
    caption: 'Panel Inspection',
    specs: [
      { label: 'Core Construction', value: 'Multi-Ply Cross-Laminated Veneer' },
      { label: 'Key Checkpoints', value: 'Thickness · Flatness · Squareness' }
    ],
    ctaLabel: 'Explore Manufacturing Process',
    ctaHref: '/manufacturing',
    quoteHref: '/enquiry?category=manufacturing'
  },
  {
    id: 'interior-architecture',
    tabLabel: 'Furniture & Interior Projects',
    badge: 'NEOM PANELS · ARCHITECTURAL & OEM SUPPLY',
    badgeTone: 'forest',
    title: 'Engineered panels for serial furniture lines and commercial fit-outs',
    subtitle:
      'Consistent machining behaviour, screw-holding strength and surface flatness for modular kitchens, wardrobes, corporate workspaces and hospitality joinery.',
    image: '/assets/industry-commercial-projects.jpg',
    imageAlt:
      'Contemporary commercial boardroom featuring slatted oak wall panelling and custom architectural joinery.',
    caption: 'Furniture and Interior Applications',
    specs: [
      { label: 'Primary Sectors', value: 'Furniture OEMs · Modular Systems · Fit-Outs' },
      { label: 'Supply Format', value: 'Project BOQ Phasing & Repeat Schedules' }
    ],
    ctaLabel: 'Explore Industry Applications',
    ctaHref: '/industries',
    quoteHref: '/enquiry?category=project-requirement'
  },
  {
    id: 'industrial-packaging-grade',
    tabLabel: 'Industrial Crating & Packaging',
    badge: 'NEOM PANELS · INDUSTRIAL PACKAGING SOLUTIONS',
    badgeTone: 'oak',
    title: 'Moisture-resistant plywood for heavy-duty packing cases and crates',
    subtitle:
      'Dependable MR packaging-grade multi-ply sheets engineered for export machinery boxes, protective enclosures, pallet decks and internal dividers.',
    image: '/assets/packing-plywood-crates.jpg',
    imageAlt:
      'Industrial packing-case fabrication workbench showing slotted plywood crate dividers and stacked multi-ply panels.',
    caption: 'Packing Cases and Crates',
    specs: [
      { label: 'Material Grade', value: 'Moisture Resistant (MR) Packaging Grade' },
      { label: 'Procurement Options', value: 'Batch Orders & Scheduled Repeat Supply' }
    ],
    ctaLabel: 'View Packaging Specifications',
    ctaHref: '/brands/neom-packing-plywood',
    quoteHref: '/enquiry?category=industrial-packaging'
  }
];

export default function HeroInteractiveShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5200);

    return () => clearInterval(timer);
  }, [paused]);

  const activeSlide = HERO_SLIDES[activeIndex];

  return (
    <div
      className="hero-showcase-card hero-animate--delay"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Top Interactive Slide Switcher Tabs */}
      <div
        className="hero-showcase-tabs"
        role="tablist"
        aria-label="NEOM Panels capabilities showcase"
      >
        {HERO_SLIDES.map((slide, idx) => {
          const isSelected = idx === activeIndex;
          return (
            <button
              key={slide.id}
              type="button"
              role="tab"
              aria-selected={isSelected ? 'true' : 'false'}
              aria-controls={`hero-slide-panel-${slide.id}`}
              id={`hero-slide-tab-${slide.id}`}
              className={`hero-showcase-tab ${isSelected ? 'is-active' : ''}`}
              onClick={() => setActiveIndex(idx)}
            >
              <span className="hero-showcase-tab-num">0{idx + 1}</span>
              <span className="hero-showcase-tab-label">{slide.tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Main Visual Stage */}
      <div
        id={`hero-slide-panel-${activeSlide.id}`}
        role="tabpanel"
        aria-labelledby={`hero-slide-tab-${activeSlide.id}`}
        className="hero-showcase-stage"
      >
        <div className="hero-showcase-image-wrap">
          <img
            key={activeSlide.image}
            src={activeSlide.image}
            alt={activeSlide.imageAlt}
            className="hero-showcase-img"
            width="1400"
            height="900"
          />
          <div className="hero-showcase-overlay-top">
            <span
              className={`hero-showcase-pill ${
                activeSlide.badgeTone === 'oak' ? 'hero-showcase-pill--oak' : ''
              }`}
            >
              {activeSlide.badge}
            </span>
            <span className="hero-showcase-caption-tag">{activeSlide.caption}</span>
          </div>
        </div>

        {/* Bottom Dynamic Info & Spec Dock */}
        <div className="hero-showcase-dock">
          <div className="hero-showcase-dock-header">
            <div>
              <h2 className="hero-showcase-title">{activeSlide.title}</h2>
              <p className="hero-showcase-subtitle">{activeSlide.subtitle}</p>
            </div>
          </div>

          <div className="hero-showcase-specs">
            {activeSlide.specs.map((spec) => (
              <div key={spec.label} className="hero-showcase-spec-cell">
                <span className="hero-showcase-spec-label">{spec.label}</span>
                <span className="hero-showcase-spec-val">{spec.value}</span>
              </div>
            ))}
          </div>

          <div className="hero-showcase-actions">
            <Link href={activeSlide.ctaHref} className="editorial-link">
              <span>{activeSlide.ctaLabel}</span>
              <span className="link-arrow" aria-hidden="true">
                →
              </span>
            </Link>
            <Link href={activeSlide.quoteHref} className="hero-showcase-quote-link">
              Discuss Specification →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
