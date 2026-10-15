import { useEffect, useState } from 'react'
import Background from './Background'
import Navbar from './Navbar'
import Footer from './Footer'
import StepNav from './StepNav'
import ScrollToTop from './ScrollToTop'
import ScrollProgress from './ScrollProgress'
import CommandPalette from './CommandPalette'
import useTheme from '../hooks/useTheme'
import useCardSpotlight from '../hooks/useCardSpotlight'

/** Shared chrome: animated backdrop, floating nav, page content,
 *  the guided prev/next strip, and the footer. */
export default function Layout({ children }) {
  const { theme, toggleTheme } = useTheme()
  const [paletteOpen, setPaletteOpen] = useState(false)

  useCardSpotlight()

  // ⌘K / Ctrl+K opens the palette from anywhere. The palette handles its
  // own Escape / arrow keys once it is open.
  useEffect(() => {
    const onKeyDown = (event) => {
      const key = event.key?.toLowerCase()
      if (key === 'k' && (event.metaKey || event.ctrlKey) && !event.altKey) {
        event.preventDefault()
        setPaletteOpen((open) => !open)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <>
      <Background />
      <ScrollProgress />
      <ScrollToTop />
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Navbar theme={theme} onToggleTheme={toggleTheme} onOpenPalette={() => setPaletteOpen(true)} />

      <main id="main">{children}</main>

      <StepNav />
      <Footer />

      <CommandPalette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    </>
  )
}
