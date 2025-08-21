/**
 * Main Rektonomics Section Component
 * Implements the redesigned tokenomics section with futuristic styling
 */

import React from 'react';
import { RektonomicsSectionProps } from './types';
import { DEFAULT_TOKENOMICS_DATA, DISTRIBUTION_ITEMS, TAX_BREAKDOWN_ITEMS, REKTONOMICS_ASSETS } from './constants';
import styles from './RektonomicsSection.module.css';

// Import sub-components
import MainContainer from './components/MainContainer';
import TaxContainer from './components/TaxContainer';
import TotalSupplyBanner from './components/TotalSupplyBanner';
import DistributionBreakdown from './components/DistributionBreakdown';
import MascotCenter from './components/MascotCenter';
import PieChart from './components/PieChart';
import TaxInfoSection from './components/TaxInfoSection';
import AssetPreloader from './components/AssetPreloader';

const RektonomicsSection: React.FC<RektonomicsSectionProps> = ({
  data = DEFAULT_TOKENOMICS_DATA,
  className = '',
}) => {
  return (
    <section className={`${styles.rektonomicsSection} ${className}`}>
      {/* Preload critical assets */}
      <AssetPreloader />
      
      {/* Main Rektonomics Container */}
      <MainContainer className={styles.mainContainer}>
        {/* Header Section */}
        <div className={styles.headerSection}>
          <h2 className={styles.sectionTitle}>Rektonomics</h2>
          <p className={styles.sectionSubtitle}>Fair distribution for maximum chaos</p>
          <TotalSupplyBanner
            totalSupply={data.totalSupply.amount}
            tokenSymbol={data.totalSupply.symbol}
          />
        </div>

        {/* Content Grid */}
        <div className={styles.contentGrid}>
          <div className={styles.distributionSection}>
            <h3 className={styles.distributionTitle}>Distribution Breakdown</h3>
            <DistributionBreakdown items={DISTRIBUTION_ITEMS} />
          </div>
          <MascotCenter
            gifSrc={REKTONOMICS_ASSETS.mascotGif}
            altText="REKT Mascot Animation"
          />
          <div className={styles.pieChart}>
            <PieChart
              data={DISTRIBUTION_ITEMS}
              chartImageSrc={REKTONOMICS_ASSETS.pieChart}
            />
          </div>
        </div>
      </MainContainer>

      {/* Tax Info Section - Separate Container */}
      <TaxContainer className={styles.taxContainer}>
        <TaxInfoSection
          taxPercentage={data.tax.percentage}
          breakdown={TAX_BREAKDOWN_ITEMS}
          description={data.tax.burnCapDescription}
        />
      </TaxContainer>
    </section>
  );
};

export default RektonomicsSection;