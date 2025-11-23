import * as React from 'react';
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
declare const CameraControls: React.FC<CameraControlsProps>;
export default CameraControls;
