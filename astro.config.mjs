import node from '@astrojs/node';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  site: 'https://bmcpro.co.mz',
  integrations: [tailwind(), react()],
  output: 'server', // Full SSR para Hostinger
  adapter: node({
    mode: 'standalone'
  }),
  server: {
    port: parseInt(process.env.PORT || '4321'),
    host: '0.0.0.0' // Necessário para Hostinger
  },
  vite: {
    define: {
      'process.env.SUPABASE_URL': JSON.stringify(env.SUPABASE_URL),
      'process.env.SUPABASE_ANON_KEY': JSON.stringify(env.SUPABASE_ANON_KEY),
      'process.env.JWT_SECRET': JSON.stringify(env.JWT_SECRET),
      'process.env.JWT_EXPIRES_IN': JSON.stringify(env.JWT_EXPIRES_IN),
    }
  }
});

