import { motion } from 'framer-motion'

const FeatureCard = ({ icon: Icon, title, description }) => {
  return (
    <motion.div whileHover={{ y: -10, scale: 1.02 }} className="card h-100 border-0 p-4 feminine-card">
      <div className="card-body p-0">
        <div
          className="mb-4 d-inline-flex align-items-center justify-content-center rounded-circle p-3"
          style={{
            fontSize: '1.75rem',
            background: 'linear-gradient(135deg, rgba(252,231,243,0.9), rgba(237,233,254,0.8))',
            color: 'var(--rose)',
          }}
        >
          <Icon />
        </div>
        <h5 className="card-title fw-bold mb-3 font-display" style={{ fontSize: '1.25rem' }}>
          {title}
        </h5>
        <p className="card-text" style={{ lineHeight: '1.7' }}>
          {description}
        </p>
      </div>
    </motion.div>
  )
}

export default FeatureCard
