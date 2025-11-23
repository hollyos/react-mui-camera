import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
import { Button, Box } from '@mui/material';
import { MdDownloading, MdClose } from 'react-icons/md';
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
const ActionButtons = ({ onRetake, onSave, showSave = true }) => {
  return _jsxs(Box, {
    sx: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 2,
      zIndex: 10,
    },
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
  });
};
export default ActionButtons;
