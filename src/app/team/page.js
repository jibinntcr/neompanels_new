import Link from 'next/link';
import { buildPageMetadata, getBreadcrumbJsonLd, SITE_URL } from '@/lib/seo';

export const metadata = buildPageMetadata({
  title: 'Our Leadership — The People Behind NEOM Panels',
  description:
    'NEOM Panels brings together executive experience in wood-panel manufacturing, business operations, technology and people development. Meet Managing Director Jibin N, CEO Muneer K H, CFO Muhamad Raneef T A and CTO Muhammed Jabir.',
  path: '/team',
  ogImage: '/assets/team/jibin-n.png',
  ogImageAlt: 'Jibin N (Managing Director) and NEOM Panels Executive Leadership Team',
  ogImages: [
    {
      url: '/assets/team/jibin-n.png',
      width: 800,
      height: 800,
      alt: 'Jibin N — Managing Director, NEOM Panels'
    },
    {
      url: '/assets/team/muneer-k-h.png',
      width: 800,
      height: 800,
      alt: 'Muneer K H — Chief Executive Officer, NEOM Panels'
    },
    {
      url: '/assets/team/muhamad-raneef.jpeg',
      width: 800,
      height: 800,
      alt: 'Muhamad Raneef T A — Chief Financial Officer, NEOM Panels'
    },
    {
      url: '/assets/team/muhammed-jabir.png',
      width: 800,
      height: 800,
      alt: 'Muhammed Jabir — Chief Technology Officer, NEOM Panels'
    },
    {
      url: '/assets/hero-neom-flagship.jpg',
      width: 1400,
      height: 933,
      alt: 'NEOM Panels — Indian Wood-Panel Manufacturing Company'
    }
  ],
  keywords: [
    'NEOM Panels leadership team',
    'Jibin N Managing Director NEOM Panels',
    'Muneer K H CEO NEOM Panels',
    'Muhamad Raneef T A CFO NEOM Panels',
    'Muhammed Jabir CTO NEOM Panels',
    'wood panel manufacturing leadership India'
  ]
});

const LEADERSHIP_TEAM = [
  {
    id: 'jibin-n',
    name: 'Jibin N',
    role: 'Managing Director',
    focus: 'Strategic Direction, Brand Development & Business Growth',
    photo: '/assets/team/jibin-n.png',
    initials: 'JN',
    bio: 'Jibin guides NEOM Panels’ strategic direction, brand development and business growth. With his background in information technology and entrepreneurship, he brings a focus on digital capabilities, customer experience and partnerships that support the company’s long-term vision.',
    linkedin: 'https://www.linkedin.com/in/jibintcr/'
  },
  {
    id: 'muneer-k-h',
    name: 'Muneer K H',
    role: 'Chief Executive Officer',
    focus: 'Operations, Wood Panel Solutions & Industry Partnerships',
    photo: '/assets/team/muneer-k-h.png',
    initials: 'MK',
    bio: 'Muneer brings an entrepreneurial perspective spanning wood panel solutions, manufacturing, technology and business development. At NEOM Panels, his focus is on translating the company’s vision into everyday execution, strengthening operations and building relationships with customers and industry partners.',
    linkedin: 'https://www.linkedin.com/in/muneerply/'
  },
  {
    id: 'muhamad-raneef-t-a',
    name: 'Muhamad Raneef T A',
    role: 'Chief Financial Officer',
    focus: 'Financial Planning, Commercial Discipline & People Development',
    photo: '/assets/team/muhamad-raneef.jpeg',
    initials: 'MR',
    bio: 'Raneef oversees NEOM Panels’ financial planning and commercial discipline, supporting responsible resource allocation and sustainable business growth. An HRM postgraduate and national-level medal-winning athlete, he brings a people-focused outlook, discipline and a collaborative approach to the leadership team.',
    linkedin: 'https://www.linkedin.com/in/muhamad-raneef-t-a-752832232/'
  },
  {
    id: 'muhammed-jabir',
    name: 'Muhammed Jabir',
    role: 'Chief Technology Officer',
    focus: 'Digital Systems, Supplier Networks & Trading Workflows',
    photo: '/assets/team/muhammed-jabir.png',
    initials: 'MJ',
    bio: 'Jabir leads NEOM Panels’ technology direction, focusing on digital systems that support operations, customer enquiries and business coordination. An M.Com graduate and entrepreneur with experience managing plywood and fruit trading businesses, he brings practical insight into supplier networks, customer needs and trading workflows.',
    linkedin: 'https://www.linkedin.com/in/muhammed-jabir-09579927b/'
  }
];

export default function TeamPage() {
  const teamJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      getBreadcrumbJsonLd([
        { name: 'Home', path: '/' },
        { name: 'Our Leadership', path: '/team' }
      ]),
      {
        '@type': 'ProfilePage',
        '@id': `${SITE_URL}/team#webpage`,
        name: 'Our Leadership — The People Behind NEOM Panels',
        url: `${SITE_URL}/team`,
        description:
          'Meet the executive leadership team behind NEOM Panels: Managing Director Jibin N, CEO Muneer K H, CFO Muhamad Raneef T A and CTO Muhammed Jabir.',
        primaryImageOfPage: {
          '@type': 'ImageObject',
          url: `${SITE_URL}/assets/team/jibin-n.png`,
          width: 800,
          height: 800,
          caption: 'Jibin N — Managing Director, NEOM Panels'
        },
        image: LEADERSHIP_TEAM.map((member) => ({
          '@type': 'ImageObject',
          url: `${SITE_URL}${member.photo}`,
          width: 800,
          height: 800,
          caption: `${member.name} — ${member.role}, NEOM Panels`
        }))
      },
      ...LEADERSHIP_TEAM.map((member) => ({
        '@type': 'Person',
        '@id': `${SITE_URL}/team#${member.id}`,
        name: member.name,
        jobTitle: member.role,
        description: member.bio,
        image: {
          '@type': 'ImageObject',
          url: `${SITE_URL}${member.photo}`,
          width: 800,
          height: 800,
          caption: `${member.name} — ${member.role}, NEOM Panels`
        },
        worksFor: {
          '@type': 'Organization',
          name: 'NEOM Panels',
          url: SITE_URL
        },
        ...(member.linkedin ? { sameAs: [member.linkedin] } : {})
      }))
    ]
  };

  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(teamJsonLd) }}
      />
      {/* PAGE HEADER */}
      <section
        className="page-header section--architectural-grid"
        aria-labelledby="main-heading"
      >
        <div className="container hero-split">
          <div className="hero-animate">
            <p className="eyebrow">OUR LEADERSHIP</p>
            <h1 id="main-heading" tabIndex={-1} className="page-title">
              The People Behind NEOM Panels
            </h1>
            <p className="lead-text" style={{ marginBottom: 0 }}>
              NEOM Panels brings together experience in business, technology, wood-panel solutions
              and people development. Our leadership team shares a commitment to building a
              dependable Indian manufacturing company through quality products, responsible growth
              and lasting customer relationships.
            </p>
          </div>

          <div className="brand-architecture-card hero-animate--delay">
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.25rem' }}>
                MANAGEMENT STEWARDSHIP
              </p>
              <h2 className="subsection-title" style={{ marginBottom: '0.35rem' }}>
                Executive team guiding NEOM Panels
              </h2>
              <p className="secondary-text" style={{ fontSize: '0.92rem', marginBottom: 0 }}>
                Executive leadership across NEOM Panels and its product brands—Starwoods and NEOM
                Packing Plywood—focuses on operational discipline, specification clarity and
                long-term B2B relationships.
              </p>
            </div>
            <div
              className="leader-quick-directory"
              aria-label="Executive team quick directory"
            >
              {LEADERSHIP_TEAM.map((member) => (
                <a
                  key={member.id}
                  href={`#${member.id}`}
                  className="leader-quick-chip"
                >
                  <img
                    src={member.photo}
                    alt={`${member.name} — ${member.role}`}
                    width="44"
                    height="44"
                    className="leader-quick-chip-avatar"
                  />
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <div className="leader-quick-chip-name">{member.name}</div>
                    <div className="leader-quick-chip-role">{member.role}</div>
                  </div>
                </a>
              ))}
            </div>
            <div className="brand-architecture-row">
              <img
                src="/assets/starwood-logo.png"
                alt="Starwoods — The Plywood Specialist"
                className="starwood-logo-img--xs"
                width="619"
                height="177"
              />
              <img
                src="/assets/neom-packing-plywood-logo-compact.svg"
                alt="NEOM Packing Plywood"
                className="packing-logo-img--xs"
                width="540"
                height="112"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP PROFILES GRID */}
      <section className="section reveal-once" aria-label="Executive Leadership Profiles">
        <div className="container">
          <div className="leadership-grid">
            {LEADERSHIP_TEAM.map((member, index) => (
              <article
                key={member.id}
                id={member.id}
                className="leader-card"
                style={{ '--card-index': index }}
              >
                <div className="leader-card-top">
                  <div className="leader-portrait-wrap">
                    {member.photo ? (
                      <img
                        src={member.photo}
                        alt={`${member.name} — ${member.role}, NEOM Panels`}
                        className="leader-portrait"
                        width="800"
                        height="800"
                      />
                    ) : (
                      <div
                        className="leader-monogram"
                        aria-label={`${member.name} executive monogram`}
                      >
                        <span className="leader-monogram-initials">{member.initials}</span>
                        <span className="leader-monogram-sub">NEOM Panels</span>
                      </div>
                    )}
                  </div>
                  <div className="leader-header-meta">
                    <div className="leader-role-row">
                      <span className="leader-role">{member.role}</span>
                    </div>
                    <h2 className="leader-name">{member.name}</h2>
                    <p className="leader-focus-tag">{member.focus}</p>
                  </div>
                </div>

                <div className="leader-body">
                  <p className="leader-bio">{member.bio}</p>

                  <div className="leader-footer">
                    <span className="brand-spec-label">NEOM Panels Executive Leadership</span>
                    {member.linkedin ? (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="leader-linkedin-logo-only"
                        aria-label={`${member.name} on LinkedIn`}
                        title={`${member.name} — LinkedIn`}
                      >
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                        </svg>
                      </a>
                    ) : null}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* GOVERNANCE & ENQUIRY BAND */}
      <section className="section section--sage-subtle section--no-border reveal-once">
        <div className="container split-editorial">
          <div>
            <p className="eyebrow">CORPORATE STEWARDSHIP</p>
            <h2 className="section-title">Accountable management and direct communication.</h2>
            <p className="lead-text">
              Explore our corporate governance framework, learn more about our manufacturing
              operations, or begin a business conversation with our team.
            </p>
          </div>
          <div className="btn-group">
            <Link href="/enquiry" className="btn btn--primary">
              Submit a Business Enquiry
            </Link>
            <Link href="/governance" className="btn btn--secondary">
              Governance &amp; Corporate Info
            </Link>
            <Link href="/about" className="editorial-link">
              <span>About NEOM</span>
              <span className="link-arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
