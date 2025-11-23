import { jsx as _jsx } from 'react/jsx-runtime';
import React from 'react';
import { IconButton, Box } from '@mui/material';
import { MdFlipCameraAndroid } from 'react-icons/md';
import { useDeviceInfo } from '../hooks/useDeviceInfo';
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
  return _jsx(Box, {
    children:
      isMobile &&
      _jsx(IconButton, {
        onClick: switchCamera,
        sx: {
          color: 'white',
          bgcolor: 'rgba(0,0,0,0.3)',
          width: 60,
          height: 60,
        },
        children:
          mobileOS === 'android'
            ? _jsx(MdFlipCameraAndroid, { size: 30, style: { ...iconTransition } })
            : _jsx(MdFlipCameraAndroid, { size: 30, style: { ...iconTransition } }),
      }),
  });
});
export default CameraSwitch;
