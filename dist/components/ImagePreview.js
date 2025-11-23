import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { Box } from '@mui/material';
import { FILTERS } from '../utils/filters';
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
const ImagePreview = ({ capturedImage, selectedFilter, isFlipped, skipFilters = false }) => {
  // Retrieve filter configuration for the selected filter
  const filterDef = FILTERS[selectedFilter];
  /**
   * Computed styles for the preview image
   *
   * Applies CSS filter effects and transformations to create the visual preview.
   * In skip mode, all filters are bypassed for raw image display.
   */
  const imageStyle = {
    // Apply CSS filter string (or 'none' if skipping)
    filter: !skipFilters ? filterDef.filter : 'none',
    // Constrain to container while maintaining aspect ratio
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'contain',
    // Apply horizontal flip if enabled
    transform: isFlipped ? 'scaleX(-1)' : 'none',
  };
  return _jsx(Box, {
    sx: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      p: 2,
    },
    children: _jsxs(Box, {
      sx: { position: 'relative', display: 'inline-block', lineHeight: 0 },
      children: [
        _jsx('img', { src: capturedImage, alt: 'Captured', style: imageStyle }),
        !skipFilters &&
          (filterDef.blendMode || filterDef.fill) &&
          _jsx(Box, {
            sx: {
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              background: typeof filterDef.fill === 'string' ? filterDef.fill : 'transparent',
              mixBlendMode: filterDef.blendMode || 'normal',
              opacity: 1,
              pointerEvents: 'none', // Allows clicks to pass through to image
            },
          }),
      ],
    }),
  });
};
export default ImagePreview;
