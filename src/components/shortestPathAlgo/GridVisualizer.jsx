import React, { useState, useEffect, useRef } from 'react'

const ROWS = 20
const COLS = 30
const START_ROW = 5
const START_COL = 5
const TARGET_ROW = 15
const TARGET_COL = 25

const createInitialGrid = () => {
  const initialGrid = []
  for (let r = 0; r < ROWS; r++) {
    const currentRow = []
    for (let c = 0; c < COLS; c++) {
      currentRow.push({
        row: r,
        col: c,
        isStart: r === START_ROW && c === START_COL,
        isTarget: r === TARGET_ROW && c === TARGET_COL,
        isWall: false,
        weight: 1,
        isVisited: false,
        isShortestPath: false,
      })
    }
    initialGrid.push(currentRow)
  }
  return initialGrid
}

export const GridVisualizer = ({ algorithm, speed }) => {
  const [grid, setGrid] = useState(createInitialGrid())
  const [isVisualizing, setIsVisualizing] = useState(false)
  const [toolMode, setToolMode] = useState('wall')
  const isMouseDown = useRef(false)

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  const clearVisualizationState = (currentGrid) => {
    return currentGrid.map((r) =>
      r.map((c) => ({
        ...c,
        isVisited: false,
        isShortestPath: false,
      }))
    )
  }

  const handleCellModify = (row, col, shouldClearPath = false) => {
    if (isVisualizing) return

    setGrid((prevGrid) => {
      if (prevGrid[row][col].isStart || prevGrid[row][col].isTarget)
        return prevGrid

      let baseGrid = shouldClearPath
        ? clearVisualizationState(prevGrid)
        : prevGrid

      return baseGrid.map((r, rIdx) => {
        if (rIdx !== row) return r
        return r.map((c, cIdx) => {
          if (cIdx !== col) return c

          const updatedCell = { ...c }
          if (toolMode === 'wall') {
            updatedCell.isWall = !updatedCell.isWall
            updatedCell.weight = 1
          } else if (toolMode === 'swamp') {
            if (!updatedCell.isWall) {
              updatedCell.weight = updatedCell.weight === 5 ? 1 : 5
            }
          }
          return updatedCell
        })
      })
    })
  }

  const handleMouseDown = (row, col) => {
    isMouseDown.current = true
    handleCellModify(row, col, true)
  }

  const handleMouseEnter = (row, col) => {
    if (!isMouseDown.current) return
    handleCellModify(row, col, false)
  }

  const handleMouseUp = () => {
    isMouseDown.current = false
  }

  const handleKeyDown = (e, row, col) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault()
      handleCellModify(row, col, true)
    }
  }

  useEffect(() => {
    window.addEventListener('mouseup', handleMouseUp)
    return () => window.removeEventListener('mouseup', handleMouseUp)
  }, [])

  const clearBoard = () => {
    if (isVisualizing) return
    setGrid(createInitialGrid())
  }

  const generateWeightedMaze = () => {
    if (isVisualizing) return
    setGrid((prevGrid) => {
      return prevGrid.map((r) =>
        r.map((c) => {
          if (c.isStart || c.isTarget) {
            return {
              ...c,
              isWall: false,
              weight: 1,
              isVisited: false,
              isShortestPath: false,
            }
          }
          const rand = Math.random()
          let isWall = false
          let weight = 1
          if (rand < 0.22) {
            isWall = true
          } else if (rand < 0.45) {
            weight = 5
          }
          return {
            ...c,
            isWall,
            weight,
            isVisited: false,
            isShortestPath: false,
          }
        })
      )
    })
  }

  const runPathfinding = async () => {
    if (isVisualizing || !algorithm) return
    setIsVisualizing(true)

    let currentGrid = []
    setGrid((prev) => {
      const cleared = clearVisualizationState(prev)
      currentGrid = cleared
      return cleared
    })

    const delay = Math.max(5, Math.floor(40 / speed))
    let visitedNodesInOrder = []
    let parentMap = {}
    let foundTarget = false

    if (algorithm === 'dijkstra') {
      const distances = {}
      const pq = []

      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          const key = `${r}-${c}`
          distances[key] = Infinity
        }
      }

      distances[`${START_ROW}-${START_COL}`] = 0
      pq.push({ row: START_ROW, col: START_COL, dist: 0 })

      while (pq.length > 0) {
        pq.sort((a, b) => a.dist - b.dist)
        const { row: currRow, col: currCol, dist: currDist } = pq.shift()
        const currKey = `${currRow}-${currCol}`

        if (currDist !== distances[currKey]) continue

        if (currRow === TARGET_ROW && currCol === TARGET_COL) {
          foundTarget = true
          break
        }

        if (!(currRow === START_ROW && currCol === START_COL)) {
          visitedNodesInOrder.push({ row: currRow, col: currCol })
        }

        const directions = [
          [-1, 0],
          [1, 0],
          [0, -1],
          [0, 1],
        ]

        for (const [dr, dc] of directions) {
          const nr = currRow + dr
          const nc = currCol + dc

          if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS) {
            const neighbor = currentGrid[nr][nc]
            if (neighbor.isWall) continue

            const alt = distances[currKey] + neighbor.weight
            const neighborKey = `${nr}-${nc}`

            if (alt < distances[neighborKey]) {
              distances[neighborKey] = alt
              parentMap[neighborKey] = { row: currRow, col: currCol }
              pq.push({ row: nr, col: nc, dist: alt })
            }
          }
        }
      }
    } else if (algorithm === 'bellmanford') {
      const distances = {}
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          distances[`${r}-${c}`] = Infinity
        }
      }
      distances[`${START_ROW}-${START_COL}`] = 0

      for (let i = 0; i < ROWS * COLS - 1; i++) {
        let changed = false
        let batchVisits = []

        for (let r = 0; r < ROWS; r++) {
          for (let c = 0; c < COLS; c++) {
            const currKey = `${r}-${c}`
            if (distances[currKey] === Infinity) continue

            const directions = [
              [-1, 0],
              [1, 0],
              [0, -1],
              [0, 1],
            ]
            for (const [dr, dc] of directions) {
              const nr = r + dr
              const nc = c + dc

              if (nr >= 0 && nr < ROWS && nc >= 0 && nc < COLS) {
                const neighbor = currentGrid[nr][nc]
                if (neighbor.isWall) continue

                const neighborKey = `${nr}-${nc}`
                const alt = distances[currKey] + neighbor.weight

                if (alt < distances[neighborKey]) {
                  distances[neighborKey] = alt
                  parentMap[neighborKey] = { row: r, col: c }
                  changed = true

                  if (
                    !(nr === TARGET_ROW && nc === TARGET_COL) &&
                    !(nr === START_ROW && nc === START_COL)
                  ) {
                    batchVisits.push({ row: nr, col: nc })
                  }
                }
              }
            }
          }
        }

        if (batchVisits.length > 0) {
          visitedNodesInOrder.push(...batchVisits)
        }
        if (!changed) break
      }
      if (distances[`${TARGET_ROW}-${TARGET_COL}`] !== Infinity) {
        foundTarget = true
      }
    }

    for (const node of visitedNodesInOrder) {
      setGrid((prev) => {
        const next = prev.map((r) => r.map((c) => ({ ...c })))
        next[node.row][node.col].isVisited = true
        return next
      })
      await sleep(delay)
    }

    if (foundTarget) {
      const path = []
      let currentKey = `${TARGET_ROW}-${TARGET_COL}`
      while (parentMap[currentKey]) {
        const parent = parentMap[currentKey]
        if (!(parent.row === START_ROW && parent.col === START_COL)) {
          path.unshift(parent)
        }
        currentKey = `${parent.row}-${parent.col}`
      }

      for (const node of path) {
        setGrid((prev) => {
          const next = prev.map((r) => r.map((c) => ({ ...c })))
          next[node.row][node.col].isShortestPath = true
          return next
        })
        await sleep(delay * 2)
      }
    }

    setIsVisualizing(false)
  }

  return (
    <div className="p-4 flex flex-col items-center bg-slate-950 text-white rounded-xl select-none">
      <div className="flex flex-wrap gap-3 mb-4 justify-center items-center">
        <div className="flex bg-slate-900 p-1 border border-white/10 rounded-xl">
          <button
            onClick={() => setToolMode('wall')}
            disabled={isVisualizing}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              toolMode === 'wall'
                ? 'bg-orange-500 text-slate-950 shadow'
                : 'text-slate-400 hover:text-white'
            } disabled:opacity-50`}
          >
            Wall Tool (🧱)
          </button>
          <button
            onClick={() => setToolMode('swamp')}
            disabled={isVisualizing}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              toolMode === 'swamp'
                ? 'bg-emerald-500 text-slate-950 shadow'
                : 'text-slate-400 hover:text-white'
            } disabled:opacity-50`}
          >
            Swamp Weight Tool (🦠 Cost: 5)
          </button>
        </div>

        <button
          onClick={clearBoard}
          disabled={isVisualizing}
          className="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-xs font-bold rounded-xl border border-white/10 transition"
        >
          Clear Board
        </button>

        <button
          onClick={generateWeightedMaze}
          disabled={isVisualizing}
          className="px-4 py-1.5 bg-cyan-950/40 border border-cyan-500/30 hover:bg-cyan-950/80 disabled:opacity-40 text-xs font-bold text-cyan-400 rounded-xl transition"
        >
          Generate Weighted Maze
        </button>

        <button
          onClick={runPathfinding}
          disabled={isVisualizing || !algorithm}
          className="px-5 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 disabled:bg-slate-800 disabled:text-slate-500 text-xs font-extrabold rounded-xl shadow-lg shadow-cyan-500/10 transition"
        >
          {isVisualizing ? 'Visualizing...' : 'Run Pathfinding'}
        </button>
      </div>

      <div className="p-2 bg-slate-900 border border-white/5 rounded-xl shadow-inner max-w-full overflow-auto">
        <div
          className="grid gap-[1px] bg-slate-800 border border-slate-800"
          style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
        >
          {grid.map((row, rIdx) =>
            row.map((cell, cIdx) => {
              let bgClass = 'bg-slate-950 hover:bg-slate-900'
              if (cell.isStart) bgClass = 'bg-emerald-500 animate-pulse'
              else if (cell.isTarget) bgClass = 'bg-rose-500 animate-pulse'
              else if (cell.isWall) bgClass = 'bg-slate-700'
              else if (cell.isShortestPath)
                bgClass = 'bg-amber-400 shadow-lg shadow-amber-400/20'
              else if (cell.isVisited) {
                bgClass =
                  cell.weight === 5 ? 'bg-teal-900/90' : 'bg-cyan-600/40'
              } else if (cell.weight === 5) {
                bgClass =
                  'bg-emerald-950/80 hover:bg-emerald-900/50 text-emerald-400/60'
              }

              let cellLabel = 'Empty space'
              if (cell.isStart) cellLabel = 'Start node'
              else if (cell.isTarget) cellLabel = 'Target node'
              else if (cell.isWall) cellLabel = 'Wall obstruction'
              else if (cell.weight === 5)
                cellLabel = 'Swamp terrain, movement cost five'

              return (
                <div
                  key={`${rIdx}-${cIdx}`}
                  role="button"
                  tabIndex={isVisualizing ? -1 : 0}
                  aria-disabled={isVisualizing}
                  aria-label={cellLabel}
                  onMouseDown={() => handleMouseDown(rIdx, cIdx)}
                  onMouseEnter={() => handleMouseEnter(rIdx, cIdx)}
                  onMouseUp={handleMouseUp}
                  onKeyDown={(e) => handleKeyDown(e, rIdx, cIdx)}
                  className={`w-6 h-6 border border-slate-900/30 transition-all duration-100 flex items-center justify-center text-[9px] font-bold ${
                    isVisualizing ? 'cursor-not-allowed' : 'cursor-crosshair'
                  } ${bgClass}`}
                >
                  {!cell.isStart &&
                    !cell.isTarget &&
                    !cell.isWall &&
                    cell.weight > 1 && <span>{cell.weight}</span>}
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
