import { useState, useCallback } from 'react'
import debounce from 'lodash.debounce'
import { motion } from 'framer-motion'

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('')

  const debouncedSearch = useCallback(
    debounce((searchTerm) => {
      if (searchTerm.trim().length > 2) {
        onSearch(searchTerm);
      }
    }, 800),
    [onSearch]
  )

  const handleInputChange = (e) => {
    const value = e.target.value
    setCity(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.trim().length > 0) {
      onSearch(city)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && city.trim().length > 0) {
      e.preventDefault()
      onSearch(city)
    }
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-6"
    >
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          className="search-input flex-grow"
          placeholder="Enter city name (e.g. London, Tokyo, New York)"
          value={city}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          aria-label="Search for a city"
        />
        <button 
          type="submit" 
          className="btn-primary whitespace-nowrap"
          disabled={city.trim().length === 0}
        >
          Search Weather
        </button>
      </form>
    </motion.div>
  )
}

export default SearchBar
