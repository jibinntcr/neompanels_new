import Link from 'next/link';
import { buildPageMetadata, SITE_URL } from '@/lib/seo';

const PROFILE_PATH = '/team/jibin-n';
const PROFILE_URL = `${SITE_URL}${PROFILE_PATH}`;
const PORTRAIT_WEBP_PATH = '/assets/team/jibin-n-neom-panels-managing-director.webp';
const PORTRAIT_PNG_PATH = '/assets/team/jibin-n-neom-panels-managing-director.png';
const PORTRAIT_ALT = 'Jibin N, Managing Director of NEOM Panels';
const LINKEDIN_URL = 'https://www.linkedin.com/in/jibintcr/';

export const metadata = buildPageMetadata({
  title: 'Jibin N | Managing Director | NEOM Panels',
  absoluteTitle: 'Jibin N | Managing Director | NEOM Panels',
  description:
    'Meet Jibin N, Managing Director of NEOM Panels, an IT professional and entrepreneur focused on strategic direction, brand development and business growth.',
  path: PROFILE_PATH,
  type: 'profile',
  ogImage: PORTRAIT_WEBP_PATH,
  ogImageAlt: PORTRAIT_ALT,
  ogImages: [
    {
      url: PORTRAIT_WEBP_PATH,
      width: 800,
      height: 800,
      alt: PORTRAIT_ALT
    },
    {
      url: PORTRAIT_PNG_PATH,
      width: 800,
      height: 800,
      alt: PORTRAIT_ALT
    }
  ],
  keywords: [
    'Jibin N',
    'Jibin N Managing Director NEOM Panels',
    'Jibin N NEOM Panels',
    'Managing Director NEOM Panels',
    'Infinio Technology Solutions',
    'Flexon Sports Foundation',
    'NEOM Panels leadership'
  ]
});

const RESPONSIBILITIES = [
  {
    title: 'Strategic Direction',
    description:
      'Guiding business priorities and supporting the company’s long-term development.'
  },
  {
    title: 'Brand Development',
    description:
      'Strengthening NEOM Panels’ identity and communicating its products and capabilities clearly.'
  },
  {
    title: 'Digital Capabilities and Business Growth',
    description:
      'Improving digital customer touchpoints and supporting relationships that contribute to business growth.'
  }
];

const PROFESSIONAL_ACTIVITIES = [
  {
    organisation: 'NEOM Panels',
    role: 'Managing Director',
    summary:
      'Guides strategic direction, brand development (including Starwoods and NEOM Packing Plywood) and business growth across wood-panel manufacturing and B2B supply.'
  },
  {
    organisation: 'Infinio Technology Solutions',
    role: 'Founder',
    summary:
      'Entrepreneurial leadership in information technology solutions and digital systems.'
  },
  {
    organisation: 'Flexon Sports Foundation',
    role: 'Founder',
    summary: 'Founder supporting community and sports development initiatives.'
  },
  {
    organisation: 'BITS Pilani Work Integrated Learning Programmes (WILP)',
    role: 'Teaching & Evaluation Activities',
    summary:
      'Academic teaching and evaluation involvement through BITS Pilani’s Work Integrated Learning Programmes.'
  },
  {
    organisation: 'ISTD Thrissur Chapter',
    role: 'Professional Development Involvement',
    summary:
      'Participation in professional learning and development activities through the Indian Society for Training & Development (ISTD) Thrissur Chapter.'
  }
];

export default function JibinNProfilePage() {
  const profileJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        '@id': `${PROFILE_URL}#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: SITE_URL
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Team',
            item: `${SITE_URL}/team`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Jibin N',
            item: PROFILE_URL
          }
        ]
      },
      {
        '@type': 'ImageObject',
        '@id': `${PROFILE_URL}#primaryimage`,
        url: `${SITE_URL}${PORTRAIT_WEBP_PATH}`,
        contentUrl: `${SITE_URL}${PORTRAIT_WEBP_PATH}`,
        width: 800,
        height: 800,
        caption: PORTRAIT_ALT
      },
      {
        '@type': 'Person',
        '@id': `${PROFILE_URL}#person`,
        name: 'Jibin N',
        jobTitle: 'Managing Director',
        url: PROFILE_URL,
        description:
          'Jibin N is an IT professional and entrepreneur serving as the Managing Director of NEOM Panels. He guides the company’s strategic direction, brand development and business growth, with a focus on digital capabilities, customer experience and business relationships.',
        image: {
          '@id': `${PROFILE_URL}#primaryimage`
        },
        worksFor: {
          '@id': `${SITE_URL}/#organization`
        },
        affiliation: [
          {
            '@type': 'Organization',
            name: 'Infinio Technology Solutions'
          },
          {
            '@type': 'Organization',
            name: 'Flexon Sports Foundation'
          }
        ],
        memberOf: [
          {
            '@type': 'Organization',
            name: 'ISTD Thrissur Chapter'
          }
        ],
        sameAs: [LINKEDIN_URL]
      },
      {
        '@type': 'ProfilePage',
        '@id': `${PROFILE_URL}#profilepage`,
        url: PROFILE_URL,
        name: 'Jibin N | Managing Director | NEOM Panels',
        description:
          'Meet Jibin N, Managing Director of NEOM Panels, an IT professional and entrepreneur focused on strategic direction, brand development and business growth.',
        inLanguage: 'en-IN',
        isPartOf: {
          '@id': `${SITE_URL}/#website`
        },
        breadcrumb: {
          '@id': `${PROFILE_URL}#breadcrumb`
        },
        primaryImageOfPage: {
          '@id': `${PROFILE_URL}#primaryimage`
        },
        about: {
          '@id': `${PROFILE_URL}#person`
        },
        mainEntity: {
          '@id': `${PROFILE_URL}#person`
        }
      }
    ]
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileJsonLd) }}
      />

      {/* BREADCRUMB & PROFILE HERO */}
      <section
        className="page-header section--architectural-grid"
        aria-labelledby="main-heading"
      >
        <div className="container">
          <div className="exec-profile-nav-row">
            <nav className="breadcrumb-nav" aria-label="Breadcrumb">
              <ol className="breadcrumb-list">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/team">Team</Link>
                </li>
                <li aria-current="page">Jibin N</li>
              </ol>
            </nav>

            <Link href="/team" className="exec-back-link">
              <span aria-hidden="true">←</span>
              <span>Back to Team</span>
            </Link>
          </div>

          <div className="exec-profile-hero-card">
            <div className="exec-profile-portrait-col">
              <figure className="exec-profile-portrait-frame">
                <picture>
                  <source srcSet={PORTRAIT_WEBP_PATH} type="image/webp" />
                  <img
                    src={PORTRAIT_WEBP_PATH}
                    alt={PORTRAIT_ALT}
                    width="800"
                    height="800"
                    sizes="(max-width: 768px) 100vw, 320px"
                    fetchPriority="high"
                    decoding="async"
                    className="exec-profile-portrait-img"
                  />
                </picture>
              </figure>
            </div>

            <div className="exec-profile-intro-col">
              <p className="eyebrow" style={{ marginBottom: '0.4rem' }}>
                EXECUTIVE LEADERSHIP PROFILE
              </p>
              <h1 id="main-heading" tabIndex={-1} className="exec-profile-name">
                Jibin N
              </h1>
              <p className="exec-profile-designation">Managing Director, NEOM Panels</p>
              <p className="exec-profile-supporting">
                Strategic Direction, Brand Development &amp; Business Growth
              </p>

              <div className="exec-profile-bio-block" aria-label="Biography">
                <p>
                  Jibin N is an IT professional and entrepreneur serving as the Managing Director of
                  NEOM Panels. He guides the company’s strategic direction, brand development and
                  business growth, with a focus on digital capabilities, customer experience and
                  business relationships.
                </p>
                <p>
                  He is the Founder of Infinio Technology Solutions and Flexon Sports Foundation.
                  His professional activities also include teaching and evaluation through BITS
                  Pilani’s Work Integrated Learning Programmes and involvement in professional
                  development through ISTD Thrissur Chapter.
                </p>
                <p style={{ marginBottom: 0 }}>
                  At NEOM Panels, his priorities include strengthening the company’s market
                  presence, improving how customers discover and engage with its products, and
                  supporting the systems and partnerships needed for long-term growth.
                </p>
              </div>

              <div className="exec-profile-meta-bar">
                <div className="exec-profile-verified-links">
                  <span className="exec-profile-meta-label">Verified External Profile:</span>
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="exec-profile-linkedin-link"
                    aria-label="Jibin N on LinkedIn (opens in a new tab)"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                    <span>LinkedIn (linkedin.com/in/jibintcr)</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESPONSIBILITIES AT NEOM PANELS */}
      <section className="section reveal-once" aria-labelledby="responsibilities-heading">
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">ROLE AT NEOM PANELS</p>
            <h2 id="responsibilities-heading" className="section-title">
              Responsibilities at NEOM Panels
            </h2>
            <p className="lead-text" style={{ marginBottom: 0 }}>
              Key areas of executive responsibility supporting NEOM Panels and its product brands,
              Starwoods and NEOM Packing Plywood.
            </p>
          </div>

          <div className="pillars-grid">
            {RESPONSIBILITIES.map((item, idx) => (
              <article key={item.title} className="pillar-cell">
                <span className="application-card-number">0{idx + 1} · FOCUS AREA</span>
                <h3 className="subsection-title" style={{ marginBottom: '0.25rem' }}>
                  {item.title}
                </h3>
                <p style={{ marginBottom: 0 }}>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROFESSIONAL BACKGROUND & AFFILIATIONS */}
      <section
        className="section section--warm reveal-once"
        aria-labelledby="background-heading"
      >
        <div className="container">
          <div className="section-intro">
            <p className="eyebrow">PROFESSIONAL BACKGROUND</p>
            <h2 id="background-heading" className="section-title">
              Entrepreneurship &amp; professional activities
            </h2>
            <p className="lead-text" style={{ marginBottom: 0 }}>
              In addition to serving as Managing Director of NEOM Panels, Jibin N’s background spans
              information technology entrepreneurship, sports foundation leadership, academic
              teaching and evaluation, and professional development participation.
            </p>
          </div>

          <div className="exec-background-grid">
            {PROFESSIONAL_ACTIVITIES.map((item) => (
              <article key={item.organisation} className="exec-background-card">
                <div className="exec-background-header">
                  <h3 className="exec-background-org">{item.organisation}</h3>
                  <span className="exec-background-role">{item.role}</span>
                </div>
                <p className="exec-background-summary">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA & BACK TO TEAM */}
      <section
        className="section section--sage-subtle section--no-border reveal-once"
        aria-labelledby="profile-cta-heading"
      >
        <div className="container split-editorial">
          <div>
            <p className="eyebrow">BUSINESS ENQUIRIES &amp; LEADERSHIP</p>
            <h2 id="profile-cta-heading" className="section-title">
              Connect with NEOM Panels
            </h2>
            <p className="lead-text" style={{ marginBottom: 0 }}>
              For product specifications, OEM wood-panel supply, industrial packaging plywood or
              distribution enquiries, contact our commercial team or return to the full leadership
              overview.
            </p>
          </div>
          <div className="btn-group">
            <Link href="/enquiry" className="btn btn--primary">
              Submit a Business Enquiry
            </Link>
            <Link href="/team" className="btn btn--secondary">
              Back to Team Overview
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
