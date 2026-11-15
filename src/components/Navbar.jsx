'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null); // 'products' | 'about' | null
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  const isHome = pathname === '/';
  const isProducts = pathname?.startsWith('/products');
  const isApplications = pathname === '/applications' || pathname === '/industries';
  const isAbout = pathname === '/about' || pathname === '/growth-vision';
  const isTeam = pathname?.startsWith('/team') || pathname === '/leadership';
  const isPartners = pathname === '/partners';
  const isContact = pathname === '/enquiry' || pathname === '/contact';

  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    }
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        if (mobileOpen) setMobileOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [openDropdown, mobileOpen]);

  if (pathname?.startsWith('/admin')) {
    return null;
  }

  const handleMouseEnter = (name) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setOpenDropdown(name);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 180);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <>
      {/* Top Architectural Micro-Bar */}
      <div className="utility-bar">
        <div className="container utility-bar-inner">
          <div className="utility-bar-left">
            <span className="utility-tag font-mono">
              <span className="utility-dot" aria-hidden="true" />
              <span>NEOM PANELS · ENGINEERED EXCELLENCE, DESIGNED FOR SPACES</span>
            </span>
          </div>
          <div className="utility-bar-right">
            <span className="utility-corridor-pill font-mono">India · GCC Corridor</span>
            <span className="utility-divider" aria-hidden="true">|</span>
            <a href="tel:+919745450618" className="utility-contact-link font-mono">
              +91 97454 50618
            </a>
            <span className="utility-divider" aria-hidden="true">·</span>
            <a href="mailto:neompanels@gmail.com" className="utility-contact-link">
              neompanels@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Architectural Header */}
      <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`} ref={navRef}>
        <div className="container header-inner">
          {/* Authentic NEOM Logo */}
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
          <nav className="desktop-nav" aria-label="Main Navigation">
            <ul className="nav-list" role="list">
              {/* Home */}
              <li className="nav-item">
                <Link
                  href="/"
                  className={`nav-link ${isHome ? 'nav-link--active' : ''}`}
                  aria-current={isHome ? 'page' : undefined}
                >
                  Home
                </Link>
              </li>

              {/* Products (with accessible dropdown) */}
              <li
                className="nav-item nav-item--dropdown"
                onMouseEnter={() => handleMouseEnter('products')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="nav-dropdown-trigger-group">
                  <Link
                    href="/products"
                    className={`nav-link ${isProducts ? 'nav-link--active' : ''}`}
                    aria-current={isProducts ? 'page' : undefined}
                  >
                    Products
                  </Link>
                  <button
                    type="button"
                    className="nav-dropdown-btn"
                    aria-expanded={openDropdown === 'products'}
                    aria-label="Toggle products menu"
                    onClick={() => toggleDropdown('products')}
                  >
                    <svg className="submenu-caret" aria-hidden="true" viewBox="0 0 12 8" width="10" height="7">
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
                </div>

                <div
                  className={`nav-submenu ${openDropdown === 'products' ? 'nav-submenu--open' : ''}`}
                  hidden={openDropdown !== 'products'}
                >
                  <div className="nav-submenu-header">PHASE 1 MATERIALS PORTFOLIO</div>
                  <ul className="nav-submenu-list" role="list">
                    <li>
                      <Link
                        href="/products"
                        className="nav-submenu-link"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <div className="nav-submenu-title-row">
                          <span className="nav-submenu-title">Complete Portfolio Overview</span>
                          <span className="nav-submenu-badge">3 Families</span>
                        </div>
                        <span className="nav-submenu-desc">
                          Explore all substrates, fibre cores, and decorative surface lines
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/plywood"
                        className="nav-submenu-link"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <div className="nav-submenu-title-row">
                          <span className="nav-submenu-title">Structural &amp; Specialty Plywood</span>
                          <span className="nav-submenu-badge">01</span>
                        </div>
                        <span className="nav-submenu-desc">
                          Premium Plywood, Marine Plywood, and BWR / BWP calibrated panels
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/engineered-boards"
                        className="nav-submenu-link"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <div className="nav-submenu-title-row">
                          <span className="nav-submenu-title">Solid Engineered Boards</span>
                          <span className="nav-submenu-badge">02</span>
                        </div>
                        <span className="nav-submenu-desc">
                          High-density MDF, HDHMR moisture-resistant cores, and Pre-Laminated MDF
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/products/decorative-surfaces"
                        className="nav-submenu-link"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <div className="nav-submenu-title-row">
                          <span className="nav-submenu-title">Decorative Surfaces</span>
                          <span className="nav-submenu-badge nav-submenu-badge--oak">03</span>
                        </div>
                        <span className="nav-submenu-desc">
                          Natural veneers, HPL laminates, acrylics, and fluted charcoal panels
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Applications */}
              <li className="nav-item">
                <Link
                  href="/applications"
                  className={`nav-link ${isApplications ? 'nav-link--active' : ''}`}
                  aria-current={isApplications ? 'page' : undefined}
                >
                  Applications
                </Link>
              </li>

              {/* About NEOM (with dropdown) */}
              <li
                className="nav-item nav-item--dropdown"
                onMouseEnter={() => handleMouseEnter('about')}
                onMouseLeave={handleMouseLeave}
              >
                <div className="nav-dropdown-trigger-group">
                  <Link
                    href="/about"
                    className={`nav-link ${isAbout ? 'nav-link--active' : ''}`}
                    aria-current={isAbout ? 'page' : undefined}
                  >
                    About
                  </Link>
                  <button
                    type="button"
                    className="nav-dropdown-btn"
                    aria-expanded={openDropdown === 'about'}
                    aria-label="Toggle about menu"
                    onClick={() => toggleDropdown('about')}
                  >
                    <svg className="submenu-caret" aria-hidden="true" viewBox="0 0 12 8" width="10" height="7">
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
                </div>

                <div
                  className={`nav-submenu ${openDropdown === 'about' ? 'nav-submenu--open' : ''}`}
                  hidden={openDropdown !== 'about'}
                >
                  <div className="nav-submenu-header">COMPANY &amp; CORPORATE STRATEGY</div>
                  <ul className="nav-submenu-list" role="list">
                    <li>
                      <Link
                        href="/about"
                        className="nav-submenu-link"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <span className="nav-submenu-title">Vision, Mission &amp; Ecosystem</span>
                        <span className="nav-submenu-desc">
                          Our brand purpose, 8 ecosystem pillars, and 4-stage growth model
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/team"
                        className="nav-submenu-link"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <div className="nav-submenu-title-row">
                          <span className="nav-submenu-title">Executive Leadership Team</span>
                          <span className="nav-submenu-badge">Board</span>
                        </div>
                        <span className="nav-submenu-desc">
                          Meet MD Jibin N, CEO Muneer K H, CFO Muhamad Raneef T A &amp; CTO Muhammed Jabir
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/growth-vision"
                        className="nav-submenu-link"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <div className="nav-submenu-title-row">
                          <span className="nav-submenu-title">Growth Vision &amp; GCC Corridor</span>
                          <span className="nav-submenu-badge nav-submenu-badge--oak">2026–2036</span>
                        </div>
                        <span className="nav-submenu-desc">
                          India domestic anchor, GCC expansion corridor, and 10-year horizon
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Team (Direct Primary Nav Item) */}
              <li className="nav-item">
                <Link
                  href="/team"
                  className={`nav-link ${isTeam ? 'nav-link--active' : ''}`}
                  aria-current={isTeam ? 'page' : undefined}
                >
                  Team
                </Link>
              </li>

              {/* Partners */}
              <li className="nav-item">
                <Link
                  href="/partners"
                  className={`nav-link ${isPartners ? 'nav-link--active' : ''}`}
                  aria-current={isPartners ? 'page' : undefined}
                >
                  Partners
                </Link>
              </li>

              {/* Contact */}
              <li className="nav-item">
                <Link
                  href="/enquiry"
                  className={`nav-link ${isContact ? 'nav-link--active' : ''}`}
                  aria-current={isContact ? 'page' : undefined}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Primary Header Action */}
          <div className="header-actions">
            <Link href="/enquiry" className="btn btn-primary header-cta-btn">
              <span>Discuss Your Requirement</span>
              <svg className="btn-icon-arrow" aria-hidden="true" viewBox="0 0 16 16" width="14" height="14">
                <path fill="currentColor" d="M8.22 2.97a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06l2.97-2.97H2.75a.75.75 0 0 1 0-1.5h8.44L8.22 4.03a.75.75 0 0 1 0-1.06Z" />
              </svg>
            </Link>

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              className="mobile-nav-toggle"
              aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className={`hamburger-bar ${mobileOpen ? 'hamburger-bar--open-1' : ''}`} />
              <span className={`hamburger-bar ${mobileOpen ? 'hamburger-bar--open-2' : ''}`} />
              <span className={`hamburger-bar ${mobileOpen ? 'hamburger-bar--open-3' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="mobile-nav-drawer" role="dialog" aria-modal="true" aria-label="Mobile Navigation">
            <div className="mobile-nav-inner">
              <ul className="mobile-nav-list" role="list">
                <li>
                  <Link href="/" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                    Home
                  </Link>
                </li>
                <li className="mobile-nav-group">
                  <div className="mobile-nav-group-header">
                    <Link href="/products" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                      Products
                    </Link>
                  </div>
                  <ul className="mobile-nav-sublist" role="list">
                    <li>
                      <Link href="/products/plywood" className="mobile-nav-sublink" onClick={() => setMobileOpen(false)}>
                        Structural &amp; Specialty Plywood
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/engineered-boards" className="mobile-nav-sublink" onClick={() => setMobileOpen(false)}>
                        Solid Engineered Boards (MDF &amp; HDHMR)
                      </Link>
                    </li>
                    <li>
                      <Link href="/products/decorative-surfaces" className="mobile-nav-sublink" onClick={() => setMobileOpen(false)}>
                        Decorative Surfaces &amp; Panels
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/applications" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                    Applications
                  </Link>
                </li>
                <li className="mobile-nav-group">
                  <div className="mobile-nav-group-header">
                    <Link href="/about" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                      About NEOM
                    </Link>
                  </div>
                  <ul className="mobile-nav-sublist" role="list">
                    <li>
                      <Link href="/about" className="mobile-nav-sublink" onClick={() => setMobileOpen(false)}>
                        Vision, Mission &amp; Growth Model
                      </Link>
                    </li>
                    <li>
                      <Link href="/team" className="mobile-nav-sublink" onClick={() => setMobileOpen(false)}>
                        Executive Leadership Team
                      </Link>
                    </li>
                    <li>
                      <Link href="/growth-vision" className="mobile-nav-sublink" onClick={() => setMobileOpen(false)}>
                        Growth Vision &amp; GCC Expansion
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link href="/team" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                    Leadership Team
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                    Partners
                  </Link>
                </li>
                <li>
                  <Link href="/resources" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                    Resources
                  </Link>
                </li>
                <li>
                  <Link href="/enquiry" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                    Contact &amp; Enquiries
                  </Link>
                </li>
              </ul>

              <div className="mobile-nav-footer">
                <Link
                  href="/enquiry"
                  className="btn btn-primary mobile-cta-btn"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>Discuss Your Requirement</span>
                </Link>
                <div className="mobile-contact-info">
                  <a href="tel:+919745450618" className="mobile-phone-link font-mono">
                    +91 97454 50618
                  </a>
                  <a href="mailto:neompanels@gmail.com" className="mobile-email-link">
                    neompanels@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
