import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope } from 'react-icons/fa'
import SEO from '../components/SEO'

const ContactPage = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const validate = () => {
    const nextErrors = {}
    if (!formState.name.trim()) nextErrors.name = 'Name is required'
    if (!formState.email.includes('@')) nextErrors.email = 'Valid email is required'
    if (!formState.subject.trim()) nextErrors.subject = 'Subject is required'
    if (!formState.message.trim()) nextErrors.message = 'Message is required'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    setFormState({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <>
      <SEO title="GynoGuide AI | Contact" description="Contact the GynoGuide AI team for questions, partnership ideas, or feedback." keywords="contact, women health education" />
      <section className="py-5 section-blush">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <div
                className="rounded-4 p-4 mb-4 d-inline-flex align-items-center justify-content-center"
                style={{ background: 'var(--gradient-primary)', color: 'white', width: '64px', height: '64px', fontSize: '1.5rem' }}
              >
                <FaEnvelope />
              </div>
              <h2 className="page-title font-display mb-3">Contact Us</h2>
              <p className="page-subtitle text-start">
                We&apos;d love to hear from educators, learners, and healthcare partners interested in this platform.
              </p>
            </div>
            <div className="col-lg-7">
              <motion.form initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} onSubmit={handleSubmit} className="card border-0 shadow-sm p-4 feminine-card">
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label fw-semibold" style={{ color: 'var(--rose-dark)' }}>
                      Name
                    </label>
                    <input className="form-control" value={formState.name} onChange={(event) => setFormState({ ...formState, name: event.target.value })} />
                    {errors.name && <small className="text-danger">{errors.name}</small>}
                  </div>
                  <div className="col-md-6">
                    <label className="form-label fw-semibold" style={{ color: 'var(--rose-dark)' }}>
                      Email
                    </label>
                    <input className="form-control" value={formState.email} onChange={(event) => setFormState({ ...formState, email: event.target.value })} />
                    {errors.email && <small className="text-danger">{errors.email}</small>}
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold" style={{ color: 'var(--rose-dark)' }}>
                      Subject
                    </label>
                    <input className="form-control" value={formState.subject} onChange={(event) => setFormState({ ...formState, subject: event.target.value })} />
                    {errors.subject && <small className="text-danger">{errors.subject}</small>}
                  </div>
                  <div className="col-12">
                    <label className="form-label fw-semibold" style={{ color: 'var(--rose-dark)' }}>
                      Message
                    </label>
                    <textarea className="form-control" rows="5" value={formState.message} onChange={(event) => setFormState({ ...formState, message: event.target.value })} />
                    {errors.message && <small className="text-danger">{errors.message}</small>}
                  </div>
                </div>
                <button className="btn btn-rose mt-4 px-4" type="submit">
                  Send Message
                </button>
                {submitted && <div className="alert alert-success mt-3 mb-0">Thanks! Your message has been received.</div>}
              </motion.form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ContactPage
