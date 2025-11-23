import * as React from 'react';
import { Box, Button } from '@mui/material';
import { MdOutlinePhotoCamera } from 'react-icons/md';

/**
 * Props for the CaptureButton component
 *
 * @interface CaptureButtonProps
 * @property {() => void} onCapture - Callback function triggered when the capture button is clicked
 * @property {boolean} isStreaming - Flag indicating whether the camera stream is active and ready
 */
interface CaptureButtonProps {
  onCapture: () => void;
  isStreaming: boolean;
  mobileOS: 'ios' | 'android' | null;
  isMobile: boolean;
}

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
const CaptureButton: React.FC<CaptureButtonProps> = ({ onCapture, isStreaming, mobileOS, isMobile }) => {
  return (
    <Box
      sx={{
        border: mobileOS === 'ios' ? '4px solid white' : 'none',
        borderRadius: '50%',
        padding: '4px',
        transform: 'translateX(-50%)',
        zIndex: 10,
      }}
    >
      <Button
        variant='contained'
        onClick={onCapture}
        disabled={!isStreaming}
        sx={{
          bgcolor: isMobile ? 'white' : 'primary.main',
          borderRadius: '50%',
          height: 80,
          minWidth: 0,
          p: 0,
          width: 80,

          '&:hover': {
            bgcolor: 'primary.dark',
          },
        }}
      >
        {!isMobile && <MdOutlinePhotoCamera size={40} fill='white' />}
      </Button>
    </Box>
  );
};

export default CaptureButton;
