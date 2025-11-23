import { jsx as _jsx } from 'react/jsx-runtime';
import { IconButton, Box } from '@mui/material';
import { MdFlipCameraAndroid } from 'react-icons/md';
/**
 * CameraSwitch Component
 *
 * Renders a camera switch button that toggles between front and rear cameras on mobile devices.
 * The button is only visible on mobile devices and is hidden on desktop.
 */
const CameraSwitch = ({ isMobile, mobileOS, switchCamera, facingMode }) => {
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
};
export default CameraSwitch;
