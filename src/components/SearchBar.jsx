import React, { useState, useMemo, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import Fuse from 'fuse.js'

const ALGORITHMS = [
  // Sorting
  { id: 'bubble', name: 'Bubble Sort', category: 'Sorting', route: '/sort' },
  {
    id: 'selection',
    name: 'Selection Sort',
    category: 'Sorting',
    route: '/sort',
  },
  {
    id: 'insertion',
    name: 'Insertion Sort',
    category: 'Sorting',
    route: '/sort',
  },
  { id: 'quick', name: 'Quick Sort', category: 'Sorting', route: '/sort' },
  { id: 'merge', name: 'Merge Sort', category: 'Sorting', route: '/sort' },
  { id: 'heap', name: 'Heap Sort', category: 'Sorting', route: '/sort' },
  {
    id: 'counting',
    name: 'Counting Sort',
    category: 'Sorting',
    route: '/sort',
  },
  { id: 'radix', name: 'Radix Sort', category: 'Sorting', route: '/sort' },
  // Searching (Graph)
  {
    id: 'bfs',
    name: 'BFS (Breadth First Search)',
    category: 'Searching',
    route: '/search',
  },
  {
    id: 'dfs',
    name: 'DFS (Depth First Search)',
    category: 'Searching',
    route: '/search',
  },
  // Shortest Path
  {
    id: 'dijkstra',
    name: 'Dijkstra',
    category: 'Shortest Path',
    route: '/spath',
  },
  {
    id: 'floyd',
    name: 'Floyd-Warshall',
    category: 'Shortest Path',
    route: '/spath',
  },
  // Array Search
  {
    id: 'linear',
    name: 'Linear Search',
    category: 'Array Search',
    route: '/ldssearch',
  },
  {
    id: 'binary',
    name: 'Binary Search',
    category: 'Array Search',
    route: '/ldssearch',
  },
  // ADTs
  { id: 'stack', name: 'Stack', category: 'Data Structures', route: '/adt' },
  { id: 'queue', name: 'Queue', category: 'Data Structures', route: '/adt' },
  {
    id: 'tree',
    name: 'Binary Tree',
    category: 'Data Structures',
    route: '/adt',
  },
  // General
  {
    id: 'about',
    name: 'About AlgoScope',
    category: 'General',
    route: '/about',
  },
]

const SearchBar = () => {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const searchRef = useRef(null)
  const inputRef = useRef(null)
  const navigate = useNavigate()

  const handleSelect = React.useCallback(
    (route) => {
      navigate(route)
      setQuery('')
      setResults([])
      setIsOpen(false)
      inputRef.current?.blur()
    },
    [navigate]
  )

  // 1. Initialize Fuse.js
  const fuse = useMemo(() => {
    return new Fuse(ALGORITHMS, {
      keys: ['name', 'category'],
      threshold: 0.4, // Adjust for more/less "fuzziness"
      includeMatches: true,
    })
  }, [])

  const handleSearch = (e) => {
    const val = e.target.value
    setQuery(val)

    if (val.trim() === '') {
      setResults([])
      setIsOpen(false)
      return
    }

    const searchResults = fuse.search(val)
    setResults(searchResults)
    setIsOpen(true)
    setSelectedIndex(0)
  }

  // 3. Handle Keyboard Shortcuts (Ctrl+K and Navigation)
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ctrl+K to focus
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        inputRef.current?.focus()
      }

      if (!isOpen) return

      // Dropdown Navigation
      if (e.key === 'ArrowDown') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev + 1) % results.length)
      } else if (e.key === 'ArrowUp') {
        e.preventDefault()
        setSelectedIndex((prev) => (prev - 1 + results.length) % results.length)
      } else if (e.key === 'Enter') {
        e.preventDefault()
        if (results[selectedIndex]) {
          handleSelect(results[selectedIndex].item.route)
        }
      } else if (e.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, results, selectedIndex, handleSelect])

  // 4. Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div ref={searchRef} className="relative w-full max-w-sm">
      {/* Search Input */}
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-slate-400 group-focus-within:text-cyan-400 transition-colors"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={handleSearch}
          onFocus={() => query && setIsOpen(true)}
          className="w-full bg-slate-900/50 border border-slate-700 text-slate-200 text-sm rounded-xl focus:ring-1 focus:ring-cyan-500 focus:border-cyan-500 block pl-10 pr-12 py-2.5 backdrop-blur-sm transition-all outline-none"
          placeholder="Search algorithms..."
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 border border-slate-600 rounded text-[10px] font-medium text-slate-500 bg-slate-800">
            Ctrl K
          </kbd>
        </div>
      </div>

      {/* Results Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute z-[60] w-full mt-2 bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden backdrop-blur-xl">
          <ul className="max-h-60 overflow-y-auto">
            {results.map((result, index) => (
              <li
                key={result.item.id}
                onClick={() => handleSelect(result.item.route)}
                onMouseEnter={() => setSelectedIndex(index)}
                className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-colors ${
                  index === selectedIndex
                    ? 'bg-indigo-500/20 text-indigo-300'
                    : 'text-slate-400 hover:bg-slate-800'
                }`}
              >
                <div className="flex flex-col">
                  <span className="text-sm font-medium">
                    {result.item.name}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider text-slate-500">
                    {result.item.category}
                  </span>
                </div>
                {index === selectedIndex && (
                  <svg
                    className="w-4 h-4 text-indigo-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default SearchBar
