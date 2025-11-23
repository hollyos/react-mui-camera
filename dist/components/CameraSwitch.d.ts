import * as React from 'react';
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
declare const CameraSwitch: React.FC<CameraSwitchProps>;
export default CameraSwitch;
