import React, { useState } from 'react'
import Editor from '@monaco-editor/react'

const CodeEditor = ({
  language = 'javascript',
  defaultCode = '// Write your algorithm here...\n',
  onCodeChange,
}) => {
  const [value, setValue] = useState(defaultCode)

  const handleEditorChange = (newValue) => {
    setValue(newValue)
    if (onCodeChange) {
      onCodeChange(newValue)
    }
  }

  return (
    <div className="flex flex-col w-full h-[700px] border border-slate-700/80 rounded-2xl overflow-hidden bg-slate-950/90 shadow-[0_24px_80px_rgba(15,23,42,0.45)] backdrop-blur-xl">
      {/* Editor Header / Toolbar */}
      <div className="flex items-center justify-between px-5 py-4 bg-slate-900/60 border-b border-slate-800">
        <div className="flex items-center gap-4">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 bg-red-500/80 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-yellow-500/80 rounded-full"></div>
            <div className="w-2.5 h-2.5 bg-green-500/80 rounded-full"></div>
          </div>
          <div className="flex flex-col">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-cyan-400/80">
              Terminal
            </p>
            <span className="text-sm font-semibold text-slate-200">
              {language === 'javascript' ? 'main.js' : `main.${language}`}
            </span>
          </div>
        </div>

        <button className="px-6 py-2 text-sm font-bold text-white transition-all duration-300 bg-cyan-600 rounded-xl hover:bg-cyan-500 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] active:scale-95 transform hover:-translate-y-0.5">
          Run Code
        </button>
      </div>

      {/* The Actual Monaco Editor */}
      <div className="flex-grow bg-[#1e1e1e]/50">
        <Editor
          height="100%"
          language={language}
          theme="vs-dark"
          value={value}
          onChange={handleEditorChange}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            wordWrap: 'on',
            scrollBeyondLastLine: false,
            automaticLayout: true,
            padding: { top: 20 },
            backgroundColor: 'transparent',
            lineNumbersMinChars: 3,
            cursorSmoothCaretAnimation: 'on',
            smoothScrolling: true,
          }}
        />
      </div>
    </div>
  )
}

export default CodeEditor
