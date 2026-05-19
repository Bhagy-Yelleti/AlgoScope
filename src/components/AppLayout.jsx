import React, { useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import Footer from './Footer'
import { motion } from 'framer-motion'
import SeoHead from './SeoHead'
import { useLocation, Link } from 'react-router-dom'

const Background = () => (
  <div className="absolute inset-0 z-0 pointer-events-none fixed">
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
  </div>
)

export default function AppLayout({ children, showBackground = true }) {
  const darkTheme = 'bg-[#020617] text-slate-200'
  const location = useLocation()

  const [history, setHistory] = useState(() => {
  try {
    const saved = localStorage.getItem('algo-history');
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Failed to parse algo-history:', error);
    return [];
  }
});
  const pathMap = {
    Search: '/search',
    'Shortest Path': '/spath',
    Sort: '/sort',
    'Abstract Data Types': '/adt',
    'Array Search': '/ldssearch',
    "Kadane's Algorithm": '/kadane',
    "Moore's Voting Algorithm": '/moore-voting',
  }

  useEffect(() => {
    const algorithmMap = {
      '/search': 'Search',
      '/spath': 'Shortest Path',
      '/sort': 'Sort',
      '/adt': 'Abstract Data Types',
      '/ldssearch': 'Array Search',
      '/kadane': "Kadane's Algorithm",
      '/moore-voting': "Moore's Voting Algorithm",
    }

    const current = algorithmMap[location.pathname]

    if (current) {
      setHistory((prev) => {
        const updated = [current, ...prev.filter((item) => item !== current)]

        const trimmed = updated.slice(0, 5)

        localStorage.setItem('algo-history', JSON.stringify(trimmed))

        return trimmed
      })
    }
  }, [location.pathname])

  return (
    <motion.div
      className={`min-h-screen flex flex-col ${darkTheme} relative overflow-hidden`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SeoHead />
      {showBackground && <Background />}
      <div className="flex-1 flex flex-col gap-4 p-2 sm:p-4 z-10">
        <Navbar />

        <div className="flex flex-1 gap-4">
          <div className="flex-1">{children}</div>

          <div className="hidden lg:block w-72 rounded-2xl border border-white/10 bg-slate-900/60 p-5 h-fit sticky top-24">
            <h2 className="text-lg font-bold text-white mb-4">
              Recent Algorithms
            </h2>

            <div className="flex flex-col gap-3">
              {history.length === 0 ? (
                <p className="text-sm text-slate-400">
                  No algorithms viewed yet.
                </p>
              ) : (
                history.map((item, index) => (
                  <Link
                    key={item}
                    to={pathMap[item]}
                    className="rounded-xl bg-white/5 px-4 py-3 text-sm text-slate-200 border border-white/5 hover:bg-white/10 hover:border-cyan-400/30 hover:translate-x-1 transition-all duration-200 cursor-pointer"
                  >
                    {item}
                  </Link>
                ))
              )}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </motion.div>
  )
}
