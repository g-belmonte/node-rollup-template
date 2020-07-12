import run from '@rollup/plugin-run';
import typescript from 'rollup-plugin-typescript'

const dev = process.env.NODE_ENV !== 'production';

export default {
  input: 'src/main.ts',
  output: {
    file: 'dist/main.js',
    format: 'cjs',
  },
  plugins: [
    typescript(),
    dev && run(),
  ],
};
