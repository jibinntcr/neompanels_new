import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found — Explore NEOM Panels Wood-Panel Solutions',
  description:
    'The requested page could not be found. Explore NEOM Panels’ wood-panel manufacturing, Starwoods furniture & interior panels, NEOM Packing Plywood, or submit a B2B enquiry.',
  robots: {
    index: false,
    follow: true
  }
};

export default function NotFound() {
  return (
    <main id="main-content">
      <section className="page-header section--architectural-grid" aria-labelledby="main-heading">
        <div className="container hero-animate">
          <p className="eyebrow">404 · PAGE NOT FOUND</p>
          <h1 id="main-heading" tabIndex={-1} className="page-title">
            We couldn’t find that page.
          </h1>
          <p className="lead-text">
            The link you followed may have moved or been updated. Use the direct links below to
            explore NEOM Panels’ manufacturing capabilities, product brands, technical documents or
            B2B enquiry desk.
          </p>
          <div className="btn-group">
            <Link href="/" className="btn btn--primary">
              Return to NEOM Panels Home →
            </Link>
            <Link href="/enquiry" className="btn btn--secondary">
              Submit a Business Enquiry
            </Link>
            <Link href="/site-map" className="editorial-link" style={{ marginLeft: '0.5rem' }}>
              <span>View Full Site Map</span>
              <span className="link-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
