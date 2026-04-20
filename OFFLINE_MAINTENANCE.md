# Offline Maintenance Guide

This repository now supports an offline-safe mode using a dedicated branch workflow.

## Branch Strategy

- `main`: online development branch (normal daily work).
- `offline-ready`: offline demo branch (no runtime internet dependency for styles/flags/external links).

## What Was Centralized (for easy maintenance)

- Offline mode flag:
  - `src/config/appMode.ts`
  - Enabled with `VITE_OFFLINE_MODE=true` in `.env.offline`
- External links behavior:
  - `src/components/common/ExternalAnchor.tsx`
  - In offline mode, external URLs render as disabled UI instead of broken links.
- Country flags behavior:
  - `src/components/common/CountryFlag.tsx`
  - Online: tries `flagcdn`.
  - Offline or load error: automatic emoji fallback by country code.

Only these shared helpers should be touched when offline behavior needs updates.

## Commands

- Online dev:
  - `npm run dev`
- Offline dev:
  - `npm run dev:offline`
- Online build:
  - `npm run build`
- Offline build:
  - `npm run build:offline`

## Daily Workflow (Recommended)

1. Work normally on `main`:
   - `git checkout main`
   - Implement features
   - Commit and push
2. Refresh offline branch regularly:
   - `git checkout offline-ready`
   - `git merge main`
   - `npm run build:offline`
   - Commit only if merge requires changes
3. Demo offline from `offline-ready`:
   - Disconnect internet
   - `npm run dev:offline`

## Why This Is Low-Maintenance

- No duplicated app code in a second project directory.
- Offline-specific behavior is isolated in two reusable components and one config file.
- New external links can be made offline-safe by using `ExternalAnchor`.
- New country flag UI can stay safe by using `CountryFlag`.

## Quick Safety Checklist Before an Offline Demo

1. `git checkout offline-ready`
2. `git status` is clean
3. `npm run build:offline` passes
4. Start `npm run dev:offline` with network disconnected
5. Check:
   - Header/Home/Training external buttons are disabled (not broken)
   - Network flags render (emoji fallback if needed)
   - Layout remains stable
