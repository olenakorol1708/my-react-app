import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  server: {
    open: true
  },
  resolve: {
    alias: {
      '@images': path.resolve(__dirname, 'src/images'), 
      '@paths': path.resolve(__dirname, 'src/Paths'),
    }
  }
})
