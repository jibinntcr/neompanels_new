'use client';

import { useState } from 'react';
import Link from 'next/link';

const GCC_MARKETS = [
  {
    country: 'United Arab Emirates (UAE)',
    hub: 'Dubai & Abu Dhabi',
    role: 'Primary Trade Gateway & Architecture Hub',
    desc: 'Dubai functions as the premier commercial trade corridor and re-export nexus for the Middle East and East Africa, with intense demand for luxury hospitality and branded residential joinery.',
    drivers: 'Mega luxury developments, hotel refurbishments, Expo City expansions, modular kitchen manufacturing.',
    image: '/assets/gcc-dubai.jpg'
  },
  {
    country: 'Kingdom of Saudi Arabia (KSA)',
    hub: 'Riyadh, Jeddah & Red Sea',
    role: 'Giga-Projects & Commercial Expansion',
    desc: 'Massive giga-project investments under Vision 2030 creating unprecedented demand for certified high-performance architectural wood panels, fire-rated doors, and commercial interior fit-outs.',
    drivers: 'Red Sea Global, NEOM, Qiddiya, King Salman Park, and hundreds of thousands of residential units.',
    image: '/assets/gcc-riyadh.jpg'
  },
  {
    country: 'Qatar',
    hub: 'Doha & Lusail',
    role: 'Ultra-Luxury Hospitality & Culture',
    desc: 'High-specification requirements for government institutions, high-end commercial headquarters, and hospitality venues demanding premium veneers and acoustic panels.',
    drivers: 'National Vision 2030, civic infrastructure, luxury hotel upgrades, educational institutions.',
    image: '/assets/gcc-hospitality.jpg'
  },
  {
    country: 'Oman, Bahrain & Kuwait',
    hub: 'Muscat, Manama & Kuwait City',
    role: 'Regional Commercial & Residential Fit-Outs',
    desc: 'Consistent demand for moisture-resistant calibrated plywood, decorative laminates, and industrial packaging solutions backed by maritime trade connectivity with Western Indian ports.',
    drivers: 'Port logistics infrastructure, waterfront residential complexes, boutique hospitality.',
    image: '/assets/gcc-residential.jpg'
  }
];

export default function InteractiveGccCorridor() {
  const [activeMarketIdx, setActiveMarketIdx] = useState(0);
  const activeMarket = GCC_MARKETS[activeMarketIdx];

  return (
    <div className="gcc-corridor-wrap">
      {/* Corridor Header */}
      <div className="gcc-corridor-header">
        <div className="gcc-corridor-kicker">
          <span className="gcc-dot" aria-hidden="true" />
          <span>GEOGRAPHIC EXPANSION ARCHITECTURE · 2026–2036</span>
        </div>
        <h3 className="section-title">India Domestic Foundation &amp; GCC International Expansion</h3>
        <p className="lead-text">
          NEOM Panels is built with a dual-corridor strategy: anchored by India’s massive domestic construction and modular furniture expansion, and expanding into the GCC as a high-value export corridor.
        </p>
      </div>

      {/* Two Corridors Split Banner */}
      <div className="corridor-pillars-grid">
        {/* India Domestic Anchor */}
        <div className="corridor-card corridor-card--india">
          <div className="corridor-card-top">
            <span className="corridor-badge">DOMESTIC ANCHOR</span>
            <span className="corridor-flag">🇮🇳 INDIA</span>
          </div>
          <h4 className="corridor-card-title">Strong Domestic Industrial Base</h4>
          <p className="corridor-card-desc">
            India represents one of the world’s fastest-growing markets for engineered wood and interior materials. Demand is shifting rapidly from unorganized local trading to specification-led, factory-calibrated brands.
          </p>

          <ul className="corridor-drivers-list">
            <li>
              <strong>Urban Housing Boom:</strong> High-rise apartment completions requiring modular kitchens &amp; wardrobes.
            </li>
            <li>
              <strong>Furniture Manufacturing:</strong> Growth of OEM factories using automated CNC machining centers.
            </li>
            <li>
              <strong>Commercial Infrastructure:</strong> Corporate IT parks, retail developments, and transit hubs.
            </li>
            <li>
              <strong>Renovation Market:</strong> Millions of households upgrading from traditional carpentry to modular interiors.
            </li>
          </ul>

          <div className="corridor-card-foot">
            <span className="corridor-status-tag">PAN-INDIA SUPPLY NETWORK</span>
          </div>
        </div>

        {/* GCC International Corridor */}
        <div className="corridor-card corridor-card--gcc">
          <div className="corridor-card-top">
            <span className="corridor-badge corridor-badge--gold">HIGH-VALUE CORRIDOR</span>
            <span className="corridor-flag">🇦🇪 🇸🇦 🇶🇦 🇴🇲 🇧🇭 🇰🇼 GCC</span>
          </div>
          <h4 className="corridor-card-title">GCC &amp; Middle East Trade Corridor</h4>
          <p className="corridor-card-desc">
            The GCC represents an immediate high-value expansion corridor, supported by maritime connectivity between Indian west coast ports and Arabian Gulf deepwater terminals.
          </p>

          <ul className="corridor-drivers-list">
            <li>
              <strong>Giga Projects &amp; Mega Real Estate:</strong> Giga-scale developments demanding certified wood panels.
            </li>
            <li>
              <strong>Hospitality Expansion:</strong> World-leading hotel pipeline across Riyadh, Dubai, and Doha.
            </li>
            <li>
              <strong>Dubai as Trade Gateway:</strong> Re-export infrastructure serving the wider Middle East and African markets.
            </li>
            <li>
              <strong>Premium Specifications:</strong> High willingness to pay for certified moisture resistance and precision calibration.
            </li>
          </ul>

          <div className="corridor-card-foot">
            <span className="corridor-status-tag corridor-status-tag--gold">PORT CONNECTED · SEA CONTAINER READY</span>
          </div>
        </div>
      </div>

      {/* Interactive GCC Key Markets Explorer */}
      <div className="gcc-markets-stage">
        <div className="gcc-markets-nav" role="tablist" aria-label="GCC Key Markets">
          {GCC_MARKETS.map((m, idx) => {
            const isActive = activeMarketIdx === idx;
            return (
              <button
                key={m.country}
                role="tab"
                aria-selected={isActive}
                className={`gcc-market-btn ${isActive ? 'gcc-market-btn--active' : ''}`}
                onClick={() => setActiveMarketIdx(idx)}
              >
                <span className="market-btn-title">{m.country}</span>
                <span className="market-btn-hub">{m.hub}</span>
              </button>
            );
          })}
        </div>

        <div className="gcc-market-detail-card">
          <div className="market-detail-media">
            <img
              src={activeMarket.image}
              alt={activeMarket.country}
              className="market-detail-img"
              width="800"
              height="450"
              loading="lazy"
            />
            <div className="market-detail-overlay">
              <span className="market-overlay-pill">{activeMarket.role}</span>
            </div>
          </div>

          <div className="market-detail-body">
            <span className="market-kicker">{activeMarket.country}</span>
            <h4 className="market-title">{activeMarket.hub}</h4>
            <p className="market-desc">{activeMarket.desc}</p>

            <div className="market-drivers-box">
              <span className="drivers-box-label">KEY GROWTH VECTORS:</span>
              <p className="drivers-box-text">{activeMarket.drivers}</p>
            </div>

            <div className="market-actions">
              <Link
                href={`/enquiry?category=international-trade&region=${encodeURIComponent(activeMarket.country)}`}
                className="btn btn--primary"
              >
                <span>Discuss GCC Supply &amp; Export</span>
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/resources" className="btn btn--secondary">
                View Export Certifications
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
