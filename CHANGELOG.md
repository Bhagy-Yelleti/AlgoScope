# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.8.0](https://github.com/algoscope-hq/AlgoScope/compare/v1.7.0...v1.8.0) (2026-05-25)


### Features

* add Auto/Step mode toggle for manual step control ([f41d98e](https://github.com/algoscope-hq/AlgoScope/commit/f41d98ed531f747ffdb047f90ca22737b09ac431))
* add keyboard shortcuts for visualization controls ([3bbda05](https://github.com/algoscope-hq/AlgoScope/commit/3bbda0567da4a569d5bbfb8a4a92d92e1ef35303)), closes [#336](https://github.com/algoscope-hq/AlgoScope/issues/336)
* add Sieve of Eratosthenes visualizer and fix math code line highlighting ([57e8a85](https://github.com/algoscope-hq/AlgoScope/commit/57e8a855b9d468e179bba3dad45c4d14e05af217))
* add string algo to search bar and explore bar ([3821c89](https://github.com/algoscope-hq/AlgoScope/commit/3821c89fdba50a3e004b5395cadfc9bb29ad220b))
* add test case manager ([50b8990](https://github.com/algoscope-hq/AlgoScope/commit/50b899033a838f36e8b9aa7883810f936b640dff))
* add test case manager with IndexedDB persistence and search ([6868689](https://github.com/algoscope-hq/AlgoScope/commit/68686892809e9cc48266cf52d8996540ed05ce0e))
* **graph:** add interactive graph canvas builder for BFS, DFS, and shortest-path visualizers ([0a1dea3](https://github.com/algoscope-hq/AlgoScope/commit/0a1dea30e27265832fd394d79c4403464fab17d1))
* **grid:** add weighted node traversal and interactive cost visualization ([2856d38](https://github.com/algoscope-hq/AlgoScope/commit/2856d38801b459be9128a9cdb4e1e44580ac7d24))
* implemented scroll to top button ([c3f0550](https://github.com/algoscope-hq/AlgoScope/commit/c3f05508b59ab42806fe5f282e360504d47a603e))
* **math:** add Fibonacci Visualizer with Golden Spiral and Recursion Tree modes ([f8acaab](https://github.com/algoscope-hq/AlgoScope/commit/f8acaab659742592d2a8a890f1765cc1a4b8688c))
* **navbar:** add Practice Sandbox to Explore dropdown ([20d48ad](https://github.com/algoscope-hq/AlgoScope/commit/20d48ad078301e4b67d64273725f5334e5c01e26))
* redesign 404 page with glitch effect and terminal animation ([72fa83b](https://github.com/algoscope-hq/AlgoScope/commit/72fa83be103fd83299f5dcc4f9e4f9272b67376a))
* **sort:** add custom array input and validation ([101c217](https://github.com/algoscope-hq/AlgoScope/commit/101c217f24e9f6e0cf8971a0cae6f2bba547ff3f))
* **ui:** add dynamic breadcrumb navigation for visualizer pages ([b07b1b5](https://github.com/algoscope-hq/AlgoScope/commit/b07b1b5db48b06b857287ac0cd55696a37e233b7))


### Bug Fixes

* add canvas resize handler and go back fallback ([6a87650](https://github.com/algoscope-hq/AlgoScope/commit/6a8765097c93344e46b42abccfff50b85efbee07))
* add scroll-to-top button ([52e8d90](https://github.com/algoscope-hq/AlgoScope/commit/52e8d90775e92f3d6c93394d0dc1a3965b9b87db))
* add scroll-to-top button ([a4dea58](https://github.com/algoscope-hq/AlgoScope/commit/a4dea58a30b37baf13c6fbc21fd1c3eda4ff67a1))
* added light mode visibility practice button and visible text ([f1134a4](https://github.com/algoscope-hq/AlgoScope/commit/f1134a4921d027226587eb1b3f6089e006a6ef03))
* allow duplicate values in BST and fix negative input bug on Enter ([53bacd5](https://github.com/algoscope-hq/AlgoScope/commit/53bacd565e818b2f981a373d908d0ecf653e963b))
* avoid blocking Space key on focused buttons and links ([2e45922](https://github.com/algoscope-hq/AlgoScope/commit/2e45922770f9c14103f961bb67d54093d9a5f873))
* **compare-mode:** clear stale sorting visualization state after interrupted execution ([#323](https://github.com/algoscope-hq/AlgoScope/issues/323)) ([bafd99b](https://github.com/algoscope-hq/AlgoScope/commit/bafd99b9ce7f93659a30d0092b45479f475a08f9))
* format ([9caf141](https://github.com/algoscope-hq/AlgoScope/commit/9caf141ad12d38a4e876ee37b6386e5a566341e0))
* format ([62914fc](https://github.com/algoscope-hq/AlgoScope/commit/62914fc105626fa2c06d2aa0d79beaca34d1ceb2))
* format ([c4b29ca](https://github.com/algoscope-hq/AlgoScope/commit/c4b29ca220677bd17c86be3a58b7267b0eec9237))
* format ([7516fee](https://github.com/algoscope-hq/AlgoScope/commit/7516fee7e9f10923199af97904996162545459c1))
* format ([417ae1a](https://github.com/algoscope-hq/AlgoScope/commit/417ae1ac353342993dabfd8de56f45bb33dd14f1))
* format & lint ([1346e5d](https://github.com/algoscope-hq/AlgoScope/commit/1346e5d2ecb6cd1a5f285331a14f4c681f611bc3))
* **graph:** address PR review for builder edits and stale traversals ([88e7825](https://github.com/algoscope-hq/AlgoScope/commit/88e78255c98e2d6d5f7dadc8bb5934d3cf6759e9))
* **graph:** show graph builder toolbar reliably on canvas ([7f97d97](https://github.com/algoscope-hq/AlgoScope/commit/7f97d97b306a3509978c51156c97220d45e2260c))
* **grid:** preserve weighted node styling during traversal ([5d9ccac](https://github.com/algoscope-hq/AlgoScope/commit/5d9ccacd99226608456afa8296efe9f44c04c480))
* improve Clerk dark mode profile UI visibility ([4a815f7](https://github.com/algoscope-hq/AlgoScope/commit/4a815f794fb5220cad874ad71567bc73c5596544))
* **layout:** resolve algorithm cards becoming hidden after page refresh ([7418d44](https://github.com/algoscope-hq/AlgoScope/commit/7418d442bcd31b62ad79802a888b3435f22e0cc5))
* lint ([b18ae73](https://github.com/algoscope-hq/AlgoScope/commit/b18ae73d272ffb36d4315ce382c5a82012cdfb94))
* lint ([6f14375](https://github.com/algoscope-hq/AlgoScope/commit/6f14375199bacbec4bb710c289f89256b4cef57c))
* lint ([e20542c](https://github.com/algoscope-hq/AlgoScope/commit/e20542cb55dc874c10c542eb604a5ed0ab0c1077))
* **lint:** resolve react-hooks violations in graph builder components ([4f73692](https://github.com/algoscope-hq/AlgoScope/commit/4f736929c744039833091291f306862e874ad220))
* **lint:** wrap treeState in useMemo, remove unused isLeaf variable ([6fa730e](https://github.com/algoscope-hq/AlgoScope/commit/6fa730ef37bc7a1599e5d995a144a8e690d939e7))
* resolve linting and formatting issues ([6bbacee](https://github.com/algoscope-hq/AlgoScope/commit/6bbacee4f55c4b054a31a141b28a2d4c747a00da))
* resolve production server startup issue ([a36949a](https://github.com/algoscope-hq/AlgoScope/commit/a36949a6b1036bfdab67cfbff60b6e2ebe8d9113))
* resolve text overlap in complexity sidebar ([16a6527](https://github.com/algoscope-hq/AlgoScope/commit/16a6527db020e32a9c03306f39c76f77c3884754))
* **sandbox:** harden Worker runtime against benchmark message spoofing ([#310](https://github.com/algoscope-hq/AlgoScope/issues/310)) ([6229885](https://github.com/algoscope-hq/AlgoScope/commit/62298853a0cf6ba7687beb60cc70745d57e83ad5))
* scale canvas by device pixel ratio for Retina displays ([6bd8ffc](https://github.com/algoscope-hq/AlgoScope/commit/6bd8ffcb94f234d7c7005f0489b2bc98b6be2ea7))
* step insights now visible by dafault ([c810643](https://github.com/algoscope-hq/AlgoScope/commit/c810643c1bd076b0ec12d004e0066ea69ed32e18))
* sync live code block with custom array input in Kadane's and Moore's Algo ([b45c0a3](https://github.com/algoscope-hq/AlgoScope/commit/b45c0a3d8939a9fddc93b3045663e6340b77afb5))
* **ui:** improve breadcrumb accessibility and route labels ([0a0878b](https://github.com/algoscope-hq/AlgoScope/commit/0a0878b803aa7ecbe01935876e68a6b9e6201ed4))
* **utils:** enhance input validation and bounds safety in generateRandomArray and calculateStepDelay ([4917203](https://github.com/algoscope-hq/AlgoScope/commit/49172039bd86b09dc6e67ab3ba37e2310b374801))


### Performance Improvements

* **seo:** optimize Google Font loading in index.html ([deb8d9e](https://github.com/algoscope-hq/AlgoScope/commit/deb8d9eeaf7d339ab5645961b8a97c151417873f))
* **ui:** optimize breadcrumb pathname processing ([dc9425d](https://github.com/algoscope-hq/AlgoScope/commit/dc9425d17754a5807317ae5cfb25b5d94423885f))

## [1.7.0] - 2026-05-22

### Added

- implement dual execution comparison mode in practice sandbox
- Improve Footer Section Design, Layout, and Responsiveness
- improve sign-in page UI and accessibility
- add grid-specific shortest path source implementations
- add grid-specific shortest path source implementations
- add speed and language controls to MathSoloVisualizer
- add code download functionality to sandbox editor
- add grid-based shortest path visualizer
- implement step backward functionality in visualizers
- add download button for code snippets
- add session history panel for recent algorithms

### Fixed

- format
- format
- improve keyboard accessibility for algorithm cards
- remove unused floyd-warshall parameter
- improve grid shortest path implementations
- add missing Math Theory to search and explore bar
- stabilize grid visualizer interactions
- resolve lint issues in grid visualizer
- resolve grid visualizer review issues
- resolve linting issues in Navbar (cascading renders and missing dependencies)
- resolve navbar hook dependency warning
- improve session history stability
- fixed the bug where the size decreased when clicked
- Search bar put in the center

### Changed

- optimize grid visualizer rendering
- move recent algorithms into explore dropdown

### 📂 Changed Files

```
- 📁 **.github/**
  - 📁 **ISSUE_TEMPLATE/**
    - ✏️ bug_report.yml
    - ✏️ feature_request.yml
  - 📁 **workflows/**
    - ✏️ conventional-commits.yml
    - ✏️ release-please.yml
- 📁 **scripts/**
  - ✏️ append-file-tree.cjs
- 📁 **src/**
  - 📁 **algorithms/**
    - 📁 **backtracking/**
      - ➕ backtrackingSources.js
    - 📁 **mathTheory/**
      - ➕ mathTheorySources.jsx
      - ➕ mathTheorySteps.jsx
    - 📁 **searching/**
      - ✏️ shortestPathSources.js
  - 📁 **components/**
    - 📁 **arraySearch/**
      - ✏️ Visualizer.jsx
    - 📁 **backtrackingAlgo/**
      - ➕ CanvasNQueens.jsx
      - ➕ CanvasSudoku.jsx
      - ➕ ComparisonMode.jsx
      - ➕ MenuSetAlgoBacktracking.jsx
      - ➕ sudokuUtils.js
      - ➕ VisualizerPage.jsx
    - 📁 **MathTheory/**
      - ➕ CanvasBitManip.jsx
      - ➕ CanvasFastExpo.jsx
      - ➕ CanvasGCD.jsx
      - ➕ MathComparisonMode.jsx
      - ➕ MathSoloVisualizer.jsx
    - 📁 **shortestPathAlgo/**
      - ➕ GridVisualizer.jsx
      - ✏️ ShortestPathPage.jsx
    - 📁 **sortingAlgo/**
      - ✏️ Visualizer.jsx
    - 📁 **visualizer/**
      - ✏️ CodePanel.jsx
      - ✏️ useStepPlayback.js
    - ✏️ AlgoCard.jsx
    - ✏️ AppLayout.jsx
    - ✏️ CodeEditor.jsx
    - ✏️ Footer.jsx
    - ✏️ Home.jsx
    - ✏️ Navbar.jsx
    - ✏️ PracticePage.jsx
    - ✏️ SearchBar.jsx
  - 📁 **context/**
    - ➕ theme.js
    - ➕ ThemeProvider.jsx
    - ➕ useTheme.js
  - 📁 **data/**
    - ✏️ complexityMap.js
  - ✏️ App.css
  - ✏️ App.jsx
  - ✏️ input.css
  - ✏️ main.jsx
- ❌ .env.example
- ✏️ CHANGELOG.md
- ✏️ index.html
- ✏️ package-lock.json
- ✏️ package.json
```

## [1.6.1] - 2026-05-19

### Fixed

- checkout main branch instead of detached HEAD for changelog rebuild

### 📂 Changed Files

```
- 📁 **.github/**
  - 📁 **workflows/**
    - ✏️ release-please.yml
    - ❌ release.yml
- ✏️ CHANGELOG.md
```

## [1.6.0] - 2026-05-19

### Added

- pr tamplate add
- refine Comparison Mode SEO metadata and update sitemap
- add dynamic SEO metadata for Comparison Mode and missing routes
- tooltip hover jsx file added to src/components
- implement interactive binary heap and priority queue visualizers
- add best average and worst case complexity analysis
- dynamically display Ctrl/Enter or ⌘/Return based on user OS
- add algorithm comparison mode with side-by-side visualization for all the types of algorithm
- Moore Voting Algorithm
- Moore Voting Algorithm
- Moore Voting Algorithm
- Moore Voting Algorithm
- add interactive complexity graph visualization

### Fixed

- tooltip hover feature added to all category files
- reset query and results state on modal close
- added Moore's Voting Algorithm to searchbar
- adjust vertical spacing for status display banner
- format & lint
- show graph only for selected algorithm
- format & lint
- format ComplexityGraph component
- folder fix
- update lockfile and dependencies

### Changed

- SEO update

### 📂 Changed Files

```
- 📁 **.github/**
  - 📁 **ISSUE_TEMPLATE/**
    - ➕ bug_report.yml
    - ➕ config.yml
    - ➕ feature_request.yml
  - 📁 **workflows/**
    - ➕ conventional-commits.yml
    - ➕ release-please.yml
    - ➕ release.yml
  - ➕ pull_request_template.md
- 📁 **public/**
  - ✏️ sitemap.xml
- 📁 **scripts/**
  - ➕ append-file-tree.cjs
- 📁 **src/**
  - 📁 **algorithms/**
    - 📁 **mooreVoting/**
      - ➕ mooreVotingSources.js
  - 📁 **assets/**
    - 📁 **new-home-images/**
      - ➕ MooreVoting.png
  - 📁 **components/**
    - 📁 **arraySearch/**
      - ➕ ComparisonMode.jsx
      - ✏️ Visualizer.jsx
      - ✏️ VisualizerPage.jsx
    - 📁 **dataStructures/**
      - ✏️ adtSources.js
      - ➕ binaryHeapIV.jsx
      - ➕ ComparisonMode.jsx
      - ✏️ DSLayout.jsx
      - ➕ priorityQueueIV.jsx
    - 📁 **kadaneAlgo/**
      - ✏️ CanvasKadane.jsx
      - ✏️ MenuSetAlgoKadane.jsx
    - 📁 **mooreVotingAlgo/**
      - ➕ CanvasMooreVoting.jsx
      - ➕ MenuSetAlgoMooreVoting.jsx
      - ➕ VisualizerPage.jsx
    - 📁 **searchAlgo/**
      - ➕ ComparisonMode.jsx
      - ✏️ MenuSelectAlgorithm.jsx
      - ✏️ MenuSelectNodeSearch.jsx
      - ✏️ VisualizerPage.jsx
    - 📁 **shortestPathAlgo/**
      - ➕ ComparisonMode.jsx
      - ✏️ MenuSelectNodesShortestPath.jsx
      - ✏️ MenuSetAlgoShortestPath.jsx
      - ✏️ ShortestPathPage.jsx
    - 📁 **sortingAlgo/**
      - ➕ ComparisonMode.jsx
      - ✏️ Visualizer.jsx
      - ✏️ VisualizerPage.jsx
    - ✏️ ComplexityCard.jsx
    - ➕ ComplexityGraph.jsx
    - ✏️ Footer.jsx
    - ✏️ Home.jsx
    - ✏️ Navbar.jsx
    - ✏️ SearchBar.jsx
    - ✏️ SeoHead.jsx
    - ✏️ SpeedSlider.jsx
    - ➕ Tooltip.jsx
  - 📁 **data/**
    - ✏️ complexityMap.js
  - ✏️ App.jsx
- ➕ .coderabbit.yml
- ❌ AlgoScope.zip
- ✏️ CHANGELOG.md
- ✏️ package-lock.json
- ✏️ package.json
- ✏️ README.md
```

## [1.5.0] - 2026-05-17

### Added

- add multi-language code viewer for ADT modules
- add +/- precision buttons to speed control slider
- Add Copy Code button to CodeEditor component
- add Shell Sort algorithm visualization
- move Practice button from Navbar to hero CTA
- add close (X) button to search modal
- implement multi-language support across searching, sorting, and shortest path visualizers
- convert navbar search into modal search UI
- convert navbar search into modal search UI
- Clerk auth add
- add explore dropdown and move secondary links to footer
- add Vercel Middleware to serve dynamic SEO metadata to crawlers
- implement dynamic SEO metadata and refactor Visualizer to use derived state
- improve audio error handling in speed slider
- add tick sound feedback to speed slider
- backend init+lint fix
- backend init
- refactor Terminal component to use forwardRef and implement smooth scrolling to console
- implement JavaScript execution and output terminal in Practice Sandbox
- enable font ligatures in CodeEditor
- fix PracticePage width and standardize premium layout
- optimize CodeEditor and PracticePage for premium aesthetic
- Practice area with code editor add

### Fixed

- clerk dark mode
- lint & formating
- resolve status display layout misalignment and spacing issues
- lint & formating
- align search bar vertically in Navbar with items-center
- Adding Array Search, ADTs and Kadane's Algorithm to the Explore section of the Footer
- solved linting issues
- apply prettier formatting
- add ADT, Array Search, and Kadane's algorithm to explore dropdown
- add ADT, Array Search, and Kadane's algorithm to explore dropdown
- resolve main.jsx merge conflict
- lint & formating
- lint & formating
- format and review
- run prettier to resolve CI/CD formatting failures
- reset starting node dropdown in search module
- reset source and target dropdowns in pathfinding module
- use 'name' attribute for Twitter meta tags to improve social sharing
- a small linting and format fix
- formating fix
- README, about bimbok
- remove redundant AppLayout in PracticePage to fix double header issue
- linting error fix
- utilize more space
- replace dim footer logo with logo3

### Changed

- resolve merge conflicts keeping UI layout improvements
- improve UI layout and UX for sort and arraysearch visualizer pages
- improve UI layout and UX for visualizer pages

### 📂 Changed Files

```
- 📁 **api/**
  - ➕ .env.example
  - ➕ index.js
  - ➕ package-lock.json
  - ➕ package.json
  - ➕ vercel.json
- 📁 **public/**
  - ➕ preview.png
  - ➕ robots.txt
  - ➕ sitemap.xml
- 📁 **src/**
  - 📁 **algorithms/**
    - 📁 **kadane/**
      - ➕ kadaneSources.js
    - 📁 **searching/**
      - ✏️ binarySearchSteps.js
      - ✏️ graphSearchSources.js
      - ✏️ linearSearchSteps.js
      - ➕ searchingSources.js
      - ✏️ shortestPathSources.js
    - 📁 **sorting/**
      - ✏️ bubbleSortSteps.js
      - ✏️ countingSortSteps.js
      - ✏️ heapSortSteps.js
      - ✏️ insertionSortSteps.js
      - ✏️ mergeSortSteps.js
      - ✏️ quickSortSteps.js
      - ✏️ radixSortSteps.js
      - ✏️ selectionSortSteps.js
      - ➕ shellSortSteps.js
  - 📁 **assets/**
    - 📁 **new-home-images/**
      - ➕ KadaneImg.png
    - ➕ click.wav
  - 📁 **components/**
    - 📁 **about/**
      - ✏️ About.jsx
    - 📁 **arraySearch/**
      - ✏️ Visualizer.jsx
      - ✏️ VisualizerPage.jsx
    - 📁 **dataStructures/**
      - ➕ adtSources.js
      - ✏️ DSLayout.jsx
      - ✏️ stackIV.jsx
    - 📁 **kadaneAlgo/**
      - ➕ CanvasKadane.jsx
      - ➕ MenuSetAlgoKadane.jsx
      - ➕ VisualizerPage.jsx
    - 📁 **searchAlgo/**
      - ✏️ CanvasSearching.jsx
      - ✏️ MenuSelectAlgorithm.jsx
      - ✏️ MenuSelectNodeSearch.jsx
      - ✏️ VisualizerPage.jsx
    - 📁 **shortestPathAlgo/**
      - ✏️ CanvasShortestPath.jsx
      - ✏️ MenuSelectNodesShortestPath.jsx
      - ✏️ MenuSetAlgoShortestPath.jsx
      - ✏️ ShortestPathPage.jsx
    - 📁 **sortingAlgo/**
      - ✏️ Visualizer.jsx
      - ✏️ VisualizerPage.jsx
    - 📁 **visualizer/**
      - ✏️ CodePanel.jsx
      - ✏️ useStepPlayback.js
    - ✏️ AlgoCard.jsx
    - ✏️ AppLayout.jsx
    - ➕ CodeEditor.jsx
    - ➕ ComplexityCard.jsx
    - ✏️ Footer.jsx
    - ✏️ Home.jsx
    - ✏️ Navbar.jsx
    - ➕ PracticePage.jsx
    - ✏️ SearchBar.jsx
    - ➕ SeoHead.jsx
    - ✏️ SpeedSlider.jsx
    - ✏️ StatusDisplay.jsx
  - 📁 **data/**
    - ➕ complexityMap.js
  - 📁 **lib/**
    - ➕ utils.js
  - ✏️ App.jsx
  - ✏️ input.css
  - ✏️ main.jsx
- ➕ .env.example
- ✏️ .gitignore
- ➕ AlgoScope.zip
- ➕ CHANGELOG.md
- ✏️ CONTRIBUTING.md
- ✏️ eslint.config.js
- ✏️ index.html
- ✏️ package-lock.json
- ✏️ package.json
- ✏️ README.md
- ✏️ vercel.json
```

## [1.2.0] - 2026-05-11

### Added

- version bump
- search add(ctrl+k)
- redesign About page for a premium aesthetic
- add language selection to all algorithm sections
- refactor array search section to use unified playback system
- refactor all sorting algorithms to use step-playback engine
- improve bubble sort visualizer layout
- "new live code in bubble sort"
- add discord icon to footer and fix alignment
- discord-server invite link add

### Fixed

- version bumb
- add descriptive alt text to Navbar logo image
- linting fix
- formatting fix
- refine code viewer layout
- build, lint, format
- update broken footer links
- format - 2
- bubble sort fix page
- format
- repo links update
- dependency array add
- Canvas reload fix+lint fix2
- Canvas reload fix+lint fix
- Canvas reload fix
- add JavaScript heap sort implementation to CodeDisplay
- replace deleted author images with github profile urls
- formating fix
- resolve linting errors and improve component structure

### Changed

- implement route-level lazy loading and component memoization

### 📂 Changed Files

```
- 📁 **.flowbite-react/**
  - ❌ class-list.json
  - ❌ config.json
  - ❌ init.tsx
- 📁 **.github/**
  - 📁 **workflows/**
    - ➕ pipelines.yml
- 📁 **.vscode/**
  - ❌ extensions.json
- 📁 **public/**
  - ➕ _redirects
  - ➕ logo3.png
- 📁 **src/**
  - 📁 **algorithms/**
    - 📁 **searching/**
      - ➕ binarySearchSteps.js
      - ➕ graphSearchSources.js
      - ➕ linearSearchSteps.js
      - ➕ shortestPathSources.js
    - 📁 **sorting/**
      - ➕ bubbleSortSteps.js
      - ➕ countingSortSteps.js
      - ➕ heapSortSteps.js
      - ➕ insertionSortSteps.js
      - ➕ mergeSortSteps.js
      - ➕ quickSortSteps.js
      - ➕ radixSortSteps.js
      - ➕ selectionSortSteps.js
  - 📁 **assets/**
    - 📁 **old-home-images/**
      - ❌ bfs_dfs.png
      - ❌ graph.png
      - ❌ new-arr.png
      - ❌ Picture1.png
    - ❌ goku.png
    - ❌ logo.png
    - ❌ sukuna.png
  - 📁 **components/**
    - 📁 **about/**
      - ✏️ About.jsx
    - 📁 **arraySearch/**
      - ❌ BinarySearch.jsx
      - ❌ CodeDisplay.jsx
      - ❌ LinearSearch.jsx
      - ➕ Visualizer.jsx
      - ✏️ VisualizerPage.jsx
    - 📁 **dataStructures/**
      - ✏️ stackIV.jsx
      - ✏️ treeIV.jsx
    - 📁 **searchAlgo/**
      - ✏️ CanvasSearching.jsx
      - ❌ CodeDisplay.jsx
      - ✏️ MenuSelectAlgorithm.jsx
      - ❌ MenuSetAlgoSearch.jsx
      - ✏️ VisualizerPage.jsx
    - 📁 **shortestPathAlgo/**
      - ✏️ CanvasShortestPath.jsx
      - ❌ CodeDisplayShortestPath.jsx
      - ✏️ ShortestPathPage.jsx
    - 📁 **sortingAlgo/**
      - ❌ CodeDisplay.jsx
      - ✏️ Visualizer.jsx
      - ✏️ VisualizerPage.jsx
    - 📁 **visualizer/**
      - ➕ CodePanel.jsx
      - ➕ useStepPlayback.js
    - ➕ AppLayout.jsx
    - ✏️ Footer.jsx
    - ✏️ Home.jsx
    - ✏️ Navbar.jsx
    - ➕ PageNotFound.jsx
    - ➕ SearchBar.jsx
    - ✏️ SpeedSlider.jsx
    - ✏️ StatusDisplay.jsx
  - 📁 **lib/**
    - ❌ utils.js
  - ✏️ App.jsx
  - ❌ output.css
- ✏️ .gitignore
- ❌ 2026-01-01-204659_hyprshot.png
- ➕ CODE_OF_CONDUCT.md
- ❌ components.json
- ✏️ CONTRIBUTING.md
- ✏️ eslint.config.js
- ✏️ index.html
- ✏️ jsconfig.json
- ✏️ nginx.conf
- ✏️ package-lock.json
- ✏️ package.json
- ✏️ README.md
- ✏️ vercel.json
- ✏️ vite.config.js
- ❌ yarn.lock
```

## [1.0.0] - 2026-05-07

### Added

- README update+CONTRIBUTING add
- add prominent arrow pointing to stack top
- stack, queue, tree is added.
- add smooth scroll to 'Start Exploring' button and fix eslint config
- add copy code button to code viewers

### Fixed

- ensure async animations complete reliably using onComplete

### Changed

- update home page images and organize assets

### 📂 Changed Files

```
- 📁 **.flowbite-react/**
  - ➕ class-list.json
  - ➕ config.json
  - ➕ init.tsx
- 📁 **.github/**
  - 📁 **workflows/**
    - ➕ main.yml
- 📁 **.vscode/**
  - ➕ extensions.json
- 📁 **public/**
  - ➕ logo.png
  - ➕ logo2.png
- 📁 **src/**
  - 📁 **assets/**
    - 📁 **new-home-images/**
      - ➕ adt.png
      - ➕ array.png
      - ➕ search.png
      - ➕ shortestPath.png
      - ➕ traversal.png
    - 📁 **old-home-images/**
      - ➕ bfs_dfs.png
      - ➕ graph.png
      - ➕ new-arr.png
      - ➕ Picture1.png
    - ➕ github-mark-white.svg
    - ➕ goku.png
    - ➕ logo.png
    - ➕ logo2.png
    - ➕ sukuna.png
  - 📁 **components/**
    - 📁 **about/**
      - ➕ About.jsx
      - ➕ AuthorCard.jsx
      - ➕ FeatureCard.jsx
    - 📁 **arraySearch/**
      - ➕ BinarySearch.jsx
      - ➕ CodeDisplay.jsx
      - ➕ LinearSearch.jsx
      - ➕ VisualizerPage.jsx
    - 📁 **dataStructures/**
      - ➕ DSLayout.jsx
      - ➕ queueIV.jsx
      - ➕ stackIV.jsx
      - ➕ treeIV.jsx
    - 📁 **searchAlgo/**
      - ➕ CanvasSearching.jsx
      - ➕ CodeDisplay.jsx
      - ➕ MenuSelectAlgorithm.jsx
      - ➕ MenuSelectNodeSearch.jsx
      - ➕ MenuSetAlgoSearch.jsx
      - ➕ VisualizerPage.jsx
    - 📁 **shortestPathAlgo/**
      - ➕ CanvasShortestPath.jsx
      - ➕ CodeDisplayShortestPath.jsx
      - ➕ MenuSelectNodesShortestPath.jsx
      - ➕ MenuSetAlgoShortestPath.jsx
      - ➕ ShortestPathPage.jsx
    - 📁 **sortingAlgo/**
      - ➕ CodeDisplay.jsx
      - ➕ Visualizer.jsx
      - ➕ VisualizerPage.jsx
    - ➕ AlgoCard.jsx
    - ➕ Footer.jsx
    - ➕ Home.jsx
    - ➕ Navbar.jsx
    - ➕ SpeedSlider.jsx
    - ➕ StatusDisplay.jsx
  - 📁 **lib/**
    - ➕ utils.js
  - ➕ App.css
  - ➕ App.jsx
  - ➕ input.css
  - ➕ main.jsx
  - ➕ output.css
- ➕ .dockerignore
- ➕ .gitignore
- ➕ .prettierrc
- ➕ 2026-01-01-204659_hyprshot.png
- ➕ components.json
- ➕ CONTRIBUTING.md
- ➕ Dockerfile
- ➕ eslint.config.js
- ➕ index.html
- ➕ jsconfig.json
- ➕ LICENSE
- ➕ nginx.conf
- ➕ package-lock.json
- ➕ package.json
- ➕ README.md
- ➕ vercel.json
- ➕ vite.config.js
- ➕ yarn.lock
```
