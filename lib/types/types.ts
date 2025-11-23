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
  | 'normal' // Default image blend mode
  | 'source-over' // New content draws new content on top
  | 'source-in' // New content only where both overlap
  | 'source-out' // New content only where it doesn't overlap
  | 'source-atop' // New content only where destination exists
  | 'destination-over' // New content drawn behind existing
  | 'destination-in' // Existing content where both overlap
  | 'destination-out' // Existing content where they don't overlap
  | 'destination-atop' // Existing content on top of new
  | 'lighter' // Sum of colors (additive blending)
  | 'copy' // Only new content is shown
  | 'xor' // Exclusive OR of both
  | 'multiply' // Multiply colors (darkening)
  | 'screen' // Inverse multiply (lightening)
  | 'overlay' // Multiply or screen depending on base
  | 'darken' // Keeps darker of the two
  | 'lighten' // Keeps lighter of the two
  | 'color-dodge' // Brightens based on blend color
  | 'color-burn' // Darkens based on blend color
  | 'hard-light' // Intense version of overlay
  | 'soft-light' // Subtle version of overlay
  | 'difference' // Subtracts darker from lighter
  | 'exclusion' // Similar to difference but lower contrast
  | 'hue' // Uses hue of blend, keeps luminosity
  | 'saturation' // Uses saturation of blend
  | 'color' // Uses hue and saturation of blend
  | 'luminosity'; // Uses luminosity of blend

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
