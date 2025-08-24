/**
 * TaxContainer Component
 * Provides a container with futuristic border styling for the tax section
 */

import React from 'react';
import { MainContainerProps } from '../types';
import styles from './TaxContainer.module.css';

const TaxContainer: React.FC<MainContainerProps> = ({
  children,
  className = '',
}) => {
  return (
    <div className={`${styles.taxContainer} ${className}`}>
      {/* Content wrapper */}
      <div className={styles.contentWrapper}>
        {children}
      </div>
    </div>
  );
};

export default TaxContainer;