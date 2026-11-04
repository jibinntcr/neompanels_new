import AdminPortalClient from '@/components/AdminPortalClient';
import { readEnquiriesFromDisk, readDocRequestsFromDisk } from '@/lib/storage';
import { getAllPosts } from '@/lib/posts-store';
import { getMongoStatus } from '@/lib/mongodb';
import { buildPageMetadata } from '@/lib/seo';

export const dynamic = 'force-dynamic';

export const metadata = buildPageMetadata({
  title: 'Admin Operations & CMS Portal — NEOM Panels',
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
    <main id="main-content" className="admin-standalone-main">
      <AdminPortalClient
        initialEnquiries={enquiries}
        initialDocRequests={docRequests}
        initialPosts={posts}
        initialMongoStatus={mongoStatus}
      />
    </main>
  );
}
