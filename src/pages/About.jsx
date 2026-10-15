import { MapPin, Clock, Languages as LanguagesIcon, Target, GraduationCap, Headphones } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { personalInfo } from '../data/portfolio'

const PRINCIPLES = [
  {
    icon: Target,
    title: 'Reproduce before guessing',
    text: 'I reproduce the issue, read the logs and confirm the root cause before proposing a fix — no shotgun troubleshooting on a live enterprise account.',
  },
  {
    icon: Headphones,
    title: 'Explain it in plain language',
    text: 'Customers get a clear, jargon-free update at every stage: what broke, what I am doing about it and when they will hear from me again.',
  },
  {
    icon: GraduationCap,
    title: 'Close the loop',
    text: 'Every incident ends with documentation and a permanent fix so the same ticket does not come back next month under a different number.',
  },
]

export default function About() {
  const facts = [
    { icon: MapPin, label: 'Based in', value: personalInfo.location },
    { icon: Clock, label: 'Timezone', value: 'GMT-5 · US Eastern & Central hours' },
    { icon: Target, label: 'Focus', value: personalInfo.roleFocus },
    { icon: LanguagesIcon, label: 'Languages', value: 'English C1 · Spanish native' },
  ]

  return (
    <>
      <PageHero
        eyebrow="Step 01 · About"
        title="Who I"
        highlight="am"
        description={personalInfo.summary}
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="bento">
            <Reveal className="bento__cell b-4" data-spotlight>
              <span className="bento__label">Profile</span>
              <div className="prose" style={{ marginTop: 14, maxWidth: 'none' }}>
                <p>
                  I am a <strong>Technical Support Specialist</strong> with four-plus years of experience across
                  enterprise SaaS and custom CPQ platforms. Most of my day is spent inside system logs, telemetry
                  and cloud diagnostics, turning a vague customer report into a reproducible case and a permanent
                  fix.
                </p>
                <p>
                  I work at the seam between customers and engineering. That means keeping a 92% CSAT while still
                  documenting the 30+ incident investigations and root-cause analyses that Engineering needs to
                  ship real fixes.
                </p>
                <p>{personalInfo.summaryTail}</p>
              </div>
            </Reveal>

            <Reveal className="bento__cell b-2 b-tall" delay={80} data-spotlight>
              <span className="bento__label">Languages</span>
              <h3 className="bento__title">Bilingual support</h3>
              <p className="bento__text">
                Written and spoken across US, Canada and LATAM accounts — clear updates, no translation friction.
              </p>

              <div style={{ display: 'grid', gap: 18, marginTop: 'auto', paddingTop: 26 }}>
                {personalInfo.languages.map((lang) => (
                  <div className="lang" key={lang.name}>
                    <div className="lang__top">
                      <span>{lang.name}</span>
                      <em>{lang.level}</em>
                    </div>
                    <div className="lang__bar">
                      <div className="lang__fill" style={{ width: `${lang.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="tags" style={{ marginTop: 24 }}>
                <span className="chip chip--mono">Remote-ready</span>
                <span className="chip chip--mono">US / EU hours</span>
                <span className="chip chip--mono">Open to relocation</span>
              </div>
            </Reveal>

            {facts.map(({ icon: Icon, label, value }, i) => (
              <Reveal
                className={`bento__cell ${i < 2 ? 'b-2' : 'b-3'}`}
                key={label}
                delay={120 + i * 60}
                data-spotlight
              >
                <span className="icon-tile" style={{ width: 38, height: 38, borderRadius: 11 }}>
                  <Icon size={17} aria-hidden="true" />
                </span>
                <span className="bento__label" style={{ marginTop: 16 }}>
                  {label}
                </span>
                <b style={{ marginTop: 7, fontSize: 15, fontWeight: 650, letterSpacing: '-0.01em' }}>{value}</b>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 style={{ fontSize: 'clamp(24px, 3.4vw, 36px)', marginBottom: 26 }}>How I work</h2>
          <div className="bento">
            {PRINCIPLES.map(({ icon: Icon, title, text }, i) => (
              <Reveal
                className={`bento__cell ${i === 0 ? 'b-2 b-tall' : 'b-4'}`}
                key={title}
                delay={i * 80}
                data-spotlight
              >
                <span className="icon-tile">
                  <Icon size={19} aria-hidden="true" />
                </span>
                <h3 className="bento__title">{title}</h3>
                <p className="bento__text">{text}</p>
                <span className="bento__num mono" style={{ fontSize: 18, paddingTop: 22 }}>
                  0{i + 1}
                </span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
