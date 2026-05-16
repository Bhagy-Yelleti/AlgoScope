import React from 'react'

const ChevronIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.2"
    stroke="currentColor"
    className="h-5 w-5 absolute top-3.5 right-4 text-slate-400 pointer-events-none"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 15 12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
    />
  </svg>
)

export const MenuSelectNodesShortestPath = ({
  source,
  target,
  setSource,
  setTarget,
}) => {
  const nodeOptions = Array.from({ length: 9 }, (_, i) => i + 1)

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider pl-1">
        Source &amp; Target
      </h3>
      <div className="space-y-3">
        <div className="relative">
          <select
            value={source ?? ''}
            onChange={(e) => setSource(e.target.value || null)}
            className="w-full bg-slate-800 text-white text-sm border border-slate-700 rounded-xl pl-4 pr-10 py-3 transition duration-300 focus:outline-none focus:border-cyan-500 hover:border-slate-500 shadow-sm appearance-none cursor-pointer"
          >
            <option value="">Choose Source</option>
            {nodeOptions.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          <ChevronIcon />
        </div>
        <div className="relative">
          <select
            value={target ?? ''}
            onChange={(e) => setTarget(e.target.value || null)}
            className="w-full bg-slate-800 text-white text-sm border border-slate-700 rounded-xl pl-4 pr-10 py-3 transition duration-300 focus:outline-none focus:border-cyan-500 hover:border-slate-500 shadow-sm appearance-none cursor-pointer"
          >
            <option value="">Choose Target</option>
            {nodeOptions.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
          <ChevronIcon />
        </div>
      </div>
    </div>
  )
}
