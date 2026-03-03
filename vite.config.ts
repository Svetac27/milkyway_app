import { defineConfig } from 'vite';
import { loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const wsBaseUrl = env.VITE_WS_BASE_URL || 'ws://localhost:4400';
  const apiTarget = wsBaseUrl.startsWith('wss://')
    ? wsBaseUrl.replace('wss://', 'https://')
    : wsBaseUrl.replace('ws://', 'http://');

  return {
    plugins: [react()],
    server: {
      proxy: {
        '/api': {
          target: apiTarget,
          changeOrigin: true,
          secure: false
        }
      }
    }
  };
});
