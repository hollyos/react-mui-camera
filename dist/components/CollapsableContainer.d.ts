import React from 'react';
import type { ReactNode } from 'react';
interface CollapsableContainerProps {
  position?: 'top' | 'bottom';
  onCloseEvent?: string;
  minHeight?: number;
  children: ReactNode;
}
declare const CollapsableContainer: React.FC<CollapsableContainerProps>;
export default CollapsableContainer;
