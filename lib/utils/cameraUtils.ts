/**
 * Camera Utility Functions
 *
 * This module provides utility functions for managing camera hardware access
 * through the browser's MediaDevices API. It handles initialization, configuration,
 * and cleanup of video streams from device cameras.
 *
 * @module cameraUtils
 */

/**
 * Initializes and starts the camera stream with specified constraints.
 *
 * Requests camera access using the MediaDevices API with the current facing mode
 * and optimal resolution settings. This function handles the asynchronous process
 * of requesting user permission and initializing the camera hardware.
 *
 * The function requests HD resolution (1920x1080) as an ideal target, but the
 * browser will fall back to the best available resolution if this is not supported.
 *
 * Constraints applied:
 * - Video facing mode: 'user' (front camera) or 'environment' (rear camera)
 * - Ideal resolution: 1920x1080 (Full HD)
 * - Audio: Disabled (video only)
 *
 * Common error scenarios:
 * - NotAllowedError: User denied camera permission
 * - NotFoundError: No camera device available
 * - NotReadableError: Camera is already in use by another application
 * - OverconstrainedError: Requested constraints cannot be satisfied
 *
 * @async
 * @function startCamera
 * @param {'user' | 'environment'} facingMode - Camera orientation to use.
 *   'user' for front-facing camera (selfie), 'environment' for rear-facing camera
 * @returns {Promise<MediaStream>} A promise that resolves to the active MediaStream
 *   containing video tracks from the requested camera
 * @throws {Error} When camera access is denied, unavailable, or constraints cannot be met
 *
 * @example
 * ```typescript
 * // Start front camera
 * try {
 *   const stream = await startCamera('user');
 *   videoElement.srcObject = stream;
 * } catch (error) {
 *   console.error('Failed to start camera:', error);
 * }
 * ```
 *
 * @example
 * ```typescript
 * // Start rear camera
 * const stream = await startCamera('environment');
 * ```
 */
export const startCamera = async (facingMode: 'user' | 'environment'): Promise<MediaStream> => {
  const constraints = {
    video: {
      facingMode,
      width: { ideal: 1920 },
      height: { ideal: 1080 },
    },
    audio: false,
  };
  return await navigator.mediaDevices.getUserMedia(constraints);
};

/**
 * Stops the camera stream and releases hardware resources.
 *
 * Properly terminates all media tracks in the provided stream, ensuring that:
 * - The camera indicator light turns off
 * - Hardware resources are freed for other applications
 * - The stream can no longer produce media data
 *
 * This function is null-safe and will silently return if no stream is provided.
 * It's important to call this function when the camera is no longer needed to
 * prevent battery drain and free up system resources.
 *
 * Best practices:
 * - Call in component cleanup (useEffect return)
 * - Call before switching cameras
 * - Call when unmounting camera components
 * - Call when navigating away from camera views
 *
 * @function stopCamera
 * @param {MediaStream | null} stream - The MediaStream to stop, or null if no stream is active
 * @returns {void}
 *
 * @example
 * ```typescript
 * // In a React component cleanup
 * useEffect(() => {
 *   startCamera('user').then(setStream);
 *
 *   return () => {
 *     stopCamera(stream);
 *   };
 * }, []);
 * ```
 *
 * @example
 * ```typescript
 * // Before switching cameras
 * const switchCamera = () => {
 *   stopCamera(currentStream);
 *   const newStream = await startCamera(newFacingMode);
 *   setCurrentStream(newStream);
 * };
 * ```
 *
 * @example
 * ```typescript
 * // Handle null streams safely
 * stopCamera(null); // No error thrown
 * ```
 */
export const stopCamera = (stream: MediaStream | null) => {
  if (stream) {
    stream.getTracks().forEach((track) => {
      track.stop();
      track.enabled = false;
    });
  }
};
