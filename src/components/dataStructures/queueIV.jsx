import React, { useState, useRef } from 'react'
import { animate } from 'animejs'

export default function QueueIV() {
  const [queue, setQueue] = useState([])
  const [inputValue, setInputValue] = useState('')
  const containerRef = useRef(null)

  // Enqueue Operation
  const handleEnqueue = () => {
    if (!inputValue) return
    if (queue.length >= 8) {
      alert('Queue Overflow! (Visual limit reached)')
      return
    }

    const newItem = { id: Date.now(), value: inputValue }
    // Add to state
    setQueue((prev) => [...prev, newItem])
    setInputValue('')

    // Animate after DOM update
    setTimeout(() => {
      const el = document.getElementById(`queue-item-${newItem.id}`)
      if (el) {
        animate(el, {
          translateX: [50, 0], // Slide in from right
          opacity: [0, 1],
          scale: [0.5, 1],
          ease: 'spring(1, 80, 10, 0)',
        })
      }
    }, 10)
  }

  // Dequeue Operation
  const handleDequeue = () => {
    if (queue.length === 0) return

    // 1. Animate exit of the first element (Head)
    const firstElement = document.getElementById(`queue-item-${queue[0].id}`)

    if (firstElement) {
      animate(firstElement, {
        translateX: [0, -50], // Slide out to left
        opacity: [1, 0],
        scale: [1, 0.5],
        easing: 'easeInExpo',
        duration: 300,
        complete: () => {
          // 2. Remove from state after animation
          setQueue((prev) => prev.slice(1))
        },
      })
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Controls */}
      <div className="flex lg:flex-row flex-col gap-4 mb-8 justify-center z-10">
        <input
          type="number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Value"
          className="bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 text-white outline-none focus:border-cyan-500 transition-colors w-32"
          onKeyDown={(e) => e.key === 'Enter' && handleEnqueue()}
        />
        <button
          onClick={handleEnqueue}
          className="px-6 py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg shadow-lg shadow-cyan-500/20 transition-all active:scale-95"
        >
          Enqueue
        </button>
        <button
          onClick={handleDequeue}
          className="px-6 py-2 bg-red-600 hover:bg-red-500 text-white font-bold rounded-lg shadow-lg shadow-red-500/20 transition-all active:scale-95"
        >
          Dequeue
        </button>
      </div>

      {/* Visual Container */}
      <div
        className="flex-1 flex items-center justify-center pb-10"
        ref={containerRef}
      >
        <div className="relative w-full max-w-[500px] min-h-[100px] border-t-4 border-b-4 border-slate-600 rounded-lg bg-slate-900/30 backdrop-blur-sm flex items-center px-4 gap-2 overflow-hidden">
          {/* Labels */}
          <div className="absolute -top-8 left-0 text-slate-500 font-mono text-xs uppercase tracking-widest">
            Front (Head)
          </div>
          <div className="absolute -top-8 right-0 text-slate-500 font-mono text-xs uppercase tracking-widest">
            Rear (Tail)
          </div>
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-slate-500 font-mono text-sm uppercase tracking-widest">
            Queue (FIFO)
          </div>

          {/* Queue Items */}
          {queue.map((item, index) => (
            <div
              key={item.id}
              id={`queue-item-${item.id}`}
              className="min-w-[50px] h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-md flex items-center justify-center text-white font-bold shadow-lg border border-white/10 relative z-10"
            >
              {item.value}
              <span className="absolute -bottom-4 text-[10px] text-cyan-200/50 font-mono">
                {index}
              </span>
            </div>
          ))}

          {queue.length === 0 && (
            <div className="w-full text-center text-slate-600 italic text-sm">
              Queue is empty
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
