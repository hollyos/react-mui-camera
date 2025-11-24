import { useState, useEffect } from 'react';
import { detectDevice } from '../utils/device.js';

const useDeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState(() => detectDevice());
  useEffect(() => {
    const updateDevice = () => setDeviceInfo(detectDevice());
    window.addEventListener('resize', updateDevice);
    return () => window.removeEventListener('resize', updateDevice);
  }, []);
  return deviceInfo;
};

export { useDeviceInfo };
//# sourceMappingURL=useDeviceInfo.js.map
