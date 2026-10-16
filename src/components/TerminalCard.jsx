import LiveClock from './LiveClock'

const LINES = [
  { prompt: '$', cmd: 'whoami', out: 'hugo ramírez · technical support specialist (L1 / L2)' },
  { prompt: '$', cmd: 'uptime --support', out: '4+ years · 92% CSAT · 5 min first response' },
  { prompt: '$', cmd: 'grep -r "root cause" incidents/', out: '30+ RCAs documented across 15+ enterprise accounts' },
  { prompt: '$', cmd: 'status --availability', out: 'open to new opportunities', ok: true },
]

/**
 * A faux shell window. The animated caret and the scanline overlay are the
 * only moving parts, so it stays cheap to render.
 */
export default function TerminalCard() {
  return (
    <div className="terminal">
      <div className="terminal__bar">
        <span className="terminal__dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="terminal__title">hugo@support · bash · 80×24</span>
        <span className="terminal__title" style={{ marginLeft: 'auto' }}>
          <LiveClock />
        </span>
      </div>

      <div className="terminal__body">
        {LINES.map((line) => (
          <div key={line.cmd}>
            <div className="terminal__line">
              <span className="terminal__prompt">{line.prompt}</span>
              <span className="terminal__cmd">{line.cmd}</span>
            </div>
            <div className={`terminal__line terminal__out${line.ok ? ' terminal__ok' : ''}`}>
              {line.ok && <span aria-hidden="true">[ok]</span>}
              <span>{line.out}</span>
            </div>
          </div>
        ))}

        <div className="terminal__line">
          <span className="terminal__prompt">$</span>
          <span className="terminal__caret" aria-hidden="true" />
        </div>
      </div>
    </div>
  )
}
