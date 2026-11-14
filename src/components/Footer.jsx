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
        {/* Top Brand Statement Banner */}
        <div className="footer-lead-banner">
          <div className="footer-lead-copy">
            <span className="footer-lead-kicker font-mono">NEOM PANELS · 2026–2036 BLUEPRINT</span>
            <h3 className="footer-lead-headline">Engineered Excellence, Designed for Spaces.</h3>
            <p className="footer-lead-sub">
              Building a next-generation engineered wood, interior materials, and project supply ecosystem across India and the GCC corridor.
            </p>
          </div>
          <div className="footer-lead-actions">
            <Link href="/enquiry?category=sample-request" className="btn btn--secondary btn--sm">
              Order Sample Box
            </Link>
            <Link href="/enquiry" className="btn btn--primary btn--sm">
              <span>Discuss Project Supply</span>
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        {/* 4-Column Footer Navigation Grid */}
        <div className="footer-grid">
          {/* Col 1: Brand & Parent Identity */}
          <div>
            <Link href="/" aria-label="NEOM Panels — Home">
              <img
                src="/assets/logo-full.png"
                alt="NEOM Panels"
                className="footer-logo-img"
                width="356"
                height="366"
                loading="lazy"
              />
            </Link>
            <p className="secondary-text" style={{ margin: '1rem 0 0.875rem' }}>
              Integrated manufacturer and project supply partner for furniture OEMs, architectural specifiers, and industrial packaging logistics.
            </p>
            <div className="footer-brand-pills">
              <span className="footer-brand-pill">NEOM Architectural</span>
              <span className="footer-brand-pill">Starwoods</span>
              <span className="footer-brand-pill">NEOM Packing Plywood</span>
            </div>
          </div>

          {/* Col 2: Materials & Products */}
          <nav aria-label="Footer Materials & Products">
            <h2 className="footer-heading">Materials &amp; Products</h2>
            <ul className="footer-links" role="list">
              <li>
                <Link href="/#portfolio" className="footer-link">
                  Structural &amp; Specialty Plywood
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="footer-link">
                  Marine Grade Plywood (IS:710)
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="footer-link">
                  High-Density HDHMR (Green Core)
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="footer-link">
                  Engineered MDF &amp; Pre-Laminated
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="footer-link">
                  Architectural Natural Veneers
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="footer-link">
                  High-Pressure Laminates (HPL)
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="footer-link">
                  6H Acrylic &amp; Charcoal Fluted Panels
                </Link>
              </li>
              <li>
                <Link href="/brands/neom-packing-plywood" className="footer-link">
                  Industrial Packaging Plywood
                </Link>
              </li>
            </ul>
          </nav>

          {/* Col 3: Ecosystem & Global Corridor */}
          <nav aria-label="Footer Ecosystem and Global Reach">
            <h2 className="footer-heading">Ecosystem &amp; Global</h2>
            <ul className="footer-links" role="list">
              <li>
                <a href="/#ecosystem" className="footer-link">
                  The 8-Pillar Ecosystem
                </a>
              </li>
              <li>
                <a href="/#gcc-corridor" className="footer-link">
                  India &amp; GCC Trade Corridor
                </a>
              </li>
              <li>
                <a href="/#roadmap" className="footer-link">
                  Roadmap to Scale (2026–2036)
                </a>
              </li>
              <li>
                <Link href="/industries" className="footer-link">
                  Industries &amp; Spaces We Support
                </Link>
              </li>
              <li>
                <Link href="/manufacturing" className="footer-link">
                  Manufacturing &amp; Quality Systems
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="footer-link">
                  E0 Low-Emissions &amp; Sustainability
                </Link>
              </li>
              <li>
                <Link href="/resources" className="footer-link">
                  Technical Spec Sheets &amp; CAD/BIM
                </Link>
              </li>
              <li>
                <Link href="/blog" className="footer-link">
                  Insights &amp; Industry Analysis
                </Link>
              </li>
            </ul>
          </nav>

          {/* Col 4: Corporate & Verified Contacts */}
          <div>
            <h2 className="footer-heading">Corporate &amp; Contact</h2>
            <ul className="footer-links" role="list">
              <li>
                <Link href="/about" className="footer-link">
                  About NEOM Panels
                </Link>
              </li>
              <li>
                <Link href="/team" className="footer-link">
                  Executive Leadership
                </Link>
              </li>
              <li>
                <Link href="/governance" className="footer-link">
                  Corporate Governance &amp; Registry
                </Link>
              </li>
              <li>
                <Link href="/enquiry" className="footer-link" style={{ fontWeight: 600, color: 'var(--color-forest)' }}>
                  Submit Project Requirement →
                </Link>
              </li>
            </ul>

            <div className="footer-contact-meta">
              <p className="footer-contact-line">
                <strong>Corporate HQ:</strong> India (Supply Hub for India &amp; GCC)
              </p>
              <p className="footer-contact-line">
                <strong>Direct Line:</strong>{' '}
                <a href={cleanPhoneHref} className="footer-contact-link font-mono">
                  {phone}
                </a>
              </p>
              <p className="footer-contact-line">
                <strong>Email:</strong>{' '}
                <a href={`mailto:${email}`} className="footer-contact-link font-mono">
                  {email}
                </a>
              </p>
              <p className="footer-contact-line">
                <strong>Digital Platform:</strong>{' '}
                <a href="https://www.neompanels.com" target="_blank" rel="noopener noreferrer" className="footer-contact-link font-mono">
                  www.neompanels.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <p>© 2026 NEOM Panels. All rights reserved. Strategic Blueprint 2026–2036.</p>
          <ul className="footer-legal-links" role="list">
            <li>
              <a href="/#gcc-corridor" className="footer-link">
                GCC Trade Corridor
              </a>
            </li>
            <li>
              <Link href="/site-map" className="footer-link">
                Site Map
              </Link>
            </li>
            <li>
              <a href="/sitemap.xml" className="footer-link">
                XML Sitemap
              </a>
            </li>
            <li>
              <Link href="/privacy" className="footer-link">
                Privacy Notice
              </Link>
            </li>
            <li>
              <Link href="/terms" className="footer-link">
                Website Terms
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
