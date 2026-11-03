import Link from 'next/link';

export const metadata = {
  title: 'Our Leadership — The People Behind NEOM Panels',
  description:
    'NEOM Panels brings together experience in business, technology, wood panel solutions and people development. Meet our leadership team.'
};

const LEADERSHIP_TEAM = [
  {
    id: 'jibin-n',
    name: 'Jibin N',
    role: 'Managing Director',
    focus: 'Strategic Direction, Brand Development & Business Growth',
    photo: '/assets/team/jibin-n.png',
    initials: 'JN',
    bio: 'Jibin guides NEOM Panels’ strategic direction, brand development and business growth. With his background in information technology and entrepreneurship, he brings a focus on digital capabilities, customer experience and partnerships that support the company’s long-term vision.',
    linkedin: null
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
    photo: null,
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
    linkedin: null
  }
];

export default function TeamPage() {
  return (
    <main id="main-content">
      {/* PAGE HEADER */}
      <section className="page-header section--architectural-grid" aria-labelledby="leadership-heading">
        <div className="container hero-split">
          <div className="hero-animate">
            <p className="eyebrow">OUR LEADERSHIP · EXECUTIVE TEAM</p>
            <h1 id="leadership-heading" tabIndex={-1} className="page-title">
              The People Behind NEOM Panels
            </h1>
            <p className="lead-text" style={{ marginBottom: 0 }}>
              NEOM Panels brings together experience in business, technology, wood panel solutions and people development. Our leadership team shares a commitment to building a dependable Indian brand through quality products, responsible growth and lasting customer relationships.
            </p>
          </div>

          <div className="brand-architecture-card hero-animate--delay">
            <div>
              <p className="eyebrow" style={{ marginBottom: '0.25rem' }}>
                MANAGEMENT STEWARDSHIP
              </p>
              <h2 className="subsection-title" style={{ marginBottom: '0.35rem' }}>
                Building the company alongside the brand
              </h2>
              <p className="secondary-text" style={{ fontSize: '0.92rem', marginBottom: 0 }}>
                Executive leadership across NEOM Panels and its product brands, including Starwoods, focuses on operational discipline, specification clarity, and long-term B2B relationships.
              </p>
            </div>
            <div className="brand-architecture-row">
              <img
                src="/assets/logo-horizontal.png"
                alt="NEOM Panels"
                style={{ height: '2.4rem', width: 'auto', objectFit: 'contain' }}
                width="540"
                height="180"
              />
              <img
                src="/assets/starwood-logo.png"
                alt="Starwood — The Plywood Specialist"
                className="starwood-logo-img--xs"
                width="615"
                height="149"
              />
            </div>
          </div>
        </div>
      </section>

      {/* LEADERSHIP PROFILES GRID */}
      <section className="section reveal-once" aria-label="Executive Leadership Profiles">
        <div className="container">
          <div className="leadership-grid">
            {LEADERSHIP_TEAM.map((member) => (
              <article key={member.id} id={member.id} className="leader-card">
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
                      <div className="leader-monogram" aria-label={`${member.name} executive monogram`}>
                        <span className="leader-monogram-initials">{member.initials}</span>
                        <span className="leader-monogram-sub">NEOM Panels</span>
                      </div>
                    )}
                  </div>
                  <div>
                    <span className="leader-role">{member.role}</span>
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
                        className="leader-linkedin"
                        aria-label={`${member.name} on LinkedIn`}
                      >
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                        </svg>
                        <span>LinkedIn Profile</span>
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
              Explore our corporate governance framework, learn more about our manufacturing perspective, or begin a business conversation with our team.
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
