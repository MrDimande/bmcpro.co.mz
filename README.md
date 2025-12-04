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

## 📝 Dados

Os contactos são salvos em `data/contacts.json` (desenvolvimento).
Em produção, recomenda-se usar uma base de dados (PostgreSQL, MongoDB, etc.).

## 🌐 Deploy

O projeto pode ser deployado em:
- Vercel
- Netlify
- Cloudflare Pages
- Astro Hosting

## 📄 Licença

© 2024 BMC Pro Services. Todos os direitos reservados.
