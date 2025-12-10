import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';

// Configuração para deploy na Vercel (Backend API)
export default defineConfig({
  site: 'https://api.bmcpro.co.mz',
  integrations: [tailwind(), react()],
  output: 'server',
  adapter: vercel({
    functionPerRoute: false
  })
});
