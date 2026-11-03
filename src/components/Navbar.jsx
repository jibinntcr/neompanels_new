'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [companySubmenuOpen, setCompanySubmenuOpen] = useState(false);
  const [brandsSubmenuOpen, setBrandsSubmenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const companySubmenuRef = useRef(null);
  const companyTriggerRef = useRef(null);
  const brandsSubmenuRef = useRef(null);
  const brandsTriggerRef = useRef(null);

  const isCompanyActive =
    pathname === '/about' ||
    pathname === '/team' ||
    pathname === '/leadership' ||
    pathname === '/governance';

  const isBrandsActive =
    pathname === '/brands' || pathname?.startsWith('/brands/');

  useEffect(() => {
    setCompanySubmenuOpen(false);
    setBrandsSubmenuOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClickOutside(e) {
      if (
        companySubmenuRef.current &&
        !companySubmenuRef.current.contains(e.target) &&
        companyTriggerRef.current &&
        !companyTriggerRef.current.contains(e.target)
      ) {
        setCompanySubmenuOpen(false);
      }
      if (
        brandsSubmenuRef.current &&
        !brandsSubmenuRef.current.contains(e.target) &&
        brandsTriggerRef.current &&
        !brandsTriggerRef.current.contains(e.target)
      ) {
        setBrandsSubmenuOpen(false);
      }
    }
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        if (companySubmenuOpen) {
          setCompanySubmenuOpen(false);
          companyTriggerRef.current?.focus();
        }
        if (brandsSubmenuOpen) {
          setBrandsSubmenuOpen(false);
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
  }, [companySubmenuOpen, brandsSubmenuOpen, mobileOpen]);

  return (
    <>
      <div className="utility-bar">
        <div className="container utility-bar-inner">
          <span className="utility-tag">
            <span className="utility-dot" aria-hidden="true" />
            <span>
              NEOM PANELS · INDIAN WOOD-PANEL MANUFACTURING · HOME TO STARWOODS &amp; NEOM PACKING
              PLYWOOD
            </span>
          </span>
          <ul className="utility-links" role="list">
            <li>
              <Link href="/brands#starwoods" className="utility-link">
                Starwoods
              </Link>
            </li>
            <li>
              <Link href="/brands/neom-packing-plywood" className="utility-link">
                NEOM Packing Plywood
              </Link>
            </li>
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

          <nav className="primary-nav" aria-label="Primary">
            <ul className="nav-list">
              {/* Company Submenu */}
              <li className="nav-item">
                <button
                  ref={companyTriggerRef}
                  type="button"
                  className="nav-submenu-trigger"
                  id="company-submenu-trigger"
                  aria-expanded={companySubmenuOpen ? 'true' : 'false'}
                  aria-controls="company-submenu"
                  data-active={isCompanyActive ? 'true' : undefined}
                  onClick={() => {
                    setCompanySubmenuOpen((prev) => !prev);
                    setBrandsSubmenuOpen(false);
                  }}
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
                <ul
                  ref={companySubmenuRef}
                  className="nav-submenu"
                  id="company-submenu"
                  hidden={!companySubmenuOpen}
                >
                  <li>
                    <Link
                      href="/about"
                      className="nav-submenu-link"
                      aria-current={pathname === '/about' ? 'page' : undefined}
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
              </li>

              {/* Brands Submenu */}
              <li className="nav-item">
                <button
                  ref={brandsTriggerRef}
                  type="button"
                  className="nav-submenu-trigger"
                  id="brands-submenu-trigger"
                  aria-expanded={brandsSubmenuOpen ? 'true' : 'false'}
                  aria-controls="brands-submenu"
                  data-active={isBrandsActive ? 'true' : undefined}
                  onClick={() => {
                    setBrandsSubmenuOpen((prev) => !prev);
                    setCompanySubmenuOpen(false);
                  }}
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
                <ul
                  ref={brandsSubmenuRef}
                  className="nav-submenu"
                  id="brands-submenu"
                  hidden={!brandsSubmenuOpen}
                >
                  <li>
                    <Link
                      href="/brands"
                      className="nav-submenu-link"
                      aria-current={pathname === '/brands' ? 'page' : undefined}
                    >
                      <span className="nav-submenu-title">Brands Overview</span>
                      <span className="nav-submenu-desc">
                        NEOM Panels brand architecture: Starwoods &amp; NEOM Packing Plywood
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/brands#starwoods"
                      className="nav-submenu-link"
                    >
                      <span className="nav-submenu-title">Starwoods</span>
                      <span className="nav-submenu-desc">
                        Panels for furniture manufacturing, modular systems and commercial interiors
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/brands/neom-packing-plywood"
                      className="nav-submenu-link"
                      aria-current={pathname === '/brands/neom-packing-plywood' ? 'page' : undefined}
                    >
                      <span className="nav-submenu-title">NEOM Packing Plywood</span>
                      <span className="nav-submenu-desc">
                        Moisture-resistant packaging-grade plywood for cases, crates and components
                      </span>
                    </Link>
                  </li>
                </ul>
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
              className="btn btn--primary"
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
                  <Link
                    href="/brands"
                    className="mobile-submenu-link"
                    aria-current={pathname === '/brands' ? 'page' : undefined}
                  >
                    Brands Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="/brands#starwoods"
                    className="mobile-submenu-link"
                  >
                    Starwoods
                  </Link>
                </li>
                <li>
                  <Link
                    href="/brands/neom-packing-plywood"
                    className="mobile-submenu-link"
                    aria-current={pathname === '/brands/neom-packing-plywood' ? 'page' : undefined}
                  >
                    NEOM Packing Plywood
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
