import type { CameraProps } from '../types/types';
/**
 * Camera Component
 *
 * A comprehensive camera interface component that provides live camera preview with real-time
 * image adjustments, photo capture, and optional filter application. This component handles
 * the complete camera workflow from initialization to final image output.
 *
 * Key Features:
 * - Live camera preview with real-time brightness, contrast, and saturation adjustments
 * - Support for front and rear cameras on mobile devices
 * - Horizontal flip capability for mirror effects
 * - Photo capture with immediate hardware release for performance
 * - Optional filter system with 30+ preset filters organized by category
 * - High-quality JPEG export at 95% quality
 * - Responsive design adapting to mobile and desktop
 * - Error handling for camera access issues
 *
 * Workflow Modes:
 * 1. Standard Mode (skipFilters=false):
 *    Camera preview → Capture → Filter selection → Apply & Save
 * 2. Quick Capture Mode (skipFilters=true):
 *    Camera preview → Capture → Immediate return via callback
 *
 * The component manages its own state for camera stream, adjustments, and captured images.
 * It automatically handles camera initialization on mount and cleanup on unmount.
 *
 * Performance Considerations:
 * - Camera hardware is immediately released after capture to free resources
 * - Canvas operations are optimized for real-time preview
 * - High-resolution capture (ideal 1920x1080) with browser fallback
 *
 * @component
 * @example
 * ```tsx
 * // Full-featured camera with filters
 * <Camera
 *   onImageCaptured={(imageData) => {
 *     saveToDatabase(imageData);
 *   }}
 *   onClose={() => navigate('/home')}
 * />
 * ```
 *
 * @example
 * ```tsx
 * // Quick capture mode without filters
 * <Camera
 *   onImageCaptured={(imageData) => {
 *     setProfilePicture(imageData);
 *   }}
 *   skipFilters={true}
 * />
 * ```
 *
 * @param {CameraProps} props - Component props
 * @returns {JSX.Element} A full-screen camera interface with controls and preview
 */
declare const Camera: React.FC<CameraProps>;
export default Camera;
