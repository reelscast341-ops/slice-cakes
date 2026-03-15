import tailwindcss from '@tailwindcss/vite';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          menu: path.resolve(__dirname, 'menu.html'),
          virtualTour: path.resolve(__dirname, 'virtual-tour.html'),
          contact: path.resolve(__dirname, 'contact.html'),
        }
      }
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
