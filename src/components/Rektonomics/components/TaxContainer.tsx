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
      {/* Corner brackets */}
      <div className={styles.cornerBrackets}>
        <div className={`${styles.bracket} ${styles.topLeft}`}></div>
        <div className={`${styles.bracket} ${styles.topRight}`}></div>
        <div className={`${styles.bracket} ${styles.bottomLeft}`}></div>
        <div className={`${styles.bracket} ${styles.bottomRight}`}></div>
      </div>
      
      {/* Content wrapper */}
      <div className={styles.contentWrapper}>
        {children}
      </div>
    </div>
  );
};

export default TaxContainer;