# Habit + Time Value Tracker

Plan every hour, log what you actually did, and get a normalized 0–100 score plus per-activity analytics.

## Stack
- Next.js (App Router) + TypeScript
- Tailwind CSS
- Recharts
- Local state + `localStorage` persistence

## Setup
Install deps:
```bash
npm install
```

Run the dev server:
```bash
npm run dev
# open http://localhost:3000
```

## Routes
- `/` Dashboard with KPIs, daily line chart, weekly/monthly averages, per-activity analytics.
- `/plan` Daily planner: set planned + actual minutes per activity, see score bar and per-activity completion.
- `/activities` Manage activities (name, category, worth per hour, color, emoji, active/archived).

## Data model (local only)
- `Activity`: id, name, category?, color?, icon?, worthPerHour, isActive.
- `DailyPlan`: date (YYYY-MM-DD), items, notes?. Each item has plannedMinutes, actualMinutes, status (derived), activityId.

Plans and activities are saved in `localStorage` (`habittrack:activities`, `habittrack:plan:<date>`).
