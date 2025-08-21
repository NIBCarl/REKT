/**
 * AssetPreloader Component
 * Preloads critical assets for better performance
 */

import React, { useEffect } from 'react';
import { ASSET_PRIORITIES } from '../utils/assetOptimization';

interface AssetPreloaderProps {
  onPreloadComplete?: () => void;
}

const AssetPreloader: React.FC<AssetPreloaderProps> = ({ onPreloadComplete }) => {
  useEffect(() => {
    const preloadAssets = async () => {
      const preloadPromises = ASSET_PRIORITIES.critical.map((src) => {
        return new Promise<void>((resolve) => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'image';
          link.href = src;
          
          link.onload = () => resolve();
          link.onerror = () => {
            console.warn(`Failed to preload asset: ${src}`);
            resolve(); // Don't fail the entire preload process
          };
          
          document.head.appendChild(link);
          
          // Cleanup after a timeout
          setTimeout(() => {
            try {
              document.head.removeChild(link);
            } catch {
              // Link might already be removed
            }
          }, 10000);
        });
      });

      try {
        await Promise.allSettled(preloadPromises);
        onPreloadComplete?.();
      } catch (error) {
        console.warn('Asset preloading completed with some failures:', error);
        onPreloadComplete?.();
      }
    };

    preloadAssets();
  }, [onPreloadComplete]);

  // This component doesn't render anything visible
  return null;
};

export default AssetPreloader;