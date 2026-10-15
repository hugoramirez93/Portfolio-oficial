import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, Download, Mail, Sun, Moon, CornerDownLeft } from 'lucide-react'
import { journey } from '../data/journey'
import { personalInfo } from '../data/portfolio'
import { GitHubIcon, LinkedInIcon } from './icons'

/**
 * ⌘K / Ctrl+K command palette — jump to any page or run a quick action
 * without touching the mouse. Mirrors the "tech tool" feel of the site.
 */
export default function CommandPalette({ open, onClose, theme, onToggleTheme }) {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [active, setActive] = useState(0)
  const inputRef = useRef(null)
  const listRef = useRef(null)
  const restoreRef = useRef(null)

  const items = useMemo(() => {
    const pages = journey.map((step) => ({
      id: step.id,
      group: 'Go to',
      label: step.title,
      hint: step.label,
      keywords: `${step.label} ${step.title} ${step.blurb}`,
      icon: step.icon,
      run: () => navigate(step.path),
    }))

    const actions = [
      {
        id: 'cv',
        group: 'Actions',
        label: 'Download CV',
        hint: 'PDF',
        keywords: 'resume cv pdf download curriculum',
        icon: Download,
        run: () => window.open(personalInfo.resumeUrl, '_blank', 'noopener'),
      },
      {
        id: 'email',
        group: 'Actions',
        label: `Email ${personalInfo.email}`,
        hint: 'mailto',
        keywords: 'email mail contact message write',
        icon: Mail,
        run: () => {
          window.location.href = `mailto:${personalInfo.email}`
        },
      },
      {
        id: 'theme',
        group: 'Actions',
        label: `Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`,
        hint: 'colour',
        keywords: 'theme dark light mode colour toggle contrast',
        icon: theme === 'dark' ? Sun : Moon,
        run: onToggleTheme,
      },
      {
        id: 'linkedin',
        group: 'Links',
        label: 'LinkedIn profile',
        hint: 'external',
        keywords: 'linkedin social network profile',
        icon: LinkedInIcon,
        run: () => window.open(personalInfo.social.linkedin, '_blank', 'noopener'),
      },
      {
        id: 'github',
        group: 'Links',
        label: 'GitHub profile',
        hint: 'external',
        keywords: 'github code repositories repos source',
        icon: GitHubIcon,
        run: () => window.open(personalInfo.social.github, '_blank', 'noopener'),
      },
    ]

    return [...pages, ...actions]
  }, [navigate, theme, onToggleTheme])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return items
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.keywords.toLowerCase().includes(q) ||
        item.group.toLowerCase().includes(q),
    )
  }, [items, query])

  const groups = useMemo(() => {
    const map = new Map()
    for (const item of filtered) {
      if (!map.has(item.group)) map.set(item.group, [])
      map.get(item.group).push(item)
    }
    return [...map.entries()]
  }, [filtered])

  // Reset the highlight whenever the result set changes or the palette opens.
  useEffect(() => {
    setActive(0)
  }, [query, open])

  // Move focus into the input, and restore it to wherever it was on close.
  useEffect(() => {
    if (!open) return
    restoreRef.current = document.activeElement
    const id = window.setTimeout(() => inputRef.current?.focus(), 40)
    return () => {
      window.clearTimeout(id)
      if (restoreRef.current instanceof HTMLElement) restoreRef.current.focus()
    }
  }, [open])

  // Keep the highlighted row visible while arrowing through a long list.
  useEffect(() => {
    if (!open) return
    const node = listRef.current?.querySelector('.palette__item.is-active')
    node?.scrollIntoView({ block: 'nearest' })
  }, [active, open])

  const select = (item) => {
    if (!item) return
    onClose()
    // Let the palette unmount before navigating / toggling.
    window.setTimeout(() => item.run(), 0)
  }

  const onKeyDown = (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setActive((i) => Math.min(i + 1, filtered.length - 1))
    } else if (event.key === 'ArrowUp') {
      event.preventDefault()
      setActive((i) => Math.max(i - 1, 0))
    } else if (event.key === 'Enter') {
      event.preventDefault()
      select(filtered[active])
    } else if (event.key === 'Escape') {
      event.preventDefault()
      onClose()
    }
  }

  return (
    <div
      className={`palette${open ? ' is-open' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      hidden={!open}
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className="palette__panel">
        <div className="palette__search">
          <Search aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={onKeyDown}
            placeholder="Search pages and actions…"
            aria-label="Search pages and actions"
            autoComplete="off"
            spellCheck="false"
          />
          <span className="palette__kbd">ESC</span>
        </div>

        <div className="palette__list" ref={listRef} role="listbox" aria-label="Results">
          {filtered.length === 0 && <p className="palette__empty">No matches for &ldquo;{query}&rdquo;.</p>}

          {groups.map(([group, list]) => (
            <div key={group}>
              <p className="palette__group">{group}</p>
              {list.map((item) => {
                const Icon = item.icon
                const index = filtered.indexOf(item)
                return (
                  <button
                    type="button"
                    key={item.id}
                    role="option"
                    aria-selected={index === active}
                    className={`palette__item${index === active ? ' is-active' : ''}`}
                    onMouseEnter={() => setActive(index)}
                    onClick={() => select(item)}
                  >
                    <Icon aria-hidden="true" />
                    <span>{item.label}</span>
                    <span className="palette__hint">{item.hint}</span>
                  </button>
                )
              })}
            </div>
          ))}
        </div>

        <div className="palette__foot">
          <span>
            <b>↑↓</b> navigate
          </span>
          <span>
            <b>↵</b> select
          </span>
          <span>
            <b>esc</b> close
          </span>
          <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <CornerDownLeft width="12" height="12" aria-hidden="true" />
            {filtered.length} result{filtered.length === 1 ? '' : 's'}
          </span>
        </div>
      </div>
    </div>
  )
}
