import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import React from 'react';
import { Box, Slider, Stack, Typography } from '@mui/material';
import { MdOutlineWbSunny, MdContrast } from 'react-icons/md';
import { BsDropletHalf } from 'react-icons/bs';
const AdjustmentSliders = React.memo(({ imageAdjustments, onAdjustmentsChange }) => {
  return _jsxs(Box, {
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
                children: [imageAdjustments.brightness, '%'],
              }),
            ],
          }),
          _jsx(Slider, {
            min: 50,
            max: 150,
            value: imageAdjustments.brightness,
            onChange: (_, value) =>
              onAdjustmentsChange((prev) => ({
                ...prev,
                brightness: typeof value === 'number' ? value : value[0],
              })),
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
                children: [imageAdjustments.contrast, '%'],
              }),
            ],
          }),
          _jsx(Slider, {
            min: 50,
            max: 150,
            value: imageAdjustments.contrast,
            onChange: (_, value) =>
              onAdjustmentsChange((prev) => ({
                ...prev,
                contrast: typeof value === 'number' ? value : value[0],
              })),
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
                children: [imageAdjustments.saturation, '%'],
              }),
            ],
          }),
          _jsx(Slider, {
            min: 0,
            max: 200,
            value: imageAdjustments.saturation,
            onChange: (_, value) =>
              onAdjustmentsChange((prev) => ({
                ...prev,
                saturation: typeof value === 'number' ? value : value[0],
              })),
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
});
export default AdjustmentSliders;
