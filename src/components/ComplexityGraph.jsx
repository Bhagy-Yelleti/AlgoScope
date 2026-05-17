import React, { useMemo } from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Legend,
} from 'recharts'

const generateData = () => {
  const sizes = [10, 20, 40, 80, 120]

  return sizes.map((n) => ({
    size: n,
    bubble: n * n,
    selection: n * n,
    insertion: n * n,
    merge: n * Math.log2(n),
    quick: n * Math.log2(n),
    heap: n * Math.log2(n),
  }))
}

export default function ComplexityGraph() {
  const data = useMemo(() => generateData(), [])

  return (
    <div className="rounded-2xl border border-slate-700/80 bg-slate-900/60 p-4 shadow-xl">
      {' '}
      <div className="mb-4">
        {' '}
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/80">
          Complexity Visualization{' '}
        </p>
        ```
        <h3 className="mt-2 text-lg font-semibold text-slate-100">
          Algorithm Performance Comparison
        </h3>
      </div>
      <div className="h-[260px] sm:h-[320px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#334155" />

            <XAxis dataKey="size" stroke="#cbd5e1" />

            <YAxis stroke="#cbd5e1" />

            <Tooltip />

            <Legend />

            <Line type="monotone" dataKey="bubble" stroke="#ef4444" />

            <Line type="monotone" dataKey="selection" stroke="#f59e0b" />

            <Line type="monotone" dataKey="insertion" stroke="#10b981" />

            <Line type="monotone" dataKey="merge" stroke="#06b6d4" />

            <Line type="monotone" dataKey="quick" stroke="#3b82f6" />

            <Line type="monotone" dataKey="heap" stroke="#8b5cf6" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
