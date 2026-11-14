'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null); // 'products' | 'industries' | 'ecosystem' | 'company' | null
  const [mobileOpen, setMobileOpen] = useState(false);

  const navRef = useRef(null);
  const productsTriggerRef = useRef(null);
  const industriesTriggerRef = useRef(null);
  const ecosystemTriggerRef = useRef(null);
  const companyTriggerRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  const isProductsActive =
    pathname === '/brands' ||
    pathname?.startsWith('/brands/') ||
    pathname === '/#portfolio';

  const isCompanyActive =
    pathname === '/about' ||
    pathname === '/team' ||
    pathname?.startsWith('/team/') ||
    pathname === '/leadership' ||
    pathname === '/governance';

  const isIndustriesActive = pathname === '/industries';

  useEffect(() => {
    setOpenMenu(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    }
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setOpenMenu(null);
        if (mobileOpen) setMobileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [openMenu, mobileOpen]);

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  const handleMouseEnter = (menuName) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenMenu(menuName);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 150);
  };

  const toggleSubmenu = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <>
      {/* Top Architectural Utility Bar */}
      <div className="utility-bar">
        <div className="container utility-bar-inner">
          <span className="utility-tag">
            <span className="utility-dot" aria-hidden="true" />
            <span>NEOM PANELS · ENGINEERED EXCELLENCE, DESIGNED FOR SPACES · 2026–2036 BLUEPRINT</span>
          </span>
          <ul className="utility-links" role="list">
            <li>
              <a href="/#gcc-corridor" className="utility-link">
                India &amp; GCC Corridor
              </a>
            </li>
            <li>
              <Link href="/enquiry?category=sample-request" className="utility-link">
                Architectural Sample Box
              </Link>
            </li>
            <li>
              <Link href="/resources" className="utility-link">
                Spec Center &amp; CAD/BIM
              </Link>
            </li>
            <li>
              <a href="tel:+919745450618" className="utility-link utility-link--highlight font-mono">
                +91 97454 50618
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Header */}
      <header className="site-header">
        <div className="container header-inner">
          {/* Logo */}
          <Link href="/" className="brand-logo-link" aria-label="NEOM Panels — Home">
            <span className="brand-logo-3d-stage" aria-hidden="true">
              <span className="brand-logo-3d-emblem">
                <img
                  src="/assets/neom-n-layer-1.png"
                  alt=""
                  className="brand-logo-n-layer brand-logo-n-layer--1"
                  width="246"
                  height="308"
                />
                <img
                  src="/assets/neom-n-layer-2.png"
                  alt=""
                  className="brand-logo-n-layer brand-logo-n-layer--2"
                  width="246"
                  height="308"
                />
                <img
                  src="/assets/neom-n-layer-3.png"
                  alt=""
                  className="brand-logo-n-layer brand-logo-n-layer--3"
                  width="246"
                  height="308"
                />
                <img
                  src="/assets/neom-n-layer-4.png"
                  alt=""
                  className="brand-logo-n-layer brand-logo-n-layer--4"
                  width="246"
                  height="308"
                />
              </span>
              <span className="brand-logo-wordmark-wrap">
                <img
                  src="/assets/neom-wordmark-clean.png"
                  alt="NEOM Panels"
                  className="brand-logo-wordmark-img"
                  width="692"
                  height="246"
                />
                <span className="brand-logo-strapline font-mono">ENGINEERED EXCELLENCE</span>
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav ref={navRef} className="primary-nav" aria-label="Primary">
            <ul className="nav-list">
              {/* Products Submenu */}
              <li
                className="nav-item"
                onMouseEnter={() => handleMouseEnter('products')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  ref={productsTriggerRef}
                  type="button"
                  className="nav-submenu-trigger"
                  id="products-submenu-trigger"
                  aria-expanded={openMenu === 'products' ? 'true' : 'false'}
                  aria-controls="products-submenu"
                  data-active={isProductsActive ? 'true' : undefined}
                  onClick={() => toggleSubmenu('products')}
                >
                  <span>Materials &amp; Products</span>
                  <svg className="submenu-caret" aria-hidden="true" viewBox="0 0 12 8">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M1 1.5L6 6.5L11 1.5"
                    />
                  </svg>
                </button>
                <div
                  className="nav-submenu nav-submenu--products"
                  id="products-submenu"
                  hidden={openMenu !== 'products'}
                >
                  <div className="nav-submenu-header">PHASE 1 PRODUCT ARCHITECTURE</div>
                  <ul className="nav-submenu-list" role="list">
                    <li>
                      <Link
                        href="/#portfolio"
                        className="nav-submenu-link"
                        onClick={() => setOpenMenu(null)}
                      >
                        <div className="nav-submenu-title-row">
                          <span className="nav-submenu-title">Structural &amp; Specialty Plywood</span>
                          <span className="nav-submenu-badge">IS:710 · IS:303</span>
                        </div>
                        <span className="nav-submenu-desc">
                          Calibrated premium plywood, Marine Grade IS:710, BWR &amp; BWP moisture-resistant cores
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#portfolio"
                        className="nav-submenu-link"
                        onClick={() => setOpenMenu(null)}
                      >
                        <div className="nav-submenu-title-row">
                          <span className="nav-submenu-title">Engineered Boards (MDF &amp; HDHMR)</span>
                          <span className="nav-submenu-badge nav-submenu-badge--green">Green Core &gt;850 kg/m³</span>
                        </div>
                        <span className="nav-submenu-desc">
                          High-density HDHMR, architectural high-density MDF, and pre-laminated melamine boards
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/#portfolio"
                        className="nav-submenu-link"
                        onClick={() => setOpenMenu(null)}
                      >
                        <div className="nav-submenu-title-row">
                          <span className="nav-submenu-title">Decorative Surfaces &amp; Panels</span>
                          <span className="nav-submenu-badge nav-submenu-badge--oak">Architectural Finishes</span>
                        </div>
                        <span className="nav-submenu-desc">
                          Natural &amp; smoked veneers, high-pressure laminates (HPL), 6H acrylics, and fluted wall panels
                        </span>
                      </Link>
                    </li>
                    <li className="nav-submenu-divider" />
                    <li>
                      <Link
                        href="/brands#starwoods"
                        className="nav-submenu-link"
                        onClick={() => setOpenMenu(null)}
                      >
                        <div className="nav-submenu-title-row">
                          <span className="nav-submenu-title">Starwoods</span>
                          <span className="nav-submenu-badge">Furniture &amp; Interiors</span>
                        </div>
                        <span className="nav-submenu-desc">
                          Specialty brand for furniture manufacturers and modular kitchen fabricators
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/brands/neom-packing-plywood"
                        className="nav-submenu-link"
                        onClick={() => setOpenMenu(null)}
                      >
                        <div className="nav-submenu-title-row">
                          <span className="nav-submenu-title">NEOM Packing Plywood</span>
                          <span className="nav-submenu-badge nav-submenu-badge--oak">Industrial Packaging</span>
                        </div>
                        <span className="nav-submenu-desc">
                          Moisture-resistant packaging-grade plywood for heavy equipment packing cases and export crates
                        </span>
                      </Link>
                    </li>
                  </ul>
                  <div className="nav-submenu-footer">
                    <Link
                      href="/brands"
                      className="nav-submenu-footer-link"
                      onClick={() => setOpenMenu(null)}
                    >
                      <span>Explore Complete Portfolio &amp; Spec Sheets</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </li>

              {/* Industries Link */}
              <li className="nav-item">
                <Link
                  href="/industries"
                  className="nav-link"
                  aria-current={isIndustriesActive ? 'page' : undefined}
                >
                  Industries &amp; Spaces
                </Link>
              </li>

              {/* Ecosystem & Corridor Submenu */}
              <li
                className="nav-item"
                onMouseEnter={() => handleMouseEnter('ecosystem')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  ref={ecosystemTriggerRef}
                  type="button"
                  className="nav-submenu-trigger"
                  id="ecosystem-submenu-trigger"
                  aria-expanded={openMenu === 'ecosystem' ? 'true' : 'false'}
                  aria-controls="ecosystem-submenu"
                  onClick={() => toggleSubmenu('ecosystem')}
                >
                  <span>Ecosystem &amp; Corridor</span>
                  <svg className="submenu-caret" aria-hidden="true" viewBox="0 0 12 8">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M1 1.5L6 6.5L11 1.5"
                    />
                  </svg>
                </button>
                <div
                  className="nav-submenu"
                  id="ecosystem-submenu"
                  hidden={openMenu !== 'ecosystem'}
                >
                  <div className="nav-submenu-header">STRATEGIC GROWTH BLUEPRINT</div>
                  <ul className="nav-submenu-list" role="list">
                    <li>
                      <a
                        href="/#ecosystem"
                        className="nav-submenu-link"
                        onClick={() => setOpenMenu(null)}
                      >
                        <span className="nav-submenu-title">The 8-Pillar Ecosystem</span>
                        <span className="nav-submenu-desc">
                          Quality, design, dealer enablement, architect engagement &amp; digital platform
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#gcc-corridor"
                        className="nav-submenu-link"
                        onClick={() => setOpenMenu(null)}
                      >
                        <span className="nav-submenu-title">India &amp; GCC Expansion Corridor</span>
                        <span className="nav-submenu-desc">
                          Domestic market anchor + UAE, Saudi Arabia, Qatar, Oman export connectivity
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="/#roadmap"
                        className="nav-submenu-link"
                        onClick={() => setOpenMenu(null)}
                      >
                        <span className="nav-submenu-title">Roadmap to Scale (2026–2036)</span>
                        <span className="nav-submenu-desc">
                          From brand building to integrated multi-state manufacturing leadership
                        </span>
                      </a>
                    </li>
                    <li>
                      <Link
                        href="/manufacturing"
                        className="nav-submenu-link"
                        onClick={() => setOpenMenu(null)}
                      >
                        <span className="nav-submenu-title">Manufacturing Infrastructure</span>
                        <span className="nav-submenu-desc">
                          Quad-press calibration, raw veneer selection, and quality systems
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Company Submenu */}
              <li
                className="nav-item"
                onMouseEnter={() => handleMouseEnter('company')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  ref={companyTriggerRef}
                  type="button"
                  className="nav-submenu-trigger"
                  id="company-submenu-trigger"
                  aria-expanded={openMenu === 'company' ? 'true' : 'false'}
                  aria-controls="company-submenu"
                  data-active={isCompanyActive ? 'true' : undefined}
                  onClick={() => toggleSubmenu('company')}
                >
                  <span>Company</span>
                  <svg className="submenu-caret" aria-hidden="true" viewBox="0 0 12 8">
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M1 1.5L6 6.5L11 1.5"
                    />
                  </svg>
                </button>
                <div
                  className="nav-submenu"
                  id="company-submenu"
                  hidden={openMenu !== 'company'}
                >
                  <div className="nav-submenu-header">CORPORATE PROFILE &amp; VALUES</div>
                  <ul className="nav-submenu-list" role="list">
                    <li>
                      <Link
                        href="/about"
                        className="nav-submenu-link"
                        aria-current={pathname === '/about' ? 'page' : undefined}
                        onClick={() => setOpenMenu(null)}
                      >
                        <span className="nav-submenu-title">About NEOM Panels</span>
                        <span className="nav-submenu-desc">
                          Vision, mission, brand promise, and 4-stage business model
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/team"
                        className="nav-submenu-link"
                        aria-current={
                          pathname === '/team' || pathname === '/leadership' ? 'page' : undefined
                        }
                        onClick={() => setOpenMenu(null)}
                      >
                        <span className="nav-submenu-title">Executive Leadership</span>
                        <span className="nav-submenu-desc">
                          The management team directing NEOM Panels
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/sustainability"
                        className="nav-submenu-link"
                        aria-current={pathname === '/sustainability' ? 'page' : undefined}
                        onClick={() => setOpenMenu(null)}
                      >
                        <span className="nav-submenu-title">Sustainability &amp; Low Emissions</span>
                        <span className="nav-submenu-desc">
                          E0 emissions, agro-forestry sourcing, and circular biomass energy
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/governance"
                        className="nav-submenu-link"
                        aria-current={pathname === '/governance' ? 'page' : undefined}
                        onClick={() => setOpenMenu(null)}
                      >
                        <span className="nav-submenu-title">Governance &amp; Corporate Records</span>
                        <span className="nav-submenu-desc">
                          Verified corporate identity, policies, and registry documentation
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Resources Link */}
              <li className="nav-item">
                <Link
                  href="/resources"
                  className="nav-link"
                  aria-current={pathname === '/resources' ? 'page' : undefined}
                >
                  Resources
                </Link>
              </li>
            </ul>

            {/* Header Action Buttons */}
            <div className="nav-action-cluster">
              <Link
                href="/enquiry?category=sample-request"
                className="btn btn--secondary nav-sample-btn"
              >
                Order Sample Box
              </Link>
              <Link
                href="/enquiry"
                className="btn btn--primary nav-cta-btn"
                aria-current={pathname === '/enquiry' ? 'page' : undefined}
              >
                <span>Spec Quote</span>
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="mobile-menu-toggle"
            id="mobile-menu-toggle"
            aria-expanded={mobileOpen ? 'true' : 'false'}
            aria-controls="mobile-nav-panel"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span className="mobile-menu-label">{mobileOpen ? 'Close' : 'Menu'}</span>
            <svg aria-hidden="true" width="18" height="14" viewBox="0 0 18 14">
              <path
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                d="M1 1h16M1 7h16M1 13h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        <nav
          className="mobile-nav-panel"
          id="mobile-nav-panel"
          aria-label="Mobile"
          hidden={!mobileOpen}
        >
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <span className="mobile-nav-link" style={{ fontWeight: 700, color: 'var(--color-forest)' }}>
                Materials &amp; Portfolio
              </span>
              <ul className="mobile-submenu-list">
                <li>
                  <Link href="/#portfolio" className="mobile-submenu-link" onClick={() => setMobileOpen(false)}>
                    Structural Plywood (Calibrated &amp; Marine IS:710)
                  </Link>
                </li>
                <li>
                  <Link href="/#portfolio" className="mobile-submenu-link" onClick={() => setMobileOpen(false)}>
                    Engineered Boards (MDF &amp; HDHMR)
                  </Link>
                </li>
                <li>
                  <Link href="/#portfolio" className="mobile-submenu-link" onClick={() => setMobileOpen(false)}>
                    Decorative Surfaces (Veneers, HPL, Acrylic)
                  </Link>
                </li>
                <li>
                  <Link href="/brands#starwoods" className="mobile-submenu-link" onClick={() => setMobileOpen(false)}>
                    Starwoods (Furniture Plywood)
                  </Link>
                </li>
                <li>
                  <Link href="/brands/neom-packing-plywood" className="mobile-submenu-link" onClick={() => setMobileOpen(false)}>
                    NEOM Packing Plywood (Industrial Crates)
                  </Link>
                </li>
              </ul>
            </li>

            <li className="mobile-nav-item">
              <Link href="/industries" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                Industries &amp; Spaces
              </Link>
            </li>

            <li className="mobile-nav-item">
              <span className="mobile-nav-link" style={{ fontWeight: 700, color: 'var(--color-forest)' }}>
                Ecosystem &amp; Corridor
              </span>
              <ul className="mobile-submenu-list">
                <li>
                  <a href="/#ecosystem" className="mobile-submenu-link" onClick={() => setMobileOpen(false)}>
                    The 8-Pillar Ecosystem
                  </a>
                </li>
                <li>
                  <a href="/#gcc-corridor" className="mobile-submenu-link" onClick={() => setMobileOpen(false)}>
                    India &amp; GCC Expansion Corridor
                  </a>
                </li>
                <li>
                  <a href="/#roadmap" className="mobile-submenu-link" onClick={() => setMobileOpen(false)}>
                    Roadmap to Scale (2026–2036)
                  </a>
                </li>
              </ul>
            </li>

            <li className="mobile-nav-item">
              <span className="mobile-nav-link" style={{ fontWeight: 700, color: 'var(--color-forest)' }}>
                Company
              </span>
              <ul className="mobile-submenu-list">
                <li>
                  <Link href="/about" className="mobile-submenu-link" onClick={() => setMobileOpen(false)}>
                    About NEOM Panels
                  </Link>
                </li>
                <li>
                  <Link href="/team" className="mobile-submenu-link" onClick={() => setMobileOpen(false)}>
                    Executive Leadership
                  </Link>
                </li>
                <li>
                  <Link href="/manufacturing" className="mobile-submenu-link" onClick={() => setMobileOpen(false)}>
                    Manufacturing Infrastructure
                  </Link>
                </li>
                <li>
                  <Link href="/sustainability" className="mobile-submenu-link" onClick={() => setMobileOpen(false)}>
                    Sustainability &amp; Low Emissions
                  </Link>
                </li>
                <li>
                  <Link href="/governance" className="mobile-submenu-link" onClick={() => setMobileOpen(false)}>
                    Governance &amp; Corporate Info
                  </Link>
                </li>
              </ul>
            </li>

            <li className="mobile-nav-item">
              <Link href="/resources" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                Resources &amp; Specification Center
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link href="/blog" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                Insights &amp; News
              </Link>
            </li>
          </ul>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '1.5rem' }}>
            <Link
              href="/enquiry?category=sample-request"
              className="btn btn--secondary"
              style={{ width: '100%', textAlign: 'center' }}
              onClick={() => setMobileOpen(false)}
            >
              Order Material Sample Box
            </Link>
            <Link
              href="/enquiry"
              className="btn btn--primary"
              style={{ width: '100%', textAlign: 'center' }}
              onClick={() => setMobileOpen(false)}
            >
              Request Price Quote →
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
}
