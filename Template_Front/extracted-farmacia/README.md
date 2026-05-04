# FarmaSaúde — site institucional (SPA)

Implementação em React + Vite + Tailwind com dados **mock** em `src/data` e camada `src/services` preparada para `VITE_API_URL` quando existir API.

Design base: [Template Figma](https://www.figma.com/design/TE3BOkwLoTtmwO9dLmr4R1/Template-de-site-para-farm%C3%A1cias).

## Como rodar

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
npm run preview   # opcional: servir pasta dist
```

## Estrutura principal

| Pasta | Conteúdo |
|-------|-----------|
| `src/app/pages` | Rotas: home, sobre, produtos, promoções, contato, FAQ |
| `src/app/components` | Header, Footer, blocos da home, chatbot |
| `src/data` | Produtos, categorias, promoções, FAQ, site, chatbot (fictício) |
| `src/services` | Funções async; sem `VITE_API_URL` usam os mocks |
| `src/types` | Tipos compartilhados |

Copie `.env.example` para `.env` e defina `VITE_API_URL` quando o backend existir.
