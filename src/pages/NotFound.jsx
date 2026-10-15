import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <section className="center-page">
      <div className="container">
        <span className="eyebrow">
          <span className="status-dot" aria-hidden="true" />
          404
        </span>
        <h1 className="page-hero__title" style={{ marginTop: 16 }}>
          Page not <span className="grad-text">found</span>
        </h1>
        <p className="page-hero__desc" style={{ marginInline: 'auto' }}>
          That link does not exist. Let&apos;s get you back to the tour.
        </p>
        <div style={{ marginTop: 28, display: 'flex', justifyContent: 'center' }}>
          <Link className="btn btn--primary" to="/">
            <ArrowLeft className="btn__icon" aria-hidden="true" />
            Back to home
          </Link>
        </div>
      </div>
    </section>
  )
}
