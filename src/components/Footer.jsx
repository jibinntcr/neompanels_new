import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <Link href="/" aria-label="NEOM Panels — Home">
              <img
                src="/assets/logo-full.png"
                alt="NEOM Panels — Engineered Excellence, Designed for Spaces"
                className="footer-logo-img"
                width="356"
                height="391"
                loading="lazy"
              />
            </Link>
            <p className="secondary-text">
              NEOM Panels is an Indian panel manufacturing business and the company behind Starwoods.
            </p>
            <Link href="/brands#starwoods" className="footer-brand-badge" aria-label="Explore Starwoods — A NEOM Panels Brand">
              <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--color-secondary)' }}>
                Official Product Brand
              </span>
              <img
                src="/assets/starwood-logo.png"
                alt="Starwood — The Plywood Specialist"
                className="starwood-logo-img--xs"
                width="615"
                height="149"
                loading="lazy"
              />
            </Link>
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
                <Link href="/industries" className="footer-link">
                  Industries &amp; Applications
                </Link>
              </li>
              <li>
                <Link href="/resources" className="footer-link">
                  Resources &amp; Literature
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="Footer Business Enquiries">
            <h2 className="footer-heading">Business Enquiries</h2>
            <ul className="footer-links" role="list">
              <li>
                <Link href="/enquiry" className="footer-link">
                  Submit a Business Enquiry
                </Link>
              </li>
              <li>
                <Link
                  href="/enquiry?category=Manufacturing+%26+recurring+supply"
                  className="footer-link"
                >
                  Manufacturing &amp; Recurring Supply
                </Link>
              </li>
              <li>
                <Link href="/enquiry?category=Project+requirement" className="footer-link">
                  Project Requirements
                </Link>
              </li>
              <li>
                <Link
                  href="/enquiry?category=Institutional+%26+public+procurement"
                  className="footer-link"
                >
                  Institutional Procurement
                </Link>
              </li>
              <li>
                <Link href="/enquiry?category=Distribution+partnership" className="footer-link">
                  Distribution Partnerships
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© 2026 NEOM Panels. All rights reserved.</p>
          <ul className="footer-legal-links" role="list">
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
