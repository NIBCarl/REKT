# Roadmap Timeline Component Requirements

## Overview
Implement a vertical neon-timeline roadmap section that matches the design shown in `public/assets/roadmap/` and the reference image. The component must replace the inline `RoadmapSection()` currently in `src/app/page.tsx` and integrate cleanly into the existing Next.js 15 + Tailwind 4 codebase.

## Objectives
- Move roadmap content to a typed data file for single-source-of-truth.
- Render a central glowing timeline spine with alternating phase cards (left/right).
- Display separate phase markers ("PHASE 1/2/3") with mascot images attached to the spine.
- Apply angular neon card headers, custom square bullets, highlighted list items, and goal label styling.
- Use only the assets already found in `public/assets/roadmap/`; compress oversized SVGs if necessary.
- Ensure full responsiveness (desktop & mobile) while preserving the timeline concept.
- Provide smooth-scroll navigation via `id="roadmap"`.
- Maintain accessibility (semantic headings, list markup, alt text) and good color contrast.

## Assets
| Purpose | File | Notes |
|---------|------|-------|
| Card header background | `Launch & Foundation background.svg`, `Utility & Rekt logic.svg`, `Scaling & Community Chaos.svg` | Used as CSS `background-image` for each phase header |
| Phase background textures | `PHASE1 background.png`, `PHASE2 background.png`, `PHASE3 background.png` | Placed as low-opacity card backgrounds |
| Phase arrow chevron | `Arrow of the phase.svg` | Must be optimized (<150 kB) before import; provide fallback PNG if not compressed |
| Phase marker mascots | `SMIRK.png` (re-used for all phases) | Positioned absolutely near each marker |

## Data Source (`src/data/roadmap.ts`)
```ts
export interface Phase {
  title: string;
  goal: string;
  items: string[];
}

export const phases: Phase[] = [/* moved from page.tsx */];
```

## Component Structure
```
src/components/Roadmap/
├─ RoadmapSection.tsx   // presentation & layout
├─ RoadmapSection.module.css // clip-paths, before/after spine styles
```
Hierarchy inside component:
1. `<section id="roadmap">`
2. Decorative top frame (optional)
3. `<div className="timeline">` contains:
   - Vertical spine (`::before` absolute cyan glow)
   - `phase-cards` alternating using CSS `grid` & `lg:grid-cols-[repeat(2,1fr)]`
4. Each card:
   - Header with angular background SVG + title text
   - "GOAL:" line styled per `#f0e68c`
   - `<ul>` with custom bullets via `::before`
5. Phase marker component (`PhaseBadge`) positioned with translateY to match card.
6. Decorative bottom frame.

## Styling Guidelines
- Use existing Tailwind tokens plus custom CSS module for clip-paths & spine.
- Colors: `--bright-cyan-glow` for spine; `--primary-bright-purple` for card border.
- Card border glow: `box-shadow: 0 0 10px rgba(190, 41, 236, 0.5)`.
- Header clip-path: `polygon(0 0, 100% 0, 95% 100%, 0% 100%)`.
- Custom square bullet: `width:8px;height:8px;background:#be29ec`.
- Highlighted list item: 1 px cyan border + subtle cyan glow.

## Accessibility
- `h2` for section title, `h3` for each phase.
- `ul > li` for phase items.
- Alt text for all images.
- Maintain sufficient contrast ratios.

## Performance & Optimisation
- Compress `Arrow of the phase.svg` (or convert to PNG) before import.
- Use `next/image` with `priority` only for in-view assets.
- Avoid loading mascots on mobile ≤ 640 px (hidden via `sm:block`).

## Implementation Tasks
1. Create `src/data/roadmap.ts` and move phase data.
2. Create `RoadmapSection.tsx` & CSS module; build timeline UI.
3. Remove inline `RoadmapSection()` from `page.tsx`; import new component.
4. Update navigation scroll handler.
5. Optimize large SVG (manual export or use svgo CLI).
6. Test on desktop & mobile.
