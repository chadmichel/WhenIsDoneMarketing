import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Static marketing site. Build → dist (deployed to DontPanicHost like the app).
export default defineConfig({
  plugins: [react()],
  build: { outDir: 'dist' },
});
