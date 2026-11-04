import Link from 'next/link';
import { getVerifiedContactDetails } from '@/lib/storage';

export default function Footer() {
  const contact = getVerifiedContactDetails();
  const cleanPhoneHref = contact.phone ? `tel:${contact.phone.replace(/[^\d+]/g, '')}` : null;
  const cleanWhatsappHref = contact.whatsapp
    ? `https://wa.me/${contact.whatsapp.replace(/\D/g, '')}`
    : null;

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
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
            <p className="secondary-text" style={{ marginBottom: '0.875rem' }}>
              NEOM Panels manufactures wood-panel products for furniture, interior projects and
              industrial packaging from its dedicated facility in India.
            </p>
            <p className="caption" style={{ margin: 0, color: 'var(--color-secondary)' }}>
              <strong>Product Brands:</strong>{' '}
              <Link href="/brands#starwoods" className="footer-contact-link">
                Starwoods
              </Link>{' '}
              ·{' '}
              <Link href="/brands/neom-packing-plywood" className="footer-contact-link">
                NEOM Packing Plywood
              </Link>
            </p>
          </div>

          <nav aria-label="Footer Company">
            <h2 className="footer-heading">Company</h2>
            <ul className="footer-links" role="list">
              <li>
                <Link href="/about" className="footer-link">
                  About NEOM
                </Link>
              </li>
              <li>
                <Link href="/team" className="footer-link">
                  Our Leadership
                </Link>
              </li>
              <li>
                <Link href="/governance" className="footer-link">
                  Governance &amp; Corporate Information
                </Link>
              </li>
              <li>
                <Link href="/manufacturing" className="footer-link">
                  Manufacturing
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="footer-link">
                  Sustainability
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Footer Brands and Applications">
            <h2 className="footer-heading">Brands &amp; Applications</h2>
            <ul className="footer-links" role="list">
              <li>
                <Link href="/brands" className="footer-link">
                  Brands Overview
                </Link>
              </li>
              <li>
                <Link href="/brands#starwoods" className="footer-link">
                  Starwoods
                </Link>
              </li>
              <li>
                <Link href="/brands/neom-packing-plywood" className="footer-link">
                  NEOM Packing Plywood
                </Link>
              </li>
              <li>
                <Link href="/industries" className="footer-link">
                  Industries &amp; Applications
                </Link>
              </li>
              <li>
                <Link href="/resources" className="footer-link">
                  Resources &amp; Documents
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h2 className="footer-heading">Enquiries &amp; Contact</h2>
            <ul className="footer-links" role="list">
              <li>
                <Link href="/enquiry" className="footer-link" style={{ fontWeight: 600, color: 'var(--color-forest)' }}>
                  Submit a Business Enquiry →
                </Link>
              </li>
              <li>
                <Link
                  href="/enquiry?brand=neom-packing-plywood&category=industrial-packaging"
                  className="footer-link"
                >
                  Packing Plywood Quotation
                </Link>
              </li>
              <li>
                <Link href="/enquiry?category=manufacturing" className="footer-link">
                  Manufacturing &amp; Recurring Supply
                </Link>
              </li>
              <li>
                <Link href="/enquiry?category=project-requirement" className="footer-link">
                  Project Requirements
                </Link>
              </li>
              <li>
                <Link href="/enquiry?category=institutional-procurement" className="footer-link">
                  Institutional Procurement
                </Link>
              </li>
              <li>
                <Link href="/enquiry?category=distribution-partnership" className="footer-link">
                  Distribution Partnerships
                </Link>
              </li>
            </ul>

            <div className="footer-contact-meta">
              <p className="footer-contact-line">
                <strong>Manufacturing &amp; Operations:</strong>{' '}
                {contact.address || contact.factoryLocation}
              </p>
              {contact.phone && cleanPhoneHref ? (
                <p className="footer-contact-line">
                  <strong>Phone:</strong>{' '}
                  <a href={cleanPhoneHref} className="footer-contact-link">
                    {contact.phone}
                  </a>
                </p>
              ) : null}
              {contact.email ? (
                <p className="footer-contact-line">
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${contact.email}`} className="footer-contact-link">
                    {contact.email}
                  </a>
                </p>
              ) : null}
              {contact.whatsapp && cleanWhatsappHref ? (
                <p className="footer-contact-line">
                  <strong>WhatsApp:</strong>{' '}
                  <a
                    href={cleanWhatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-contact-link"
                  >
                    Chat on WhatsApp
                  </a>
                </p>
              ) : null}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 NEOM Panels. All rights reserved.</p>
          <ul className="footer-legal-links" role="list">
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
