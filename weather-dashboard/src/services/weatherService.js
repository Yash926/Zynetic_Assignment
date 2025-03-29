import axios from 'axios'

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const BASE_URL = 'https://api.openweathermap.org/data/2.5'

const weatherApi = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: API_KEY,
    units: 'metric'
  }
})

export const fetchWeatherData = async (city) => {
  try {
    const response = await weatherApi.get('/weather', {
      params: { q: city }
    })
    
    return response.data
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error(`City "${city}" not found. Please check the spelling.`)
    }
    throw new Error('Failed to fetch weather data. Please try again later.')
  }
}

export const fetchForecastData = async (city) => {
  try {
    const response = await weatherApi.get('/forecast', {
      params: { q: city }
    })
    
    return response.data
  } catch (error) {
    console.error('Forecast error:', error)
    return null
  }
}

export const fetchWeatherByLocation = async (lat, lon) => {
  try {
    const response = await weatherApi.get('/weather', {
      params: { lat, lon }
    })
    
    return response.data
  } catch (error) {
    throw new Error('Failed to fetch weather for your location. Please try searching for a city instead.')
  }
}
