import Link from 'next/link';
import { getVerifiedContactDetails } from '@/lib/storage';

export default function Footer() {
  const contact = getVerifiedContactDetails();
  const phone = contact.phone || '+91 97454 50618';
  const email = contact.email || 'neompanels@gmail.com';
  const cleanPhoneHref = `tel:${phone.replace(/[^\d+]/g, '')}`;

  return (
    <footer className="site-footer">
      <div className="container">
        {/* 4-Column Footer Navigation Grid */}
        <div className="footer-grid">
          {/* Col 1: Brand & Master Positioning */}
          <div className="footer-brand-col">
            <Link href="/" aria-label="NEOM Panels — Home">
              <img
                src="/assets/neom-wordmark-clean.png"
                alt="NEOM Panels"
                className="footer-logo-wordmark"
                width="220"
                height="78"
                loading="lazy"
              />
            </Link>
            <p className="footer-tagline-text">
              Engineered Excellence, Designed for Spaces.
            </p>
            <p className="secondary-text" style={{ margin: '0.75rem 0 1.25rem', fontSize: '0.9375rem', lineHeight: '1.6' }}>
              Building an integrated engineered wood, interior materials, and project supply ecosystem for India and global markets.
            </p>
            <div className="footer-contact-block">
              <a href={cleanPhoneHref} className="footer-contact-item font-mono">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                <span>{phone}</span>
              </a>
              <a href={`mailto:${email}`} className="footer-contact-item">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
                <span>{email}</span>
              </a>
            </div>
          </div>

          {/* Col 2: Product Families */}
          <nav aria-label="Footer Product Families">
            <h2 className="footer-heading">Product Families</h2>
            <ul className="footer-links" role="list">
              <li>
                <Link href="/products" className="footer-link">
                  Portfolio Overview
                </Link>
              </li>
              <li>
                <Link href="/products/plywood" className="footer-link">
                  Structural &amp; Specialty Plywood
                </Link>
              </li>
              <li>
                <Link href="/products/plywood" className="footer-sublink">
                  • Premium Plywood
                </Link>
              </li>
              <li>
                <Link href="/products/plywood" className="footer-sublink">
                  • Marine Plywood
                </Link>
              </li>
              <li>
                <Link href="/products/plywood" className="footer-sublink">
                  • BWR / BWP Plywood
                </Link>
              </li>
              <li>
                <Link href="/products/engineered-boards" className="footer-link" style={{ marginTop: '0.5rem' }}>
                  Engineered Boards
                </Link>
              </li>
              <li>
                <Link href="/products/engineered-boards" className="footer-sublink">
                  • MDF &amp; HDHMR Core
                </Link>
              </li>
              <li>
                <Link href="/products/engineered-boards" className="footer-sublink">
                  • Pre-Laminated MDF
                </Link>
              </li>
              <li>
                <Link href="/products/decorative-surfaces" className="footer-link" style={{ marginTop: '0.5rem' }}>
                  Decorative Surfaces
                </Link>
              </li>
              <li>
                <Link href="/products/decorative-surfaces" className="footer-sublink">
                  • Veneers &amp; Laminates
                </Link>
              </li>
              <li>
                <Link href="/products/decorative-surfaces" className="footer-sublink">
                  • Acrylic &amp; Charcoal Panels
                </Link>
              </li>
            </ul>
          </nav>

          {/* Col 3: Applications & Partners */}
          <nav aria-label="Footer Applications and Partners">
            <h2 className="footer-heading">Applications &amp; Sectors</h2>
            <ul className="footer-links" role="list">
              <li>
                <Link href="/applications#construction" className="footer-link">
                  Construction
                </Link>
              </li>
              <li>
                <Link href="/applications#manufacturing" className="footer-link">
                  Manufacturing Facilities
                </Link>
              </li>
              <li>
                <Link href="/applications#packaging" className="footer-link">
                  Packaging &amp; Warehousing
                </Link>
              </li>
              <li>
                <Link href="/applications#furniture" className="footer-link">
                  Furniture &amp; Interiors
                </Link>
              </li>
              <li style={{ marginTop: '1.25rem' }}>
                <h3 className="footer-subheading">Partnerships</h3>
              </li>
              <li>
                <Link href="/partners#architects" className="footer-link">
                  Architects &amp; Designers
                </Link>
              </li>
              <li>
                <Link href="/partners#dealers" className="footer-link">
                  Dealers &amp; Distributors
                </Link>
              </li>
              <li>
                <Link href="/partners#contractors" className="footer-link">
                  Contractors &amp; Builders
                </Link>
              </li>
              <li>
                <Link href="/partners#institutional" className="footer-link">
                  Institutional Buyers
                </Link>
              </li>
            </ul>
          </nav>

          {/* Col 4: Company & Vision */}
          <nav aria-label="Footer Company and Vision">
            <h2 className="footer-heading">Company &amp; Vision</h2>
            <ul className="footer-links" role="list">
              <li>
                <Link href="/about" className="footer-link">
                  About NEOM Panels
                </Link>
              </li>
              <li>
                <Link href="/about#vision-mission" className="footer-link">
                  Vision &amp; Mission
                </Link>
              </li>
              <li>
                <Link href="/about#pillars" className="footer-link">
                  The 8-Pillar Ecosystem
                </Link>
              </li>
              <li>
                <Link href="/about#growth-model" className="footer-link">
                  4-Stage Growth Model
                </Link>
              </li>
              <li>
                <Link href="/growth-vision" className="footer-link">
                  Growth Vision &amp; Roadmap
                </Link>
              </li>
              <li>
                <Link href="/growth-vision#gcc-corridor" className="footer-link">
                  India &amp; GCC Corridor
                </Link>
              </li>
              <li>
                <Link href="/resources" className="footer-link">
                  Resource Enquiry
                </Link>
              </li>
              <li>
                <Link href="/enquiry" className="footer-link">
                  Direct Enquiry Desk
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="footer-bottom">
          <p className="copyright-text">
            © {new Date().getFullYear()} NEOM Panels. All rights reserved. Registered Indian Wood-Panel Business.
          </p>
          <ul className="footer-legal-links" role="list">
            <li>
              <Link href="/privacy" className="footer-legal-link">
                Privacy Policy
              </Link>
            </li>
            <li>
              <span className="footer-legal-divider" aria-hidden="true">·</span>
            </li>
            <li>
              <Link href="/terms" className="footer-legal-link">
                Terms of Use
              </Link>
            </li>
            <li>
              <span className="footer-legal-divider" aria-hidden="true">·</span>
            </li>
            <li>
              <Link href="/site-map" className="footer-legal-link">
                Site Map
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
