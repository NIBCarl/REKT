# $REKT Landing Page

A modern, futuristic landing page for the $REKT memecoin project built with Next.js 15 and Tailwind CSS.

## Features

✨ **Design System Implementation**
- Custom neon color palette with purple, cyan, and pink accents
- Dark background with futuristic aesthetic
- Geometric sans-serif typography (Orbitron) for headings
- Digital monospace fonts (Audiowide) for data displays
- Glowing effects and neon borders

🚀 **Hero Section**
- Responsive navigation with active states
- Animated countdown timer for presale
- Interactive presale purchase card
- Multiple payment methods (SOL, USDT, USDC)
- Progress bar with live funding status
- Floating mascot character with animations

📊 **Tokenomics Section**
- Token distribution breakdown
- Tax structure visualization
- Clear percentage allocations
- Interactive hover effects

🏆 **Leaderboard Section**
- Top losers ranking table
- REKT score display
- Responsive design for mobile

👥 **Team Section**
- Team member cards with avatars
- Role descriptions
- Hover animations

🗺️ **Roadmap Section**
- Three-phase development plan
- Detailed milestone lists
- Progressive disclosure design

❓ **FAQ Section**
- Expandable question/answer format
- Comprehensive information coverage

## Tech Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS 4
- **Typography**: Google Fonts (Orbitron, Audiowide, Inter)
- **Icons**: Custom SVG elements
- **Animations**: CSS transitions and transforms

## Design Principles

The landing page follows the design specifications from `design.json` and `hero-section.json`:

- **Color Scheme**: Dark background (#120c24) with neon accents
- **Typography**: Hierarchy with display fonts for impact
- **Layout**: Responsive grid system with centered content
- **Effects**: Glowing borders, text shadows, and backdrop blur
- **Interactivity**: Hover states and smooth transitions

## Assets Used

The page utilizes existing assets from the `public/assets/` directory:
- Mascot character image
- Logo assets
- Partner/exchange logos
- Progress bar graphics

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## File Structure

```
src/
├── app/
│   ├── globals.css      # Design system and custom styles
│   ├── layout.tsx       # Root layout with metadata
│   └── page.tsx         # Main landing page components
└── tailwind.config.ts   # Tailwind configuration
```

## Responsive Design

The landing page is fully responsive with breakpoints for:
- Mobile (< 768px)
- Tablet (768px - 1024px)
- Desktop (> 1024px)

All sections adapt gracefully to different screen sizes while maintaining the futuristic aesthetic.