import Link from 'next/link';
import { getVerifiedContactDetails } from '@/lib/storage';

export default function Footer() {
  const contact = getVerifiedContactDetails();
  const phone = contact.phone || '+91 97454 50618';
  const email = contact.email || 'neompanels@gmail.com';
  const cleanPhoneHref = `tel:${phone.replace(/[^\d+]/g, '')}`;

  return (
    <footer className="arch-footer">
      {/* Top Architectural Accent Rule */}
      <div className="arch-footer__accent-bar" aria-hidden="true" />

      <div className="container">
        {/* Upper Brand & Direct Desk Strip */}
        <div className="arch-footer__top-band">
          <div className="arch-footer__brand-block">
            <Link href="/" className="arch-footer__logo-plaque" aria-label="NEOM Panels — Home">
              <img
                src="/assets/logo-horizontal.png"
                alt="NEOM Panels"
                width="240"
                height="78"
                loading="lazy"
                className="arch-footer__logo-img"
              />
            </Link>
            <p className="arch-footer__promise">
              Engineered Excellence, Designed for Spaces.
            </p>
            <p className="arch-footer__summary">
              Building an integrated engineered wood, interior materials, and project supply ecosystem across India and the GCC expansion corridor.
            </p>
          </div>

          <div className="arch-footer__desk-card">
            <span className="arch-footer__desk-eyebrow font-mono">DIRECT SPECIFICATION DESK</span>
            <p className="arch-footer__desk-title">Ready to discuss material requirements or partnerships?</p>
            <div className="arch-footer__desk-actions">
              <Link href="/enquiry" className="btn btn-gold btn-sm">
                <span>Start an Enquiry</span>
                <span aria-hidden="true">→</span>
              </Link>
              <a href={cleanPhoneHref} className="arch-footer__contact-chip font-mono">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{phone}</span>
              </a>
              <a href={`mailto:${email}`} className="arch-footer__contact-chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>{email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4-Column Architectural Directory */}
        <div className="arch-footer__grid">
          <nav aria-label="Footer Product Families">
            <h2 className="arch-footer__heading font-mono">01 / PRODUCT FAMILIES</h2>
            <ul className="arch-footer__list" role="list">
              <li><Link href="/products" className="arch-footer__link">Portfolio Overview</Link></li>
              <li><Link href="/products/plywood" className="arch-footer__link">Structural &amp; Specialty Plywood</Link></li>
              <li><Link href="/products/engineered-boards" className="arch-footer__link">Solid Engineered Boards (MDF &amp; HDHMR)</Link></li>
              <li><Link href="/products/decorative-surfaces" className="arch-footer__link">Architectural Decorative Surfaces</Link></li>
              <li><Link href="/enquiry?type=Sample+Request" className="arch-footer__link arch-footer__link--accent">Request Material Swatches →</Link></li>
            </ul>
          </nav>

          <nav aria-label="Footer Applications">
            <h2 className="arch-footer__heading font-mono">02 / INDUSTRIES SERVED</h2>
            <ul className="arch-footer__list" role="list">
              <li><Link href="/applications#construction" className="arch-footer__link">Construction &amp; Building</Link></li>
              <li><Link href="/applications#manufacturing" className="arch-footer__link">Manufacturing Facilities</Link></li>
              <li><Link href="/applications#packaging" className="arch-footer__link">Packaging &amp; Warehousing</Link></li>
              <li><Link href="/applications#furniture" className="arch-footer__link">Furniture &amp; Interiors</Link></li>
            </ul>
          </nav>

          <nav aria-label="Footer Company and Leadership">
            <h2 className="arch-footer__heading font-mono">03 / COMPANY &amp; LEADERSHIP</h2>
            <ul className="arch-footer__list" role="list">
              <li><Link href="/about" className="arch-footer__link">About NEOM Panels</Link></li>
              <li><Link href="/team" className="arch-footer__link">Executive Leadership Team</Link></li>
              <li><Link href="/growth-vision" className="arch-footer__link">Growth Vision &amp; GCC Horizon</Link></li>
              <li><Link href="/about#growth-model" className="arch-footer__link">4-Stage Growth Model</Link></li>
              <li><Link href="/resources" className="arch-footer__link">Resources &amp; Technical Desk</Link></li>
            </ul>
          </nav>

          <nav aria-label="Footer Stakeholders">
            <h2 className="arch-footer__heading font-mono">04 / PARTNER PATHWAYS</h2>
            <ul className="arch-footer__list" role="list">
              <li><Link href="/partners" className="arch-footer__link">Architects &amp; Interior Designers</Link></li>
              <li><Link href="/partners" className="arch-footer__link">Dealers &amp; Distributors</Link></li>
              <li><Link href="/partners" className="arch-footer__link">Furniture OEMs &amp; Contractors</Link></li>
              <li><Link href="/partners" className="arch-footer__link">Institutional Buyers</Link></li>
              <li><Link href="/enquiry" className="arch-footer__link arch-footer__link--accent">Contact Specification Desk →</Link></li>
            </ul>
          </nav>
        </div>

        {/* Bottom Legal & Origin Strip */}
        <div className="arch-footer__bottom">
          <div className="arch-footer__copyright">
            <span>© {new Date().getFullYear()} NEOM Panels. All rights reserved.</span>
            <span className="arch-footer__dot" aria-hidden="true">·</span>
            <span className="font-mono">India (Domestic Foundation) · GCC Expansion Corridor</span>
          </div>
          <div className="arch-footer__legal-links">
            <Link href="/privacy" className="arch-footer__legal-link">Privacy Policy</Link>
            <Link href="/terms" className="arch-footer__legal-link">Terms of Use</Link>
            <Link href="/site-map" className="arch-footer__legal-link">Site Map</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
