export declare const validCssBlendModes: Set<string>;
export declare const toCssBlendMode: (mode: string | undefined) => React.CSSProperties['mixBlendMode'];
export declare const generateFilterCSS: ({ brightness, contrast, saturation }: any, extra?: string) => string;
