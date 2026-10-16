import { Link } from 'react-router-dom'
import { ArrowRight, Download, ShieldCheck, Activity } from 'lucide-react'
import { personalInfo, stats } from '../data/portfolio'
import Typewriter from './Typewriter'

const CHIPS = [
  'Enterprise SaaS',
  'CPQ',
  'Incident Management',
  'Log Analysis',
  'SQL',
  'AI-Assisted Workflows',
]

const ROTATING = [
  'Reproducing an incident from the logs…',
  'Writing the root-cause analysis…',
  'Configuring a CPQ product model…',
  'Keeping enterprise accounts unblocked.',
]

function scrollToNext() {
  window.scrollBy({ top: window.innerHeight * 0.82, behavior: 'smooth' })
}

export default function Hero() {
  const csat = stats.find((s) => s.label.toLowerCase().includes('csat'))
  const sla = stats.find((s) => s.label.toLowerCase().includes('first-response'))

  const format = (stat) =>
    stat ? `${stat.prefix ?? ''}${stat.value}${stat.suffix ?? ''}` : ''

  return (
    <section className="hero">
      <div className="container hero__grid">
        <div>
          <span className="chip chip--accent">
            <span className="status-dot" aria-hidden="true" />
            {personalInfo.availability}
          </span>

          <h1 className="hero__title">
            {personalInfo.name.split(' ')[0]}
            <br />
            <span className="grad-text">{personalInfo.name.split(' ')[1]}</span>
          </h1>

          <p className="hero__role">
            {personalInfo.role} <b>({personalInfo.roleLevel})</b> — {personalInfo.roleFocus}
          </p>

          <p className="hero__typed" aria-live="off">
            <Typewriter phrases={ROTATING} />
          </p>

          <p className="hero__tagline">{personalInfo.tagline}</p>

          <div className="hero__cta">
            <Link className="btn btn--primary" to="/about">
              Start the tour
              <ArrowRight className="btn__icon" aria-hidden="true" />
            </Link>
            <a className="btn btn--ghost" href={personalInfo.resumeUrl} download>
              <Download className="btn__icon" aria-hidden="true" />
              Download resume
            </a>
          </div>

          <div className="hero__chips">
            {CHIPS.map((chip) => (
              <span className="chip" key={chip}>
                {chip}
              </span>
            ))}
          </div>

          <button type="button" className="scroll-cue" onClick={scrollToNext}>
            <span className="scroll-cue__track" aria-hidden="true" />
            Scroll
          </button>
        </div>

        <div className="hero__aside">
          <div className="hero__media">
            <figure className="portrait">
              <img
                src="/photo-hugo.jpg"
                alt={`Portrait of ${personalInfo.name}`}
                width="868"
                height="1200"
                fetchPriority="high"
                decoding="async"
              />
              <figcaption className="portrait__badge">
                <span className="status-dot" aria-hidden="true" />
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <b>{personalInfo.roleFocus}</b>
                  <span style={{ color: 'var(--faint)' }}>
                    {personalInfo.location} · {personalInfo.timezone}
                  </span>
                </div>
              </figcaption>
            </figure>
          </div>

          <div className="hero__stats">
            {csat && (
              <div className="stat-tile">
                <span className="stat-tile__icon">
                  <ShieldCheck size={16} aria-hidden="true" />
                </span>
                <span className="stat-tile__body">
                  <b className="stat-tile__val">{format(csat)}</b>
                  <span className="stat-tile__label">CSAT sustained</span>
                </span>
              </div>
            )}

            {sla && (
              <div className="stat-tile">
                <span className="stat-tile__icon">
                  <Activity size={16} aria-hidden="true" />
                </span>
                <span className="stat-tile__body">
                  <b className="stat-tile__val">{format(sla)}</b>
                  <span className="stat-tile__label">First response</span>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
