import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaHeart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useTheme } from '../contexts/ThemeContext'

const Footer = () => {
  const { darkMode } = useTheme()

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`pt-5 ${darkMode ? 'text-light' : ''}`}
      style={{
        background: darkMode
          ? 'linear-gradient(180deg, #120818, #0f0812)'
          : 'linear-gradient(180deg, #fff5f7, #fdf2f8)',
        borderTop: '1px solid rgba(236, 72, 153, 0.15)',
      }}
    >
      <div className="container py-4">
        <div className="row g-4">
          <div className="col-lg-4">
            <h5 className="fw-bold mb-3 gradient-text font-display d-flex align-items-center gap-2">
              <FaHeart style={{ fontSize: '0.9rem', WebkitTextFillColor: 'var(--rose)' }} />
              GynoGuide AI
            </h5>
            <p>Your intelligent women&apos;s health learning companion — crafted with care.</p>
          </div>
          <div className="col-lg-4">
            <h6 className="fw-bold mb-3 font-display" style={{ color: 'var(--rose-dark)' }}>
              Quick Links
            </h6>
            <ul className="list-unstyled">
              {[
                ['Home', '/'],
                ['Assistant', '/assistant'],
                ['Diseases', '/diseases'],
                ['Notes', '/notes'],
                ['Videos', '/videos'],
              ].map(([label, to]) => (
                <li className="mb-2" key={to}>
                  <Link className="text-decoration-none" to={to} style={{ color: 'var(--rose)' }}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4">
            <h6 className="fw-bold mb-3 font-display" style={{ color: 'var(--rose-dark)' }}>
              Follow Us
            </h6>
            <div className="d-flex gap-3 fs-5">
              {[
                [FaFacebookF, 'https://facebook.com', 'Facebook'],
                [FaTwitter, 'https://twitter.com', 'Twitter'],
                [FaInstagram, 'https://instagram.com', 'Instagram'],
                [FaLinkedinIn, 'https://linkedin.com', 'LinkedIn'],
              ].map(([Icon, href, label]) => (
                <motion.a
                  key={label}
                  whileHover={{ scale: 1.2, color: 'var(--rose-dark)' }}
                  href={href}
                  aria-label={label}
                  className="text-decoration-none d-inline-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    color: 'var(--rose)',
                    width: '40px',
                    height: '40px',
                    background: 'rgba(236, 72, 153, 0.1)',
                    border: '1px solid rgba(236, 72, 153, 0.15)',
                  }}
                >
                  <Icon />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        <hr style={{ borderColor: 'rgba(236, 72, 153, 0.12)' }} />
        <p className="small mb-2">
          Medical Disclaimer: This platform is for educational purposes and not a substitute for professional medical advice.
        </p>
        <p className="small text-muted">© 2026 GynoGuide AI. Made with care for women&apos;s health education.</p>
      </div>
    </motion.footer>
  )
}

export default Footer
