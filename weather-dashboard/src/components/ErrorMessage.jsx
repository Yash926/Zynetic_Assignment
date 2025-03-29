import { motion } from 'framer-motion'
import { ErrorIcon } from '../utils/icons'

const ErrorMessage = ({ message }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 mb-6 rounded-r-lg"
    >
      <div className="flex items-start">
        <ErrorIcon />
        <div>
          <h3 className="text-lg font-medium text-red-800 dark:text-red-300">
            Error
          </h3>
          <p className="text-red-700 dark:text-red-400 mt-1">
            {message || "An unexpected error occurred. Please try again."}
          </p>
          <p className="text-sm text-red-600 dark:text-red-400 mt-2">
            Make sure the city name is correct and try again.
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default ErrorMessage
