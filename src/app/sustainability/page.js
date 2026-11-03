import Link from 'next/link';
import { getSiteContent } from '@/lib/storage';

export const metadata = {
  title: 'Sustainability — NEOM Panels',
  description:
    'In a wood-panel business, sustainability is shaped by practical choices across material sourcing, material efficiency, energy, workplace safety, and accurate product documentation.'
};

export default function SustainabilityPage() {
  const siteData = getSiteContent();
  const priorities = siteData.sustainabilityPriorities || [];
  const sdgGoals = siteData.sdgAlignment || [];

  return (
    <main id="main-content">
      {/* INNER HERO */}
      <section className="inner-hero bg-warm" aria-labelledby="sustainability-heading">
        <div className="container">
          <div className="inner-hero__grid">
            <div className="reveal">
              <div className="eyebrow">SUSTAINABILITY · PRACTICAL STEWARDSHIP</div>
              <h1 id="sustainability-heading" className="h-inner">
                A practical approach to responsible growth.
              </h1>
              <p className="body-lead">
                In a wood-panel business, sustainability is shaped by practical choices: where raw materials come from, how efficiently panels are produced, how offcuts and process waste are managed, how energy and water are used, how safely people work, and how long finished products stay in service.
              </p>
              <div className="btn-row">
                <a href="#operational-priorities" className="btn btn--primary">
                  View Operational Priorities
                </a>
                <Link href="/resources" className="btn btn--secondary">
                  Product &amp; Corporate Documentation
                </Link>
              </div>
            </div>

            <div className="reveal">
              <figure className="editorial-art">
                <img
                  src="/assets/illustration-sustainability.jpg"
                  alt="Restrained editorial illustration of wood-panel samples, material offcuts, a small sapling, and resource-use study elements"
                  width="800"
                  height="600"
                />
                <figcaption className="editorial-art__caption">
                  <span>Illustration · Material samples, offcuts &amp; resource stewardship</span>
                  <span>Practical Manufacturing Decisions</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* STUDIO VISUAL & OPERATIONAL CONTEXT */}
      <section className="section bg-white" aria-labelledby="studio-context-heading">
        <div className="container">
          <div className="split-editorial reveal">
            <div>
              <figure className="arch-visual">
                <img
                  src="/assets/sustainability-materials-studio.jpg"
                  alt="Raw wood veneers, timber fibres, and finished engineered wood-panel swatches arranged in a sunlit materials studio"
                  width="760"
                  height="520"
                  loading="lazy"
                />
                <figcaption className="arch-visual__caption">
                  <span>Material longevity · Selecting the right substrate for the intended environment</span>
                  <span>Specification &amp; Service Life</span>
                </figcaption>
              </figure>
            </div>

            <div>
              <div className="eyebrow">OPERATIONAL DISCIPLINE</div>
              <h2 id="studio-context-heading" className="h-section">
                Why everyday material decisions matter more than slogans.
              </h2>
              <p>
                For furniture manufacturers, fit-out contractors, and institutional specifiers, the environmental footprint of an interior project is closely tied to whether panels are specified accurately the first time, cut with minimal waste, and fabricated to last in their intended operating environment.
              </p>
              <p>
                At NEOM Panels, our work focuses on five operational areas across sourcing, factory floor resource management, workplace safety, and accurate product documentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FIVE OPERATIONAL PRIORITIES */}
      <section
        id="operational-priorities"
        className="section bg-sage"
        aria-labelledby="priorities-heading"
      >
        <div className="container">
          <div className="section-header reveal">
            <div>
              <div className="eyebrow">OPERATIONAL PRIORITIES</div>
              <h2 id="priorities-heading" className="h-section">
                Five areas where manufacturing choices count.
              </h2>
            </div>
            <p className="body-lead" style={{ marginBottom: 0 }}>
              Each area reflects practical operational discipline inside our factory and in our commercial conversations with buyers.
            </p>
          </div>

          <div className="audience-list reveal">
            {priorities.map((item) => (
              <article key={item.id} className="audience-row" style={{ gridTemplateColumns: '84px 1fr 1.3fr' }}>
                <div className="audience-row__num">{item.number}</div>
                <div>
                  <h3 className="audience-row__title">{item.title}</h3>
                  <div className="eyebrow" style={{ marginBottom: 0 }}>
                    {item.focusArea}
                  </div>
                </div>
                <p className="audience-row__desc">{item.body}</p>
              </article>
            ))}
          </div>

          {/* PROGRESS STATEMENT */}
          <div
            className="callout-box reveal"
            style={{
              marginTop: '36px',
              background: 'var(--color-white)',
              padding: '28px 32px'
            }}
          >
            <div className="callout-box__label">Progress Statement</div>
            <p
              style={{
                marginBottom: 0,
                fontSize: '1.08rem',
                color: 'var(--color-forest)',
                fontWeight: 500
              }}
            >
              As NEOM grows, we intend to publish clearer operational and product documentation rather than broad environmental claims.
            </p>
          </div>
        </div>
      </section>

      {/* GLOBAL CONTEXT — UN SUSTAINABLE DEVELOPMENT GOALS */}
      <section className="section bg-white" aria-labelledby="global-context-heading">
        <div className="container">
          <div className="section-header reveal">
            <div>
              <div className="eyebrow">GLOBAL CONTEXT</div>
              <h2 id="global-context-heading" className="h-section">
                Alignment with Sustainable Development Goals.
              </h2>
            </div>
            <p className="body-lead" style={{ marginBottom: 0 }}>
              Our operational priorities align with three United Nations Sustainable Development Goals relevant to materials manufacturing and resource efficiency.
            </p>
          </div>

          <div className="sdg-grid reveal">
            {sdgGoals.map((goal) => (
              <article
                key={goal.goal}
                className={`sdg-card ${goal.isPrimary ? 'sdg-card--primary' : ''}`}
              >
                <div className="sdg-card__badge">
                  {goal.goal} · {goal.role}
                </div>
                <h3 className="h-card" style={{ marginBottom: '10px' }}>
                  {goal.title}
                </h3>
                <p style={{ fontSize: '0.96rem', marginBottom: '20px', flex: 1 }}>
                  {goal.description}
                </p>
                <div>
                  <a
                    href={goal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-arrow"
                  >
                    Read {goal.goal} on UN.org
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
