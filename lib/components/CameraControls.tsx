import React from 'react';
import { IconButton, Stack, Typography, Box } from '@mui/material';
import { BsSliders } from 'react-icons/bs';
import { MdFlip, MdClose } from 'react-icons/md';

/**
 * Props for the CameraControls component
 *
 * @interface CameraControlsProps
 * @property {boolean} showControls - Flag indicating whether adjustment controls are currently visible
 * @property {() => void} toggleControls - Callback to toggle visibility of adjustment sliders
 * @property {() => void} switchCamera - Callback to switch between front and back cameras
 * @property {boolean} isMobile - Flag indicating if the device is a mobile device
 * @property {boolean} isFlipped - Flag indicating if the camera preview is horizontally flipped
 * @property {() => void} toggleFlip - Callback to toggle horizontal flip of the camera preview
 * @property {() => void} [onClose] - Optional callback to close the camera interface
 */
interface CameraControlsProps {
  isFlipped: boolean;
  onClose?: () => void;
  showControls: boolean;
  toggleControls: () => void;
  toggleFlip: () => void;
}

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
const CameraControls: React.FC<CameraControlsProps> = React.memo(
  ({ isFlipped, onClose, showControls, toggleControls, toggleFlip }) => {
    return (
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bgcolor: 'rgba(0,0,0,0.5)',
          p: 2,
          zIndex: 10,
          height: 72,
          boxSizing: 'border-box',
        }}
      >
        <Stack direction='row' alignItems='center' justifyContent='space-between'>
          {/* Left control group */}
          <Box>
            {/* Adjustment controls toggle button */}
            <IconButton onClick={toggleControls} sx={{ p: 1, color: 'white' }}>
              <BsSliders size={24} />
            </IconButton>

            {/* Horizontal flip toggle button */}
            <IconButton onClick={toggleFlip} sx={{ p: 1, color: 'white' }}>
              <MdFlip
                size={24}
                style={{ transition: 'transform 0.3s', transform: isFlipped ? 'scaleX(1)' : 'scaleX(-1)' }}
              />
            </IconButton>
          </Box>

          {/* Center title - dynamically updates based on current mode */}
          <Typography
            variant='h6'
            sx={{ color: 'white', position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}
          >
            {showControls ? 'Adjustments' : 'Camera'}
          </Typography>

          {/* Right control group - close button if provided */}
          {onClose && (
            <IconButton onClick={onClose} sx={{ p: 1, color: 'white' }}>
              <MdClose width={24} height={24} fill='white' />
            </IconButton>
          )}
        </Stack>
      </Box>
    );
  }
);

export default CameraControls;
