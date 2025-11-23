import { jsx as _jsx } from 'react/jsx-runtime';
import { Box, Typography } from '@mui/material';
/**
 * CameraError Component
 *
 * Displays a centered error message overlay with a red semi-transparent background.
 * Used to inform users when camera access fails or encounters issues, such as
 * permission denials, hardware unavailability, or browser compatibility problems.
 *
 * The component is positioned absolutely in the center of its container using
 * transform translations, ensuring visibility regardless of parent container dimensions.
 * The high z-index ensures the error appears above camera preview elements.
 *
 * Visual characteristics:
 * - Red background with 90% opacity for high visibility
 * - White text for maximum contrast
 * - Centered both horizontally and vertically
 * - Rounded corners for modern appearance
 * - Adequate padding for readability
 *
 * @component
 * @example
 * ```tsx
 * // Display when camera access is denied
 * {error && <CameraError message="Unable to access camera. Please check permissions." />}
 *
 * // Display for hardware issues
 * {!cameraAvailable && <CameraError message="No camera detected on this device." />}
 * ```
 *
 * @param {CameraErrorProps} props - Component props
 * @returns {JSX.Element} A centered error message box with red background
 */
const CameraError = ({ message }) => {
  return _jsx(Box, {
    sx: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      bgcolor: 'rgba(255,0,0,0.9)',
      color: 'white',
      px: 4,
      py: 2,
      borderRadius: 2,
      zIndex: 10,
    },
    children: _jsx(Typography, { children: message }),
  });
};
export default CameraError;
