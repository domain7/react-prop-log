import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default [
  {
    input: 'src/main.js',
    output: [
      { file: pkg.main, format: 'cjs', exports: 'named' },
      { file: pkg.module, format: 'es', exports: 'named' },
    ],
    external: ['react', 'react-dom'],
    plugins: [
      babel({
        exclude: 'node_modules/**',
        plugins: [
          'external-helpers',
        ],
      }),
      resolve(),
      commonjs(),
    ],
  },
];
