## Context

O projeto usa um bundle React/Vite (+ Tailwind 4 e componentes estilo shadcn) já exportado do fluxo Figma Make. O site precisa comportar-se como SPA com URLs distintas, sem servidor de aplicação próprio na v1; todos os dados de negócio são fictícios mas estruturados como se viéssem de API.

## Goals / Non-Goals

**Goals:**

- Rotas cliente (`react-router`) com um layout persistente e páginas alinhadas ao escopo institucional da farmácia.
- Contratos tipados TypeScript para entidades de catálogo e dados do site.
- Serviços assíncronos únicos como ponto de troca entre mocks locais e `fetch` condicionado por `VITE_API_URL`.
- UX de chat e contato utilizável para demonstração (toasts e links externos).

**Non-Goals:**

- Backend, persistência real, auth, ERP ou painel administrativo nesta versão.

## Decisions

| Decisão | Escolha | Alternativas | Motivo |
|--------|---------|--------------|--------|
| Bundler/runtime | Manter Vite no template existente | Next.js | Menor migração; SPA institucional sem SSR é suficiente |
| Estado da árvore de rotas | `createBrowserRouter` | `BrowserRouter` declarativo | Router data API já no ecossistema RR v7 |
| Fonte dos mocks | TS modules em `src/data` | JSON Server / MSW apenas | Escopo pede arquivos dedicados sem processo separado na v1 |
| WhatsApp | Link `wa.me` com número fictício em `site` mock | Plugin terceiros | Mantém zero backend |
| Imagens produto | URLs placeholder públicas | Assets locais | Rapidez de MVP; pode trocar por `/public` depois |

## Risks / Trade-offs

| Risco | Mitigação |
|-------|-----------|
| Divergência entre mock e futura API | Tipos centralizados e mesmos métodos em `services/` |
| Dependências pesadas herdadas do export Figma | Aceito no MVP; poda futura pode ser change separado |
| Map embed / políticas de iframe Google | URL configurável em `site`; fallback de placeholder se vazio |

## Migration Plan

- Deploy estático (`dist/` em qualquer hospedagem de arquivos ou CDN).
- Para API futura: definir `VITE_API_URL`, alinhar contratos REST com métodos já existentes ou ajustar serviços pontualmente.

## Open Questions

- Domínio e número WhatsApp reais para produção (substituir em `src/data/site.ts` ou via env futura).
