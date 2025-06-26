
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: true
  }
})
/*

import {defineConfig, loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    define: {
      'process.env.VITE_BASE_PORT': JSON.stringify(env.VITE_BASE_PORT),
    },
    plugins: [react()],
    server: {
      port: Number(env.VITE_BASE_PORT),
    }
  };
});

 */