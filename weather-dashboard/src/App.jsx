import { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import WeatherCard from './components/WeatherCard'
import Loader from './components/Loader'
import ErrorMessage from './components/ErrorMessage'
import ThemeToggle from './components/ThemeToggle'
import RecentSearches from './components/RecentSearches'
import Forecast from './components/Forecast'
import { motion } from 'framer-motion'
import { fetchWeatherData, fetchForecastData } from './services/weatherService'
import { RefreshIcon, SunIcon } from './utils/icons'
import './App.css'

function App() {
  const [weather, setWeather] = useState(null)
  const [forecast, setForecast] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light'
  })
  const [recentSearches, setRecentSearches] = useState(() => {
    const saved = localStorage.getItem('recentSearches')
    return saved ? JSON.parse(saved) : []
  })
  const [currentCity, setCurrentCity] = useState('')
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true) // New state for welcome message

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    localStorage.setItem('recentSearches', JSON.stringify(recentSearches))
  }, [recentSearches])

  const handleSearch = async (city) => {
    setLoading(true)
    setError('')
    setCurrentCity(city)
    
    try {
      const weatherData = await fetchWeatherData(city)
      setWeather(weatherData)
      
      if (!recentSearches.includes(city)) {
        setRecentSearches(prev => {
          const updated = [city, ...prev].slice(0, 5)
          return updated
        })
      }
      
      const forecastData = await fetchForecastData(city)
      setForecast(forecastData)
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data')
    } finally {
      setLoading(false)
    }
  }

  const refreshWeather = () => {
    if (currentCity) {
      handleSearch(currentCity)
    }
  }

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className="min-h-screen p-4 md:p-8 transition-colors duration-200">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        {showWelcomeMessage && ( 
          <div className="bg-blue-100 border border-blue-300 text-blue-800 p-4 rounded-lg mb-6">
            <div className="flex justify-between items-center">
              <p>Welcome to the Weather Dashboard! Search for a city to get started.</p>
              <button
                onClick={() => setShowWelcomeMessage(false)}
                className="text-red-500 hover:text-red-400 font-bold" 
                aria-label="Close welcome message"
              >
                ✕
              </button>
            </div>
          </div>
        )}
        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-2">
            <img src="/weather-icon.svg" alt="Weather Icon" className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Weather Dashboard</h1>
          </div>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </div>
        
        <SearchBar onSearch={handleSearch} />
        
        {recentSearches.length > 0 && (
          <RecentSearches searches={recentSearches} onSelect={handleSearch} />
        )}
        
        {loading && <Loader />}
        
        {error && <ErrorMessage message={error} />}
        
        {weather && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex justify-end mb-2">
              <button 
                onClick={refreshWeather}
                className="btn-secondary flex items-center gap-2"
              >
                <RefreshIcon />
                Refresh
              </button>
            </div>
            <WeatherCard weather={weather} />
          </motion.div>
        )}
        
        {forecast && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-6"
          >
            <Forecast forecast={forecast} />
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default App
