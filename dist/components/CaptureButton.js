import { jsx as _jsx } from 'react/jsx-runtime';
import { Box, Button } from '@mui/material';
import { MdOutlinePhotoCamera } from 'react-icons/md';
/**
 * CaptureButton Component
 *
 * Renders a large, circular button positioned at the bottom center of the screen for
 * capturing photos from the camera stream. The button features a camera icon and is
 * styled to resemble traditional camera shutter buttons found in mobile camera apps.
 *
 * The button is automatically disabled when the camera stream is not ready, preventing
 * users from attempting to capture photos before the camera has initialized. This
 * provides important UX feedback and prevents errors.
 *
 * Visual characteristics:
 * - Large circular shape (80x80 pixels) for easy tapping
 * - Bottom-center positioning for thumb accessibility
 * - Camera icon in contrasting color
 * - Contained variant with primary theme color
 * - Disabled state when camera is not streaming
 *
 * Positioning:
 * - Fixed 40px from bottom of viewport
 * - Horizontally centered using transform
 * - High z-index (10) to appear above video preview
 *
 * @component
 * @example
 * ```tsx
 * const [streaming, setStreaming] = useState(false);
 *
 * <CaptureButton
 *   onCapture={handlePhotoCapture}
 *   isStreaming={streaming}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Integrated with camera state management
 * <CaptureButton
 *   onCapture={() => {
 *     capturePhoto();
 *     playShutterSound();
 *   }}
 *   isStreaming={cameraReady}
 * />
 * ```
 *
 * @param {CaptureButtonProps} props - Component props
 * @returns {JSX.Element} A circular button with camera icon for photo capture
 */
const CaptureButton = ({ onCapture, isStreaming }) => {
  return _jsx(Box, {
    sx: {
      position: 'absolute',
      bottom: 40,
      left: '50%',
      transform: 'translateX(-50%)',
      zIndex: 10,
    },
    children: _jsx(Button, {
      variant: 'contained',
      onClick: onCapture,
      disabled: !isStreaming,
      sx: { width: 80, height: 80, borderRadius: '50%', p: 0, minWidth: 0 },
      children: _jsx(MdOutlinePhotoCamera, { width: 40, height: 40, fill: 'black' }),
    }),
  });
};
export default CaptureButton;
