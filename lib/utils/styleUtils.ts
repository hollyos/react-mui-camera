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

export const toCssBlendMode = (mode: string | undefined): React.CSSProperties['mixBlendMode'] =>
  validCssBlendModes.has(mode || '') ? (mode as React.CSSProperties['mixBlendMode']) : undefined;

export const generateFilterCSS = ({ brightness, contrast, saturation }: any, extra = '') =>
  `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%) ${extra}`;
