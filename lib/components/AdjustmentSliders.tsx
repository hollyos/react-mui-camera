import * as React from 'react';
import { Box, Slider, Stack, Typography } from '@mui/material';
import { MdOutlineWbSunny, MdContrast } from 'react-icons/md';
import { BsDropletHalf } from 'react-icons/bs';

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
const AdjustmentSliders: React.FC<AdjustmentSlidersProps> = ({
  brightness,
  contrast,
  saturation,
  onBrightnessChange,
  onContrastChange,
  onSaturationChange,
}) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '5rem',
        left: 16,
        right: 16,
        bgcolor: 'rgba(0,0,0,0.8)',
        p: 2,
        borderRadius: 2,
        zIndex: 10,
      }}
    >
      {/* Brightness Slider */}
      <Box sx={{ mb: 2 }}>
        <Stack direction='row' alignItems='center' spacing={1}>
          <MdOutlineWbSunny size={20} color='white' />
          <Typography variant='body2' sx={{ color: 'white' }}>
            Brightness
          </Typography>
          <Typography variant='caption' sx={{ color: 'rgba(255,255,255,0.6)', ml: 'auto' }}>
            {brightness}%
          </Typography>
        </Stack>
        <Slider
          min={50}
          max={150}
          value={brightness}
          onChange={(e, value) => onBrightnessChange(typeof value === 'number' ? value : value[0])}
          sx={{
            color: 'primary.main',
            '& .MuiSlider-thumb': { bgcolor: 'white' },
            mt: 1,
          }}
        />
      </Box>

      {/* Contrast Slider */}
      <Box sx={{ mb: 2 }}>
        <Stack direction='row' alignItems='center' spacing={1}>
          <MdContrast size={20} color='white' />
          <Typography variant='body2' sx={{ color: 'white' }}>
            Contrast
          </Typography>
          <Typography variant='caption' sx={{ color: 'rgba(255,255,255,0.6)', ml: 'auto' }}>
            {contrast}%
          </Typography>
        </Stack>
        <Slider
          min={50}
          max={150}
          value={contrast}
          onChange={(e, value) => onContrastChange(typeof value === 'number' ? value : value[0])}
          sx={{
            color: 'primary.main',
            '& .MuiSlider-thumb': { bgcolor: 'white' },
            mt: 1,
          }}
        />
      </Box>

      {/* Saturation Slider */}
      <Box>
        <Stack direction='row' alignItems='center' spacing={1}>
          <BsDropletHalf size={20} color='white' />
          <Typography variant='body2' sx={{ color: 'white' }}>
            Saturation
          </Typography>
          <Typography variant='caption' sx={{ color: 'rgba(255,255,255,0.6)', ml: 'auto' }}>
            {saturation}%
          </Typography>
        </Stack>
        <Slider
          min={0}
          max={200}
          value={saturation}
          onChange={(e, value) => onSaturationChange(typeof value === 'number' ? value : value[0])}
          sx={{
            color: 'primary.main',
            '& .MuiSlider-thumb': { bgcolor: 'white' },
            mt: 1,
          }}
        />
      </Box>
    </Box>
  );
};

export default AdjustmentSliders;
