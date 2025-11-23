/**
 * Props for the AdjustmentSliders component
 *
 * @interface AdjustmentSlidersProps
 * @property {number} brightness - Current brightness value (typically 50-150, representing percentage)
 * @property {number} contrast - Current contrast value (typically 50-150, representing percentage)
 * @property {number} saturation - Current saturation value (typically 0-200, representing percentage)
 * @property {(value: number) => void} onBrightnessChange - Callback fired when brightness slider value changes
 * @property {(value: number) => void} onContrastChange - Callback fired when contrast slider value changes
 * @property {(value: number) => void} onSaturationChange - Callback fired when saturation slider value changes
 */
interface AdjustmentSlidersProps {
  brightness: number;
  contrast: number;
  saturation: number;
  onBrightnessChange: (value: number) => void;
  onContrastChange: (value: number) => void;
  onSaturationChange: (value: number) => void;
}
/**
 * AdjustmentSliders Component
 *
 * Provides an overlay panel with three adjustable sliders for controlling image appearance:
 * brightness, contrast, and saturation. Each slider displays its current value as a percentage
 * and includes an icon representing the adjustment type.
 *
 * The component is positioned absolutely near the top of its container with a semi-transparent
 * dark background for visibility over images. It's designed for use in photo editing or camera
 * preview interfaces where real-time visual adjustments are needed.
 *
 * Slider ranges:
 * - Brightness: 50% to 150% (default: 100%)
 * - Contrast: 50% to 150% (default: 100%)
 * - Saturation: 0% to 200% (default: 100%)
 *
 * @component
 * @example
 * ```tsx
 * const [brightness, setBrightness] = useState(100);
 * const [contrast, setContrast] = useState(100);
 * const [saturation, setSaturation] = useState(100);
 *
 * <AdjustmentSliders
 *   brightness={brightness}
 *   contrast={contrast}
 *   saturation={saturation}
 *   onBrightnessChange={setBrightness}
 *   onContrastChange={setContrast}
 *   onSaturationChange={setSaturation}
 * />
 * ```
 *
 * @param {AdjustmentSlidersProps} props - Component props
 * @returns {JSX.Element} A panel containing three labeled sliders with icons and value displays
 */
declare const AdjustmentSliders: React.FC<AdjustmentSlidersProps>;
export default AdjustmentSliders;
