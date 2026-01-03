/**
 * Script para preparar build estático (Hostinger)
 * 
 * Este script copia temporariamente as rotas de servidor (API e admin)
 * para fora do diretório de pages antes do build estático.
 * 
 * Uso: node scripts/prepare-static-build.mjs --move
 *      node scripts/prepare-static-build.mjs --restore
 */

import { cpSync, existsSync, mkdirSync, rmSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rootDir = join(__dirname, '..');
const pagesDir = join(rootDir, 'src', 'pages');
const tempDir = join(rootDir, '.temp-server-routes');

const serverRoutes = ['api', 'admin'];

export function moveServerRoutes() {
  console.log('📦 Preparando build estático...');
  
  // Criar diretório temp
  if (!existsSync(tempDir)) {
    mkdirSync(tempDir, { recursive: true });
  }
  
  for (const route of serverRoutes) {
    const srcPath = join(pagesDir, route);
    const destPath = join(tempDir, route);
    
    if (existsSync(srcPath)) {
      console.log(`  → Copiando /${route} para temp...`);
      
      // Primeiro copiar
      cpSync(srcPath, destPath, { recursive: true });
      
      // Depois remover original
      try {
        rmSync(srcPath, { recursive: true, force: true });
        console.log(`  ✓ /${route} movido com sucesso`);
      } catch (err) {
        console.log(`  ⚠ Não foi possível remover /${route} (${err.code})`);
        console.log(`    Se o servidor dev está a correr, pare-o primeiro.`);
      }
    }
  }
  
  console.log('✅ Preparação completa');
}

export function restoreServerRoutes() {
  console.log('📦 Restaurando rotas de servidor...');
  
  for (const route of serverRoutes) {
    const srcPath = join(tempDir, route);
    const destPath = join(pagesDir, route);
    
    if (existsSync(srcPath)) {
      // Se já existe no destino, remover primeiro
      if (existsSync(destPath)) {
        rmSync(destPath, { recursive: true, force: true });
      }
      
      console.log(`  → Restaurando /${route}...`);
      cpSync(srcPath, destPath, { recursive: true });
      rmSync(srcPath, { recursive: true, force: true });
      console.log(`  ✓ /${route} restaurado`);
    }
  }
  
  // Limpar diretório temp
  if (existsSync(tempDir)) {
    rmSync(tempDir, { recursive: true, force: true });
  }
  
  console.log('✅ Restauração completa');
}

// Executar se chamado diretamente
const args = process.argv.slice(2);
if (args.includes('--move')) {
  moveServerRoutes();
} else if (args.includes('--restore')) {
  restoreServerRoutes();
} else {
  console.log('Uso: node prepare-static-build.mjs --move | --restore');
}
