# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.10.0](https://github.com/algoscope-hq/AlgoScope/compare/v1.9.0...v1.10.0) (2026-06-06)


### Features

* add aria-label to LinkedIn icon buttons for accessibility ([38d08c1](https://github.com/algoscope-hq/AlgoScope/commit/38d08c1a67321159c50e23bb5d1524d5678cae9c))
* add disjoint set union visualizer ([2888149](https://github.com/algoscope-hq/AlgoScope/commit/2888149dfa88719e416c179b6c876e96b39ededa))
* Add DP Optimization Journey visualizer with recursion tree and space complexity analysis ([849fa1c](https://github.com/algoscope-hq/AlgoScope/commit/849fa1caf8d8a4198b5075a1346d09c0c7e3ceb8))
* add FFT algorithm visualization ([85c4709](https://github.com/algoscope-hq/AlgoScope/commit/85c47096d792fbd0112581f4459ce6074f08fb66))
* add graph coloring visualizer ([e348876](https://github.com/algoscope-hq/AlgoScope/commit/e3488769a6539c3a0843ce6a929cd9803814ce36))
* add LinkedIn icons for both maintainers to footer social links ([e7f34f5](https://github.com/algoscope-hq/AlgoScope/commit/e7f34f5ead4306d116222d0d8788bc58c3d84c0e))
* add math theory deep links ([1a0cd3a](https://github.com/algoscope-hq/AlgoScope/commit/1a0cd3ad526907c6e8f8a5407db617294f2b4a16))
* add operating systems section and category page ([0b84962](https://github.com/algoscope-hq/AlgoScope/commit/0b84962456d00f579c8d09667bd5314de9414c1a))
* add reset all functionality to grid visualizer ([ef7b230](https://github.com/algoscope-hq/AlgoScope/commit/ef7b230559edf275ddff331478c0e20e08298133))
* add scroll-to-bottom button alongside scroll-to-top ([c5ef1d0](https://github.com/algoscope-hq/AlgoScope/commit/c5ef1d0ef0e9d44262f86448ef54c24de42f39b6))
* centralize app version from package.json and display dynamically across UI ([42822b8](https://github.com/algoscope-hq/AlgoScope/commit/42822b85d5588d9505f1b4d22ae566415e65ec21))
* implement guided onboarding tour spotlight on home page ([f9ae74a](https://github.com/algoscope-hq/AlgoScope/commit/f9ae74ad5165a8fffaae07168c5fd2502816e430))
* improve onboarding tour accessibility, restore previous button, and add mobile selector fallbacks ([64914b2](https://github.com/algoscope-hq/AlgoScope/commit/64914b2bf4ddaa09ff9950b856e2f590844a9423))
* updated search and explore bar ([649e921](https://github.com/algoscope-hq/AlgoScope/commit/649e9219d86683e4381042c3c1f5f2d918432593))
* updated the searchbar with dsu and dp-journey ([a34188a](https://github.com/algoscope-hq/AlgoScope/commit/a34188ad71e6e69a399403f2a50dfee8121619f4))


### Bug Fixes

* add CORS restrictions, Helmet, rate limiting, and body size limit ([670659c](https://github.com/algoscope-hq/AlgoScope/commit/670659c6fa213d31dcff120e513b06ff84750198)), closes [#551](https://github.com/algoscope-hq/AlgoScope/issues/551)
* add tooltip and clearer terminal text for non-JS languages in Practice Sandbox ([afa2709](https://github.com/algoscope-hq/AlgoScope/commit/afa2709610921ca366a17724c000a1b39dd82bb5))
* added code highlighting to Dynamic Programming ([973adec](https://github.com/algoscope-hq/AlgoScope/commit/973adeccaf3e72c7f5729ee00e87818ec24e7c69))
* address CodeRabbit review comments ([70360c8](https://github.com/algoscope-hq/AlgoScope/commit/70360c8899513fb95eb25c1c9f3fbf5e77fbe912))
* address review comments ([1b4c9b0](https://github.com/algoscope-hq/AlgoScope/commit/1b4c9b041ba7a4cdc681c4aae90e89ac4e8a174b))
* AlgoCard vanish issue ([ec5da92](https://github.com/algoscope-hq/AlgoScope/commit/ec5da926c88d43df5b7137b2d7ea27f1f4caeab1))
* align footer array search card copy ([6f1b839](https://github.com/algoscope-hq/AlgoScope/commit/6f1b839861c0c752365ba22a786bbea5c5d65fdb))
* clamp oversized FFT inputs to maximum supported size ([972324c](https://github.com/algoscope-hq/AlgoScope/commit/972324cd5b0a2d62758d9195d85239653d821f7a))
* enhance hero meta items with icons and background tags for better visual hierarchy ([5454150](https://github.com/algoscope-hq/AlgoScope/commit/545415077bfe2376f748af5582a1967845bbdaa1))
* filter test case seeding check to current algorithm instead of global db emptiness ([c822edc](https://github.com/algoscope-hq/AlgoScope/commit/c822edcf70b873294dc0ad4e55f1af8283a87cd8))
* Fixed the Algo Card ([230fd25](https://github.com/algoscope-hq/AlgoScope/commit/230fd251f9a8e0cb9a2b0a64ec053fe9eca7705c))
* format ([5bdd124](https://github.com/algoscope-hq/AlgoScope/commit/5bdd12404514e922cc10140287ec6290607dac9f))
* format App.jsx router setup ([e3cf0ab](https://github.com/algoscope-hq/AlgoScope/commit/e3cf0ab96acbcc445ed45c1bc90d7c950cab0e14))
* format code with prettier ([3d7c770](https://github.com/algoscope-hq/AlgoScope/commit/3d7c770968b607aaf5f3b9cef5eea2511b874055))
* hide scroll buttons on non-scrollable pages ([1617f79](https://github.com/algoscope-hq/AlgoScope/commit/1617f7957f348ff6e93e90f00a451432f81b936f))
* improve Light Mode text and code readability ([e2825ee](https://github.com/algoscope-hq/AlgoScope/commit/e2825ee47e6acc00813ffaeccd155d970883bd43))
* improve search modal focus management ([ce9465d](https://github.com/algoscope-hq/AlgoScope/commit/ce9465d42146f657ef18959fb9985faa906bba5d))
* Improve the sign in button visibility ([6f4d212](https://github.com/algoscope-hq/AlgoScope/commit/6f4d2123aded96174ae77dee2757f0839f55ca17))
* integrate useKeyboardShortcuts into Sorting, Shortest Path, and Backtracking visualizers ([f4c941c](https://github.com/algoscope-hq/AlgoScope/commit/f4c941c468846682dd6369acd5567e9e8789f528))
* lint & format ([897aa59](https://github.com/algoscope-hq/AlgoScope/commit/897aa5980b92e234c27d3cb741ffefb52f439d43))
* lint & format ([9e3552c](https://github.com/algoscope-hq/AlgoScope/commit/9e3552c98ccd72655af25564bfb36b9ee29d7dc5))
* lint & format ([536e09b](https://github.com/algoscope-hq/AlgoScope/commit/536e09b890830b4345f4f2230843d1a46ac36d69))
* make explore dropdown keyboard accessible ([cde006a](https://github.com/algoscope-hq/AlgoScope/commit/cde006a99ddc34478ccfdc62b0f288927145dea3))
* MCQ quiz ends early after answering last question ([ae6c067](https://github.com/algoscope-hq/AlgoScope/commit/ae6c0676e20bddcda5bb7b94f2e6edf51614de57))
* **metadata:** update repository and issue tracker URLs ([a749433](https://github.com/algoscope-hq/AlgoScope/commit/a7494330db88aae85555bbc50c637f1c850f57b9))
* Navbar Practice and Challenge links now highlight on active route ([a6c5d15](https://github.com/algoscope-hq/AlgoScope/commit/a6c5d15115584633d4d496f8af0b58c351f4822e))
* resolve stale visualizer states and router recreation ([3a2f051](https://github.com/algoscope-hq/AlgoScope/commit/3a2f051a3e92ca56f6088096bc39fefc5b33f257))
* resolve synchronous state updates in visualizer useEffect hooks ([8905bd9](https://github.com/algoscope-hq/AlgoScope/commit/8905bd9e5c7e90e924c78da1a500200cfc772278))
* resolve unreachable path bug when source and target are the same node ([#496](https://github.com/algoscope-hq/AlgoScope/issues/496)) ([fee2f07](https://github.com/algoscope-hq/AlgoScope/commit/fee2f072fc962deccc88944dd9c41577df9e38ee))
* Sieve of Eratosthenes visualizer crashes on decimal inputs ([d7b6596](https://github.com/algoscope-hq/AlgoScope/commit/d7b6596bec82e9bcba8c7550dfa461cb648c3413))
* Stale path highlights persist when modifying grid after algorithm execution ([d37d004](https://github.com/algoscope-hq/AlgoScope/commit/d37d00408fe8967d72fb53845b790de0afc9d24f))
* **testcases:** preserve IndexedDB identities during backup imports ([#321](https://github.com/algoscope-hq/AlgoScope/issues/321)) ([a70c1e3](https://github.com/algoscope-hq/AlgoScope/commit/a70c1e3355c3672253f5c6de8507303e9025ea61))
* validate dynamic programming inputs ([34d2b47](https://github.com/algoscope-hq/AlgoScope/commit/34d2b47022e0587ae1105925665521d18c6d1798))

## [1.9.0] - 2026-05-29

### Added

- implement native Floyd-Warshall for solo grid visualizer
- integrate guess the algorithm challenge page into navigation, search, footer, and SEO
- add MCQ quiz game
- add empirical Big-O runtime benchmarking system (#386)
- add responsive scroll-to-top button
- refine grid comparison visualization and scoring
- add grid comparison mode for shortest path algorithms
- add custom array input for search visualizer (linear & binary)

### Fixed

- lint
- restore string algorithms route and improve complexity layout
- correct browser title on valid sub-routes
- overlap between close button and sort dropdown
- resolve formatting and division by zero when maxSize is 1
- address remaining visualization nitpicks
- address comparison mode review feedback
- resolve footer link JSX syntax issue
- make maintainer link styles consistent

### Changed

- standardize semantic theme variable syntax
- replace hardcoded colors with semantic theme variables

### 📂 Changed Files

```
- 📁 **.github/**
  - 📁 **ISSUE_TEMPLATE/**
    - ✏️ feature_request.yml
- 📁 **src/**
  - 📁 **algorithms/**
    - 📁 **dp/**
      - ➕ dpStepGenerators.js
    - 📁 **sorting/**
      - ✏️ mergeSortSteps.js
  - 📁 **components/**
    - 📁 **arraySearch/**
      - ✏️ Visualizer.jsx
    - 📁 **backtrackingAlgo/**
      - ✏️ VisualizerPage.jsx
    - 📁 **challenge/**
      - ➕ ChallengePage.jsx
      - ➕ ChallengeVisualizer.jsx
    - 📁 **dataStructures/**
      - ✏️ stackIV.jsx
    - 📁 **dynamicProgramming/**
      - ➕ DPVisualizer.jsx
    - 📁 **MathTheory/**
      - ✏️ MathSoloVisualizer.jsx
    - 📁 **shortestPathAlgo/**
      - ➕ GridComparisonMode.jsx
      - ✏️ GridVisualizer.jsx
      - ✏️ ShortestPathPage.jsx
    - 📁 **sortingAlgo/**
      - ➕ RecursiveTree.jsx
      - ✏️ Visualizer.jsx
    - 📁 **stringAlgo/**
      - ✏️ VisualizerPage.jsx
    - 📁 **visualizer/**
      - ✏️ CodePanel.jsx
    - ✏️ AppLayout.jsx
    - ✏️ CodeEditor.jsx
    - ✏️ ComplexityCard.jsx
    - ✏️ Footer.jsx
    - ✏️ Home.jsx
    - ✏️ Navbar.jsx
    - ✏️ PracticePage.jsx
    - ➕ ProfilerGraph.jsx
    - ➕ ScrollToTopButton.jsx
    - ✏️ SearchBar.jsx
    - ✏️ SeoHead.jsx
  - ✏️ App.jsx
  - ✏️ input.css
- ✏️ CHANGELOG.md
- ✏️ package-lock.json
- ✏️ README.md
```

## [1.8.0] - 2026-05-26

### Added

- add keyboard shortcuts for visualization controls
- add Auto/Step mode toggle for manual step control
- add Practice Sandbox to Explore dropdown
- implemented scroll to top button
- add dynamic breadcrumb navigation for visualizer pages
- add string algo to search bar and explore bar
- redesign 404 page with glitch effect and terminal animation
- add interactive graph canvas builder for BFS, DFS, and shortest-path visualizers
- add Fibonacci Visualizer with Golden Spiral and Recursion Tree modes
- add test case manager with IndexedDB persistence and search
- add test case manager
- add custom array input and validation
- add Sieve of Eratosthenes visualizer and fix math code line highlighting
- add weighted node traversal and interactive cost visualization

### Fixed

- resolve linting and formatting issues
- format & lint
- avoid blocking Space key on focused buttons and links
- format
- format
- harden Worker runtime against benchmark message spoofing (#310)
- add scroll-to-top button
- add scroll-to-top button
- resolve algorithm cards becoming hidden after page refresh
- improve breadcrumb accessibility and route labels
- scale canvas by device pixel ratio for Retina displays
- enhance input validation and bounds safety in generateRandomArray and calculateStepDelay
- add canvas resize handler and go back fallback
- show graph builder toolbar reliably on canvas
- resolve production server startup issue
- clear stale sorting visualization state after interrupted execution (#323)
- lint
- lint
- address PR review for builder edits and stale traversals
- improve Clerk dark mode profile UI visibility
- allow duplicate values in BST and fix negative input bug on Enter
- resolve react-hooks violations in graph builder components
- resolve text overlap in complexity sidebar
- wrap treeState in useMemo, remove unused isLeaf variable
- lint
- added light mode visibility practice button and visible text
- sync live code block with custom array input in Kadane's and Moore's Algo
- format
- format
- format
- preserve weighted node styling during traversal
- step insights now visible by dafault

### Changed

- simplify breadcrumb pathname parsing
- optimize breadcrumb pathname processing
- optimize Google Font loading in index.html
- address CodeRabbit review feedback

### 📂 Changed Files

```
- 📁 **.antigravitycli/**
  - ➕ dca056bd-be77-484a-96bd-dc78d615732b.json
- 📁 **.github/**
  - 📁 **workflows/**
    - ✏️ pipelines.yml
- 📁 **src/**
  - 📁 **algorithms/**
    - 📁 **backtracking/**
      - ✏️ backtrackingSources.js
    - 📁 **mathTheory/**
      - ✏️ mathTheorySources.jsx
      - ✏️ mathTheorySteps.jsx
    - 📁 **searching/**
      - ✏️ shortestPathSources.js
    - 📁 **sorting/**
      - ✏️ bubbleSortSteps.js
    - 📁 **stringAlgo/**
      - ➕ stringSources.js
  - 📁 **components/**
    - 📁 **arraySearch/**
      - ✏️ Visualizer.jsx
    - 📁 **backtrackingAlgo/**
      - ➕ CanvasTowerOfHanoi.jsx
      - ✏️ MenuSetAlgoBacktracking.jsx
      - ✏️ VisualizerPage.jsx
    - 📁 **dataStructures/**
      - ✏️ treeIV.jsx
    - 📁 **hero/**
      - ➕ Hero.jsx
      - ➕ HeroProductPreview.jsx
    - 📁 **kadaneAlgo/**
      - ✏️ VisualizerPage.jsx
    - 📁 **MathTheory/**
      - ➕ CanvasFibonacci.jsx
      - ➕ CanvasSieve.jsx
      - ✏️ MathSoloVisualizer.jsx
    - 📁 **mooreVotingAlgo/**
      - ✏️ VisualizerPage.jsx
    - 📁 **searchAlgo/**
      - ✏️ CanvasSearching.jsx
      - ✏️ MenuSelectNodeSearch.jsx
      - ✏️ VisualizerPage.jsx
    - 📁 **shared/**
      - ➕ GraphBuilderToolbar.jsx
    - 📁 **shortestPathAlgo/**
      - ✏️ CanvasShortestPath.jsx
      - ✏️ GridVisualizer.jsx
      - ✏️ MenuSelectNodesShortestPath.jsx
      - ✏️ MenuSetAlgoShortestPath.jsx
      - ✏️ ShortestPathPage.jsx
    - 📁 **sortingAlgo/**
      - ✏️ ComparisonMode.jsx
      - ✏️ Visualizer.jsx
    - 📁 **stringAlgo/**
      - ➕ CanvasKMP.jsx
      - ➕ CanvasRabinKarp.jsx
      - ➕ CanvasZAlgorithm.jsx
      - ➕ CompareMode.jsx
      - ➕ MenuSetStringAlgo.jsx
      - ➕ VisualizerPage.jsx
    - 📁 **testCaseManager/**
      - ➕ TestCaseManager.jsx
    - 📁 **visualizer/**
      - ➕ useKeyboardShortcuts.js
    - ✏️ AlgoCard.jsx
    - ✏️ AppLayout.jsx
    - ➕ Breadcrumbs.jsx
    - ✏️ ComplexityCard.jsx
    - ✏️ Footer.jsx
    - ✏️ Home.jsx
    - ✏️ Navbar.jsx
    - ✏️ PageNotFound.jsx
    - ✏️ PracticePage.jsx
    - ✏️ SearchBar.jsx
    - ✏️ SeoHead.jsx
  - 📁 **data/**
    - ✏️ complexityMap.js
  - 📁 **lib/**
    - ➕ scheduleNetworkReady.js
    - ➕ testCaseStore.js
    - ✏️ utils.js
    - ➕ utils.test.js
  - ✏️ App.jsx
  - ✏️ input.css
  - ✏️ main.jsx
- ➕ .env.example
- ✏️ CHANGELOG.md
- ✏️ index.html
- ✏️ package-lock.json
- ✏️ package.json
- ✏️ README.md
- ➕ vitest.config.js
```

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
