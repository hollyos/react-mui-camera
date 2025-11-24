import { j as jsxRuntimeExports } from '../_virtual/jsx-runtime.js';
import React from 'react';
import { Box, IconButton } from '@mui/material';
import { MdFlipCameraAndroid } from '../node_modules/.pnpm/react-icons@5.5.0_react@19.2.0/node_modules/react-icons/md/index.js';
import { useDeviceInfo } from '../hooks/useDeviceInfo.js';

/**
 * CameraSwitch Component
 *
 * Renders a camera switch button that toggles between front and rear cameras on mobile devices.
 * The button is only visible on mobile devices and is hidden on desktop.
 */
const CameraSwitch = React.memo(({ switchCamera, facingMode }) => {
  const { isMobile, mobileOS } = useDeviceInfo();
  const iconTransition = {
    transition: 'transform 0.3s cubic-bezier(0.88, 0.18, 0.61, 1.02)',
    transform: facingMode === 'user' ? 'rotate(180deg)' : 'rotate(0deg)',
  };
  return jsxRuntimeExports.jsx(Box, {
    children:
      isMobile &&
      jsxRuntimeExports.jsx(IconButton, {
        onClick: switchCamera,
        sx: {
          color: 'white',
          bgcolor: 'rgba(0,0,0,0.3)',
          width: 60,
          height: 60,
        },
        children:
          mobileOS === 'android'
            ? jsxRuntimeExports.jsx(MdFlipCameraAndroid, { size: 30, style: { ...iconTransition } })
            : jsxRuntimeExports.jsx(MdFlipCameraAndroid, { size: 30, style: { ...iconTransition } }),
      }),
  });
});

export { CameraSwitch as default };
//# sourceMappingURL=CameraSwitch.js.map
