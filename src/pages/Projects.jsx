import { ExternalLink } from 'lucide-react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { projects } from '../data/portfolio'
import { GitHubIcon } from '../components/icons'

export default function Projects() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <>
      <PageHero
        eyebrow="Step 05 · Projects"
        title="Things I have"
        highlight="built"
        description="Full-stack and front-end work I shipped end to end: e-commerce with real payments, REST APIs and interface replicas."
        meta={[`${projects.length} projects`, 'HTML', 'CSS', 'JavaScript', 'API']}
      />

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="projects">
            {[...featured, ...rest].map((project, i) => (
              <Reveal className="project project--clickable" key={project.id} delay={(i % 4) * 60} data-spotlight>
                <div
                  className="project__clickzone"
                  onClick={(e) => {
                    // Let real links (Code / Live) handle their own clicks.
                    if (e.target.closest('a')) return
                    const href = project.link || project.liveUrl || project.github
                    if (href) window.open(href, '_blank', 'noopener noreferrer')
                  }}
                >
                  <div className="project__media">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      loading="lazy"
                      decoding="async"
                      width="640"
                      height="400"
                    />
                  </div>
                  <div className="project__body">
                    <h3 className="project__title">{project.title}</h3>
                    <p className="project__text">{project.summary}</p>
                    <div className="tags">
                      {project.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="project__links" onClick={(e) => e.stopPropagation()}>
                      <a
                        className="link-btn"
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} source code on GitHub`}
                      >
                        <GitHubIcon width="13" height="13" />
                        Code
                      </a>
                      {(project.link || project.liveUrl) && (
                        <a
                          className="link-btn"
                          href={project.link || project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${project.title} live demo`}
                        >
                          <ExternalLink size={13} aria-hidden="true" />
                          Live
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
