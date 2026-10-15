import { useEffect, useRef, useState } from 'react'
import { stats } from '../data/portfolio'
import Reveal from './Reveal'

/** Counts up from 0 to `value` the first time it scrolls into view. */
function Counter({ value, prefix = '', suffix = '' }) {
  const ref = useRef(null)
  const [shown, setShown] = useState(0)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

    if (reduce || typeof IntersectionObserver === 'undefined') {
      setShown(value)
      return
    }

    let frame = 0
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        const start = performance.now()
        const duration = 1100
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration)
          const eased = 1 - (1 - t) ** 3
          setShown(Math.round(value * eased))
          if (t < 1) frame = window.requestAnimationFrame(tick)
        }
        frame = window.requestAnimationFrame(tick)
      },
      { threshold: 0.45 },
    )

    observer.observe(node)
    return () => {
      observer.disconnect()
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [value])

  return (
    <span ref={ref}>
      {prefix}
      {shown}
      {suffix}
    </span>
  )
}

/** The headline numbers a recruiter scans for, as gradient tiles. */
export default function Metrics() {
  return (
    <div className="metrics">
      {stats.map((stat, i) => (
        <Reveal className="metric" key={stat.label} delay={i * 60} data-spotlight>
          <div className="metric__value">
            <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
          </div>
          <div className="metric__label">{stat.label}</div>
          <div className="metric__sub">{stat.sub}</div>
        </Reveal>
      ))}
    </div>
  )
}
