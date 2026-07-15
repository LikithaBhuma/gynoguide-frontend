import { motion } from 'framer-motion'

const stats = [
  { value: '14+', label: 'Health Topics' },
  { value: '8+', label: 'Video Categories' },
  { value: '9+', label: 'Study Notes' },
  { value: '100%', label: 'Responsive Design' },
]

const Stats = () => {
  return (
    <section className="py-5 section-blush">
      <div className="container">
        <div className="row g-4 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="col-md-3"
            >
              <div className="p-4 stat-box">
                <h3 className="fw-bold mb-2 font-display gradient-text-lavender" style={{ fontSize: '2.25rem' }}>
                  {stat.value}
                </h3>
                <p className="mb-0">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
