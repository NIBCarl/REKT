# Design Document

## Overview

The Rektonomics section redesign transforms the current basic card-based layout into a sophisticated, single-container design that matches the provided mockup. The design leverages existing assets from the `/assets/Rektonomics/` directory to create a cohesive, futuristic aesthetic that aligns with the overall $REKT brand identity.

## Architecture

### Component Structure
```
RektonomicsSection
├── MainContainer (with border styling)
│   ├── HeaderSection
│   │   ├── Title ("Rektonomics")
│   │   ├── Subtitle ("Fair distribution for maximum chaos")
│   │   └── TotalSupplyBanner
│   ├── ContentGrid
│   │   ├── DistributionBreakdown (left)
│   │   ├── MascotCenter (middle)
│   │   └── PieChart (right)
│   └── TaxInfoSection (bottom)
```

### Layout System
- **Container**: Single main container with futuristic border styling
- **Grid**: Three-column layout for main content (distribution, mascot, chart)
- **Responsive**: Stacks vertically on mobile, maintains structure on tablet/desktop
- **Spacing**: Follows 8px base unit system from rektonomics.json

## Components and Interfaces

### MainContainer Component
```typescript
interface MainContainerProps {
  children: React.ReactNode;
  className?: string;
}
```
- Uses `rektonomics border.jpg` as background/border styling
- Implements corner bracket accents in neon pink/cyan
- Dark purple background (#1a0f2b)
- Rounded corners (16px) with glowing border effects

### TotalSupplyBanner Component
```typescript
interface TotalSupplyBannerProps {
  totalSupply: string;
  tokenSymbol: string;
}
```
- Uses `total supply background.svg` asset
- Cyan background with dark text
- Positioned prominently at top of content area
- Responsive text sizing

### DistributionBreakdown Component
```typescript
interface DistributionItem {
  name: string;
  percentage: number;
  svgAsset: string;
}

interface DistributionBreakdownProps {
  items: DistributionItem[];
}
```
- Renders horizontal lines using individual SVG assets:
  - `presale line.svg`
  - `treasury line.svg`
  - `liquidity line.svg`
  - `Staking pool line.svg`
  - `community fund line.svg`
- Left-aligned with percentage labels
- Consistent spacing and typography

### MascotCenter Component
```typescript
interface MascotCenterProps {
  gifSrc: string;
  altText: string;
}
```
- Displays `main gif in the middle.gif`
- Centered positioning with appropriate sizing
- Drop shadow effects for depth
- Maintains aspect ratio across screen sizes

### PieChart Component
```typescript
interface PieChartProps {
  data: DistributionItem[];
  chartImageSrc: string;
}
```
- Uses `tokenomics chart.png` asset
- Right-aligned positioning
- Responsive scaling
- Color coordination with distribution breakdown

### TaxInfoSection Component
```typescript
interface TaxBreakdownItem {
  name: string;
  percentage: number;
  color: string;
}

interface TaxInfoSectionProps {
  taxPercentage: number;
  breakdown: TaxBreakdownItem[];
  description: string;
}
```
- Uses `tax on every buy-sell background.png`
- Horizontal layout with color-coded percentages
- Integrated explanation text
- Bottom positioning within main container

## Data Models

### TokenomicsData Interface
```typescript
interface TokenomicsData {
  totalSupply: {
    amount: string;
    symbol: string;
  };
  distribution: {
    presale: number;
    treasury: number;
    liquidityPool: number;
    stakingPool: number;
    communityFund: number;
  };
  tax: {
    percentage: number;
    breakdown: {
      stakingPool: number;
      treasury: number;
      burn: number;
    };
    burnCapDescription: string;
  };
}
```

### AssetPaths Interface
```typescript
interface RektonomicsAssets {
  border: string;
  totalSupplyBg: string;
  mascotGif: string;
  pieChart: string;
  taxBackground: string;
  distributionLines: {
    presale: string;
    treasury: string;
    liquidity: string;
    staking: string;
    community: string;
  };
}
```

## Error Handling

### Asset Loading
- Implement fallback styling if border assets fail to load
- Graceful degradation for missing SVG assets
- Error boundaries around image components
- Loading states for GIF animations

### Responsive Breakpoints
- Handle layout shifts smoothly
- Maintain readability at all screen sizes
- Prevent content overflow
- Ensure interactive elements remain accessible

### Performance Considerations
- Lazy loading for non-critical assets
- Optimized image formats and sizes
- Efficient re-rendering strategies
- Memory management for animated GIFs

## Testing Strategy

### Visual Regression Testing
- Screenshot comparisons across breakpoints
- Asset loading verification
- Animation performance testing
- Cross-browser compatibility

### Unit Testing
- Component rendering with various props
- Data transformation accuracy
- Responsive behavior validation
- Error state handling

### Integration Testing
- Asset path resolution
- Layout consistency
- Interactive element functionality
- Performance benchmarks

### Accessibility Testing
- Screen reader compatibility
- Keyboard navigation
- Color contrast validation
- Alternative text verification

## Implementation Notes

### Asset Integration
- All assets referenced from `/assets/Rektonomics/` directory
- Use Next.js Image component for optimization
- Implement proper alt text for accessibility
- Consider WebP format for better compression

### Styling Approach
- Combine Tailwind utilities with custom CSS for complex layouts
- Use CSS Grid for main content layout
- Implement CSS custom properties for theme colors
- Leverage existing design system variables

### Animation Strategy
- Subtle hover effects on interactive elements
- Smooth transitions for responsive changes
- Controlled GIF playback for performance
- Progressive enhancement for animations

### Performance Optimization
- Image preloading for critical assets
- Efficient bundle splitting
- Minimize layout shifts
- Optimize for Core Web Vitals