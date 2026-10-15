import { personalInfo, toolMarquee } from '../data/portfolio'

/**
 * Infinite, pausable-on-hover ticker of tools and platforms.
 * The list is rendered twice and translated by -100%, which makes the
 * loop seamless without any JavaScript.
 */
export default function ToolMarquee() {
  const items = [...toolMarquee, ...toolMarquee]

  return (
    <div className="marquee" aria-label="Tools and platforms I work with">
      <div className="marquee__track" aria-hidden="true">
        {items.map((tool, i) => (
          <span className="marquee__item" key={`${tool}-${i}`}>
            {tool}
          </span>
        ))}
      </div>
      <span className="sr-only">{toolMarquee.join(', ')}</span>
      <span className="sr-only">{personalInfo.roleFocus}</span>
    </div>
  )
}
