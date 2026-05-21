import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function AlgoCard({
  title,
  description,
  link,
  image,
  imageAlt,
}) {
  const navigate = useNavigate()

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.div
      onClick={() => navigate(link)}
      className="group cursor-pointer w-full rounded-2xl p-6 bg-neutral-900/60 backdrop-blur-md border border-neutral-800/80 hover:-translate-y-1.5 hover:border-neutral-700 hover:shadow-[0_10px_30px_-10px_rgba(255,255,255,0.05)] transition-all duration-300 ease-out"
      variants={cardVariants}
      whileHover={{ y: -5 }}
    >
      {/* Icon/Image Container */}
      {image && (
        <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-neutral-800/50 border border-neutral-700/30 mb-5 overflow-hidden">
          <img
            src={image}
            alt={imageAlt || `${title} visualization`}
            className="w-10 h-10 object-contain opacity-90"
          />
        </div>
      )}

      {/* Title */}
      <h2 className="text-xl font-bold text-neutral-100 tracking-tight mb-3">
        {title}
      </h2>

      {/* Description */}
      <p className="text-sm text-neutral-400 leading-relaxed mb-8">
        {description}
      </p>

      {/* Bottom Action */}
      <div className="flex items-center justify-between mt-auto">
        <span className="text-sm text-cyan-400 font-medium">
          Explore Visualizer
        </span>

        <ArrowRight className="w-5 h-5 text-cyan-400 transition-transform duration-300 group-hover:translate-x-1.5" />
      </div>
    </motion.div>
  )
}