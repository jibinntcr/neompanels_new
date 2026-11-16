'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

const HERO_SLIDES = [
  {
    id: 'neom-panels',
    indexLabel: '01',
    tabTitle: 'NEOM Panels',
    tabSubtitle: 'Company Overview',
    eyebrow: 'NEOM PANELS',
    title: 'A dependable name behind the materials.',
    lead: 'NEOM Panels brings together manufacturing capability, focused product brands and accountable customer relationships. Through Starwoods and NEOM Packing Plywood, we help businesses choose and source panel materials with greater clarity and confidence.',
    image: '/assets/hero-neom-flagship.jpg',
    imageAlt:
      'Multi-ply wood-panel stacks arranged in an architectural materials studio',
    brandLogo: null,
    primaryCta: {
      label: 'Explore Our Brands',
      href: '/brands'
    },
    secondaryCta: {
      label: 'About NEOM',
      href: '/about'
    }
  },
  {
    id: 'starwoods',
    indexLabel: '02',
    tabTitle: 'Starwoods',
    tabSubtitle: 'Plywood & Engineered Boards',
    eyebrow: 'ACTIVE BRAND · STARWOODS',
    title: 'Plywood and engineered boards for furniture and interiors.',
    lead: 'Explore plywood and engineered-board options under Starwoods, including MDF and HDHMR where available in the current range. Discuss your application with our team to identify the relevant product information.',
    image: '/assets/starwoods-brand-showcase.jpg',
    imageAlt:
      'Starwoods plywood and engineered-board substrate samples on a work surface',
    brandLogo: {
      src: '/assets/starwood-logo.png',
      alt: 'Starwoods brand logo',
      width: 168,
      height: 48
    },
    primaryCta: {
      label: 'Explore Starwoods',
      href: '/brands/starwoods'
    },
    secondaryCta: {
      label: 'Enquire About Starwoods',
      href: '/enquiry?brand=Starwoods&type=Product+Enquiry'
    }
  },
  {
    id: 'neom-packing-plywood',
    indexLabel: '03',
    tabTitle: 'Packing Plywood',
    tabSubtitle: 'Industrial Packaging',
    eyebrow: 'ACTIVE BRAND · NEOM PACKING PLYWOOD',
    title: 'Practical plywood for industrial packaging requirements.',
    lead: 'Moisture-resistant (MR) packaging-grade plywood for packing cases, crates, dividers and protective enclosures—with product selection guided by your intended application and available specifications.',
    image: '/assets/packing-plywood-showcase.jpg',
    imageAlt:
      'Stacked packaging-grade plywood sheets beside an assembled industrial packing crate',
    brandLogo: {
      src: '/assets/neom-packing-plywood-logo-horizontal.svg',
      alt: 'NEOM Packing Plywood brand logo',
      width: 176,
      height: 50
    },
    primaryCta: {
      label: 'Explore NEOM Packing Plywood',
      href: '/brands/neom-packing-plywood'
    },
    secondaryCta: {
      label: 'Discuss Packaging Supply',
      href: '/enquiry?brand=NEOM+Packing+Plywood&type=Industrial+Packaging+%2F+Packing+Plywood'
    }
  },
  {
    id: 'manufacturing',
    indexLabel: '04',
    tabTitle: 'Manufacturing',
    tabSubtitle: 'Foundation & Support',
    eyebrow: 'INDIAN MANUFACTURING FOUNDATION',
    title: 'Material knowledge and accountable support.',
    lead: 'Our own factory in India forms part of NEOM’s manufacturing foundation—paired with practical guidance before selection, clear communication during orders and continuing support after the sale.',
    image: '/assets/sector-manufacturing.jpg',
    imageAlt:
      'Wood-panel production, sheet sizing and quality inspection floor',
    brandLogo: null,
    primaryCta: {
      label: 'Explore Our Manufacturing',
      href: '/manufacturing'
    },
    secondaryCta: {
      label: 'Business Enquiry',
      href: '/enquiry'
    }
  }
];

const AUTOPLAY_MS = 6500;

export default function FullScreenHeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = (e) => setReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const goTo = useCallback((idx) => {
    setActiveIndex(((idx % HERO_SLIDES.length) + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused || isHovering || reducedMotion) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [activeIndex, isPaused, isHovering, reducedMotion]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches?.[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const endX = e.changedTouches?.[0]?.clientX ?? touchStartX.current;
    const delta = endX - touchStartX.current;
    if (Math.abs(delta) > 42) {
      if (delta < 0) handleNext();
      else handlePrev();
    }
    touchStartX.current = null;
  };

  const current = HERO_SLIDES[activeIndex];
  const autoplayActive = !isPaused && !isHovering && !reducedMotion;

  return (
    <section
      className="fs-hero"
      aria-roledescription="carousel"
      aria-label="NEOM Panels corporate and brand highlights"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onKeyDown={handleKeyDown}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Full-Screen Background Image Stage */}
      <div className="fs-hero__backdrop" aria-hidden="true">
        {HERO_SLIDES.map((slide, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={slide.id}
              className={`fs-hero__bg-slide ${isActive ? 'is-active' : ''}`}
            >
              <img
                src={slide.image}
                alt=""
                width="1920"
                height="1080"
                fetchPriority={idx === 0 ? 'high' : 'auto'}
                loading={idx === 0 ? 'eager' : 'lazy'}
                decoding="async"
                className="fs-hero__bg-img"
              />
            </div>
          );
        })}
        <div className="fs-hero__scrim" />
      </div>

      {/* Foreground Copy & Actions */}
      <div className="container fs-hero__inner">
        <div key={current.id} className="fs-hero__content">
          {current.brandLogo && (
            <div className="fs-hero__brand-plaque">
              <img
                src={current.brandLogo.src}
                alt={current.brandLogo.alt}
                width={current.brandLogo.width}
                height={current.brandLogo.height}
                className="fs-hero__brand-logo"
              />
            </div>
          )}

          <span className="fs-hero__eyebrow">{current.eyebrow}</span>

          <h1 id="main-heading" className="fs-hero__title">
            {current.title}
          </h1>

          <p className="fs-hero__lead">{current.lead}</p>

          <div className="fs-hero__actions">
            <Link href={current.primaryCta.href} className="btn btn-gold btn-lg">
              <span>{current.primaryCta.label}</span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link href={current.secondaryCta.href} className="btn btn-outline-light btn-lg">
              <span>{current.secondaryCta.label}</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Full-Width Docked Slider Controls & Tabs */}
      <div className="fs-hero__dock">
        <div className="container fs-hero__dock-inner">
          <div className="fs-hero__tabs" role="tablist" aria-label="Select hero slide">
            {HERO_SLIDES.map((slide, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={slide.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Slide ${slide.indexLabel}: ${slide.tabTitle}`}
                  className={`fs-hero__tab ${isActive ? 'is-active' : ''}`}
                  onClick={() => goTo(idx)}
                >
                  <span
                    className={`fs-hero__tab-progress ${
                      isActive && autoplayActive ? 'is-running' : ''
                    }`}
                    aria-hidden="true"
                  />
                  <span className="fs-hero__tab-num">{slide.indexLabel}</span>
                  <span className="fs-hero__tab-meta">
                    <span className="fs-hero__tab-title">{slide.tabTitle}</span>
                    <span className="fs-hero__tab-sub">{slide.tabSubtitle}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <div className="fs-hero__nav-controls" aria-label="Slider playback and step controls">
            <span className="fs-hero__counter" aria-live="polite">
              {current.indexLabel} / 0{HERO_SLIDES.length}
            </span>

            <button
              type="button"
              className="fs-hero__ctrl-btn"
              onClick={() => setIsPaused((p) => !p)}
              aria-label={isPaused ? 'Resume slide rotation' : 'Pause slide rotation'}
              title={isPaused ? 'Play' : 'Pause'}
            >
              {isPaused ? '▶' : '❚❚'}
            </button>

            <button
              type="button"
              className="fs-hero__ctrl-btn"
              onClick={handlePrev}
              aria-label="Previous slide"
            >
              ←
            </button>

            <button
              type="button"
              className="fs-hero__ctrl-btn"
              onClick={handleNext}
              aria-label="Next slide"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
