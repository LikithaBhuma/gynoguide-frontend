import { motion } from 'framer-motion'
import { FaQuoteLeft } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Dr. Maya Singh',
    role: 'Medical Educator',
    quote: 'This experience makes complex health education feel approachable, clear, and beautifully structured.',
  },
  {
    name: 'Aisha Rahman',
    role: 'Student',
    quote: 'The AI assistant and notes helped me understand topics like PCOS and the menstrual cycle with ease.',
  },
  {
    name: 'Neha Patel',
    role: 'Healthcare Trainee',
    quote: 'The presentation and content quality are excellent for building confidence in women’s health learning.',
  },
]

const Testimonials = () => {
  return (
    <section className="py-5">
      <div className="container">
        <h2 className="fw-bold text-center mb-5 section-heading font-display">What Learners Say</h2>
        <div className="row g-4">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="col-lg-4"
            >
              <div className="card h-100 border-0 p-4 feminine-card">
                <div className="card-body p-0">
                  <FaQuoteLeft style={{ color: 'var(--rose-light)', fontSize: '1.5rem', marginBottom: '0.75rem' }} />
                  <p style={{ fontStyle: 'italic', lineHeight: '1.75' }} className="mb-4">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <h6 className="fw-bold mb-1 gradient-text font-display" style={{ fontSize: '1.1rem' }}>
                    {item.name}
                  </h6>
                  <small className="text-muted">{item.role}</small>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
