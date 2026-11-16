import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found',
  description:
    'The requested page could not be found. Explore NEOM Panels, Starwoods and NEOM Packing Plywood, or submit a Business Enquiry.',
  robots: {
    index: false,
    follow: true
  }
};

export default function NotFound() {
  return (
    <main id="main-content">
      <section className="page-header-dark" aria-labelledby="main-heading">
        <div className="container page-header-inner">
          <span className="section-eyebrow text-gold">404 · Page Not Found</span>
          <h1 id="main-heading" className="page-hero-title text-warm">
            We couldn’t find that page.
          </h1>
          <p className="page-hero-lead text-warm-muted">
            The link you followed may have moved or been updated. Explore NEOM Panels and our active
            brands using the links below.
          </p>
          <div className="page-header-cta-row" style={{ marginTop: '1.75rem' }}>
            <Link href="/" className="btn btn-gold">
              <span>Return Home</span>
            </Link>
            <Link href="/brands" className="btn btn-outline-light">
              <span>Explore Our Brands</span>
            </Link>
            <Link href="/enquiry" className="btn btn-outline-light">
              <span>Business Enquiry</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
