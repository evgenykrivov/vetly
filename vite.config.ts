import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import * as path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, './env', '');

  return {
    envDir: './env',
    define: {
      'import.meta.env': env,
    },
    plugins: [react(), tsconfigPaths()],
    publicDir: 'public',
    build: {
      sourcemap: true,
      outDir: 'build',
      emptyOutDir: true,
      assetsInlineLimit: 0,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});

