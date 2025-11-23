import { useRef, useState, useCallback } from 'react';
import { startCamera as startCameraUtil, stopCamera as stopCameraUtil } from '../utils/cameraUtils';

export const useCameraStream = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [isStreaming, setIsStreaming] = useState(false);

  const initCamera = useCallback(async (facingMode: 'user' | 'environment') => {
    try {
      const stream = await startCameraUtil(facingMode);
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

  const stopCamera = useCallback(() => {
    if (streamRef.current) {
      stopCameraUtil(streamRef.current);
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
    stopCamera,
  };
};
