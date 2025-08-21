# Team Section Requirements

## Objective
Implement a production-ready Team section that matches the Neon_Team_Profile_UI design system and uses the existing SVG assets in `public/assets/Team/`.

## Assets
- Avatars:
  - `/assets/Team/Sadboi icon.svg`
  - `/assets/Team/Downbad Dave.svg`
  - `/assets/Team/Liquidation Lisa.svg`
  - `/assets/Team/Fomo Fred.svg`
  - `/assets/Team/Paperhand Pete.svg`
  - `/assets/Team/REKT Roxy.svg`
- Decorations:
  - `/assets/Team/border of the Icon.svg` (avatar ring)
  - `/assets/Team/icons circle background.svg` (circular bg)

## Data Model
```ts
export type TeamMember = {
  name: string
  role: string
  desc: string
  avatar: string // public path to SVG
}
```

## Components
- `src/components/Team/TeamCard.tsx`
  - Props: `TeamMember`
  - Renders: neon framed card; top-centered 100×100 avatar circle with glow; name (white), role (cyan), description (grey)
  - Accessibility: avatar `alt` uses member name; decorative layers `aria-hidden`
- `src/components/Team/TeamSection.tsx`
  - Imports `teamMembers` from `src/data/teamData.ts`
  - Section header:
    - Title: “Meet the $REKT Legends” (Orbitron, neon cyan glow)
    - Subtitle: one line grey text
  - Grid: responsive `1/2/3` columns; gap-12
  - Optional decorative connector lines via CSS pseudo-elements

## Styling
- `src/components/Team/TeamSection.module.css`
  - `.cardFrame`: cyan border with inner/outer glow (box-shadow) and rounded corners; dark translucent background
  - `.avatarWrap`: negative top margin to float avatar over card; centers horizontally
  - `.avatarCircle`: 100×100 circle with cyan ring glow; uses `icons circle background.svg` and `border of the Icon.svg`
  - `.connector`: dotted/gradient lines (optional)

## Design Tokens (from team.json)
Expose in CSS variables (globals) so components can consume:
- `--bright-cyan-glow: #00d1ff`
- `--avatar-bg-gradient-start: #2a1a45`
- `--avatar-bg-gradient-end: #1a0f2b`

Add utility class: `.neon-glow-cyan { text-shadow: 0 0 8px var(--utility-glow-cyan) }`.

## Integration
- Create `src/data/teamData.ts` with six members and descriptions from the design.
- Replace inline `TeamSection()` in `src/app/page.tsx` with imported component: `../components/Team/TeamSection`.
- Keep section order unchanged.

## Performance
- Use `next/image` with `loading="lazy"` for avatars; no `priority` images in this section.
- Avoid massive background images; rely on CSS and small SVGs.

## Acceptance Criteria
- 6 cards render with correct avatars, names, roles, and descriptions.
- Avatar circle is 100×100, glows cyan, overlaps card top.
- Cards have cyan framed neon look and subtle hover lift/scale.
- Responsive: 1 col (mobile), 2 col (md), 3 col (lg+).
- A11y: decorative images `aria-hidden`, meaningful `alt` for avatars.
- No console errors; build passes `next build`.
