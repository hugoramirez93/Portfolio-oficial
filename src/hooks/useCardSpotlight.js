import { useEffect } from 'react'

/**
 * A single delegated pointer listener that feeds the cursor position into
 * every `[data-spotlight]` element as CSS custom properties. One listener
 * for the whole page instead of one per card.
 *
 * Skipped entirely on touch devices and when the visitor prefers reduced motion.
 */
export default function useCardSpotlight() {
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(hover: none)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const onPointerMove = (event) => {
      const target = event.target instanceof Element ? event.target.closest('[data-spotlight]') : null
      if (!target) return
      const rect = target.getBoundingClientRect()
      target.style.setProperty('--mx', `${event.clientX - rect.left}px`)
      target.style.setProperty('--my', `${event.clientY - rect.top}px`)
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => window.removeEventListener('pointermove', onPointerMove)
  }, [])
}
