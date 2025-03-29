import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <div className="flex justify-center items-center py-12">
      <motion.div
        animate={{
          rotate: 360
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
        className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full"
      />
      <p className="ml-4 text-lg font-medium">Loading weather data...</p>
    </div>
  )
}

export default Loader
