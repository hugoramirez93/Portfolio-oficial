export const personalInfo = {
  name: 'Hugo Ramírez',
  shortName: 'Hugo',
  initials: 'HR',
  role: 'Technical Support Specialist',
  roleLevel: 'L1 / L2',
  roleFocus: 'Enterprise SaaS & CPQ',
  tagline:
    'I keep enterprise SaaS products running, diagnosing, reproducing and resolving production issues before they reach the customer again.',
  email: 'hugoo.ramirez493@gmail.com',
  phone: '+57 322 596 3903',
  location: 'Cali, Colombia',
  timezone: 'GMT-5 (aligns with US Eastern & Central)',
  workMode: 'Remote · Open to relocation & US / EU hours',
  availability: 'Open to new opportunities',
  summary:
    'Technical Support Specialist with 4+ years of experience delivering L1/L2 support for enterprise SaaS platforms and custom product-configuration (CPQ) systems. Skilled in advanced troubleshooting, system log analysis, root-cause analysis (RCA) and incident management across cloud environments. I consistently sustain a 92% CSAT and a 5-minute first-response SLA while resolving 20+ cases per day, and I have documented 30+ incident investigations and RCAs, partnering with Engineering to ship permanent fixes for 15+ enterprise accounts across the US, Canada and LATAM.',
  summaryTail:
    'Bilingual (English C1 / Spanish native) and currently completing a Bachelor\u2019s degree in Systems Engineering.',
  languages: [
    { name: 'Spanish', level: 'Native', value: 100 },
    { name: 'English', level: 'C1 · Professional', value: 88 },
  ],
  social: {
    linkedin: 'https://www.linkedin.com/in/hugo-ramirezr',
    github: 'https://github.com/hugoramirez93',
    portfolio: 'https://portfolio-oficial-roan.vercel.app',
  },
  resumeUrl: '/resume.pdf',
  cvUrl: '/cv.html',
}

/** Headline numbers recruiters and hiring managers scan for first. */
export const stats = [
  { value: 4, suffix: '+', label: 'Years in technical support', sub: 'SaaS & CPQ platforms' },
  { value: 92, suffix: '%', label: 'CSAT sustained', sub: 'Across enterprise accounts' },
  { value: 5, suffix: ' min', label: 'First-response SLA', sub: 'Consistently met' },
  { value: 20, suffix: '+', label: 'Cases resolved daily', sub: 'L1 & L2 volume' },
  { value: 30, suffix: '+', label: 'Incidents & RCAs documented', sub: 'Root-cause driven' },
  { value: 15, suffix: '+', label: 'Enterprise accounts supported', sub: 'US · Canada · LATAM' },
]

/** Grouped core competencies, mirroring the CV. */
export const competencies = [
  {
    group: 'Support Engineering',
    icon: 'LifeBuoy',
    items: [
      'L1 / L2 Technical Support',
      'Incident Management',
      'Escalation Handling',
      'Root-Cause Analysis',
      'SLA & KPI Management',
      'Customer Success',
    ],
  },
  {
    group: 'Debugging & Observability',
    icon: 'SearchCode',
    items: [
      'Application & System Log Analysis',
      'Error Telemetry',
      'API / SSO (OIDC) Authentication Troubleshooting',
      'Production Issue Reproduction',
    ],
  },
  {
    group: 'Cloud & Systems',
    icon: 'Server',
    items: [
      'Cloud Environments',
      'Windows & Linux Servers',
      'Networking',
      'SSL / TLS Certificates',
      'Databases & SQL',
    ],
  },
  {
    group: 'Tools & Platforms',
    icon: 'Wrench',
    items: [
      'Salesforce',
      'Jira',
      'Genesys Cloud',
      'Citrix',
      'Slack',
      'Microsoft Teams',
      'Google Workspace',
    ],
  },
  {
    group: 'Development Background',
    icon: 'Code2',
    items: ['JavaScript', 'React', 'Node.js', 'REST APIs', 'HTML', 'CSS'],
  },
]

/** Tools shown in the scrolling strip — quick visual proof of stack familiarity. */
export const toolMarquee = [
  'Salesforce',
  'Jira',
  'Genesys Cloud',
  'Zendesk',
  'Citrix',
  'Postman',
  'SQL',
  'Keycloak',
  'OIDC / SSO',
  'Windows Server',
  'Linux',
  'Cloud Environments',
  'Log Analysis',
  'REST APIs',
  'Microsoft Teams',
  'Slack',
  'Google Workspace',
  'React',
  'Node.js',
  'GitHub Copilot',
  'ChatGPT',
  'Gemini',
  'Claude Code',
  'OpenCode',
  'Codex',
]

/**
 * How I use AI assistants every day — as acceleration with a human in the
 * loop, for both support work and software development.
 */
export const aiStack = {
  intro:
    'I use AI assistants as a force multiplier, not a shortcut. They compress triage, documentation and code into minutes, while every diagnosis, reply and commit stays verified and owned by me.',
  tools: [
    { name: 'GitHub Copilot', badge: 'Co', desc: 'In-editor completion, refactors and test scaffolding.' },
    { name: 'ChatGPT', badge: 'GPT', desc: 'Troubleshooting, drafting and data analysis.' },
    { name: 'Gemini', badge: 'Ge', desc: 'Research and long-context reasoning over docs.' },
    { name: 'Claude Code', badge: 'CC', desc: 'Agentic work across an existing codebase.' },
    { name: 'OpenCode', badge: 'OC', desc: 'Terminal-first agentic coding and automation.' },
    { name: 'Codex', badge: 'Cx', desc: 'Scripted, automated code tasks.' },
  ],
  supportUses: [
    'Summarising long log files and stack traces to surface the failing component',
    'Turning messy ticket threads into clear, structured incident reports and RCAs',
    'Drafting and tightening knowledge-base articles and customer replies',
    'Generating SQL and queries to reproduce and validate data issues',
    'Translating and tone-checking bilingual customer communication',
  ],
  devUses: [
    'Scaffolding components and boilerplate, then reviewing every line',
    'Explaining unfamiliar or legacy code fast',
    'Writing, fixing and expanding tests; debugging with a second pair of eyes',
    'Refactoring, code review and documentation',
  ],
  note:
    'Human-in-the-loop by default: no AI output reaches a customer or a commit without review, and no customer data is shared with third-party tools.',
}

export const experience = [
  {
    company: 'Revalize / Configure One',
    role: 'Technical Support Specialist (Tier 1 & Tier 2)',
    period: 'Feb 2025 – Present',
    meta: 'Remote',
    context: 'Enterprise CPQ SaaS platform for complex product configuration',
    current: true,
    highlights: [
      'Resolve 20+ daily L1/L2 cases on an enterprise CPQ SaaS platform, sustaining a 92% CSAT and a 5-minute first-response SLA.',
      'Investigate and document 30+ incidents and RCAs, tracing root causes through system logs, error telemetry and cloud-environment diagnostics.',
      'Support 15+ enterprise accounts (Avianca / Lifemiles, Altabix, Escapadas, Sicas Lite, Invetso and others) across the US, Canada and LATAM.',
      'Partner with Engineering and Product to ship permanent fixes and reduce repeat escalations on authentication, configuration and integration issues.',
      'Author customer-facing incident reports and knowledge-base articles, improving first-contact resolution and long-term platform stability.',
    ],
    tags: ['CPQ', 'Log Analysis', 'RCA', 'SQL', 'SSO / OIDC', 'Salesforce'],
  },
  {
    company: 'BluePixel',
    role: 'Technical Support & Project Coordination (Junior PM)',
    period: 'Mar 2024 – Nov 2024',
    meta: 'Remote',
    context: 'Technical Support / Client Solutions',
    current: false,
    highlights: [
      'Coordinated cross-functional teams to deliver client solutions in fast-paced technical environments.',
      'Managed project timelines, client communication and task prioritization for high-profile accounts including Lifemiles–Avianca and Altabix.',
      'Supported technical teams with issue tracking, follow-up and resolution workflows, bridging clients and development teams.',
      'Kept clients and development teams aligned with clear, timely communication on open issues.',
    ],
    tags: ['Issue Tracking', 'Client Communication', 'Coordination'],
  },
  {
    company: 'Teleperformance LATAM',
    role: 'Bilingual Customer & Technical Support Specialist',
    period: 'Mar 2021 – Nov 2023',
    meta: 'Remote · US & Canada markets',
    context: 'Uber Eats & VRBO',
    current: false,
    highlights: [
      'Handled high-volume technical and customer support across chat, phone and email, resolving 20+ daily cases.',
      'Troubleshot account access, billing discrepancies, payment-gateway issues, refunds, failed transactions and account restrictions.',
      'Managed password resets and security-related cases while maintaining strong customer satisfaction.',
      'Maintained performance KPIs in fast-paced, high-demand support environments.',
    ],
    tags: ['Billing', 'Account Access', 'Security', 'KPIs'],
  },
]

/**
 * Selected incident investigations (RCA). This is the section that proves
 * technical depth for a support engineering role — problem → action → result.
 */
export const incidentCases = [
  {
    id: 'tls-signin-outage',
    code: 'INC-001',
    severity: 'Critical',
    category: 'Infrastructure · TLS',
    title: 'Production sign-in outage',
    subtitle: 'Expired server certificate',
    problem:
      'A production login outage traced to an expired TLS certificate on the application server, while the public site still presented a valid, separately renewed certificate.',
    action:
      'Isolated the mismatch to the application-server certificate and guided the customer through installing the correct certificate and private key.',
    result: 'Restored access in ~31 hours.',
    impact: 'Proposed safeguards to prevent recurrence.',
    tags: ['SSL / TLS', 'Log Analysis', 'Root Cause', 'Customer Guidance'],
    icon: 'ShieldOff',
  },
  {
    id: 'dynamics-quote-failure',
    code: 'INC-002',
    severity: 'High',
    category: 'Integration · Data',
    title: 'Quote-creation failure',
    subtitle: 'Dynamics CRM integration',
    problem:
      'A two-phase failure in which a recent environment change and legacy account data each independently blocked quote creation.',
    action:
      'Isolated a missing account reference value, restored the affected records and supported defensive integration changes to handle incomplete data gracefully.',
    result: 'Quote creation restored across affected accounts.',
    impact: 'Integration hardened against incomplete data.',
    tags: ['Dynamics CRM', 'Data Integrity', 'SQL', 'Integration'],
    icon: 'Link2',
  },
  {
    id: 'keycloak-sso-upgrade',
    code: 'INC-003',
    severity: 'High',
    category: 'Identity · SSO',
    title: 'SSO authentication upgrade',
    subtitle: 'Keycloak 26 migration',
    problem:
      'First-login and account-linking failures surfaced for users immediately after a Keycloak 26 upgrade.',
    action:
      'Corrected OIDC scopes and Identity-Provider mappers, then documented the fix so it could be rolled out safely to production.',
    result: 'Authentication restored for affected users.',
    impact: 'Fix documented for safe, repeatable rollout.',
    tags: ['Keycloak', 'OIDC', 'SSO', 'Documentation'],
    icon: 'KeyRound',
  },
]

/**
 * Education & certifications, ordered newest → oldest so the timeline reads
 * top-down. `verify` holds the public Coursera credential link when available.
 */
export const education = [
  {
    id: 'systems-engineering',
    title: 'Systems Engineering (Ingeniería de Sistemas)',
    institution: 'Fundación Universitaria San Mateo',
    location: 'Cali, Colombia',
    period: 'Expected Dec 2027',
    type: 'Degree',
    status: 'in-progress',
    order: 1,
    description:
      'Ongoing degree focusing on software engineering, algorithms, databases, systems analysis and problem-solving.',
  },
  {
    id: 'ponaoinnovar',
    title: 'PONAO Innovar – Full Stack Web Development',
    institution: 'PONAO Innovar',
    location: 'Cali, Colombia',
    period: 'Sep 2025 – Dec 2025',
    type: 'Bootcamp',
    status: 'completed',
    order: 2,
    description:
      'Full-stack training with hands-on projects and collaborative development. Git workflows, REST APIs, JavaScript and modern front-end foundations.',
  },
  {
    id: 'talento-tech',
    title: 'Talento Tech – Full Stack Development Bootcamp',
    institution: 'Talento Tech',
    location: 'Colombia',
    period: 'Feb 2025 – Aug 2025',
    type: 'Bootcamp',
    status: 'completed',
    order: 3,
    description:
      'Backend & frontend fundamentals: HTML, CSS, JavaScript, Node.js, Express, Git, REST APIs, teamwork and agile methodology.',
  },
  {
    id: 'udemy',
    title: 'Web Development – HTML, CSS & JavaScript',
    institution: 'Udemy',
    location: 'Online',
    period: '2025',
    type: 'Course',
    status: 'completed',
    order: 4,
    description:
      'Practical projects covering responsive layouts, DOM manipulation, logic, debugging and writing clean, reusable code.',
  },
  {
    id: 'meta-frontend',
    title: 'Meta Front-End Developer – Professional Certificate',
    institution: 'Meta · Coursera',
    location: 'Online',
    period: 'Dec 2022 – 2023',
    type: 'Professional Certificate',
    status: 'completed',
    order: 5,
    description:
      'Five-course path covering front-end foundations: Introduction to Front-End Development, Programming with JavaScript, Version Control, HTML & CSS in depth and JavaScript basics.',
  },
  {
    id: 'meta-backend',
    title: 'Meta Back-End Developer – Course 1',
    institution: 'Meta · Coursera',
    location: 'Online',
    period: '2025',
    type: 'Certification',
    status: 'completed',
    order: 6,
    description:
      'Introduction to back-end development, Python fundamentals, data structures, databases basics and back-end architecture concepts.',
  },
  {
    id: 'ucdavis',
    title: 'JavaScript Basics – UC Davis',
    institution: 'University of California, Davis · Coursera',
    location: 'Online',
    period: 'Sep 2023',
    type: 'Certification',
    status: 'completed',
    order: 7,
    description:
      'Core JavaScript concepts, functions, loops, conditionals, arrays/objects and practical exercises to strengthen logic.',
    verify: 'https://coursera.org/verify/8EEUACPPH6WC',
  },
]

export const projects = [
  {
    id: 'netflix-clone',
    title: 'Netflix Clone',
    summary: 'Responsive streaming UI replica built with HTML, CSS & JavaScript.',
    description:
      'Responsive Netflix landing-page clone with hero section, carousels and mobile-first layout. Focused on HTML/CSS/JS structure and responsiveness.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/netflix-clone.webp',
    github: 'https://github.com/hugoramirez93/Netflix-clone',
    liveUrl: 'https://hugoramirez93.github.io/Netflix-clone/',
    link: 'https://hugoramirez93.github.io/Netflix-clone/',
    featured: true,
  },
  {
    id: 'landing-arte',
    title: 'Landing Page Arte',
    summary: 'Art portfolio landing page with gallery and smooth scroll.',
    description:
      'Art portfolio landing page with gallery, smooth scroll and elegant layout. Built with HTML, CSS and JavaScript.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: '/projects/landingpage-arte.webp',
    github: 'https://github.com/hugoramirez93/LandingPageArte',
    liveUrl: 'https://hugoramirez93.github.io/LandingPageArte/',
    link: 'https://hugoramirez93.github.io/LandingPageArte/',
    featured: true,
  },
  {
    id: 'expense-tracker',
    title: 'Expense Tracker',
    summary: 'Tracks income and expenses with localStorage persistence.',
    description:
      'Tracks income and expenses, calculates balance, filters by category and persists data in localStorage. Clean, functional UI.',
    tags: ['JavaScript', 'CSS', 'HTML'],
    image: '/projects/react-expense-tracker.webp',
    github: 'https://github.com/hugoramirez93/Gasto-semanal',
    liveUrl: 'https://hugoramirez93.github.io/Gasto-semanal/',
    link: 'https://hugoramirez93.github.io/Gasto-semanal/',
    featured: true,
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    summary: 'Real-time weather data using the OpenWeatherMap API.',
    description:
      'Real-time weather app using OpenWeatherMap API. Shows temperature, conditions, location search and responsive design.',
    tags: ['JavaScript', 'API', 'CSS', 'HTML'],
    image: '/projects/weather-app.webp',
    github: 'https://github.com/hugoramirez93/App-clima',
    liveUrl: 'https://hugoramirez93.github.io/App-clima/',
    link: 'https://hugoramirez93.github.io/App-clima/',
    featured: true,
  },
]
