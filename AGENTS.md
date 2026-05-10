# Repository Guidelines

## Project Structure & Module Organization
`src/` contains the app entrypoints (`main.jsx`, `App.jsx`), shared styles (`input.css`, `App.css`), and feature components. Algorithm views are grouped under `src/components/` by domain: `sortingAlgo/`, `searchAlgo/`, `arraySearch/`, `shortestPathAlgo/`, `dataStructures/`, and `about/`. Static assets live in `src/assets/`; files served directly by Vite live in `public/`. Deployment and runtime config are at the repo root: `vite.config.js`, `vercel.json`, `Dockerfile`, and `nginx.conf`.

## Build, Test, and Development Commands
Use Node 20+ to match CI.

- `npm run dev` starts the Vite dev server on all interfaces for local testing.
- `npm run build` creates the production bundle in `dist/`.
- `npm run preview` serves the built app locally.
- `npm run lint` runs ESLint on all `js` and `jsx` files and fails on warnings.
- `npm run format:check` verifies Prettier formatting for source, CSS, and Markdown files.

## Coding Style & Naming Conventions
This repo uses React function components, ES modules, and 2-space indentation. Prettier enforces no semicolons, single quotes, and trailing commas where valid in ES5. Keep page-level components and exported React components in PascalCase files such as `VisualizerPage.jsx`; helper values and local functions should use camelCase. Place feature-specific UI beside the corresponding algorithm folder instead of creating broad shared directories too early.

## Testing Guidelines
There is no committed automated test suite yet. Every change should pass `npm run lint`, `npm run build`, and manual browser checks for the affected visualization flow. Test edge cases such as empty input, invalid selections, reset behavior, speed changes, and responsive layout. If you add automated tests later, keep them close to the feature and use clear names like `BinarySearch.test.jsx`.

## Commit & Pull Request Guidelines
Git history and `CONTRIBUTING.md` follow simplified Conventional Commits: `feat:`, `fix:`, `docs:`, `refactor:`, `style:`, and `chore:`. Keep commits focused and descriptive, for example `feat: add queue animation reset state`. PRs should target `main`, explain the change and reason, link the issue (`Closes #123`), and include screenshots or GIFs for UI changes. CI on pull requests currently checks Prettier, ESLint, and the production build.
