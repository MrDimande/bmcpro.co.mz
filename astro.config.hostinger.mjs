import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

// Configuração para build estático (Hostinger)
// Usar: npm run build:hostinger
// 
// NOTA: Este build ignora as rotas /api/* e /admin/*
// Essas rotas estão no backend Vercel (api.bmcpro.co.mz)

// Função para obter todas as rotas de API e admin a ignorar
function getServerOnlyRoutes() {
  const pagesDir = './src/pages';
  const serverDirs = ['api', 'admin'];
  const routes = [];
  
  for (const dir of serverDirs) {
    const fullPath = join(pagesDir, dir);
    if (existsSync(fullPath)) {
      routes.push(`./src/pages/${dir}/**/*`);
    }
  }
  
  return routes;
}

export default defineConfig({
  site: 'https://bmcpro.co.mz',
  integrations: [tailwind(), react()],
  output: 'static',
  build: {
    format: 'directory'
  },
  vite: {
    define: {
      'import.meta.env.PUBLIC_API_URL': JSON.stringify('https://api.bmcpro.co.mz')
    },
    server: {
      watch: {
        ignored: getServerOnlyRoutes()
      }
    }
  }
});
