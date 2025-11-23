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
export const FILTERS: Record<string, FilterConfig> = {
  // ==========================================
  // BASIC FILTERS
  // Simple, single-purpose adjustments
  // ==========================================

  /** No filter applied - original image */
  none: { name: 'Normal', section: 'Basic Filters', filter: '' },

  /** Full grayscale - removes all color */
  grayscale: { name: 'B&W', section: 'Basic Filters', filter: 'grayscale(100%)' },

  /** Classic brownish tone - traditional photo aging effect */
  sepia: { name: 'Sepia', section: 'Basic Filters', filter: 'sepia(100%)' },

  /** Aged photo look - combines sepia with brightness and contrast adjustments */
  vintage: { name: 'Vintage', section: 'Basic Filters', filter: 'sepia(50%) contrast(120%) brightness(90%)' },

  /** Cool blue color cast - shifts hue toward cyan/blue */
  cool: { name: 'Cool', section: 'Basic Filters', filter: 'saturate(120%) hue-rotate(180deg)' },

  /** Warm orange/yellow cast - shifts hue toward warm tones */
  warm: { name: 'Warm', section: 'Basic Filters', filter: 'saturate(130%) hue-rotate(-20deg) brightness(105%)' },

  /** Faded, soft look - reduces contrast and saturation while increasing brightness */
  fade: { name: 'Fade', section: 'Basic Filters', filter: 'contrast(85%) brightness(110%) saturate(80%)' },

  /** High-impact dramatic look - increases contrast and saturation */
  dramatic: { name: 'Dramatic', section: 'Basic Filters', filter: 'contrast(150%) brightness(90%) saturate(130%)' },

  // ==========================================
  // COLOR TONES
  // Advanced effects with blend modes
  // ==========================================

  /** Cool cyan tint with multiply blend - creates icy, cold atmosphere */
  icyWater: {
    name: 'Icy Water',
    section: 'Color Tones',
    filter:
      'brightness(104%) contrast(104%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(122%) sepia(0%)',
    blendMode: 'multiply',
    fill: 'rgba(0, 225, 250, 0.13)',
  },

  /** Warm yellow overlay - evokes summer heat and sunshine */
  summerHeat: {
    name: 'Summer Heat',
    section: 'Color Tones',
    filter:
      'brightness(103%) contrast(114%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(122%) sepia(0%)',
    blendMode: 'overlay',
    fill: 'rgba(250, 233, 0, 0.23)',
  },

  /** Red-shifted hue with multiply - creates feverish, warm tone */
  fever: {
    name: 'Fever',
    section: 'Color Tones',
    filter: 'contrast(97%) grayscale(0%) hue-rotate(330deg) invert(0%) opacity(100%) saturate(111%) sepia(0%)',
    blendMode: 'multiply',
    fill: 'rgba(255, 0, 0, 0.13)',
  },

  /** Bright magenta screen blend - bold, vibrant pink effect */
  strawberry: {
    name: 'Strawberry',
    section: 'Color Tones',
    filter: 'grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)',
    blendMode: 'screen',
    fill: 'rgba(250, 0, 204, 0.5)',
  },

  /** Purple/blue soft light with high saturation - club/party atmosphere */
  ibiza: {
    name: 'Ibiza',
    section: 'Color Tones',
    filter: 'contrast(107%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(165%) sepia(50%)',
    blendMode: 'soft-light',
    fill: 'rgba(58, 0, 250, 0.5)',
  },

  /** Magenta multiply overlay with high contrast - romantic sunset effect */
  sweetSunset: {
    name: 'Sweet Sunset',
    section: 'Color Tones',
    filter: 'contrast(128%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(120%) sepia(0%)',
    blendMode: 'multiply',
    fill: 'rgba(250, 0, 204, 0.15)',
  },

  /** Blue multiply over grayscale - creates cold monochrome with blue tint */
  blueRock: {
    name: 'Blue Rock',
    section: 'Color Tones',
    filter: 'contrast(128%) grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(120%) sepia(0%)',
    blendMode: 'multiply',
    fill: 'rgba(0, 142, 250, 0.15)',
  },

  /** Cyan multiply with sepia - underwater, tropical ocean feel */
  oceanWave: {
    name: 'Ocean Wave',
    section: 'Color Tones',
    filter:
      'brightness(105%) contrast(104%) grayscale(10%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(50%)',
    blendMode: 'multiply',
    fill: 'rgba(0, 229, 250, 0.13)',
  },

  /** Red overlay blend - adds warmth and slight color cast */
  littleRed: {
    name: 'Little Red',
    section: 'Color Tones',
    filter:
      'brightness(105%) contrast(106%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(90%) sepia(0%)',
    blendMode: 'overlay',
    fill: 'rgba(250, 0, 0, 0.3)',
  },

  /** Orange saturation blend on desaturated base - retro sci-fi look */
  spaceTrip: {
    name: 'Space Trip',
    section: 'Color Tones',
    filter: 'grayscale(50%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(140%) sepia(0%)',
    blendMode: 'saturation',
    fill: '#faaa00',
  },

  /** Yellow hard light - bright, high-energy desert sunrise */
  desertMorning: {
    name: 'Desert Morning',
    section: 'Color Tones',
    filter:
      'brightness(110%) contrast(114%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(122%) sepia(0%)',
    blendMode: 'hard-light',
    fill: 'rgba(250, 229, 0, 0.2)',
  },

  /** Strong cyan multiply - deep underwater or lagoon effect */
  blueLagoon: {
    name: 'Blue Lagoon',
    section: 'Color Tones',
    filter:
      'brightness(104%) contrast(104%) grayscale(0%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(122%) sepia(0%)',
    blendMode: 'multiply',
    fill: 'rgba(0, 225, 250, 0.5)',
  },

  /** Cyan lighten with hue shift - creates ethereal ice palace atmosphere */
  warmIce: {
    name: 'Warm Ice',
    section: 'Color Tones',
    filter:
      'brightness(110%) contrast(116%) grayscale(0%) hue-rotate(342deg) invert(0%) opacity(100%) saturate(84%) sepia(0%)',
    blendMode: 'lighten',
    fill: 'rgba(107, 233, 255, 0.23)',
  },

  /** Blue multiply on grayscale - aquatic monochrome */
  waterness: {
    name: 'Waterness',
    section: 'Color Tones',
    filter: 'contrast(128%) grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(120%) sepia(0%)',
    blendMode: 'multiply',
    fill: 'rgba(0, 142, 250, 0.15)',
  },

  /** Blue lighten on high-contrast grayscale - misty mountain landscape */
  distantMountain: {
    name: 'Distant Mountain',
    section: 'Color Tones',
    filter: 'contrast(120%) grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)',
    blendMode: 'lighten',
    fill: '#033dc5',
  },

  // ==========================================
  // SEPIA TONES
  // Vintage brownish effects
  // ==========================================

  /** Low contrast grayscale with tan multiply - deep coffee brown tone */
  burntCoffee: {
    name: 'Burnt Coffee',
    section: 'Sepia Tones',
    filter: 'contrast(80%) grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)',
    blendMode: 'multiply',
    fill: '#e3dca1',
  },

  /** Partial grayscale with brown soft light - aged wood texture feel */
  oldWood: {
    name: 'Old Wood',
    section: 'Sepia Tones',
    filter:
      'brightness(105%) contrast(102%) grayscale(50%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(140%) sepia(9%)',
    blendMode: 'soft-light',
    fill: '#574400',
  },

  /** High contrast sepia with red darken - dramatic antique photograph */
  coalPaper: {
    name: 'Coal Paper',
    section: 'Sepia Tones',
    filter:
      'brightness(90%) contrast(125%) grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(50%)',
    blendMode: 'darken',
    fill: 'rgba(125, 0, 0, 0.1)',
  },

  /** Light sepia with orange tint - soft vintage May day photograph */
  vintageMay: {
    name: 'Vintage May',
    section: 'Sepia Tones',
    filter: 'brightness(105%)  grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(50%)',
    fill: 'rgba(250, 170, 0, 0.13)',
  },

  // ==========================================
  // GRAYTONES
  // Pure monochrome effects
  // ==========================================

  /** Pure black and white with no tinting - classic monochrome */
  simpleGray: {
    name: 'Simple Gray',
    section: 'Graytones',
    filter: 'grayscale(100%) hue-rotate(0deg) invert(0%) opacity(100%) saturate(100%) sepia(0%)',
    fill: 'rgba(250, 170, 0, 0.13)',
  },
} as const;
