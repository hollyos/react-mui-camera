import * as React from 'react';
import { Button, Box } from '@mui/material';
import { MdDownloading, MdClose } from 'react-icons/md';

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
 * @example
 * ```tsx
 * <ActionButtons
 *   onRetake={() => resetCamera()}
 *   onSave={() => savePhoto()}
 *   showSave={true}
 * />
 * ```
 *
 * @param {ActionButtonsProps} props - Component props
 * @returns {JSX.Element} A horizontally aligned button group with retake and optional save actions
 */
const ActionButtons: React.FC<ActionButtonsProps> = ({ onRetake, onSave, showSave = true }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        gap: 2,
        zIndex: 10,
      }}
    >
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
  );
};

export default ActionButtons;
