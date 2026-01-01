import React, { useState, useRef, useEffect } from 'react'
import { animate } from 'animejs'

export default function StackIV() {
  const [stack, setStack] = useState([])
  const [inputValue, setInputValue] = useState('')
  const containerRef = useRef(null)

  // Push Operation
  const handlePush = () => {
    if (!inputValue) return
    if (stack.length >= 8) {
      alert('Stack Overflow! (Visual limit reached)')
      return
    }

    const newItem = { id: Date.now(), value: inputValue }
    // Add to state
    setStack((prev) => [...prev, newItem])
    setInputValue('')
  }

  // Pop Operation
  const handlePop = () => {
    if (stack.length === 0) return

    // 1. Animate exit first
    const lastElement = document.getElementById(
      `stack-item-${stack[stack.length - 1].id}`
    )

    animate(lastElement, {
      translateX: [0, 100],
      opacity: [1, 0],
      ease: 'inExpo',
      duration: 300,
      onComplete: () => {
        // 2. Remove from state after animation
        setStack((prev) => prev.slice(0, -1))
      },
    })
  }

  // Anime.js Entry Animation
  // We use useEffect to detect when a NEW item is added to the DOM
  useEffect(() => {
    if (stack.length > 0) {
      const lastItem = stack[stack.length - 1]
      const el = document.getElementById(`stack-item-${lastItem.id}`)

      if (el) {
        animate(el, {
          translateY: [-200, 0], // Drop from top
          opacity: [0, 1],
          scale: [0.5, 1],
          ease: 'spring(1, 80, 10, 0)', // Bouncy physics
        })
      }
    }
  }, [stack.length])

  return (
    <div className="flex flex-col h-full">
      {/* Controls */}
      <div className="flex gap-4 mb-8 justify-center z-10">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Value"
          className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white outline-none focus:border-cyan-500 transition-colors w-32"
          onKeyDown={(e) => e.key === 'Enter' && handlePush()}
        />
        <button
          onClick={handlePush}
          className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg shadow-lg shadow-cyan-500/20 transition-all active:scale-95"
        >
          Push
        </button>
        <button
          onClick={handlePop}
          className="px-6 py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg shadow-lg shadow-red-500/20 transition-all active:scale-95"
        >
          Pop
        </button>
      </div>

      {/* Visual Container */}
      <div
        className="flex-1 flex items-end justify-center pb-10"
        ref={containerRef}
      >
        <div className="relative w-48 min-h-[400px] border-b-4 border-l-4 border-r-4 border-slate-600 rounded-b-xl bg-slate-900/30 backdrop-blur-sm flex flex-col-reverse items-center p-2 gap-2">
          {/* Label */}
          <div className="absolute -bottom-10 text-slate-500 font-mono text-sm uppercase tracking-widest">
            Stack (LIFO)
          </div>

          {stack.map((item, index) => (
            <div
              key={item.id}
              id={`stack-item-${item.id}`}
              className="w-full h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-md flex items-center justify-center text-white font-bold shadow-lg border border-white/10 relative z-10"
            >
              {item.value}
              <span className="absolute right-2 text-[10px] text-cyan-200/50 font-mono">
                Idx: {index}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
