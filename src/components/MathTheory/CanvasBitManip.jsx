import React from 'react'
import StatusDisplay from '../StatusDisplay'

const toBits = (n) => {
  const bits = []
  for (let i = 7; i >= 0; i--) bits.push((n >> i) & 1)
  return bits
}

const BitRow = ({
  bits,
  label,
  color,
  highlight,
  activeIndices,
  isComplete,
  bitsA,
}) => (
  <div className="flex items-center gap-3">
    <span className={`text-sm font-mono w-8 text-right ${color}`}>{label}</span>
    <div className="flex gap-1.5">
      {bits.map((bit, idx) => {
        const isActive = highlight && activeIndices.includes(idx)
        const changed = highlight === 'result' && bit !== bitsA[idx]
        return (
          <div
            key={idx}
            className={`w-10 h-10 rounded-lg flex items-center justify-center text-base font-bold border-2 transition-all duration-400
              ${
                isActive
                  ? 'bg-cyan-500 text-black scale-110 border-white'
                  : isComplete && changed && highlight === 'result'
                    ? 'bg-emerald-500/30 border-emerald-400 text-emerald-300'
                    : 'bg-slate-800 border-slate-700 text-slate-300'
              }`}
          >
            {bit}
          </div>
        )
      })}
    </div>
    <span className={`text-sm font-mono ${color} ml-2`}>
      = {bits.reduce((acc, b, i) => acc + b * Math.pow(2, 7 - i), 0)}
    </span>
  </div>
)

export const CanvasBitManip = ({ currentStep, inputA, inputB, operation }) => {
  const activeIndices = currentStep?.indices ?? []
  const isComplete = currentStep?.type === 'complete'
  const message =
    currentStep?.message ??
    'Enter values, choose an operation, then click Visualize.'

  const bitsA = toBits(inputA ?? 42)
  const bitsB = toBits(inputB ?? 15)

  // Derive result bits for display
  const getResult = () => {
    const a = inputA ?? 42,
      b = inputB ?? 15
    switch (operation) {
      case 'AND':
        return toBits(a & b)
      case 'OR':
        return toBits(a | b)
      case 'XOR':
        return toBits(a ^ b)
      case 'NOT':
        return toBits(~a & 0xff)
      case 'LSHIFT':
        return toBits((a << 1) & 0xff)
      case 'RSHIFT':
        return toBits(a >> 1)
      default:
        return toBits(a & b)
    }
  }

  const bitsResult = isComplete
    ? (currentStep?.array ?? getResult())
    : getResult()

  const resultValue = (() => {
    const a = inputA ?? 42,
      b = inputB ?? 15
    switch (operation) {
      case 'AND':
        return a & b
      case 'OR':
        return a | b
      case 'XOR':
        return a ^ b
      case 'NOT':
        return ~a & 0xff
      case 'LSHIFT':
        return (a << 1) & 0xff
      case 'RSHIFT':
        return a >> 1
      default:
        return a & b
    }
  })()

  const opSymbols = {
    AND: '&',
    OR: '|',
    XOR: '^',
    NOT: '~',
    LSHIFT: '<<',
    RSHIFT: '>>',
  }

  return (
    <div className="w-full">
      <div className="rounded-xl border border-white/10 bg-slate-900/50 p-8 shadow-lg min-h-[350px] flex flex-col justify-center gap-6">
        {/* Bit position headers */}
        <div className="flex items-center gap-3">
          <span className="w-8" />
          <div className="flex gap-1.5">
            {Array.from({ length: 8 }, (_, i) => (
              <div
                key={i}
                className="w-10 text-center text-[10px] text-slate-600 font-mono"
              >
                {7 - i}
              </div>
            ))}
          </div>
        </div>

        <BitRow
          bits={bitsA}
          label="A"
          color="text-cyan-400"
          highlight="a"
          activeIndices={activeIndices}
          isComplete={isComplete}
          bitsA={bitsA}
        />

        {operation !== 'NOT' &&
          operation !== 'LSHIFT' &&
          operation !== 'RSHIFT' && (
            <BitRow
              bits={bitsB}
              label="B"
              color="text-purple-400"
              highlight="b"
              activeIndices={activeIndices}
              isComplete={isComplete}
              bitsA={bitsA}
            />
          )}

        {/* Operator divider */}
        <div className="flex items-center gap-3 pl-11">
          <span className="text-slate-500 text-sm font-mono">
            {opSymbols[operation] ?? '&'}
          </span>
          <div className="flex-1 h-px bg-slate-700" />
        </div>

        <BitRow
          bits={bitsResult}
          label="="
          color="text-emerald-400"
          highlight="result"
          activeIndices={activeIndices}
          isComplete={isComplete}
          bitsA={bitsA}
        />

        {/* Result card */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="rounded-xl bg-slate-800/60 p-4 border border-slate-700">
            <p className="text-slate-400 text-xs">A</p>
            <h2 className="text-2xl font-bold text-cyan-400 mt-1 font-mono">
              {inputA ?? 42}
            </h2>
          </div>
          {operation !== 'NOT' &&
          operation !== 'LSHIFT' &&
          operation !== 'RSHIFT' ? (
            <div className="rounded-xl bg-slate-800/60 p-4 border border-slate-700">
              <p className="text-slate-400 text-xs">B</p>
              <h2 className="text-2xl font-bold text-purple-400 mt-1 font-mono">
                {inputB ?? 15}
              </h2>
            </div>
          ) : (
            <div />
          )}
          <div className="rounded-xl bg-slate-800/60 p-4 border border-slate-700">
            <p className="text-slate-400 text-xs">Result</p>
            <h2 className="text-2xl font-bold text-emerald-400 mt-1 font-mono">
              {resultValue}
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
