import React, { useState } from 'react'
import { animate } from 'animejs'

class TreeNode {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
    this.x = 0
    this.y = 0
  }
}

export default function TreeIV() {
  const [root, setRoot] = useState(null)
  const [inputValue, setInputValue] = useState('')
  const [treeStructure, setTreeStructure] = useState([]) // For rendering

  // Helper to recalculate positions
  const updateTreePositions = (node, x, y, level) => {
    if (!node) return []
    const gap = 300 / (level + 1) // Dynamic gap reduction
    node.x = x
    node.y = y

    let nodes = [{ ...node }]
    if (node.left)
      nodes = [
        ...nodes,
        ...updateTreePositions(node.left, x - gap, y + 80, level + 1),
      ]
    if (node.right)
      nodes = [
        ...nodes,
        ...updateTreePositions(node.right, x + gap, y + 80, level + 1),
      ]
    return nodes
  }

  const insertNode = () => {
    const val = parseInt(inputValue)
    if (isNaN(val)) return

    const newNode = new TreeNode(val)
    let currentRoot = root ? { ...root } : null // Clone logic needed for state immutability in complex apps, simplified here

    if (!currentRoot) {
      currentRoot = newNode
    } else {
      // Standard BST Insert
      let curr = currentRoot
      while (true) {
        if (val < curr.value) {
          if (!curr.left) {
            curr.left = newNode
            break
          }
          curr = curr.left
        } else {
          if (!curr.right) {
            curr.right = newNode
            break
          }
          curr = curr.right
        }
      }
    }

    // Recalculate layout
    const flattened = updateTreePositions(currentRoot, 400, 50, 1) // 400 is roughly center of canvas
    setRoot(currentRoot)
    setTreeStructure(flattened)
    setInputValue('')

    // Animate the new node
    setTimeout(() => {
      animate(`.node-${val}`, {
        scale: [0, 1],
        opacity: [0, 1],
        duration: 800,
        ease: 'outElastic(1, .6)',
      })
    }, 10)
  }

  return (
    <div className="flex flex-col h-full w-full">
      <div className="flex gap-4 mb-4 justify-center z-20">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Node Value"
          className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white outline-none focus:border-purple-500 transition-colors w-32"
        />
        <button
          onClick={insertNode}
          className="px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg shadow-lg shadow-purple-500/20"
        >
          Insert
        </button>
        <button
          onClick={() => {
            setRoot(null)
            setTreeStructure([])
          }}
          className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg"
        >
          Clear
        </button>
      </div>

      <div className="relative flex-1 overflow-auto bg-slate-900/20 rounded-xl border border-white/5">
        {/* SVG Layer for Edges */}
        <svg className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
          {treeStructure.map((node) => (
            <g key={`edge-${node.value}`}>
              {node.left && (
                <line
                  x1={node.x + 24}
                  y1={node.y + 24}
                  x2={node.left.x + 24}
                  y2={node.left.y + 24}
                  stroke="#475569"
                  strokeWidth="2"
                />
              )}
              {node.right && (
                <line
                  x1={node.x + 24}
                  y1={node.y + 24}
                  x2={node.right.x + 24}
                  y2={node.right.y + 24}
                  stroke="#475569"
                  strokeWidth="2"
                />
              )}
            </g>
          ))}
        </svg>

        {/* Nodes Layer */}
        {treeStructure.map((node) => (
          <div
            key={node.value}
            className={`node-${node.value} absolute w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white font-bold border-2 border-white/20 shadow-xl z-10`}
            style={{ left: node.x, top: node.y }}
          >
            {node.value}
          </div>
        ))}
      </div>
    </div>
  )
}
