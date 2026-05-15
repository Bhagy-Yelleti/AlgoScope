import { NextResponse } from 'next/server'

// Configuration for algorithm metadata (simplified version for middleware)
const algoDescriptions = {
  sort: {
    bubble: 'Interactive Bubble sort visualization. Watch how Bubble sort organizes data step-by-step.',
    selection: 'Learn Selection sort visually with real-time animations and step-by-step execution.',
    insertion: 'Understand Insertion sort with interactive visualizations and synchronized code.',
    quick: 'Explore Quick sort with real-time animations and recursive step tracking.',
    merge: 'Visualize Merge sort with interactive animations and synchronized code views.',
    heap: 'Understand Heap sort with interactive visualizations and performance metrics.',
    counting: 'Learn Counting sort visually with real-time animations and index tracking.',
    radix: 'Explore Radix sort with interactive visualizations and step-by-step execution.',
  },
  search: {
    bfs: 'Visualize BFS (Breadth First Search) graph traversal in real-time.',
    dfs: 'Learn DFS (Depth First Search) with interactive node exploration animations.',
  },
  spath: {
    dijkstra: "Discover paths using Dijkstra's shortest path algorithm visually.",
    bfs: 'Visualize Shortest Path using BFS with interactive graph animations.',
    astar: 'Explore A* shortest path algorithm with heuristic-based node exploration.',
  },
  ldssearch: {
    linear: 'Watch Linear search in action with real-time index tracking animations.',
    binary: 'Understand Binary search with step-by-step interactive array visualizations.',
  },
  adt: {
    stack: 'Visualize Stack data structure operations: Push, Pop, and Peek.',
    queue: 'Learn Queue data structure behavior with interactive Enqueue and Dequeue views.',
    tree: 'Explore Tree data structures with interactive node insertion and traversal animations.',
  },
}

export async function middleware(req) {
  const userAgent = req.headers.get('user-agent') || ''
  const url = new URL(req.url)
  
  // List of crawlers that typically don't run JS
  const isCrawler = /WhatsApp|Twitterbot|Discordbot|facebookexternalhit|LinkedInBot|Slackbot|TelegramBot/i.test(userAgent)
  
  if (isCrawler) {
    const pathname = url.pathname
    const algo = url.searchParams.get('algo')
    const type = url.searchParams.get('type')
    
    let title = 'AlgoScope | Interactive Algorithm Visualizer'
    let description = 'Learn algorithms visually with real-time execution, animations, and interactive visualizations.'
    
    // Determine dynamic title and description
    if (pathname === '/sort' && algo && algoDescriptions.sort[algo]) {
      const formattedAlgo = algo.charAt(0).toUpperCase() + algo.slice(1)
      title = `${formattedAlgo} Sort Visualizer | AlgoScope`
      description = algoDescriptions.sort[algo]
    } else if (pathname === '/search' && algo && algoDescriptions.search[algo]) {
      const formattedAlgo = algo.toUpperCase()
      title = `${formattedAlgo} Graph Search | AlgoScope`
      description = algoDescriptions.search[algo]
    } else if (pathname === '/spath' && algo && algoDescriptions.spath[algo]) {
      const formattedAlgo = algo.charAt(0).toUpperCase() + algo.slice(1)
      title = `${formattedAlgo} Shortest Path | AlgoScope`
      description = algoDescriptions.spath[algo]
    } else if (pathname === '/ldssearch' && algo && algoDescriptions.ldssearch[algo]) {
      const formattedAlgo = algo.charAt(0).toUpperCase() + algo.slice(1)
      title = `${formattedAlgo} Search Visualizer | AlgoScope`
      description = algoDescriptions.ldssearch[algo]
    } else if (pathname === '/adt' && type && algoDescriptions.adt[type]) {
      const formattedType = type.charAt(0).toUpperCase() + type.slice(1)
      title = `${formattedType} Visualization | AlgoScope`
      description = algoDescriptions.adt[type]
    }

    // Fetch the original index.html
    const response = await fetch(new URL('/index.html', req.url))
    let html = await response.text()

    // Inject the meta tags using more robust regex to handle newlines/spaces
    html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
    
    // Open Graph
    html = html.replace(/<meta\s+property="og:title"\s+content="[\s\S]*?"\s*\/?>/i, `<meta property="og:title" content="${title}" />`)
    html = html.replace(/<meta\s+property="og:description"\s+content="[\s\S]*?"\s*\/?>/i, `<meta property="og:description" content="${description}" />`)
    
    // Standard Description
    html = html.replace(/<meta\s+name="description"\s+content="[\s\S]*?"\s*\/?>/i, `<meta name="description" content="${description}" />`)
    
    // Twitter
    html = html.replace(/<meta\s+name="twitter:title"\s+content="[\s\S]*?"\s*\/?>/i, `<meta name="twitter:title" content="${title}" />`)
    html = html.replace(/<meta\s+name="twitter:description"\s+content="[\s\S]*?"\s*\/?>/i, `<meta name="twitter:description" content="${description}" />`)
    // Also handle property="twitter:..." if it still exists in some places
    html = html.replace(/<meta\s+property="twitter:title"\s+content="[\s\S]*?"\s*\/?>/i, `<meta name="twitter:title" content="${title}" />`)
    html = html.replace(/<meta\s+property="twitter:description"\s+content="[\s\S]*?"\s*\/?>/i, `<meta name="twitter:description" content="${description}" />`)

    return new Response(html, {
      headers: { 'Content-Type': 'text/html' },
    })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/sort', '/search', '/spath', '/ldssearch', '/adt'],
}
