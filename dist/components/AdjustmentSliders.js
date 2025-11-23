import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { Box, Slider, Stack, Typography } from '@mui/material';
import { MdOutlineWbSunny, MdContrast } from 'react-icons/md';
import { BsDropletHalf } from 'react-icons/bs';
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
const AdjustmentSliders = ({
  brightness,
  contrast,
  saturation,
  onBrightnessChange,
  onContrastChange,
  onSaturationChange,
}) => {
  return _jsxs(Box, {
    sx: {
      position: 'absolute',
      top: '5rem',
      left: 16,
      right: 16,
      bgcolor: 'rgba(0,0,0,0.8)',
      p: 2,
      borderRadius: 2,
      zIndex: 10,
    },
    children: [
      _jsxs(Box, {
        sx: { mb: 2 },
        children: [
          _jsxs(Stack, {
            direction: 'row',
            alignItems: 'center',
            spacing: 1,
            children: [
              _jsx(MdOutlineWbSunny, { size: 20, color: 'white' }),
              _jsx(Typography, { variant: 'body2', sx: { color: 'white' }, children: 'Brightness' }),
              _jsxs(Typography, {
                variant: 'caption',
                sx: { color: 'rgba(255,255,255,0.6)', ml: 'auto' },
                children: [brightness, '%'],
              }),
            ],
          }),
          _jsx(Slider, {
            min: 50,
            max: 150,
            value: brightness,
            onChange: (e, value) => onBrightnessChange(typeof value === 'number' ? value : value[0]),
            sx: {
              color: 'primary.main',
              '& .MuiSlider-thumb': { bgcolor: 'white' },
              mt: 1,
            },
          }),
        ],
      }),
      _jsxs(Box, {
        sx: { mb: 2 },
        children: [
          _jsxs(Stack, {
            direction: 'row',
            alignItems: 'center',
            spacing: 1,
            children: [
              _jsx(MdContrast, { size: 20, color: 'white' }),
              _jsx(Typography, { variant: 'body2', sx: { color: 'white' }, children: 'Contrast' }),
              _jsxs(Typography, {
                variant: 'caption',
                sx: { color: 'rgba(255,255,255,0.6)', ml: 'auto' },
                children: [contrast, '%'],
              }),
            ],
          }),
          _jsx(Slider, {
            min: 50,
            max: 150,
            value: contrast,
            onChange: (e, value) => onContrastChange(typeof value === 'number' ? value : value[0]),
            sx: {
              color: 'primary.main',
              '& .MuiSlider-thumb': { bgcolor: 'white' },
              mt: 1,
            },
          }),
        ],
      }),
      _jsxs(Box, {
        children: [
          _jsxs(Stack, {
            direction: 'row',
            alignItems: 'center',
            spacing: 1,
            children: [
              _jsx(BsDropletHalf, { size: 20, color: 'white' }),
              _jsx(Typography, { variant: 'body2', sx: { color: 'white' }, children: 'Saturation' }),
              _jsxs(Typography, {
                variant: 'caption',
                sx: { color: 'rgba(255,255,255,0.6)', ml: 'auto' },
                children: [saturation, '%'],
              }),
            ],
          }),
          _jsx(Slider, {
            min: 0,
            max: 200,
            value: saturation,
            onChange: (e, value) => onSaturationChange(typeof value === 'number' ? value : value[0]),
            sx: {
              color: 'primary.main',
              '& .MuiSlider-thumb': { bgcolor: 'white' },
              mt: 1,
            },
          }),
        ],
      }),
    ],
  });
};
export default AdjustmentSliders;
