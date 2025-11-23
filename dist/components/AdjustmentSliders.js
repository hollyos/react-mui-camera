import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { useEffect, useRef, useState } from 'react';
import { Box, Slider, Stack, Typography } from '@mui/material';
import { MdOutlineWbSunny, MdContrast } from 'react-icons/md';
import { BsDropletHalf } from 'react-icons/bs';
/**
 * AdjustmentSliders Component
 *
 * Provides an overlay panel with three adjustable sliders for controlling image appearance:
 * brightness, contrast, and saturation. Each slider displays its current value as a percentage
 * and includes an icon representing the adjustment type.
 *
 * The component is positioned absolutely near the top of its container with a semi-transparent
 * dark background for visibility over images. It's designed for use in photo editing or camera
 * preview interfaces where real-time visual adjustments are needed.
 *
 * Slider ranges:
 * - Brightness: 50% to 150% (default: 100%)
 * - Contrast: 50% to 150% (default: 100%)
 * - Saturation: 0% to 200% (default: 100%)
 *
 * @component
 * @example
 * ```tsx
 * const [brightness, setBrightness] = useState(100);
 * const [contrast, setContrast] = useState(100);
 * const [saturation, setSaturation] = useState(100);
 *
 * <AdjustmentSliders
 *   brightness={brightness}
 *   contrast={contrast}
 *   saturation={saturation}
 *   onBrightnessChange={setBrightness}
 *   onContrastChange={setContrast}
 *   onSaturationChange={setSaturation}
 * />
 * ```
 *
 * @param {AdjustmentSlidersProps} props - Component props
 * @returns {JSX.Element} A panel containing three labeled sliders with icons and value displays
 */
const AdjustmentSliders = ({
  brightness,
  contrast,
  saturation,
  onBrightnessChange,
  onContrastChange,
  onSaturationChange,
}) => {
  // const initialHeight = 230;
  const minHeight = 150;
  const contentRef = useRef(null);
  const sliderGroupRef = useRef(null);
  const [initialHeight, setInitialHeight] = useState(0);
  const [startY, setStartY] = useState(null);
  const [currentY, setCurrentY] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [height, setHeight] = useState(0);
  const handleTouchStart = (e) => {
    setStartY(e.touches[0].clientY);
    setDragging(true);
  };
  const handleTouchMove = (e) => {
    if (!dragging || startY === null) return;
    const delta = startY - e.touches[0].clientY;
    const newHeight = Math.max(minHeight, initialHeight - delta);
    setHeight(newHeight);
  };
  const handleTouchEnd = () => {
    if (height <= minHeight + 20) {
      window.dispatchEvent(new CustomEvent('adjustmentSwipeClose'));
    }
    resetDrag();
  };
  const handleMouseDown = (e) => {
    setStartY(e.clientY);
    setDragging(true);
  };
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!dragging || startY === null) return;
      const delta = startY - e.clientY;
      const newHeight = Math.max(minHeight, initialHeight - delta);
      setHeight(newHeight);
    };
    const handleMouseUp = () => {
      if (height <= minHeight + 20) {
        window.dispatchEvent(new CustomEvent('adjustmentSwipeClose'));
      }
      resetDrag();
    };
    if (dragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [dragging, startY, height]);
  useEffect(() => {
    const handleResize = () => {
      if (sliderGroupRef.current) {
        const measuredHeight = sliderGroupRef.current.getBoundingClientRect().height;
        setInitialHeight(measuredHeight);
        setHeight((prev) => (!dragging ? measuredHeight : prev));
      }
    };
    window.addEventListener('resize', handleResize);
    // Initial check on mount
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dragging]);
  useEffect(() => {
    if (sliderGroupRef.current) {
      const measuredHeight = sliderGroupRef.current.getBoundingClientRect().height;
      setInitialHeight(measuredHeight);
      setHeight(measuredHeight);
    }
  }, []);
  const resetDrag = () => {
    setDragging(false);
    setStartY(null);
    setCurrentY(null);
    setHeight(initialHeight);
  };
  return _jsxs(Box, {
    sx: {
      bgcolor: 'rgba(0,0,0,0.8)',
      borderRadius: '0 0 20px 20px',
      p: 2,
      position: 'relative',
      top: '72px',
      transition: 'all 0.3s ease-in-out',
      zIndex: 10,
    },
    children: [
      _jsx(Box, {
        ref: contentRef,
        sx: {
          height: `${height}px`,
          transition: 'height 0.3s ease-in-out',
          overflow: 'hidden',
        },
        children: _jsxs(Box, {
          ref: sliderGroupRef,
          children: [
            _jsxs(Box, {
              sx: { mb: 2 },
              children: [
                _jsxs(Stack, {
                  direction: 'row',
                  alignItems: 'center',
                  spacing: 1,
                  children: [
                    _jsx(MdOutlineWbSunny, { size: 20, color: 'white' }),
                    _jsx(Typography, { variant: 'body2', sx: { color: 'white' }, children: 'Brightness' }),
                    _jsxs(Typography, {
                      variant: 'caption',
                      sx: { color: 'rgba(255,255,255,0.6)', ml: 'auto' },
                      children: [brightness, '%'],
                    }),
                  ],
                }),
                _jsx(Slider, {
                  min: 50,
                  max: 150,
                  value: brightness,
                  onChange: (e, value) => onBrightnessChange(typeof value === 'number' ? value : value[0]),
                  sx: {
                    color: 'primary.main',
                    '& .MuiSlider-thumb': { bgcolor: 'white' },
                    mt: 1,
                  },
                }),
              ],
            }),
            _jsxs(Box, {
              sx: { mb: 2 },
              children: [
                _jsxs(Stack, {
                  direction: 'row',
                  alignItems: 'center',
                  spacing: 1,
                  children: [
                    _jsx(MdContrast, { size: 20, color: 'white' }),
                    _jsx(Typography, { variant: 'body2', sx: { color: 'white' }, children: 'Contrast' }),
                    _jsxs(Typography, {
                      variant: 'caption',
                      sx: { color: 'rgba(255,255,255,0.6)', ml: 'auto' },
                      children: [contrast, '%'],
                    }),
                  ],
                }),
                _jsx(Slider, {
                  min: 50,
                  max: 150,
                  value: contrast,
                  onChange: (e, value) => onContrastChange(typeof value === 'number' ? value : value[0]),
                  sx: {
                    color: 'primary.main',
                    '& .MuiSlider-thumb': { bgcolor: 'white' },
                    mt: 1,
                  },
                }),
              ],
            }),
            _jsxs(Box, {
              children: [
                _jsxs(Stack, {
                  direction: 'row',
                  alignItems: 'center',
                  spacing: 1,
                  children: [
                    _jsx(BsDropletHalf, { size: 20, color: 'white' }),
                    _jsx(Typography, { variant: 'body2', sx: { color: 'white' }, children: 'Saturation' }),
                    _jsxs(Typography, {
                      variant: 'caption',
                      sx: { color: 'rgba(255,255,255,0.6)', ml: 'auto' },
                      children: [saturation, '%'],
                    }),
                  ],
                }),
                _jsx(Slider, {
                  min: 0,
                  max: 200,
                  value: saturation,
                  onChange: (e, value) => onSaturationChange(typeof value === 'number' ? value : value[0]),
                  sx: {
                    color: 'primary.main',
                    '& .MuiSlider-thumb': { bgcolor: 'white' },
                    mt: 1,
                  },
                }),
              ],
            }),
          ],
        }),
      }),
      _jsx(Box, {
        sx: { mt: 2, width: '100%', display: 'flex', justifyContent: 'center', cursor: 'grab' },
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
        onMouseDown: handleMouseDown,
        children: _jsx(Box, {
          sx: {
            width: 40,
            height: 6,
            bgcolor: 'grey.500',
            borderRadius: 3,
          },
        }),
      }),
    ],
  });
};
export default AdjustmentSliders;
