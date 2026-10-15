import { useState } from 'react'
import { Mail, MapPin, Send, Copy, Check, Clock, Globe, ArrowUpRight, RotateCcw, CircleAlert } from 'lucide-react'
import { personalInfo } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { GitHubIcon, LinkedInIcon } from './icons'

const EMAIL = personalInfo.email
const ENDPOINT = 'https://api.web3forms.com/submit'

/**
 * Web3Forms access key — public by design and safe to ship in client code.
 * Override with VITE_WEB3FORMS_KEY if you ever need to rotate it.
 */
const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_KEY || 'd3fae424-8b98-43da-bcc7-c0a640861123'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [copied, setCopied] = useState(false)
  const [status, setStatus] = useState('idle')
  const [mailtoHref, setMailtoHref] = useState('')
  // Kept separately from `form` so the confirmation can still name the
  // address after the fields are cleared on a successful send.
  const [sentTo, setSentTo] = useState('')

  const setField = (key) => (event) => setForm((prev) => ({ ...prev, [key]: event.target.value }))

  const copyEmail = async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL)
      } else {
        const input = document.createElement('input')
        input.value = EMAIL
        document.body.appendChild(input)
        input.select()
        document.execCommand('copy')
        document.body.removeChild(input)
      }
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      /* clipboard unavailable — the address stays visible on screen */
    }
  }

  const buildMailto = () => {
    const name = form.name.trim()
    const email = form.email.trim()
    const subject = form.subject.trim() || `Portfolio enquiry from ${name || 'a visitor'}`
    const body = `Hi Hugo,\n\n${form.message.trim()}\n\n— ${name}${email ? ` (${email})` : ''}`
    return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    // Honeypot — real visitors never tick this hidden checkbox.
    const honeypot = event.currentTarget.elements.botcheck
    if (honeypot && honeypot.checked) return

    const href = buildMailto()
    setMailtoHref(href)

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus('mailto')
      window.location.href = href
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: form.subject.trim() || 'New message from your portfolio',
          from_name: form.name.trim() || 'Portfolio visitor',
          name: form.name.trim(),
          email: form.email.trim(),
          replyto: form.email.trim(),
          message: form.message.trim(),
          botcheck: false,
        }),
      })

      const data = await response.json().catch(() => ({}))
      if (response.ok && data.success) {
        // Wipe the form the moment the message is accepted, so the visitor
        // never sees their old draft sitting under the confirmation.
        setSentTo(form.email.trim())
        setForm({ name: '', email: '', subject: '', message: '' })
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const resetForm = () => {
    setForm({ name: '', email: '', subject: '', message: '' })
    setMailtoHref('')
    setSentTo('')
    setStatus('idle')
  }

  const busy = status === 'sending'

  const channels = [
    { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, Icon: Mail, copyable: true },
    {
      label: 'LinkedIn',
      value: 'in/hugo-ramirezr',
      href: personalInfo.social.linkedin,
      Icon: LinkedInIcon,
    },
    {
      label: 'GitHub',
      value: 'github.com/hugoramirez93',
      href: personalInfo.social.github,
      Icon: GitHubIcon,
    },
  ]

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading
          eyebrow="Contact"
          title="Let's keep your platform"
          highlight="running"
          description="Open to L1 / L2 technical support roles with US and EU teams. I usually reply within one business day."
        />

        <div className="contact">
          <Reveal>
            <div className="card" data-spotlight>
              <span className="chip chip--accent">
                <span className="status-dot" aria-hidden="true" />
                {personalInfo.availability}
              </span>

              <p className="card__text" style={{ marginTop: 14 }}>
                {personalInfo.workMode} · {personalInfo.timezone}
              </p>

              <div className="contact__list">
                {channels.map(({ label, value, href, Icon, copyable }) => {
                  const external = href.startsWith('http')
                  return (
                    <div className="contact__row" key={label}>
                      <span className="icon-tile" style={{ width: 38, height: 38, borderRadius: 11 }}>
                        <Icon width="17" height="17" aria-hidden="true" />
                      </span>
                      <a
                        href={href}
                        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        style={{ flex: 1, minWidth: 0 }}
                      >
                        <small>{label}</small>
                        <b style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                          {value}
                        </b>
                      </a>
                      {copyable ? (
                        <button
                          type="button"
                          className="icon-btn"
                          onClick={copyEmail}
                          aria-label="Copy email address"
                          title="Copy email address"
                        >
                          {copied ? <Check size={16} /> : <Copy size={16} />}
                        </button>
                      ) : (
                        <ArrowUpRight size={16} aria-hidden="true" style={{ color: 'var(--faint)', flex: 'none' }} />
                      )}
                    </div>
                  )
                })}
              </div>

              <div className="contact__meta">
                <span className="contact__meta-head">Where &amp; when I work</span>
                <ul className="contact__meta-list">
                  <li className="contact__meta-row">
                    <MapPin size={13} aria-hidden="true" />
                    <span>
                      <b>{personalInfo.location}</b>
                      <small>Remote · open to relocation</small>
                    </span>
                  </li>
                  <li className="contact__meta-row">
                    <Clock size={13} aria-hidden="true" />
                    <span>
                      <b>GMT-5</b>
                      <small>Aligns with US Eastern &amp; Central</small>
                    </span>
                  </li>
                  <li className="contact__meta-row">
                    <Globe size={13} aria-hidden="true" />
                    <span>
                      <b>US &amp; EU hours</b>
                      <small>Comfortable working both</small>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form className="contact__form" onSubmit={handleSubmit} data-spotlight>
              <h3 className="chip chip--accent" style={{ justifySelf: 'start' }}>
                <Send size={13} aria-hidden="true" />
                Send a message
              </h3>
              <p className="card__text" style={{ marginTop: 0 }}>
                Fill this in and I&apos;ll get back to you within one business day.
              </p>

              <input
                type="checkbox"
                name="botcheck"
                hidden
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              <div className="contact__form-grid">
                <div className="field">
                  <label htmlFor="name">Your name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={setField('name')}
                    disabled={busy}
                    placeholder="Jane Doe"
                  />
                </div>

                <div className="field">
                  <label htmlFor="email">Your email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={setField('email')}
                    disabled={busy}
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div className="field">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={setField('subject')}
                  disabled={busy}
                  placeholder="Technical Support role"
                />
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={form.message}
                  onChange={setField('message')}
                  disabled={busy}
                  placeholder="Hi Hugo, we're hiring for a Tier 1/2 support role…"
                />
              </div>

              <button type="submit" className="btn btn--primary" disabled={busy} style={{ width: '100%' }}>
                {busy ? <span className="spinner" aria-hidden="true" /> : <Send className="btn__icon" aria-hidden="true" />}
                {busy ? 'Sending…' : 'Send message'}
              </button>

              {status === 'success' && (
                <div className="notice notice--ok" role="status">
                  <p>
                    <Check size={16} aria-hidden="true" />
                    Message sent — thank you! I&apos;ll reply to {sentTo || 'your email'} within one
                    business day.
                  </p>
                  <button type="button" className="btn btn--ghost btn--sm" onClick={resetForm}>
                    <RotateCcw className="btn__icon" aria-hidden="true" />
                    Send another message
                  </button>
                </div>
              )}

              {status === 'error' && (
                <div className="notice notice--warn" role="alert">
                  <p>
                    <CircleAlert size={16} aria-hidden="true" />
                    Sorry, the message couldn&apos;t be sent right now. You can email me directly instead.
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {mailtoHref && (
                      <a className="btn btn--ghost btn--sm" href={mailtoHref}>
                        <Mail className="btn__icon" aria-hidden="true" />
                        Open in my email app
                      </a>
                    )}
                    <button type="button" className="btn btn--ghost btn--sm" onClick={copyEmail}>
                      {copied ? <Check className="btn__icon" /> : <Copy className="btn__icon" />}
                      {copied ? 'Email copied' : 'Copy email'}
                    </button>
                    <button type="button" className="btn btn--ghost btn--sm" onClick={() => setStatus('idle')}>
                      <RotateCcw className="btn__icon" aria-hidden="true" />
                      Try again
                    </button>
                  </div>
                </div>
              )}

              {status === 'mailto' && (
                <div className="notice notice--ok" role="status">
                  <p>
                    <Check size={16} aria-hidden="true" />
                    Your email app should have opened with the message ready to send.
                  </p>
                  <button type="button" className="btn btn--ghost btn--sm" onClick={resetForm}>
                    <RotateCcw className="btn__icon" aria-hidden="true" />
                    Write another
                  </button>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
