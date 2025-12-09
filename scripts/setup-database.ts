/**
 * Script para criar as tabelas no Supabase
 * Execute com: npx tsx scripts/setup-database.ts
 */

import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_ANON_KEY!;

if (!supabaseUrl || !supabaseKey) {
	console.error('❌ SUPABASE_URL e SUPABASE_ANON_KEY são obrigatórios no .env');
	process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function setupDatabase() {
	console.log('🚀 Iniciando configuração da base de dados...\n');
	console.log(`📍 Supabase URL: ${supabaseUrl}\n`);

	// Testar conexão
	console.log('1️⃣ Testando conexão com Supabase...');
	const { data: testData, error: testError } = await supabase.from('contacts').select('count').limit(1);
	
	if (testError && testError.code === '42P01') {
		console.log('   ⚠️ Tabela "contacts" não existe. Precisas criar as tabelas manualmente.\n');
		console.log('=' .repeat(60));
		console.log('📋 INSTRUÇÕES PARA CRIAR AS TABELAS:');
		console.log('=' .repeat(60));
		console.log('\n1. Vai a: https://supabase.com/dashboard/project/jvjexxlnztfaurzsixvn/sql/new');
		console.log('2. Cola o SQL abaixo e clica em "Run":\n');
		console.log('-'.repeat(60));
		console.log(SQL_SCRIPT);
		console.log('-'.repeat(60));
		console.log('\n3. Depois de executar, corre este script novamente para verificar.\n');
	} else if (testError) {
		console.log(`   ❌ Erro: ${testError.message}`);
	} else {
		console.log('   ✅ Conexão OK! Tabela "contacts" existe.\n');
		
		// Verificar outras tabelas
		console.log('2️⃣ Verificando tabela "users"...');
		const { error: usersError } = await supabase.from('users').select('count').limit(1);
		if (usersError && usersError.code === '42P01') {
			console.log('   ⚠️ Tabela "users" não existe.');
		} else if (usersError) {
			console.log(`   ❌ Erro: ${usersError.message}`);
		} else {
			console.log('   ✅ Tabela "users" existe.');
		}

		console.log('3️⃣ Verificando tabela "analytics"...');
		const { error: analyticsError } = await supabase.from('analytics').select('count').limit(1);
		if (analyticsError && analyticsError.code === '42P01') {
			console.log('   ⚠️ Tabela "analytics" não existe.');
		} else if (analyticsError) {
			console.log(`   ❌ Erro: ${analyticsError.message}`);
		} else {
			console.log('   ✅ Tabela "analytics" existe.');
		}

		console.log('\n✅ Base de dados configurada correctamente!');
	}
}

const SQL_SCRIPT = `
-- ==========================================
-- BMC Pro Services - Database Setup
-- ==========================================

-- Tabela de contactos
CREATE TABLE IF NOT EXISTS contacts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  message TEXT NOT NULL,
  ip TEXT,
  status TEXT DEFAULT 'NEW',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela de utilizadores (admin)
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  name TEXT NOT NULL,
  role TEXT DEFAULT 'ADMIN',
  is_active BOOLEAN DEFAULT TRUE,
  last_login TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Tabela de analytics
CREATE TABLE IF NOT EXISTS analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event TEXT NOT NULL,
  page TEXT,
  user_agent TEXT,
  ip TEXT,
  referrer TEXT,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Habilitar RLS (Row Level Security)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE analytics ENABLE ROW LEVEL SECURITY;

-- Políticas para permitir inserção anónima
DROP POLICY IF EXISTS "Allow anonymous insert contacts" ON contacts;
CREATE POLICY "Allow anonymous insert contacts" ON contacts FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Allow anonymous insert analytics" ON analytics;
CREATE POLICY "Allow anonymous insert analytics" ON analytics FOR INSERT WITH CHECK (true);

-- Políticas para leitura
DROP POLICY IF EXISTS "Allow read contacts" ON contacts;
CREATE POLICY "Allow read contacts" ON contacts FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow read analytics" ON analytics;
CREATE POLICY "Allow read analytics" ON analytics FOR SELECT USING (true);

DROP POLICY IF EXISTS "Allow read users" ON users;
CREATE POLICY "Allow read users" ON users FOR SELECT USING (true);

-- Política para update de contactos
DROP POLICY IF EXISTS "Allow update contacts" ON contacts;
CREATE POLICY "Allow update contacts" ON contacts FOR UPDATE USING (true);

-- Índices para performance
CREATE INDEX IF NOT EXISTS idx_contacts_email ON contacts(email);
CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_analytics_event ON analytics(event);
CREATE INDEX IF NOT EXISTS idx_analytics_created_at ON analytics(created_at DESC);
`;

setupDatabase().catch(console.error);
