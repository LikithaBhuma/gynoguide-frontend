import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import { notes } from '../data/notes'

const NotesPage = () => {
  return (
    <>
      <SEO title="GynoGuide AI | Notes" description="Review concise student notes on women’s health topics and revision resources." keywords="notes, study resources, women health" />
      <section className="py-5 section-blush">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="page-title section-heading font-display">Student Notes</h2>
            <p className="page-subtitle">Concise educational notes to support revision and learning.</p>
          </div>
          <div className="row g-4">
            {notes.map((note, index) => (
              <motion.article key={note.id} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.06 }} className="col-lg-6">
                <div className="card h-100 border-0 shadow-sm p-3 feminine-card medicine-card-accent">
                  <div className="card-body">
                    <h5 className="fw-bold font-display gradient-text">{note.title}</h5>
                    <p>{note.summary}</p>
                    <h6 className="fw-semibold mt-3" style={{ color: 'var(--rose-dark)' }}>
                      Detailed Explanation
                    </h6>
                    <p className="small">{note.detailedExplanation}</p>
                    <h6 className="fw-semibold" style={{ color: 'var(--rose-dark)' }}>
                      Important Points
                    </h6>
                    <ul className="small">
                      {note.importantPoints.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                    <h6 className="fw-semibold" style={{ color: 'var(--rose-dark)' }}>
                      Revision Notes
                    </h6>
                    <p className="small">{note.revisionNotes.join(' • ')}</p>
                    <h6 className="fw-semibold" style={{ color: 'var(--rose-dark)' }}>
                      Key Takeaways
                    </h6>
                    <p className="small">{note.keyTakeaways.join(' • ')}</p>
                    <button className="btn btn-sm mt-3 btn-lavender-soft">Download PDF (placeholder)</button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default NotesPage
