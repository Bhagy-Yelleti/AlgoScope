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
          if (rand < 0.22) isWall = true
          else if (rand < 0.45) weight = 5
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

    const clampedSpeed = Math.max(0.1, speed)
    const delay = Math.max(5, Math.floor(40 / clampedSpeed))
    let visitedNodesInOrder = []
    let parentMap = {}
    let foundTarget = false

    if (algorithm === 'dijkstra') {
      const distances = {}
      const pq = []
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) distances[`${r}-${c}`] = Infinity
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
        if (!(currRow === START_ROW && currCol === START_COL))
          visitedNodesInOrder.push({ row: currRow, col: currCol })
        const directions = [
          [-1, 0],
          [1, 0],
          [0, -1],
          [0, 1],
        ]
        for (const [dr, dc] of directions) {
          const nr = currRow + dr,
            nc = currCol + dc
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
        if (!(parent.row === START_ROW && parent.col === START_COL))
          path.unshift(parent)
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
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${toolMode === 'wall' ? 'bg-orange-500 text-slate-950' : 'text-slate-400'}`}
          >
            Wall Tool
          </button>
          <button
            onClick={() => setToolMode('swamp')}
            disabled={isVisualizing}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold ${toolMode === 'swamp' ? 'bg-emerald-500 text-slate-950' : 'text-slate-400'}`}
          >
            Swamp Tool
          </button>
        </div>
        <button
          onClick={clearBoard}
          disabled={isVisualizing}
          className="px-4 py-1.5 bg-slate-800 rounded-xl text-xs font-bold"
        >
          Clear Board
        </button>
        <button
          onClick={runPathfinding}
          disabled={isVisualizing || !algorithm}
          className="px-5 py-1.5 bg-cyan-500 text-slate-950 text-xs font-extrabold rounded-xl"
        >
          Run
        </button>
      </div>
      <div className="p-2 bg-slate-900 border border-white/5 rounded-xl">
        <div
          className="grid gap-[1px]"
          style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
        >
          {grid.map((row, rIdx) =>
            row.map((cell, cIdx) => (
              <div
                key={`${rIdx}-${cIdx}`}
                role="button"
                tabIndex={isVisualizing ? -1 : 0}
                aria-disabled={isVisualizing}
                onMouseDown={() => handleMouseDown(rIdx, cIdx)}
                onMouseEnter={() => handleMouseEnter(rIdx, cIdx)}
                onMouseUp={handleMouseUp}
                className={`w-6 h-6 border ${cell.isStart ? 'bg-emerald-500' : cell.isTarget ? 'bg-rose-500' : cell.isWall ? 'bg-slate-700' : cell.isShortestPath ? 'bg-amber-400' : cell.isVisited ? 'bg-cyan-600/40' : 'bg-slate-950'}`}
              ></div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
