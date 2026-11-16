import Link from 'next/link';
import { getVerifiedContactDetails } from '@/lib/storage';
import { PARENT_COMPANY } from '@/lib/portfolio-data';

export default function Footer() {
  const contact = getVerifiedContactDetails();
  const phone = contact.phone || PARENT_COMPANY.phone;
  const email = contact.email || PARENT_COMPANY.email;
  const cleanPhoneHref = `tel:${phone.replace(/[^\d+]/g, '')}`;

  return (
    <footer className="arch-footer">
      <div className="arch-footer__accent-bar" aria-hidden="true" />

      <div className="container">
        {/* Compact Corporate Identity Strip */}
        <div className="arch-footer__identity-band">
          <Link href="/" className="arch-footer__logo-plaque" aria-label="NEOM Panels — Home">
            <img
              src="/assets/logo-horizontal.png"
              alt="NEOM Panels"
              width="220"
              height="72"
              loading="lazy"
              className="arch-footer__logo-img"
            />
          </Link>
          <div className="arch-footer__identity-copy">
            <p className="arch-footer__descriptor">
              {PARENT_COMPANY.footerDescriptor}
            </p>
            <p className="arch-footer__promise">
              {PARENT_COMPANY.tagline}
            </p>
          </div>
        </div>

        {/* 4-Column Corporate Directory: Company / Our Brands / Business / Contact */}
        <div className="arch-footer__grid">
          <nav aria-label="Footer Company">
            <h2 className="arch-footer__heading">Company</h2>
            <ul className="arch-footer__list" role="list">
              <li><Link href="/about" className="arch-footer__link">About NEOM</Link></li>
              <li><Link href="/about#purpose-vision-values" className="arch-footer__link">Purpose, Vision &amp; Values</Link></li>
              <li><Link href="/manufacturing" className="arch-footer__link">Manufacturing</Link></li>
              <li><Link href="/responsibility" className="arch-footer__link">Responsibility</Link></li>
              <li><Link href="/team" className="arch-footer__link">Leadership</Link></li>
              <li><Link href="/governance" className="arch-footer__link">Governance</Link></li>
            </ul>
          </nav>

          <nav aria-label="Footer Our Brands">
            <h2 className="arch-footer__heading">Our Brands</h2>
            <ul className="arch-footer__list" role="list">
              <li><Link href="/brands" className="arch-footer__link">Our Brands Overview</Link></li>
              <li><Link href="/brands/starwoods" className="arch-footer__link">Starwoods</Link></li>
              <li><Link href="/brands/neom-packing-plywood" className="arch-footer__link">NEOM Packing Plywood</Link></li>
              <li><Link href="/products" className="arch-footer__link">Material Categories</Link></li>
            </ul>
          </nav>

          <nav aria-label="Footer Business">
            <h2 className="arch-footer__heading">Business</h2>
            <ul className="arch-footer__list" role="list">
              <li><Link href="/partners" className="arch-footer__link">Partners</Link></li>
              <li><Link href="/applications" className="arch-footer__link">Industries</Link></li>
              <li><Link href="/resources" className="arch-footer__link">Product Information</Link></li>
              <li><Link href="/enquiry?type=Sample+Request" className="arch-footer__link">Sample Request</Link></li>
            </ul>
          </nav>

          <nav aria-label="Footer Contact">
            <h2 className="arch-footer__heading">Contact</h2>
            <ul className="arch-footer__list" role="list">
              <li><Link href="/enquiry" className="arch-footer__link arch-footer__link--accent">Business Enquiry →</Link></li>
              <li><a href={cleanPhoneHref} className="arch-footer__link">{phone}</a></li>
              <li><a href={`mailto:${email}`} className="arch-footer__link">{email}</a></li>
              <li><span className="arch-footer__link" style={{ cursor: 'default' }}>India</span></li>
            </ul>
          </nav>
        </div>

        {/* Bottom Legal Strip */}
        <div className="arch-footer__bottom">
          <div className="arch-footer__copyright">
            <span>© {new Date().getFullYear()} NEOM Panels. All rights reserved.</span>
            <span className="arch-footer__dot" aria-hidden="true">·</span>
            <span>India</span>
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
