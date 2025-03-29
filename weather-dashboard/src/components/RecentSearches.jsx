import { motion } from 'framer-motion'

const RecentSearches = ({ searches, onSelect }) => {
  if (!searches || searches.length === 0) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="mb-6"
    >
      <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
        Recent Searches:
      </h3>
      <div className="flex flex-wrap gap-2">
        {searches.map((city, index) => (
          <motion.button
            key={`${city}-${index}`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full 
                      text-sm font-medium hover:bg-gray-200 dark:hover:bg-gray-700 
                      transition-colors duration-200"
            onClick={() => onSelect(city)}
          >
            {city}
          </motion.button>
        ))}
      </div>
    </motion.div>
  )
}

export default RecentSearches
