import { MapPin, Clock, Languages as LanguagesIcon, Target, GraduationCap, Headphones, SearchCode } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { personalInfo } from '../data/portfolio'

const PRINCIPLES = [
  {
    icon: SearchCode,
    title: 'Reproduce before guessing',
    text: 'I don’t change a live enterprise account until I can reproduce the issue and read the evidence — logs, API responses, SQL queries and SSO traces. Day to day: Jira for the case, Postman for the API and SQL to confirm the data.',
  },
  {
    icon: Headphones,
    title: 'Explain it in plain language',
    text: 'Customers get a clear, jargon-free update at every step: what broke, what I’m doing and when they’ll hear back. I keep the ticket and the chat in sync so nobody chases the same case twice — Jira, Slack, Teams and Genesys Cloud.',
  },
  {
    icon: GraduationCap,
    title: 'Close the loop with evidence',
    text: 'Every incident ends with a written RCA and a permanent fix, not a workaround. I verify it with a test case, update the notes and share the learning so the same ticket doesn’t reopen under a new number.',
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
        description="Self-taught in development and a fast learner — I grow through repetition, logic and teamwork, and I live by one idea: never stop learning."
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="bento">
            <Reveal className="bento__cell b-4" data-spotlight>
              <span className="bento__label">Profile</span>
              <div className="prose" style={{ marginTop: 14, maxWidth: 'none' }}>
                <p>
                  I’m a <strong>Technical Support Specialist</strong> (L1/L2) with 4+ years supporting enterprise
                  SaaS and custom CPQ platforms. I diagnose, reproduce and resolve production issues — reading
                  system logs, telemetry and cloud diagnostics to turn a vague customer report into a reproducible
                  case and a permanent fix.
                </p>
                <p>
                  I consistently sustain a <strong>92% CSAT</strong> and a <strong>5-minute first-response SLA</strong>{' '}
                  while resolving 20+ cases a day, and I’ve documented 30+ incident investigations and RCAs,
                  partnering with Engineering to ship permanent fixes across 15+ enterprise accounts in the US,
                  Canada and LATAM.
                </p>
                <p>
                  Bilingual (English C1 / Spanish native) and currently completing a Bachelor’s degree in Systems
                  Engineering. Comfortable across Salesforce, Jira, Genesys Cloud, SQL, SSO/OIDC and cloud
                  environments.
                </p>
              </div>
            </Reveal>

            <Reveal className="bento__cell b-2" delay={80} data-spotlight>
              <span className="bento__label">Languages</span>
              <h3 className="bento__title">Bilingual support</h3>
              <p className="bento__text">
                Written and spoken across US, Canada and LATAM accounts — clear updates, no translation friction.
              </p>

              <div style={{ display: 'grid', gap: 16, marginTop: 20 }}>
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

              <div className="tags" style={{ marginTop: 20 }}>
                <span className="chip chip--mono">Remote-ready</span>
                <span className="chip chip--mono">US / EU hours</span>
                <span className="chip chip--mono">Open to relocation</span>
              </div>
            </Reveal>

            {facts.map(({ icon: Icon, label, value }, i) => (
              <Reveal
                className="bento__cell b-3"
                key={label}
                delay={120 + i * 60}
                data-spotlight
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span className="icon-tile" style={{ width: 38, height: 38, borderRadius: 11 }}>
                    <Icon size={17} aria-hidden="true" />
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                    <span className="bento__label">{label}</span>
                    <b style={{ fontSize: 15, fontWeight: 650, letterSpacing: '-0.01em' }}>{value}</b>
                  </div>
                </div>
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
                className="bento__cell b-2"
                key={title}
                delay={i * 80}
                data-spotlight
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                  <span className="icon-tile">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <h3 className="bento__title" style={{ margin: 0 }}>{title}</h3>
                </div>
                <p className="bento__text">{text}</p>
                <span className="bento__num mono" style={{ fontSize: 16, paddingTop: 14, marginTop: 'auto' }}>
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
