'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null); // 'company' | 'brands' | null
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navRef = useRef(null);
  const closeTimeoutRef = useRef(null);
  const companyBtnRef = useRef(null);
  const brandsBtnRef = useRef(null);
  const mobileToggleRef = useRef(null);

  const isCompany =
    pathname === '/about' ||
    pathname?.startsWith('/team') ||
    pathname === '/leadership' ||
    pathname === '/governance';
  const isBrands = pathname?.startsWith('/brands') || pathname?.startsWith('/products');
  const isManufacturing = pathname === '/manufacturing';
  const isResponsibility = pathname === '/responsibility' || pathname === '/sustainability';

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
        if (openDropdown === 'company') {
          setOpenDropdown(null);
          companyBtnRef.current?.focus();
        } else if (openDropdown === 'brands') {
          setOpenDropdown(null);
          brandsBtnRef.current?.focus();
        } else if (mobileOpen) {
          setMobileOpen(false);
          mobileToggleRef.current?.focus();
        }
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

  const handleDropdownBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setOpenDropdown(null);
    }
  };

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  return (
    <header className={`site-header ${isScrolled ? 'site-header--scrolled' : ''}`} ref={navRef}>
      <div className="container header-inner">
        {/* Authentic NEOM Panels Parent Mark + Architectural Strapline */}
        <Link
          href="/"
          className="brand-logo-link"
          aria-label="NEOM Panels — Engineered Excellence — Home"
        >
          <span className="brand-logo-lockup" aria-hidden="true">
            <span className="brand-logo-3d-stage">
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
                  alt=""
                  className="brand-logo-wordmark-img"
                  width="692"
                  height="246"
                />
              </span>
            </span>

            <span className="brand-logo-strapline-bar">
              <span className="brand-logo-strapline-rule" />
              <span className="brand-logo-strapline">ENGINEERED EXCELLENCE</span>
            </span>
          </span>
        </Link>

        {/* Desktop Primary Navigation: Company | Our Brands | Manufacturing | Responsibility */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <ul className="nav-list" role="list">
            {/* 1. Company */}
            <li
              className="nav-item nav-item--dropdown"
              onMouseEnter={() => handleMouseEnter('company')}
              onMouseLeave={handleMouseLeave}
              onBlur={handleDropdownBlur}
            >
              <div className="nav-dropdown-trigger-group">
                <Link
                  href="/about"
                  className={`nav-link ${isCompany ? 'nav-link--active' : ''}`}
                  aria-current={pathname === '/about' ? 'page' : undefined}
                >
                  Company
                </Link>
                <button
                  ref={companyBtnRef}
                  type="button"
                  className="nav-caret-btn"
                  aria-label="Toggle Company submenu"
                  aria-expanded={openDropdown === 'company'}
                  aria-controls="company-submenu"
                  onClick={() => toggleDropdown('company')}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                    className={`caret-icon ${openDropdown === 'company' ? 'caret-icon--open' : ''}`}
                  >
                    <path
                      d="M2.5 4.5L6 8L9.5 4.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {openDropdown === 'company' && (
                <div id="company-submenu" className="nav-submenu nav-submenu--open">
                  <div className="nav-submenu-header">
                    <span className="nav-submenu-kicker">COMPANY</span>
                  </div>
                  <ul className="nav-submenu-list" role="list">
                    <li>
                      <Link
                        href="/about"
                        className="nav-submenu-item"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <span className="nav-submenu-title">About NEOM</span>
                        <span className="nav-submenu-desc">
                          The Indian panel manufacturing company behind Starwoods and NEOM Packing Plywood
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about#purpose-vision-values"
                        className="nav-submenu-item"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <span className="nav-submenu-title">Purpose, Vision &amp; Values</span>
                        <span className="nav-submenu-desc">
                          Making panel buying more dependable and transparent through accountable behaviour
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/team"
                        className="nav-submenu-item"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <span className="nav-submenu-title">Leadership</span>
                        <span className="nav-submenu-desc">
                          Meet the leadership team guiding operations, finance and customer relationships
                        </span>
                      </Link>
                    </li>
                    <li className="nav-submenu-divider" role="separator" aria-hidden="true" />
                    <li>
                      <Link
                        href="/governance"
                        className="nav-submenu-item"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <span className="nav-submenu-title">Governance</span>
                        <span className="nav-submenu-desc">
                          Verified corporate information and operating principles
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* 2. Our Brands */}
            <li
              className="nav-item nav-item--dropdown"
              onMouseEnter={() => handleMouseEnter('brands')}
              onMouseLeave={handleMouseLeave}
              onBlur={handleDropdownBlur}
            >
              <div className="nav-dropdown-trigger-group">
                <Link
                  href="/brands"
                  className={`nav-link ${isBrands ? 'nav-link--active' : ''}`}
                  aria-current={pathname === '/brands' ? 'page' : undefined}
                >
                  Our Brands
                </Link>
                <button
                  ref={brandsBtnRef}
                  type="button"
                  className="nav-caret-btn"
                  aria-label="Toggle Our Brands submenu"
                  aria-expanded={openDropdown === 'brands'}
                  aria-controls="brands-submenu"
                  onClick={() => toggleDropdown('brands')}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden="true"
                    className={`caret-icon ${openDropdown === 'brands' ? 'caret-icon--open' : ''}`}
                  >
                    <path
                      d="M2.5 4.5L6 8L9.5 4.5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>

              {openDropdown === 'brands' && (
                <div
                  id="brands-submenu"
                  className="nav-submenu nav-submenu--wide nav-submenu--open"
                >
                  <div className="nav-submenu-header">
                    <span className="nav-submenu-kicker">OUR ACTIVE BRANDS</span>
                    <Link
                      href="/brands"
                      className="nav-submenu-all"
                      onClick={() => setOpenDropdown(null)}
                    >
                      View All Brands →
                    </Link>
                  </div>

                  <ul className="nav-submenu-list" role="list">
                    <li>
                      <Link
                        href="/brands/starwoods"
                        className="nav-submenu-item"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <span className="nav-submenu-title">Starwoods</span>
                        <span className="nav-submenu-desc">
                          Plywood and engineered boards, including MDF and HDHMR where available
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/brands/neom-packing-plywood"
                        className="nav-submenu-item"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <span className="nav-submenu-title">NEOM Packing Plywood</span>
                        <span className="nav-submenu-desc">
                          Plywood for industrial packaging requirements
                        </span>
                      </Link>
                    </li>
                    <li className="nav-submenu-divider" role="separator" aria-hidden="true" />
                    <li>
                      <Link
                        href="/products"
                        className="nav-submenu-item"
                        onClick={() => setOpenDropdown(null)}
                      >
                        <span className="nav-submenu-title">Material Reference</span>
                        <span className="nav-submenu-desc">
                          Supporting product-family information for plywood and engineered boards
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            {/* 3. Manufacturing */}
            <li className="nav-item">
              <Link
                href="/manufacturing"
                className={`nav-link ${isManufacturing ? 'nav-link--active' : ''}`}
                aria-current={isManufacturing ? 'page' : undefined}
              >
                Manufacturing
              </Link>
            </li>

            {/* 4. Responsibility */}
            <li className="nav-item">
              <Link
                href="/responsibility"
                className={`nav-link ${isResponsibility ? 'nav-link--active' : ''}`}
                aria-current={isResponsibility ? 'page' : undefined}
              >
                Responsibility
              </Link>
            </li>
          </ul>
        </nav>

        {/* Accessible Contact + Primary Business Enquiry Action */}
        <div className="header-actions">
          <Link
            href="/enquiry#direct-contact"
            className="nav-link header-contact-link"
          >
            Contact
          </Link>

          <Link href="/enquiry" className="btn btn-primary header-cta-btn">
            <span>Business Enquiry</span>
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            ref={mobileToggleRef}
            type="button"
            className="mobile-nav-toggle"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
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
        <div
          id="mobile-navigation-drawer"
          className="mobile-nav-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="mobile-nav-inner">
            <ul className="mobile-nav-list" role="list">
              <li>
                <Link href="/" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                  Home
                </Link>
              </li>

              <li className="mobile-nav-section">
                <Link href="/about" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                  Company
                </Link>
                <ul className="mobile-sublist" role="list">
                  <li>
                    <Link
                      href="/about#purpose-vision-values"
                      className="mobile-sublink"
                      onClick={() => setMobileOpen(false)}
                    >
                      Purpose, Vision &amp; Values
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/team"
                      className="mobile-sublink"
                      onClick={() => setMobileOpen(false)}
                    >
                      Leadership
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/governance"
                      className="mobile-sublink"
                      onClick={() => setMobileOpen(false)}
                    >
                      Governance
                    </Link>
                  </li>
                </ul>
              </li>

              <li className="mobile-nav-section">
                <Link href="/brands" className="mobile-nav-link" onClick={() => setMobileOpen(false)}>
                  Our Brands
                </Link>
                <ul className="mobile-sublist" role="list">
                  <li>
                    <Link
                      href="/brands/starwoods"
                      className="mobile-sublink"
                      onClick={() => setMobileOpen(false)}
                    >
                      Starwoods
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/brands/neom-packing-plywood"
                      className="mobile-sublink"
                      onClick={() => setMobileOpen(false)}
                    >
                      NEOM Packing Plywood
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link
                  href="/manufacturing"
                  className="mobile-nav-link"
                  onClick={() => setMobileOpen(false)}
                >
                  Manufacturing
                </Link>
              </li>

              <li>
                <Link
                  href="/responsibility"
                  className="mobile-nav-link"
                  onClick={() => setMobileOpen(false)}
                >
                  Responsibility
                </Link>
              </li>

              <li>
                <Link
                  href="/partners"
                  className="mobile-nav-link"
                  onClick={() => setMobileOpen(false)}
                >
                  Partners
                </Link>
              </li>

              <li>
                <Link
                  href="/resources"
                  className="mobile-nav-link"
                  onClick={() => setMobileOpen(false)}
                >
                  Product Information
                </Link>
              </li>

              <li>
                <Link
                  href="/enquiry#direct-contact"
                  className="mobile-nav-link"
                  onClick={() => setMobileOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>

            <div className="mobile-nav-cta">
              <Link
                href="/enquiry"
                className="btn btn-primary btn-block"
                onClick={() => setMobileOpen(false)}
              >
                Business Enquiry
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
