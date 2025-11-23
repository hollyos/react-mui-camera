export const validCssBlendModes = new Set([
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
export const toCssBlendMode = (mode) => (validCssBlendModes.has(mode || '') ? mode : undefined);
export const generateFilterCSS = ({ brightness, contrast, saturation }, extra = '') =>
  `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) ${extra}`;
