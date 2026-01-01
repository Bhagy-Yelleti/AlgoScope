import React, { useState } from 'react'
import { motion } from 'framer-motion'
import StackIV from './stackIV'
import QueueIV from './queueIV'
import TreeIV from './treeIV'

const tabs = [
  { id: 'stack', label: 'Stack' },
  { id: 'queue', label: 'Queue' },
  { id: 'tree', label: 'Binary Tree' },
  { id: 'graph', label: 'Graph Builder' },
]

export const DSLayout = () => {
  const [activeTab, setActiveTab] = useState('stack')

  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 text-slate-200">
      {/* Internal Navigation Tabs */}
      <div className="flex flex-wrap gap-2 justify-center p-2 bg-slate-900/50 rounded-xl border border-white/5 backdrop-blur-sm">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-2 rounded-lg font-mono text-sm transition-all duration-300 relative ${
              activeTab === tab.id
                ? 'text-cyan-400 bg-cyan-950/30 border border-cyan-500/30 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTabGlow"
                className="absolute inset-0 rounded-lg bg-cyan-400/10"
                initial={false}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Main Visualization Canvas */}
      <div className="relative min-h-[600px] w-full bg-slate-950/80 rounded-2xl border border-slate-800 p-6 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] opacity-10 pointer-events-none"></div>

        {activeTab === 'stack' && <StackIV />}
        {activeTab === 'queue' && <QueueIV />}
        {activeTab === 'tree' && <TreeIV />}
        {activeTab === 'graph' && (
          <div className="flex items-center justify-center h-full text-slate-500">
            Graph Playground Coming Soon
          </div>
        )}
      </div>
    </div>
  )
}
