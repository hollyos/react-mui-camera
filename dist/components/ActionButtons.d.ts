import React from 'react';
import type { AllowedFilters } from '../types/types';
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
export interface ActionBarProps extends Omit<ActionButtonsProps, 'toggleFilters' | 'showFilters'> {
  allowedFilters?: AllowedFilters;
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
declare const ActionBar: React.FC<ActionBarProps>;
export default ActionBar;
