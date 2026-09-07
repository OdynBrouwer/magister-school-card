import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

// Builds the self-contained card to the repository root. The card is served
// from the root file (`magister-school-card.js`), which keeps the HACS
// resource path stable for existing users across updates.
export default {
  input: 'src/magister-school-card.js',
  output: {
    file: 'magister-school-card.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    nodeResolve(),
    terser(),
  ],
};
