import { useState } from 'react'
import { motion } from 'framer-motion'

const faqs = [
  { question: 'Is this platform a replacement for medical care?', answer: 'No. It is designed as an educational companion and should not replace consultation with a qualified healthcare professional.' },
  { question: 'Can I use the assistant for study help?', answer: 'Yes. The assistant can help explain common women’s health topics and support learning, although it should not replace clinician advice.' },
  { question: 'How can I use the videos and notes?', answer: 'You can browse content by topic and use the notes and videos to supplement your study or learning journey.' },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="py-5 section-blush">
      <div className="container">
        <h2 className="fw-bold text-center mb-5 section-heading font-display">Frequently Asked Questions</h2>
        <div className="mx-auto" style={{ maxWidth: '800px' }}>
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="card mb-3 border-0 shadow-sm faq-item"
              >
                <button
                  className={`btn text-start w-100 p-3 faq-toggle ${isOpen ? 'open' : ''}`}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <div className="d-flex justify-content-between align-items-center gap-3">
                    <span className="fw-semibold">{faq.question}</span>
                    <span className="faq-icon">{isOpen ? '−' : '+'}</span>
                  </div>
                </button>
                {isOpen && <div className="card-body text-muted px-4 pb-4">{faq.answer}</div>}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FAQ
