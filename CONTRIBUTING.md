# Contributing to mpdee

## Workflow

- **PR-only:** All changes must go through pull requests. Direct commits to main are not allowed.
- **Branch naming:** `bot/YYYY-MM-DD-short-task` (e.g., `bot/2026-01-31-fix-header`)

## Before submitting a PR

1. Run quality checks:
   ```bash
   pnpm lint
   pnpm test
   pnpm build
   ```
   Run all that are available in `package.json`.

2. Ensure your branch is up to date with the target branch.

3. Request review from **mattduff36**.

## PR description

Include a brief summary of changes and a "How to test" section if applicable.
