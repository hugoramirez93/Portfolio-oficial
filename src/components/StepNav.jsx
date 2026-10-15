import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { journey, totalSteps } from '../data/journey'

/**
 * The "guided tour" footer shown at the bottom of every step.
 *
 * The journey order lives in one place (src/data/journey.js), so the
 * previous / next targets can never drift out of sync with the nav.
 * The home page is not itself a numbered step — it only offers "next".
 */
export default function StepNav() {
  const { pathname } = useLocation()

  const isHome = pathname === '/'
  const index = isHome ? -1 : journey.findIndex((step) => step.path.split('#')[0] === pathname)
  if (!isHome && index === -1) return null

  const prev = index > 0 ? journey[index - 1] : null
  const next = index + 1 < journey.length ? journey[index + 1] : null
  const nextNumber = index + 2

  // The home page is the entrance to the tour, so step 01 reads as current.
  const marker = isHome ? 0 : index

  return (
    <section className="stepnav" aria-label="Guided tour navigation">
      <div className="container stepnav__inner">
        <div className="stepnav__guide">
          <span className="stepnav__label">
            Guided tour · {marker + 1}/{totalSteps}
          </span>

          <ol className="stepnav__dots">
            {journey.map((step, i) => {
              const state = i < marker ? 'done' : i === marker ? 'current' : 'todo'
              return (
                <li
                  key={step.id}
                  className={`stepnav__dot stepnav__dot--${state}`}
                  title={`${i + 1}. ${step.label} — ${step.title}`}
                />
              )
            })}
          </ol>
        </div>

        <div className="stepnav__links">
          {prev && (
            <Link className="steplink" to={prev.path}>
              <ArrowLeft aria-hidden="true" />
              <span>
                <small>Previous</small>
                <b>{prev.title}</b>
              </span>
            </Link>
          )}

          {next && (
            <Link className="steplink steplink--next" to={next.path}>
              <span className="steplink__num" aria-hidden="true">
                {String(nextNumber).padStart(2, '0')}
              </span>
              <span>
                <small>
                  Next step · {nextNumber}/{totalSteps}
                </small>
                <b>{next.title}</b>
              </span>
              <ArrowRight className="steplink__arrow" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
