import { ExternalLink, GraduationCap, BadgeCheck, Award, BookOpen, Rocket, Check } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { education } from '../data/portfolio'

const TYPE_ICONS = {
  Degree: GraduationCap,
  Bootcamp: Rocket,
  Diploma: BookOpen,
  Certification: BadgeCheck,
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
        meta={[`${education.length} credentials`, 'Verified links', 'Dec 2027 (expected)']}
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="edu">
            {education.map((item, i) => {
              const Icon = TYPE_ICONS[item.type] ?? BadgeCheck
              const inProgress = item.status === 'in-progress'
              return (
                <Reveal
                  className={`edu-row${inProgress ? '' : ' edu-row--done'}`}
                  key={`${item.degree}-${item.year}`}
                  delay={i * 45}
                  data-spotlight
                >
                  <span className="icon-tile" style={{ width: 40, height: 40, borderRadius: 12 }}>
                    <Icon size={18} aria-hidden="true" />
                  </span>

                  <span className="edu-row__body">
                    <span className="edu-row__degree">{item.degree}</span>
                    <span className="edu-row__inst">
                      {item.institution} · {item.type}
                    </span>
                  </span>

                  <span className="edu-row__right">
                    <span className="edu-row__year">{item.year}</span>
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
                        aria-label={`Verify ${item.degree}`}
                        title="Verify credential"
                      >
                        <ExternalLink size={15} aria-hidden="true" />
                      </a>
                    )}
                  </span>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
