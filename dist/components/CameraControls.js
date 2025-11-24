import { j as jsxRuntimeExports } from '../_virtual/jsx-runtime.js';
import React from 'react';
import { Box, Stack, IconButton, Typography } from '@mui/material';
import { BsSliders } from '../node_modules/.pnpm/react-icons@5.5.0_react@19.2.0/node_modules/react-icons/bs/index.js';
import {
  MdFlip,
  MdClose,
} from '../node_modules/.pnpm/react-icons@5.5.0_react@19.2.0/node_modules/react-icons/md/index.js';

/**
 * CameraControls Component
 *
 * Renders a semi-transparent header bar containing camera control buttons and a title.
 * Provides functionality for toggling adjustment controls, switching cameras (on mobile),
 * flipping the preview, and closing the camera interface.
 *
 * The component adapts its layout based on device type, showing the camera switch button
 * only on mobile devices where multiple cameras are typically available.
 *
 * Control buttons (left to right):
 * - Adjustment toggle (droplet icon) - Shows/hides brightness, contrast, saturation sliders
 * - Switch camera (mobile only) - Toggles between front and rear cameras
 * - Flip preview - Mirrors the camera preview horizontally
 * - Close button (optional) - Exits the camera interface
 *
 * The title dynamically updates to show "Adjustments" when controls are visible,
 * or "Camera" when in standard camera mode.
 *
 * @component
 * @example
 * ```tsx
 * <CameraControls
 *   showControls={showAdjustments}
 *   toggleControls={() => setShowAdjustments(!showAdjustments)}
 *   switchCamera={handleSwitchCamera}
 *   isMobile={true}
 *   isFlipped={mirrored}
 *   toggleFlip={() => setMirrored(!mirrored)}
 *   onClose={() => navigate('/home')}
 * />
 * ```
 *
 * @param {CameraControlsProps} props - Component props
 * @returns {JSX.Element} A header bar with camera control buttons and dynamic title
 */
const CameraControls = React.memo(({ isFlipped, onClose, showControls, toggleControls, toggleFlip }) => {
  return jsxRuntimeExports.jsx(Box, {
    sx: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bgcolor: 'rgba(0,0,0,0.5)',
      p: 2,
      zIndex: 10,
      height: 72,
      boxSizing: 'border-box',
    },
    children: jsxRuntimeExports.jsxs(Stack, {
      direction: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      children: [
        jsxRuntimeExports.jsxs(Box, {
          children: [
            jsxRuntimeExports.jsx(IconButton, {
              onClick: toggleControls,
              sx: { p: 1, color: 'white' },
              children: jsxRuntimeExports.jsx(BsSliders, { size: 24 }),
            }),
            jsxRuntimeExports.jsx(IconButton, {
              onClick: toggleFlip,
              sx: { p: 1, color: 'white' },
              children: jsxRuntimeExports.jsx(MdFlip, {
                size: 24,
                style: { transition: 'transform 0.3s', transform: isFlipped ? 'scaleX(1)' : 'scaleX(-1)' },
              }),
            }),
          ],
        }),
        jsxRuntimeExports.jsx(Typography, {
          variant: 'h6',
          sx: { color: 'white', position: 'absolute', left: '50%', transform: 'translateX(-50%)' },
          children: showControls ? 'Adjustments' : 'Camera',
        }),
        onClose &&
          jsxRuntimeExports.jsx(IconButton, {
            onClick: onClose,
            sx: { p: 1, color: 'white' },
            children: jsxRuntimeExports.jsx(MdClose, { width: 24, height: 24, fill: 'white' }),
          }),
      ],
    }),
  });
});

export { CameraControls as default };
//# sourceMappingURL=CameraControls.js.map
