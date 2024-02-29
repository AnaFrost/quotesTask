import react from '@vitejs/plugin-react-swc';
import * as path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  build: {},
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, 'src'),
    },
  },
});
