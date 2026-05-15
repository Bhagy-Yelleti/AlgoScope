import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react'
// 1. Import motion and AnimatePresence
import { motion, AnimatePresence } from 'framer-motion'
import githubIcon from '../assets/github-mark-white.svg'
import logo from '../assets/logo2.png'
import SearchBar from './SearchBar'

// 2. Define the bounce transition
const bounceTransition = {
  type: 'spring',
  stiffness: 260,
  damping: 15,
}

// 3. Define variants for the icon lines
const topVariants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: 45, y: 6 }, // Move down 6px
}
const middleVariants = {
  closed: { opacity: 1 },
  open: { opacity: 0 },
}
const bottomVariants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: -45, y: -6 }, // Move up 6px
}

// 4. Define variants for the mobile menu panel
const menuVariants = {
  closed: {
    opacity: 0,
    y: -10, // Start 10px up
    transition: {
      duration: 0.2,
    },
  },
  open: {
    opacity: 1,
    y: 0, // Animate to 0
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
      staggerChildren: 0.05, // Animate links one by one
    },
  },
}

// Variant for the links inside the mobile menu
const menuItemVariants = {
  closed: { opacity: 0, y: -10 },
  open: { opacity: 1, y: 0 },
}

// Helper component for the icon lines
const Line = ({ variants }) => (
  <motion.div
    className="h-0.5 w-5 bg-slate-300"
    variants={variants}
    transition={bounceTransition}
  />
)

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  // Derive active state from current URL instead of local state
  const { pathname } = useLocation()

  const links = [
    { name: 'Search', href: '/search' },
    { name: 'Shortest Path', href: '/spath' },
    { name: 'Sort', href: '/sort' },
    { name: 'Practice', href: '/practice' },
    { name: 'About', href: '/about' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40 rounded-xl shadow-2xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            to="/"
            className="flex flex-row text-xl font-semibold tracking-tight group"
          >
            <div className="w-10 h-10 m-auto rounded flex items-center justify-center mr-3 transition-transform group-hover:scale-110">
              <img src={logo} alt="AlgoScope Logo" className="w-8 h-8" />
            </div>
            <span className="mt-1 text-2xl text-white font-bold tracking-tighter">
              AlgoScope
            </span>
          </Link>

          {/* Desktop Search */}
          <div className="hidden lg:flex flex-1 justify-center max-w-sm mx-8">
            <SearchBar />
          </div>

          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-1">
              {links.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className={`block rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      pathname === link.href
                        ? 'bg-indigo-500/20 text-indigo-300 ring-1 ring-indigo-500/40 font-semibold'
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="https://github.com/algoscope-hq/AlgoScope"
              className="inline-flex items-center rounded-xl bg-white px-5 py-2 text-sm font-bold text-black shadow-lg hover:bg-slate-200 transition-all duration-200 active:scale-95"
            >
              <img
                src={githubIcon}
                alt="Github Repository Link"
                className="w-7 h-5 pr-2 invert"
              />
              <span>Github</span>
            </Link>

            <div className="flex items-center gap-4 border-l border-white/10 pl-6">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                    Sign In
                  </button>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton
                  appearance={{
                    elements: {
                      userButtonAvatarBox: 'w-9 h-9 border border-white/10',
                    },
                  }}
                />
              </SignedIn>
            </div>
          </div>

          {/* 5. Apply the animation to the button */}
          <div className="flex items-center gap-4 md:hidden">
            <SignedIn>
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: 'w-8 h-8 border border-white/10',
                  },
                }}
              />
            </SignedIn>
            <motion.button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
              // Animate between 'open' and 'closed' states
              animate={open ? 'open' : 'closed'}
              className="inline-flex flex-col items-center justify-center gap-1 rounded-lg p-2 text-slate-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/20 transition-colors"
            >
              {/* 6. Remove old SVGs and add animated lines */}
              <Line variants={topVariants} />
              <Line variants={middleVariants} />
              <Line variants={bottomVariants} />
            </motion.button>
          </div>
        </div>
      </div>

      {/* 7. Animate the mobile menu dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            // Remove Tailwind's show/hide, let framer-motion handle it
            className="md:hidden border-t border-white/5 bg-slate-950/90 backdrop-blur-xl shadow-2xl rounded-b-2xl overflow-hidden"
            // Apply variants
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
              {/* Mobile Search */}
              <div className="mb-6 lg:hidden">
                <SearchBar />
              </div>
              <ul className="space-y-2">
                {links.map((link) => (
                  // Animate each link
                  <motion.li key={link.name} variants={menuItemVariants}>
                    <Link
                      to={link.href}
                      onClick={() => setOpen(false)}
                      className={`block rounded-xl px-4 py-3 text-base font-medium transition-all ${
                        pathname === link.href
                          ? 'bg-indigo-500/20 text-indigo-300 ring-1 ring-indigo-500/40 font-semibold'
                          : 'text-slate-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                variants={menuItemVariants}
                className="mt-6 flex flex-col gap-3"
              >
                <SignedOut>
                  <SignInButton mode="modal">
                    <button className="w-full rounded-xl bg-indigo-600 px-4 py-3 text-base font-bold text-white shadow-lg hover:bg-indigo-500 transition-all active:scale-95">
                      Sign In
                    </button>
                  </SignInButton>
                </SignedOut>
                <Link
                  to="https://github.com/algoscope-hq/AlgoScope"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center rounded-xl bg-white/5 border border-white/10 px-4 py-3 text-base font-bold text-white shadow-lg hover:bg-white/10 transition-all active:scale-95"
                >
                  Github
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
