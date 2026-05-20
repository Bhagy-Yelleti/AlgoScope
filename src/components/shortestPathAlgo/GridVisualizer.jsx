import React, { useState, useRef } from 'react'

const ROWS = 20
const COLS = 30
const START_ROW = 5
const START_COL = 5
const TARGET_ROW = 14
const TARGET_COL = 25

const createInitialGrid = () => {
  const grid = []
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
    grid.push(currentRow)
  }
  return grid
}

export const GridVisualizer = ({ algorithm, speed }) => {
  const [grid, setGrid] = useState(createInitialGrid)
  const [isVisualizing, setIsVisualizing] = useState(false)
  const [toolMode, setToolMode] = useState('wall')
  const isMousePressed = useRef(false)

  const handleMouseDown = (row, col) => {
    if (isVisualizing) return
    isMousePressed.current = true
    handleCellModify(row, col)
  }

  const handleMouseEnter = (row, col) => {
    if (!isMousePressed.current || isVisualizing) return
    handleCellModify(row, col)
  }

  const handleMouseUp = () => {
    isMousePressed.current = false
  }

  const handleKeyDown = (e, row, col) => {
    if (isVisualizing) return
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleCellModify(row, col)
    }
  }

  const handleCellModify = (row, col) => {
    setGrid((prevGrid) => {
      const cell = prevGrid[row][col]
      if (cell.isStart || cell.isTarget) return prevGrid

      const newGrid = prevGrid.map((r) => r.map((c) => ({ ...c })))
      const targetCell = newGrid[row][col]

      if (toolMode === 'wall') {
        targetCell.isWall = !targetCell.isWall
        targetCell.weight = 1
      } else if (toolMode === 'weight') {
        if (!targetCell.isWall) {
          targetCell.weight = targetCell.weight === 5 ? 1 : 5
        }
      }
      return newGrid
    })
  }

  const handleClearGrid = () => {
    if (isVisualizing) return
    setGrid(createInitialGrid())
  }

  const handleGenerateMaze = () => {
    if (isVisualizing) return
    setGrid((prevGrid) => {
      return prevGrid.map((row) =>
        row.map((cell) => {
          if (cell.isStart || cell.isTarget) {
            return {
              ...cell,
              isWall: false,
              weight: 1,
              isVisited: false,
              isShortestPath: false,
            }
          }
          const rand = Math.random()
          let isWall = false
          let weight = 1
          if (rand < 0.25) isWall = true
          else if (rand < 0.4) weight = 5

          return {
            ...cell,
            isWall,
            weight,
            isVisited: false,
            isShortestPath: false,
          }
        })
      )
    })
  }

  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  const runPathfinding = async () => {
    if (isVisualizing) return
    setIsVisualizing(true)

    const cleanGrid = grid.map((row) =>
      row.map((cell) => ({
        ...cell,
        isVisited: false,
        isShortestPath: false,
      }))
    )
    setGrid(cleanGrid)

    const delay = Math.max(2, 30 / (speed || 1.0))
    const currentAlgo = algorithm ? algorithm.toLowerCase() : 'dijkstra'

    let parentMap = {}
    let foundTarget = false

    if (currentAlgo === 'bellmanford') {
      const distances = {}
      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          distances[`${r}-${c}`] = Infinity
        }
      }
      distances[`${START_ROW}-${START_COL}`] = 0

      for (let i = 0; i < ROWS * COLS - 1; i++) {
        let changed = false
        const relaxedInThisPass = []

        for (let r = 0; r < ROWS; r++) {
          for (let c = 0; c < COLS; c++) {
            const uKey = `${r}-${c}`
            if (distances[uKey] === Infinity || cleanGrid[r][c].isWall) continue

            const directions = [
              [-1, 0],
              [1, 0],
              [0, -1],
              [0, 1],
            ]
            for (const [dr, dc] of directions) {
              const nr = r + dr
              const nc = c + dc
              if (
                nr >= 0 &&
                nr < ROWS &&
                nc >= 0 &&
                nc < COLS &&
                !cleanGrid[nr][nc].isWall
              ) {
                const vKey = `${nr}-${nc}`
                const weight = cleanGrid[nr][nc].weight
                if (distances[uKey] + weight < distances[vKey]) {
                  distances[vKey] = distances[uKey] + weight
                  parentMap[vKey] = [r, c]
                  changed = true

                  if (
                    !(nr === TARGET_ROW && nc === TARGET_COL) &&
                    !(nr === START_ROW && nc === START_COL)
                  ) {
                    relaxedInThisPass.push([nr, nc])
                  }
                }
              }
            }
          }
        }

        if (relaxedInThisPass.length > 0) {
          setGrid((prev) => {
            const updated = prev.map((rowArr) =>
              rowArr.map((cellObj) => ({ ...cellObj }))
            )
            for (const [nr, nc] of relaxedInThisPass) {
              updated[nr][nc].isVisited = true
            }
            return updated
          })
        }

        if (!changed) break
        await sleep(delay)
      }
      if (distances[`${TARGET_ROW}-${TARGET_COL}`] !== Infinity) {
        foundTarget = true
      }
    } else {
      const distances = {}
      const pq = []

      for (let r = 0; r < ROWS; r++) {
        for (let c = 0; c < COLS; c++) {
          distances[`${r}-${c}`] = Infinity
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
          setGrid((prev) => {
            const updated = prev.map((r) => r.map((c) => ({ ...c })))
            updated[currRow][currCol].isVisited = true
            return updated
          })
          await sleep(delay)
        }

        const directions = [
          [-1, 0],
          [1, 0],
          [0, -1],
          [0, 1],
        ]
        for (const [dr, dc] of directions) {
          const nextRow = currRow + dr
          const nextCol = currCol + dc
          const nextKey = `${nextRow}-${nextCol}`

          if (
            nextRow >= 0 &&
            nextRow < ROWS &&
            nextCol >= 0 &&
            nextCol < COLS &&
            !cleanGrid[nextRow][nextCol].isWall
          ) {
            const edgeWeight = cleanGrid[nextRow][nextCol].weight
            const newDist = distances[currKey] + edgeWeight

            if (newDist < distances[nextKey]) {
              distances[nextKey] = newDist
              parentMap[nextKey] = [currRow, currCol]
              pq.push({ row: nextRow, col: nextCol, dist: newDist })
            }
          }
        }
      }
    }

    if (foundTarget) {
      const path = []
      let currKey = `${TARGET_ROW}-${TARGET_COL}`
      while (parentMap[currKey]) {
        const [pRow, pCol] = parentMap[currKey]
        if (pRow === START_ROW && pCol === START_COL) break
        path.push([pRow, pCol])
        currKey = `${pRow}-${pCol}`
      }

      path.reverse()
      for (const [pRow, pCol] of path) {
        setGrid((prev) => {
          const updated = prev.map((r) => r.map((c) => ({ ...c })))
          updated[pRow][pCol].isShortestPath = true
          return updated
        })
        await sleep(delay * 2)
      }
    }

    setIsVisualizing(false)
  }

  return (
    <div
      className="flex flex-col items-center p-4 bg-slate-950 w-full overflow-auto select-none"
      onMouseLeave={handleMouseUp}
    >
      <div className="flex flex-wrap gap-4 mb-4 justify-center items-center">
        <div className="p-1 bg-slate-900 rounded-lg border border-white/10 flex gap-1">
          <button
            onClick={() => setToolMode('wall')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition ${
              toolMode === 'wall'
                ? 'bg-cyan-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Wall Tool (🧱)
          </button>
          <button
            onClick={() => setToolMode('weight')}
            className={`px-3 py-1.5 text-xs font-semibold rounded-md transition ${
              toolMode === 'weight'
                ? 'bg-emerald-500 text-slate-950 font-bold'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Swamp Weight Tool (🌊 Cost: 5)
          </button>
        </div>

        <button
          onClick={handleClearGrid}
          disabled={isVisualizing}
          className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 text-slate-200 border border-white/10 hover:bg-slate-700 transition disabled:opacity-50"
        >
          Clear Board
        </button>
        <button
          onClick={handleGenerateMaze}
          disabled={isVisualizing}
          className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 text-cyan-400 border border-cyan-500/20 hover:bg-slate-800/80 transition disabled:opacity-50"
        >
          Generate Weighted Maze
        </button>
        <button
          onClick={runPathfinding}
          disabled={isVisualizing}
          className="px-4 py-2 text-xs rounded-lg bg-cyan-500 text-slate-950 shadow-md font-bold hover:bg-cyan-400 transition disabled:opacity-50"
        >
          {isVisualizing ? 'Calculating Path...' : 'Run Pathfinding'}
        </button>
      </div>

      <div
        className="grid bg-slate-900 p-2 rounded-xl border border-white/5"
        style={{ gridTemplateColumns: `repeat(${COLS}, minmax(0, 1fr))` }}
      >
        {grid.map((row) =>
          row.map((cell) => {
            const {
              row,
              col,
              isStart,
              isTarget,
              isWall,
              weight,
              isVisited,
              isShortestPath,
            } = cell

            let bgClass =
              'bg-slate-950 border-slate-800/40 focus:ring-2 focus:ring-cyan-500 focus:outline-none'
            if (isStart)
              bgClass =
                'bg-emerald-500 border-emerald-400 focus:ring-2 focus:ring-emerald-400 focus:outline-none'
            else if (isTarget)
              bgClass =
                'bg-rose-500 border-rose-400 focus:ring-2 focus:ring-rose-400 focus:outline-none'
            else if (isWall) bgClass = 'bg-slate-700 border-slate-600'
            else if (isShortestPath) bgClass = 'bg-yellow-400 border-yellow-300'
            else if (weight > 1)
              bgClass = 'bg-emerald-950 border-emerald-800 text-emerald-400/70'
            else if (isVisited) bgClass = 'bg-cyan-500/20 border-cyan-500/40'

            let cellLabel = `Cell at row ${row}, column ${col}.`
            if (isStart) cellLabel += ' Start node.'
            else if (isTarget) cellLabel += ' Target node.'
            else if (isWall) cellLabel += ' Wall node.'
            else if (weight > 1)
              cellLabel += ` Weighted node with cost ${weight}.`
            if (isShortestPath) cellLabel += ' Part of the shortest path.'
            else if (isVisited) cellLabel += ' Visited node.'

            return (
              <div
                key={`${row}-${col}`}
                role="button"
                tabIndex={0}
                aria-label={cellLabel}
                onMouseDown={() => handleMouseDown(row, col)}
                onMouseEnter={() => handleMouseEnter(row, col)}
                onMouseUp={handleMouseUp}
                onKeyDown={(e) => handleKeyDown(e, row, col)}
                className={`w-6 h-6 border cursor-crosshair transition-all duration-100 flex items-center justify-center text-[9px] font-bold ${bgClass}`}
              >
                {weight > 1 && !isShortestPath && !isVisited && !isWall && '5'}
              </div>
            )
          })
        )}
      </div>
    </div>
  )
}
