const SearchBar = ({ value, onChange, placeholder = 'Search...' }) => {
  return (
    <div className="input-group shadow-sm search-bar-feminine">
      <span className="input-group-text">🌸</span>
      <input
        type="text"
        className="form-control"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        aria-label="Search"
      />
    </div>
  )
}

export default SearchBar
