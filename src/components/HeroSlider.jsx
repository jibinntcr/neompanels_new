'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Link from 'next/link';

const HERO_SLIDES = [
  {
    id: 'ecosystem',
    index: '01',
    tabLabel: 'Brand Ecosystem',
    tabSub: 'Phase 1 Portfolio',
    eyebrow: 'ENGINEERED WOOD & INTERIOR MATERIALS',
    headline: 'Engineered Excellence, Designed for Spaces.',
    lead: 'NEOM Panels is building an integrated ecosystem of engineered wood, interior materials, and project supply solutions for India and global markets.',
    image: '/assets/hero-architectural-panels.jpg',
    imageAlt:
      'Contemporary architectural wood-paneled gallery displaying calibrated timber panels in natural daylight',
    primaryCta: { label: 'Explore Materials Portfolio', href: '/products' },
    secondaryCta: { label: 'Discuss Your Requirement', href: '/enquiry' },
    specStrip: ['Structural Plywood', 'Solid Engineered Boards', 'Decorative Surfaces']
  },
  {
    id: 'plywood',
    index: '02',
    tabLabel: 'Structural Plywood',
    tabSub: 'Core Substrates',
    eyebrow: 'PRODUCT FAMILY 01 · CALIBRATED SUBSTRATES',
    headline: 'Multi-Layer Strength Built for Enduring Joinery.',
    lead: 'Engineered multi-ply wood substrates formulated through disciplined manufacturing partnerships for structural stability, moisture resilience, and commercial fit-outs.',
    image: '/assets/hero-neom-flagship.jpg',
    imageAlt:
      'Double-height architectural timber studio showcasing stacked calibrated structural plywood panels',
    primaryCta: { label: 'Explore Plywood Range', href: '/products/plywood' },
    secondaryCta: {
      label: 'Request Material Swatches',
      href: '/enquiry?type=Sample+Request&family=Structural+%26+Specialty+Plywood'
    },
    specStrip: ['Premium Plywood', 'Marine Plywood', 'BWR / BWP Grades']
  },
  {
    id: 'engineered-boards',
    index: '03',
    tabLabel: 'Engineered Boards',
    tabSub: 'MDF & HDHMR',
    eyebrow: 'PRODUCT FAMILY 02 · HOMOGENEOUS FIBRE CORES',
    headline: 'Precision Fibre Cores for Modular Architecture.',
    lead: 'High-density MDF, moisture-resistant HDHMR, and factory-pressed Pre-Laminated MDF crafted for clean CNC routing, crisp edge profiling, and contemporary cabinetry.',
    image: '/assets/industry-modular-interiors.jpg',
    imageAlt:
      'Modern sage-green and natural oak modular kitchen and custom wardrobe interior opening to courtyard',
    primaryCta: { label: 'Explore Engineered Boards', href: '/products/engineered-boards' },
    secondaryCta: {
      label: 'Enquire on Boards',
      href: '/enquiry?family=Engineered+Boards'
    },
    specStrip: ['Medium-Density Fiberboard (MDF)', 'HDHMR Moisture-Resistant', 'Pre-Laminated MDF']
  },
  {
    id: 'decorative-surfaces',
    index: '04',
    tabLabel: 'Decorative Surfaces',
    tabSub: 'Veneers & Finishes',
    eyebrow: 'PRODUCT FAMILY 03 · ARCHITECTURAL FINISHES',
    headline: 'Tactile Veneers, Laminates & Sculpted Cladding.',
    lead: 'Curated natural and smoked timber veneers, high-pressure laminates, mirror and matte acrylics, and linear fluted charcoal panels bringing depth to modern spaces.',
    image: '/assets/industry-commercial-projects.jpg',
    imageAlt:
      'Double-height executive boardroom featuring fluted oak architectural wall paneling and acoustic timber baffles',
    primaryCta: { label: 'Explore Decorative Surfaces', href: '/products/decorative-surfaces' },
    secondaryCta: {
      label: 'Request Swatch Folder',
      href: '/enquiry?type=Sample+Request&family=Decorative+Surfaces'
    },
    specStrip: ['Architectural Veneers', 'High-Pressure Laminates', 'Acrylic & Charcoal Panels']
  },
  {
    id: 'gcc-horizon',
    index: '05',
    tabLabel: 'India & GCC Horizon',
    tabSub: 'Growth Corridor',
    eyebrow: 'STRATEGIC HORIZON · DOMESTIC & EXPORT READINESS',
    headline: 'Rooted in India. Looking Towards the GCC.',
    lead: 'Anchored in India’s expanding residential, modular furniture, and commercial interior sectors, with phased partner pathways into six strategic GCC markets.',
    image: '/assets/gcc-dubai.jpg',
    imageAlt:
      'Architectural waterfront timber pavilion overlooking the contemporary Dubai commercial skyline at dusk',
    primaryCta: { label: 'Explore Growth Vision', href: '/growth-vision' },
    secondaryCta: { label: 'Partner With NEOM', href: '/partners' },
    specStrip: ['India Domestic Anchor', 'UAE & Saudi Arabia', 'Qatar · Oman · Bahrain · Kuwait']
  }
];

const SLIDE_DURATION_MS = 6500;

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const touchStartXRef = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const goToSlide = useCallback((idx) => {
    const total = HERO_SLIDES.length;
    setActiveIndex(((idx % total) + total) % total);
  }, []);

  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused || prefersReducedMotion) return undefined;
    const timer = setInterval(nextSlide, SLIDE_DURATION_MS);
    return () => clearInterval(timer);
  }, [activeIndex, isPaused, prefersReducedMotion, nextSlide]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextSlide();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevSlide();
    }
  };

  const handleTouchStart = (e) => {
    if (e.touches && e.touches.length > 0) {
      touchStartXRef.current = e.touches[0].clientX;
    }
  };

  const handleTouchEnd = (e) => {
    if (touchStartXRef.current === null) return;
    const endX = e.changedTouches[0].clientX;
    const deltaX = endX - touchStartXRef.current;
    touchStartXRef.current = null;
    if (Math.abs(deltaX) > 48) {
      if (deltaX < 0) nextSlide();
      else prevSlide();
    }
  };

  const activeSlide = HERO_SLIDES[activeIndex];

  return (
    <section
      className="hero-slider"
      aria-roledescription="carousel"
      aria-label="NEOM Panels Architectural Showcase"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Full-Bleed Background Visual Stage */}
      <div className="hero-slider__media-stage" aria-hidden="true">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={slide.id}
              className={`hero-slider__bg-layer ${isActive ? 'is-active' : ''}`}
            >
              <img
                src={slide.image}
                alt={slide.imageAlt}
                width="1600"
                height="960"
                loading={idx === 0 ? 'eager' : 'lazy'}
                fetchPriority={idx === 0 ? 'high' : 'auto'}
                decoding="async"
                className="hero-slider__bg-img"
              />
            </div>
          );
        })}
        {/* Architectural Dark Forest & Warm Timber Editorial Scrim */}
        <div className="hero-slider__scrim" />
        <div className="hero-slider__diagonal-accent" />
      </div>

      {/* Foreground Editorial Content */}
      <div className="container hero-slider__container">
        <div className="hero-slider__top-meta">
          <div className="hero-slider__counter font-mono" aria-live="polite">
            <span className="hero-slider__counter-current">{activeSlide.index}</span>
            <span className="hero-slider__counter-sep">/</span>
            <span className="hero-slider__counter-total">0{HERO_SLIDES.length}</span>
          </div>

          <div className="hero-slider__controls-group">
            <button
              type="button"
              className="hero-slider__icon-btn"
              onClick={() => setIsPaused((prev) => !prev)}
              aria-label={isPaused ? 'Resume slide rotation' : 'Pause slide rotation'}
              title={isPaused ? 'Resume' : 'Pause'}
            >
              {isPaused ? (
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M4 2.5v11l9-5.5-9-5.5z" />
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
                  <path d="M4.5 2.5h2.5v11H4.5v-11zm4.5 0h2.5v11H9v-11z" />
                </svg>
              )}
            </button>
            <button
              type="button"
              className="hero-slider__icon-btn"
              onClick={prevSlide}
              aria-label="Previous slide"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 3.5L5.5 8L10 12.5" />
              </svg>
            </button>
            <button
              type="button"
              className="hero-slider__icon-btn"
              onClick={nextSlide}
              aria-label="Next slide"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 3.5L10.5 8L6 12.5" />
              </svg>
            </button>
          </div>
        </div>

        {/* Active Slide Editorial Copy */}
        <div className="hero-slider__body" key={activeSlide.id}>
          <div className="hero-slider__eyebrow-pill font-mono">
            <span className="hero-slider__eyebrow-dot" aria-hidden="true" />
            <span>{activeSlide.eyebrow}</span>
          </div>

          <h1 id="main-heading" tabIndex={-1} className="hero-slider__headline">
            {activeSlide.headline}
          </h1>

          <p className="hero-slider__lead">{activeSlide.lead}</p>

          <div className="hero-slider__actions">
            <Link href={activeSlide.primaryCta.href} className="btn btn-gold btn-lg">
              <span>{activeSlide.primaryCta.label}</span>
              <svg className="btn-icon-arrow" aria-hidden="true" viewBox="0 0 16 16" width="15" height="15">
                <path
                  fill="currentColor"
                  d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06l2.97-2.97H2.75a.75.75 0 0 1 0-1.5h8.44L8.22 4.03a.75.75 0 0 1 0-1.06Z"
                />
              </svg>
            </Link>
            <Link href={activeSlide.secondaryCta.href} className="btn btn-outline-light btn-lg">
              <span>{activeSlide.secondaryCta.label}</span>
            </Link>
          </div>

          <ul className="hero-slider__spec-strip font-mono" role="list">
            {activeSlide.specStrip.map((item, idx) => (
              <li key={item} className="hero-slider__spec-item">
                {idx > 0 && (
                  <span className="hero-slider__spec-sep" aria-hidden="true">
                    /
                  </span>
                )}
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom Architectural Category Dock with Animated Progress Bars */}
        <div className="hero-slider__dock" role="tablist" aria-label="Showcase Categories">
          {HERO_SLIDES.map((slide, idx) => {
            const isActive = idx === activeIndex;
            return (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`hero-slider__tab ${isActive ? 'is-active' : ''}`}
                onClick={() => goToSlide(idx)}
              >
                <span className="hero-slider__tab-progress-track" aria-hidden="true">
                  <span
                    className={`hero-slider__tab-progress-fill ${
                      isActive && !isPaused && !prefersReducedMotion ? 'is-animating' : ''
                    } ${isActive && (isPaused || prefersReducedMotion) ? 'is-full' : ''}`}
                    style={{ animationDuration: `${SLIDE_DURATION_MS}ms` }}
                  />
                </span>
                <span className="hero-slider__tab-meta font-mono">{slide.index}</span>
                <span className="hero-slider__tab-title">{slide.tabLabel}</span>
                <span className="hero-slider__tab-sub">{slide.tabSub}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
