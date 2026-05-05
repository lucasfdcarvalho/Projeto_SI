# Registo de desenvolvimento — Site institucional farmácia

**Data do arquivo OpenSpec:** 2026-05-04  
**Change arquivada:** `farmacia-institutional-site`  
**Schema:** spec-driven

Este documento regista o trabalho realizado no projeto, com vista a orientar evolução futura e leitores do repositório. O projecto é uma **aplicação web para farmácia** (marca de demonstração **FarmaSaúde**), construída a partir de um **template front-end** exportado do ecossistema Figma (bundle React/Vite), com **dados simulados** em módulos dedicados e uma camada de **serviços assíncronos** preparada para integração com API (`VITE_API_URL`) quando existir backend.

---

## 1. Specs criadas para o projeto

Foram definidas quatro capacidades em formato OpenSpec (requisitos normativos + cenários). Os ficheiros canónicos vivem em `openspec/specs/` após arquivo:

| Capacidade | Ficheiro | Âmbito |
|------------|----------|--------|
| `farmacia-site-shell` | `openspec/specs/farmacia-site-shell/spec.md` | Rotas SPA, layout partilhado, meta `pt-BR` |
| `farmacia-catalog-mocks` | `openspec/specs/farmacia-catalog-mocks/spec.md` | Tipos, mocks, serviços, listagem/detalhe produto |
| `farmacia-chatbot-widget` | `openspec/specs/farmacia-chatbot-widget/spec.md` | FAB, painel, respostas simuladas, WhatsApp |
| `farmacia-contact-leads` | `openspec/specs/farmacia-contact-leads/spec.md` | Página contacto, mapa, formulário mock |

A pasta da change arquivada mantém cópias históricas em `specs/` dentro do arquivo, incluindo deltas **ADDED** originais.

---

## 2. Tasks executadas

Referência: `tasks.md` na change arquivada (todas concluídas — 11/11):

1. Router (`createBrowserRouter`), layout com `Header`, `Outlet`, `Footer`, `ChatbotButton`, Toaster; rotas principais + 404.
2. `index.html` em português (`pt-BR`), título e meta description.
3. Tipos `src/types`, mocks `src/data` (site, categorias, produtos, promoções, FAQ, chatbot).
4. `src/services` com atraso simulado e uso condicional de `VITE_API_URL`.
5. Páginas de produtos (filtros/query), detalhe com não encontrado, ações simuladas (detalhes/disponibilidade).
6. Chatbot com boas-vindas, quick replies, texto + respostas canned, WhatsApp, Escape para fechar.
7. Contacto: dados mock, iframe de mapa quando configurado, `react-hook-form`, toast em envio simulado.
8. Home com todas as secções pedidas (hero, intro, categorias, destaques, promoções, benefícios, serviços, CTA).
9. `Header`/`Footer` com `Link`/`NavLink`, pesquisa para `/produtos?q=`.
10. `npm run build` sem erros.
11. README do front, `.env.example`, referência no `Readme.md` raiz.

---

## 3. Decisões técnicas tomadas

- **Stack:** React 18 + Vite 6 + Tailwind CSS 4 + componentes estilo shadcn/Radix já presentes no template.
- **Roteamento:** React Router 7 com `createBrowserRouter` e `RouterProvider`.
- **Dados:** mocks em TypeScript sob `src/data`; sem backend na primeira entrega.
- **Contrato futuro:** variável `VITE_API_URL`; serviços em `src/services` fazem `fetch` quando a URL existe.
- **UX auxiliar:** Sonner para feedback (contacto, disponibilidade).
- **Imagens de produto:** URLs públicas de placeholder (ex.: picsum) para MVP rápido.

---

## 4. Estrutura final do projeto (relevante)

```
Projeto_SI_/
├── Readme.md                 # Requisitos e contexto do produto
├── GUIA_INSTALACAO.md        # Passo a passo clone/install/run
├── DOCUMENTACAO_SPECS.md     # Uso dos comandos OpenSpec no Cursor
├── README_SPECS.md           # Índice rápido para specs (ver ficheiro)
├── .gitignore
├── .env.example              # Raiz — indica onde colocar .env do Vite
├── openspec/
│   ├── specs/                # Specs canónicas (pós-arquivo)
│   │   ├── farmacia-site-shell/
│   │   ├── farmacia-catalog-mocks/
│   │   ├── farmacia-chatbot-widget/
│   │   └── farmacia-contact-leads/
│   └── changes/archive/
│       └── 2026-05-04-farmacia-institutional-site/  # Change arquivada + este registo
└── Template_Front/
    ├── Template de site para farmácias.zip   # Pacote original Figma Make
    └── extracted-farmacia/                    # SPA implementada
        ├── package.json
        ├── src/
        │   ├── app/          # páginas, router, layout, componentes
        │   ├── data/         # mocks
        │   ├── services/
        │   ├── types/
        │   └── styles/
        └── .env.example
```

---

## 5. Funcionalidades implementadas

- Navegação completa entre páginas institucionais (início, sobre, produtos, detalhe, promoções, contacto, FAQ, 404).
- Home com banner, introdução, categorias com links, produtos em destaque, promoções, benefícios, serviços, CTA contacto/WhatsApp.
- Listagem de produtos com filtro por categoria e parâmetro `q`; detalhe por id.
- Promoções em cartões com preço anterior/atual e CTAs simulados.
- FAQ com acordeão.
- Contacto com formulário validado e envio apenas simulado; mapa embed configurável em dados do site.
- Chatbot flutuante com fluxo simulado e handoff WhatsApp.

---

## 6. Uso do template vindo do Figma

- Origem: bundle **“Template de site para farmácias”** (export tipo Figma Make), compactado em ZIP sob `Template_Front/`.
- Conteúdo extraído para `Template_Front/extracted-farmacia/`: já incluía `vite.config.ts`, Tailwind, biblioteca UI extensa, componentes `Hero`, `Categories`, `Services`, etc.
- O trabalho acrescentou **roteamento**, **novas páginas**, **camada de dados/serviços**, **evolução do chatbot** e **navegação global**, mantendo a linguagem visual esmeralda/teal do template.

---

## 7. Definição de uso de dados mockados

- Conforme `Readme.md` do projeto: produtos, preços, promoções, FAQ e mensagens de chat são **fictícios**.
- Agregados em `src/data/*.ts` e consumidos apenas via `src/services/` para permitir troca futura por HTTP.
- `src/data/site.ts` contém contactos de demonstração (telefone, WhatsApp, morada genérica/São Paulo); devem ser substituídos por dados reais antes de produção ou claramente rotulados como demo.

---

## 8. Chatbot inicial

- Componente `ChatbotButton`: FAB fixo, painel com mensagem de boas-vindas vinda de `src/data/chatbot.ts`, quick replies, entrada de texto com heurística simples (palavras-chave), botão **Abrir WhatsApp** (`wa.me`), fecho com **Escape**.
- Sem IA remota e sem persistência de conversas — cumprimento explícito do âmbito “simulação”.

---

## 9. Criação do `GUIA_INSTALACAO.md`

- Ficheiro na **raiz** do repositório com pré-requisitos (Node, npm, Git), clone, `cd` até `Template_Front/extracted-farmacia`, `npm install`, variáveis opcionais (`VITE_API_URL`), `npm run dev`, `npm run build`, `npx vite preview`, troubleshooting e remissão ao `Readme.md` principal.

---

## 10. `README_SPECS.md` e `DOCUMENTACAO_SPECS.md`

- **`DOCUMENTACAO_SPECS.md`:** documentação extensa sobre comandos OpenSpec usados no projeto (`/opsx-explore`, proposta, etc.).
- **`README_SPECS.md`:** criado/atualizado na raiz como entrada rápida que aponta para `DOCUMENTACAO_SPECS.md` e para `openspec/specs/` (ver conteúdo actual do ficheiro).

---

## 11. Alterações importantes em ficheiros e pastas

| Área | Alteração |
|------|-----------|
| Front SPA | Nova árvore `src/app/pages`, `router.tsx`, `MainLayout`, componentes home, refatoração `Header`/`Footer`/`Hero`/`Categories` |
| Dados/serviços | Novos `src/data`, `src/services`, `src/types` |
| Config | `tsconfig.json`, alias `@`, `vite-env.d.ts` |
| Raiz repo | `Readme.md` (link para front), `GUIA_INSTALACAO.md`, `.gitignore`, `.env.example` |
| OpenSpec | Change `farmacia-institutional-site` arquivada; specs promovidas a `openspec/specs/` |
| Segurança (revisão) | `.gitignore` para `.env`, `node_modules`, `dist`, logs, IDE |

---

## 12. Limitações do projeto

- **Sem backend:** formulários e “disponibilidade” não persistem dados.
- **API:** ramo HTTP nos serviços assume endpoints futuros alinhados manualmente.
- **Imagens:** dependência de serviços externos para placeholders; offline/limites de rede podem afectar thumbnails.
- **Bundle:** muitas dependências herdadas do export Figma (ex.: MUI + Radix); peso de JS maior que um greenfield minimalista.
- **Chatbot:** respostas fixas; não há fila para humano nem integração com CRM.
- **SEO:** SPA cliente; sem SSR/SSG nesta versão.

---

## 13. Sugestões de melhorias futuras

1. Backend REST ou BaaS para catálogo, leads e horários reais.
2. Variáveis de ambiente para número WhatsApp e dados do site sem rebuild (ou CMS).
3. Testes e2e (Playwright) sobre fluxos críticos (contacto, produto, chat).
4. Redução de dependências não usadas e auditoria de bundle.
5. Internacionalização se necessário além de `pt-BR`.
6. Integração de chat com IA ou WhatsApp Business API, com opt-in e RGPD.
7. Pipeline CI (lint, build) no GitHub Actions.

---

## Coerência specs ↔ implementação (revisão pré-arquivo)

| Requisito | Estado |
|-----------|--------|
| Rotas e layout com header/footer | **OK** — `router.tsx`, `MainLayout`; inclui também chat e toast (extensão aceitável). |
| `lang="pt-BR"` e meta | **OK** — `index.html`. |
| Mocks + serviços + `VITE_API_URL` | **OK** — `config.ts`, `catalog.ts`, `contact.ts`, etc. |
| Detalhe produto + não encontrado | **OK** — `ProductDetailPage`. |
| Chat FAB, painel, Escape | **OK** — `ChatbotButton`. |
| Quick replies + texto simulado | **OK** — `chatbot.ts` + estado local. |
| WhatsApp | **OK** — link `wa.me` com `siteInfo.whatsappE164`. |
| Contacto + mapa + form mock | **OK** — `ContactPage`, `submitContact`, toast. |

**Nota:** A spec do *shell* menciona explicitamente header e footer; a implementação acrescenta componentes globais extra (chat, notificações), sem violar os requisitos.

---

*Gerado no contexto do arquivo OpenSpec `2026-05-04-farmacia-institutional-site`.*
