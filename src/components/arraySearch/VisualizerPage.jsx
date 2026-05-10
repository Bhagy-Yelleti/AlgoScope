import { useState } from 'react'
import Visualizer from './Visualizer'
import { motion } from 'framer-motion'

const ArrayVisualizerPage = () => {
  const [algorithm, setAlgorithm] = useState('linearSearch')

  const handleAlgorithmChange = (e) => {
    setAlgorithm(e.target.value)
  }

  return (
    <motion.div
      className="lg:w-full w-auto p-4 sm:p-6 bg-slate-950/50 min-h-screen shadow-2xl rounded-2xl border border-white/10 backdrop-blur-xl"
      initial={{ opacity: 0, y: 20 }} // Start: invisible and 20px down
      animate={{ opacity: 1, y: 0 }} // End: fully visible at original position
      transition={{ duration: 1, ease: 'easeInOut' }} // Animation settings
    >
      <div className="flex justify-center mb-6 border-b border-white/5 pb-6">
        <select
          value={algorithm}
          onChange={handleAlgorithmChange}
          className="bg-slate-900 text-slate-200 text-sm border border-slate-700 rounded-xl px-6 py-3 cursor-pointer focus:outline-none focus:border-cyan-500 focus:shadow-lg focus:shadow-cyan-500/20 transition-all hover:border-slate-500 hover:bg-slate-800"
        >
          <option value="linearSearch">Linear Search</option>
          <option value="binarySearch">Binary Search</option>
        </select>
      </div>
      <Visualizer key={algorithm} algorithm={algorithm} />
    </motion.div>
  )
}

export default ArrayVisualizerPage
