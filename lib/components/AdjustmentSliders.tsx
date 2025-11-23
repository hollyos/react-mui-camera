import React from 'react';
import { Box, Slider, Stack, Typography } from '@mui/material';
import { MdOutlineWbSunny, MdContrast } from 'react-icons/md';
import { BsDropletHalf } from 'react-icons/bs';

interface AdjustmentSlidersProps {
  imageAdjustments: {
    brightness: number;
    contrast: number;
    saturation: number;
  };
  onAdjustmentsChange: React.Dispatch<
    React.SetStateAction<{
      brightness: number;
      contrast: number;
      saturation: number;
    }>
  >;
}

const AdjustmentSliders: React.FC<AdjustmentSlidersProps> = React.memo(({ imageAdjustments, onAdjustmentsChange }) => {
  return (
    <Box>
      {/* Brightness Slider */}
      <Box sx={{ mb: 2 }}>
        <Stack direction='row' alignItems='center' spacing={1}>
          <MdOutlineWbSunny size={20} color='white' />
          <Typography variant='body2' sx={{ color: 'white' }}>
            Brightness
          </Typography>
          <Typography variant='caption' sx={{ color: 'rgba(255,255,255,0.6)', ml: 'auto' }}>
            {imageAdjustments.brightness}%
          </Typography>
        </Stack>
        <Slider
          min={50}
          max={150}
          value={imageAdjustments.brightness}
          onChange={(_, value) =>
            onAdjustmentsChange((prev) => ({
              ...prev,
              brightness: typeof value === 'number' ? value : value[0],
            }))
          }
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
            {imageAdjustments.contrast}%
          </Typography>
        </Stack>
        <Slider
          min={50}
          max={150}
          value={imageAdjustments.contrast}
          onChange={(_, value) =>
            onAdjustmentsChange((prev) => ({
              ...prev,
              contrast: typeof value === 'number' ? value : value[0],
            }))
          }
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
            {imageAdjustments.saturation}%
          </Typography>
        </Stack>
        <Slider
          min={0}
          max={200}
          value={imageAdjustments.saturation}
          onChange={(_, value) =>
            onAdjustmentsChange((prev) => ({
              ...prev,
              saturation: typeof value === 'number' ? value : value[0],
            }))
          }
          sx={{
            color: 'primary.main',
            '& .MuiSlider-thumb': { bgcolor: 'white' },
            mt: 1,
          }}
        />
      </Box>
    </Box>
  );
});

export default AdjustmentSliders;
