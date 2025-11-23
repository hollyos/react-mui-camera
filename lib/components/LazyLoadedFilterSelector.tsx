// Lazy-loaded FilterSelector with Skeleton placeholders
import React, { Suspense } from 'react';
import { Box, Skeleton } from '@mui/material';

const FilterSelector = React.lazy(() => import('./FilterSelector'));

interface LazyFilterSelectorProps {
  allowedFilters?: import('../types/types').AllowedFilters;
  capturedImage: string;
  onSelectFilter: (filterKey: import('../types/types').FilterKey) => void;
  selectedFilter: import('../types/types').FilterKey;
}

const LazyLoadedFilterSelector: React.FC<LazyFilterSelectorProps> = (props) => {
  return (
    <Suspense
      fallback={
        <Box
          sx={{
            bgcolor: 'rgba(0,0,0,0.8)',
            width: '100%',
            p: 2,
          }}
        >
          <Skeleton variant='text' width={120} height={20} sx={{ bgcolor: 'grey.800', mb: 2 }} />
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
            {[...Array(5)].map((_, i) => (
              <Box key={i} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Skeleton variant='rectangular' width={70} height={70} sx={{ borderRadius: 2, bgcolor: 'grey.800' }} />
                <Skeleton variant='text' width={60} height={15} sx={{ mt: 1, bgcolor: 'grey.800' }} />
              </Box>
            ))}
          </Box>
        </Box>
      }
    >
      <FilterSelector {...props} />
    </Suspense>
  );
};

export default LazyLoadedFilterSelector;
