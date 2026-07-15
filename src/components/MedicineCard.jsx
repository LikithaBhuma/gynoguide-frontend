import { motion } from 'framer-motion'

const MedicineCard = ({ medicine }) => {
  return (
    <motion.article whileHover={{ y: -6, scale: 1.01 }} className="card h-100 border-0 shadow-sm feminine-card medicine-card-accent">
      <div className="card-body">
        <h5 className="fw-bold font-display gradient-text-lavender">{medicine.name}</h5>
        <p className="text-muted mb-3">
          <span className="badge badge-rose me-1">Used for</span>
          {medicine.usedFor}
        </p>
        <ul className="small text-muted list-unstyled">
          <li className="mb-2">
            <strong style={{ color: 'var(--rose-dark)' }}>Dosage:</strong> {medicine.dosageInformation}
          </li>
          <li className="mb-2">
            <strong style={{ color: 'var(--rose-dark)' }}>Side effects:</strong> {medicine.sideEffects.join(', ')}
          </li>
          <li className="mb-2">
            <strong style={{ color: 'var(--rose-dark)' }}>Warnings:</strong> {medicine.warnings.join(', ')}
          </li>
          <li>
            <strong style={{ color: 'var(--rose-dark)' }}>Pregnancy safety:</strong> {medicine.pregnancySafety}
          </li>
        </ul>
      </div>
    </motion.article>
  )
}

export default MedicineCard
