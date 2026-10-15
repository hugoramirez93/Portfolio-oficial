/** Consistent section header: mono eyebrow, big title with a gradient
 *  highlight, and an optional supporting paragraph on the right. */
export default function SectionHeading({ eyebrow, title, highlight, description }) {
  return (
    <div className="section-head">
      <div>
        {eyebrow && (
          <span className="eyebrow">
            <span className="status-dot" aria-hidden="true" />
            {eyebrow}
          </span>
        )}
        <h2 style={{ marginTop: 14 }}>
          {title} {highlight && <span className="grad-text">{highlight}</span>}
        </h2>
      </div>
      {description && <p>{description}</p>}
    </div>
  )
}
