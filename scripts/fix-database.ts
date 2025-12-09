/**
 * Script para corrigir a estrutura das tabelas no Supabase
 * Execute com: npx tsx scripts/fix-database.ts
 */

import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseKey);

async function checkColumns() {
	console.log('🔍 Verificando estrutura das tabelas...\n');

	// Testar inserção com todos os campos
	const testData = {
		name: 'Teste Estrutura',
		email: 'teste@teste.com',
		phone: '+258 82 000 0000',
		message: 'Teste de estrutura da tabela',
		ip: '127.0.0.1',
		status: 'NEW'
	};

	console.log('📋 Testando inserção na tabela contacts...');
	const { data, error } = await supabase
		.from('contacts')
		.insert(testData)
		.select()
		.single();

	if (error) {
		console.log(`❌ Erro: ${error.message}`);
		console.log(`   Código: ${error.code}`);
		console.log(`   Detalhes: ${error.details}`);
		
		if (error.message.includes("column") && error.message.includes("does not exist")) {
			console.log('\n⚠️ Faltam colunas na tabela. Execute o seguinte SQL no Supabase:\n');
			console.log('=' .repeat(60));
			console.log(`
-- Adicionar colunas em falta
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS ip TEXT;
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS status TEXT DEFAULT 'NEW';
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS phone TEXT;
ALTER TABLE contacts ADD COLUMN IF NOT EXISTS updated_at TIMESTAMPTZ DEFAULT NOW();

-- Verificar estrutura
SELECT column_name, data_type, is_nullable 
FROM information_schema.columns 
WHERE table_name = 'contacts';
			`);
			console.log('=' .repeat(60));
		}
	} else {
		console.log('✅ Inserção bem sucedida!');
		console.log('📥 Dados inseridos:', JSON.stringify(data, null, 2));
		
		// Limpar o registo de teste
		if (data?.id) {
			await supabase.from('contacts').delete().eq('id', data.id);
			console.log('🗑️ Registo de teste removido.');
		}
	}
}

checkColumns().catch(console.error);
