import { useEffect, useState } from 'react'

/**
 * Types a phrase, holds it, deletes it and moves on to the next one.
 * Under reduced motion it simply shows the first phrase, no animation.
 */
export default function Typewriter({
  phrases,
  typing = 55,
  deleting = 26,
  hold = 1750,
  start = 350,
}) {
  const [reduced] = useState(
    () =>
      typeof window !== 'undefined' &&
      Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches),
  )
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('waiting')

  useEffect(() => {
    if (reduced || phrases.length === 0) return
    const full = phrases[index % phrases.length]

    if (phase === 'waiting') {
      const id = window.setTimeout(() => setPhase('typing'), start)
      return () => window.clearTimeout(id)
    }

    if (phase === 'typing') {
      if (text.length < full.length) {
        const id = window.setTimeout(() => setText(full.slice(0, text.length + 1)), typing)
        return () => window.clearTimeout(id)
      }
      const id = window.setTimeout(() => setPhase('deleting'), hold)
      return () => window.clearTimeout(id)
    }

    // deleting
    if (text.length > 0) {
      const id = window.setTimeout(() => setText(full.slice(0, text.length - 1)), deleting)
      return () => window.clearTimeout(id)
    }
    const id = window.setTimeout(() => {
      setIndex((value) => value + 1)
      setPhase('typing')
    }, 240)
    return () => window.clearTimeout(id)
  }, [reduced, phrases, index, text, phase, typing, deleting, hold, start])

  const shown = reduced ? phrases[0] : text

  return (
    <>
      <span>{shown || '\u00A0'}</span>
      {!reduced && <span className="typewriter__caret" />}
    </>
  )
}
