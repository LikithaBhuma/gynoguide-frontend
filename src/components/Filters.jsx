const Filters = ({ options, active, onChange }) => {
  return (
    <div className="d-flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          className={`btn btn-sm rounded-pill ${active === option ? 'btn-rose text-white' : 'btn-rose-soft'}`}
        >
          {option}
        </button>
      ))}
    </div>
  )
}

export default Filters
