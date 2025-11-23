/**
 * Type Definitions for Camera Component System
 *
 * This module provides TypeScript type definitions for the custom camera
 * component ecosystem, including filter configurations, component props,
 * and canvas-related types for image processing.
 *
 * @module types
 */

/**
 * Configuration for a photo filter effect
 *
 * Defines the complete specification for a visual filter that can be applied
 * to images. Filters combine CSS filter properties with optional canvas blend
 * modes and fill colors to create complex visual effects.
 *
 * A filter can be as simple as a single CSS property (e.g., grayscale) or
 * as complex as multiple CSS transformations combined with a colored overlay
 * using canvas composite operations.
 *
 * @interface FilterConfig
 *
 * @property {string} name - Human-readable display name shown in the UI
 *   Should be concise and descriptive (e.g., "Vintage", "Ocean Wave")
 *
 * @property {string} section - Category for organizational grouping
 *   Used to group related filters in the UI. Common sections include:
 *   - "Basic Filters" - General purpose adjustments
 *   - "Color Tones" - Creative color grading
 *   - "Sepia Tones" - Vintage brownish effects
 *   - "Graytones" - Monochrome effects
 *
 * @property {string} filter - CSS filter string to apply to images
 *   Can include any valid CSS filter functions:
 *   - brightness(%) - Adjusts image brightness
 *   - contrast(%) - Adjusts image contrast
 *   - saturate(%) - Adjusts color saturation
 *   - grayscale(%) - Converts to grayscale
 *   - sepia(%) - Applies sepia tone
 *   - hue-rotate(deg) - Rotates color hue
 *   - invert(%) - Inverts colors
 *   - opacity(%) - Adjusts transparency
 *   - blur(px) - Applies blur effect
 *   Multiple functions can be combined (e.g., "brightness(110%) contrast(120%)")
 *
 * @property {GlobalCompositeOperation} [blendMode] - Optional canvas blend mode
 *   When specified along with a fill, creates a layered effect by compositing
 *   a colored overlay on top of the filtered image. Common blend modes:
 *   - "multiply" - Darkens by multiplying colors
 *   - "screen" - Lightens by inverting, multiplying, and inverting again
 *   - "overlay" - Combines multiply and screen based on base color
 *   - "soft-light" - Gentle version of overlay
 *   - "hard-light" - Stronger version of overlay
 *   - "color-dodge" - Brightens to reflect blend color
 *   - "color-burn" - Darkens to reflect blend color
 *   - "lighten" - Selects lighter of colors
 *   - "darken" - Selects darker of colors
 *
 * @property {string | CanvasGradient | CanvasPattern} [fill] - Optional fill for blend mode
 *   The color, gradient, or pattern to composite over the filtered image.
 *   Typically an RGBA string like "rgba(255, 100, 0, 0.3)" for semi-transparent tints.
 *   Only used when blendMode is specified.
 *
 * @example
 * ```typescript
 * // Simple filter using only CSS
 * const bwFilter: FilterConfig = {
 *   name: "Black & White",
 *   section: "Basic Filters",
 *   filter: "grayscale(100%)"
 * };
 * ```
 *
 * @example
 * ```typescript
 * // Complex filter with blend mode
 * const sunsetFilter: FilterConfig = {
 *   name: "Golden Hour",
 *   section: "Color Tones",
 *   filter: "brightness(105%) contrast(110%) saturate(130%)",
 *   blendMode: "multiply",
 *   fill: "rgba(255, 150, 50, 0.2)"
 * };
 * ```
 */
export interface FilterConfig {
  name: string;
  section: string;
  filter: string;
  blendMode?:
    | 'source-over' // Default: draws new content on top
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
  fill?: string | CanvasGradient | CanvasPattern;
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
}
