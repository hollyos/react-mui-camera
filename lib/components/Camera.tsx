import { useRef, useState, useEffect } from 'react';
import { Box, SwipeableDrawer, Collapse } from '@mui/material';

import ActionButtons from './ActionButtons';
import AdjustmentSliders from './AdjustmentSliders';
import CameraControls from './CameraControls';
import CameraError from './CameraError';
import CaptureButton from './CaptureButton';
import FilterSelector from './FilterSelector';
import ImagePreview from './ImagePreview';

import { startCamera as startCameraUtil, stopCamera as stopCameraUtil } from '../utils/cameraUtils';
import { CameraProps, FilterKey } from '../types/types';
import { FILTERS } from '../utils/filters';
import { detectDevice } from '../utils/device';
import CameraSwitch from './CameraSwitch';

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
const Camera: React.FC<CameraProps> = ({ onImageCaptured, onClose, skipFilters = false }) => {
  // Refs for DOM elements
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  // Camera state
  const [isStreaming, setIsStreaming] = useState(false);
  const [facingMode, setFacingMode] = useState<'user' | 'environment'>('user');

  // Image adjustment state
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [saturation, setSaturation] = useState(100);

  // Capture and filter state
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [selectedFilter, setSelectedFilter] = useState<FilterKey>('none');

  // UI state
  const [showControls, setShowControls] = useState(false);
  const [error, setError] = useState<string>('');
  const [isFlipped, setIsFlipped] = useState(true);

  // Mobile detection
  const [isMobile, setIsMobile] = useState(false);
  const [mobileOS, setMobileOS] = useState<'ios' | 'android' | null>(null);

  const filterDef = FILTERS[selectedFilter];

  /**
   * Initializes the camera stream with current settings
   *
   * Requests user permission and starts the camera with the specified facing mode.
   * Sets up the video element to display the stream and handles potential errors
   * like permission denial or hardware unavailability.
   *
   * @async
   * @throws {Error} Camera access errors are caught and displayed to the user
   */
  const initCamera = async () => {
    try {
      setError('');
      const stream = await startCameraUtil(facingMode);
      streamRef.current = stream;

      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          if (videoRef.current) {
            videoRef.current.play();
            setIsStreaming(true);
          }
        };
      }
    } catch (err) {
      console.error('Camera access error:', err);
      setError('Unable to access camera. Please check permissions.');
    }
  };

  /**
   * Stops the active camera stream and releases hardware
   *
   * Terminates all tracks in the current stream, turning off the camera indicator
   * light and freeing resources for other applications.
   */
  const handleStopCamera = () => {
    if (streamRef.current) {
      stopCameraUtil(streamRef.current);
      streamRef.current = null;
      setIsStreaming(false);
    }
  };

  /**
   * Switches between front and rear cameras
   *
   * Stops the current stream, toggles the facing mode, and restarts the camera.
   * The useEffect hook monitoring facingMode handles the actual restart.
   */
  const handleSwitchCamera = () => {
    handleStopCamera();
    setFacingMode((prev) => (prev === 'user' ? 'environment' : 'user'));
  };

  /**
   * Captures a photo from the video stream with current adjustments
   *
   * Process:
   * 1. Immediately stops camera hardware to free resources
   * 2. Draws video frame to canvas with CSS filter adjustments
   * 3. Applies horizontal flip if enabled
   * 4. Exports as high-quality JPEG (95% quality)
   * 5. In skip mode, immediately returns via callback
   * 6. In standard mode, stores for filter application
   *
   * The canvas matches the video dimensions to preserve full resolution.
   * Adjustments (brightness, contrast, saturation) are applied via canvas filter.
   */
  const handleCapturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas || !streamRef.current) return;

    // Set canvas to match video resolution
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Apply adjustments and flip if needed
    ctx.save();
    ctx.filter = `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`;
    if (isFlipped) {
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
    }
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();

    const imageData = canvas.toDataURL('image/jpeg', 0.95);
    setCapturedImage(imageData);

    // Immediately stop camera hardware for performance
    handleStopCamera();

    // In skip mode, immediately return without filter UI
    if (skipFilters) {
      if (onImageCaptured) {
        onImageCaptured(imageData);
      }
      return;
    }
  };

  /**
   * Applies the selected filter and finalizes the image
   *
   * Process:
   * 1. Loads captured image into a new Image object
   * 2. Applies CSS filter from selected preset
   * 3. Optionally applies blend mode overlay
   * 4. Preserves horizontal flip transformation
   * 5. Exports final image at 95% JPEG quality
   * 6. Returns via callback or triggers download
   * 7. Resets all state for new capture
   *
   * The function handles complex filter configurations including:
   * - CSS filter strings (brightness, contrast, hue rotation, etc.)
   * - Canvas blend modes (multiply, screen, overlay, etc.)
   * - Color fills for tinting effects
   */
  const handleApplyFilterAndSave = () => {
    if (skipFilters) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas || !capturedImage) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = new Image();
    img.onload = () => {
      const { filter, blendMode, fill } = filterDef;

      canvas.width = img.width;
      canvas.height = img.height;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();

      // Apply CSS filter
      ctx.filter = filter;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      ctx.filter = 'none';

      // Apply blend mode overlay if specified
      if (blendMode && fill) {
        ctx.globalCompositeOperation = blendMode;
        ctx.fillStyle = typeof fill === 'string' ? fill : '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.restore();

      const finalImage = canvas.toDataURL('image/jpeg', 0.95);

      // Return image via callback or download
      if (onImageCaptured) {
        onImageCaptured(finalImage);
      } else {
        const link = document.createElement('a');
        link.download = `photo-${Date.now()}.jpg`;
        link.href = finalImage;
        link.click();
      }

      // Reset state for next capture
      handleResetState();
    };
    img.src = capturedImage;
  };

  /**
   * Discards the current capture and returns to camera preview
   *
   * Resets all capture-related state and restarts the camera stream
   * with the same settings that were active during capture.
   */
  const handleRetakePhoto = () => {
    handleResetState();
    initCamera();
  };

  /**
   * Resets all capture and adjustment state to defaults
   */
  const handleResetState = () => {
    setCapturedImage(null);
    setSelectedFilter('none');
    setBrightness(100);
    setContrast(100);
    setSaturation(100);
  };

  /**
   * Handles closing the camera interface
   */
  const handleClose = () => {
    handleStopCamera();
    if (onClose) {
      onClose();
    }
  };

  // Initialize camera on mount and when facing mode changes
  useEffect(() => {
    initCamera();
    return () => {
      // Cleanup: stop camera when component unmounts or facing mode changes
      if (streamRef.current) {
        stopCameraUtil(streamRef.current);
        streamRef.current = null;
      }
    };
  }, [facingMode]);

  // Detect mobile device on mount
  useEffect(() => {
    const { isMobile, mobileOS } = detectDevice();
    setIsMobile(isMobile);
    setMobileOS(mobileOS);

    const handleSwipeClose = () => setShowControls(false);
    window.addEventListener('adjustmentSwipeClose', handleSwipeClose);
    return () => window.removeEventListener('adjustmentSwipeClose', handleSwipeClose);
  }, []);

  // Styles for video preview with real-time adjustments
  const videoStyle: React.CSSProperties = {
    filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`,
    height: '100%',
    left: 0,
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    transform: isFlipped ? 'scaleX(-1)' : 'none',
    width: '100%',
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        position: 'relative',
        bgcolor: 'black',
        overflow: 'hidden',
      }}
    >
      {/* Camera Preview Mode */}
      {!capturedImage || skipFilters ? (
        <>
          {/* Live video stream */}
          <video ref={videoRef} autoPlay playsInline muted style={videoStyle} />

          {/* Top control bar */}
          <CameraControls
            showControls={showControls}
            toggleControls={() => setShowControls(!showControls)}
            isFlipped={isFlipped}
            toggleFlip={() => setIsFlipped((prev) => !prev)}
            onClose={onClose ? handleClose : undefined}
          />

          {/* Adjustment sliders panel */}
          <Collapse in={showControls} timeout='auto' unmountOnExit>
            <AdjustmentSliders
              brightness={brightness}
              contrast={contrast}
              saturation={saturation}
              onBrightnessChange={setBrightness}
              onContrastChange={setContrast}
              onSaturationChange={setSaturation}
            />
          </Collapse>

          {/* Error display */}
          {error && <CameraError message={error} />}

          <Box
            sx={{
              alignItems: 'center',
              bottom: 0,
              display: 'flex',
              justifyContent: 'space-around',
              left: 0,
              pb: 2,
              position: 'fixed',
              right: 0,
              width: '100%',
            }}
          >
            <Box sx={{ width: 80 }} />

            {/* Capture button */}
            <CaptureButton
              onCapture={handleCapturePhoto}
              isStreaming={isStreaming}
              mobileOS={mobileOS}
              isMobile={isMobile}
            />

            {/* Camera switch button - only visible on mobile devices */}
            <CameraSwitch
              isMobile={isMobile}
              mobileOS={mobileOS}
              switchCamera={handleSwitchCamera}
              facingMode={facingMode}
            />
          </Box>
        </>
      ) : (
        /* Image Preview Mode with Filters */
        <Box sx={{ width: '100%', height: '100%', position: 'relative', display: 'flex', flexDirection: 'column' }}>
          {/* Captured image display */}
          <ImagePreview
            capturedImage={capturedImage}
            selectedFilter={selectedFilter}
            isFlipped={false}
            skipFilters={skipFilters}
          />

          {/* Filter selection panel */}
          {!skipFilters && (
            <FilterSelector
              capturedImage={capturedImage}
              selectedFilter={selectedFilter}
              onSelectFilter={setSelectedFilter}
            />
          )}

          {/* Action buttons */}
          <ActionButtons
            onRetake={handleRetakePhoto}
            onSave={skipFilters ? undefined : handleApplyFilterAndSave}
            showSave={!skipFilters}
          />
        </Box>
      )}

      {/* Hidden canvas for image processing */}
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </Box>
  );
};

export default Camera;
