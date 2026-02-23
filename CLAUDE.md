# CLAUDE.md - Fertility Tracker App

## Project Overview
This is a standalone app for a Google Pixel 9a phone. It tracks daily entries of basal body temperature (BBT) and ovulation test strip data. It uses current scientific knowledge about this data to predict ovulation timing and menstrual cycle timing.

## Tech Preferences
- Keep everything as simple and beginner-friendly as possible
- Use plain, well-commented code so I can learn from it
- Prefer a single-file approach when possible
- Explain any new files or technologies before creating them

## Design
- Clean, modern, professional look
- Blue and green color scheme similar to Seahawks colors (navy blue #002244, bright green #69BE28, wolf grey #A5ACAF)
- Mobile-friendly (optimized for Google Pixel 9a screen)
- Simple navigation, nothing cluttered

## Rules
- Always ask before deleting or overwriting existing files
- Don't introduce complex frameworks without explaining why
- When fixing bugs, explain what was wrong and what the fix does
- Keep the folder structure flat and simple

## Tech Stack
- **PWA (Progressive Web App)** — runs in Chrome, installable to home screen, works offline
- **Single HTML file** — all CSS + JS in index.html (no build tools, no frameworks)
- **manifest.json** — PWA configuration (app name, icon, theme color)
- **sw.js** — Service worker for offline caching
- **localStorage** — All data stored locally on device as JSON

## Current Status / What's Done
<!-- Update this section as features are built -->

### Session Log
- **2026-02-23**: Project initialized. Created CLAUDE.md with project guidelines.
- **2026-02-23**: Built full v1 app — PWA with all core features:
  - Onboarding flow (last period date, cycle length, regularity, temp unit)
  - Daily entry form (BBT, OPK, period, flow intensity, pregnancy test, notes)
  - Dashboard with cycle day, phase, ovulation/fertility/period predictions
  - BBT chart with Canvas (coverline, fertility window shading, OPK dots)
  - Cycle history with statistics
  - Settings with historical period dates and pregnancy event entry
  - Prediction engine: "3 over 6" BBT rule, slow rise detection, OPK integration
  - Irregular cycle support (wider prediction ranges, ACOG guidelines)
  - Pregnancy mode (positive test pauses predictions, miscarriage/abortion tracking)
  - Recovery cycle handling (first 3 post-pregnancy cycles weighted 50%)
  - Data export/import (JSON backup)
  - Seahawks color scheme (navy #002244, green #69BE28, grey #A5ACAF)

### Completed
- Project setup (manifest.json, sw.js, index.html)
- Onboarding / first-time setup flow
- Daily entry form with all fields
- Data storage layer (localStorage)
- Prediction engine (BBT thermal shift, OPK, fertility window, period prediction)
- Irregular cycle handling with wider prediction ranges
- Pregnancy mode + miscarriage/abortion tracking
- Recovery cycle weighting
- Dashboard with predictions and fertility banner
- BBT chart (Canvas) with coverline, OPK dots, fertility shading
- Cycle history page with statistics
- Settings page with historical data entry
- Data export/import
- Bottom navigation (5 tabs: Home, Log, Chart, History, Settings)

### In Progress
- (nothing currently)

### Planned / TODO
- Test on actual Pixel 9a device
- Add app icon (currently using SVG inline icon)
- Consider adding cycle calendar view
- Consider push notification reminders for daily logging
