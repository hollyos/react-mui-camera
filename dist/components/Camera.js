import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { Box, Collapse } from '@mui/material';
import ActionBar from './ActionButtons';
import AdjustmentSliders from './AdjustmentSliders';
import CameraControls from './CameraControls';
import CameraError from './CameraError';
import CaptureButton from './CaptureButton';
import ImagePreview from './ImagePreview';
import CameraSwitch from './CameraSwitch';
import CollapsableContainer from './CollapsableContainer';
import { useCameraStream } from '../hooks/useCameraStream';
import { FILTERS } from '../utils/filters';
import { generateFilterCSS } from '../utils/styleUtils';
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
const Camera = ({ onImageCaptured, onClose, skipFilters = false, allowedFilters = 'all' }) => {
  const { videoRef, canvasRef, streamRef, isStreaming, initCamera, stopCamera } = useCameraStream();
  // Camera state
  const savedFacingMode = localStorage.getItem('facingMode');
  const [facingMode, setFacingMode] = useState(savedFacingMode || 'user');
  // Image adjustment state
  const [imageAdjustments, setImageAdjustments] = useState({
    brightness: 100,
    contrast: 100,
    saturation: 100,
  });
  // Capture and filter state
  const [capturedImage, setCapturedImage] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('none');
  // UI state
  const [showControls, setShowControls] = useState(false);
  const [error, setError] = useState('');
  const [isFlipped, setIsFlipped] = useState(true);
  const filterDef = FILTERS[selectedFilter];
  /**
   * Switches between front and rear cameras
   *
   * Stops the current stream, toggles the facing mode, and restarts the camera.
   * The useEffect hook monitoring facingMode handles the actual restart.
   */
  const handleSwitchCamera = () => {
    stopCamera();
    const newMode = facingMode === 'user' ? 'environment' : 'user';
    localStorage.setItem('facingMode', newMode);
    setFacingMode(newMode);
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
    ctx.filter = generateFilterCSS(imageAdjustments);
    if (isFlipped) {
      ctx.translate(canvas.width, 0);
      ctx.scale(-1, 1);
    }
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.restore();
    const imageData = canvas.toDataURL('image/jpeg', 0.95);
    setCapturedImage(imageData);
    // Immediately stop camera hardware for performance
    stopCamera();
    // Reset adjustments for next capture/filter
    setImageAdjustments({
      brightness: 100,
      contrast: 100,
      saturation: 100,
    });
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
    if (skipFilters || !capturedImage) return;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;
    const { filter, filterBlendMode, filterFill, imgBlendMode, imgBackground } = filterDef;
    const img = new Image();
    img.onload = () => {
      const { width, height } = img;
      canvas.width = width;
      canvas.height = height;
      ctx.clearRect(0, 0, width, height);
      // Draw solid background color under everything
      if (imgBackground) {
        ctx.globalCompositeOperation = 'source-over';
        ctx.fillStyle = imgBackground;
        ctx.fillRect(0, 0, width, height);
      }
      // Apply image with filter + image blend mode (like CSS)
      ctx.filter = generateFilterCSS(imageAdjustments, filter || '');
      ctx.globalCompositeOperation = imgBlendMode === 'normal' || !imgBlendMode ? 'source-over' : imgBlendMode;
      ctx.drawImage(img, 0, 0, width, height);
      // Apply overlay fill with filterBlendMode
      if (filterBlendMode && filterFill) {
        ctx.globalCompositeOperation = filterBlendMode === 'normal' ? 'source-over' : filterBlendMode;
        ctx.filter = 'none';
        ctx.fillStyle = filterFill;
        ctx.fillRect(0, 0, width, height);
      }
      // Reset context and export
      ctx.globalCompositeOperation = 'source-over';
      ctx.filter = 'none';
      const finalImage = canvas.toDataURL('image/jpeg', 0.95);
      onImageCaptured?.(finalImage);
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
    initCamera(facingMode).catch(() => setError('Unable to access camera. Please check permissions.'));
  };
  /**
   * Resets all capture and adjustment state to defaults
   */
  const handleResetState = () => {
    setCapturedImage(null);
    setSelectedFilter('none');
    setImageAdjustments({
      brightness: 100,
      contrast: 100,
      saturation: 100,
    });
  };
  /**
   * Handles closing the camera interface
   */
  const handleClose = () => {
    stopCamera();
    onClose?.();
  };
  // Initialize camera on mount and when facing mode changes
  useEffect(() => {
    initCamera(facingMode).catch(() => setError('Unable to access camera. Please check permissions.'));
    return () => stopCamera();
  }, [facingMode]);
  // Styles for video preview with real-time adjustments
  const videoStyle = {
    filter: generateFilterCSS(imageAdjustments),
    height: '100%',
    left: 0,
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    transform: isFlipped ? 'scaleX(-1)' : 'none',
    width: '100%',
  };
  return _jsxs(Box, {
    sx: {
      width: '100%',
      height: '100%',
      position: 'relative',
      bgcolor: 'black',
      overflow: 'hidden',
    },
    children: [
      !capturedImage || skipFilters
        ? _jsxs(_Fragment, {
            children: [
              _jsx('video', { ref: videoRef, autoPlay: true, playsInline: true, muted: true, style: videoStyle }),
              _jsx(CameraControls, {
                showControls: showControls,
                toggleControls: () => setShowControls(!showControls),
                isFlipped: isFlipped,
                toggleFlip: () => setIsFlipped((prev) => !prev),
                onClose: onClose ? handleClose : undefined,
              }),
              _jsx(Collapse, {
                in: showControls,
                timeout: 'auto',
                unmountOnExit: true,
                style: { position: 'absolute', top: '72px', width: '100%' },
                children: _jsx(CollapsableContainer, {
                  onCloseEvent: 'adjustmentSwipeClose',
                  children: _jsx(AdjustmentSliders, {
                    imageAdjustments: imageAdjustments,
                    onAdjustmentsChange: setImageAdjustments,
                  }),
                }),
              }),
              error && _jsx(CameraError, { message: error }),
              _jsxs(Box, {
                sx: {
                  alignItems: 'center',
                  bottom: 20,
                  display: 'flex',
                  justifyContent: 'space-around',
                  left: 0,
                  pb: 2,
                  position: 'absolute',
                  right: 0,
                  width: '100%',
                },
                children: [
                  _jsx(Box, { sx: { width: 80 } }),
                  _jsx(CaptureButton, { onCapture: handleCapturePhoto, isStreaming: isStreaming }),
                  _jsx(CameraSwitch, { switchCamera: handleSwitchCamera, facingMode: facingMode }),
                ],
              }),
            ],
          })
        : /* Image Preview Mode with Filters */
          _jsxs(Box, {
            sx: {
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
              position: 'relative',
              width: '100%',
            },
            children: [
              _jsx(
                ImagePreview,
                {
                  capturedImage: capturedImage,
                  imageAdjustments: imageAdjustments,
                  isFlipped: false,
                  selectedFilter: selectedFilter,
                  skipFilters: skipFilters,
                },
                `${selectedFilter}-${imageAdjustments.brightness}-${imageAdjustments.contrast}-${imageAdjustments.saturation}`
              ),
              _jsx(ActionBar, {
                allowedFilters: allowedFilters,
                capturedImage: capturedImage,
                imageAdjustments: imageAdjustments,
                onAdjustmentsChange: setImageAdjustments,
                onRetake: handleRetakePhoto,
                onSave: skipFilters ? undefined : handleApplyFilterAndSave,
                selectedFilter: selectedFilter,
                setSelectedFilter: setSelectedFilter,
                showSave: !skipFilters,
                skipFilters: skipFilters,
              }),
            ],
          }),
      _jsx('canvas', { ref: canvasRef, style: { display: 'none' } }),
    ],
  });
};
export default Camera;
