import { j as jsxRuntimeExports } from '../_virtual/jsx-runtime.js';
import React, { Suspense } from 'react';
import { Box, Skeleton } from '@mui/material';

const FilterSelector = React.lazy(() => import('./FilterSelector.js'));
const LazyLoadedFilterSelector = (props) => {
  return jsxRuntimeExports.jsx(Suspense, {
    fallback: jsxRuntimeExports.jsxs(Box, {
      sx: {
        bgcolor: 'rgba(0,0,0,0.8)',
        width: '100%',
        p: 2,
      },
      children: [
        jsxRuntimeExports.jsx(Skeleton, {
          variant: 'text',
          width: 120,
          height: 20,
          sx: { bgcolor: 'grey.800', mb: 2 },
        }),
        jsxRuntimeExports.jsx(Box, {
          sx: { display: 'flex', flexDirection: 'row', gap: 2 },
          children: [...Array(5)].map((_, i) =>
            jsxRuntimeExports.jsxs(
              Box,
              {
                sx: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
                children: [
                  jsxRuntimeExports.jsx(Skeleton, {
                    variant: 'rectangular',
                    width: 70,
                    height: 70,
                    sx: { borderRadius: 2, bgcolor: 'grey.800' },
                  }),
                  jsxRuntimeExports.jsx(Skeleton, {
                    variant: 'text',
                    width: 60,
                    height: 15,
                    sx: { mt: 1, bgcolor: 'grey.800' },
                  }),
                ],
              },
              i
            )
          ),
        }),
      ],
    }),
    children: jsxRuntimeExports.jsx(FilterSelector, { ...props }),
  });
};

export { LazyLoadedFilterSelector as default };
//# sourceMappingURL=LazyLoadedFilterSelector.js.map
