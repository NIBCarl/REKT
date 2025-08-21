/**
 * PieChart Component
 * Displays the tokenomics pie chart using existing asset
 * Implements right-aligned positioning with responsive scaling
 */

import React from 'react';
import Image from 'next/image';
import { PieChartProps } from '../types';
import { 
  useOptimizedImage, 
  ImageFallback, 
  getOptimizedImageProps, 
  isAssetImportant,
  getResponsiveSizes 
} from '../utils/assetOptimization';
import styles from './PieChart.module.css';
import fallbackStyles from '../utils/assetOptimization.module.css';

const PieChart: React.FC<PieChartProps> = ({
    data,
    chartImageSrc,
}) => {
    const { isLoading, hasError, handleLoad, handleError } = useOptimizedImage({
        src: chartImageSrc,
        priority: isAssetImportant(chartImageSrc),
        preload: false,
    });

    const imageProps = getOptimizedImageProps({
        src: chartImageSrc,
        alt: `Tokenomics distribution pie chart showing ${data.map(item => `${item.name} ${item.percentage}%`).join(', ')}`,
        width: 300,
        height: 300,
        className: `${styles.chartImage} ${isLoading ? fallbackStyles.imageLoading : fallbackStyles.imageLoaded}`,
        priority: isAssetImportant(chartImageSrc),
    }, isAssetImportant(chartImageSrc));

    return (
        <div className={styles.pieChartContainer}>
            <div className={styles.chartWrapper}>
                {hasError ? (
                    <ImageFallback 
                        type="chart" 
                        className={`${styles.chartImage} ${fallbackStyles.assetFallback}`}
                    >
                        <div className={fallbackStyles.fallbackContent}>
                            <span className={fallbackStyles.fallbackIcon} aria-hidden="true">📊</span>
                            <span className={fallbackStyles.fallbackText}>Chart unavailable</span>
                        </div>
                    </ImageFallback>
                ) : (
                    <Image
                        {...imageProps}
                        onLoad={handleLoad}
                        onError={handleError}
                        sizes={getResponsiveSizes('chart')}
                        alt={imageProps.alt || 'Tokenomics distribution pie chart'}
                    />
                )}
            </div>
        </div>
    );
};

export default PieChart;