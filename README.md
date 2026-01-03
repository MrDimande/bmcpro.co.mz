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

```text
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

## 🔧 Requisitos para Deploy

### Hostinger VPS/Cloud

- **Node.js 18+** instalado
- **PM2** para gestão de processos
- **Nginx** como reverse proxy (recomendado)
- **SSL/HTTPS** via Let's Encrypt

### Variáveis de Ambiente Obrigatórias

| Variável | Descrição | Obrigatório |
| -------- | --------- | ----------- |
| `SUPABASE_URL` | URL do projecto Supabase | ✅ Sim |
| `SUPABASE_ANON_KEY` | Chave pública Supabase | ✅ Sim |
| `JWT_SECRET` | Chave secreta para tokens | ✅ Sim |
| `JWT_EXPIRES_IN` | Expiração do token (ex: 7d) | ✅ Sim |
| `SMTP_HOST` | Servidor SMTP | ⚠️ Para emails |
| `SMTP_PORT` | Porta SMTP (587/465) | ⚠️ Para emails |
| `SMTP_USER` | Utilizador SMTP | ⚠️ Para emails |
| `SMTP_PASS` | Password SMTP | ⚠️ Para emails |
| `SMTP_FROM` | Email remetente | ⚠️ Para emails |
| `SMTP_TO` | Email destino | ⚠️ Para emails |

### Comandos de Deploy

```bash
# 1. Clonar repositório
git clone <repo-url>
cd bmcpro.co.mz

# 2. Instalar dependências
npm install

# 3. Criar ficheiro .env
cp .env.example .env
nano .env  # Editar com valores reais

# 4. Build
npm run build

# 5. Iniciar com PM2
pm2 start dist/server/entry.mjs --name bmcpro

# 6. Configurar para iniciar no boot
pm2 save
pm2 startup
```

### Configuração Nginx (Exemplo)

```nginx
server {
    listen 80;
    server_name bmcpro.co.mz www.bmcpro.co.mz;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name bmcpro.co.mz www.bmcpro.co.mz;

    ssl_certificate /etc/letsencrypt/live/bmcpro.co.mz/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/bmcpro.co.mz/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:4321;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Licença

© 2025 BMC Pro Services. Todos os direitos reservados.
