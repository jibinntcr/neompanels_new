import Link from 'next/link';
import { buildPageMetadata } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Industries',
  description:
    'Explore how NEOM Panels and its two active brands—Starwoods and NEOM Packing Plywood—support furniture manufacturing, construction and interior fit-outs, industrial packaging and institutional buyers.',
  path: '/applications'
});

export default function ApplicationsPage() {
  return (
    <main id="main-content" className="page-view">
      {/* Page Header */}
      <section className="page-header-dark" aria-labelledby="main-heading">
        <div className="container page-header-inner">
          <nav className="breadcrumb-nav" aria-label="Breadcrumb">
            <Link href="/" className="breadcrumb-link">Home</Link>
            <span className="breadcrumb-sep" aria-hidden="true">/</span>
            <span className="breadcrumb-current">Industries</span>
          </nav>

          <span className="section-eyebrow text-gold">Industries &amp; Applications</span>
          <h1 id="main-heading" className="page-hero-title text-warm">
            Organised around real customer applications.
          </h1>
          <p className="page-hero-lead text-warm-muted">
            Through Starwoods and NEOM Packing Plywood, NEOM Panels helps buyers across furniture
            workshops, building fit-outs, industrial packaging lines and institutional procurement
            identify suitable panel options.
          </p>
          <div className="page-header-cta-row" style={{ marginTop: '1.75rem' }}>
            <Link href="/enquiry" className="btn btn-gold">
              <span>Business Enquiry</span>
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/brands" className="btn btn-outline-light">
              <span>Explore Our Brands</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Four Industry Contexts */}
      <section className="section-spacing bg-white" aria-label="Industries Served">
        <div className="container">
          <div className="applications-detailed-list">
            {/* Sector 1: Furniture Manufacturing & Modular Joinery */}
            <article className="application-detail-block" id="furniture">
              <div className="application-detail-grid">
                <div className="application-detail-img-wrap">
                  <img
                    src="/assets/sector-furniture.jpg"
                    alt="Furniture workshop and modular cabinetry fabrication context"
                    className="application-detail-img"
                    width="700"
                    height="450"
                    loading="eager"
                  />
                </div>

                <div className="application-detail-copy">
                  <span className="section-eyebrow">Application 01 · Furniture &amp; Joinery</span>
                  <h2 className="application-detail-title">Furniture Manufacturing &amp; Interiors</h2>
                  <p className="application-lead-paragraph">
                    Furniture manufacturers and modular joinery workshops sourcing plywood and
                    engineered boards matched to machining needs, screw holding and dry or humid
                    interior exposure.
                  </p>

                  <div className="relevant-products-box">
                    <span className="relevant-box-title">Relevant Brand &amp; Categories</span>
                    <ul className="relevant-products-list" role="list">
                      <li>
                        <Link href="/brands/starwoods" className="relevant-product-link">
                          <strong>Starwoods:</strong> Plywood and engineered boards, including MDF
                          and HDHMR where available in the current range.
                        </Link>
                      </li>
                      <li>
                        <Link href="/products/engineered-boards" className="relevant-product-link">
                          <strong>Engineered Boards:</strong> Supporting guidance on dry-interior
                          MDF versus moisture-resistant HDHMR options.
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="application-actions">
                    <Link
                      href="/enquiry?brand=Starwoods&role=Furniture+Manufacturers"
                      className="btn btn-primary"
                    >
                      <span>Discuss Furniture Requirements</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Sector 2: Industrial Packaging */}
            <article className="application-detail-block" id="packaging">
              <div className="application-detail-grid application-detail-grid--reverse">
                <div className="application-detail-copy">
                  <span className="section-eyebrow">Application 02 · Transit &amp; Protection</span>
                  <h2 className="application-detail-title">Industrial Packaging &amp; Warehousing</h2>
                  <p className="application-lead-paragraph">
                    Industrial packaging businesses, crate fabricators and plant dispatch teams
                    sourcing moisture-resistant (MR) packaging-grade plywood for packing cases,
                    crates, dividers and protective liners.
                  </p>

                  <div className="relevant-products-box">
                    <span className="relevant-box-title">Relevant Brand</span>
                    <ul className="relevant-products-list" role="list">
                      <li>
                        <Link href="/brands/neom-packing-plywood" className="relevant-product-link">
                          <strong>NEOM Packing Plywood:</strong> Plywood for industrial packaging
                          requirements, guided by intended application and available specifications.
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="application-actions">
                    <Link
                      href="/enquiry?brand=NEOM+Packing+Plywood&role=Industrial+Packaging+Businesses&type=Industrial+Packaging+%2F+Packing+Plywood"
                      className="btn btn-primary"
                    >
                      <span>Discuss Packaging Plywood</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>

                <div className="application-detail-img-wrap">
                  <img
                    src="/assets/sector-packaging.jpg"
                    alt="Industrial plywood packing crates and warehouse handling context"
                    className="application-detail-img"
                    width="700"
                    height="450"
                    loading="lazy"
                  />
                </div>
              </div>
            </article>

            {/* Sector 3: Builders, Interior Contractors & Institutional Projects */}
            <article className="application-detail-block" id="construction">
              <div className="application-detail-grid">
                <div className="application-detail-img-wrap">
                  <img
                    src="/assets/sector-construction.jpg"
                    alt="Building interior fit-out and site joinery context"
                    className="application-detail-img"
                    width="700"
                    height="450"
                    loading="lazy"
                  />
                </div>

                <div className="application-detail-copy">
                  <span className="section-eyebrow">Application 03 · Building &amp; Institutional Fit-Outs</span>
                  <h2 className="application-detail-title">Builders, Contractors &amp; Institutional Buyers</h2>
                  <p className="application-lead-paragraph">
                    Builders, interior contractors and government or institutional buyers reviewing
                    plywood and engineered-board options for partitions, storage joinery and utility
                    fit-outs against project schedules or tender specifications.
                  </p>

                  <div className="relevant-products-box">
                    <span className="relevant-box-title">Relevant Brand &amp; Routes</span>
                    <ul className="relevant-products-list" role="list">
                      <li>
                        <Link href="/brands/starwoods" className="relevant-product-link">
                          <strong>Starwoods:</strong> Plywood and engineered boards selected per
                          interior zone and available specification.
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/enquiry?role=Government+%26+Institutional+Buyers&type=Institutional+%26+public+procurement"
                          className="relevant-product-link"
                        >
                          <strong>Institutional &amp; Tender Enquiries:</strong> Share your
                          procurement reference and material schedule for review.
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="application-actions">
                    <Link
                      href="/enquiry?role=Builders+%26+Interior+Contractors&type=Project+Supply"
                      className="btn btn-primary"
                    >
                      <span>Discuss Project Supply</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </article>

            {/* Sector 4: Dealers, Distributors & Recurring Industrial Supply */}
            <article className="application-detail-block" id="manufacturing">
              <div className="application-detail-grid application-detail-grid--reverse">
                <div className="application-detail-copy">
                  <span className="section-eyebrow">Application 04 · Trade &amp; Repeat Supply</span>
                  <h2 className="application-detail-title">Dealers, Distributors &amp; Industrial Plants</h2>
                  <p className="application-lead-paragraph">
                    Dealers, regional distributors and manufacturing plants coordinating ongoing
                    orders across Starwoods or NEOM Packing Plywood with clear communication on
                    order progress and delivery expectations.
                  </p>

                  <div className="relevant-products-box">
                    <span className="relevant-box-title">Relevant Information</span>
                    <ul className="relevant-products-list" role="list">
                      <li>
                        <Link href="/manufacturing" className="relevant-product-link">
                          <strong>Manufacturing &amp; Specification Alignment:</strong> Review the
                          five parameters our team checks before confirming supply.
                        </Link>
                      </li>
                      <li>
                        <Link href="/partners" className="relevant-product-link">
                          <strong>Partner Pathways:</strong> Explore dealer, distributor and
                          recurring business enquiries.
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="application-actions">
                    <Link
                      href="/enquiry?role=Dealers+%26+Distributors&type=Distribution+partnership"
                      className="btn btn-primary"
                    >
                      <span>Start a Trade Conversation</span>
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>

                <div className="application-detail-img-wrap">
                  <img
                    src="/assets/sector-manufacturing.jpg"
                    alt="Wood-panel processing and industrial dispatch environment"
                    className="application-detail-img"
                    width="700"
                    height="450"
                    loading="lazy"
                  />
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
