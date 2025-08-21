/**
 * TotalSupplyBanner Component
 * Displays the total supply information in a cyan banner using the background SVG asset
 * Implements requirements 3.1, 3.2, 3.3, 3.4
 */

import React from 'react';
import Image from 'next/image';
import { TotalSupplyBannerProps } from '../types';
import { REKTONOMICS_ASSETS } from '../constants';
import { 
  useOptimizedImage, 
  ImageFallback, 
  getOptimizedImageProps, 
  isAssetCritical,
  getResponsiveSizes 
} from '../utils/assetOptimization';
import styles from './TotalSupplyBanner.module.css';
import fallbackStyles from '../utils/assetOptimization.module.css';

const TotalSupplyBanner: React.FC<TotalSupplyBannerProps> = ({
  totalSupply,
  tokenSymbol,
}) => {
  const { isLoading, hasError, handleLoad, handleError } = useOptimizedImage({
    src: REKTONOMICS_ASSETS.totalSupplyBg,
    priority: true,
    preload: true,
  });

  const imageProps = getOptimizedImageProps({
    src: REKTONOMICS_ASSETS.totalSupplyBg,
    alt: 'Total supply banner background',
    fill: true,
    className: `${styles.backgroundImage} ${isLoading ? fallbackStyles.imageLoading : fallbackStyles.imageLoaded}`,
    priority: true,
  }, isAssetCritical(REKTONOMICS_ASSETS.totalSupplyBg));

  return (
    <div className={styles.totalSupplyBanner}>
      {/* Background SVG */}
      <div className={styles.backgroundContainer}>
        {hasError ? (
          <ImageFallback 
            type="background" 
            className={`${styles.backgroundImage} ${fallbackStyles.assetFallback}`}
          />
        ) : (
          <Image
            {...imageProps}
            onLoad={handleLoad}
            onError={handleError}
            sizes={getResponsiveSizes('banner')}
            alt={imageProps.alt || 'Total supply banner background'}
          />
        )}
      </div>
      
      {/* Content overlay */}
      <div className={styles.contentOverlay}>
        <span className={styles.totalSupplyText}>
          Total Supply: {totalSupply} {tokenSymbol}
        </span>
      </div>
    </div>
  );
};

export default TotalSupplyBanner;