import React from 'react';
import type { FilterKey, AllowedFilters } from '../types/types';
/**
 * Props for the FilterSelector component
 *
 * @interface FilterSelectorProps
 * @property {string} capturedImage - Base64-encoded data URL of the captured photo
 *   Used to generate thumbnail previews for each filter
 * @property {FilterKey} selectedFilter - Key of the currently selected filter
 *   Determines which filter button appears in the selected state
 * @property {(filterKey: FilterKey) => void} onSelectFilter - Callback fired when user selects a filter
 *   Receives the key of the newly selected filter
 */
interface FilterSelectorProps {
  allowedFilters?: AllowedFilters;
  capturedImage: string;
  onSelectFilter: (filterKey: FilterKey) => void;
  selectedFilter: FilterKey;
}
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
declare const FilterSelector: React.FC<FilterSelectorProps>;
export default FilterSelector;
