import run from '@rollup/plugin-run';

const dev = process.env.NODE_ENV !== 'production';

export default {
  input: 'src/main.js',
  output: {
    file: 'dist/main.js',
    format: 'cjs',
  },
  plugins: [
    dev && run(),
  ],
};
