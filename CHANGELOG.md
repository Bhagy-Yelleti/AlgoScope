# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.6.1](https://github.com/algoscope-hq/AlgoScope/compare/v1.6.0...v1.6.1) (2026-05-18)

### Bug Fixes

- checkout main branch instead of detached HEAD for changelog rebuild ([fb3b66d](https://github.com/algoscope-hq/AlgoScope/commit/fb3b66d126eeefa336e4ded0b0b5423b53aa235d))

## [1.6.0](https://github.com/algoscope-hq/AlgoScope/compare/v1.5.0...v1.6.0) (2026-05-18)

### Features

- add algorithm comparison mode with side-by-side visualization for all the types of algorithm ([5495d9d](https://github.com/algoscope-hq/AlgoScope/commit/5495d9d4519523fbe946aab0e8da44f08ba6294b))
- add best average and worst case complexity analysis ([b92b5d8](https://github.com/algoscope-hq/AlgoScope/commit/b92b5d8e5cf2d3b96a1edc95d92627193c83f0f6))
- add dynamic SEO metadata for Comparison Mode and missing routes ([d05609c](https://github.com/algoscope-hq/AlgoScope/commit/d05609cd16621ef58b5650610762b0c2ea9ab7e7))
- **ds:** implement interactive binary heap and priority queue visualizers ([0a2c4c4](https://github.com/algoscope-hq/AlgoScope/commit/0a2c4c43fd52757e066608e24ac535e2392f2318))
- dynamically display Ctrl/Enter or ⌘/Return based on user OS ([4b24f06](https://github.com/algoscope-hq/AlgoScope/commit/4b24f06a5f08f905f575537b193b4e0a090e25d1))
- Moore Voting Algorithm ([50db58b](https://github.com/algoscope-hq/AlgoScope/commit/50db58b73194f6af1c433580f4553d2c2507a369))
- Moore Voting Algorithm ([572d6d5](https://github.com/algoscope-hq/AlgoScope/commit/572d6d50bd0cf22cee643e4ad15630a0bde7b0f7))
- pr tamplate add ([40ddc36](https://github.com/algoscope-hq/AlgoScope/commit/40ddc3631f8749e2327992b719dec45de9ee65ec))
- refine Comparison Mode SEO metadata and update sitemap ([fc2dd52](https://github.com/algoscope-hq/AlgoScope/commit/fc2dd525f80a7996ea18fae2de1922fd202a5e72))
- tooltip hover jsx file added to src/components ([f42986a](https://github.com/algoscope-hq/AlgoScope/commit/f42986a2dc68ae2cbbce37176579eeda6e384127))

### Bug Fixes

- added Moore's Voting Algorithm to searchbar ([03220fb](https://github.com/algoscope-hq/AlgoScope/commit/03220fb5df5f6535dde0fd7f0326c61d2b9dd76f))
- folder fix ([5041ef7](https://github.com/algoscope-hq/AlgoScope/commit/5041ef722022b61ed1a095e951e54ed95de6c34c))
- format & lint ([904ca5f](https://github.com/algoscope-hq/AlgoScope/commit/904ca5f76b2401e08b2dca7e895efc21f6f2efb2))
- format & lint ([b170b6d](https://github.com/algoscope-hq/AlgoScope/commit/b170b6dc9649ee08601013c4bd225699407e0de5))
- format ComplexityGraph component ([fe34072](https://github.com/algoscope-hq/AlgoScope/commit/fe34072fdb549139c68c8104a6bf9a22bdeb0dab))
- **search:** reset query and results state on modal close ([7b67813](https://github.com/algoscope-hq/AlgoScope/commit/7b67813d58a508b4d8c7b46e74be3d8c9aabceab))
- show graph only for selected algorithm ([a35a43d](https://github.com/algoscope-hq/AlgoScope/commit/a35a43dc5e8461d280141c120ff9954817d5244e))
- tooltip hover feature added to all category files ([f93c7ed](https://github.com/algoscope-hq/AlgoScope/commit/f93c7ed67ae1ecbb44150f106725e4a3d3a9a3d3))
- **ui:** adjust vertical spacing for status display banner ([aa23afe](https://github.com/algoscope-hq/AlgoScope/commit/aa23afe954845876609e6281f56f5580b9d66162))

## [1.5.0] - 2026-05-17

### Added

- Created `CHANGELOG.md` to track project updates ([@Bhagy-Yelleti](https://github.com/Bhagy-Yelleti)).
- URL state persistence for all algorithm visualizers ([@Bhagy-Yelleti](https://github.com/Bhagy-Yelleti)).
- Integrated `useSearchParams` so users can share links to specific algorithms ([@Bhagy-Yelleti](https://github.com/Bhagy-Yelleti)).
- Moore Voting Algorithm ([@SumedhaBhatta](https://github.com/SumedhaBhatta)).
- multi-language code viewer for ADT modules ([@Bhagy-Yelleti](https://github.com/Bhagy-Yelleti)).
- Copy Code button to the `CodeEditor` component ([@Kritika200520](https://github.com/Kritika200520)).
- +/- precision buttons to the speed control slider ([@Harish-SS56](https://github.com/Harish-SS56)).
- Shell Sort algorithm visualization ([@khushalkks](https://github.com/khushalkks)).
- Kadane's Algorithm ([@Slakshminarayana2006](https://github.com/Slakshminarayana2006)).
- close (X) button to the search modal ([@nayan-git2](https://github.com/nayan-git2)).
- Clerk authentication support ([@adityapaul26](https://github.com/adityapaul26)).
- modal-based navbar search UI ([@anmolsah](https://github.com/anmolsah)).
- explore dropdown and moved secondary links to the footer ([@tanushkat96](https://github.com/tanushkat96)).
- Java code implementations for BFS, DFS, and Shortest Path algorithms ([@gaurav123-4](https://github.com/gaurav123-4)).
- multi-language support across searching, sorting, and other modules ([@Bhagy-Yelleti](https://github.com/Bhagy-Yelleti)).

### Changed

- Improved UI layout and UX across visualizer pages ([@Tilakraj1491](https://github.com/Tilakraj1491)).
- Updated contributor image link in `README.md` ([@Bimbok](https://github.com/Bimbok)).
- Set JetBrains Mono globally and added logo font branding ([@mdtauhid29](https://github.com/mdtauhid29)).
- Moved Practice button from Navbar to hero CTA ([@surya0904shankar](https://github.com/surya0904shankar)).
- Updated `README.md` with Clerk setup instructions ([@adityapaul26](https://github.com/adityapaul26)).
- Updated Sign In button design ([@adityapaul26](https://github.com/adityapaul26)).
- Added JSDoc to utility functions and refactored sorting logic for consistency ([@Bhagy-Yelleti](https://github.com/Bhagy-Yelleti)).
- Improved backend functionality with minor backend changes ([@adityapaul26](https://github.com/adityapaul26)).
- Added testing and maintenance PR updates ([@adityapaul26](https://github.com/adityapaul26), [@Bimbok](https://github.com/Bimbok)).

### Fixed

- the double-rendering bug in the sorting visualizer components ([@adityapaul26](https://github.com/adityapaul26)).
- linting errors caused by unescaped characters in selection menus ([@adityapaul26](https://github.com/adityapaul26)).
- Improved rendering performance across the main dashboard.
- brightness and saturation levels of the Practice button ([@Yash13670](https://github.com/Yash13670)).
- missing Kadane’s Algorithm entry in the search bar ([@azaanhusain777](https://github.com/azaanhusain777)).
- status bar vertical alignment and result message formatting ([@madhavcodes25](https://github.com/madhavcodes25)).
- vertical alignment of the Navbar search bar using `items-center` ([@suhavani23](https://github.com/suhavani23)).
- Navbar explore links issue (#106) ([@madhavcodes25](https://github.com/madhavcodes25)).
- footer Explore section links for Array Search, ADTs, and Kadane’s Algorithm ([@NiravaM](https://github.com/NiravaM)).
- reset behavior for starting node dropdown in the search module ([@SANDHIYAPRIYADHARSHINI](https://github.com/SANDHIYAPRIYADHARSHINI)).
- reset behavior for source and target dropdowns in the pathfinding module ([@SANDHIYAPRIYADHARSHINI](https://github.com/SANDHIYAPRIYADHARSHINI)).

## [1.2.0] - 2026-05-15

### Added

- Core logic for Sorting and Searching visualizers.
- Dark mode support with Tailwind CSS.
- Playback controls for speed and step-by-step execution.

## [1.0.0] - 2026-01-15

### Added

- Initial repository setup and project structure.
