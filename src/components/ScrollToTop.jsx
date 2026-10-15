import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls to the top on every route change, or to the matching element
 * when the URL carries a hash (e.g. "/#contact" from the guided tour).
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      // Wait one frame so the destination page has actually rendered.
      const id = window.setTimeout(() => {
        const target = document.querySelector(hash)
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        else window.scrollTo(0, 0)
      }, 60)
      return () => window.clearTimeout(id)
    }

    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}
