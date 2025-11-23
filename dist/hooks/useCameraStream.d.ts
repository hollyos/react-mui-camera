export declare const useCameraStream: () => {
  videoRef: import('react').RefObject<HTMLVideoElement | null>;
  canvasRef: import('react').RefObject<HTMLCanvasElement | null>;
  streamRef: import('react').RefObject<MediaStream | null>;
  isStreaming: boolean;
  initCamera: (facingMode: 'user' | 'environment') => Promise<void>;
  stopCamera: () => void;
};
