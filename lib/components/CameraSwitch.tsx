import * as React from 'react';
import { IconButton, Box } from '@mui/material';
import { MdFlipCameraAndroid } from 'react-icons/md';

/**
 * Props for the CameraSwitch component
 *
 * @interface CameraSwitchProps
 * @property {() => void} switchCamera - Callback to switch between front and back cameras
 * @property {boolean} isMobile - Flag indicating if the device is a mobile device
 * @property {('ios' | 'android' | null)} [mobileOS] - Optional mobile OS type for icon selection
 * @property {('user' | 'environment')} [facingMode] - Optional current facing mode of the camera
 */
interface CameraSwitchProps {
  isMobile: boolean;
  mobileOS?: 'ios' | 'android' | null;
  switchCamera: () => void;
  facingMode?: 'user' | 'environment';
}

/**
 * CameraSwitch Component
 *
 * Renders a camera switch button that toggles between front and rear cameras on mobile devices.
 * The button is only visible on mobile devices and is hidden on desktop.
 */
const CameraSwitch: React.FC<CameraSwitchProps> = ({ isMobile, mobileOS, switchCamera, facingMode }) => {
  const iconTransition = {
    transition: 'transform 0.3s cubic-bezier(0.88, 0.18, 0.61, 1.02)',
    transform: facingMode === 'user' ? 'rotate(180deg)' : 'rotate(0deg)',
  };

  return (
    <Box>
      {/* Camera switch button - only visible on mobile devices */}
      {isMobile && (
        <IconButton
          onClick={switchCamera}
          sx={{
            color: 'white',
            bgcolor: 'rgba(0,0,0,0.3)',
            width: 60,
            height: 60,
          }}
        >
          {mobileOS === 'android' ? (
            <MdFlipCameraAndroid size={30} style={{ ...iconTransition }} />
          ) : (
            <MdFlipCameraAndroid size={30} style={{ ...iconTransition }} />
          )}
        </IconButton>
      )}
    </Box>
  );
};

export default CameraSwitch;
