import { ShieldOff, Link2, KeyRound } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { incidentCases } from '../data/portfolio'

const ICONS = { ShieldOff, Link2, KeyRound }

export default function CaseStudies() {
  return (
    <>
      <PageHero
        eyebrow="Step 04 · Case Studies"
        title="Real incidents,"
        highlight="resolved"
        description="Three investigations that show how I work a production problem: reproduce it, isolate the root cause, fix it and stop it from coming back."
        meta={['RCA', 'Log Analysis', 'TLS', 'SSO / OIDC', 'Integrations']}
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container" style={{ display: 'grid', gap: 18 }}>
          {incidentCases.map((incident, i) => {
            const Icon = ICONS[incident.icon] ?? ShieldOff
            return (
              <Reveal className="incident" key={incident.id} delay={i * 80} data-spotlight>
                <div className="incident__top">
                  <span
                    className="incident__code"
                    style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}
                  >
                    <span className="icon-tile" style={{ width: 34, height: 34, borderRadius: 10 }}>
                      <Icon size={16} aria-hidden="true" />
                    </span>
                    {incident.code} · {incident.category}
                  </span>
                  <span className={`severity severity--${incident.severity.toLowerCase()}`}>
                    {incident.severity}
                  </span>
                </div>

                <h2 className="incident__title">{incident.title}</h2>
                <p className="incident__sub">{incident.subtitle}</p>

                <div className="incident__steps">
                  <div className="incident__block">
                    <h4>Problem</h4>
                    <p>{incident.problem}</p>
                  </div>
                  <div className="incident__block">
                    <h4>Action</h4>
                    <p>{incident.action}</p>
                  </div>
                  <div className="incident__block">
                    <h4>Result</h4>
                    <p>{incident.result}</p>
                    <p style={{ marginTop: 8, color: 'var(--muted)' }}>{incident.impact}</p>
                  </div>
                </div>

                <div className="tags" style={{ marginTop: 20 }}>
                  {incident.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </Reveal>
            )
          })}
        </div>
      </section>
    </>
  )
}
