import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getAllPosts, getPostBySlug } from '@/lib/posts-store';
import { buildPageMetadata, getBreadcrumbJsonLd, SITE_URL } from '@/lib/seo';

export const dynamic = 'force-dynamic';

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug, { includeDrafts: true });
  if (!post) {
    return buildPageMetadata({
      title: 'Article Not Found',
      description: 'The requested article or news update could not be found.',
      path: `/blog/${params.slug}`
    });
  }

  return buildPageMetadata({
    absoluteTitle: post.seoTitle || `${post.title} | NEOM Panels`,
    description: post.seoDescription || post.summary,
    path: `/blog/${post.slug}`,
    ogImage: post.coverImage || '/assets/hero-neom-flagship.jpg',
    ogImageAlt: post.coverImageAlt || post.title,
    keywords: post.seoKeywords || [],
    type: 'article'
  });
}

export default async function BlogArticleDetailPage({ params }) {
  const post = await getPostBySlug(params.slug, { includeDrafts: true });
  if (!post) {
    notFound();
  }

  const allPosts = await getAllPosts({ includeDrafts: false });
  const relatedPosts = allPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const formattedDate = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      })
    : 'November 2026';

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      getBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Insights & News', path: '/blog' },
        { name: post.title, path: `/blog/${post.slug}` }
      ]),
      {
        '@type': post.type === 'Company News' ? 'NewsArticle' : 'Article',
        '@id': `${SITE_URL}/blog/${post.slug}#article`,
        headline: post.title,
        description: post.seoDescription || post.summary,
        image: `${SITE_URL}${post.coverImage || '/assets/hero-neom-flagship.jpg'}`,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt || post.publishedAt,
        author: {
          '@type': 'Organization',
          name: post.author || 'NEOM Panels Technical Desk',
          url: SITE_URL
        },
        publisher: {
          '@type': 'Organization',
          name: 'NEOM Panels',
          url: SITE_URL,
          logo: {
            '@type': 'ImageObject',
            url: `${SITE_URL}/assets/logo-header.png`
          }
        },
        keywords: (post.seoKeywords || []).join(', '),
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${SITE_URL}/blog/${post.slug}`
        }
      }
    ]
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      {/* ARTICLE HEADER */}
      <section
        className="page-header section--architectural-grid"
        aria-labelledby="main-heading"
      >
        <div className="container hero-animate" style={{ maxWidth: '920px', marginInline: 0 }}>
          <nav aria-label="Breadcrumb" style={{ marginBottom: '1rem' }}>
            <Link href="/blog" className="editorial-link" style={{ fontSize: '0.9rem' }}>
              <span>← Back to All Insights &amp; News</span>
            </Link>
          </nav>

          <div className="blog-card-meta-row" style={{ marginBottom: '0.85rem' }}>
            <span className="brand-category-pill">{post.type}</span>
            <span className="brand-category-pill brand-category-pill--oak">{post.category}</span>
            <span className="blog-meta-dot">·</span>
            <span>{formattedDate}</span>
            <span className="blog-meta-dot">·</span>
            <span>{post.readingTime || '5 min read'}</span>
          </div>

          <h1 id="main-heading" tabIndex={-1} className="page-title">
            {post.title}
          </h1>

          <p className="lead-text" style={{ marginBottom: '1rem' }}>
            {post.summary}
          </p>

          <p className="caption" style={{ margin: 0 }}>
            Published by <strong>{post.author || 'NEOM Panels Technical Desk'}</strong> · Brand
            Focus: <strong>{post.brand || 'NEOM Panels'}</strong>
          </p>
        </div>
      </section>

      {/* ARTICLE BODY & SIDEBAR */}
      <section className="section section--no-border reveal-once">
        <div className="container">
          <div className="blog-detail-layout">
            {/* Main Article Column */}
            <article className="blog-detail-main">
              <figure className="architectural-photo-card" style={{ margin: '0 0 2rem 0' }}>
                <img
                  src={post.coverImage || '/assets/hero-neom-flagship.jpg'}
                  alt={post.coverImageAlt || post.title}
                  width="1400"
                  height="933"
                />
              </figure>

              {Array.isArray(post.keyTakeaways) && post.keyTakeaways.length > 0 ? (
                <div className="blog-takeaways-box">
                  <p className="eyebrow" style={{ marginBottom: '0.4rem' }}>
                    KEY TAKEAWAYS FOR BUYERS
                  </p>
                  <ul className="check-list" style={{ margin: 0 }}>
                    {post.keyTakeaways.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              ) : null}

              <div className="blog-detail-sections">
                {(post.sections || []).map((sec, idx) => (
                  <div key={idx} className="blog-detail-section">
                    {sec.heading ? <h2 className="subsection-title">{sec.heading}</h2> : null}
                    <p>{sec.body}</p>
                  </div>
                ))}
              </div>

              {Array.isArray(post.seoKeywords) && post.seoKeywords.length > 0 ? (
                <div className="blog-tags-footer">
                  <span className="spec-label" style={{ display: 'block', marginBottom: '0.5rem' }}>
                    RELATED TOPICS &amp; SPECIFICATION KEYWORDS
                  </span>
                  <div className="supporting-labels-row" style={{ marginTop: 0, paddingTop: 0, borderTop: 'none' }}>
                    {post.seoKeywords.map((kw, idx) => (
                      <span key={idx} className="supporting-label-chip">
                        {kw}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </article>

            {/* Right Sidebar: Quick Enquiry & Related Articles */}
            <aside className="enquiry-sidebar">
              <div className="enquiry-sidebar__card">
                <p className="eyebrow" style={{ marginBottom: '0.35rem' }}>
                  DISCUSS THIS SPECIFICATION
                </p>
                <h2 className="subsection-title" style={{ fontSize: '1.2rem' }}>
                  Need panels for your project or factory?
                </h2>
                <p className="secondary-text" style={{ fontSize: '0.9375rem' }}>
                  Share your required panel thickness, sheet size and quantity with NEOM Panels to
                  receive product documentation or a quotation.
                </p>
                <div className="btn-group" style={{ marginTop: '1rem' }}>
                  <Link
                    href={
                      post.brand === 'NEOM Packing Plywood'
                        ? '/enquiry?brand=neom-packing-plywood&category=industrial-packaging'
                        : '/enquiry'
                    }
                    className="btn btn--primary"
                    style={{ width: '100%' }}
                  >
                    Request a Quote →
                  </Link>
                  <Link
                    href="/brands/neom-packing-plywood"
                    className="btn btn--secondary"
                    style={{ width: '100%' }}
                  >
                    Explore NEOM Packing Plywood
                  </Link>
                </div>
              </div>

              {relatedPosts.length > 0 ? (
                <div className="enquiry-sidebar__card enquiry-sidebar__card--sage">
                  <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>
                    MORE INSIGHTS &amp; NEWS
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.9rem' }}>
                    {relatedPosts.map((rel) => (
                      <div
                        key={rel.slug}
                        style={{
                          paddingBottom: '0.85rem',
                          borderBottom: '1px solid var(--color-border)'
                        }}
                      >
                        <span className="spec-label">{rel.type}</span>
                        <h3
                          style={{
                            fontSize: '0.98rem',
                            margin: '0.2rem 0 0.35rem 0',
                            lineHeight: 1.35
                          }}
                        >
                          <Link href={`/blog/${rel.slug}`} style={{ color: 'var(--color-forest)' }}>
                            {rel.title}
                          </Link>
                        </h3>
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
