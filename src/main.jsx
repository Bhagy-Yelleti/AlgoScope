import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ClerkProvider } from '@clerk/clerk-react'
import { simple } from '@clerk/themes'
import './input.css'
import App from './App.jsx'

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Missing Publishable Key')
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider
      publishableKey={PUBLISHABLE_KEY}
      localization={{
        signIn: {
          start: {
            title: 'Sign In to AlgoScope!',
            subtitle: 'Welcome!',
          },
        },
      }}
      afterSignOutUrl="/"
      appearance={{
        baseTheme: simple,
        variables: {
          colorPrimary: '#8b5cf6',
          colorText: '#ffffff',
          colorTextSecondary: '#a1a1aa',
          colorBackground: '#0f0f0f',
          colorInputText: '#07189D',
          borderRadius: '12px',
          colorBorder: '#27272a',
          colorPrimaryText: '#ffffff',
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          spacingUnit: '1rem',
          colorInputBorder: '#3f3f46',
          colorInputPlaceholder: '#71717a',
          shadowShimmer: '0 0 20px #8B5CF64D',
        },
        elements: {
          card: {
            background: `radial-gradient(circle at center,rgba(125, 211, 252, 0.35) 0%, rgba(30, 41, 59, 0.9) 35%,#020617 75% ) `,
            backdropFilter: 'blur(12px)',
            boxShadow: '0 0 40px rgba(56, 189, 248, 0.15)',
          },

          formFieldInput: {
            background: 'rgba(15, 23, 42, 0.75)',
            border: '1px solid #1e293b',
            color: '#ffffff',
            backdropFilter: 'blur(8px)',
          },

          footer: {
            background: 'black',
          },

          footerAction: {
            background: 'black',
          },

          footerActionText: {
            color: '#a1a1aa',
          },

          footerActionLink: {
            color: '#8b5cf6',
          },

          socialButtonsBlockButtonText: {
            color: '#ffffff',
            fontWeight: '500',
          },

          userButtonPopoverActionButton: {
            color: '#ffffff !important',
            background: 'transparent',

            '&:hover': {
              background: '#111827',
              color: '#ffffff !important',
            },

            '&:focus': {
              color: '#ffffff !important',
            },

            '&:active': {
              color: '#ffffff !important',
            },
          },

          userButtonPopoverActionButtonText: {
            color: '#ffffff !important',
          },

          userButtonPopoverActionButtonIcon: {
            color: '#8b5cf6 !important',
          },

          formButtonPrimary: {
            background: `radial-gradient(circle at center,rgba(125, 211, 252, 0.35) 0%,rgba(30, 41, 59, 0.9) 35%,#020617 75%)`,
            borderColor: 'transparent',
            boxShadow: 'none !important',
            color: '#ffffff',
            outline: 'none',

            '&:focus': {
              boxShadow: 'none !important',
              outline: 'none',
            },
            '&:hover': {
              background: `radial-gradient(circle at center,rgba(125, 211, 252, 0.35) 0%,rgba(30, 41, 59, 0.9) 35%,#020617 75%)`,
            },
          },
        },
      }}
    >
      <App />
    </ClerkProvider>
  </StrictMode>
)
