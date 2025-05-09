
import React, { useState, useEffect, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

/**
 * OptimizedImage Component
 * 
 * A performance-optimized image component that:
 * - Uses native lazy loading
 * - Shows a loading placeholder
 * - Supports responsive sizes
 * - Provides proper alt text for accessibility
 * - Has priority loading option
 * - Uses IntersectionObserver for better performance
 */
const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  loading = 'lazy',
  priority = false
}) => {
  const [isLoaded, setIsLoaded] = useState(priority);
  const [isError, setIsError] = useState(false);
  const [isVisible, setIsVisible] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Reset state when src changes
  useEffect(() => {
    if (!priority) {
      setIsLoaded(false);
      setIsError(false);
    }
  }, [src, priority]);

  // If priority is true, set loading to 'eager'
  const imgLoading = priority ? 'eager' : loading;

  // Setup intersection observer to load images only when they're about to enter viewport
  useEffect(() => {
    if (!priority && imgRef.current) {
      // Skip observation if browser doesn't support it
      if (!('IntersectionObserver' in window)) {
        setIsVisible(true);
        return;
      }
      
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        },
        { rootMargin: '300px' } // Start loading when image is within 300px of viewport (larger margin)
      );
      
      observer.observe(imgRef.current);
      
      return () => {
        if (imgRef.current) {
          observer.disconnect();
        }
      };
    } else {
      // If priority is true, mark as visible immediately
      setIsVisible(true);
    }
  }, [priority]);

  // Preload priority images
  useEffect(() => {
    if (priority && src) {
      const preloadLink = document.createElement('link');
      preloadLink.rel = 'preload';
      preloadLink.as = 'image';
      preloadLink.href = src;
      document.head.appendChild(preloadLink);

      return () => {
        document.head.removeChild(preloadLink);
      };
    }
  }, [priority, src]);

  // For priority images, return a simpler version with no loading state
  if (priority) {
    return (
      <img
        src={src}
        alt={alt}
        className={className}
        width={width}
        height={height}
        loading="eager"
      />
    );
  }

  return (
    <div 
      className={`relative overflow-hidden ${!isLoaded && !isError ? 'bg-gray-50' : ''}`} 
      style={{ width, height }}
      ref={imgRef}
    >
      {isError ? (
        <div className="w-full h-full flex items-center justify-center bg-gray-50 text-gray-400 text-xs">
          <span>Image not available</span>
        </div>
      ) : (
        <>
          {isVisible && (
            <img
              src={src}
              alt={alt}
              className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-200`}
              width={width}
              height={height}
              loading={imgLoading}
              onLoad={() => setIsLoaded(true)}
              onError={() => setIsError(true)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default OptimizedImage;
