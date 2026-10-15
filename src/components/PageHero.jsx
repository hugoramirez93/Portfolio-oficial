/** Hero block shared by every inner page: mono eyebrow, gradient
 *  headline and a short intro, plus optional meta chips. */
export default function PageHero({ eyebrow, title, highlight, description, meta = [] }) {
  return (
    <header className="page-hero">
      <div className="container">
        <span className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          {eyebrow}
        </span>
        <h1 className="page-hero__title">
          {title} {highlight && <span className="grad-text">{highlight}</span>}
        </h1>
        {description && <p className="page-hero__desc">{description}</p>}
        {meta.length > 0 && (
          <div className="page-hero__meta">
            {meta.map((item) => (
              <span className="chip chip--mono" key={item}>
                {item}
              </span>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
