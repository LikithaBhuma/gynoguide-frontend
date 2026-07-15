import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import FeatureCard from '../components/FeatureCard'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import { FaBrain, FaBookMedical, FaVideo, FaCapsules, FaStickyNote, FaHeartbeat } from 'react-icons/fa'

const features = [
  { icon: FaBrain, title: 'AI Learning Assistant', description: 'Get intelligent study support for women’s health topics with a future-ready AI interface.' },
  { icon: FaBookMedical, title: 'Disease Encyclopedia', description: 'Explore clear explanations of common conditions and educational resources.' },
  { icon: FaVideo, title: 'Medical Videos', description: 'Watch curated YouTube videos for visual learning and awareness.' },
  { icon: FaCapsules, title: 'Medicine Information', description: 'Understand common medicines with education-first summaries and safety reminders.' },
  { icon: FaStickyNote, title: 'Student Notes', description: 'Access concise study notes, revision summaries, and key takeaways.' },
  { icon: FaHeartbeat, title: 'Health Awareness', description: 'Build confidence with evidence-informed educational content and guidance.' },
]

const HomePage = () => {
  return (
    <>
      <SEO title="GynoGuide AI | Home" description="A modern women's health learning companion featuring AI support, disease education, notes, and videos." keywords="women health, AI learning, gynecology, education" />
      <Hero />
      <section className="py-5">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="section-heading font-display mb-3">Why learners choose GynoGuide AI</h2>
            <p className="page-subtitle">A nurturing platform for studying women&apos;s health with compassion and clarity.</p>
          </div>
          <div className="row g-4">
            {features.map((feature, index) => (
              <motion.div key={feature.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="col-md-6 col-lg-4">
                <FeatureCard {...feature} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Stats />
      <Testimonials />
      <FAQ />
      <section className="py-5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-4 p-5 text-center text-white hero-glow"
            style={{ background: 'var(--gradient-featured)' }}
          >
            <h3 className="fw-bold font-display mb-2" style={{ fontSize: '2rem' }}>
              Stay informed with educational updates
            </h3>
            <p className="mb-4 mx-auto" style={{ opacity: 0.95, maxWidth: '480px' }}>
              Join our newsletter and explore new modules, notes, and health learning resources.
            </p>
            <div className="row justify-content-center">
              <div className="col-md-6 d-flex gap-2">
                <input className="form-control rounded-pill px-4" placeholder="Email address" aria-label="Email" />
                <button className="btn text-nowrap rounded-pill px-4" style={{ background: 'white', color: 'var(--rose-dark)', fontWeight: '700' }}>
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default HomePage
