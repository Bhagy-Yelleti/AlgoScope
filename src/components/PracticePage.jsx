import React, { useState } from 'react'
import CodeEditor from './CodeEditor'
import { motion } from 'framer-motion'

const PracticePage = () => {
  const [language, setLanguage] = useState('javascript')
  const [code, setCode] = useState('// Write your algorithm here...\n')

  const languages = [
    {
      label: 'JavaScript',
      value: 'javascript',
      default: '// Write your algorithm here...\n',
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

  const handleLanguageChange = (e) => {
    const selectedLang = languages.find((lang) => lang.value === e.target.value)
    setLanguage(selectedLang.value)
    setCode(selectedLang.default)
  }

  const handleCodeChange = (newCode) => {
    setCode(newCode)
  }

  return (
    <motion.div
      className="max-w-full mx-auto px-2 md:px-6 py-6 lg:py-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
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
        <p className="text-lg text-slate-400 max-w-2xl font-light">
          Hone your algorithm skills by writing code in your favorite language
          with our integrated high-performance editor.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
        {/* Controls Panel */}
        <div className="flex flex-col gap-6">
          <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-xl">
            <label className="block text-xs font-bold uppercase tracking-widest text-cyan-400/80 mb-4">
              Select Language
            </label>
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
          </div>

          <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-xl">
            <h3 className="text-sm font-bold uppercase tracking-widest text-cyan-400/80 mb-4 flex items-center gap-2">
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
            <ul className="text-sm text-slate-300 space-y-4 font-light">
              <li className="flex gap-2">
                <span className="text-cyan-500 font-bold">•</span>
                <span>Select your preferred programming language.</span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-500 font-bold">•</span>
                <span>
                  Editor supports syntax highlighting and autocompletion.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-cyan-500 font-bold">•</span>
                <span className="text-slate-500 italic">
                  (Coming Soon) Execute code directly in-browser.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Editor Panel */}
        <div className="w-full min-w-0">
          <CodeEditor
            language={language}
            defaultCode={code}
            onCodeChange={handleCodeChange}
            key={language}
          />
        </div>
      </div>
    </motion.div>
  )
}

export default PracticePage
