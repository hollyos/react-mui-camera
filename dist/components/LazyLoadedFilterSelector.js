import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';
// Lazy-loaded FilterSelector with Skeleton placeholders
import React, { Suspense } from 'react';
import { Box, Skeleton } from '@mui/material';
const FilterSelector = React.lazy(() => import('./FilterSelector'));
const LazyLoadedFilterSelector = (props) => {
  return _jsx(Suspense, {
    fallback: _jsxs(Box, {
      sx: {
        bgcolor: 'rgba(0,0,0,0.8)',
        width: '100%',
        p: 2,
      },
      children: [
        _jsx(Skeleton, { variant: 'text', width: 120, height: 20, sx: { bgcolor: 'grey.800', mb: 2 } }),
        _jsx(Box, {
          sx: { display: 'flex', flexDirection: 'row', gap: 2 },
          children: [...Array(5)].map((_, i) =>
            _jsxs(
              Box,
              {
                sx: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
                children: [
                  _jsx(Skeleton, {
                    variant: 'rectangular',
                    width: 70,
                    height: 70,
                    sx: { borderRadius: 2, bgcolor: 'grey.800' },
                  }),
                  _jsx(Skeleton, { variant: 'text', width: 60, height: 15, sx: { mt: 1, bgcolor: 'grey.800' } }),
                ],
              },
              i
            )
          ),
        }),
      ],
    }),
    children: _jsx(FilterSelector, { ...props }),
  });
};
export default LazyLoadedFilterSelector;
