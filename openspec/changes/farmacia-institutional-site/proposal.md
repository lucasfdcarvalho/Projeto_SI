## Why

A farmácia precisa de um site institucional profissional para divulgar serviços, produtos e canais de atendimento sem depender de backend na primeira versão. O problema é transformar um layout exportado do Figma em uma SPA navegável, com dados fictícios centralizados e pontos de integração claros para futuras APIs.

## What Changes

- SPA React (Vite) com rotas para todas as páginas institucionais exigidas (início, sobre, produtos, promoções, contato, FAQ).
- Camada `data/` com mocks e `services/` que simulam latência e podem usar `VITE_API_URL` quando existir API.
- Layout global com cabeçalho e rodapé navegáveis e botão flutuante de chat com fluxo simulado e link para WhatsApp.
- Formulário de contato com envio apenas simulado no cliente; mapa incorporado onde configurado em dados do site.

## Capabilities

### New Capabilities

- `farmacia-site-shell`: rotas da aplicação, layout com header/footer/outlet e meta básicas da página inicial.
- `farmacia-catalog-mocks`: categorias, produtos, promoções, tipos TypeScript e serviços async sobre mocks ou HTTP futuro.
- `farmacia-chatbot-widget`: FAB, painel de mensagens simuladas, quick replies configuráveis e WhatsApp.
- `farmacia-contact-leads`: página de contato com dados institucionais, mapa embed e formulário com feedback mockado.

### Modified Capabilities

- (vazio — não há specs existentes em `openspec/specs/`)

## Impact

- **Código:** pasta `Template_Front/extracted-farmacia/` (React, Tailwind, componentes UI existentes).
- **APIs:** nenhuma na v1; variável opcional `VITE_API_URL` nos serviços de catálogo/contato quando houver backend.
- **Dependências:** `react-router`, `react-hook-form`, `sonner`, dados mock locais.
