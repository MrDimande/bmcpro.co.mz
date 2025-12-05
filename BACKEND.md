# Backend - BMC Pro Services

Documentação do backend do website BMC Pro Services.

## 📋 Estrutura

```
src/
├── pages/
│   ├── api/
│   │   ├── auth/
│   │   │   ├── login.ts    # Login de admin
│   │   │   └── me.ts       # Verificar sessão
│   │   ├── admin/
│   │   │   ├── contacts.ts # CRUD de contactos
│   │   │   └── dashboard.ts # Estatísticas
│   │   ├── contact.ts      # Endpoint de contacto
│   │   └── health.ts       # Health check
│   └── admin/
│       └── index.astro     # Dashboard admin
└── lib/
    ├── utils.ts       # Funções utilitárias
    ├── supabase.ts    # Cliente Supabase
    ├── email.ts       # Serviço de email (Nodemailer)
    ├── auth.ts        # Autenticação JWT
    └── analytics.ts   # Rastreamento de eventos
```

## 🔌 API Endpoints

### POST `/api/contact`

Envia uma mensagem de contacto.

**Request Body:**
```json
{
  "name": "Nome Completo",
  "email": "email@exemplo.com",
  "phone": "+258 82 088 3478",
  "message": "Sua mensagem aqui..."
}
```

**Response Success (200):**
```json
{
  "success": true,
  "message": "Mensagem enviada com sucesso! Entraremos em contacto em breve."
}
```

**Response Error (400/429/500):**
```json
{
  "success": false,
  "error": "Mensagem de erro descritiva"
}
```

**Validações:**
- Nome: obrigatório, 2-100 caracteres
- Email: obrigatório, formato válido
- Telefone: opcional
- Mensagem: obrigatório, 10-2000 caracteres
- Rate limiting: 5 requisições por minuto por IP

### GET `/api/health`

Verifica o status da API.

**Response (200):**
```json
{
  "status": "ok",
  "timestamp": "2024-01-15T10:30:00.000Z",
  "service": "BMC Pro Services API"
}
```

## 💾 Armazenamento de Dados

### Desenvolvimento
Os contactos são salvos em `data/contacts.json` (formato JSON).

**Estrutura do arquivo:**
```json
[
  {
    "name": "Nome Completo",
    "email": "email@exemplo.com",
    "phone": "+258 82 088 3478",
    "message": "Mensagem...",
    "timestamp": "2024-01-15T10:30:00.000Z",
    "ip": "192.168.1.1"
  }
]
```

### Produção
Recomenda-se usar uma base de dados:
- **PostgreSQL** - Para dados relacionais
- **MongoDB** - Para dados NoSQL
- **SQLite** - Para projetos menores

## 🔒 Segurança

### Rate Limiting
- Limite: 5 requisições por minuto por IP
- Implementação: In-memory (desenvolvimento)
- Produção: Usar Redis ou similar

### Validação
- Sanitização de inputs
- Validação de formato (email, telefone)
- Validação de tamanho

### CORS
Configurar CORS adequadamente em produção.

## 📧 Envio de Emails (Futuro)

Para implementar envio de emails:

1. Instalar biblioteca de email (ex: `nodemailer`)
2. Configurar variáveis de ambiente (`.env`)
3. Descomentar código em `src/pages/api/contact.ts`

**Exemplo com Nodemailer:**
```typescript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

await transporter.sendMail({
  from: process.env.SMTP_FROM,
  to: process.env.SMTP_TO,
  subject: 'Nova Mensagem de Contacto - BMC Pro',
  html: `...`
});
```

## 🗄️ Base de Dados (Supabase)

### Configuração do Supabase

1. Criar projeto em [supabase.com](https://supabase.com)

2. Criar as tabelas no Supabase SQL Editor:
```sql
-- Tabela de contactos
CREATE TABLE contacts (
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

-- Tabela de utilizadores
CREATE TABLE users (
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
CREATE TABLE analytics (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  event TEXT NOT NULL,
  page TEXT,
  user_agent TEXT,
  ip TEXT,
  referrer TEXT,
  metadata JSONB DEFAULT '{}',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

3. Usar no código:
```typescript
import supabase from './lib/supabase';

const { data, error } = await supabase
  .from('contacts')
  .insert({ name, email, message });
```

## 🚀 Deploy

### Vercel / Netlify
- Suporta API routes do Astro automaticamente
- Configurar variáveis de ambiente no painel

### Servidor Próprio
- Usar Node.js ou servidor compatível
- Configurar reverse proxy (Nginx)
- Usar PM2 para gerenciamento de processos

## 📝 Funcionalidades Implementadas

- [x] ✅ Envio de emails (Nodemailer)
- [x] ✅ Base de dados Supabase (PostgreSQL)
- [x] ✅ Autenticação JWT para área admin
- [x] ✅ Dashboard para visualizar contactos
- [x] ✅ Analytics de submissões
- [x] ✅ Compatível com Hostinger
- [ ] Exportação de dados (CSV, Excel)
- [ ] Webhooks para integrações

## 🚀 Como Configurar

### 1. Configurar Supabase

1. Criar projeto em [supabase.com](https://supabase.com)
2. Executar o SQL das tabelas (ver secção "Base de Dados")
3. Copiar as credenciais para o `.env`:

```bash
SUPABASE_URL="https://SEU-PROJECT-ID.supabase.co"
SUPABASE_ANON_KEY="SUA_CHAVE_ANON_PUBLICA"
```

### 2. Configurar Email (SMTP)

Editar `.env` com credenciais SMTP:

```env
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="seu-email@gmail.com"
SMTP_PASS="sua-senha-de-app"
```

### 3. Aceder ao Dashboard Admin

- URL: `http://localhost:4321/admin`
- Email: `admin@bmcpro.co.mz` (ou conforme `.env`)
- Password: `admin123` (ou conforme `.env`)

## 🔐 Endpoints Protegidos

Todos os endpoints em `/api/admin/*` requerem autenticação via Bearer token:

```bash
curl -H "Authorization: Bearer <token>" http://localhost:4321/api/admin/contacts
```
