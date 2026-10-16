import { LifeBuoy, SearchCode, Server, Wrench, Code2, Sparkles, Check, CalendarCheck, SquareTerminal } from 'lucide-react'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'
import ToolMarquee from '../components/ToolMarquee'
import Reveal from '../components/Reveal'
import { CopilotIcon, OpenAIIcon, GeminiIcon, ClaudeIcon, OpenCodeIcon } from '../components/icons'
import { competencies, aiStack } from '../data/portfolio'

const ICONS = { LifeBuoy, SearchCode, Server, Wrench, Code2 }

/* Brand mark per AI tool (Codex has no official mark → terminal glyph). */
const AI_ICONS = {
  'GitHub Copilot': CopilotIcon,
  ChatGPT: OpenAIIcon,
  Gemini: GeminiIcon,
  'Claude Code': ClaudeIcon,
  OpenCode: OpenCodeIcon,
  Codex: SquareTerminal,
}

/* Wide, wide, then three narrow cells — the bento rhythm. */
const SPANS = ['b-3', 'b-3', 'b-2', 'b-2', 'b-2']

export default function Skills() {
  return (
    <>
      <PageHero
        eyebrow="Step 02 · Skills"
        title="Skills &"
        highlight="tools"
        description="The toolkit behind every resolution: from triage and log analysis to cloud diagnostics and AI-assisted workflows."
        meta={['L1 / L2 Support', 'Incident Management', 'Log Analysis', 'Cloud', 'SQL', 'AI-Assisted']}
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="bento">
            {competencies.map((group, i) => {
              const Icon = ICONS[group.icon] ?? Wrench
              return (
                <Reveal
                  className={`bento__cell ${SPANS[i] ?? 'b-2'}`}
                  key={group.group}
                  delay={i * 70}
                  data-spotlight
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span className="icon-tile">
                      <Icon size={19} aria-hidden="true" />
                    </span>
                    <h3 className="bento__title" style={{ margin: 0 }}>{group.group}</h3>
                  </div>
                  <ul style={{ display: 'grid', gap: 9, marginTop: 14 }}>
                    {group.items.map((item) => (
                      <li
                        key={item}
                        style={{ display: 'flex', gap: 9, alignItems: 'flex-start', fontSize: 13.5, color: 'var(--muted)' }}
                      >
                        <Check size={14} aria-hidden="true" style={{ color: 'var(--accent)', flex: 'none', marginTop: 4 }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <ToolMarquee />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="AI-assisted workflows"
            title="Faster triage, same"
            highlight="accountability"
            description={aiStack.intro}
          />

          <div className="bento">
            {aiStack.tools.map((tool, i) => {
              const ToolIcon = AI_ICONS[tool.name] ?? Sparkles
              return (
                <Reveal className="bento__cell b-2" key={tool.name} delay={i * 60} data-spotlight>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <span className="ai-badge" aria-hidden="true">
                      <ToolIcon size={22} />
                    </span>
                    <b style={{ fontSize: 14.5, fontWeight: 700 }}>{tool.name}</b>
                  </div>
                  <span style={{ display: 'block', marginTop: 10, fontSize: 13, color: 'var(--muted)', lineHeight: 1.6 }}>
                    {tool.desc}
                  </span>
                </Reveal>
              )
            })}

            <Reveal className="bento__cell b-2" delay={80} data-spotlight>
              <h3 className="bento__title" style={{ marginTop: 0 }}>
                <Sparkles size={16} aria-hidden="true" style={{ display: 'inline', marginRight: 8, color: 'var(--accent)' }} />
                In support
              </h3>
              <ul style={{ display: 'grid', gap: 8, marginTop: 12 }}>
                {aiStack.supportUses.map((use) => (
                  <li
                    key={use}
                    style={{ display: 'flex', gap: 9, alignItems: 'flex-start', fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.6 }}
                  >
                    <span style={{ color: 'var(--accent)', flex: 'none' }}>→</span>
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="bento__cell b-2" delay={140} data-spotlight>
              <h3 className="bento__title" style={{ marginTop: 0 }}>
                <Code2 size={16} aria-hidden="true" style={{ display: 'inline', marginRight: 8, color: 'var(--accent)' }} />
                In development
              </h3>
              <ul style={{ display: 'grid', gap: 8, marginTop: 12 }}>
                {aiStack.devUses.map((use) => (
                  <li
                    key={use}
                    style={{ display: 'flex', gap: 9, alignItems: 'flex-start', fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.6 }}
                  >
                    <span style={{ color: 'var(--accent)', flex: 'none' }}>→</span>
                    <span>{use}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="bento__cell b-2" delay={200} data-spotlight>
              <h3 className="bento__title" style={{ marginTop: 0 }}>
                <CalendarCheck size={16} aria-hidden="true" style={{ display: 'inline', marginRight: 8, color: 'var(--accent)' }} />
                Daily habits
              </h3>
              <ul style={{ display: 'grid', gap: 8, marginTop: 12 }}>
                <li style={{ display: 'flex', gap: 9, alignItems: 'flex-start', fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.6 }}>
                  <span style={{ color: 'var(--accent)', flex: 'none' }}>→</span>
                  <span>Clear reproduction steps before changing code/config.</span>
                </li>
                <li style={{ display: 'flex', gap: 9, alignItems: 'flex-start', fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.6 }}>
                  <span style={{ color: 'var(--accent)', flex: 'none' }}>→</span>
                  <span>Verify fixes with logs/tests before closing tickets.</span>
                </li>
                <li style={{ display: 'flex', gap: 9, alignItems: 'flex-start', fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.6 }}>
                  <span style={{ color: 'var(--accent)', flex: 'none' }}>→</span>
                  <span>Keep notes in plain Spanish/English for the team.</span>
                </li>
                <li style={{ display: 'flex', gap: 9, alignItems: 'flex-start', fontSize: 13.5, color: 'var(--muted)', lineHeight: 1.6 }}>
                  <span style={{ color: 'var(--accent)', flex: 'none' }}>→</span>
                  <span>Share learnings and small automations to save time.</span>
                </li>
              </ul>
            </Reveal>

            <Reveal className="bento__cell b-6 card--glow" delay={260} data-spotlight>
              <p style={{ fontSize: 14.5, lineHeight: 1.7, color: 'var(--ink-2)' }}>{aiStack.note}</p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
