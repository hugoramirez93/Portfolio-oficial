import { Routes, Route, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import PageMeta from './components/PageMeta'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Experience from './pages/Experience'
import CaseStudies from './pages/CaseStudies'
import Projects from './pages/Projects'
import Education from './pages/Education'
import NotFound from './pages/NotFound'

export default function App() {
  const { pathname } = useLocation()

  return (
    <Layout>
      <PageMeta />
      {/* Re-keying on the path replays the enter animation on every navigation. */}
      <div className="page-anim" key={pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/case-studies" element={<CaseStudies />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Layout>
  )
}
