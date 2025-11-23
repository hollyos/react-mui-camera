import React from 'react';
interface AdjustmentSlidersProps {
  imageAdjustments: {
    brightness: number;
    contrast: number;
    saturation: number;
  };
  onAdjustmentsChange: React.Dispatch<
    React.SetStateAction<{
      brightness: number;
      contrast: number;
      saturation: number;
    }>
  >;
}
declare const AdjustmentSliders: React.FC<AdjustmentSlidersProps>;
export default AdjustmentSliders;
