'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const HERO_SLIDES = [
  {
    id: 'starwoods-interiors',
    tabLabel: 'Starwoods · Furniture & Interiors',
    badge: 'STARWOODS · FURNITURE & INTERIORS',
    badgeTone: 'forest',
    title: 'Calibrated wood panels for furniture OEMs and interior fit-outs',
    subtitle:
      'Consistent core construction, thickness calibration and surface flatness for modular kitchens, wardrobes, office systems and commercial joinery.',
    image: '/assets/hero-neom-flagship.jpg',
    imageAlt:
      'Precision-calibrated multi-ply hardwood panels and warm oak architectural joinery in a sunlit studio.',
    caption: 'Furniture and Interior Applications',
    logo: '/assets/starwood-logo.png',
    logoAlt: 'Starwoods — The Plywood Specialist',
    logoClass: 'starwood-logo-img--xs',
    specs: [
      { label: 'Core Applications', value: 'OEM Furniture · Modular Systems · Fit-Outs' },
      { label: 'Supply Format', value: 'Project BOQ Batches & Recurring Schedules' }
    ],
    ctaLabel: 'Explore Starwoods',
    ctaHref: '/brands#starwoods',
    quoteHref: '/enquiry?brand=starwoods&category=manufacturing'
  },
  {
    id: 'packing-plywood',
    tabLabel: 'NEOM Packing Plywood · MR Grade',
    badge: 'NEOM PACKING PLYWOOD · INDUSTRIAL PACKAGING',
    badgeTone: 'oak',
    title: 'Moisture-resistant plywood for packing cases, crates and enclosures',
    subtitle:
      'MR packaging-grade multi-ply sheets built for export cases, machinery crating, internal dividers and scheduled industrial packaging supply.',
    image: '/assets/packing-plywood-showcase.jpg',
    imageAlt:
      'Stacked moisture-resistant packaging-grade plywood sheets and assembled industrial packing crates.',
    caption: 'Packaging-Grade Plywood',
    logo: '/assets/neom-packing-plywood-logo-compact.svg',
    logoAlt: 'NEOM Packing Plywood',
    logoClass: 'packing-logo-img--xs',
    specs: [
      { label: 'Grade & Core', value: 'Moisture Resistant (MR) · Multi-Ply Veneer' },
      { label: 'Applications', value: 'Packing Cases · Crates · Dividers & Liners' }
    ],
    ctaLabel: 'Explore Packing Plywood',
    ctaHref: '/brands/neom-packing-plywood',
    quoteHref: '/enquiry?brand=neom-packing-plywood&category=industrial-packaging'
  },
  {
    id: 'factory-manufacturing',
    tabLabel: 'Manufacturing & Quality Checks',
    badge: 'IN-HOUSE MANUFACTURING · INDIA',
    badgeTone: 'forest',
    title: 'Controlled pressing, calibration and pre-dispatch inspection',
    subtitle:
      'Every production batch follows structured veneer grading, hot-press bonding, thickness verification and moisture-protected palletised dispatch.',
    image: '/assets/industry-furniture-oem.jpg',
    imageAlt:
      'Calibrated wood-panel stacks and precision-machined timber components prepared for B2B dispatch.',
    caption: 'Panel Inspection',
    logo: null,
    logoAlt: '',
    logoClass: '',
    specs: [
      { label: 'Quality Checkpoints', value: 'Thickness · Squareness · Core Bonding' },
      { label: 'Dispatch Coverage', value: 'Direct Factory Supply Across India' }
    ],
    ctaLabel: 'View Manufacturing Process',
    ctaHref: '/manufacturing',
    quoteHref: '/enquiry?category=manufacturing'
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
    }, 5400);

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
      <div className="hero-showcase-tabs" role="tablist" aria-label="Product and manufacturing showcase">
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
            {activeSlide.logo ? (
              <div className="hero-showcase-logo-box">
                <img
                  src={activeSlide.logo}
                  alt={activeSlide.logoAlt}
                  className={activeSlide.logoClass}
                  width="540"
                  height="140"
                />
              </div>
            ) : null}
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
              Request Quote / Specs →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
