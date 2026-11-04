import Link from 'next/link';
import BlogExplorerClient from '@/components/BlogExplorerClient';
import { getAllPosts } from '@/lib/posts-store';
import { buildPageMetadata, getBreadcrumbJsonLd, SITE_URL } from '@/lib/seo';

export const dynamic = 'force-dynamic';

export const metadata = buildPageMetadata({
  title: 'Insights, SEO Articles & Company News — Wood-Panel Buyer Guides',
  description:
    'Read technical wood-panel buyer guides, calibrated plywood specifications, MR industrial packaging plywood insights and company news from NEOM Panels in India.',
  path: '/blog',
  ogImage: '/assets/hero-neom-flagship.jpg',
  ogImageAlt: 'NEOM Panels — Insights, Technical Articles and Company News',
  ogImages: [
    {
      url: '/assets/hero-neom-flagship.jpg',
      width: 1400,
      height: 933,
      alt: 'NEOM Panels — Insights, Technical Articles and Company News'
    },
    {
      url: '/assets/starwoods-brand-showcase.jpg',
      width: 1400,
      height: 933,
      alt: 'Starwoods Calibrated Plywood & Interior Panel Guides'
    },
    {
      url: '/assets/packing-plywood-showcase.jpg',
      width: 1400,
      height: 933,
      alt: 'NEOM Packing Plywood Industrial Crating & Packaging Guides'
    }
  ],
  keywords: [
    'NEOM Panels blog and news',
    'calibrated plywood buyer guide India',
    'MR packaging plywood vs waterproof plywood guide',
    'modular kitchen plywood specification articles',
    'industrial crating plywood guides India',
    'Starwoods and NEOM Packing Plywood updates'
  ]
});

export default async function BlogIndexPage() {
  const posts = await getAllPosts({ includeDrafts: false });

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      getBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Insights & News', path: '/blog' }
      ]),
      {
        '@type': 'Blog',
        '@id': `${SITE_URL}/blog#blog`,
        name: 'NEOM Panels Insights, Technical Guides & Company News',
        url: `${SITE_URL}/blog`,
        description:
          'Technical B2B wood-panel articles, buyer guides and corporate news from NEOM Panels, Starwoods and NEOM Packing Plywood.',
        publisher: {
          '@type': 'Organization',
          name: 'NEOM Panels',
          url: SITE_URL
        },
        blogPost: posts.map((post) => ({
          '@type': post.type === 'Company News' ? 'NewsArticle' : 'BlogPosting',
          headline: post.title,
          description: post.summary,
          datePublished: post.publishedAt,
          dateModified: post.updatedAt || post.publishedAt,
          url: `${SITE_URL}/blog/${post.slug}`,
          image: `${SITE_URL}${post.coverImage || '/assets/hero-neom-flagship.jpg'}`,
          author: {
            '@type': 'Organization',
            name: post.author || 'NEOM Panels'
          }
        }))
      }
    ]
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
      />

      {/* PAGE HEADER */}
      <section
        className="page-header section--architectural-grid"
        aria-labelledby="main-heading"
      >
        <div className="container hero-animate">
          <div className="section-header-split" style={{ marginBottom: 0 }}>
            <div>
              <p className="eyebrow">INSIGHTS, TECHNICAL GUIDES &amp; COMPANY NEWS</p>
              <h1 id="main-heading" tabIndex={-1} className="page-title">
                Practical knowledge for wood-panel buyers.
              </h1>
              <p className="lead-text" style={{ marginBottom: 0 }}>
                Explore B2B buyer guides, calibrated plywood and MR packaging plywood technical
                insights, and company announcements from NEOM Panels.
              </p>
            </div>
            <div className="section-header-actions">
              <Link href="/enquiry" className="btn btn--primary">
                Discuss Your Requirement →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FILTERABLE ARTICLES & NEWS EXPLORER */}
      <section className="section section--no-border reveal-once">
        <div className="container">
          <BlogExplorerClient initialPosts={posts} />
        </div>
      </section>
    </main>
  );
}
