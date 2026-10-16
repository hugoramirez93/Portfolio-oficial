import { Check } from 'lucide-react'
import Hero from '../components/Hero'
import ToolMarquee from '../components/ToolMarquee'
import Metrics from '../components/Metrics'
import GuidedPath from '../components/GuidedPath'
import Contact from '../components/Contact'
import TerminalCard from '../components/TerminalCard'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import { personalInfo } from '../data/portfolio'

const WORK = [
  'Reproduce the issue, read the relevant logs and confirm the root cause before proposing a fix.',
  'Document an RCA and clear rollout notes so Engineering can ship a permanent fix, not a workaround.',
  'Keep customers updated in plain language at every stage with realistic next steps and timelines.',
  'Verify the fix in a safe way and close the loop with clear evidence and learnings.',
]

export default function Home() {
  return (
    <>
      <Hero />

      <ToolMarquee />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="By the numbers"
            title="Support measured in"
            highlight="outcomes"
            description={personalInfo.summaryTail}
          />
          <Metrics />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container tech-split">
          <Reveal>
            <span className="eyebrow">
              <span className="status-dot" aria-hidden="true" />
              In the terminal
            </span>
            <h2 style={{ fontSize: 'clamp(26px, 3.6vw, 40px)', marginTop: 14 }}>
              Support, from the <span className="grad-text">command line up</span>
            </h2>
            <p className="card__text" style={{ marginTop: 16, maxWidth: '46ch' }}>
              Most of my work happens where the truth is: logs, telemetry and API responses. Here is how I
              approach it day-to-day.
            </p>

            <ul className="bullets">
              {WORK.map((line) => (
                <li key={line}>
                  <Check size={15} aria-hidden="true" />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <TerminalCard />
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <SectionHeading
            eyebrow="The guided tour"
            title="Seven steps through my"
            highlight="work"
            description="Follow it in order: each page ends with a link to the next, so you never lose your place."
          />
          <GuidedPath />
        </div>
      </section>

      <ToolMarquee />

      <Contact />
    </>
  )
}
