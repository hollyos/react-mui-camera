import { useRef, useState, useCallback } from 'react';
import { startCamera, stopCamera } from '../utils/cameraUtils.js';

const useCameraStream = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const streamRef = useRef(null);
  const [isStreaming, setIsStreaming] = useState(false);
  const initCamera = useCallback(async (facingMode) => {
    try {
      const stream = await startCamera(facingMode);
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => {
          videoRef.current?.play();
          setIsStreaming(true);
        };
      }
    } catch (err) {
      console.error('Camera init error:', err);
      throw err;
    }
  }, []);
  const stopCamera$1 = useCallback(() => {
    if (streamRef.current) {
      stopCamera(streamRef.current);
      streamRef.current = null;
      setIsStreaming(false);
    }
  }, []);
  return {
    videoRef,
    canvasRef,
    streamRef,
    isStreaming,
    initCamera,
    stopCamera: stopCamera$1,
  };
};

export { useCameraStream };
//# sourceMappingURL=useCameraStream.js.map
