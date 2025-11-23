import { useEffect, useState } from 'react';
import { detectDevice } from '../utils/device';

export const useDeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState(() => detectDevice());

  useEffect(() => {
    const updateDevice = () => setDeviceInfo(detectDevice());
    window.addEventListener('resize', updateDevice);
    return () => window.removeEventListener('resize', updateDevice);
  }, []);

  return deviceInfo;
};
