/**
 * Type Definitions for Camera Component System
 *
 * This module provides TypeScript type definitions for the custom camera
 * component ecosystem, including filter configurations, component props,
 * and canvas-related types for image processing.
 *
 * @module types
 */
export type BlendModes =
  | 'normal'
  | 'source-over'
  | 'source-in'
  | 'source-out'
  | 'source-atop'
  | 'destination-over'
  | 'destination-in'
  | 'destination-out'
  | 'destination-atop'
  | 'lighter'
  | 'copy'
  | 'xor'
  | 'multiply'
  | 'screen'
  | 'overlay'
  | 'darken'
  | 'lighten'
  | 'color-dodge'
  | 'color-burn'
  | 'hard-light'
  | 'soft-light'
  | 'difference'
  | 'exclusion'
  | 'hue'
  | 'saturation'
  | 'color'
  | 'luminosity';
export type FilterSections =
  | 'Basic Filters'
  | 'Color Tones'
  | 'Sepia Tones'
  | 'Graytones'
  | 'Full Color'
  | 'Crossblend';
export type AllowedFilters = 'all' | FilterSections | FilterSections[];
export interface FilterConfig {
  name: string;
  section: FilterSections;
  filter: string;
  filterBlendMode?: BlendModes;
  filterFill?: string | CanvasGradient | CanvasPattern;
  imgBlendMode?: BlendModes;
  imgBackground?: string;
}
/**
 * Type alias for filter identifier keys
 *
 * Represents a string key used to reference a specific filter in the FILTERS
 * configuration object. While this is currently a simple string type, it
 * provides semantic clarity and future extensibility (e.g., could be constrained
 * to keyof typeof FILTERS for stricter type checking).
 *
 * @typedef {string} FilterKey
 *
 * @example
 * ```typescript
 * const activeFilter: FilterKey = "vintage";
 * const filterConfig = FILTERS[activeFilter];
 * ```
 */
export type FilterKey = string;
/**
 * Type alias for camera component props
 *
 * @typedef {Object} CameraProps
 *
 * @property {Function} [onImageCaptured] - Optional callback function to handle captured image data
 * @property {Function} [onClose] - Optional callback function to handle close event
 * @property {boolean} [skipFilters] - Optional flag to skip the filter selection panel
 */
export interface CameraProps {
  onImageCaptured?: (imageData: string) => void;
  onClose?: () => void;
  skipFilters?: boolean;
  allowedFilters?: AllowedFilters;
}
