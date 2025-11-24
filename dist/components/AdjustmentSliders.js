import { j as jsxRuntimeExports } from '../_virtual/jsx-runtime.js';
import React from 'react';
import { Box, Stack, Typography, Slider } from '@mui/material';
import {
  MdOutlineWbSunny,
  MdContrast,
} from '../node_modules/.pnpm/react-icons@5.5.0_react@19.2.0/node_modules/react-icons/md/index.js';
import { BsDropletHalf } from '../node_modules/.pnpm/react-icons@5.5.0_react@19.2.0/node_modules/react-icons/bs/index.js';

const AdjustmentSliders = React.memo(({ imageAdjustments, onAdjustmentsChange }) => {
  return jsxRuntimeExports.jsxs(Box, {
    children: [
      jsxRuntimeExports.jsxs(Box, {
        sx: { mb: 2 },
        children: [
          jsxRuntimeExports.jsxs(Stack, {
            direction: 'row',
            alignItems: 'center',
            spacing: 1,
            children: [
              jsxRuntimeExports.jsx(MdOutlineWbSunny, { size: 20, color: 'white' }),
              jsxRuntimeExports.jsx(Typography, { variant: 'body2', sx: { color: 'white' }, children: 'Brightness' }),
              jsxRuntimeExports.jsxs(Typography, {
                variant: 'caption',
                sx: { color: 'rgba(255,255,255,0.6)', ml: 'auto' },
                children: [imageAdjustments.brightness, '%'],
              }),
            ],
          }),
          jsxRuntimeExports.jsx(Slider, {
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
      jsxRuntimeExports.jsxs(Box, {
        sx: { mb: 2 },
        children: [
          jsxRuntimeExports.jsxs(Stack, {
            direction: 'row',
            alignItems: 'center',
            spacing: 1,
            children: [
              jsxRuntimeExports.jsx(MdContrast, { size: 20, color: 'white' }),
              jsxRuntimeExports.jsx(Typography, { variant: 'body2', sx: { color: 'white' }, children: 'Contrast' }),
              jsxRuntimeExports.jsxs(Typography, {
                variant: 'caption',
                sx: { color: 'rgba(255,255,255,0.6)', ml: 'auto' },
                children: [imageAdjustments.contrast, '%'],
              }),
            ],
          }),
          jsxRuntimeExports.jsx(Slider, {
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
      jsxRuntimeExports.jsxs(Box, {
        children: [
          jsxRuntimeExports.jsxs(Stack, {
            direction: 'row',
            alignItems: 'center',
            spacing: 1,
            children: [
              jsxRuntimeExports.jsx(BsDropletHalf, { size: 20, color: 'white' }),
              jsxRuntimeExports.jsx(Typography, { variant: 'body2', sx: { color: 'white' }, children: 'Saturation' }),
              jsxRuntimeExports.jsxs(Typography, {
                variant: 'caption',
                sx: { color: 'rgba(255,255,255,0.6)', ml: 'auto' },
                children: [imageAdjustments.saturation, '%'],
              }),
            ],
          }),
          jsxRuntimeExports.jsx(Slider, {
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

export { AdjustmentSliders as default };
//# sourceMappingURL=AdjustmentSliders.js.map
