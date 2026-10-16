import { Building2 } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <>
      <PageHero
        eyebrow="Step 03 · Experience"
        title="Where I have"
        highlight="worked"
        description="Four years keeping enterprise production running under SLA, from bilingual front-line support to L1/L2 engineering-adjacent troubleshooting."
        meta={['4+ years', 'Enterprise SaaS', 'CPQ', 'US · Canada · LATAM']}
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="timeline">
            {experience.map((job, i) => (
              <Reveal
                className={`tl-item${job.current ? ' tl-item--current' : ''}`}
                key={job.company}
                delay={i * 90}
                data-spotlight
              >
                <div className="tl-head">
                  <div>
                    <div className="tl-role">{job.role}</div>
                    <div className="tl-company" style={{ display: 'flex', alignItems: 'center', gap: 7, marginTop: 6 }}>
                      <Building2 size={14} aria-hidden="true" />
                      {job.company}
                    </div>
                  </div>
                  <span className="tl-period">{job.period}</span>
                </div>

                <p className="tl-context">
                  {job.context} · {job.meta}
                </p>

                <ul className="tl-list">
                  {job.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <div className="tags tl-tags">
                  {job.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
