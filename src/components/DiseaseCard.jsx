import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const DiseaseCard = ({ disease }) => {
  return (
    <motion.article whileHover={{ y: -6, scale: 1.01 }} className="card h-100 border-0 shadow-sm feminine-card">
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="card-title fw-bold mb-0 font-display">{disease.name}</h5>
          <span className="badge rounded-pill badge-lavender">{disease.category}</span>
        </div>
        <p className="card-text text-muted">{disease.overview}</p>
        <div className="d-flex flex-wrap gap-2 mt-3">
          {disease.symptoms.slice(0, 3).map((item) => (
            <span key={item} className="badge badge-rose">
              {item}
            </span>
          ))}
        </div>
        <Link className="btn btn-sm mt-3 btn-rose" to={`/diseases/${disease.slug}`}>
          View details
        </Link>
      </div>
    </motion.article>
  )
}

export default DiseaseCard
