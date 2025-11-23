/**
 * Filter Configuration and Presets
 *
 * This module defines the filter system used for photo post-processing. It provides
 * a comprehensive collection of preset filters organized by category, each with
 * configurable CSS filters and optional canvas blend modes for advanced effects.
 *
 * @module filters
 */
import type { FilterConfig } from '../types/types';
/**
 * Predefined filter configurations for image processing
 *
 * A comprehensive collection of 30+ professionally designed photo filters organized
 * into four main categories. Each filter is carefully tuned to create specific moods
 * and artistic effects commonly found in modern photo editing applications.
 *
 * Filter Categories:
 *
 * 1. **Basic Filters** (8 filters)
 *    General-purpose filters for common photo enhancement needs
 *    - Normal: No modification (identity filter)
 *    - B&W: Full grayscale conversion
 *    - Sepia: Classic brownish tone
 *    - Vintage: Aged photo appearance
 *    - Cool: Blue-shifted color temperature
 *    - Warm: Orange-shifted color temperature
 *    - Fade: Soft, low-contrast look
 *    - Dramatic: High contrast and saturation
 *
 * 2. **Color Tones** (15 filters)
 *    Creative color grading effects with blend modes and overlays
 *    Includes effects like Icy Water, Summer Heat, Fever, Strawberry, Ibiza,
 *    Sweet Sunset, Blue Rock, Ocean Wave, Little Red, Space Trip, Desert Morning,
 *    Blue Lagoon, Warm Ice, Waterness, and Distant Mountain
 *
 * 3. **Sepia Tones** (4 filters)
 *    Vintage-inspired warm tones with brownish hues
 *    - Burnt Coffee: Dark, rich sepia
 *    - Old Wood: Medium warm tone
 *    - Coal Paper: High contrast sepia
 *    - Vintage May: Light classic sepia
 *
 * 4. **Graytones** (1 filter)
 *    Monochrome effects
 *    - Simple Gray: Pure grayscale
 *
 * Technical Implementation:
 * - All filters use CSS filter syntax for base adjustments
 * - Advanced filters combine CSS filters with canvas blend modes
 * - Color overlays are applied using RGBA values with varying opacity
 * - Blend modes like multiply, screen, and overlay create sophisticated effects
 *
 * Performance:
 * - CSS filters are GPU-accelerated in modern browsers
 * - Canvas operations are performed once during export
 * - Filter previews use efficient DOM rendering
 *
 * @constant
 * @type {Record<string, FilterConfig>}
 *
 * @example
 * ```typescript
 * // Access a specific filter
 * const sepiaConfig = FILTERS.sepia;
 * console.log(sepiaConfig.filter); // "sepia(100%)"
 *
 * // Apply filter to an image element
 * imgElement.style.filter = FILTERS.vintage.filter;
 *
 * // Apply complex filter with blend mode (requires canvas)
 * const canvas = document.createElement('canvas');
 * const ctx = canvas.getContext('2d');
 * ctx.filter = FILTERS.summerHeat.filter;
 * ctx.drawImage(img, 0, 0);
 * ctx.globalCompositeOperation = FILTERS.summerHeat.blendMode;
 * ctx.fillStyle = FILTERS.summerHeat.fill;
 * ctx.fillRect(0, 0, canvas.width, canvas.height);
 * ```
 *
 * @example
 * ```typescript
 * // Iterate through all filters by section
 * Object.entries(FILTERS).forEach(([key, config]) => {
 *   console.log(`${config.section}: ${config.name}`);
 * });
 * ```
 */
export declare const FILTERS: Record<string, FilterConfig>;
