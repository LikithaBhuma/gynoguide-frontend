import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaHeartbeat, FaRobot, FaArrowRight, FaLeaf } from 'react-icons/fa'
import { useTheme } from '../contexts/ThemeContext'

const Hero = () => {
  const { darkMode } = useTheme()

  return (
    <section className={`py-5 section-blush ${darkMode ? 'text-light' : ''}`}>
      <div className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <motion.div initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <div className="pill-tag mb-4">
                <FaHeartbeat />
                <span>Professional Women&apos;s Health Education</span>
              </div>
              <h1 className="display-4 fw-bold mb-4 font-display" style={{ lineHeight: '1.15' }}>
                Your Intelligent Women&apos;s Health Learning Companion
              </h1>
              <p className="lead page-subtitle text-start" style={{ fontSize: '1.12rem', lineHeight: '1.85' }}>
                Explore diseases, medicines, notes, and learning videos in one beautiful, supportive space crafted for you.
              </p>
              <div className="d-flex flex-wrap gap-3 mt-5">
                <Link to="/assistant" className="btn btn-lg px-5 py-3 btn-rose">
                  Start Learning <FaArrowRight className="ms-2" />
                </Link>
                <Link to="/assistant" className="btn btn-lg px-5 py-3 btn-rose-soft">
                  <FaRobot className="me-2" /> Ask AI
                </Link>
              </div>
            </motion.div>
          </div>
          <div className="col-lg-5">
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
              <div className="p-5 rounded-4 hero-glow" style={{ background: 'var(--gradient-featured)', minHeight: '320px' }}>
                <div className="d-flex flex-column justify-content-between h-100 text-white">
                  <div>
                    <div className="d-flex align-items-center gap-2 mb-2 opacity-90">
                      <FaLeaf />
                      <small className="text-uppercase fw-semibold" style={{ letterSpacing: '0.08em' }}>Nurturing knowledge</small>
                    </div>
                    <h3 className="fw-bold font-display" style={{ fontSize: '1.75rem' }}>Learn with confidence</h3>
                    <p className="opacity-90">Trusted educational content, AI-powered study help, and clear explanations for students and learners.</p>
                  </div>
                  <div className="row g-3 mt-3">
                    <div className="col-6">
                      <div className="rounded-3 p-3" style={{ background: 'rgba(255,255,255,0.18)', backdropFilter: 'blur(8px)' }}>
                        <h4 className="fw-bold mb-0 font-display">24/7</h4>
                        <small>AI guidance</small>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="rounded-3 p-3" style={{ background: 'rgba(255,255,255,0.14)' }}>
                        <h4 className="fw-bold mb-0 font-display">100+</h4>
                        <small>Resources</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
