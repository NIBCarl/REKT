# Rektonomics Section Components

This directory contains the redesigned Rektonomics section components for the $REKT website.

## Structure

```
src/components/Rektonomics/
├── components/                    # Sub-components
│   ├── MainContainer.tsx         # Main container with border styling
│   ├── TotalSupplyBanner.tsx     # Total supply banner component
│   ├── DistributionBreakdown.tsx # Distribution breakdown with SVG lines
│   ├── MascotCenter.tsx          # Mascot GIF display component
│   ├── PieChart.tsx              # Pie chart component
│   └── TaxInfoSection.tsx        # Tax information section
├── constants.ts                   # Asset paths and default data
├── types.ts                      # TypeScript interfaces
├── RektonomicsSection.tsx        # Main component
├── RektonomicsSection.module.css # Component styles
├── index.ts                      # Export file
└── README.md                     # This file
```

## Components

### RektonomicsSection
Main component that orchestrates all sub-components and provides the overall layout structure.

### MainContainer
Provides the main container with futuristic border styling using the `rektonomics border.jpg` asset.

### TotalSupplyBanner
Displays the total supply information in a cyan banner format using the `total supply background.svg` asset.

### DistributionBreakdown
Shows horizontal lines with percentages using individual SVG assets for each distribution category.

### MascotCenter
Displays the REKT mascot GIF in the center position with proper sizing and effects.

### PieChart
Shows the tokenomics pie chart using the existing `tokenomics chart.png` asset.

### TaxInfoSection
Displays tax information with color-coded breakdown using the `tax on every buy-sell background.png` asset.

## Assets

All assets are located in `/public/assets/Rektonomics/` and include:
- Border styling: `rektonomics border.jpg`
- Total supply background: `total supply background.svg`
- Mascot animation: `main gif in the rektonomics put it the middle.gif`
- Pie chart: `tokenomics chart.png`
- Tax background: `tax on every buy-sell background.png`
- Distribution lines: Various SVG files for each category

## Data Structure

The component uses the `TokenomicsData` interface defined in `types.ts` and defaults from `constants.ts`.

## Implementation Status

- ✅ Task 1: Component structure and interfaces (COMPLETED)
- ⏳ Task 2: MainContainer component with border styling
- ⏳ Task 3: TotalSupplyBanner component
- ⏳ Task 4: DistributionBreakdown component with SVG assets
- ⏳ Task 5: MascotCenter component with GIF animation
- ⏳ Task 6: PieChart component using existing asset
- ⏳ Task 7: TaxInfoSection component
- ⏳ Task 8: Responsive layout and grid system
- ⏳ Task 9: Styling and visual effects
- ⏳ Task 10: Asset loading and performance optimization
- ⏳ Task 11: Replace existing TokenomicsSection in main page
- ⏳ Task 12: Testing and validation

## Usage

```tsx
import { RektonomicsSection } from '@/components/Rektonomics';

// Use with default data
<RektonomicsSection />

// Use with custom data
<RektonomicsSection data={customTokenomicsData} />
```