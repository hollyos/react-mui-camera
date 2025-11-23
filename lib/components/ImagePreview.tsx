import React from 'react';
import { Box } from '@mui/material';
import { FILTERS } from '../utils/filters';
import type { FilterKey } from '../types/types';

/**
 * Props for the ImagePreview component
 *
 * @interface ImagePreviewProps
 * @property {string} capturedImage - Base64-encoded data URL of the captured photo to display
 * @property {FilterKey} selectedFilter - Key identifying which filter to apply to the preview
 * @property {boolean} isFlipped - Whether to mirror the image horizontally
 * @property {boolean} [skipFilters=false] - If true, renders image without any filter effects
 */
interface ImagePreviewProps {
  capturedImage: string;
  selectedFilter: FilterKey;
  isFlipped: boolean;
  skipFilters?: boolean;
  imageAdjustments: {
    brightness: number;
    contrast: number;
    saturation: number;
  };
}

/**
 * ImagePreview Component
 *
 * Displays a captured photo with the currently selected filter applied, centered
 * within its container. Handles both simple CSS filter effects and complex multi-layer
 * filters that require blend mode overlays.
 *
 * The component provides a full-size preview of how the final image will appear
 * after filter application, allowing users to see the complete effect before saving.
 * It respects the horizontal flip setting to maintain consistency with the camera preview.
 *
 * Key Features:
 * - Centered, responsive image display
 * - CSS filter application for real-time preview
 * - Blend mode overlay support for complex filters
 * - Horizontal flip preservation
 * - Skip mode for filter-free display
 * - Aspect ratio preservation with object-fit
 *
 * Filter Rendering:
 * 1. Base image with CSS filter applied
 * 2. Optional blend mode overlay (for filters like multiply, screen, overlay)
 * 3. Horizontal flip transformation if enabled
 * 4. Contained within viewport bounds
 *
 * The component uses a two-layer approach for complex filters:
 * - Bottom layer: Image with CSS filter
 * - Top layer: Colored overlay with blend mode (if applicable)
 *
 * This matches the final canvas rendering pipeline used during export,
 * ensuring WYSIWYG (What You See Is What You Get) accuracy.
 *
 * Layout Behavior:
 * - Image scaled to fit within container while preserving aspect ratio
 * - Centered both horizontally and vertically
 * - Padding around edges for breathing room
 * - No scrolling (contained view)
 *
 * @component
 * @example
 * ```tsx
 * // Basic usage with filter
 * <ImagePreview
 *   capturedImage={photoDataUrl}
 *   selectedFilter="vintage"
 *   isFlipped={false}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Preview with horizontal flip
 * <ImagePreview
 *   capturedImage={photoDataUrl}
 *   selectedFilter="summerHeat"
 *   isFlipped={true}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Raw image without filters
 * <ImagePreview
 *   capturedImage={photoDataUrl}
 *   selectedFilter="none"
 *   isFlipped={false}
 *   skipFilters={true}
 * />
 * ```
 *
 * @param {ImagePreviewProps} props - Component props
 * @returns {JSX.Element} A centered image preview with applied filter effects
 */
const ImagePreview: React.FC<ImagePreviewProps> = ({
  capturedImage,
  selectedFilter,
  isFlipped,
  skipFilters = false,
  imageAdjustments,
}) => {
  // Retrieve filter configuration for the selected filter
  const filterDef = FILTERS[selectedFilter];

  /**
   * Computed styles for the preview image
   *
   * Applies CSS filter effects and transformations to create the visual preview.
   * In skip mode, all filters are bypassed for raw image display.
   */
  const baseFilter = `
    brightness(${imageAdjustments.brightness}%)
    contrast(${imageAdjustments.contrast}%)
    saturate(${imageAdjustments.saturation}%)
  `;

  const imageStyle: React.CSSProperties = {
    // Apply CSS filter string (or 'none' if skipping)
    filter: skipFilters ? baseFilter : `${baseFilter} ${filterDef.filter || ''}`,

    // Constrain to container while maintaining aspect ratio
    maxWidth: '100%',
    height: 'auto',
    width: 'auto',
    maxHeight: '100%',
    objectFit: 'contain',
    // Apply horizontal flip if enabled
    transform: isFlipped ? 'scaleX(-1)' : 'none',
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxSizing: 'border-box',
      }}
    >
      {/* Wrapper for relative positioning of blend overlay */}
      <Box sx={{ position: 'relative', display: 'inline-block', lineHeight: 0 }}>
        {/* Main filtered image */}
        <img src={capturedImage} alt='Captured' style={imageStyle} />

        {/* Blend mode overlay - only rendered for applicable complex filters */}
        {!skipFilters && (filterDef.blendMode || filterDef.fill) && (
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: typeof filterDef.fill === 'string' ? filterDef.fill : 'transparent',
              mixBlendMode: filterDef.blendMode || 'normal',
              opacity: 1,
              pointerEvents: 'none', // Allows clicks to pass through to image
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default ImagePreview;
