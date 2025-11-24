const validCssBlendModes = new Set([
  'normal',
  'multiply',
  'screen',
  'overlay',
  'darken',
  'lighten',
  'color-dodge',
  'color-burn',
  'hard-light',
  'soft-light',
  'difference',
  'exclusion',
  'hue',
  'saturation',
  'color',
  'luminosity',
]);
const toCssBlendMode = (mode) => (validCssBlendModes.has(mode || '') ? mode : undefined);
const generateFilterCSS = ({ brightness, contrast, saturation }, extra = '') =>
  `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) ${extra}`;

export { generateFilterCSS, toCssBlendMode, validCssBlendModes };
//# sourceMappingURL=styleUtils.js.map
