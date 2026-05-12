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
                    Editor supports syntax highlighting and autocompletion.
                  </span>
                </li>
                <li className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-600 mt-1.5 shrink-0"></div>
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
      </div>
    </motion.div>
  )
}

export default PracticePage
