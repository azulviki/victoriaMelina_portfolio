import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { fileURLToPath } from 'url';
import { resolve, dirname } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  // 🌟 CONFIGURACIÓN PARA GITHUB PAGES
  // Reemplaza TU_USUARIO (en minúsculas) y NOMBRE_DE_TU_REPOSITORIO
  site: 'https://azulviki.github.io', 
  base: '/victoriaMelina/',

  integrations: [
    react(),
    tailwind({ applyBaseStyles: false }),
  ],
  vite: {
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
      },
    },
  },
});
