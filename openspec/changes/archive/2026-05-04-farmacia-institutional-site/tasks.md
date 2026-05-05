## 1. Shell e rotas

- [x] 1.1 Configurar `createBrowserRouter` com layout (`Header`, `Outlet`, `Footer`, `ChatbotButton`, Toaster) e rotas `/`, `/sobre`, `/produtos`, `/produtos/:productId`, `/promocoes`, `/contato`, `/faq`, catch-all 404
- [x] 1.2 Garantir `index.html` em `pt-BR` com meta description e título da marca

## 2. Catálogo e dados mock

- [x] 2.1 Criar tipos em `src/types` e mocks em `src/data` (site, categorias, produtos, promoções, FAQ, chatbot)
- [x] 2.2 Implementar `src/services` com latência simulada e ramo condicional por `VITE_API_URL`
- [x] 2.3 Implementar páginas de produtos (lista com filtro/busca), detalhe com estado não encontrado e ações simuladas (detalhes / disponibilidade)

## 3. Chatbot e contato

- [x] 3.1 Implementar widget de chat com boas-vindas, quick replies, texto com respostas canned, WhatsApp e fechar com Escape
- [x] 3.2 Implementar página de contato com dados mock, mapa embed configurável, formulário com `react-hook-form` e feedback mock (toast)

## 4. Home e navegação

- [x] 4.1 Montar home com seções (hero, intro, categorias com links, destaques, promoções, benefícios, serviços, CTA)
- [x] 4.2 Atualizar `Header`/`Footer` com `Link`/`NavLink` e busca para `/produtos?q=`

## 5. Verificação e documentação

- [x] 5.1 Executar `npm run build` em `Template_Front/extracted-farmacia` sem erros
- [x] 5.2 Manter README do front e `.env.example`; referência no `Readme.md` raiz do repositório
