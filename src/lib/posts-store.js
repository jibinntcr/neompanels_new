import fs from 'node:fs';
import path from 'node:path';
import { STORAGE_DIR } from '@/lib/storage';
import { getMongoDatabase } from '@/lib/mongodb';

export const POSTS_JSON_PATH = path.join(STORAGE_DIR, 'posts.json');

export function normalizePostType(type) {
  const raw = String(type || '').trim();
  if (!raw || raw.toLowerCase() === 'seo article' || raw.toLowerCase() === 'seo guide') {
    return 'Industry Insight';
  }
  return raw;
}

export const INITIAL_SEO_POSTS = [
  {
    id: 'post-calibrated-plywood-guide',
    slug: 'how-to-choose-calibrated-plywood-for-modular-kitchens-and-furniture-in-india',
    title: 'How to Choose Calibrated Plywood for Modular Kitchens & OEM Furniture in India',
    type: 'Industry Insight',
    category: 'Furniture & Interiors',
    brand: 'Starwoods',
    featured: true,
    status: 'published',
    publishedAt: '2026-10-28T09:00:00Z',
    updatedAt: '2026-11-04T09:00:00Z',
    author: 'NEOM Panels Technical Desk',
    readingTime: '6 min read',
    coverImage: '/assets/industry-modular-interiors.jpg',
    coverImageAlt: 'Modular kitchen and wardrobe cabinetry built with calibrated wood-panel substrates.',
    summary:
      'Learn why uniform sheet thickness, balanced hardwood core layup and moisture-appropriate grade selection matter when sourcing plywood for CNC furniture lines and modular kitchens.',
    keyTakeaways: [
      'Calibrated plywood passes through precision wide-belt sanders after pressing to achieve uniform thickness across the entire sheet.',
      'Uniform thickness prevents gaps at cam-lock joints, uneven laminate pressing and CNC router depth variations.',
      'Match the panel grade to the zone: dry bedroom/living-room carcasses have different moisture exposure than sink-base kitchen units.'
    ],
    sections: [
      {
        heading: '1. Why thickness uniformity matters in modern furniture production',
        body: 'In traditional hand-carpentry, small variations in plywood thickness were planed or shimmed on site. In automated OEM furniture factories and modular kitchen lines, however, panels are cut on beam saws or nested CNC routers, edge-banded at high speed and assembled using precision dowels or cam-locks. Even a 0.8 mm thickness variation across a sheet can cause visible lippage at cabinet joints or uneven pressure during laminate and acrylic pressing.'
      },
      {
        heading: '2. What makes a panel truly calibrated?',
        body: 'Calibration begins before sanding. At NEOM Panels, incoming veneers are graded for uniform thickness and conditioned to target moisture levels before multi-ply cross-laminated assembly. After controlled hot-pressing and conditioning, sheets are calibrated so both faces are parallel and flat.'
      },
      {
        heading: '3. Selecting the right panel specification for Starwoods applications',
        body: 'When specifying panels under our Starwoods brand for furniture and interiors, share your target nominal thickness (such as 6 mm for back panels, 12 mm for drawers, or 16 mm / 18 mm for carcasses and shutters), surface finishing method (HPL laminate, acrylic, veneer or PU paint) and batch schedule.'
      }
    ],
    seoTitle:
      'How to Choose Calibrated Plywood for Modular Kitchens & Furniture in India | NEOM Panels',
    seoDescription:
      'Complete B2B buyer guide to calibrated plywood for modular kitchens, wardrobes and OEM furniture manufacturing in India. Learn about thickness tolerance, core density and CNC machining.',
    seoKeywords: [
      'calibrated plywood manufacturer India',
      'plywood for modular kitchens India',
      '18mm calibrated plywood wholesale',
      'OEM furniture plywood substrates',
      'Starwoods plywood India',
      'wardrobe carcass plywood specification'
    ]
  },
  {
    id: 'post-mr-packing-plywood-guide',
    slug: 'mr-packaging-grade-plywood-vs-waterproof-plywood-guide-for-industrial-crating',
    title: 'MR Packaging-Grade Plywood vs. Waterproof Plywood: A Practical Guide for Industrial Crating',
    type: 'Technical Guide',
    category: 'Industrial Packaging',
    brand: 'NEOM Packing Plywood',
    featured: true,
    status: 'published',
    publishedAt: '2026-10-30T10:30:00Z',
    updatedAt: '2026-11-04T10:30:00Z',
    author: 'NEOM Packaging Solutions Team',
    readingTime: '5 min read',
    coverImage: '/assets/packing-plywood-showcase.jpg',
    coverImageAlt: 'Stacked MR packaging-grade plywood sheets alongside a heavy-duty industrial packing crate.',
    summary:
      'Understand what Moisture-Resistant (MR) packaging-grade plywood is designed to handle in packing cases, crates and dividers—and how to specify the right sheet thickness for your load.',
    keyTakeaways: [
      'Moisture-Resistant (MR) plywood resists ambient warehouse humidity and transit dampness, but it is not waterproof or meant for continuous outdoor immersion.',
      'NEOM Packing Plywood is engineered specifically for industrial packing cases, export crates, pallet collars, dividers and protective liners.',
      'Sharing your cargo weight, crate dimensions, required sheet thickness (mm) and recurring schedule helps our team quote accurately.'
    ],
    sections: [
      {
        heading: '1. Understanding MR grade in industrial packaging',
        body: 'Industrial buyers frequently ask what "MR" means when sourcing plywood for packing boxes and machinery crates. MR stands for Moisture Resistant. It indicates that the panel is bonded to withstand normal indoor humidity and enclosed transport conditions without delaminating. However, moisture-resistant plywood is not waterproof—buyers should always confirm suitability against expected storage, handling and transit conditions.'
      },
      {
        heading: '2. Common industrial applications for NEOM Packing Plywood',
        body: 'NEOM Packing Plywood supplies B2B packaging fabricators and manufacturing plants across three primary application areas: (1) Enclosed packing cases for machinery and engineered components, (2) Crates and protective outer sheathing, and (3) Internal dividers, layer pads, base liners and custom-cut packaging panels.'
      },
      {
        heading: '3. Checklist for requesting a packaging plywood quotation',
        body: 'To streamline your quotation, provide your required nominal thickness in mm, sheet dimensions (in mm or ft), estimated volume (in sheets, sq. ft or truckload), one-time or monthly recurring schedule, and delivery city/state.'
      }
    ],
    seoTitle:
      'MR Packaging-Grade Plywood Guide for Industrial Packing Cases & Crates | NEOM Packing Plywood',
    seoDescription:
      'Learn how to specify Moisture-Resistant (MR) packaging-grade plywood for industrial packing cases, export crates, dividers and enclosures in India.',
    seoKeywords: [
      'MR grade packing plywood India',
      'industrial packaging plywood manufacturer',
      'plywood for packing cases and crates',
      'moisture resistant packaging plywood',
      'NEOM Packing Plywood',
      'export crate plywood sheets wholesale'
    ]
  },
  {
    id: 'post-neom-packing-plywood-launch',
    slug: 'neom-panels-introduces-neom-packing-plywood-for-industrial-cases-and-crates',
    title: 'Company News: NEOM Panels Introduces NEOM Packing Plywood for Industrial Packaging Buyers',
    type: 'Company News',
    category: 'Industrial Packaging',
    brand: 'NEOM Packing Plywood',
    featured: true,
    status: 'published',
    publishedAt: '2026-11-01T08:00:00Z',
    updatedAt: '2026-11-04T08:00:00Z',
    author: 'NEOM Panels Corporate Communications',
    readingTime: '4 min read',
    coverImage: '/assets/packing-plywood-crates.jpg',
    coverImageAlt: 'Industrial plywood packing cases and crates prepared for dispatch.',
    summary:
      'NEOM Panels expands its manufactured brand portfolio with NEOM Packing Plywood—a dedicated product brand serving packing-case fabricators, logistics suppliers and OEM dispatch teams across India.',
    keyTakeaways: [
      'NEOM Packing Plywood joins Starwoods as the second dedicated product brand manufactured by NEOM Panels.',
      'Focused exclusively on Moisture-Resistant (MR) packaging-grade plywood for cases, crates, dividers and enclosures.',
      'Available for both one-time batch requirements and recurring monthly or quarterly industrial supply schedules.'
    ],
    sections: [
      {
        heading: '1. Two focused brands under one manufacturing company',
        body: 'NEOM Panels operates its own wood-panel manufacturing facility in India. While our Starwoods brand continues to serve furniture manufacturers, modular kitchen fabricators and interior contractors, industrial buyers needed a dedicated channel for practical, moisture-resistant packaging plywood. NEOM Packing Plywood was created to serve this exact requirement.'
      },
      {
        heading: '2. Built for packing cases, crates and recurring industrial supply',
        body: 'Industrial packaging fabricators and factory dispatch departments rely on predictable sheet dimensions, reliable nailing and screwing behaviour, and timely batch replenishment. NEOM Packing Plywood supports both single purchase orders and scheduled recurring deliveries.'
      }
    ],
    seoTitle:
      'NEOM Panels Launches NEOM Packing Plywood for Industrial Cases & Crates | Company News',
    seoDescription:
      'NEOM Panels announces NEOM Packing Plywood, a dedicated MR packaging-grade plywood brand for packing cases, crates and industrial packaging buyers in India.',
    seoKeywords: [
      'NEOM Packing Plywood launch',
      'NEOM Panels news',
      'industrial packing plywood brand India',
      'packing case plywood supplier India'
    ]
  },
  {
    id: 'post-4-stage-quality-inspection',
    slug: 'inside-our-4-stage-wood-panel-quality-inspection-thickness-squareness-and-bonding',
    title: 'Inside Our 4-Stage Wood-Panel Quality Inspection: Thickness, Squareness & Core Bonding',
    type: 'Industry Insight',
    category: 'Manufacturing & Quality',
    brand: 'NEOM Panels',
    featured: false,
    status: 'published',
    publishedAt: '2026-11-02T11:00:00Z',
    updatedAt: '2026-11-04T11:00:00Z',
    author: 'NEOM Panels Quality & Production Team',
    readingTime: '5 min read',
    coverImage: '/assets/hero-neom-flagship.jpg',
    coverImageAlt: 'Calibrated multi-ply wood panels inspected with precision calipers at NEOM Panels.',
    summary:
      'A closer look at how NEOM Panels inspects incoming veneers, hot-press parameters, dimensional squareness and surface finish before palletised dispatch from our factory in India.',
    keyTakeaways: [
      'Stage 01 reviews incoming timber, veneer thickness uniformity and moisture content before layup.',
      'Stage 02 monitors press temperature, pressure and curing cycles aligned to the required panel grade.',
      'Stage 03 & 04 verify nominal thickness, diagonal squareness, edge straightness and pallet protection prior to dispatch.'
    ],
    sections: [
      {
        heading: '1. Controlling quality from the core out',
        body: 'A wood panel’s flatness and machining stability are determined long before final sanding. By grading incoming veneers and balancing cross-band grain orientation during layup, we minimise internal stresses that cause warping when a sheet is cut on a saw or CNC router.'
      },
      {
        heading: '2. Dimensional and surface checks before release',
        body: 'Before any lot is cleared for palletised dispatch, sheets are checked for thickness uniformity across corners and centre, length and width tolerances, diagonal squareness, edge integrity and face condition.'
      }
    ],
    seoTitle:
      'Wood-Panel Quality Inspection & Calibration Process in India | NEOM Panels Manufacturing',
    seoDescription:
      'Discover how NEOM Panels conducts 4-stage manufacturing quality checks across veneer selection, hot-pressing, calibration and palletised B2B dispatch in India.',
    seoKeywords: [
      'plywood quality inspection India',
      'calibrated plywood manufacturing process',
      'wood panel factory quality control',
      'NEOM Panels manufacturing India'
    ]
  },
  {
    id: 'post-commercial-project-boq-guide',
    slug: 'specifying-wood-panels-for-commercial-interiors-and-institutional-tenders',
    title: 'Specifying Wood Panels for Commercial Fit-Outs & Institutional Tender BOQs',
    type: 'Industry Insight',
    category: 'Commercial Projects',
    brand: 'Starwoods',
    featured: false,
    status: 'published',
    publishedAt: '2026-11-03T09:30:00Z',
    updatedAt: '2026-11-04T09:30:00Z',
    author: 'NEOM Panels Project Specification Desk',
    readingTime: '5 min read',
    coverImage: '/assets/industry-commercial-projects.jpg',
    coverImageAlt: 'Commercial office boardroom finished with architectural wood panelling.',
    summary:
      'How turnkey interior contractors, architects and institutional procurement teams can align bills of quantities (BOQs), thickness schedules and phased site deliveries.',
    keyTakeaways: [
      'Consolidating panel thicknesses across wall panelling, partitions and joinery simplifies site storage and reduces offcut waste.',
      'Phased floor-by-floor dispatch prevents site congestion and moisture damage during civil and MEP works.',
      'Always request grade-specific technical documentation matched to the tender schedule.'
    ],
    sections: [
      {
        heading: '1. Aligning BOQ line items with practical panel production',
        body: 'Commercial fit-out projects for offices, hospitality, healthcare and educational institutions often involve multiple thicknesses and surface finishes. Sharing your BOQ schedule early allows our team to align production batches with your floor-wise installation timeline.'
      },
      {
        heading: '2. Site storage and handling best practices',
        body: 'Delivering wood panels to an active construction site requires dry, level, off-ground pallet storage away from wet plastering or curing concrete. Our team provides handling guidance alongside product documentation for project buyers.'
      }
    ],
    seoTitle:
      'Specifying Wood Panels for Commercial Interiors & Institutional BOQs | NEOM Panels',
    seoDescription:
      'Practical guide for interior contractors, architects and institutional procurement teams sourcing plywood and wood panels for commercial projects in India.',
    seoKeywords: [
      'commercial interior plywood supplier India',
      'institutional plywood procurement BOQ',
      'architectural joinery wood panels India',
      'turnkey interior contractor plywood supply'
    ]
  },
  {
    id: 'post-sustainable-veneer-sourcing',
    slug: 'responsible-timber-and-agro-forestry-veneer-sourcing-in-indian-wood-panel-manufacturing',
    title: 'Responsible Timber Sourcing & Material Efficiency in Wood-Panel Manufacturing',
    type: 'Company News',
    category: 'Sustainability & Corporate',
    brand: 'NEOM Panels',
    featured: false,
    status: 'published',
    publishedAt: '2026-11-04T07:30:00Z',
    updatedAt: '2026-11-04T07:30:00Z',
    author: 'NEOM Panels Sustainability & Operations',
    readingTime: '4 min read',
    coverImage: '/assets/sustainability-materials-studio.jpg',
    coverImageAlt: 'Natural wood veneers and calibrated panel samples in the NEOM Panels studio.',
    summary:
      'How practical choices in raw-material documentation, factory yield discipline, offcut segregation and accurate grade guidance support responsible growth aligned with UN SDG 12.',
    keyTakeaways: [
      'Matching the right panel grade to the application prevents premature replacement and material waste.',
      'Supplier origin documentation links incoming timber and veneer inputs to production batch records.',
      'Primary alignment with UN Sustainable Development Goal 12 (Responsible Consumption and Production).'
    ],
    sections: [
      {
        heading: '1. Sustainability begins with material yield and durability',
        body: 'In wood-panel manufacturing, the most immediate environmental impact comes from how efficiently raw timber and veneer are converted into finished sheets—and how long those sheets last in service. Specifying the right grade from day one avoids premature panel failure.'
      },
      {
        heading: '2. Clear documentation and workplace safety',
        body: 'Alongside raw-material traceability and offcut segregation, our factory operations prioritise machine guarding, dust management and clear grade labelling so buyers know exactly how each panel should be stored and used.'
      }
    ],
    seoTitle:
      'Responsible Timber Sourcing & Sustainable Wood-Panel Manufacturing in India | NEOM Panels',
    seoDescription:
      'Learn how NEOM Panels approaches responsible timber and veneer sourcing, factory yield discipline, workplace safety and UN SDG 12 alignment in India.',
    seoKeywords: [
      'sustainable wood panels India',
      'responsible timber sourcing plywood India',
      'eco-friendly plywood manufacturer India',
      'NEOM Panels sustainability SDG 12'
    ]
  }
];

function ensurePostsFileInitialized() {
  fs.mkdirSync(STORAGE_DIR, { recursive: true });
  if (!fs.existsSync(POSTS_JSON_PATH)) {
    fs.writeFileSync(POSTS_JSON_PATH, JSON.stringify(INITIAL_SEO_POSTS, null, 2), 'utf8');
  }
}

export function slugifyTitle(text) {
  return String(text || '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 96);
}

export function getLocalPosts() {
  ensurePostsFileInitialized();
  try {
    const raw = fs.readFileSync(POSTS_JSON_PATH, 'utf8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed.map((p) => ({ ...p, type: normalizePostType(p.type) }));
    }
  } catch (_) {
    // Fallback to initial seed
  }
  return INITIAL_SEO_POSTS.map((p) => ({ ...p, type: normalizePostType(p.type) }));
}

export function saveLocalPosts(posts) {
  ensurePostsFileInitialized();
  const normalized = (posts || []).map((p) => ({ ...p, type: normalizePostType(p.type) }));
  fs.writeFileSync(POSTS_JSON_PATH, JSON.stringify(normalized, null, 2), 'utf8');
}

export async function getAllPosts({ includeDrafts = false } = {}) {
  let posts = getLocalPosts();

  try {
    const db = await getMongoDatabase();
    if (db) {
      const col = db.collection('posts');
      const count = await col.countDocuments();
      if (count === 0 && posts.length > 0) {
        await col.insertMany(posts.map((p) => ({ ...p, type: normalizePostType(p.type) })));
      } else if (count > 0) {
        const mongoPosts = await col.find({}, { projection: { _id: 0 } }).toArray();
        if (mongoPosts.length > 0) {
          const hadLegacyType = mongoPosts.some(
            (p) => String(p.type || '').toLowerCase() === 'seo article'
          );
          posts = mongoPosts.map((p) => ({ ...p, type: normalizePostType(p.type) }));
          saveLocalPosts(posts);
          if (hadLegacyType) {
            await col.updateMany(
              { type: 'SEO Article' },
              { $set: { type: 'Industry Insight' } }
            );
          }
        }
      }
    }
  } catch (_) {
    // Fallback to local posts
  }

  const filtered = includeDrafts
    ? posts
    : posts.filter((p) => (p.status || 'published') === 'published');

  return filtered.sort(
    (a, b) => new Date(b.publishedAt || 0).getTime() - new Date(a.publishedAt || 0).getTime()
  );
}

export async function getPostBySlug(slug, { includeDrafts = false } = {}) {
  const posts = await getAllPosts({ includeDrafts });
  return posts.find((p) => p.slug === slug || p.id === slug) || null;
}

export async function upsertPost(payload) {
  const posts = await getAllPosts({ includeDrafts: true });
  const now = new Date().toISOString();

  const title = String(payload.title || '').trim();
  if (!title) {
    throw new Error('Post title is required.');
  }

  const slug = payload.slug ? slugifyTitle(payload.slug) : slugifyTitle(title);
  const existingIdx = posts.findIndex(
    (p) => (payload.id && p.id === payload.id) || p.slug === slug
  );
  const existing = existingIdx >= 0 ? posts[existingIdx] : null;

  const sections = Array.isArray(payload.sections)
    ? payload.sections.filter((s) => s && (s.heading || s.body))
    : typeof payload.content === 'string' && payload.content.trim()
      ? payload.content
          .trim()
          .split(/\n{2,}/)
          .map((block, idx) => {
            const lines = block.trim().split('\n');
            if (lines.length > 1 && lines[0].length < 110) {
              return {
                heading: lines[0].replace(/^#+\s*/, ''),
                body: lines.slice(1).join(' ').trim()
              };
            }
            return {
              heading: idx === 0 ? 'Overview' : `Section ${idx + 1}`,
              body: block.trim()
            };
          })
      : existing?.sections || [];

  const keyTakeaways = Array.isArray(payload.keyTakeaways)
    ? payload.keyTakeaways.map((k) => String(k).trim()).filter(Boolean)
    : typeof payload.keyTakeaways === 'string'
      ? payload.keyTakeaways
          .split('\n')
          .map((k) => k.trim())
          .filter(Boolean)
      : existing?.keyTakeaways || [];

  const seoKeywords = Array.isArray(payload.seoKeywords)
    ? payload.seoKeywords.map((k) => String(k).trim()).filter(Boolean)
    : typeof payload.seoKeywords === 'string'
      ? payload.seoKeywords
          .split(',')
          .map((k) => k.trim())
          .filter(Boolean)
      : existing?.seoKeywords || ['NEOM Panels', 'wood panel manufacturing India'];

  const record = {
    id: existing?.id || payload.id || `post-${Date.now()}`,
    slug,
    title,
    type: normalizePostType(payload.type || existing?.type || 'Industry Insight'),
    category: String(payload.category || existing?.category || 'Furniture & Interiors').trim(),
    brand: String(payload.brand || existing?.brand || 'NEOM Panels').trim(),
    featured:
      payload.featured !== undefined ? Boolean(payload.featured) : Boolean(existing?.featured),
    status: String(payload.status || existing?.status || 'published').trim(),
    publishedAt: existing?.publishedAt || payload.publishedAt || now,
    updatedAt: now,
    author: String(payload.author || existing?.author || 'NEOM Panels Editorial Desk').trim(),
    readingTime: String(payload.readingTime || existing?.readingTime || '5 min read').trim(),
    coverImage: String(
      payload.coverImage || existing?.coverImage || '/assets/hero-neom-flagship.jpg'
    ).trim(),
    coverImageAlt: String(
      payload.coverImageAlt || existing?.coverImageAlt || title
    ).trim(),
    summary: String(payload.summary || existing?.summary || '').trim(),
    keyTakeaways,
    sections,
    seoTitle: String(payload.seoTitle || `${title} | NEOM Panels`).trim(),
    seoDescription: String(payload.seoDescription || payload.summary || title).trim(),
    seoKeywords
  };

  if (existingIdx >= 0) {
    posts[existingIdx] = record;
  } else {
    posts.unshift(record);
  }

  saveLocalPosts(posts);

  try {
    const db = await getMongoDatabase();
    if (db) {
      await db.collection('posts').updateOne({ id: record.id }, { $set: record }, { upsert: true });
    }
  } catch (_) {
    // Local durable store already updated
  }

  return record;
}

export async function deletePostBySlugOrId(identifier) {
  const posts = await getAllPosts({ includeDrafts: true });
  const target = posts.find((p) => p.id === identifier || p.slug === identifier);
  if (!target) {
    return false;
  }
  const remaining = posts.filter((p) => p.id !== target.id && p.slug !== target.slug);
  saveLocalPosts(remaining);

  try {
    const db = await getMongoDatabase();
    if (db) {
      await db.collection('posts').deleteOne({ id: target.id });
    }
  } catch (_) {
    // Ignore
  }
  return true;
}
