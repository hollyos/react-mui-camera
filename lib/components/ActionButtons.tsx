import React, { useEffect, useState } from 'react';
import { Button, Box, IconButton, Collapse } from '@mui/material';
import { MdDownloading, MdClose } from 'react-icons/md';
import { BsSliders } from 'react-icons/bs';
import { RiColorFilterAiLine } from 'react-icons/ri';
import FilterSelector from './FilterSelector';
import AdjustmentSliders from './AdjustmentSliders';
import CollapsableContainer from './CollapsableContainer';

/**
 * Props for the ActionButtons component
 *
 * @interface ActionButtonsProps
 * @property {() => void} onRetake - Callback function triggered when the retake button is clicked
 * @property {() => void} [onSave] - Optional callback function triggered when the save button is clicked
 * @property {boolean} [showSave=true] - Optional flag to control visibility of the save button. Defaults to true
 */
interface ActionButtonsProps {
  onRetake: () => void;
  onSave?: () => void;
  showSave?: boolean;
  toggleFilters?: () => void;
  showFilters?: boolean;
  toggleControls?: () => void;
  showControls?: boolean;
}

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
const ActionButtons: React.FC<ActionButtonsProps> = ({
  onRetake,
  onSave,
  showSave = true,
  toggleFilters,
  toggleControls,
}) => {
  return (
    <Box
      sx={{
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
      }}
    >
      <Box>
        <IconButton sx={{ color: 'white' }} onClick={toggleFilters}>
          <RiColorFilterAiLine size={24} color='white' />
        </IconButton>

        <IconButton sx={{ color: 'white' }} onClick={toggleControls}>
          <BsSliders size={24} color='white' />
        </IconButton>
      </Box>

      <Box sx={{ display: 'flex', gap: 2 }}>
        {/* Retake button - outlined style with close icon */}
        <Button
          variant='outlined'
          onClick={onRetake}
          sx={{ color: 'white', borderColor: 'rgba(255,255,255,0.5)' }}
          startIcon={<MdClose width={20} height={20} fill='white' />}
        >
          Retake
        </Button>

        {/* Save button - conditionally rendered based on showSave prop */}
        {showSave && onSave && (
          <Button
            variant='contained'
            onClick={onSave}
            sx={{ bgcolor: 'primary.main', color: 'white' }}
            startIcon={<MdDownloading size={20} />}
          >
            Save Photo
          </Button>
        )}
      </Box>
    </Box>
  );
};

export interface ActionBarProps extends Omit<ActionButtonsProps, 'toggleFilters' | 'showFilters'> {
  capturedImage: string;
  selectedFilter: string;
  setSelectedFilter: (filterKey: string) => void;
  skipFilters: boolean;
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

const ActionBar: React.FC<ActionBarProps> = ({
  capturedImage,
  onRetake,
  onSave,
  selectedFilter,
  setSelectedFilter,
  showSave = true,
  skipFilters,
  imageAdjustments,
  onAdjustmentsChange,
}) => {
  const [openPanel, setOpenPanel] = useState<'filters' | 'adjustments' | null>(null);

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

  return (
    <Box sx={{ position: 'relative' }}>
      {/* Filter selection panel */}
      {!skipFilters && (
        <Collapse
          in={openPanel === 'filters'}
          timeout='auto'
          unmountOnExit
          sx={{ position: 'absolute', bottom: '72px', width: '100%' }}
        >
          <CollapsableContainer position='top' onCloseEvent='filterSwipeClose'>
            <FilterSelector
              capturedImage={capturedImage}
              selectedFilter={selectedFilter}
              onSelectFilter={setSelectedFilter}
            />
          </CollapsableContainer>
        </Collapse>
      )}

      {/* Adjustment sliders panel */}
      <Collapse
        in={openPanel === 'adjustments'}
        timeout='auto'
        unmountOnExit
        sx={{ position: 'absolute', bottom: '72px', width: '100%' }}
      >
        <CollapsableContainer position='top' onCloseEvent='adjustmentSwipeClose'>
          <AdjustmentSliders imageAdjustments={imageAdjustments} onAdjustmentsChange={onAdjustmentsChange} />
        </CollapsableContainer>
      </Collapse>

      <ActionButtons
        onRetake={onRetake}
        onSave={onSave}
        showSave={showSave}
        toggleFilters={toggleFilters}
        showFilters={openPanel === 'filters'}
        showControls={openPanel === 'adjustments'}
        toggleControls={toggleAdjustments}
      />
    </Box>
  );
};

export default ActionBar;
