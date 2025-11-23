import { useState } from 'react';
import { Camera } from 'react-mui-camera';

export default function App() {
  const [lastPhoto, setLastPhoto] = useState<string | null>(null);

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {!lastPhoto ? (
        <Camera onImageCaptured={(img) => setLastPhoto(img)} onClose={() => console.log('Closed')} />
      ) : (
        <img src={lastPhoto} style={{ width: '100%', height: 'auto' }} alt='last photo' />
      )}
    </div>
  );
}
