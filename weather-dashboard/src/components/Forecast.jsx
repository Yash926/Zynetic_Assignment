import { motion } from 'framer-motion'

const Forecast = ({ forecast }) => {
  if (!forecast || !forecast.list) return null

  const dailyData = forecast.list.reduce((acc, item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })
    if (!acc[date] || new Date(item.dt * 1000).getHours() === 12) {
      acc[date] = item
    }
    return acc
  }, {})

  const forecastData = Object.values(dailyData).slice(0, 5)

  // Ensure only day icons are used
  const getDayIcon = (iconCode) => iconCode.replace('n', 'd');

  return (
    <div className="mt-8">
      <h2 className="text-xl font-semibold mb-4">5-Day Forecast</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {forecastData.map((day, index) => (
          <motion.div
            key={day.dt}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="weather-card text-center"
          >
            <h3 className="font-medium">
              {new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
            </h3>
            <div className="flex justify-center my-2">
              <img 
                src={`https://openweathermap.org/img/wn/${getDayIcon(day.weather[0].icon)}.png`}
                alt={day.weather[0].description}
                className="w-12 h-12"
              />
            </div>
            <p className="text-xl font-bold">{Math.round(day.main.temp)}°C</p>
            <p className="text-xs mt-1 capitalize text-gray-600 dark:text-gray-400">
              {day.weather[0].description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Forecast
