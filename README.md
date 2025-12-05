# BMC Pro Services - Website

Website institucional da BMC Pro Services - Business Management Consultant Pro Services.

## 🚀 Tecnologias

- **Astro** - Framework web moderno e ultra-rápido
- **TailwindCSS** - Framework CSS utilitário
- **React Three Fiber** - Renderização 3D
- **Motion One** - Animações suaves
- **Lucide Icons** - Ícones modernos

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

```bash
npm run dev
```

O site estará disponível em `http://localhost:4321`

## 🏗️ Build

```bash
npm run build
```

## 📁 Estrutura do Projeto

```
src/
├── components/     # Componentes reutilizáveis
├── layouts/        # Layouts de página
├── pages/          # Páginas e rotas
│   ├── api/        # API endpoints
│   └── blog/       # Artigos do blog
└── styles/         # Estilos globais
```

## 🔌 API Endpoints

### POST `/api/contact`
Envia mensagem de contacto.

**Body:**
```json
{
  "name": "Nome Completo",
  "email": "email@exemplo.com",
  "phone": "+258 XX XXX XXXX",
  "message": "Mensagem..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Mensagem enviada com sucesso!"
}
```

### GET `/api/health`
Verifica o status da API.

## ⚙️ Operação

### Variáveis de ambiente (.env)

Crie um ficheiro `.env` na raiz do projeto com (exemplo):

```env
# Supabase
SUPABASE_URL="https://SEU-PROJECT-ID.supabase.co"
SUPABASE_ANON_KEY="SUA_CHAVE_ANON_PUBLICA"

# Autenticação (JWT) para área de admin
JWT_SECRET="uma-string-secreta-muito-forte"
JWT_EXPIRES_IN="7d"

# Utilizador administrador inicial
ADMIN_EMAIL="admin@bmcpro.co.mz"
ADMIN_PASSWORD="mude-esta-password"
ADMIN_NAME="Administrador"

# SMTP (envio de emails)
SMTP_HOST="smtp.seuprovedor.com"
SMTP_PORT="587"
SMTP_SECURE="false" # true se usar SSL (porta 465)
SMTP_USER="utilizador@smtp"
SMTP_PASS="password-smtp"
SMTP_FROM="BMC Pro Services <noreply@bmcpro.co.mz>"
SMTP_TO="contacto@bmcpro.co.mz"
```

### Configurar Supabase

1. Criar projeto em [supabase.com](https://supabase.com)
2. No SQL Editor, executar o script de criação das tabelas (ver `BACKEND.md`)
3. Copiar `SUPABASE_URL` e `SUPABASE_ANON_KEY` para o `.env`

## Deploy na Hostinger

Este projeto está preparado para deploy na Hostinger usando Supabase como base de dados externa.

### Passos para Deploy

1. **Configurar Supabase**
   - Criar projeto em [supabase.com](https://supabase.com)
   - Executar o SQL de criação das tabelas (ver `BACKEND.md`)
   - Guardar `SUPABASE_URL` e `SUPABASE_ANON_KEY`

2. **Preparar ambiente na Hostinger**
   - Apontar o domínio `bmcpro.co.mz` para o servidor
   - Garantir que Node.js está disponível

3. **Configurar variáveis de ambiente**
   - Criar `.env` com `SUPABASE_URL`, `SUPABASE_ANON_KEY`, `JWT_SECRET`, `SMTP_*`

4. **Instalar e build**

   ```bash
   npm install
   npm run build
   ```

5. **Iniciar a aplicação**

   ```bash
   npm run start
   # Ou com PM2:
   pm2 start "npm run start" --name bmcpro
   ```

6. **Configurar HTTPS**
   - Activar SSL/HTTPS via painel Hostinger ou Let's Encrypt 

## Licença

 2024 BMC Pro Services. Todos os direitos reservados.
