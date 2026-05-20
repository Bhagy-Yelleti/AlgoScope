## Pull Request Summary

<!--
Use a Conventional Commit PR title so release-please can classify this change.
Examples:
- feat: add heap sort visualization
- fix: reset shortest-path target selection
- docs: update Clerk setup instructions
-->

### What changed?

<!-- Briefly describe the change in 2-4 sentences. Include the main files, pages, or workflows affected. -->

### Why is this needed?

<!-- Link the issue and explain the user or maintainer problem this PR solves. -->

Closes #

## Type of Change

<!-- Select every category that applies. These should align with the Conventional Commit type in the PR title. -->

- [ ] `feat` - New user-facing feature or algorithm capability
- [ ] `fix` - Bug fix or regression fix
- [ ] `docs` - Documentation-only change
- [ ] `style` - Formatting or styling change with no behavior change
- [ ] `refactor` - Code restructuring with no feature or bug-fix behavior change
- [ ] `perf` - Performance improvement
- [ ] `test` - Test coverage or test infrastructure change
- [ ] `build` - Build system, dependency, or packaging change
- [ ] `ci` - GitHub Actions, Docker, Vercel, or release automation change
- [ ] `chore` - Maintenance change that does not affect users
- [ ] `revert` - Reverts a previous change

## Release Notes

<!--
release-please builds releases from Conventional Commits, and CHANGELOG.md follows Keep a Changelog sections.
Choose the section that best describes this PR and write one contributor-facing bullet.
Use "Not required" only for changes that should not appear in release notes.
-->

Release note category:

- [ ] Added
- [ ] Changed
- [ ] Fixed
- [ ] Removed
- [ ] Deprecated
- [ ] Security
- [ ] Not required

Release note entry:

-

## Testing and Verification

<!-- Check every verification step that was completed. If a step is skipped, explain why below. -->

- [ ] `npm ci` or `npm install`
- [ ] `npm run format:check`
- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] Manual browser testing at `http://localhost:5173`
- [ ] Responsive testing for affected views
- [ ] No new console errors or warnings

Skipped or additional testing notes:

<!-- Example: "Skipped npm run build because this PR only updates markdown." -->

## UI Evidence

<!-- Required for UI, animation, routing, or visualizer changes. Add screenshots, GIFs, or short screen recordings. -->

Before:

After:

## CI/CD and Deployment Impact

<!-- Select all that apply so maintainers can assess release, Docker, and routing impact. -->

- [ ] No deployment impact expected
- [ ] Updates GitHub Actions or release automation
- [ ] Updates Docker build/runtime behavior
- [ ] Updates Vercel, Nginx, redirects, or client-side routing behavior
- [ ] Adds or changes environment variables
- [ ] Adds, removes, or updates npm dependencies
- [ ] Requires maintainer follow-up after merge

Deployment notes:

<!-- Include any required secrets, environment variables, release steps, migration notes, or rollback concerns. -->

## Reviewer Checklist

<!-- Keep this section for maintainers and reviewers. -->

- [ ] PR title follows Conventional Commits and matches the selected change type
- [ ] Scope is focused and unrelated changes are excluded
- [ ] Release note category and entry are accurate
- [ ] CI checks are expected to pass: format, lint, and build
- [ ] UI evidence is included when user-facing screens changed
- [ ] Documentation is updated when behavior, setup, or deployment changed
