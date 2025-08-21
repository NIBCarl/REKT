# Leaderboard Component – Implementation Requirements

## Goal
Rebuild the **Loser Leaderboard** section so it visually & functionally matches the reference mock-up and the design-system rules defined in `public/assets/leaderboard/leaderboard.json`.

## Functional Requirements
1. **Data source**
   - Load leaderboard rows from an API endpoint (future-proof) or fallback to a local mock array.
   - Expose a **Refresh Leaderboard** button that re-fetches data.
2. **Column schema**
   | Rank | Loser (wallet + `Loser icon.svg`) | REKT Score (cyan pill) | Total Losses | Purchase |
3. **CTA Buttons**
   - "Refresh Leaderboard" – triggers re-fetch.
   - "Claim your loss" – placeholder `onClick` (to be wired later).
4. **Accessibility**
   - Add `aria-label` to rank medal icons and buttons.
   - Ensure WCAG contrast for text vs backgrounds.
5. **Responsiveness**
   - ≥ 640 px: full table within neon frame.
   - < 640 px: horizontal scroll or stacked card list.

## Visual Requirements
1. **Outer frame** – custom non-rectangular neon frame using colors:
   - Outer border: `accent-glow` `#8A2BE2`.
   - Inner border: `accent-glow-secondary` `#00D1FF`.
2. **Header bar** – background `table-header` `#00A0B0`, white text.
3. **Row backgrounds**
   - 🥇 first: `gold-rank-background` `#40E0D0`.
   - 🥈 second: `silver-rank-background` `#3B5998`.
   - 🥉 third: `bronze-rank-background` `#8B4513`.
   - Standard: `standard-row-background` `#3A2A5E` (on even/hover rows).
4. **Score pill** – pill background `rgba(0,160,176,0.5)`, border `#00A0B0`, text white.
5. **Buttons** – gradient `linear-gradient(90deg, #4D4DFF, #8A2BE2)`, glow `#6A0DAD`, border-radius 20 px.

## Tech Tasks
1. Extract component to `src/components/Leaderboard/LeaderboardSection.tsx`.
2. Create `src/components/Leaderboard/LeaderboardSection.module.css` for custom shapes + frame.
3. Introduce Tailwind CSS variables from `leaderboard.json` in `tailwind.config.ts`.
4. Use `SWR` or `useEffect` with `fetch('/api/leaderboard')` (stub endpoint for now).
5. Add unit test ensuring rows render & buttons call handlers.
6. Remove inline `LeaderboardSection` in `src/app/page.tsx` and import the new component.
