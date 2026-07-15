import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const sections = [
  { title: 'Mission', content: 'To make women’s health education accessible, compassionate, and engaging for learners worldwide.' },
  { title: 'Vision', content: 'To become a trusted AI-powered learning platform for reproductive, hormonal, and preventive health education.' },
  { title: 'Objectives', content: 'To provide structured learning, clear disease education, and future-ready AI support to students and learners.' },
  { title: 'Importance of Women’s Healthcare', content: 'Women’s health education improves awareness, early support, and confidence in managing health-related questions.' },
  { title: 'Technology Stack', content: 'React, Vite, React Router, Bootstrap, Framer Motion, React Icons, Axios, React Markdown, and React Player.' },
  { title: 'Future Scope', content: 'We plan to expand with deeper AI integration, multilingual support, and richer educational resources.' },
]

const AboutPage = () => {
  return (
    <>
      <SEO title="GynoGuide AI | About" description="Learn about the mission, vision, and future scope of GynoGuide AI." keywords="about, women health, AI platform" />
      <section className="py-5 section-blush">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="page-title section-heading font-display">About GynoGuide AI</h2>
            <p className="page-subtitle">A premium learning platform shaped for women&apos;s health education and future-ready AI assistance.</p>
          </div>
          <div className="row g-4">
            {sections.map((section, index) => (
              <motion.div key={section.title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="col-md-6">
                <div className="card h-100 border-0 shadow-sm p-3 feminine-card">
                  <div className="card-body">
                    <h5 className="fw-bold font-display gradient-text">{section.title}</h5>
                    <p className="mb-0">{section.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
