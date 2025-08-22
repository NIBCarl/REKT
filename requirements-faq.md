# FAQ Section – Requirements and Implementation Plan

## Overview
Implement a neon-themed, accessible FAQ accordion using design tokens from `public/assets/Whitepaper/FAQ/faq.json` and existing Tailwind/CSS variables in `src/app/globals.css`. Integrate as a modular component into the landing page.

## Design Tokens and Mapping
- __Primary background__: `#120c24` → `body` background already set via `--background-main` in `globals.css`.
- __Accordion background__: `#2a1a45` → use `bg-[rgba(30,20,60,0.5)]` or existing `.card-default` base.
- __Purple glow__: `#8a2be2` → `--primary-bright-purple`, used for borders and glows.
- __Cyan glow__: `#00d1ff` → `--bright-cyan-glow`, text/collapse icon accent.
- __Text primary__: `#ffffff` → `--text-primary`.
- __Text secondary__: `#d3d3d3` → `text-gray-300`/`text-gray-400` as appropriate.

Typography
- Headings: Orbitron (`font-primary`).
- Body: Inter (`font-secondary`).
- Title dual-color: cyan + purple spans.

## Assets
- Background frames:
  - `public/assets/Whitepaper/FAQ/opened question frame.png`
  - `public/assets/Whitepaper/FAQ/unopened question frame.png`
- Toggle icons: inline SVG plus/minus (no dedicated assets).

## Component Structure
- File: `src/components/FAQ/FAQSection.tsx`
- Data: `src/data/faqItems.ts`
- Section: `<section id="faq" aria-labelledby="faq-heading">`
- Header: `<h2 id="faq-heading">` with dual-color span styling.
- List: One-column stack of accordion items (max-width ~`max-w-3xl`).

## Accordion Behavior
- Click or Enter/Space toggles item.
- Only one item open at a time (toggle to close).
- Smooth height/content transition (basic CSS; no heavy animation required).
- Background frame swaps between unopened/opened frames based on state.

## Accessibility
- Each header is a `button` with `aria-expanded`, `aria-controls`.
- Panel has `role="region"`, `aria-labelledby`, `id` matching `aria-controls`.
- Keyboard navigation: Up/Down arrow moves focus between headers.
- Decorative background images marked `aria-hidden="true"`.
- Section labeled via `aria-labelledby`.

## Tailwind/CSS Utilities
- Use existing `.card-default`, `.border-glow`, `.neon-glow-*` from `globals.css`.
- Optional subtle noise/glow overlays using utility classes; no new global CSS required initially.

## Integration
- Import and render `<FAQSection />` in `src/app/page.tsx` below `WhitepaperSection`.
- Ensure navigation anchor matches (`id="faq"`).

## Acceptance Criteria
- __Visual__: matches neon theme; frames display correctly for closed/open states; dual-color title.
- __Responsive__: mobile to desktop, single column, proper spacing.
- __A11y__: tabbable headers; correct ARIA; arrow key navigation; screen reader labels.
- __Code Quality__: modular component; static data file; no inline giant JSON; no console errors.

## Test Plan
- Toggle each item via mouse and keyboard.
- Verify only one open at a time; re-click closes.
- Check focus ring and arrow key navigation between items.
- Confirm nav link “FAQ” scrolls to section.
