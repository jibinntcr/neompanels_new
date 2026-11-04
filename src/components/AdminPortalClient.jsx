'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import SecurityCaptcha from '@/components/SecurityCaptcha';
import { ENQUIRY_CATEGORIES } from '@/lib/enquiry-config';

const ADMIN_AUTH_EMAIL = 'jibintcr@gmail.com';
const ADMIN_AUTH_PASS = 'jibin@neom';
const ADMIN_SESSION_STORAGE_KEY = 'neom_admin_auth_v2';

const COVER_IMAGE_PRESETS = [
  { label: 'NEOM Flagship Calibrated Panels Studio', value: '/assets/hero-neom-flagship.jpg' },
  { label: 'Modular Kitchen & Wardrobe Interiors', value: '/assets/industry-modular-interiors.jpg' },
  { label: 'Furniture & OEM Workshop', value: '/assets/industry-furniture-oem.jpg' },
  { label: 'Commercial Fit-Out & Boardroom Joinery', value: '/assets/industry-commercial-projects.jpg' },
  { label: 'NEOM Packing Plywood Sheets & Crate', value: '/assets/packing-plywood-showcase.jpg' },
  { label: 'Industrial Packing Cases & Crates', value: '/assets/packing-plywood-crates.jpg' },
  { label: 'Sustainability & Veneer Studio', value: '/assets/sustainability-materials-studio.jpg' }
];

const EMPTY_POST_FORM = {
  id: '',
  title: '',
  slug: '',
  type: 'SEO Article',
  category: 'Furniture & Interiors',
  brand: 'NEOM Panels',
  featured: false,
  status: 'published',
  author: 'NEOM Panels Editorial Desk',
  readingTime: '5 min read',
  coverImage: '/assets/hero-neom-flagship.jpg',
  summary: '',
  keyTakeaways: '',
  content: '',
  seoTitle: '',
  seoDescription: '',
  seoKeywords: 'NEOM Panels, wood panel manufacturer India, calibrated plywood India'
};

export default function AdminPortalClient({
  initialEnquiries = [],
  initialDocRequests = [],
  initialPosts = [],
  initialMongoStatus = null
}) {
  const [activeTab, setActiveTab] = useState('enquiries');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authChecked, setAuthChecked] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPass, setLoginPass] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loginCaptchaValid, setLoginCaptchaValid] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Data states
  const [enquiries, setEnquiries] = useState(initialEnquiries);
  const [docRequests, setDocRequests] = useState(initialDocRequests);
  const [posts, setPosts] = useState(initialPosts);
  const [mongoStatus, setMongoStatus] = useState(
    initialMongoStatus || {
      configured: false,
      connected: false,
      mode: 'hybrid-durable-json',
      dbName: 'neom_panels_db',
      message: 'Hybrid MongoDB + Local Durable Storage Active'
    }
  );
  const [statusMessage, setStatusMessage] = useState('');

  // Enquiry Filters
  const [enqSearch, setEnqSearch] = useState('');
  const [enqBrand, setEnqBrand] = useState('all');
  const [enqCategory, setEnqCategory] = useState('all');
  const [enqStatus, setEnqStatus] = useState('all');
  const [selectedEnquiry, setSelectedEnquiry] = useState(null);

  // Document Request Filters
  const [docSearch, setDocSearch] = useState('');
  const [docCategory, setDocCategory] = useState('all');
  const [docStatus, setDocStatus] = useState('all');

  // Blog & News CMS Filters & Editor
  const [postSearch, setPostSearch] = useState('');
  const [postTypeFilter, setPostTypeFilter] = useState('all');
  const [postCategoryFilter, setPostCategoryFilter] = useState('all');
  const [isEditingPost, setIsEditingPost] = useState(false);
  const [postForm, setPostForm] = useState(EMPTY_POST_FORM);
  const [savingPost, setSavingPost] = useState(false);

  // MongoDB Settings Form
  const [mongoUriInput, setMongoUriInput] = useState('');
  const [mongoDbNameInput, setMongoDbNameInput] = useState('neom_panels_db');
  const [savingMongo, setSavingMongo] = useState(false);

  const refreshAllData = async () => {
    try {
      const [enqRes, docRes, postRes, ovRes] = await Promise.all([
        fetch('/api/enquiries'),
        fetch('/api/document-requests'),
        fetch('/api/posts?includeDrafts=true'),
        fetch('/api/admin/overview')
      ]);
      if (enqRes.ok) {
        const d = await enqRes.json();
        if (Array.isArray(d.enquiries)) setEnquiries(d.enquiries);
      }
      if (docRes.ok) {
        const d = await docRes.json();
        if (Array.isArray(d.requests)) setDocRequests(d.requests);
      }
      if (postRes.ok) {
        const d = await postRes.json();
        if (Array.isArray(d.posts)) setPosts(d.posts);
      }
      if (ovRes.ok) {
        const d = await ovRes.json();
        if (d.mongoStatus) setMongoStatus(d.mongoStatus);
      }
    } catch (_) {
      // Ignore network error
    }
  };

  useEffect(() => {
    try {
      const saved = window.sessionStorage.getItem(ADMIN_SESSION_STORAGE_KEY);
      if (saved === ADMIN_AUTH_EMAIL) {
        setIsAuthenticated(true);
      }
    } catch (_) {
      // Ignore storage error
    } finally {
      setAuthChecked(true);
    }
    refreshAllData();
  }, []);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const normalizedEmail = loginEmail.trim().toLowerCase();
    const enteredPass = loginPass;

    if (normalizedEmail !== ADMIN_AUTH_EMAIL.toLowerCase() || enteredPass !== ADMIN_AUTH_PASS) {
      setLoginError('Invalid Administrator ID or Password. Please verify your credentials.');
      return;
    }

    if (!loginCaptchaValid) {
      setLoginError('Please enter the 5-character Security Verification (CAPTCHA) code.');
      return;
    }

    setLoginError('');
    setIsAuthenticated(true);
    try {
      window.sessionStorage.setItem(ADMIN_SESSION_STORAGE_KEY, ADMIN_AUTH_EMAIL);
    } catch (_) {
      // Ignore storage error
    }
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setLoginPass('');
    setLoginCaptchaValid(false);
    setLoginError('');
    try {
      window.sessionStorage.removeItem(ADMIN_SESSION_STORAGE_KEY);
    } catch (_) {
      // Ignore storage error
    }
  };

  const flashNotice = (msg) => {
    setStatusMessage(msg);
    setTimeout(() => setStatusMessage(''), 4500);
  };

  // Filtered Enquiries
  const filteredEnquiries = useMemo(() => {
    return enquiries.filter((item) => {
      if (enqBrand !== 'all') {
        const itemBrand = item.requirement?.brand || 'General / Corporate';
        if (itemBrand.toLowerCase() !== enqBrand.toLowerCase()) return false;
      }
      if (enqCategory !== 'all') {
        if ((item.requirement?.category || '').toLowerCase() !== enqCategory.toLowerCase())
          return false;
      }
      if (enqStatus !== 'all') {
        if ((item.status || 'received').toLowerCase() !== enqStatus.toLowerCase()) return false;
      }
      if (enqSearch.trim()) {
        const q = enqSearch.trim().toLowerCase();
        const hay = [
          item.reference,
          item.contact?.name,
          item.contact?.organisation,
          item.contact?.email,
          item.contact?.phone,
          item.requirement?.category,
          item.requirement?.brand,
          item.requirement?.description,
          item.requirement?.destination
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [enquiries, enqBrand, enqCategory, enqStatus, enqSearch]);

  // Filtered Document Requests
  const filteredDocRequests = useMemo(() => {
    return docRequests.filter((item) => {
      if (docCategory !== 'all') {
        if ((item.documentCategory || '').toLowerCase() !== docCategory.toLowerCase()) return false;
      }
      if (docStatus !== 'all') {
        if ((item.status || 'pending').toLowerCase() !== docStatus.toLowerCase()) return false;
      }
      if (docSearch.trim()) {
        const q = docSearch.trim().toLowerCase();
        const hay = [
          item.reference,
          item.documentTitle,
          item.documentCategory,
          item.applicationScope,
          item.contact?.name,
          item.contact?.organisation,
          item.contact?.email
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [docRequests, docCategory, docStatus, docSearch]);

  // Filtered Blog & News Posts
  const filteredPosts = useMemo(() => {
    return posts.filter((p) => {
      if (postTypeFilter !== 'all' && p.type !== postTypeFilter) return false;
      if (postCategoryFilter !== 'all' && p.category !== postCategoryFilter) return false;
      if (postSearch.trim()) {
        const q = postSearch.trim().toLowerCase();
        const hay = [p.title, p.summary, p.category, p.type, p.brand, ...(p.seoKeywords || [])]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [posts, postTypeFilter, postCategoryFilter, postSearch]);

  const handleUpdateEnquiryStatus = async (reference, newStatus, adminNotes) => {
    try {
      const res = await fetch('/api/enquiries', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reference, status: newStatus, adminNotes })
      });
      const data = await res.json();
      if (res.ok && data.enquiry) {
        setEnquiries((prev) =>
          prev.map((e) => (e.reference === reference ? data.enquiry : e))
        );
        if (selectedEnquiry?.reference === reference) {
          setSelectedEnquiry(data.enquiry);
        }
        flashNotice(`Updated enquiry ${reference} status to "${newStatus}".`);
      }
    } catch (_) {
      flashNotice('Could not update enquiry status.');
    }
  };

  const handleUpdateDocStatus = async (reference, newStatus) => {
    try {
      const res = await fetch('/api/document-requests', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ reference, status: newStatus })
      });
      const data = await res.json();
      if (res.ok && data.request) {
        setDocRequests((prev) =>
          prev.map((r) => (r.reference === reference ? data.request : r))
        );
        flashNotice(`Updated document request ${reference} to "${newStatus}".`);
      }
    } catch (_) {
      flashNotice('Could not update document request status.');
    }
  };

  const handleEditPostClick = (post) => {
    const contentText = (post.sections || [])
      .map((s) => `${s.heading ? `## ${s.heading}\n` : ''}${s.body || ''}`)
      .join('\n\n');

    setPostForm({
      id: post.id || '',
      title: post.title || '',
      slug: post.slug || '',
      type: post.type || 'SEO Article',
      category: post.category || 'Furniture & Interiors',
      brand: post.brand || 'NEOM Panels',
      featured: Boolean(post.featured),
      status: post.status || 'published',
      author: post.author || 'NEOM Panels Editorial Desk',
      readingTime: post.readingTime || '5 min read',
      coverImage: post.coverImage || '/assets/hero-neom-flagship.jpg',
      summary: post.summary || '',
      keyTakeaways: Array.isArray(post.keyTakeaways) ? post.keyTakeaways.join('\n') : '',
      content: contentText,
      seoTitle: post.seoTitle || '',
      seoDescription: post.seoDescription || '',
      seoKeywords: Array.isArray(post.seoKeywords) ? post.seoKeywords.join(', ') : ''
    });
    setIsEditingPost(true);
    setActiveTab('cms');
  };

  const handleSavePost = async (e) => {
    e.preventDefault();
    setSavingPost(true);
    try {
      const res = await fetch('/api/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postForm)
      });
      const data = await res.json();
      if (res.ok && data.post) {
        await refreshAllData();
        setIsEditingPost(false);
        setPostForm(EMPTY_POST_FORM);
        flashNotice(`Published "${data.post.title}" to /blog/${data.post.slug}`);
      } else {
        flashNotice((data.errors && data.errors.join(' ')) || 'Could not save post.');
      }
    } catch (_) {
      flashNotice('Error saving post.');
    } finally {
      setSavingPost(false);
    }
  };

  const handleDeletePost = async (slug, title) => {
    try {
      const res = await fetch(`/api/posts?slug=${encodeURIComponent(slug)}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        setPosts((prev) => prev.filter((p) => p.slug !== slug));
        flashNotice(`Removed "${title}".`);
      }
    } catch (_) {
      flashNotice('Could not delete post.');
    }
  };

  const handleSaveMongoConfig = async (e) => {
    e.preventDefault();
    setSavingMongo(true);
    try {
      const res = await fetch('/api/admin/overview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'configure-mongo',
          mongodbUri: mongoUriInput,
          dbName: mongoDbNameInput
        })
      });
      const data = await res.json();
      if (data.mongoStatus) {
        setMongoStatus(data.mongoStatus);
        flashNotice(data.mongoStatus.message);
      }
    } catch (_) {
      flashNotice('Could not update MongoDB configuration.');
    } finally {
      setSavingMongo(false);
    }
  };

  const exportEnquiriesCsv = () => {
    const headers = [
      'Reference',
      'Date',
      'Status',
      'Brand',
      'Category',
      'Contact Name',
      'Organisation',
      'Email',
      'Phone',
      'Quantity',
      'Destination',
      'Description'
    ];
    const rows = filteredEnquiries.map((e) => [
      e.reference,
      e.createdAt,
      e.status || 'received',
      e.requirement?.brand || 'General',
      e.requirement?.category || '',
      e.contact?.name || '',
      e.contact?.organisation || '',
      e.contact?.email || '',
      e.contact?.phone || '',
      `${e.requirement?.quantity || ''} ${e.requirement?.quantityUnit || ''}`.trim(),
      e.requirement?.destination || '',
      (e.requirement?.description || '').replace(/"/g, '""')
    ]);
    const csv = [
      headers.join(','),
      ...rows.map((r) => r.map((cell) => `"${cell}"`).join(','))
    ].join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `neom-panels-enquiries-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Dedicated Professional Admin Login Screen (No public website navbar/footer)
  if (!isAuthenticated) {
    return (
      <div className="admin-auth-screen">
        <div className="admin-auth-container">
          {/* Left Brand & Security Context Panel */}
          <div className="admin-auth-brand-panel">
            <div>
              <div className="admin-auth-logo-wrap">
                <img
                  src="/assets/logo-horizontal.png"
                  alt="NEOM Panels"
                  className="admin-auth-logo"
                  width="540"
                  height="136"
                />
              </div>
              <span className="admin-auth-badge">ENTERPRISE ADMIN CONSOLE</span>
              <h1 id="main-heading" className="admin-auth-heading">
                Operations, Enquiries &amp; SEO Content Portal
              </h1>
              <p className="admin-auth-lead">
                Dedicated management workspace for NEOM Panels, Starwoods and NEOM Packing Plywood.
                Review incoming B2B quotations, publish SEO articles and company news, and manage
                MongoDB cloud synchronization.
              </p>
            </div>

            <div className="admin-auth-feature-list">
              <div className="admin-auth-feature-item">
                <span className="admin-auth-feature-dot" />
                <div>
                  <strong>B2B Enquiry &amp; Quotation Desk</strong>
                  <span>Filter by brand, category, status and export CSV</span>
                </div>
              </div>
              <div className="admin-auth-feature-item">
                <span className="admin-auth-feature-dot" />
                <div>
                  <strong>SEO Blog &amp; Company News CMS</strong>
                  <span>Publish articles, buyer guides and announcements to /blog</span>
                </div>
              </div>
              <div className="admin-auth-feature-item">
                <span className="admin-auth-feature-dot" />
                <div>
                  <strong>MongoDB Atlas &amp; Hybrid Persistence</strong>
                  <span>Real-time database sync across all collections</span>
                </div>
              </div>
            </div>

            <div className="admin-auth-brand-footer">
              <span>© 2026 NEOM Panels · Authorized Personnel Only</span>
              <Link href="/" className="admin-auth-back-link">
                ← Return to Public Website
              </Link>
            </div>
          </div>

          {/* Right Sign-In Form Card */}
          <div className="admin-auth-form-panel">
            <div className="admin-auth-form-header">
              <p className="eyebrow" style={{ marginBottom: '0.35rem' }}>
                ADMINISTRATOR AUTHENTICATION
              </p>
              <h2 className="subsection-title" style={{ marginBottom: '0.35rem' }}>
                Sign in to Admin Portal
              </h2>
              <p className="secondary-text" style={{ margin: 0, fontSize: '0.9375rem' }}>
                Enter your administrator ID, password and security verification code to access the
                management console.
              </p>
            </div>

            {loginError ? (
              <div className="status-banner status-banner--error" role="alert">
                {loginError}
              </div>
            ) : null}

            <form onSubmit={handleLoginSubmit} noValidate>
              <div className="form-group">
                <label className="form-label" htmlFor="admin-email">
                  Administrator Email ID <span className="required-marker">*</span>
                </label>
                <input
                  id="admin-email"
                  type="email"
                  className="form-control"
                  placeholder="Enter administrator email"
                  autoComplete="username"
                  value={loginEmail}
                  onChange={(e) => {
                    setLoginEmail(e.target.value);
                    if (loginError) setLoginError('');
                  }}
                  required
                />
              </div>

              <div className="form-group">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.3rem'
                  }}
                >
                  <label className="form-label" htmlFor="admin-pass" style={{ marginBottom: 0 }}>
                    Password <span className="required-marker">*</span>
                  </label>
                  <button
                    type="button"
                    className="admin-pass-toggle"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? 'Hide Password' : 'Show Password'}
                  </button>
                </div>
                <input
                  id="admin-pass"
                  type={showPassword ? 'text' : 'password'}
                  className="form-control"
                  placeholder="Enter administrator password"
                  autoComplete="current-password"
                  value={loginPass}
                  onChange={(e) => {
                    setLoginPass(e.target.value);
                    if (loginError) setLoginError('');
                  }}
                  required
                />
              </div>

              <div style={{ marginBlock: '1.15rem' }}>
                <SecurityCaptcha
                  idPrefix="admin-login-captcha"
                  onVerifyChange={(valid) => {
                    setLoginCaptchaValid(valid);
                    if (valid && loginError.includes('CAPTCHA')) setLoginError('');
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn--primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Sign In to Admin Workspace →
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Professional Standalone Admin Workspace (Sidebar + Topbar + Main Content)
  return (
    <div className="admin-workspace">
      {/* Left Sidebar Navigation */}
      <aside className="admin-sidebar" aria-label="Admin Portal Navigation">
        <div className="admin-sidebar-brand">
          <img
            src="/assets/logo-horizontal.png"
            alt="NEOM Panels"
            className="admin-sidebar-logo"
            width="540"
            height="136"
          />
          <span className="admin-sidebar-tag">ADMINISTRATION CONSOLE</span>
        </div>

        <nav className="admin-sidebar-nav">
          <p className="admin-sidebar-section-label">OPERATIONS &amp; ENQUIRIES</p>
          <button
            type="button"
            className={`admin-nav-btn ${activeTab === 'enquiries' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('enquiries')}
          >
            <span className="admin-nav-btn-text">B2B Enquiries &amp; Quotes</span>
            <span className="admin-nav-count">{enquiries.length}</span>
          </button>

          <button
            type="button"
            className={`admin-nav-btn ${activeTab === 'documents' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('documents')}
          >
            <span className="admin-nav-btn-text">Document Requests</span>
            <span className="admin-nav-count">{docRequests.length}</span>
          </button>

          <p className="admin-sidebar-section-label">CONTENT &amp; SEO PUBLISHING</p>
          <button
            type="button"
            className={`admin-nav-btn ${activeTab === 'cms' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('cms')}
          >
            <span className="admin-nav-btn-text">SEO Blog &amp; News CMS</span>
            <span className="admin-nav-count">{posts.length}</span>
          </button>

          <p className="admin-sidebar-section-label">SYSTEM &amp; INFRASTRUCTURE</p>
          <button
            type="button"
            className={`admin-nav-btn ${activeTab === 'database' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('database')}
          >
            <span className="admin-nav-btn-text">MongoDB &amp; Database</span>
            <span
              className={`admin-db-dot ${mongoStatus.connected ? 'is-connected' : 'is-hybrid'}`}
              title={mongoStatus.connected ? 'MongoDB Connected' : 'Hybrid Durable Store'}
            />
          </button>
        </nav>

        <div className="admin-sidebar-footer">
          <div className="admin-user-card">
            <div className="admin-user-avatar">JN</div>
            <div className="admin-user-meta">
              <strong>Jibin N</strong>
              <span>{ADMIN_AUTH_EMAIL}</span>
            </div>
          </div>

          <div className="admin-sidebar-actions">
            <Link href="/" target="_blank" className="admin-ext-link">
              View Live Website ↗
            </Link>
            <Link href="/blog" target="_blank" className="admin-ext-link">
              View Public Blog ↗
            </Link>
            <button type="button" className="admin-logout-btn" onClick={handleSignOut}>
              Sign Out of Portal
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="admin-main-stage">
        {/* Top Command Header */}
        <header className="admin-topbar">
          <div>
            <span className="admin-topbar-eyebrow">
              NEOM PANELS · ENTERPRISE BACKEND PORTAL
            </span>
            <h1 id="main-heading" className="admin-topbar-title">
              {activeTab === 'enquiries' && 'B2B Enquiries & Quotation Management'}
              {activeTab === 'cms' && 'SEO Blog Articles & Company News CMS'}
              {activeTab === 'documents' && 'Technical Document & Literature Requests'}
              {activeTab === 'database' && 'MongoDB Cloud & Storage Configuration'}
            </h1>
          </div>

          <div className="admin-topbar-actions">
            <button type="button" className="btn btn--secondary" onClick={refreshAllData}>
              ↻ Sync Data
            </button>
            {activeTab === 'cms' ? (
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => {
                  setPostForm(EMPTY_POST_FORM);
                  setIsEditingPost(!isEditingPost);
                }}
              >
                {isEditingPost ? '← All Articles' : '+ New Article / News'}
              </button>
            ) : (
              <button
                type="button"
                className="btn btn--primary"
                onClick={() => {
                  setPostForm(EMPTY_POST_FORM);
                  setIsEditingPost(true);
                  setActiveTab('cms');
                }}
              >
                + Publish Blog / News
              </button>
            )}
          </div>
        </header>

        <div className="admin-stage-body">
          {/* Top KPI Summary Cards */}
          <div className="admin-kpi-grid">
            <div
              className={`admin-kpi-card ${activeTab === 'enquiries' ? 'is-focused' : ''}`}
              onClick={() => setActiveTab('enquiries')}
              style={{ cursor: 'pointer' }}
            >
              <span className="admin-kpi-label">B2B Enquiries</span>
              <strong className="admin-kpi-value">{enquiries.length}</strong>
              <span className="admin-kpi-sub">
                {enquiries.filter((e) => (e.status || 'received') === 'received').length} new ·{' '}
                {enquiries.filter((e) => e.requirement?.brand === 'NEOM Packing Plywood').length}{' '}
                Packing Plywood
              </span>
            </div>

            <div
              className={`admin-kpi-card ${activeTab === 'cms' ? 'is-focused' : ''}`}
              onClick={() => setActiveTab('cms')}
              style={{ cursor: 'pointer' }}
            >
              <span className="admin-kpi-label">SEO Articles &amp; News</span>
              <strong className="admin-kpi-value">{posts.length}</strong>
              <span className="admin-kpi-sub">
                {posts.filter((p) => p.type === 'Company News').length} News ·{' '}
                {posts.filter((p) => p.type !== 'Company News').length} SEO Guides
              </span>
            </div>

            <div
              className={`admin-kpi-card ${activeTab === 'documents' ? 'is-focused' : ''}`}
              onClick={() => setActiveTab('documents')}
              style={{ cursor: 'pointer' }}
            >
              <span className="admin-kpi-label">Document Requests</span>
              <strong className="admin-kpi-value">{docRequests.length}</strong>
              <span className="admin-kpi-sub">
                {docRequests.filter((d) => (d.status || 'pending') === 'pending').length} pending
                review
              </span>
            </div>

            <div
              className="admin-kpi-card admin-kpi-card--oak"
              onClick={() => setActiveTab('database')}
              style={{ cursor: 'pointer' }}
            >
              <span className="admin-kpi-label">Database Engine</span>
              <strong className="admin-kpi-value" style={{ fontSize: '1.2rem' }}>
                {mongoStatus.connected ? 'MongoDB Connected' : 'MongoDB Hybrid Ready'}
              </strong>
              <span className="admin-kpi-sub">
                DB: {mongoStatus.dbName || 'neom_panels_db'}
              </span>
            </div>
          </div>

          {statusMessage ? (
            <div className="status-banner status-banner--success" role="status">
              {statusMessage}
            </div>
          ) : null}

          {/* MODULE 1: B2B ENQUIRIES & QUOTES */}
          {activeTab === 'enquiries' ? (
            <div className="admin-module-panel">
              <div className="admin-panel-header">
                <div>
                  <h2 className="subsection-title" style={{ marginBottom: '0.2rem' }}>
                    Incoming B2B Enquiries &amp; Quotation Submissions ({filteredEnquiries.length})
                  </h2>
                  <p className="secondary-text" style={{ margin: 0, fontSize: '0.92rem' }}>
                    Filter by brand, enquiry category, status or keyword. Click any row to inspect
                    full specifications or update status.
                  </p>
                </div>
                <div className="btn-group">
                  <button type="button" className="btn btn--primary" onClick={exportEnquiriesCsv}>
                    Export Filtered CSV ({filteredEnquiries.length})
                  </button>
                </div>
              </div>

              {/* Comprehensive Filter Bar */}
              <div className="admin-filter-grid">
                <div>
                  <label htmlFor="enq-search" className="form-label">
                    Search Enquiries
                  </label>
                  <input
                    id="enq-search"
                    type="search"
                    className="form-control"
                    placeholder="Ref ID, company, name, email, city…"
                    value={enqSearch}
                    onChange={(e) => setEnqSearch(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="enq-brand-filter" className="form-label">
                    Filter by Brand
                  </label>
                  <select
                    id="enq-brand-filter"
                    className="form-control"
                    value={enqBrand}
                    onChange={(e) => setEnqBrand(e.target.value)}
                  >
                    <option value="all">All Brands ({enquiries.length})</option>
                    <option value="Starwoods">Starwoods (Furniture &amp; Interiors)</option>
                    <option value="NEOM Packing Plywood">NEOM Packing Plywood (Packaging)</option>
                    <option value="Both Brands">Both Brands</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="enq-cat-filter" className="form-label">
                    Filter by Category
                  </label>
                  <select
                    id="enq-cat-filter"
                    className="form-control"
                    value={enqCategory}
                    onChange={(e) => setEnqCategory(e.target.value)}
                  >
                    <option value="all">All Categories</option>
                    {ENQUIRY_CATEGORIES.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="enq-status-filter" className="form-label">
                    Filter by Status
                  </label>
                  <select
                    id="enq-status-filter"
                    className="form-control"
                    value={enqStatus}
                    onChange={(e) => setEnqStatus(e.target.value)}
                  >
                    <option value="all">All Statuses</option>
                    <option value="received">Received (New)</option>
                    <option value="in-review">In Review</option>
                    <option value="quoted">Quoted</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>
              </div>

              <div className="admin-table-wrap">
                <table className="spec-table admin-data-table">
                  <thead>
                    <tr>
                      <th>Reference &amp; Date</th>
                      <th>Company &amp; Contact</th>
                      <th>Brand &amp; Category</th>
                      <th>Requirement &amp; Destination</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEnquiries.map((enq) => (
                      <tr key={enq.reference}>
                        <td>
                          <strong style={{ color: 'var(--color-forest)', display: 'block' }}>
                            {enq.reference}
                          </strong>
                          <span className="caption">
                            {enq.createdAt
                              ? new Date(enq.createdAt).toLocaleDateString('en-IN')
                              : '—'}
                          </span>
                        </td>
                        <td>
                          <strong>{enq.contact?.organisation || '—'}</strong>
                          <div className="caption">
                            {enq.contact?.name} · {enq.contact?.email || enq.contact?.phone}
                          </div>
                        </td>
                        <td>
                          <span className="brand-category-pill" style={{ marginBottom: '0.25rem' }}>
                            {enq.requirement?.brand || 'NEOM Panels'}
                          </span>
                          <div className="caption">{enq.requirement?.category}</div>
                        </td>
                        <td style={{ maxWidth: '300px' }}>
                          <div style={{ fontSize: '0.875rem', marginBottom: '0.2rem' }}>
                            {enq.requirement?.description}
                          </div>
                          {enq.requirement?.destination ? (
                            <span className="caption">
                              <strong>Delivery:</strong> {enq.requirement.destination}
                            </span>
                          ) : null}
                        </td>
                        <td>
                          <select
                            aria-label={`Status for ${enq.reference}`}
                            className="admin-status-select"
                            value={enq.status || 'received'}
                            onChange={(e) =>
                              handleUpdateEnquiryStatus(
                                enq.reference,
                                e.target.value,
                                enq.adminNotes
                              )
                            }
                          >
                            <option value="received">Received</option>
                            <option value="in-review">In Review</option>
                            <option value="quoted">Quoted</option>
                            <option value="closed">Closed</option>
                          </select>
                        </td>
                        <td>
                          <button
                            type="button"
                            className="btn btn--secondary"
                            style={{
                              minHeight: '36px',
                              padding: '0.3rem 0.75rem',
                              fontSize: '0.8125rem'
                            }}
                            onClick={() =>
                              setSelectedEnquiry(
                                selectedEnquiry?.reference === enq.reference ? null : enq
                              )
                            }
                          >
                            {selectedEnquiry?.reference === enq.reference
                              ? 'Hide Details'
                              : 'Inspect'}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {selectedEnquiry ? (
                <div className="admin-detail-drawer">
                  <div className="admin-panel-header" style={{ marginBottom: '0.75rem' }}>
                    <div>
                      <span className="eyebrow">ENQUIRY SPECIFICATION INSPECTOR</span>
                      <h3 className="subsection-title" style={{ marginBottom: 0 }}>
                        {selectedEnquiry.reference} — {selectedEnquiry.contact?.organisation}
                      </h3>
                    </div>
                    <button
                      type="button"
                      className="btn btn--secondary"
                      onClick={() => setSelectedEnquiry(null)}
                    >
                      Close Inspector ✕
                    </button>
                  </div>

                  <div className="admin-detail-grid">
                    <div>
                      <span className="brand-spec-label">Contact Person</span>
                      <strong>{selectedEnquiry.contact?.name || '—'}</strong>
                      <span className="caption">{selectedEnquiry.contact?.buyerProfile}</span>
                    </div>
                    <div>
                      <span className="brand-spec-label">Email &amp; Phone</span>
                      <strong>{selectedEnquiry.contact?.email || '—'}</strong>
                      <span className="caption">{selectedEnquiry.contact?.phone || '—'}</span>
                    </div>
                    <div>
                      <span className="brand-spec-label">Brand &amp; Category</span>
                      <strong>{selectedEnquiry.requirement?.brand || 'NEOM Panels'}</strong>
                      <span className="caption">{selectedEnquiry.requirement?.category}</span>
                    </div>
                    <div>
                      <span className="brand-spec-label">Quantity &amp; Destination</span>
                      <strong>
                        {selectedEnquiry.requirement?.quantity || '—'}{' '}
                        {selectedEnquiry.requirement?.quantityUnit || ''}
                      </strong>
                      <span className="caption">
                        {selectedEnquiry.requirement?.destination || '—'}
                      </span>
                    </div>
                  </div>

                  <div
                    style={{
                      backgroundColor: 'var(--color-white)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '0.9rem 1rem'
                    }}
                  >
                    <span className="brand-spec-label" style={{ display: 'block', marginBottom: '0.25rem' }}>
                      Full Requirement Brief
                    </span>
                    <p style={{ margin: 0 }}>{selectedEnquiry.requirement?.description}</p>
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}

          {/* MODULE 2: SEO BLOG, ARTICLES & COMPANY NEWS CMS */}
          {activeTab === 'cms' ? (
            <div className="admin-module-panel">
              <div className="admin-panel-header">
                <div>
                  <h2 className="subsection-title" style={{ marginBottom: '0.2rem' }}>
                    SEO Blog Articles &amp; Company News CMS
                  </h2>
                  <p className="secondary-text" style={{ margin: 0, fontSize: '0.92rem' }}>
                    Publish new SEO buyer guides, technical plywood articles and company news
                    updates. All published posts appear immediately on{' '}
                    <Link href="/blog" target="_blank">
                      /blog ↗
                    </Link>
                    .
                  </p>
                </div>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn--primary"
                    onClick={() => {
                      setPostForm(EMPTY_POST_FORM);
                      setIsEditingPost(!isEditingPost);
                    }}
                  >
                    {isEditingPost ? '← Back to Articles List' : '+ Publish New Article / News'}
                  </button>
                </div>
              </div>

              {isEditingPost ? (
                <form className="admin-cms-editor" onSubmit={handleSavePost}>
                  <h3 className="subsection-title">
                    {postForm.id
                      ? `Edit Post: ${postForm.title}`
                      : 'Create New SEO Article or Company News'}
                  </h3>

                  <div className="form-row-split">
                    <div className="form-group">
                      <label className="form-label" htmlFor="cms-title">
                        Article / News Headline <span className="required-marker">*</span>
                      </label>
                      <input
                        id="cms-title"
                        type="text"
                        className="form-control"
                        placeholder="e.g., How to Specify 18mm Calibrated Plywood for Modular Wardrobes"
                        value={postForm.title}
                        onChange={(e) => setPostForm({ ...postForm, title: e.target.value })}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="cms-slug">
                        URL Slug (Auto-generated if left blank)
                      </label>
                      <input
                        id="cms-slug"
                        type="text"
                        className="form-control"
                        placeholder="how-to-specify-18mm-calibrated-plywood"
                        value={postForm.slug}
                        onChange={(e) => setPostForm({ ...postForm, slug: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="admin-filter-grid">
                    <div>
                      <label className="form-label" htmlFor="cms-type">
                        Post Type
                      </label>
                      <select
                        id="cms-type"
                        className="form-control"
                        value={postForm.type}
                        onChange={(e) => setPostForm({ ...postForm, type: e.target.value })}
                      >
                        <option value="SEO Article">SEO Article</option>
                        <option value="Company News">Company News</option>
                        <option value="Technical Guide">Technical Guide</option>
                        <option value="Product Update">Product Update</option>
                      </select>
                    </div>

                    <div>
                      <label className="form-label" htmlFor="cms-category">
                        Category
                      </label>
                      <select
                        id="cms-category"
                        className="form-control"
                        value={postForm.category}
                        onChange={(e) => setPostForm({ ...postForm, category: e.target.value })}
                      >
                        <option value="Furniture & Interiors">Furniture &amp; Interiors</option>
                        <option value="Industrial Packaging">Industrial Packaging</option>
                        <option value="Manufacturing & Quality">Manufacturing &amp; Quality</option>
                        <option value="Commercial Projects">Commercial Projects</option>
                        <option value="Sustainability & Corporate">
                          Sustainability &amp; Corporate
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="form-label" htmlFor="cms-brand">
                        Associated Brand
                      </label>
                      <select
                        id="cms-brand"
                        className="form-control"
                        value={postForm.brand}
                        onChange={(e) => setPostForm({ ...postForm, brand: e.target.value })}
                      >
                        <option value="NEOM Panels">NEOM Panels (Parent)</option>
                        <option value="Starwoods">Starwoods</option>
                        <option value="NEOM Packing Plywood">NEOM Packing Plywood</option>
                      </select>
                    </div>

                    <div>
                      <label className="form-label" htmlFor="cms-image">
                        Cover Visual
                      </label>
                      <select
                        id="cms-image"
                        className="form-control"
                        value={postForm.coverImage}
                        onChange={(e) => setPostForm({ ...postForm, coverImage: e.target.value })}
                      >
                        {COVER_IMAGE_PRESETS.map((img) => (
                          <option key={img.value} value={img.value}>
                            {img.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="cms-summary">
                      Executive Summary / Lead Paragraph <span className="required-marker">*</span>
                    </label>
                    <textarea
                      id="cms-summary"
                      className="form-control"
                      style={{ minHeight: '4.5rem' }}
                      placeholder="2–3 sentence summary shown on article cards and in search snippets…"
                      value={postForm.summary}
                      onChange={(e) => setPostForm({ ...postForm, summary: e.target.value })}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="cms-takeaways">
                      Key Buyer Takeaways (One bullet point per line)
                    </label>
                    <textarea
                      id="cms-takeaways"
                      className="form-control"
                      style={{ minHeight: '5rem' }}
                      placeholder="Uniform calibrated thickness speeds up CNC machining&#10;Match MR packaging plywood to covered storage and transit"
                      value={postForm.keyTakeaways}
                      onChange={(e) => setPostForm({ ...postForm, keyTakeaways: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="cms-content">
                      Full Article / News Body (Separate sections with blank lines; start
                      subheadings with ##)
                    </label>
                    <textarea
                      id="cms-content"
                      className="form-control"
                      style={{ minHeight: '10rem' }}
                      placeholder="## 1. Key Specification Considerations&#10;Write your detailed paragraph here...&#10;&#10;## 2. Application Guidance for Buyers&#10;Write the next section here..."
                      value={postForm.content}
                      onChange={(e) => setPostForm({ ...postForm, content: e.target.value })}
                    />
                  </div>

                  {/* SEO Metadata Box */}
                  <div className="admin-seo-meta-box">
                    <p className="eyebrow" style={{ marginBottom: '0.5rem' }}>
                      GOOGLE SEO &amp; META TAG SETTINGS
                    </p>
                    <div className="form-row-split">
                      <div className="form-group">
                        <label className="form-label" htmlFor="cms-seo-title">
                          SEO Meta Title
                        </label>
                        <input
                          id="cms-seo-title"
                          type="text"
                          className="form-control"
                          placeholder="Custom meta title for Google search results…"
                          value={postForm.seoTitle}
                          onChange={(e) => setPostForm({ ...postForm, seoTitle: e.target.value })}
                        />
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="cms-seo-keywords">
                          Target SEO Keywords (Comma-separated)
                        </label>
                        <input
                          id="cms-seo-keywords"
                          type="text"
                          className="form-control"
                          value={postForm.seoKeywords}
                          onChange={(e) =>
                            setPostForm({ ...postForm, seoKeywords: e.target.value })
                          }
                        />
                      </div>
                    </div>

                    <div className="form-group" style={{ marginBottom: 0 }}>
                      <label className="form-label" htmlFor="cms-seo-desc">
                        SEO Meta Description
                      </label>
                      <input
                        id="cms-seo-desc"
                        type="text"
                        className="form-control"
                        placeholder="150–160 character meta description for search engines…"
                        value={postForm.seoDescription}
                        onChange={(e) =>
                          setPostForm({ ...postForm, seoDescription: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="btn-group" style={{ marginTop: '1.25rem' }}>
                    <button type="submit" className="btn btn--primary" disabled={savingPost}>
                      {savingPost ? 'Publishing…' : 'Save & Publish Article →'}
                    </button>
                    <button
                      type="button"
                      className="btn btn--secondary"
                      onClick={() => setIsEditingPost(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              ) : (
                <>
                  <div className="admin-filter-grid">
                    <div>
                      <label htmlFor="cms-search" className="form-label">
                        Search Articles &amp; News
                      </label>
                      <input
                        id="cms-search"
                        type="search"
                        className="form-control"
                        placeholder="Search title, keyword or summary…"
                        value={postSearch}
                        onChange={(e) => setPostSearch(e.target.value)}
                      />
                    </div>

                    <div>
                      <label htmlFor="cms-type-filter" className="form-label">
                        Filter by Type
                      </label>
                      <select
                        id="cms-type-filter"
                        className="form-control"
                        value={postTypeFilter}
                        onChange={(e) => setPostTypeFilter(e.target.value)}
                      >
                        <option value="all">All Types ({posts.length})</option>
                        <option value="SEO Article">SEO Article</option>
                        <option value="Company News">Company News</option>
                        <option value="Technical Guide">Technical Guide</option>
                        <option value="Product Update">Product Update</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="cms-cat-filter" className="form-label">
                        Filter by Category
                      </label>
                      <select
                        id="cms-cat-filter"
                        className="form-control"
                        value={postCategoryFilter}
                        onChange={(e) => setPostCategoryFilter(e.target.value)}
                      >
                        <option value="all">All Categories</option>
                        <option value="Furniture & Interiors">Furniture &amp; Interiors</option>
                        <option value="Industrial Packaging">Industrial Packaging</option>
                        <option value="Manufacturing & Quality">
                          Manufacturing &amp; Quality
                        </option>
                        <option value="Commercial Projects">Commercial Projects</option>
                        <option value="Sustainability & Corporate">
                          Sustainability &amp; Corporate
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="admin-table-wrap">
                    <table className="spec-table admin-data-table">
                      <thead>
                        <tr>
                          <th>Article / News Title</th>
                          <th>Type &amp; Category</th>
                          <th>Brand Focus</th>
                          <th>SEO Keywords</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredPosts.map((post) => (
                          <tr key={post.slug}>
                            <td>
                              <Link
                                href={`/blog/${post.slug}`}
                                target="_blank"
                                style={{
                                  fontWeight: 700,
                                  color: 'var(--color-forest)',
                                  display: 'block'
                                }}
                              >
                                {post.title} ↗
                              </Link>
                              <span className="caption">/{post.slug}</span>
                            </td>
                            <td>
                              <span
                                className="brand-category-pill"
                                style={{ marginBottom: '0.25rem' }}
                              >
                                {post.type}
                              </span>
                              <div className="caption">{post.category}</div>
                            </td>
                            <td>{post.brand || 'NEOM Panels'}</td>
                            <td>
                              <span className="caption">
                                {(post.seoKeywords || []).slice(0, 3).join(', ')}
                              </span>
                            </td>
                            <td>
                              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                <button
                                  type="button"
                                  className="btn btn--secondary"
                                  style={{
                                    minHeight: '34px',
                                    padding: '0.25rem 0.65rem',
                                    fontSize: '0.8rem'
                                  }}
                                  onClick={() => handleEditPostClick(post)}
                                >
                                  Edit
                                </button>
                                <button
                                  type="button"
                                  className="btn btn--secondary"
                                  style={{
                                    minHeight: '34px',
                                    padding: '0.25rem 0.65rem',
                                    fontSize: '0.8rem'
                                  }}
                                  onClick={() => handleDeletePost(post.slug, post.title)}
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </>
              )}
            </div>
          ) : null}

          {/* MODULE 3: DOCUMENT REQUESTS */}
          {activeTab === 'documents' ? (
            <div className="admin-module-panel">
              <div className="admin-panel-header">
                <div>
                  <h2 className="subsection-title" style={{ marginBottom: '0.2rem' }}>
                    Technical Document &amp; Corporate Literature Requests (
                    {filteredDocRequests.length})
                  </h2>
                  <p className="secondary-text" style={{ margin: 0, fontSize: '0.92rem' }}>
                    Filter and manage B2B requests for specification sheets, brand catalogues and
                    corporate governance documents.
                  </p>
                </div>
              </div>

              <div className="admin-filter-grid">
                <div>
                  <label htmlFor="doc-search" className="form-label">
                    Search Document Requests
                  </label>
                  <input
                    id="doc-search"
                    type="search"
                    className="form-control"
                    placeholder="Ref ID, company, email or document title…"
                    value={docSearch}
                    onChange={(e) => setDocSearch(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="doc-cat-filter" className="form-label">
                    Filter by Document Category
                  </label>
                  <select
                    id="doc-cat-filter"
                    className="form-control"
                    value={docCategory}
                    onChange={(e) => setDocCategory(e.target.value)}
                  >
                    <option value="all">All Document Categories</option>
                    <option value="Corporate Information">Corporate Information</option>
                    <option value="Brand Information">Brand Information</option>
                    <option value="Technical Documents">Technical Documents</option>
                    <option value="Corporate Policies">Corporate Policies</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="doc-status-filter" className="form-label">
                    Filter by Status
                  </label>
                  <select
                    id="doc-status-filter"
                    className="form-control"
                    value={docStatus}
                    onChange={(e) => setDocStatus(e.target.value)}
                  >
                    <option value="all">All Statuses</option>
                    <option value="pending">Pending Review</option>
                    <option value="sent">Document Sent</option>
                    <option value="archived">Archived</option>
                  </select>
                </div>
              </div>

              <div className="admin-table-wrap">
                <table className="spec-table admin-data-table">
                  <thead>
                    <tr>
                      <th>Reference &amp; Date</th>
                      <th>Requested Document</th>
                      <th>Company &amp; Contact</th>
                      <th>Application Scope</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredDocRequests.map((req) => (
                      <tr key={req.reference}>
                        <td>
                          <strong style={{ color: 'var(--color-forest)', display: 'block' }}>
                            {req.reference}
                          </strong>
                          <span className="caption">
                            {req.createdAt
                              ? new Date(req.createdAt).toLocaleDateString('en-IN')
                              : '—'}
                          </span>
                        </td>
                        <td>
                          <strong>{req.documentTitle}</strong>
                          <div className="caption">{req.documentCategory}</div>
                        </td>
                        <td>
                          <strong>{req.contact?.organisation}</strong>
                          <div className="caption">
                            {req.contact?.name} · {req.contact?.email}
                          </div>
                        </td>
                        <td>{req.applicationScope}</td>
                        <td>
                          <select
                            aria-label={`Status for ${req.reference}`}
                            className="admin-status-select"
                            value={req.status || 'pending'}
                            onChange={(e) => handleUpdateDocStatus(req.reference, e.target.value)}
                          >
                            <option value="pending">Pending Review</option>
                            <option value="sent">Document Sent</option>
                            <option value="archived">Archived</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ) : null}

          {/* MODULE 4: MONGODB & DATABASE SETTINGS */}
          {activeTab === 'database' ? (
            <div className="admin-module-panel">
              <h2 className="subsection-title">
                MongoDB Atlas &amp; Hybrid Persistence Configuration
              </h2>
              <p className="secondary-text">
                NEOM Panels uses a dual-layer persistence engine powered by the official{' '}
                <code>mongodb</code> Node.js driver. All enquiries (<code>enquiries</code>),
                document requests (<code>document_requests</code>), and blog/news posts (
                <code>posts</code>) automatically sync with MongoDB whenever{' '}
                <code>MONGODB_URI</code> is configured, while maintaining an instant local durable
                JSON mirror.
              </p>

              <div className="mr-grade-notice-box" style={{ marginBottom: '1.5rem' }}>
                <p style={{ marginBottom: '0.35rem' }}>
                  <strong>Current Connection Mode:</strong> {mongoStatus.mode}
                </p>
                <p style={{ marginBottom: 0 }}>{mongoStatus.message}</p>
              </div>

              <form onSubmit={handleSaveMongoConfig} style={{ maxWidth: '680px' }}>
                <div className="form-group">
                  <label className="form-label" htmlFor="mongo-uri-input">
                    MongoDB Connection URI (<code>mongodb+srv://...</code> or{' '}
                    <code>mongodb://...</code>)
                  </label>
                  <input
                    id="mongo-uri-input"
                    type="text"
                    className="form-control"
                    placeholder="mongodb+srv://username:password@cluster0.mongodb.net/?retryWrites=true&w=majority"
                    value={mongoUriInput}
                    onChange={(e) => setMongoUriInput(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="mongo-db-input">
                    Database Name
                  </label>
                  <input
                    id="mongo-db-input"
                    type="text"
                    className="form-control"
                    value={mongoDbNameInput}
                    onChange={(e) => setMongoDbNameInput(e.target.value)}
                  />
                </div>

                <button type="submit" className="btn btn--primary" disabled={savingMongo}>
                  {savingMongo
                    ? 'Testing & Syncing…'
                    : 'Save MongoDB URI & Sync All Collections'}
                </button>
              </form>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
