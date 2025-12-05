import node from '@astrojs/node';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

const { SUPABASE_URL, SUPABASE_ANON_KEY, JWT_SECRET, JWT_EXPIRES_IN } = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  output: 'hybrid', // Permite API routes e páginas estáticas
  adapter: node({
    mode: 'standalone'
  }),
  server: {
    port: 4321,
    host: true
  },
  vite: {
    define: {
      'process.env.SUPABASE_URL': JSON.stringify(SUPABASE_URL),
      'process.env.SUPABASE_ANON_KEY': JSON.stringify(SUPABASE_ANON_KEY),
      'process.env.JWT_SECRET': JSON.stringify(JWT_SECRET),
      'process.env.JWT_EXPIRES_IN': JSON.stringify(JWT_EXPIRES_IN),
    }
  }
});

