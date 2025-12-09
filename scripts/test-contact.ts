/**
 * Script para testar o endpoint de contacto
 * Execute com: npx tsx scripts/test-contact.ts
 */

async function testContact() {
	console.log('🧪 Testando endpoint de contacto...\n');

	const testData = {
		name: 'Teste BMC Pro',
		email: 'teste@bmcpro.co.mz',
		phone: '+258 82 088 3478',
		message: 'Esta é uma mensagem de teste para verificar se o formulário de contacto está a funcionar correctamente com o Supabase e o envio de emails.'
	};

	console.log('📤 Enviando dados:', JSON.stringify(testData, null, 2));
	console.log('');

	try {
		const response = await fetch('http://localhost:4322/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(testData),
		});

		const result = await response.json();

		if (response.ok) {
			console.log('✅ Sucesso!');
			console.log('📥 Resposta:', JSON.stringify(result, null, 2));
		} else {
			console.log('❌ Erro:', response.status);
			console.log('📥 Resposta:', JSON.stringify(result, null, 2));
		}
	} catch (error) {
		console.error('❌ Erro de conexão:', error);
	}
}

testContact();
