/**
 * TaxInfoSection Component
 * Displays tax information with color-coded breakdown using tax background asset
 * Requirements: 5.1, 5.2, 5.3, 5.4
 */

import React from 'react';
import { TaxInfoSectionProps } from '../types';
import styles from './TaxInfoSection.module.css';

const TaxInfoSection: React.FC<TaxInfoSectionProps> = ({
  taxPercentage,
  breakdown,
  description,
}) => {
  return (
    <div className={styles.taxInfoSection}>
        {/* Title section */}
        <div className={styles.titleSection}>
          <h3 className={styles.title}>
            {taxPercentage}% Tax on Every Buy/Sell
          </h3>
        </div>
        
        {/* Breakdown section */}
        <div className={styles.breakdownSection}>
          {breakdown.map((item) => (
            <div key={item.name} className={styles.breakdownItem}>
              <span 
                className={styles.percentage}
                style={{ color: item.color }}
              >
                {item.percentage}%
              </span>
              <div className={styles.itemDetails}>
                <span className={styles.itemName} style={{ color: item.color }}>
                  {item.name.toUpperCase()}
                </span>
                {item.description && (
                  <span className={styles.itemDescription} style={{ color: item.color }}>
                    {item.description}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
        
      {/* Description section */}
      <div className={styles.descriptionSection}>
        <p className={styles.description}>
          {description}
        </p>
      </div>
    </div>
  );
};

export default TaxInfoSection;