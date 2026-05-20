import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { calculateStepDelay } from '../../lib/utils'
import StatusDisplay from '../StatusDisplay'
import {
  generateEuclideanGCDSteps,
  generateNaiveGCDSteps,
  generateFastExpoSteps,
  generateNaiveExpoSteps,
  generateBitOpSteps,
} from '../../algorithms/mathTheory/mathTheorySteps'
import { CanvasGCD } from './CanvasGCD'
import { CanvasFastExpo } from './CanvasFastExpo'
import { CanvasBitManip } from './CanvasBitManip'

// Generic panel that runs its own step playback
function ComparePanel({ label, steps, speed, accent, children }) {
  const [stepIndex, setStepIndex] = useState(-1)
  const [isFinished, setIsFinished] = useState(false)
  const [prevSteps, setPrevSteps] = useState(steps)
  const timerRef = useRef(null)

  if (steps !== prevSteps) {
    setPrevSteps(steps)
    setStepIndex(steps.length > 0 ? 0 : -1)
    setIsFinished(false)
  }

  const currentStep =
    stepIndex >= 0 && stepIndex < steps.length ? steps[stepIndex] : null
  const hasSteps = steps.length > 0

  useEffect(() => {
    if (
      !hasSteps ||
      stepIndex < 0 ||
      stepIndex >= steps.length - 1 ||
      isFinished
    )
      return
    const delay = calculateStepDelay(steps[stepIndex]?.duration, speed)
    timerRef.current = setTimeout(() => {
      setStepIndex((i) => {
        const next = Math.min(i + 1, steps.length - 1)
        if (next === steps.length - 1) setIsFinished(true)
        return next
      })
    }, delay)
    return () => clearTimeout(timerRef.current)
  }, [stepIndex, steps, speed, hasSteps, isFinished])

  return (
    <div
      className="flex-1 rounded-xl border bg-slate-900/60 overflow-hidden"
      style={{ borderColor: accent + '44' }}
    >
      {/* Panel header */}
      <div
        className="px-5 py-3 flex items-center justify-between border-b"
        style={{ borderColor: accent + '33', background: accent + '11' }}
      >
        <span className="text-sm font-bold" style={{ color: accent }}>
          {label}
        </span>
        {isFinished && (
          <span
            className="text-xs font-bold px-2 py-0.5 rounded-full"
            style={{ background: accent + '22', color: accent }}
          >
            ✓ Done — {steps.length} steps
          </span>
        )}
      </div>

      <div className="p-4">
        {children({ currentStep, hasSteps, isFinished })}
      </div>
    </div>
  )
}

const COMPARE_TABS = [
  { key: 'gcd', label: 'GCD' },
  { key: 'expo', label: 'Fast Expo' },
  { key: 'bits', label: 'Bit Ops' },
]

export const MathComparisonMode = ({ speed }) => {
  const [tab, setTab] = useState('gcd')
  const [trigger, setTrigger] = useState(0)

  // GCD inputs
  const [gcdA, setGcdA] = useState(48)
  const [gcdB, setGcdB] = useState(18)

  // Expo inputs
  const [expoBase, setExpoBase] = useState(2)
  const [expoExp, setExpoExp] = useState(10)

  // Bit inputs
  const [bitA, setBitA] = useState(42)
  const [bitB, setBitB] = useState(15)
  const [bitOp, setBitOp] = useState('AND')

  const {
    leftSteps,
    rightSteps,
    leftLabel,
    rightLabel,
    leftAccent,
    rightAccent,
  } = useMemo(() => {
    if (trigger === 0)
      return {
        leftSteps: [],
        rightSteps: [],
        leftLabel: '',
        rightLabel: '',
        leftAccent: '#06b6d4',
        rightAccent: '#a855f7',
      }

    if (tab === 'gcd')
      return {
        leftSteps: generateEuclideanGCDSteps(Number(gcdA), Number(gcdB)),
        rightSteps: generateNaiveGCDSteps(Number(gcdA), Number(gcdB)),
        leftLabel: 'Euclidean GCD (modulo)',
        rightLabel: 'Naive GCD (subtraction)',
        leftAccent: '#06b6d4',
        rightAccent: '#a855f7',
      }

    if (tab === 'expo')
      return {
        leftSteps: generateFastExpoSteps(Number(expoBase), Number(expoExp)),
        rightSteps: generateNaiveExpoSteps(Number(expoBase), Number(expoExp)),
        leftLabel: 'Binary Exponentiation',
        rightLabel: `Naive (×${expoExp} multiplications)`,
        leftAccent: '#06b6d4',
        rightAccent: '#f59e0b',
      }

    // bits — show two different operations side by side
    return {
      leftSteps: generateBitOpSteps(Number(bitA), Number(bitB), bitOp),
      rightSteps: generateBitOpSteps(
        Number(bitA),
        Number(bitB),
        bitOp === 'AND' ? 'OR' : 'AND'
      ),
      leftLabel: `${bitOp} operation`,
      rightLabel: bitOp === 'AND' ? 'OR (same inputs)' : 'AND (same inputs)',
      leftAccent: '#06b6d4',
      rightAccent: '#10b981',
    }
  }, [trigger, tab, gcdA, gcdB, expoBase, expoExp, bitA, bitB, bitOp])

  const handleRun = () => setTrigger((t) => t + 1)
  const handleReset = () => setTrigger(0)

  return (
    <div className="p-4 sm:p-6 flex flex-col gap-6">
      {/* Sub-tab switcher */}
      <div className="flex items-center gap-4 flex-wrap">
        <span className="text-xs text-slate-500 uppercase tracking-widest">
          Compare:
        </span>
        <div
          className="flex gap-1 rounded-xl p-1"
          style={{
            background: 'rgba(15,23,42,0.8)',
            border: '1px solid rgba(51,65,85,0.6)',
          }}
        >
          {COMPARE_TABS.map((t) => (
            <button
              key={t.key}
              onClick={() => {
                setTab(t.key)
                setTrigger(0)
              }}
              className="relative px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200"
              style={{ color: tab === t.key ? '#fff' : '#64748b' }}
            >
              {tab === t.key && (
                <motion.div
                  layoutId="compare-tab-bg"
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: 'rgba(6,182,212,0.2)',
                    border: '1px solid rgba(6,182,212,0.4)',
                  }}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                />
              )}
              <span className="relative">{t.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Input row */}
      <div className="flex flex-wrap items-end gap-4 p-4 rounded-xl bg-slate-900/50 border border-white/5">
        {tab === 'gcd' && (
          <>
            <div>
              <label className="text-xs text-slate-500 mb-1 block">A</label>
              <input
                type="number"
                min={1}
                max={9999}
                value={gcdA}
                onChange={(e) => setGcdA(e.target.value)}
                className="w-28 rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-white text-sm outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="text-xs text-slate-500 mb-1 block">B</label>
              <input
                type="number"
                min={1}
                max={9999}
                value={gcdB}
                onChange={(e) => setGcdB(e.target.value)}
                className="w-28 rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-white text-sm outline-none focus:border-cyan-500"
              />
            </div>
          </>
        )}

        {tab === 'expo' && (
          <>
            <div>
              <label className="text-xs text-slate-500 mb-1 block">Base</label>
              <input
                type="number"
                min={2}
                max={20}
                value={expoBase}
                onChange={(e) => setExpoBase(e.target.value)}
                className="w-24 rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-white text-sm outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="text-xs text-slate-500 mb-1 block">
                Exponent (≤ 15)
              </label>
              <input
                type="number"
                min={1}
                max={15}
                value={expoExp}
                onChange={(e) => setExpoExp(Math.min(15, e.target.value))}
                className="w-24 rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-white text-sm outline-none focus:border-cyan-500"
              />
            </div>
          </>
        )}

        {tab === 'bits' && (
          <>
            <div>
              <label className="text-xs text-slate-500 mb-1 block">A</label>
              <input
                type="number"
                min={0}
                max={255}
                value={bitA}
                onChange={(e) =>
                  setBitA(Math.min(255, Math.max(0, e.target.value)))
                }
                className="w-24 rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-white text-sm outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="text-xs text-slate-500 mb-1 block">B</label>
              <input
                type="number"
                min={0}
                max={255}
                value={bitB}
                onChange={(e) =>
                  setBitB(Math.min(255, Math.max(0, e.target.value)))
                }
                className="w-24 rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-white text-sm outline-none focus:border-cyan-500"
              />
            </div>
            <div>
              <label className="text-xs text-slate-500 mb-1 block">
                Primary Op
              </label>
              <select
                value={bitOp}
                onChange={(e) => setBitOp(e.target.value)}
                className="rounded-xl border border-slate-700 bg-slate-800 px-3 py-2 text-white text-sm outline-none focus:border-cyan-500"
              >
                {['AND', 'OR', 'XOR', 'NOT', 'LSHIFT', 'RSHIFT'].map((op) => (
                  <option key={op} value={op}>
                    {op}
                  </option>
                ))}
              </select>
            </div>
          </>
        )}

        <div className="flex gap-2 ml-auto">
          <button
            onClick={handleRun}
            className="px-6 py-2.5 rounded-xl bg-cyan-500 text-black font-bold text-sm hover:bg-cyan-400 transition"
          >
            ▶ Run Both
          </button>
          <button
            onClick={handleReset}
            className="px-5 py-2.5 rounded-xl bg-slate-800 text-slate-300 border border-slate-700 font-bold text-sm hover:bg-slate-700 hover:text-white transition"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Side-by-side panels */}
      <div className="flex flex-col lg:flex-row gap-4">
        <ComparePanel
          label={leftLabel || '—'}
          steps={leftSteps}
          speed={speed}
          accent={leftAccent}
        >
          {({ currentStep, hasSteps }) =>
            tab === 'gcd' ? (
              <CanvasGCD
                currentStep={currentStep}
                hasSteps={hasSteps}
                inputA={Number(gcdA)}
                inputB={Number(gcdB)}
              />
            ) : tab === 'expo' ? (
              <CanvasFastExpo
                currentStep={currentStep}
                hasSteps={hasSteps}
                inputBase={Number(expoBase)}
                inputExp={Number(expoExp)}
              />
            ) : (
              <CanvasBitManip
                currentStep={currentStep}
                hasSteps={hasSteps}
                inputA={Number(bitA)}
                inputB={Number(bitB)}
                operation={bitOp}
              />
            )
          }
        </ComparePanel>

        <ComparePanel
          label={rightLabel || '—'}
          steps={rightSteps}
          speed={speed}
          accent={rightAccent}
        >
          {({ currentStep, hasSteps }) =>
            tab === 'gcd' ? (
              <CanvasGCD
                currentStep={currentStep}
                hasSteps={hasSteps}
                inputA={Number(gcdA)}
                inputB={Number(gcdB)}
              />
            ) : tab === 'expo' ? (
              <CanvasFastExpo
                currentStep={currentStep}
                hasSteps={hasSteps}
                inputBase={Number(expoBase)}
                inputExp={Number(expoExp)}
              />
            ) : (
              <CanvasBitManip
                currentStep={currentStep}
                hasSteps={hasSteps}
                inputA={Number(bitA)}
                inputB={Number(bitB)}
                operation={bitOp === 'AND' ? 'OR' : 'AND'}
              />
            )
          }
        </ComparePanel>
      </div>

      {/* Step count comparison */}
      {trigger > 0 && leftSteps.length > 0 && (
        <div className="rounded-xl bg-slate-900/50 border border-white/5 p-5">
          <p className="text-xs text-slate-500 uppercase tracking-widest mb-3">
            Step Count Comparison
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 rounded-xl bg-slate-800/60 p-4 border border-cyan-500/20 text-center">
              <p className="text-slate-400 text-xs truncate">{leftLabel}</p>
              <h2 className="text-3xl font-bold text-cyan-400 mt-1">
                {leftSteps.length}
              </h2>
              <p className="text-slate-500 text-xs mt-1">steps</p>
            </div>
            <div className="flex-1 rounded-xl bg-slate-800/60 p-4 border border-purple-500/20 text-center">
              <p className="text-slate-400 text-xs truncate">{rightLabel}</p>
              <h2 className="text-3xl font-bold text-purple-400 mt-1">
                {rightSteps.length}
              </h2>
              <p className="text-slate-500 text-xs mt-1">steps</p>
            </div>
            {leftSteps.length < rightSteps.length && (
              <div className="flex-1 rounded-xl bg-emerald-500/10 p-4 border border-emerald-500/20 text-center">
                <p className="text-slate-400 text-xs">Speedup</p>
                <h2 className="text-3xl font-bold text-emerald-400 mt-1">
                  {(rightSteps.length / leftSteps.length).toFixed(1)}×
                </h2>
                <p className="text-slate-500 text-xs mt-1">faster</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
