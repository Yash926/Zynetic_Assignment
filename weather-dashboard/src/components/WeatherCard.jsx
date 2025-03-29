import { motion } from 'framer-motion'
import { HumidityIcon, WindIcon } from '../utils/icons'

const WeatherCard = ({ weather }) => {
  if (!weather) return null
  
  const { 
    name, 
    main: { temp, humidity, feels_like },
    weather: [{ description, icon }],
    wind: { speed },
    sys: { country }
  } = weather
  
  const formatTemp = (temperature) => Math.round(temperature * 10) / 10
  const formatWindSpeed = (windSpeed) => Math.round(windSpeed * 3.6 * 10) / 10
  
  const formatDescription = (desc) => {
    return desc.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }

  const getDayIcon = (iconCode) => iconCode.replace('n', 'd');

  return (
    <motion.div 
      className="weather-card"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">{name}, {country}</h2>
            <img 
              src={`https://openweathermap.org/img/wn/${getDayIcon(icon)}.png`}
              alt={description}
              className="w-16 h-16"
            />
          </div>
          <p className="text-5xl font-bold mt-2">{formatTemp(temp)}°C</p>
          <p className="text-xl mt-1 text-gray-600 dark:text-gray-300">
            Feels like {formatTemp(feels_like)}°C
          </p>
          <p className="text-lg mt-3 capitalize">
            {formatDescription(description)}
          </p>
        </div>
        
        <div className="flex flex-col justify-center space-y-4">
          <div className="flex items-center">
            <HumidityIcon />
            <span className="text-lg">Humidity: {humidity}%</span>
          </div>
          
          <div className="flex items-center">
            <WindIcon />
            <span className="text-lg">Wind: {formatWindSpeed(speed)} km/h</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default WeatherCard
