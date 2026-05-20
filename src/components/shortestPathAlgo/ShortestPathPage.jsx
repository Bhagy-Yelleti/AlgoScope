import React, { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CanvasShortestPath } from './CanvasShortestPath'
import { GridVisualizer } from './GridVisualizer'
import CodePanel from '../visualizer/CodePanel'
import { MenuSelectNodesShortestPath } from './MenuSelectNodesShortestPath'
import { MenuSetAlgoShortestPath } from './MenuSetAlgoShortestPath'
import { motion } from 'framer-motion'
import SpeedSlider from '../SpeedSlider'
import { shortestPathSources } from '../../algorithms/searching/shortestPathSources'
import ComplexityCard from '../ComplexityCard'
import ComparisonMode from './ComparisonMode'

const GRID_ALGORITHMS = new Set(['dijkstra', 'bellmanford'])

export const ShortestPathPage = () => {
  const [viewMode, setViewMode] = useState('network')
  const [algorithm, setAlgorithm] = useState(null)
  const [source, setSource] = useState(null)
  const [target, setTarget] = useState(null)
  const [speed, setSpeed] = useState(1.0)
  const [language, setLanguage] = useState('javascript')

  const [searchParams, setSearchParams] = useSearchParams()
  const mode = searchParams.get('mode') === 'compare' ? 'compare' : 'solo'

  const setMode = (newMode) => {
    const newParams = new URLSearchParams(searchParams)
    if (newMode === 'compare') {
      newParams.set('mode', 'compare')
    } else {
      newParams.delete('mode')
    }
    setSearchParams(newParams)
  }

  const handleSpeedChange = (event, newValue) => {
    setSpeed(newValue)
  }

  const handleResetNodes = () => {
    setSource(null)
    setTarget(null)
  }

  const currentSource = useMemo(() => {
    if (!algorithm || !shortestPathSources || !shortestPathSources[algorithm]) {
      return null
    }

    const algoData = shortestPathSources[algorithm]
    const langData = algoData[language]

    if (!langData) return null

    return typeof langData === 'string' ? langData : langData.code
  }, [algorithm, language])

  const getAlgorithmName = (algo) => {
    const names = {
      dijkstra: "Dijkstra's",
      bellmanford: 'Bellman-Ford',
      floydwarshall: 'Floyd-Warshall',
      bfs: 'BFS',
      dfs: 'DFS',
    }
    return names[algo] || algo
  }

  return (
    <motion.div
      className="lg:w-full w-auto flex flex-col lg:flex-row p-4 sm:p-6 bg-slate-950/50 min-h-screen rounded-2xl shadow-2xl border border-white/10 backdrop-blur-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeInOut' }}
    >
      <div className="w-full lg:w-1/4 xl:w-1/5 p-4 flex flex-col justify-between bg-slate-900/80 shadow-xl rounded-xl border border-white/5 backdrop-blur-sm gap-4">
        <div>
          <h2 className="text-2xl font-bold text-center text-white border-b border-white/10 pb-4 tracking-tight">
            Controls
          </h2>

          <div className="mt-4 p-1 bg-slate-950 rounded-xl border border-white/10 flex">
            <button
              onClick={() => setViewMode('network')}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                viewMode === 'network'
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Network Mode
            </button>
            <button
              onClick={() => {
                setViewMode('grid')
                handleResetNodes()
                setAlgorithm((prev) =>
                  GRID_ALGORITHMS.has(prev) ? prev : 'dijkstra'
                )
              }}
              className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                viewMode === 'grid'
                  ? 'bg-cyan-500 text-slate-950 shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Grid Map Mode
            </button>
          </div>
        </div>

        <MenuSetAlgoShortestPath
          setAlgorithm={setAlgorithm}
          viewMode={viewMode}
        />

        {viewMode === 'network' && (
          <MenuSelectNodesShortestPath
            setSource={setSource}
            setTarget={setTarget}
            onReset={handleResetNodes}
          />
        )}

        <div className="w-full">
          <SpeedSlider value={speed} onChange={handleSpeedChange} />
        </div>

        <div className="pt-4 border-t border-white/5">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-400/80">
            Code Language
          </p>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-sm text-slate-100 transition focus:border-cyan-500 focus:outline-none"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
            <option value="cpp">C++</option>
            <option value="java">Java</option>
            <option value="c">C</option>
            <option value="rust">Rust</option>
            <option value="go">Go</option>
          </select>
        </div>
        <ComplexityCard algorithm={algorithm} />
      </div>

      <div className="w-full lg:w-3/4 xl:w-4/5 mt-4 lg:mt-0 lg:ml-6 flex flex-col gap-6">
        <div className="rounded-xl overflow-hidden border border-white/10 shadow-lg bg-slate-950">
          {mode === 'compare' ? (
            <ComparisonMode setMode={setMode} />
          ) : viewMode === 'network' ? (
            <CanvasShortestPath
              algorithm={algorithm}
              source={source}
              target={target}
              speed={speed}
            />
          ) : (
            <GridVisualizer algorithm={algorithm} speed={speed} />
          )}
        </div>
        <div className="w-full">
          <CodePanel
            title={
              algorithm
                ? `${getAlgorithmName(algorithm)} Implementation`
                : 'Code Viewer'
            }
            code={
              currentSource || '// Select an algorithm to see implementation'
            }
            language={language}
          />
        </div>
      </div>
    </motion.div>
  )
}
