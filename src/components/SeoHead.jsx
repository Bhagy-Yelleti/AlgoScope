import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_NAME = 'AlgoScope'
const SITE_URL = 'https://algo-scope-virid.vercel.app'
const DEFAULT_IMAGE = `${SITE_URL}/preview.png`
const DEFAULT_TITLE = 'AlgoScope | Interactive Algorithm Visualizer'
const DEFAULT_DESCRIPTION =
  'Visualize algorithms in real-time with interactive animations, synchronized code highlighting, and educational tools.'

const pageMetadata = {
  '/': {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
  },
  '/sort': {
    title: 'Sorting Visualizer | AlgoScope',
    description:
      'Explore sorting algorithms with interactive animations, step playback, and synchronized code views for bubble, merge, quick, heap, and more.',
  },
  '/search': {
    title: 'Graph Search Visualizer | AlgoScope',
    description:
      'Learn BFS, DFS, and graph traversal visually with animated node exploration and synchronized algorithm steps.',
  },
  '/spath': {
    title: 'Shortest Path Visualizer | AlgoScope',
    description:
      'Visualize shortest path algorithms with interactive graph animations and step-by-step execution for route discovery concepts.',
  },
  '/ldssearch': {
    title: 'Array Search Visualizer | AlgoScope',
    description:
      'Compare linear search and binary search with real-time animations, index tracking, and code-linked algorithm steps.',
  },
  '/adt': {
    title: 'Data Structures Explorer | AlgoScope',
    description:
      'Understand abstract data types visually with interactive views for stacks, queues, trees, and linked structure concepts.',
  },
  '/practice': {
    title: 'Algorithm Practice Sandbox | AlgoScope',
    description:
      'Practice algorithms directly in the browser with a multi-language code editor and instant feedback inside AlgoScope.',
  },
  '/about': {
    title: 'About AlgoScope',
    description:
      'Learn about AlgoScope, its mission, and the interactive features built to make algorithms easier to understand.',
  },
}

function setMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, selector.match(/"([^"]+)"/)?.[1] ?? '')
    document.head.appendChild(element)
  }

  element.setAttribute('content', value)
}

function setLink(selector, rel, href) {
  let element = document.head.querySelector(selector)

  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }

  element.setAttribute('href', href)
}

export default function SeoHead() {
  const { pathname } = useLocation()

  useEffect(() => {
    const metadata = pageMetadata[pathname] ?? {
      title: 'Page Not Found | AlgoScope',
      description:
        'The requested AlgoScope page could not be found. Explore algorithm visualizations, code walkthroughs, and learning tools from the homepage.',
      noIndex: true,
    }

    const canonicalUrl = `${SITE_URL}${pathname === '/' ? '/' : pathname}`
    const robotsContent = metadata.noIndex
      ? 'noindex, nofollow'
      : 'index, follow'

    document.title = metadata.title
    setLink('link[rel="canonical"]', 'canonical', canonicalUrl)
    setMeta('meta[name="description"]', 'name', metadata.description)
    setMeta('meta[name="robots"]', 'name', robotsContent)
    setMeta('meta[property="og:title"]', 'property', metadata.title)
    setMeta('meta[property="og:description"]', 'property', metadata.description)
    setMeta('meta[property="og:url"]', 'property', canonicalUrl)
    setMeta('meta[property="og:image"]', 'property', DEFAULT_IMAGE)
    setMeta(
      'meta[property="og:image:alt"]',
      'property',
      'AlgoScope interface preview showing algorithm visualizations'
    )
    setMeta('meta[property="twitter:title"]', 'property', metadata.title)
    setMeta(
      'meta[property="twitter:description"]',
      'property',
      metadata.description
    )
    setMeta('meta[property="twitter:image"]', 'property', DEFAULT_IMAGE)
    setMeta(
      'meta[property="twitter:image:alt"]',
      'property',
      'AlgoScope interface preview showing algorithm visualizations'
    )

    const structuredDataScript = document.getElementById(
      'algoscope-structured-data'
    )

    if (structuredDataScript) {
      structuredDataScript.textContent = JSON.stringify(
        {
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebSite',
              name: SITE_NAME,
              url: SITE_URL,
              description: DEFAULT_DESCRIPTION,
            },
            {
              '@type': 'SoftwareApplication',
              name: SITE_NAME,
              applicationCategory: 'EducationalApplication',
              operatingSystem: 'Web',
              url: canonicalUrl,
              image: DEFAULT_IMAGE,
              description: metadata.description,
            },
          ],
        },
        null,
        2
      )
    }
  }, [pathname])

  return null
}
