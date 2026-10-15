import { useLocation } from 'react-router-dom'
import { SEO } from '../data/seo'
import usePageMeta from '../hooks/usePageMeta'

/**
 * Applies per-route metadata from `src/data/seo.js` on every navigation, so the
 * client-side <head> always matches the page the visitor is on. The build step
 * (`scripts/generate-seo.mjs`) bakes the same values into static HTML for
 * crawlers and link previews that never run JavaScript.
 */
export default function PageMeta() {
  const { pathname } = useLocation()
  // Ignore a trailing slash so `/about/` resolves the same as `/about`.
  const path = pathname !== '/' ? pathname.replace(/\/+$/, '') : '/'
  const meta = SEO[path]

  usePageMeta(
    meta
      ? { ...meta, path }
      : {
          title: 'Page not found',
          description: 'That link does not exist. Head back to the guided tour of my work.',
          path,
          noindex: true,
        },
  )

  return null
}
