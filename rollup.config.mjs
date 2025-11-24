import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default [
  {
    input: 'lib/index.ts',
    output: {
      dir: 'dist',
      format: 'esm',
      sourcemap: true,
      preserveModules: true,
      preserveModulesRoot: 'lib',
      entryFileNames: '[name].js',
    },
    plugins: [
      resolve({ extensions: ['.js', '.ts', '.tsx'] }),
      commonjs(),
      json(),
      typescript({
        tsconfig: 'tsconfig.json',
        useTsconfigDeclarationDir: true,
      }),
    ],
    external: ['react', 'react-dom', '@mui/material', '@mui/icons-material', 'react-icons'],
  },
];
