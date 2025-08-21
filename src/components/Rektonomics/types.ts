/**
 * TypeScript interfaces for Rektonomics section components
 * Based on requirements and design specifications
 */

// Core data models
export interface TokenomicsData {
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

// Asset path constants
export interface RektonomicsAssets {
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
  // Alternative assets (all from Rektonomics directory)
  alternativeMascots?: {
    mainGif: string;
    coindustGif: string;
  };
  alternativeCharts?: {
    rektonomicsChart: string;
  };
  additionalAssets?: {
    alternativeBorder: string;
    groupElement: string;
  };
}

// Distribution item for breakdown display
export interface DistributionItem {
  name: string;
  percentage: number;
  svgAsset: string;
  color?: string;
}

// Tax breakdown item
export interface TaxBreakdownItem {
  name: string;
  percentage: number;
  color: string;
  description?: string;
}

// Component prop interfaces
export interface MainContainerProps {
  children: React.ReactNode;
  className?: string;
}

export interface TotalSupplyBannerProps {
  totalSupply: string;
  tokenSymbol: string;
}

export interface DistributionBreakdownProps {
  items: DistributionItem[];
}

export interface MascotCenterProps {
  gifSrc: string;
  altText: string;
}

export interface PieChartProps {
  data: DistributionItem[];
  chartImageSrc: string;
}

export interface TaxInfoSectionProps {
  taxPercentage: number;
  breakdown: TaxBreakdownItem[];
  description: string;
}

export interface RektonomicsSectionProps {
  data?: TokenomicsData;
  className?: string;
}