import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { journey } from '../data/journey'
import Reveal from './Reveal'

/**
 * The tour hub on the home page: every step in order, numbered, so a
 * visitor can jump in anywhere instead of scrolling a wall of text.
 */
export default function GuidedPath() {
  return (
    <div className="path">
      {journey.map((step, i) => {
        const Icon = step.icon
        return (
          <Reveal
            as={Link}
            to={step.path}
            className="path__step"
            key={step.id}
            delay={i * 55}
            aria-label={`${step.label}: ${step.title}`}
            data-spotlight
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="path__icon">
                <Icon aria-hidden="true" />
              </span>
              <span className="path__num">{String(i + 1).padStart(2, '0')} / 07</span>
            </div>

            <h3 className="path__title">{step.title}</h3>
            <p className="path__blurb">{step.blurb}</p>

            <span className="path__go">
              {step.label}
              <ArrowRight size={14} aria-hidden="true" />
            </span>
          </Reveal>
        )
      })}
    </div>
  )
}
