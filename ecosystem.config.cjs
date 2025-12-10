/**
 * PM2 Ecosystem Config - Hostinger
 * Configuração para executar o servidor Node.js com PM2
 */

module.exports = {
  apps: [{
    name: 'bmcpro',
    script: './dist/server/entry.mjs',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '500M',
    env: {
      NODE_ENV: 'production',
      PORT: 4321,
      HOST: '0.0.0.0'
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 4321,
      HOST: '0.0.0.0'
    }
  }]
};
