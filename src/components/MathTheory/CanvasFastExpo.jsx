import React from 'react'
import StatusDisplay from '../StatusDisplay'

export const CanvasFastExpo = ({ currentStep, inputBase, inputExp }) => {
  const bits =
    currentStep?.array ?? inputExp?.toString(2).split('').map(Number) ?? []
  const activeIndices = currentStep?.indices ?? []
  const result = currentStep?.variables?.result ?? 1
  const base = currentStep?.variables?.b ?? inputBase ?? 0
  const isComplete = currentStep?.type === 'complete'
  const message =
    currentStep?.message ?? 'Enter base and exponent, then click Visualize.'

  return (
    <div className="w-full">
      <div className="rounded-xl border border-white/10 bg-slate-900/50 p-8 shadow-lg min-h-[350px] flex flex-col justify-center gap-8">
        {/* Bit cells — the core visual */}
        <div>
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-3 text-center">
            Binary of exponent ({inputExp ?? '?'})
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {bits.map((bit, idx) => {
              const isActive = activeIndices.includes(idx)
              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center gap-1 transition-all duration-400`}
                >
                  <span className="text-[10px] text-slate-600 font-mono">
                    {bits.length - 1 - idx}
                  </span>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold border-2 transition-all duration-400
                      ${
                        isActive
                          ? bit === 1
                            ? 'bg-cyan-500 text-black scale-110 border-white shadow-[0_0_12px_rgba(6,182,212,0.5)]'
                            : 'bg-slate-600 text-white scale-105 border-slate-400'
                          : isComplete
                            ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-300'
                            : 'bg-slate-800 border-slate-700 text-slate-300'
                      }`}
                  >
                    {bit}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-xl bg-slate-800/60 p-5 border border-slate-700">
            <p className="text-slate-400 text-sm">Base²</p>
            <h2 className="text-3xl font-bold text-purple-400 mt-2 font-mono">
              {base}
            </h2>
          </div>
          <div className="rounded-xl bg-slate-800/60 p-5 border border-slate-700">
            <p className="text-slate-400 text-sm">Running Result</p>
            <h2 className="text-3xl font-bold text-cyan-400 mt-2 font-mono">
              {result}
            </h2>
          </div>
          <div className="rounded-xl bg-slate-800/60 p-5 border border-slate-700">
            <p className="text-slate-400 text-sm">
              {isComplete ? `${inputBase}^${inputExp}` : 'Final'}
            </p>
            <h2
              className={`text-3xl font-bold mt-2 font-mono ${isComplete ? 'text-emerald-400' : 'text-slate-500'}`}
            >
              {isComplete ? result : '—'}
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
