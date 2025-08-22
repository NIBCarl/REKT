# Whitepaper & Security Audit Section

## Purpose
Provide visitors with REKT's official documentation (whitepaper) and evidence of third-party smart-contract/security audits.

## Functional Requirements

1. **Section Identity**
   - Section id: `whitepaper` to match navigation link.
   - Main heading: "Documentation & Security" (dual-color highlight: cyan + purple).
   - Subtitle: "Transparency and security first" with sub-subtitle "Full documentation and third-party security audits".

2. **Layout**
   - Two info cards in a 2-column grid (`lg:grid-cols-2`) with a mascot illustration centered between on ≥`lg` screens.
   - Stack cards vertically on small screens with mascot hidden by default.

3. **Whitepaper Card**
   - Uses border asset `border of white paper.png` as card background.
   - Top icon `REKT.png` (80×80).
   - Title: **Whitepaper**.
   - Description paragraph.
   - Checklist items with green check icons:
     1. Complete tokenomics breakdown
     2. Technical architecture details
     3. Roadmap and future plans
     4. Risk assessment and disclaimers
   - CTA button "View Whitepaper" (link TBD) using `view whitepaper background button.svg`.

4. **Security Audit Card**
   - Uses border asset `border of audit.png`.
   - Top icon `material-symbols-light_security-rounded.svg` or placeholder shield.
   - Title: **Security Audit**.
   - Description.
   - Checklist items:
     1. Third-party security audit by leading blockchain security firms
   - Display auditor logos `coinsult_full_new_web.png`, `solidproof.png` in a flex row.
   - CTA button "View Audit Report" using `view audit background button.svg` linking to PDF/URL.

5. **Mascot**
   - Asset `middle logo.png` positioned absolute in center of grid (row-span full) for ≥`lg`.

6. **Decorative Frame**
   - Outer frame background `image.png` (cyan border) positioned absolute, z-0.
   - Top middle accent `top middle of border.svg` overlay.

7. **Accessibility & UX**
   - All images have meaningful `alt`.
   - Buttons are `<a>` with `target="_blank" rel="noopener noreferrer"`.
   - High contrast text and focus ring utilities.

8. **Responsiveness**
   - Tailwind responsive utilities; grid stacks on `sm`.
   - Mascot hidden on `sm`.

## Technical Requirements

- **Component**: `src/components/Whitepaper/WhitepaperSection.tsx`
- **Styling**: Tailwind CSS classes plus optional inline `style` for glow shadows.
- **Asset Paths**: `/assets/Whitepaper/*` exactly matching filenames.
- **No external state**; purely presentational.
- **TypeScript** with React 19.

## Acceptance Criteria

- Section renders with no console warnings.
- Navigating via nav link scrolls smoothly to section.
- Images lazy-load and are optimized via `next/Image`.
- Lighthouse accessibility score ≥90 for this section.
