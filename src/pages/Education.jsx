import { ExternalLink, GraduationCap, BadgeCheck, Award, BookOpen, Rocket, Check } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { education } from '../data/portfolio'

const TYPE_ICONS = {
  Degree: GraduationCap,
  Bootcamp: Rocket,
  Diploma: BookOpen,
  Certification: BadgeCheck,
  Course: BookOpen,
  'Professional Certificate': Award,
}

export default function Education() {
  return (
    <>
      <PageHero
        eyebrow="Step 06 · Education"
        title="Education &"
        highlight="credentials"
        description="A Systems Engineering degree in progress, a full-stack bootcamp, and verified certifications from Meta, UC Davis and Coursera."
        meta={[`${education.length} credentials`, 'Verified links', 'Timeline by recency']}
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="edu-timeline">
            {education
              .slice()
              .sort((a, b) => (a.order || 999) - (b.order || 999))
              .map((item, i) => {
                const Icon = TYPE_ICONS[item.type] ?? BadgeCheck
                const inProgress = item.status === 'in-progress'
                return (
                  <Reveal
                    className={`edu-item${inProgress ? ' edu-item--progress' : ''}`}
                    key={item.id || `${item.title}-${item.period}`}
                    delay={i * 45}
                    data-spotlight
                  >
                    <div className="edu-item__head">
                      <span className="icon-tile" style={{ width: 40, height: 40, borderRadius: 12 }}>
                        <Icon size={18} aria-hidden="true" />
                      </span>
                      <div className="edu-item__meta">
                        <div className="edu-item__title">{item.title}</div>
                        <div className="edu-item__inst">{item.institution} · {item.location} · {item.type}</div>
                      </div>
                      <div className="edu-item__right">
                        <span className="edu-item__period">{item.period}</span>
                        {inProgress ? (
                          <span className="pill-state pill-state--progress">In progress</span>
                        ) : (
                          <span className="pill-state pill-state--done">
                            <Check size={12} aria-hidden="true" />
                            Completed
                          </span>
                        )}
                        {item.verify && (
                          <a
                            className="icon-btn"
                            href={item.verify}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Verify ${item.title}`}
                            title="Verify credential"
                          >
                            <ExternalLink size={15} aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    </div>
                    {item.description && (
                      <div className="edu-item__desc">
                        <p className="bento__text" style={{ margin: 0 }}>{item.description}</p>
                      </div>
                    )}
                  </Reveal>
                )
              })}
          </div>
        </div>
      </section>
    </>
  )
}
