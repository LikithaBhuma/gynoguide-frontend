import { Link } from 'react-router-dom'
import { FaHeartBroken } from 'react-icons/fa'

const NotFoundPage = () => {
  return (
    <section className="py-5 text-center section-blush">
      <div className="container py-5">
        <FaHeartBroken className="mb-3" style={{ fontSize: '3rem', color: 'var(--rose-light)' }} />
        <h1 className="display-1 fw-bold gradient-text-lavender font-display">404</h1>
        <h2 className="fw-bold font-display mt-3">Page not found</h2>
        <p className="page-subtitle mb-4">The page you are looking for doesn&apos;t exist — but we&apos;re still here for you.</p>
        <Link className="btn btn-rose px-4 py-2" to="/">
          Go back home
        </Link>
      </div>
    </section>
  )
}

export default NotFoundPage
