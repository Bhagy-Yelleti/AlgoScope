import React from 'react'
import StatusDisplay from '../StatusDisplay'

// Shows the two numbers as labelled bars that shrink each step
export const CanvasGCD = ({ currentStep, inputA, inputB }) => {
  const a = currentStep?.variables?.a ?? inputA ?? 0
  const b = currentStep?.variables?.b ?? inputB ?? 0
  const result = currentStep?.variables?.result ?? null
  const remainder = currentStep?.variables?.remainder ?? null
  const isComplete = currentStep?.type === 'complete'
  const message =
    currentStep?.message ?? 'Enter two numbers and click Visualize.'

  const maxVal = Math.max(inputA ?? 1, inputB ?? 1, 1)
  const barA = Math.max(4, (a / maxVal) * 100)
  const barB = Math.max(4, (b / maxVal) * 100)

  return (
    <div className="w-full">
      <div className="rounded-xl border border-white/10 bg-slate-900/50 p-8 shadow-lg min-h-[350px] flex flex-col justify-center gap-8">
        {/* Bar visualization */}
        <div className="flex flex-col gap-6">
          {/* A */}
          <div className="flex items-center gap-4">
            <span className="text-slate-400 text-sm w-6 font-mono">A</span>
            <div className="flex-1 bg-slate-800 rounded-full h-10 overflow-hidden border border-slate-700">
              <div
                className={`h-full rounded-full flex items-center justify-end pr-3 text-sm font-bold transition-all duration-700 ${
                  isComplete ? 'bg-emerald-500' : 'bg-cyan-500'
                }`}
                style={{ width: `${barA}%` }}
              >
                <span className="text-black">{a}</span>
              </div>
            </div>
          </div>

          {/* B */}
          <div className="flex items-center gap-4">
            <span className="text-slate-400 text-sm w-6 font-mono">B</span>
            <div className="flex-1 bg-slate-800 rounded-full h-10 overflow-hidden border border-slate-700">
              <div
                className={`h-full rounded-full flex items-center justify-end pr-3 text-sm font-bold transition-all duration-700 ${
                  isComplete ? 'bg-emerald-500/40' : 'bg-purple-500'
                }`}
                style={{ width: `${barB}%` }}
              >
                <span className="text-white">{b}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step detail + result */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
          <div className="rounded-xl bg-slate-800/60 p-5 border border-slate-700">
            <p className="text-slate-400 text-sm">A</p>
            <h2 className="text-3xl font-bold text-cyan-400 mt-2 font-mono">
              {a}
            </h2>
          </div>
          <div className="rounded-xl bg-slate-800/60 p-5 border border-slate-700">
            <p className="text-slate-400 text-sm">B</p>
            <h2 className="text-3xl font-bold text-purple-400 mt-2 font-mono">
              {b}
            </h2>
          </div>
          <div className="rounded-xl bg-slate-800/60 p-5 border border-slate-700">
            <p className="text-slate-400 text-sm">
              {isComplete ? 'GCD' : remainder !== null ? 'Remainder' : '—'}
            </p>
            <h2 className="text-3xl font-bold text-emerald-400 mt-2 font-mono">
              {isComplete ? result : remainder !== null ? remainder : '—'}
            </h2>
          </div>
        </div>
      </div>

      <div className="mt-8 mb-2">
        <StatusDisplay message={message} />
      </div>
    </div>
  )
}
