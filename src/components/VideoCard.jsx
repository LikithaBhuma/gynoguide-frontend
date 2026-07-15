import { motion } from 'framer-motion'
import ReactPlayer from 'react-player'
import { FaPlayCircle } from 'react-icons/fa'

const VideoCard = ({ video }) => {
  return (
    <motion.article whileHover={{ y: -6, scale: 1.01 }} className="card h-100 border-0 shadow-sm feminine-card overflow-hidden">
      <div className="position-relative">
        <img src={video.thumbnail} alt={video.title} className="card-img-top" style={{ objectFit: 'cover', height: '180px' }} />
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ background: 'linear-gradient(to top, rgba(236,72,153,0.25), transparent)', pointerEvents: 'none' }}
        >
          <FaPlayCircle style={{ fontSize: '2.5rem', color: 'white', opacity: 0.85, filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))' }} />
        </div>
      </div>
      <div className="card-body">
        <h5 className="fw-bold font-display">{video.title}</h5>
        <p className="text-muted small">{video.description}</p>
        <a href={video.url} target="_blank" rel="noreferrer" className="btn btn-sm btn-rose">
          Watch
        </a>
        <div className="mt-3 rounded-3 overflow-hidden" style={{ border: '1px solid rgba(236,72,153,0.12)' }}>
          <ReactPlayer url={video.url} width="100%" height="220px" controls />
        </div>
      </div>
    </motion.article>
  )
}

export default VideoCard
