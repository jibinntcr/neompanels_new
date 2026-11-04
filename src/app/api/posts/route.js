import { NextResponse } from 'next/server';
import {
  getAllPosts,
  getPostBySlug,
  upsertPost,
  deletePostBySlugOrId
} from '@/lib/posts-store';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const slug = (searchParams.get('slug') || '').trim();
    const includeDrafts = searchParams.get('includeDrafts') === 'true';

    if (slug) {
      const post = await getPostBySlug(slug, { includeDrafts });
      if (!post) {
        return NextResponse.json({ ok: false, error: 'Post not found.' }, { status: 404 });
      }
      return NextResponse.json({ ok: true, post });
    }

    const allPosts = await getAllPosts({ includeDrafts });

    const typeFilter = (searchParams.get('type') || '').trim();
    const categoryFilter = (searchParams.get('category') || '').trim();
    const brandFilter = (searchParams.get('brand') || '').trim();
    const statusFilter = (searchParams.get('status') || '').trim();
    const search = (searchParams.get('search') || '').trim().toLowerCase();

    let filtered = [...allPosts];

    if (typeFilter && typeFilter !== 'all') {
      filtered = filtered.filter(
        (p) => (p.type || '').toLowerCase() === typeFilter.toLowerCase()
      );
    }

    if (categoryFilter && categoryFilter !== 'all') {
      filtered = filtered.filter(
        (p) => (p.category || '').toLowerCase() === categoryFilter.toLowerCase()
      );
    }

    if (brandFilter && brandFilter !== 'all') {
      filtered = filtered.filter(
        (p) => (p.brand || '').toLowerCase() === brandFilter.toLowerCase()
      );
    }

    if (statusFilter && statusFilter !== 'all') {
      filtered = filtered.filter(
        (p) => (p.status || 'published').toLowerCase() === statusFilter.toLowerCase()
      );
    }

    if (search) {
      filtered = filtered.filter((p) => {
        const haystack = [
          p.title,
          p.summary,
          p.category,
          p.type,
          p.brand,
          p.author,
          ...(p.seoKeywords || []),
          ...(p.keyTakeaways || [])
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        return haystack.includes(search);
      });
    }

    return NextResponse.json({
      ok: true,
      total: allPosts.length,
      filteredCount: filtered.length,
      posts: filtered
    });
  } catch (_) {
    return NextResponse.json(
      { ok: false, errors: ['Failed to load blog & news posts.'] },
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    const payload = await request.json();
    if (!payload.title || String(payload.title).trim().length < 4) {
      return NextResponse.json(
        { ok: false, errors: ['Please enter a title (at least 4 characters).'] },
        { status: 422 }
      );
    }
    if (!payload.summary || String(payload.summary).trim().length < 10) {
      return NextResponse.json(
        { ok: false, errors: ['Please enter an article/news summary (at least 10 characters).'] },
        { status: 422 }
      );
    }

    const saved = await upsertPost(payload);
    return NextResponse.json({ ok: true, post: saved }, { status: 201 });
  } catch (err) {
    return NextResponse.json(
      { ok: false, errors: [err.message || 'Could not save article.'] },
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    const { searchParams } = new URL(request.url);
    const idOrSlug = (searchParams.get('id') || searchParams.get('slug') || '').trim();
    if (!idOrSlug) {
      return NextResponse.json(
        { ok: false, errors: ['Post ID or slug is required.'] },
        { status: 400 }
      );
    }
    const deleted = await deletePostBySlugOrId(idOrSlug);
    if (!deleted) {
      return NextResponse.json(
        { ok: false, errors: ['Post not found.'] },
        { status: 404 }
      );
    }
    return NextResponse.json({ ok: true, deleted: idOrSlug });
  } catch (_) {
    return NextResponse.json(
      { ok: false, errors: ['Could not delete post.'] },
      { status: 500 }
    );
  }
}
