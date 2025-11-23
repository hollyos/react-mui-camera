import React from 'react';
interface LazyFilterSelectorProps {
  allowedFilters?: import('../types/types').AllowedFilters;
  capturedImage: string;
  onSelectFilter: (filterKey: import('../types/types').FilterKey) => void;
  selectedFilter: import('../types/types').FilterKey;
}
declare const LazyLoadedFilterSelector: React.FC<LazyFilterSelectorProps>;
export default LazyLoadedFilterSelector;
