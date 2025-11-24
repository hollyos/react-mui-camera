import { j as jsxRuntimeExports } from '../_virtual/jsx-runtime.js';
import { Box, Typography, Stack, Button } from '@mui/material';
import { FILTERS } from '../utils/filters.js';
import { toCssBlendMode } from '../utils/styleUtils.js';

/**
 * FilterSelector Component
 *
 * Renders an interactive, horizontally scrollable filter selection panel displaying
 * thumbnail previews of all available filters organized by category. Each filter
 * shows a real-time preview of how it will affect the captured image, allowing
 * users to make informed decisions before applying.
 *
 * Key Features:
 * - Filters organized into collapsible sections by category
 * - Real-time thumbnail previews showing filter effects
 * - Horizontal scroll for accessing all filters
 * - Visual indication of currently selected filter
 * - Support for complex filters with blend modes and overlays
 * - Responsive layout adapting to container width
 *
 * Filter Organization:
 * Filters are automatically grouped by their `section` property from the FILTERS
 * configuration. Each section displays:
 * - Section label (e.g., "Basic Filters", "Color Tones")
 * - Horizontally arranged filter buttons
 * - Filter name labels below each thumbnail
 *
 * Visual Design:
 * - Dark semi-transparent background for visibility over images
 * - 70x70px square thumbnails with rounded corners
 * - Selected filter highlighted with contained button style
 * - Unselected filters shown with outlined button style
 * - Section headers in uppercase with reduced opacity
 * - Smooth horizontal scrolling with padding
 *
 * Performance Considerations:
 * - Thumbnails use CSS filters for efficient GPU-accelerated rendering
 * - Complex blend modes are previewed using CSS mix-blend-mode
 * - No canvas operations during preview for optimal scrolling performance
 * - Image reuse across all thumbnails (single base image)
 *
 * @component
 * @example
 * ```tsx
 * const [selectedFilter, setSelectedFilter] = useState<FilterKey>('none');
 * const [capturedPhoto, setCapturedPhoto] = useState<string>(imageData);
 *
 * <FilterSelector
 *   capturedImage={capturedPhoto}
 *   selectedFilter={selectedFilter}
 *   onSelectFilter={(key) => {
 *     setSelectedFilter(key);
 *     // Optionally preview on main image
 *   }}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Integrated with camera workflow
 * {capturedImage && (
 *   <FilterSelector
 *     capturedImage={capturedImage}
 *     selectedFilter={currentFilter}
 *     onSelectFilter={handleFilterChange}
 *   />
 * )}
 * ```
 *
 * @param {FilterSelectorProps} props - Component props
 * @returns {JSX.Element} A scrollable panel with categorized filter thumbnails
 */
const FilterSelector = ({ allowedFilters = 'all', capturedImage, onSelectFilter, selectedFilter }) => {
  /**
   * Groups filters by their section category
   *
   * Iterates through all filters and organizes them into a record where
   * keys are section names and values are arrays of [filterKey, filterConfig] tuples.
   * This enables rendering filters in organized, labeled groups.
   *
   * @type {Record<string, [FilterKey, typeof FILTERS[FilterKey]][]>}
   */
  const filtersBySection = {};
  Object.entries(FILTERS).forEach(([key, config]) => {
    const k = key;
    const section = config.section;
    // Determine if this section is allowed
    const isAllowed =
      allowedFilters === 'all' ||
      (typeof allowedFilters === 'string' && allowedFilters === section) ||
      (Array.isArray(allowedFilters) && allowedFilters.includes(section));
    if (!isAllowed) return;
    if (!filtersBySection[section]) {
      filtersBySection[section] = [];
    }
    filtersBySection[section].push([k, config]);
  });
  return jsxRuntimeExports.jsxs(Box, {
    sx: {
      bgcolor: 'rgba(0,0,0,0.8)',
      width: '100%',
      p: 2,
    },
    children: [
      jsxRuntimeExports.jsx(Typography, {
        variant: 'subtitle2',
        sx: { color: 'white', mb: 1 },
        children: 'Choose Filter',
      }),
      jsxRuntimeExports.jsx(Stack, {
        direction: 'row',
        spacing: 0,
        sx: { overflowX: 'auto', pb: 1 },
        children: Object.entries(filtersBySection).map(([sectionName, filters]) =>
          jsxRuntimeExports.jsxs(
            Box,
            {
              sx: { position: 'relative', pr: 3, mr: 3 },
              children: [
                jsxRuntimeExports.jsx(Box, {
                  sx: { width: '100%', mb: 1, position: 'absolute', top: 0 },
                  children: jsxRuntimeExports.jsx(Typography, {
                    variant: 'overline',
                    sx: {
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: '0.65rem',
                      mb: 0.5,
                      textTransform: 'uppercase',
                      letterSpacing: 0.5,
                    },
                    children: sectionName,
                  }),
                }),
                jsxRuntimeExports.jsx(Box, {
                  sx: { display: 'flex', flexDirection: 'row', gap: 1, mt: 4 },
                  children: filters.map(
                    ([key, { name, filter, filterBlendMode, filterFill, imgBackground, imgBlendMode }]) =>
                      jsxRuntimeExports.jsxs(
                        Box,
                        {
                          sx: { display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 70 },
                          children: [
                            jsxRuntimeExports.jsxs(Button, {
                              onClick: () => onSelectFilter(key),
                              variant: selectedFilter === key ? 'contained' : 'outlined',
                              sx: {
                                width: 70,
                                height: 70,
                                p: 0,
                                borderRadius: 2,
                                overflow: 'hidden',
                                position: 'relative',
                              },
                              children: [
                                jsxRuntimeExports.jsx(Box, {
                                  sx: {
                                    alignItems: 'center',
                                    background: imgBackground || 'transparent',
                                    display: 'flex',
                                    height: '100%',
                                    justifyContent: 'center',
                                    overflow: 'hidden',
                                    width: '100%',
                                  },
                                  children: jsxRuntimeExports.jsx('img', {
                                    src: capturedImage,
                                    alt: name,
                                    style: {
                                      display: 'block',
                                      filter,
                                      height: '100%',
                                      mixBlendMode:
                                        toCssBlendMode(imgBlendMode === 'normal' ? 'initial' : imgBlendMode) ||
                                        'initial',
                                      objectFit: 'cover',
                                      width: '100%',
                                    },
                                  }),
                                }),
                                filterBlendMode &&
                                  typeof filterFill === 'string' &&
                                  jsxRuntimeExports.jsx(Box, {
                                    sx: {
                                      position: 'absolute',
                                      top: 0,
                                      left: 0,
                                      width: '100%',
                                      height: '100%',
                                      background: filterFill,
                                      mixBlendMode: filterBlendMode,
                                      pointerEvents: 'none',
                                    },
                                  }),
                              ],
                            }),
                            jsxRuntimeExports.jsx(Typography, {
                              variant: 'caption',
                              sx: { color: 'white', mt: 0.5 },
                              children: name,
                            }),
                          ],
                        },
                        key
                      )
                  ),
                }),
              ],
            },
            sectionName
          )
        ),
      }),
    ],
  });
};

export { FilterSelector as default };
//# sourceMappingURL=FilterSelector.js.map
