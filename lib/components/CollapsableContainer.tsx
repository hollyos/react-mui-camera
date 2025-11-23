import React, { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import { Box } from '@mui/material';

interface CollapsableContainerProps {
  position?: 'top' | 'bottom';
  onCloseEvent?: string;
  minHeight?: number;
  children: ReactNode;
}

interface ContainerHandleProps {
  handleStart: (clientY: number) => void;
  handleMove: (clientY: number) => void;
  handleEnd: () => void;
}

const ContainerHandle: React.FC<ContainerHandleProps> = ({ handleStart, handleMove, handleEnd }) => {
  return (
    <Box
      sx={{
        borderRadius: 3,
        boxShadow: '0 -2px 6px rgba(0,0,0,0.5)',
        cursor: 'grab',
        display: 'flex',
        justifyContent: 'center',
        py: 3,
        width: '100%',
      }}
      onTouchStart={(e) => handleStart(e.touches[0].clientY)}
      onTouchMove={(e) => handleMove(e.touches[0].clientY)}
      onTouchEnd={handleEnd}
      onMouseDown={(e) => handleStart(e.clientY)}
    >
      <Box
        sx={{
          bgcolor: 'grey.500',
          borderRadius: 3,
          height: 2,
          width: '13%',
          minWidth: '50px',
        }}
      />
    </Box>
  );
};

const CollapsableContainer: React.FC<CollapsableContainerProps> = ({
  position = 'bottom',
  onCloseEvent = 'adjustmentSwipeClose',
  minHeight = 150,
  children,
}) => {
  const contentRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const [initialHeight, setInitialHeight] = useState<number>(0);
  const [startY, setStartY] = useState<number | null>(null);
  const [dragging, setDragging] = useState(false);
  const [height, setHeight] = useState<number>(0);

  const handleStart = (clientY: number) => {
    setStartY(clientY);
    setDragging(true);
    document.body.style.userSelect = 'none';
  };

  const handleMove = (clientY: number) => {
    if (!dragging || startY === null) return;
    const delta = position === 'top' ? clientY - startY : startY - clientY;
    const newHeight = Math.max(minHeight, initialHeight - delta);
    setHeight(newHeight);
  };

  const handleEnd = () => {
    if (height <= minHeight + 20) {
      window.dispatchEvent(new CustomEvent(onCloseEvent));
    }
    setDragging(false);
    setStartY(null);
    setHeight(initialHeight);
    document.body.style.userSelect = '';
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      handleMove(e.clientY);
    };
    const handleMouseUp = () => {
      handleEnd();
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
      if (innerRef.current) {
        const measuredHeight = innerRef.current.getBoundingClientRect().height;
        setInitialHeight(measuredHeight);
        setHeight((prev) => (!dragging ? measuredHeight : prev));
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, [dragging]);

  useEffect(() => {
    if (innerRef.current) {
      const measuredHeight = innerRef.current.getBoundingClientRect().height;
      setInitialHeight(measuredHeight);
      setHeight(measuredHeight);
    }
  }, []);

  return (
    <Box
      sx={{
        bgcolor: 'rgba(0,0,0,0.8)',
        borderRadius: position === 'bottom' ? '0 0 20px 20px' : '20px 20px 0 0',
        position: 'relative',
        top: position === 'top' ? 0 : undefined,
        bottom: position === 'bottom' ? 0 : undefined,
        transition: 'all 0.3s ease-in-out',
        zIndex: 20,
      }}
    >
      {position === 'top' && (
        <ContainerHandle handleStart={handleStart} handleMove={handleMove} handleEnd={handleEnd} />
      )}

      <Box
        ref={contentRef}
        sx={{ height: `${height}px`, transition: 'height 0.3s ease-in-out', overflow: 'hidden', p: 2 }}
      >
        <Box ref={innerRef}>{children}</Box>
      </Box>

      {position === 'bottom' && (
        <ContainerHandle handleStart={handleStart} handleMove={handleMove} handleEnd={handleEnd} />
      )}
    </Box>
  );
};

export default CollapsableContainer;
