import { useEffect, useRef, useState } from 'react'

/**
 * Deterministic starfield. A seeded LCG keeps the positions stable between
 * renders (so React never reshuffles them) while still looking scattered.
 */
function makeStars(count) {
  let seed = 20261014
  const rand = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296
    return seed / 4294967296
  }

  return Array.from({ length: count }, (_, i) => {
    const size = rand() > 0.82 ? 2.5 : rand() > 0.5 ? 2 : 1.5
    return {
      id: i,
      left: `${(rand() * 100).toFixed(2)}%`,
      top: `${(rand() * 100).toFixed(2)}%`,
      size: `${size}px`,
      dur: `${(5 + rand() * 7).toFixed(2)}s`,
      delay: `${(rand() * 8).toFixed(2)}s`,
      peak: (0.25 + rand() * 0.5).toFixed(2),
    }
  })
}

const STARS = makeStars(54)

/**
 * Aurora backdrop — drifting glows, a slow aurora band and a starfield that
 * all sit on a depth layer with a slight scroll parallax. Purely decorative,
 * so it is hidden from assistive tech and frozen under reduced motion.
 */
export default function Background() {
  const depthRef = useRef(null)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const query = window.matchMedia?.('(prefers-reduced-motion: reduce)')
    if (!query) return

    const sync = () => setReduced(query.matches)
    sync()
    query.addEventListener?.('change', sync)
    return () => query.removeEventListener?.('change', sync)
  }, [])

  // Scroll parallax, written straight to a CSS variable via rAF so React
  // never re-renders while the user scrolls.
  useEffect(() => {
    if (reduced) return
    const node = depthRef.current
    if (!node) return

    let frame = 0
    const apply = () => {
      frame = 0
      const offset = Math.min(window.scrollY, 2400) * -0.055
      node.style.setProperty('--parallax', `${offset.toFixed(1)}px`)
    }
    const onScroll = () => {
      if (frame) return
      frame = window.requestAnimationFrame(apply)
    }

    apply()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [reduced])

  return (
    <div className="bg" aria-hidden="true">
      <div className="bg__depth" ref={depthRef}>
        <span className="bg__band" />
        <span className="bg__blob bg__blob--1" />
        <span className="bg__blob bg__blob--2" />
        <span className="bg__blob bg__blob--3" />
        <span className="bg__stars">
          {STARS.map((star) => (
            <span
              key={star.id}
              className="bg__star"
              style={{
                left: star.left,
                top: star.top,
                '--size': star.size,
                '--dur': star.dur,
                '--delay': star.delay,
                '--peak': star.peak,
              }}
            />
          ))}
        </span>
      </div>
      <span className="bg__vignette" />
      <span className="bg__noise" />
    </div>
  )
}
