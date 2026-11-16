'use client';

import { useState } from 'react';

const SHOWCASE_FRAMES = [
  {
    id: 'plywood',
    label: 'Plywood',
    src: '/assets/product-structural-plywood.jpg',
    alt: 'Multi-ply wood-panel cross-sections showing core layers and calibrated edges',
    caption:
      'NEOM Panels is an Indian panel manufacturing company and the company behind Starwoods and NEOM Packing Plywood.'
  },
  {
    id: 'starwoods',
    label: 'Starwoods',
    src: '/assets/starwoods-brand-showcase.jpg',
    alt: 'Starwoods plywood and engineered-board samples arranged on a work surface',
    caption:
      'Starwoods — Plywood and engineered-board options, including MDF and HDHMR where available.'
  },
  {
    id: 'packing-plywood',
    label: 'Packing Plywood',
    src: '/assets/packing-plywood-showcase.jpg',
    alt: 'Stacked packaging-grade plywood sheets beside an assembled industrial crate',
    caption:
      'NEOM Packing Plywood — Moisture-resistant (MR) plywood for industrial packaging requirements.'
  }
];

export default function HeroMaterialShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const current = SHOWCASE_FRAMES[activeIndex];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + SHOWCASE_FRAMES.length) % SHOWCASE_FRAMES.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SHOWCASE_FRAMES.length);
  };

  return (
    <figure className="corp-hero__media hero-showcase" aria-label="NEOM Panels material and brand visual gallery">
      <div className="corp-hero__image-frame corp-hero__image-frame--light hero-showcase__frame">
        <img
          key={current.id}
          src={current.src}
          alt={current.alt}
          width="1400"
          height="933"
          fetchPriority={activeIndex === 0 ? 'high' : 'auto'}
          loading="eager"
          className="corp-hero__img hero-showcase__img"
        />

        <div className="hero-showcase__controls" role="group" aria-label="Switch material view">
          <div className="hero-showcase__pills">
            {SHOWCASE_FRAMES.map((frame, idx) => (
              <button
                key={frame.id}
                type="button"
                className={`hero-showcase__pill ${idx === activeIndex ? 'is-active' : ''}`}
                aria-pressed={idx === activeIndex}
                onClick={() => setActiveIndex(idx)}
              >
                {frame.label}
              </button>
            ))}
          </div>

          <div className="hero-showcase__arrows">
            <button
              type="button"
              className="hero-showcase__arrow"
              onClick={handlePrev}
              aria-label="Previous material view"
            >
              ←
            </button>
            <button
              type="button"
              className="hero-showcase__arrow"
              onClick={handleNext}
              aria-label="Next material view"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <figcaption className="corp-hero__caption corp-hero__caption--dark">
        {current.caption}
      </figcaption>
    </figure>
  );
}
