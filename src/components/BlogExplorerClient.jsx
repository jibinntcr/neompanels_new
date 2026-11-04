'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';

const POST_TYPES = ['All', 'SEO Article', 'Company News', 'Technical Guide', 'Product Update'];
const POST_CATEGORIES = [
  'All Categories',
  'Furniture & Interiors',
  'Industrial Packaging',
  'Manufacturing & Quality',
  'Commercial Projects',
  'Sustainability & Corporate'
];
const POST_BRANDS = ['All Brands', 'NEOM Panels', 'Starwoods', 'NEOM Packing Plywood'];

export default function BlogExplorerClient({ initialPosts = [] }) {
  const [posts, setPosts] = useState(initialPosts);
  const [selectedType, setSelectedType] = useState('All');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedBrand, setSelectedBrand] = useState('All Brands');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetch('/api/posts', { headers: { Accept: 'application/json' } })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data?.ok && Array.isArray(data.posts) && data.posts.length > 0) {
          setPosts(data.posts);
        }
      })
      .catch(() => {});
  }, []);

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      if (selectedType !== 'All' && post.type !== selectedType) return false;
      if (selectedCategory !== 'All Categories' && post.category !== selectedCategory)
        return false;
      if (selectedBrand !== 'All Brands' && post.brand !== selectedBrand) return false;
      if (searchQuery.trim()) {
        const q = searchQuery.trim().toLowerCase();
        const haystack = [
          post.title,
          post.summary,
          post.category,
          post.type,
          post.brand,
          ...(post.seoKeywords || [])
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }
      return true;
    });
  }, [posts, selectedType, selectedCategory, selectedBrand, searchQuery]);

  const featuredPost = filteredPosts.find((p) => p.featured) || filteredPosts[0] || null;
  const gridPosts = featuredPost
    ? filteredPosts.filter((p) => p.slug !== featuredPost.slug)
    : filteredPosts;

  const formatDate = (iso) => {
    if (!iso) return 'November 2026';
    try {
      return new Date(iso).toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      });
    } catch (_) {
      return iso;
    }
  };

  return (
    <div>
      {/* Filter & Search Bar */}
      <div className="blog-filter-toolbar" role="region" aria-label="Filter articles and news">
        <div className="blog-type-tabs" role="tablist" aria-label="Filter by content type">
          {POST_TYPES.map((t) => (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={selectedType === t}
              className={`blog-type-tab ${selectedType === t ? 'is-active' : ''}`}
              onClick={() => setSelectedType(t)}
            >
              {t === 'All' ? 'All Articles & News' : t}
            </button>
          ))}
        </div>

        <div className="blog-filter-controls">
          <div className="blog-filter-field">
            <label htmlFor="blog-search-input" className="visually-hidden">
              Search articles and news
            </label>
            <input
              id="blog-search-input"
              type="search"
              className="form-control"
              placeholder="Search by topic, keyword, thickness or application…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="blog-filter-field">
            <label htmlFor="blog-category-select" className="visually-hidden">
              Filter by category
            </label>
            <select
              id="blog-category-select"
              className="form-control"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {POST_CATEGORIES.map((c) => (
                <option key={c} value={c}>
                  {c}
                </option>
              ))}
            </select>
          </div>

          <div className="blog-filter-field">
            <label htmlFor="blog-brand-select" className="visually-hidden">
              Filter by brand
            </label>
            <select
              id="blog-brand-select"
              className="form-control"
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
            >
              {POST_BRANDS.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
          </div>

          {(selectedType !== 'All' ||
            selectedCategory !== 'All Categories' ||
            selectedBrand !== 'All Brands' ||
            searchQuery) && (
            <button
              type="button"
              className="btn btn--secondary"
              onClick={() => {
                setSelectedType('All');
                setSelectedCategory('All Categories');
                setSelectedBrand('All Brands');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="blog-results-meta">
        <span>
          Showing <strong>{filteredPosts.length}</strong> of <strong>{posts.length}</strong>{' '}
          published articles &amp; company updates
        </span>
        <Link href="/admin" className="editorial-link" style={{ fontSize: '0.875rem' }}>
          <span>Publish or Edit Articles in Backend Portal</span>
          <span className="link-arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </div>

      {filteredPosts.length === 0 ? (
        <div className="blog-empty-state">
          <h3 className="subsection-title">No matching articles or news found.</h3>
          <p>Try clearing your search or selecting a different category filter above.</p>
          <button
            type="button"
            className="btn btn--primary"
            onClick={() => {
              setSelectedType('All');
              setSelectedCategory('All Categories');
              setSelectedBrand('All Brands');
              setSearchQuery('');
            }}
          >
            Show All Articles &amp; News
          </button>
        </div>
      ) : (
        <>
          {/* Featured Lead Article */}
          {featuredPost ? (
            <article className="blog-featured-card">
              <div className="blog-featured-media">
                <img
                  src={featuredPost.coverImage || '/assets/hero-neom-flagship.jpg'}
                  alt={featuredPost.coverImageAlt || featuredPost.title}
                  width="1400"
                  height="933"
                />
                <span className="blog-featured-badge">{featuredPost.type}</span>
              </div>

              <div className="blog-featured-body">
                <div>
                  <div className="blog-card-meta-row">
                    <span className="brand-category-pill">{featuredPost.category}</span>
                    <span className="blog-meta-dot">·</span>
                    <span>{formatDate(featuredPost.publishedAt)}</span>
                    <span className="blog-meta-dot">·</span>
                    <span>{featuredPost.readingTime || '5 min read'}</span>
                  </div>

                  <h2 className="blog-featured-title">
                    <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                  </h2>

                  <p className="blog-featured-summary">{featuredPost.summary}</p>
                </div>

                <div className="blog-featured-footer">
                  <span className="blog-author-tag">By {featuredPost.author}</span>
                  <Link href={`/blog/${featuredPost.slug}`} className="btn btn--primary">
                    Read Full Article →
                  </Link>
                </div>
              </div>
            </article>
          ) : null}

          {/* Remaining Articles & News Grid */}
          {gridPosts.length > 0 ? (
            <div className="blog-cards-grid">
              {gridPosts.map((post) => (
                <article
                  key={post.slug}
                  className={`blog-article-card ${
                    post.brand === 'NEOM Packing Plywood' ? 'blog-article-card--oak' : ''
                  }`}
                >
                  <div className="blog-article-media">
                    <img
                      src={post.coverImage || '/assets/hero-neom-flagship.jpg'}
                      alt={post.coverImageAlt || post.title}
                      width="1400"
                      height="933"
                      loading="lazy"
                    />
                    <span className="blog-type-pill">{post.type}</span>
                  </div>

                  <div className="blog-article-body">
                    <div>
                      <div className="blog-card-meta-row">
                        <span className="blog-cat-label">{post.category}</span>
                        <span className="blog-meta-dot">·</span>
                        <span>{formatDate(post.publishedAt)}</span>
                      </div>

                      <h3 className="blog-article-title">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>

                      <p className="blog-article-summary">{post.summary}</p>
                    </div>

                    <div className="blog-article-footer">
                      <span className="blog-read-time">{post.readingTime || '5 min read'}</span>
                      <Link href={`/blog/${post.slug}`} className="editorial-link">
                        <span>Read Article</span>
                        <span className="link-arrow" aria-hidden="true">
                          →
                        </span>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}
