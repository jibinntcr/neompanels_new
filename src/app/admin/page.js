import Link from 'next/link';
import AdminPortalClient from '@/components/AdminPortalClient';
import { readEnquiriesFromDisk, readDocRequestsFromDisk } from '@/lib/storage';
import { getAllPosts } from '@/lib/posts-store';
import { getMongoStatus } from '@/lib/mongodb';
import { buildPageMetadata } from '@/lib/seo';

export const dynamic = 'force-dynamic';

export const metadata = buildPageMetadata({
  title: 'Backend Operations & Content Portal — NEOM Panels Admin',
  description:
    'NEOM Panels enterprise backend portal for managing B2B enquiries, technical document requests, SEO blog articles, company news and MongoDB database synchronization.',
  path: '/admin'
});

export default async function AdminPortalPage() {
  const enquiries = readEnquiriesFromDisk();
  const docRequests = readDocRequestsFromDisk();
  const [posts, mongoStatus] = await Promise.all([
    getAllPosts({ includeDrafts: true }),
    getMongoStatus()
  ]);

  return (
    <main id="main-content">
      <section
        className="page-header section--architectural-grid"
        aria-labelledby="main-heading"
      >
        <div className="container hero-animate">
          <div className="section-header-split" style={{ marginBottom: 0 }}>
            <div>
              <p className="eyebrow">NEOM PANELS · ENTERPRISE BACKEND &amp; CMS PORTAL</p>
              <h1 id="main-heading" tabIndex={-1} className="page-title">
                Operations, Enquiries &amp; SEO Content Portal
              </h1>
              <p className="lead-text" style={{ marginBottom: 0 }}>
                Manage incoming B2B enquiries, technical document requests, SEO blog articles and
                company news—with multi-parameter filtering and MongoDB synchronization.
              </p>
            </div>
            <div className="section-header-actions">
              <div className="btn-group">
                <Link href="/blog" className="btn btn--secondary">
                  View Public Blog &amp; News →
                </Link>
                <Link href="/enquiry" className="btn btn--primary">
                  Open Public Enquiry Form →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--no-border reveal-once">
        <div className="container">
          <AdminPortalClient
            initialEnquiries={enquiries}
            initialDocRequests={docRequests}
            initialPosts={posts}
            initialMongoStatus={mongoStatus}
          />
        </div>
      </section>
    </main>
  );
}
