/**
 * Asset path constants and data structures for Rektonomics section
 * Based exclusively on assets in /public/assets/Rektonomics/
 * 
 * ASSET CONFIGURATION:
 * - Current mascot: rek_coindust1 (animated coin dust effect)
 * - Current chart: tokenomics chart.png (from Rektonomics directory)
 * - Alternative mascot: main gif
 * - All assets sourced from /assets/Rektonomics/ directory
 * 
 * To change assets, update the REKTONOMICS_ASSETS object below or use ASSET_OPTIONS
 */

import { RektonomicsAssets, TokenomicsData, DistributionItem, TaxBreakdownItem } from './types';

// Asset paths
export const REKTONOMICS_ASSETS: RektonomicsAssets = {
  border: '/assets/Rektonomics/frame_rektonomics.png',
  totalSupplyBg: '/assets/Rektonomics/total supply background.svg',
  mascotGif: '/assets/Rektonomics/main gif in the rektonomics put it the middle.gif',
  pieChart: '/assets/Rektonomics/tokenomics chart.png',
  taxBackground: '/assets/Rektonomics/tax.png',
  distributionLines: {
    presale: '/assets/Rektonomics/presale line.svg',
    treasury: '/assets/Rektonomics/treasury line.svg',
    liquidity: '/assets/Rektonomics/liquidity line.svg',
    staking: '/assets/Rektonomics/Staking pool line.svg',
    community: '/assets/Rektonomics/community fund line.svg',
  },
  // Alternative assets for different use cases (all from Rektonomics directory)
  alternativeMascots: {
    mainGif: '/assets/Rektonomics/main gif in the rektonomics put it the middle.gif',
    coindustGif: '/assets/Rektonomics/rek_coindust1 in the middle of the tokenomics.gif',
  },
  alternativeCharts: {
    rektonomicsChart: '/assets/Rektonomics/tokenomics chart.png',
  },
  additionalAssets: {
    alternativeBorder: '/assets/Rektonomics/233cec39dec809a95b0f5b6c99908077fd634b28.jpg',
    groupElement: '/assets/Rektonomics/Group 2648.svg',
  },
};

// Default tokenomics data structure
export const DEFAULT_TOKENOMICS_DATA: TokenomicsData = {
  totalSupply: {
    amount: '1,000,000,000',
    symbol: '$REKT',
  },
  distribution: {
    presale: 50,
    treasury: 20,
    liquidityPool: 15,
    stakingPool: 10,
    communityFund: 5,
  },
  tax: {
    percentage: 1,
    breakdown: {
      stakingPool: 50,
      treasury: 25,
      burn: 25,
    },
    burnCapDescription: 'Once 200M $REKT have been burned, burning will stop permanently. 50% will go to the treasury, and 50% will go to staking to encourage long-term growth.',
  },
};

// Distribution items with corresponding assets
export const DISTRIBUTION_ITEMS: DistributionItem[] = [
  {
    name: 'Presale',
    percentage: DEFAULT_TOKENOMICS_DATA.distribution.presale,
    svgAsset: REKTONOMICS_ASSETS.distributionLines.presale,
    color: '#8c5dff', // chart-purple from rektonomics.json
  },
  {
    name: 'Treasury',
    percentage: DEFAULT_TOKENOMICS_DATA.distribution.treasury,
    svgAsset: REKTONOMICS_ASSETS.distributionLines.treasury,
    color: '#00d1ff', // chart-cyan from rektonomics.json
  },
  {
    name: 'Liquidity Pool',
    percentage: DEFAULT_TOKENOMICS_DATA.distribution.liquidityPool,
    svgAsset: REKTONOMICS_ASSETS.distributionLines.liquidity,
    color: '#007bff', // chart-blue from rektonomics.json
  },
  {
    name: 'Staking Pool',
    percentage: DEFAULT_TOKENOMICS_DATA.distribution.stakingPool,
    svgAsset: REKTONOMICS_ASSETS.distributionLines.staking,
    color: '#0052cc', // chart-deep-blue from rektonomics.json
  },
  {
    name: 'Community Fund',
    percentage: DEFAULT_TOKENOMICS_DATA.distribution.communityFund,
    svgAsset: REKTONOMICS_ASSETS.distributionLines.community,
    color: '#4dc3ff', // chart-light-blue from rektonomics.json
  },
];

// Tax breakdown items with colors matching the design
export const TAX_BREAKDOWN_ITEMS: TaxBreakdownItem[] = [
  {
    name: 'Staking Pool',
    percentage: DEFAULT_TOKENOMICS_DATA.tax.breakdown.stakingPool,
    color: '#00ff41', // bright green matching design
  },
  {
    name: 'Treasury',
    percentage: DEFAULT_TOKENOMICS_DATA.tax.breakdown.treasury,
    color: '#00ff41', // green to match design
  },
  {
    name: 'Burn',
    percentage: DEFAULT_TOKENOMICS_DATA.tax.breakdown.burn,
    color: '#ff1744', // red matching design
    description: 'Until 200M Burn cap reached'
  },
];

// Color palette from rektonomics.json
export const REKTONOMICS_COLORS = {
  primaryBackground: '#1a0f2b',
  containerBackground: '#2a1a45',
  vibrantPurple: '#8a2be2',
  brightCyan: '#00ffff',
  hotPink: '#ff007f',
  primaryText: '#ffffff',
  secondaryText: '#a9a9a9',
  dataViz: {
    chartPurple: '#8c5dff',
    chartCyan: '#00d1ff',
    chartBlue: '#007bff',
    chartDeepBlue: '#0052cc',
    chartLightBlue: '#4dc3ff',
  },
} as const;

// Spacing constants from design system
export const SPACING = {
  baseUnit: 8,
  small: 8,
  medium: 16,
  large: 24,
  xlarge: 32,
} as const;

// Asset selection utilities (all from Rektonomics directory)
export const ASSET_OPTIONS = {
  // Mascot options - choose based on design preference
  MASCOTS: {
    COINDUST: REKTONOMICS_ASSETS.alternativeMascots?.coindustGif || REKTONOMICS_ASSETS.mascotGif,
    MAIN: REKTONOMICS_ASSETS.alternativeMascots?.mainGif || '/assets/Rektonomics/main gif in the rektonomics put it the middle.gif',
  },
  
  // Chart options - all from Rektonomics directory
  CHARTS: {
    REKTONOMICS: REKTONOMICS_ASSETS.alternativeCharts?.rektonomicsChart || '/assets/Rektonomics/tokenomics chart.png',
  },
} as const;

// Helper function to get current asset configuration
export const getCurrentAssets = () => ({
  mascot: REKTONOMICS_ASSETS.mascotGif,
  chart: REKTONOMICS_ASSETS.pieChart,
  border: REKTONOMICS_ASSETS.border,
  totalSupplyBg: REKTONOMICS_ASSETS.totalSupplyBg,
  taxBackground: REKTONOMICS_ASSETS.taxBackground,
});

// Asset validation - ensure all required assets exist
export const validateAssets = () => {
  const requiredAssets = [
    REKTONOMICS_ASSETS.border,
    REKTONOMICS_ASSETS.totalSupplyBg,
    REKTONOMICS_ASSETS.mascotGif,
    REKTONOMICS_ASSETS.pieChart,
    REKTONOMICS_ASSETS.taxBackground,
    ...Object.values(REKTONOMICS_ASSETS.distributionLines),
  ];
  
  return requiredAssets.every(asset => asset && asset.length > 0);
};