import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { IconButton, Stack, Typography, Box } from '@mui/material';
import { BsSliders } from 'react-icons/bs';
import { MdFlip, MdClose } from 'react-icons/md';
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
const CameraControls = ({ isFlipped, onClose, showControls, toggleControls, toggleFlip }) => {
  return _jsx(Box, {
    sx: { position: 'absolute', top: 0, left: 0, right: 0, bgcolor: 'rgba(0,0,0,0.5)', p: 2, zIndex: 10 },
    children: _jsxs(Stack, {
      direction: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      children: [
        _jsxs(Box, {
          children: [
            _jsx(IconButton, {
              onClick: toggleControls,
              sx: { p: 1, color: 'white' },
              children: _jsx(BsSliders, { size: 24 }),
            }),
            _jsx(IconButton, {
              onClick: toggleFlip,
              sx: { p: 1, color: 'white' },
              children: _jsx(MdFlip, {
                size: 24,
                style: { transition: 'transform 0.3s', transform: isFlipped ? 'rotate(180deg)' : 'rotate(0deg)' },
              }),
            }),
          ],
        }),
        _jsx(Typography, { variant: 'h6', sx: { color: 'white' }, children: showControls ? 'Adjustments' : 'Camera' }),
        onClose &&
          _jsx(IconButton, {
            onClick: onClose,
            sx: { p: 1, color: 'white' },
            children: _jsx(MdClose, { width: 24, height: 24, fill: 'white' }),
          }),
      ],
    }),
  });
};
export default CameraControls;
