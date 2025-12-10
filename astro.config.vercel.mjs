import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';

const env = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

export default defineConfig({
  site: 'https://api.bmcpro.co.mz',
  integrations: [tailwind(), react()],
  output: 'server',
  adapter: vercel({
    functionPerRoute: false
  }),
  vite: {
    define: {
      'process.env.SUPABASE_URL': JSON.stringify(env.SUPABASE_URL),
      'process.env.SUPABASE_ANON_KEY': JSON.stringify(env.SUPABASE_ANON_KEY),
      'process.env.JWT_SECRET': JSON.stringify(env.JWT_SECRET),
      'process.env.JWT_EXPIRES_IN': JSON.stringify(env.JWT_EXPIRES_IN),
    }
  }
});
