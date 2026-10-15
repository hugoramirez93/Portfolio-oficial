import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, Moon, Sun, X, Download, MessageCircle } from 'lucide-react'
import { personalInfo } from '../data/portfolio'
import { journey } from '../data/journey'

/** Short labels keep the pill nav compact. */
const SHORT_LABELS = { 'case-studies': 'Cases' }

const links = journey
  .filter((step) => step.id !== 'contact')
  .map((step) => ({
    to: step.path,
    label: SHORT_LABELS[step.id] || step.label,
    end: step.path === '/',
  }))

function isMac() {
  if (typeof navigator === 'undefined') return false
  return /Mac|iPhone|iPad|iPod/i.test(navigator.platform || navigator.userAgent || '')
}

export default function Navbar({ theme, onToggleTheme, onOpenPalette }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname, hash } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname, hash])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <div className="nav__inner">
          <Link to="/" className="brand" aria-label={`${personalInfo.name} — home`}>
            <span className="brand__logo">{personalInfo.initials}</span>
            <span className="brand__text">
              <span className="brand__name">{personalInfo.name}</span>
              <span className="brand__role">Technical Support · {personalInfo.roleLevel}</span>
            </span>
          </Link>

          <nav className="nav__links" aria-label="Primary">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.end}
                className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="nav__actions">
            <button
              type="button"
              className="kbd"
              onClick={onOpenPalette}
              aria-label="Open command palette"
              title="Search pages and actions"
            >
              {isMac() ? '⌘' : 'Ctrl'} K
            </button>

            <button
              type="button"
              className="icon-btn"
              onClick={onToggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
            >
              {theme === 'dark' ? <Sun /> : <Moon />}
            </button>

            <a className="btn btn--ghost btn--sm nav__cv" href={personalInfo.resumeUrl} download>
              <Download className="btn__icon" aria-hidden="true" />
              <span className="nav__cta-text">CV</span>
            </a>

            <Link className="btn btn--primary btn--sm nav__talk" to="/#contact">
              <MessageCircle className="btn__icon" aria-hidden="true" />
              <span className="nav__cta-text">Let&apos;s talk</span>
            </Link>

            <button
              type="button"
              className="icon-btn nav__burger"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      <div className={`menu${open ? ' is-open' : ''}`} hidden={!open}>
        <nav className="menu__links" aria-label="Mobile">
          {links.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) => `menu__link${isActive ? ' is-active' : ''}`}
            >
              <span className="mono menu__num">{String(i + 1).padStart(2, '0')}</span>
              {link.label}
            </NavLink>
          ))}
          <a className="menu__link" href="/#contact">
            <span className="mono menu__num">07</span>
            Contact
          </a>
          <a className="menu__link menu__link--cv" href={personalInfo.resumeUrl} download>
            <Download className="menu__cv-icon" size={16} aria-hidden="true" />
            Download CV
          </a>
        </nav>
      </div>
    </>
  )
}
