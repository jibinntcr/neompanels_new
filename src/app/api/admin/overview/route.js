import { NextResponse } from 'next/server';
import { readEnquiriesFromDisk, readDocRequestsFromDisk } from '@/lib/storage';
import { getAllPosts } from '@/lib/posts-store';
import {
  getMongoStatus,
  saveRuntimeMongoConfig,
  getMongoDatabase
} from '@/lib/mongodb';

export async function GET() {
  try {
    const [mongoStatus, posts] = await Promise.all([
      getMongoStatus(),
      getAllPosts({ includeDrafts: true })
    ]);
    const enquiries = readEnquiriesFromDisk();
    const docRequests = readDocRequestsFromDisk();

    return NextResponse.json({
      ok: true,
      mongoStatus,
      metrics: {
        totalEnquiries: enquiries.length,
        receivedEnquiries: enquiries.filter((e) => (e.status || 'received') === 'received').length,
        inReviewEnquiries: enquiries.filter((e) => e.status === 'in-review').length,
        quotedEnquiries: enquiries.filter((e) => e.status === 'quoted').length,
        starwoodsEnquiries: enquiries.filter((e) => e.requirement?.brand === 'Starwoods').length,
        packingPlywoodEnquiries: enquiries.filter(
          (e) => e.requirement?.brand === 'NEOM Packing Plywood'
        ).length,
        totalDocRequests: docRequests.length,
        pendingDocRequests: docRequests.filter((d) => (d.status || 'pending') === 'pending').length,
        totalPosts: posts.length,
        publishedPosts: posts.filter((p) => (p.status || 'published') === 'published').length,
        newsPosts: posts.filter((p) => p.type === 'Company News').length,
        seoArticles: posts.filter((p) => p.type !== 'Company News').length
      }
    });
  } catch (_) {
    return NextResponse.json(
      { ok: false, errors: ['Failed to load admin overview.'] },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    if (body.action === 'configure-mongo') {
      saveRuntimeMongoConfig({
        mongodbUri: body.mongodbUri,
        dbName: body.dbName || 'neom_panels_db'
      });
    }

    const db = await getMongoDatabase();
    if (db) {
      const enquiries = readEnquiriesFromDisk();
      const docRequests = readDocRequestsFromDisk();
      const posts = await getAllPosts({ includeDrafts: true });

      for (const e of enquiries) {
        await db
          .collection('enquiries')
          .updateOne({ reference: e.reference }, { $set: e }, { upsert: true });
      }
      for (const d of docRequests) {
        await db
          .collection('document_requests')
          .updateOne({ reference: d.reference }, { $set: d }, { upsert: true });
      }
      for (const p of posts) {
        await db.collection('posts').updateOne({ id: p.id }, { $set: p }, { upsert: true });
      }
    }

    const mongoStatus = await getMongoStatus();
    return NextResponse.json({
      ok: true,
      mongoStatus
    });
  } catch (err) {
    return NextResponse.json(
      { ok: false, errors: [err.message || 'Could not update MongoDB settings.'] },
      { status: 500 }
    );
  }
}
