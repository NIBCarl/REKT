/**
 * MainContainer Component
 * Provides the main container with a purple-stroked PNG frame overlay (no side cropping).
 * Corner brackets are disabled; inner spacing handled via content wrapper with top-safe area.
 */

import React from 'react';
import Image from 'next/image';
import { MainContainerProps } from '../types';
import { REKTONOMICS_ASSETS } from '../constants';
import { 
  useOptimizedImage, 
  ImageFallback, 
  getOptimizedImageProps, 
  isAssetCritical,
  getResponsiveSizes 
} from '../utils/assetOptimization';
import styles from './MainContainer.module.css';
import fallbackStyles from '../utils/assetOptimization.module.css';

const MainContainer: React.FC<MainContainerProps> = ({
  children,
  className = '',
}) => {
  const { isLoading, hasError, handleLoad, handleError } = useOptimizedImage({
    src: REKTONOMICS_ASSETS.border,
    priority: true,
    preload: true,
  });

  const imageProps = getOptimizedImageProps({
    src: REKTONOMICS_ASSETS.border,
    alt: 'Futuristic container border decoration',
    fill: true,
    className: `${styles.borderImage} ${isLoading ? fallbackStyles.imageLoading : fallbackStyles.imageLoaded}`,
    priority: true,
  }, isAssetCritical(REKTONOMICS_ASSETS.border));

  return (
    <div className={`${styles.mainContainer} ${className}`}>
      {/* Border image overlay */}
      <div className={styles.borderOverlay}>
        {hasError ? (
          <ImageFallback 
            type="border" 
            className={`${styles.borderImage} ${fallbackStyles.assetFallback}`}
          />
        ) : (
          <Image
            {...imageProps}
            onLoad={handleLoad}
            onError={handleError}
            sizes={getResponsiveSizes('background')}
            alt={imageProps.alt || 'Futuristic container border decoration'}
          />
        )}
      </div>
      
      {/* Content wrapper */}
      <div className={styles.contentWrapper}>
        {children}
      </div>
    </div>
  );
};

export default MainContainer;