import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { useEffect, useState } from 'react';
import { Button, Box, IconButton, Collapse } from '@mui/material';
import FilterSelector from './FilterSelector';
import AdjustmentSliders from './AdjustmentSliders';
import CollapsableContainer from './CollapsableContainer';
import { MdDownloading, MdClose } from 'react-icons/md';
import { BsSliders } from 'react-icons/bs';
import { RiColorFilterAiLine } from 'react-icons/ri';
/**
 * ActionButtons Component
 *
 * Renders a fixed-position button group at the bottom center of the screen containing
 * retake and save photo actions. Typically used in camera or image editing interfaces
 * to provide users with options after capturing or editing a photo.
 *
 * The component is positioned absolutely at the bottom center using transform translations
 * and includes proper z-indexing for overlay scenarios.
 *
 * @component
 */
const ActionButtons = ({ onRetake, onSave, showSave = true, toggleFilters, toggleControls }) => {
  return _jsxs(Box, {
    sx: {
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
      bottom: 0,
      boxShadow: '0 -2px 8px rgba(0,0,0,0.3)',
      boxSizing: 'border-box',
      display: 'flex',
      gap: 2,
      height: '72px',
      justifyContent: 'space-between',
      left: '50%',
      px: 4,
      py: 2,
      position: 'absolute',
      transform: 'translateX(-50%)',
      width: '100%',
      zIndex: 10,
    },
    children: [
      _jsxs(Box, {
        children: [
          _jsx(IconButton, {
            sx: { color: 'white' },
            onClick: toggleFilters,
            children: _jsx(RiColorFilterAiLine, { size: 24, color: 'white' }),
          }),
          _jsx(IconButton, {
            sx: { color: 'white' },
            onClick: toggleControls,
            children: _jsx(BsSliders, { size: 24, color: 'white' }),
          }),
        ],
      }),
      _jsxs(Box, {
        sx: { display: 'flex', gap: 2 },
        children: [
          _jsx(Button, {
            variant: 'outlined',
            onClick: onRetake,
            sx: { color: 'white', borderColor: 'rgba(255,255,255,0.5)' },
            startIcon: _jsx(MdClose, { width: 20, height: 20, fill: 'white' }),
            children: 'Retake',
          }),
          showSave &&
            onSave &&
            _jsx(Button, {
              variant: 'contained',
              onClick: onSave,
              sx: { bgcolor: 'primary.main', color: 'white' },
              startIcon: _jsx(MdDownloading, { size: 20 }),
              children: 'Save Photo',
            }),
        ],
      }),
    ],
  });
};
const ActionBar = ({
  allowedFilters = 'all',
  capturedImage,
  imageAdjustments,
  onAdjustmentsChange,
  onRetake,
  onSave,
  selectedFilter,
  setSelectedFilter,
  showSave = true,
  skipFilters,
}) => {
  const [openPanel, setOpenPanel] = useState(null);
  const toggleFilters = () => {
    setOpenPanel((prev) => (prev === 'filters' ? null : 'filters'));
  };
  const toggleAdjustments = () => {
    setOpenPanel((prev) => (prev === 'adjustments' ? null : 'adjustments'));
  };
  useEffect(() => {
    const handleSwipeAdjustmentClose = () => {
      if (openPanel === 'adjustments') setOpenPanel(null);
    };
    const handleSwipeFilterClose = () => {
      if (openPanel === 'filters') setOpenPanel(null);
    };
    window.addEventListener('adjustmentSwipeClose', handleSwipeAdjustmentClose);
    window.addEventListener('filterSwipeClose', handleSwipeFilterClose);
    return () => {
      window.removeEventListener('adjustmentSwipeClose', handleSwipeAdjustmentClose);
      window.removeEventListener('filterSwipeClose', handleSwipeFilterClose);
    };
  }, [openPanel]);
  return _jsxs(Box, {
    sx: { position: 'relative' },
    children: [
      !skipFilters &&
        _jsx(Collapse, {
          in: openPanel === 'filters',
          timeout: 'auto',
          unmountOnExit: true,
          sx: { position: 'absolute', bottom: '72px', width: '100%' },
          children: _jsx(CollapsableContainer, {
            position: 'top',
            onCloseEvent: 'filterSwipeClose',
            children: _jsx(FilterSelector, {
              allowedFilters: allowedFilters,
              capturedImage: capturedImage,
              onSelectFilter: setSelectedFilter,
              selectedFilter: selectedFilter,
            }),
          }),
        }),
      _jsx(Collapse, {
        in: openPanel === 'adjustments',
        timeout: 'auto',
        unmountOnExit: true,
        sx: { position: 'absolute', bottom: '72px', width: '100%' },
        children: _jsx(CollapsableContainer, {
          position: 'top',
          onCloseEvent: 'adjustmentSwipeClose',
          children: _jsx(AdjustmentSliders, {
            imageAdjustments: imageAdjustments,
            onAdjustmentsChange: onAdjustmentsChange,
          }),
        }),
      }),
      _jsx(ActionButtons, {
        onRetake: onRetake,
        onSave: onSave,
        showSave: showSave,
        toggleFilters: toggleFilters,
        showFilters: openPanel === 'filters',
        showControls: openPanel === 'adjustments',
        toggleControls: toggleAdjustments,
      }),
    ],
  });
};
export default ActionBar;
