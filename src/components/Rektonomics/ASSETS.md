# Rektonomics Assets Documentation

This document describes the available assets for the Rektonomics section, sourced exclusively from `/public/assets/Rektonomics/`.

## Current Asset Configuration

### Mascot Assets
- **Current**: `rek_coindust1 in the middle of the tokenomics.gif` - Animated coin dust effect
- **Alternative**: `main gif in the rektonomics put it the middle.gif` - Main mascot animation

### Chart Assets
- **Current**: `tokenomics chart.png` - Main tokenomics chart from Rektonomics directory

### Background Assets
- **Border**: `rektonomics border.jpg` - Futuristic container border
- **Total Supply**: `total supply background.svg` - Banner background
- **Tax Background**: `tax on every buy-sell background.png` - Tax section background

### Distribution Line Assets
All located in `/assets/Rektonomics/`:
- `presale line.svg`
- `treasury line.svg` 
- `liquidity line.svg`
- `Staking pool line.svg`
- `community fund line.svg`

## How to Change Assets

### Method 1: Update Constants
Edit `src/components/Rektonomics/constants.ts`:

```typescript
export const REKTONOMICS_ASSETS: RektonomicsAssets = {
  // Change mascot
  mascotGif: '/assets/mascot_donut.gif', // or other option
  
  // Change chart
  pieChart: '/assets/Rektonomics/tokenomics chart.png', // or other option
  
  // Other assets...
};
```

### Method 2: Use Asset Options
Use the predefined `ASSET_OPTIONS` in constants:

```typescript
// In your component
import { ASSET_OPTIONS } from './constants';

// Use different mascot
const mascotSrc = ASSET_OPTIONS.MASCOTS.DONUT;

// Use different chart
const chartSrc = ASSET_OPTIONS.CHARTS.REKTONOMICS;
```

## Asset Validation

The `validateAssets()` function ensures all required assets are properly configured:

```typescript
import { validateAssets } from './constants';

if (!validateAssets()) {
  console.warn('Some Rektonomics assets are missing or misconfigured');
}
```

## Available Assets by Location

### `/public/assets/Rektonomics/` (Primary Source)
- `rektonomics border.jpg` - Container border
- `tokenomics chart.png` - Main tokenomics chart
- `main gif in the rektonomics put it the middle.gif` - Main mascot animation
- `rek_coindust1 in the middle of the tokenomics.gif` - Coin dust mascot (current)
- `total supply background.svg` - Banner background
- `tax on every buy-sell background.png` - Tax section background
- `233cec39dec809a95b0f5b6c99908077fd634b28.jpg` - Alternative border/background
- `Group 2648.svg` - Additional design element
- Distribution line SVGs for each category:
  - `presale line.svg`
  - `treasury line.svg`
  - `liquidity line.svg`
  - `Staking pool line.svg`
  - `community fund line.svg`

## Recommendations

1. **Current setup**: `tokenomics chart.png` with `rek_coindust1` mascot - optimal for the design
2. **Alternative setup**: Use `main gif` mascot for more prominent animation
3. **Border options**: Default `rektonomics border.jpg` or alternative `233cec39...jpg`

## Performance Notes

- GIF assets are larger than static images
- Consider using WebP versions if available
- The asset preloader handles critical asset loading
- Non-critical assets load lazily for better performance