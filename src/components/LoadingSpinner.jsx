const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center py-4">
      <div className="spinner-border spinner-rose" role="status" aria-label="Loading">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default LoadingSpinner
