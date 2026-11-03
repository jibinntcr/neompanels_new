'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null); // 'company' | 'brands' | null
  const [mobileOpen, setMobileOpen] = useState(false);

  const navRef = useRef(null);
  const companyTriggerRef = useRef(null);
  const brandsTriggerRef = useRef(null);
  const closeTimeoutRef = useRef(null);

  const isCompanyActive =
    pathname === '/about' ||
    pathname === '/team' ||
    pathname === '/leadership' ||
    pathname === '/governance';

  const isBrandsActive =
    pathname === '/brands' || pathname?.startsWith('/brands/');

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
        if (openMenu === 'company') {
          setOpenMenu(null);
          companyTriggerRef.current?.focus();
        } else if (openMenu === 'brands') {
          setOpenMenu(null);
          brandsTriggerRef.current?.focus();
        }
        if (mobileOpen) {
          setMobileOpen(false);
        }
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [openMenu, mobileOpen]);

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
    }, 140);
  };

  const toggleSubmenu = (menuName) => {
    setOpenMenu((prev) => (prev === menuName ? null : menuName));
  };

  return (
    <>
      <div className="utility-bar">
        <div className="container utility-bar-inner">
          <span className="utility-tag">
            <span className="utility-dot" aria-hidden="true" />
            <span>NEOM PANELS · INDIAN WOOD-PANEL MANUFACTURING</span>
          </span>
          <ul className="utility-links" role="list">
            <li>
              <Link href="/governance" className="utility-link">
                Corporate Governance
              </Link>
            </li>
            <li>
              <Link href="/resources" className="utility-link">
                Specification Literature
              </Link>
            </li>
            <li>
              <Link href="/team" className="utility-link">
                Leadership
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand-logo-link" aria-label="NEOM Panels — Home">
            <img
              src="/assets/logo-horizontal.png"
              alt="NEOM Panels — Engineered Excellence, Designed for Spaces"
              className="brand-logo-horiz"
              width="540"
              height="180"
            />
          </Link>

          <nav ref={navRef} className="primary-nav" aria-label="Primary">
            <ul className="nav-list">
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
                  <div className="nav-submenu-header">CORPORATE PROFILE</div>
                  <ul className="nav-submenu-list" role="list">
                    <li>
                      <Link
                        href="/about"
                        className="nav-submenu-link"
                        aria-current={pathname === '/about' ? 'page' : undefined}
                        onClick={() => setOpenMenu(null)}
                      >
                        <span className="nav-submenu-title">About NEOM</span>
                        <span className="nav-submenu-desc">
                          Purpose, vision, mission and operating principles
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
                        <span className="nav-submenu-title">Leadership</span>
                        <span className="nav-submenu-desc">
                          The executive team behind NEOM Panels
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
                        <span className="nav-submenu-title">
                          Governance &amp; Corporate Information
                        </span>
                        <span className="nav-submenu-desc">
                          Verified corporate registry, policies and documents
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* Brands Submenu */}
              <li
                className="nav-item"
                onMouseEnter={() => handleMouseEnter('brands')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  ref={brandsTriggerRef}
                  type="button"
                  className="nav-submenu-trigger"
                  id="brands-submenu-trigger"
                  aria-expanded={openMenu === 'brands' ? 'true' : 'false'}
                  aria-controls="brands-submenu"
                  data-active={isBrandsActive ? 'true' : undefined}
                  onClick={() => toggleSubmenu('brands')}
                >
                  <span>Brands</span>
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
                  className="nav-submenu nav-submenu--brands"
                  id="brands-submenu"
                  hidden={openMenu !== 'brands'}
                >
                  <div className="nav-submenu-header">NEOM PANELS PRODUCT BRANDS</div>
                  <ul className="nav-submenu-list" role="list">
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
                          Engineered panels for furniture manufacturing, modular systems and fit-outs
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/brands/neom-packing-plywood"
                        className="nav-submenu-link"
                        aria-current={
                          pathname === '/brands/neom-packing-plywood' ? 'page' : undefined
                        }
                        onClick={() => setOpenMenu(null)}
                      >
                        <div className="nav-submenu-title-row">
                          <span className="nav-submenu-title">NEOM Packing Plywood</span>
                          <span className="nav-submenu-badge nav-submenu-badge--oak">
                            Industrial Packaging
                          </span>
                        </div>
                        <span className="nav-submenu-desc">
                          Moisture-resistant packaging-grade plywood for packing cases and crates
                        </span>
                      </Link>
                    </li>
                  </ul>
                  <div className="nav-submenu-footer">
                    <Link
                      href="/brands"
                      className="nav-submenu-footer-link"
                      aria-current={pathname === '/brands' ? 'page' : undefined}
                      onClick={() => setOpenMenu(null)}
                    >
                      <span>View All Brands &amp; Portfolio Architecture</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </li>

              <li className="nav-item">
                <Link
                  href="/industries"
                  className="nav-link"
                  aria-current={pathname === '/industries' ? 'page' : undefined}
                >
                  Industries
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/manufacturing"
                  className="nav-link"
                  aria-current={pathname === '/manufacturing' ? 'page' : undefined}
                >
                  Manufacturing
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/sustainability"
                  className="nav-link"
                  aria-current={pathname === '/sustainability' ? 'page' : undefined}
                >
                  Sustainability
                </Link>
              </li>
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

            <Link
              href="/enquiry"
              className="btn btn--primary nav-cta-btn"
              aria-current={pathname === '/enquiry' ? 'page' : undefined}
            >
              Business Enquiry
            </Link>
          </nav>

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

        <nav
          className="mobile-nav-panel"
          id="mobile-nav-panel"
          aria-label="Mobile"
          hidden={!mobileOpen}
        >
          <ul className="mobile-nav-list">
            <li className="mobile-nav-item">
              <span
                className="mobile-nav-link"
                style={{ fontWeight: 600, color: 'var(--color-forest)' }}
              >
                Company
              </span>
              <ul className="mobile-submenu-list">
                <li>
                  <Link
                    href="/about"
                    className="mobile-submenu-link"
                    aria-current={pathname === '/about' ? 'page' : undefined}
                  >
                    About NEOM
                  </Link>
                </li>
                <li>
                  <Link
                    href="/team"
                    className="mobile-submenu-link"
                    aria-current={
                      pathname === '/team' || pathname === '/leadership' ? 'page' : undefined
                    }
                  >
                    Leadership
                  </Link>
                </li>
                <li>
                  <Link
                    href="/governance"
                    className="mobile-submenu-link"
                    aria-current={pathname === '/governance' ? 'page' : undefined}
                  >
                    Governance &amp; Corporate Information
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mobile-nav-item">
              <span
                className="mobile-nav-link"
                style={{ fontWeight: 600, color: 'var(--color-forest)' }}
              >
                Brands
              </span>
              <ul className="mobile-submenu-list">
                <li>
                  <Link href="/brands#starwoods" className="mobile-submenu-link">
                    Starwoods (Furniture &amp; Interiors)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/brands/neom-packing-plywood"
                    className="mobile-submenu-link"
                    aria-current={pathname === '/brands/neom-packing-plywood' ? 'page' : undefined}
                  >
                    NEOM Packing Plywood (Industrial Packaging)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/brands"
                    className="mobile-submenu-link"
                    aria-current={pathname === '/brands' ? 'page' : undefined}
                  >
                    All Brands Overview →
                  </Link>
                </li>
              </ul>
            </li>
            <li className="mobile-nav-item">
              <Link
                href="/industries"
                className="mobile-nav-link"
                aria-current={pathname === '/industries' ? 'page' : undefined}
              >
                Industries
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link
                href="/manufacturing"
                className="mobile-nav-link"
                aria-current={pathname === '/manufacturing' ? 'page' : undefined}
              >
                Manufacturing
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link
                href="/sustainability"
                className="mobile-nav-link"
                aria-current={pathname === '/sustainability' ? 'page' : undefined}
              >
                Sustainability
              </Link>
            </li>
            <li className="mobile-nav-item">
              <Link
                href="/resources"
                className="mobile-nav-link"
                aria-current={pathname === '/resources' ? 'page' : undefined}
              >
                Resources
              </Link>
            </li>
          </ul>
          <Link href="/enquiry" className="btn btn--primary" style={{ width: '100%' }}>
            Business Enquiry
          </Link>
        </nav>
      </header>
    </>
  );
}
