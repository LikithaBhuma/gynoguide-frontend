import { useMemo } from 'react'
import { useParams, Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { motion } from 'framer-motion'
import { diseases } from '../data/diseases'

const DiseaseDetailPage = () => {
  const { slug } = useParams()
  const disease = useMemo(() => diseases.find((item) => item.slug === slug), [slug])

  if (!disease) {
    return (
      <>
        <SEO title="GynoGuide AI | Disease Not Found" description="The requested disease page could not be found." keywords="disease, women health" />
        <section className="py-5 text-center section-blush">
          <div className="container">
            <h2 className="font-display">Disease not found</h2>
            <Link className="btn btn-rose mt-3" to="/diseases">
              Return to disease library
            </Link>
          </div>
        </section>
      </>
    )
  }

  const sections = [
    ['Overview', disease.overview],
    ['Symptoms', disease.symptoms.join(', ')],
    ['Causes', disease.causes.join(', ')],
    ['Risk Factors', disease.riskFactors.join(', ')],
    ['Diagnosis', disease.diagnosis.join(', ')],
    ['Treatment', disease.treatment.join(', ')],
    ['Prevention', disease.prevention.join(', ')],
    ['Lifestyle Tips', disease.lifestyleTips.join(', ')],
    ['When to consult a doctor', disease.whenToConsult],
    ['Medical Disclaimer', disease.disclaimer],
  ]

  return (
    <>
      <SEO title={`GynoGuide AI | ${disease.name}`} description={`Learn about ${disease.name} in an educational and accessible format.`} keywords={`${disease.name}, women health, disease`} />
      <section className="py-5 section-blush">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="card border-0 shadow-sm p-4 feminine-card">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
              <div>
                <span className="badge badge-lavender mb-2">{disease.category}</span>
                <h2 className="fw-bold mb-1 font-display gradient-text-lavender">{disease.name}</h2>
              </div>
              <Link className="btn btn-rose-soft" to="/diseases">
                ← Back to all diseases
              </Link>
            </div>
            <div className="row g-4">
              {sections.map(([title, content]) => (
                <div key={title} className="col-md-6">
                  <div className="p-3 info-panel h-100">
                    <h5 className="fw-bold font-display" style={{ color: 'var(--rose-dark)' }}>
                      {title}
                    </h5>
                    <p className="mb-0">{content}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default DiseaseDetailPage
