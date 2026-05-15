import React, { useState, useRef, useEffect } from 'react'
import CodeEditor from './CodeEditor'
import { motion } from 'framer-motion'

const Terminal = React.forwardRef(function Terminal({ logs, onClear }, ref) {
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [logs])

  return (
    <div
      ref={ref}
      className="mt-8 flex flex-col w-full scroll-mt-24 bg-slate-950 border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl"
    >
      <div className="flex items-center justify-between px-5 py-3 bg-slate-900/80 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <svg
            className="w-4 h-4 text-cyan-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Output Console
          </span>
        </div>
        <button
          onClick={onClear}
          className="text-[10px] font-bold uppercase tracking-wider text-slate-500 hover:text-cyan-400 transition-colors"
        >
          Clear Logs
        </button>
      </div>
      <div
        ref={scrollRef}
        className="p-5 h-48 overflow-y-auto font-mono text-sm space-y-2 custom-scrollbar"
      >
        {logs.length === 0 ? (
          <p className="text-slate-600 italic text-xs">
            No output yet. Click &quot;Run Code&quot; to execute your
            JavaScript.
          </p>
        ) : (
          logs.map((log, i) => (
            <div
              key={i}
              className={`flex gap-3 ${log.type === 'error' ? 'text-red-400' : 'text-slate-300'}`}
            >
              <span className="text-slate-600 shrink-0 text-xs">
                [{new Date().toLocaleTimeString([], { hour12: false })}]
              </span>
              <span className="break-all whitespace-pre-wrap">
                {log.content}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  )
})

const PracticePage = () => {
  const consoleRef = useRef(null)
  const [language, setLanguage] = useState('javascript')
  const [theme, setTheme] = useState(
    () => localStorage.getItem('practiceEditorTheme') || 'vs-dark'
  )
  const [code, setCode] = useState(
    '// Write your algorithm here...\nconsole.log("Hello from AlgoScope!");\n'
  )
  const [logs, setLogs] = useState([])

  const languages = [
    {
      label: 'JavaScript',
      value: 'javascript',
      default:
        '// Write your algorithm here...\nconsole.log("Hello from AlgoScope!");\n',
    },
    {
      label: 'Python',
      value: 'python',
      default: '# Write your algorithm here...\n',
    },
    {
      label: 'Java',
      value: 'java',
      default:
        'public class Main {\n  public static void main(String[] args) {\n    // Write your algorithm here...\n  }\n}\n',
    },
    {
      label: 'C++',
      value: 'cpp',
      default:
        '#include <iostream>\n\nint main() {\n  // Write your algorithm here...\n  return 0;\n}\n',
    },
  ]

  const themes = [
    { label: 'Dark', value: 'vs-dark' },
    { label: 'Light', value: 'light' },
    { label: 'High Contrast', value: 'hc-black' },
  ]

  const handleLanguageChange = (e) => {
    const selectedLang = languages.find((lang) => lang.value === e.target.value)
    setLanguage(selectedLang.value)
    setCode(selectedLang.default)
  }

  const handleThemeChange = (e) => {
    setTheme(e.target.value)
    localStorage.setItem('practiceEditorTheme', e.target.value)
  }

  const handleCodeChange = (newCode) => {
    setCode(newCode)
  }

  const scrollConsoleIntoView = () => {
    // Defer until after this tick so layout / React commit can settle (helps with
    // tall editor + sticky navbar + scrollIntoView).
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (consoleRef.current) {
          consoleRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          })
        }
      })
    })
  }

  const handleRunCode = (userCode) => {
    const newLogs = []

    // 1. Capture original console.log
    const originalLog = console.log
    const originalError = console.error

    // 2. Override console.log for this execution
    console.log = (...args) => {
      const content = args
        .map((arg) =>
          typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
        )
        .join(' ')
      newLogs.push({ type: 'info', content })
      originalLog.apply(console, args)
    }

    console.error = (...args) => {
      const content = args
        .map((arg) =>
          typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
        )
        .join(' ')
      newLogs.push({ type: 'error', content })
      originalError.apply(console, args)
    }

    // 3. Execute code safely
    try {
      // Use new Function instead of eval for better scoping and safety
      const run = new Function(userCode)
      run()
    } catch (err) {
      newLogs.push({ type: 'error', content: `Runtime Error: ${err.message}` })
    }

    // 4. Restore original console and update state
    console.log = originalLog
    console.error = originalError
    setLogs((prev) => [...prev, ...newLogs])
    scrollConsoleIntoView()
  }

  return (
    <motion.div
      className="w-full bg-slate-950/50 min-h-screen shadow-2xl rounded-2xl border border-white/10 backdrop-blur-xl p-4 sm:p-8 lg:p-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-full mx-auto">
        <div className="mb-10 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/30 bg-cyan-500/10 backdrop-blur-sm mb-4">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
            <span className="text-xs font-mono text-cyan-400 tracking-wider uppercase">
              Beta Feature
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-4">
            Practice Sandbox
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl font-light leading-relaxed">
            Hone your algorithm skills by writing code in your favorite language
            with our integrated high-performance editor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-10">
          {/* Controls Panel */}
          <div className="flex flex-col gap-6">
            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] shadow-xl">
              <label className="block text-xs font-bold uppercase tracking-widest text-cyan-400/80 mb-4">
                Select Language
              </label>
              <div className="relative">
                <select
                  value={language}
                  onChange={handleLanguageChange}
                  className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all appearance-none cursor-pointer"
                >
                  {languages.map((lang) => (
                    <option key={lang.value} value={lang.value}>
                      {lang.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] shadow-xl">
              <label className="block text-xs font-bold uppercase tracking-widest text-cyan-400/80 mb-4">
                Select Theme
              </label>
              <div className="relative">
                <select
                  value={theme}
                  onChange={handleThemeChange}
                  className="w-full bg-slate-950/80 border border-slate-700 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all appearance-none cursor-pointer"
                >
                  {themes.map((editorTheme) => (
                    <option key={editorTheme.value} value={editorTheme.value}>
                      {editorTheme.label}
                    </option>
                  ))}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] shadow-xl">
              <h3 className="text-sm font-bold uppercase tracking-widest text-cyan-400/80 mb-6 flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Guide
              </h3>
              <ul className="text-sm text-slate-300 space-y-6 font-light">
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
                  <span>Select your preferred programming language.</span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
                  <span>
                    Professional editor with syntax highlighting, IntelliSense,
                    and ligatures.
                  </span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(6,182,212,0.6)]"></div>
                  <span>
                    Execute JavaScript directly and see results in the real-time
                    console below.
                  </span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0"></div>
                  <span className="text-slate-500 italic">
                    (Coming Soon) Native execution for Python, Java, and C++.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Editor Panel */}
          <div className="w-full min-w-0">
            <CodeEditor
              language={language}
              theme={theme}
              defaultCode={code}
              onCodeChange={handleCodeChange}
              onRun={handleRunCode}
              key={language}
            />
            <Terminal
              ref={consoleRef}
              logs={logs}
              onClear={() => setLogs([])}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default PracticePage
