import { Mail } from 'lucide-react'
import { personalInfo } from '../data/portfolio'
import LiveClock from './LiveClock'
import { GitHubIcon, LinkedInIcon } from './icons'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p>
          © {year} {personalInfo.name} · {personalInfo.role}
        </p>

        <p className="clock" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <span className="status-dot" aria-hidden="true" />
          <LiveClock label />
        </p>

        <div className="footer__social">
          <a
            className="icon-btn"
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon width="16" height="16" />
          </a>
          <a
            className="icon-btn"
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <GitHubIcon width="16" height="16" />
          </a>
          <a className="icon-btn" href={`mailto:${personalInfo.email}`} aria-label="Send an email">
            <Mail size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
