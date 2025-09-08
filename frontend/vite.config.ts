import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/',
  /*test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/express-contact-server/src/setupTests.ts',

  }*/
})
