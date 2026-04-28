# YouOTT — Landing Page (One-page)

Landing page premium (página única) para vender apps OTT white-label para Smart TVs, mobile e web.

## Rodar local

```bash
npm install
npm run dev
```

Abrir: http://localhost:3000

## Onde editar conteúdo

- Conteúdo/links (WhatsApp, e-mail, link de demo, lista de plataformas, FAQ): `src/content/site.ts`
- Página principal (layout e seções): `src/app/page.tsx`
- SEO/metadata e idioma: `src/app/layout.tsx`

## Configurar WhatsApp e “Agendar demonstração”

Edite em `src/content/site.ts`:

- `site.links.whatsapp.phoneE164`: coloque seu número no formato E.164 (ex.: `+5511999999999`)
- `site.links.whatsapp.message`: mensagem inicial do WhatsApp
- `site.links.demo.url`: link para Calendly/Google Agenda/formulário (por padrão está `#`)

## Inserir seus vídeos e fotos

O site está com blocos de placeholder para não quebrar o build.

Opção mais simples:

1) Coloque suas imagens em `public/` (ex.: `public/portfolio/01.webp`)
2) Substitua os placeholders na seção “Portfólio” em `src/app/page.tsx` por `<img />` ou `next/image`

## Scripts

```bash
npm run lint
npm run build
npm run start
```

## Deploy

Recomendado: Vercel.

Passos (alto nível):

1) Conectar o repositório
2) Fazer deploy
3) Adicionar seu domínio (ex.: `youott.com`) nas configurações do projeto

