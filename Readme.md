# Projeto: Site Completo para Farmácia com Chatbot

## Objetivo

Desenvolver um site completo para farmácia a partir do layout já criado no Figma.

O front-end visual já foi criado no Figma e deve ser usado como base principal para a implementação. O objetivo não é apenas criar um template visual, mas construir o projeto completo, funcional, organizado e preparado para futuras integrações.

---

## Contexto

Este projeto é voltado para uma farmácia e deve funcionar como um site profissional para apresentação da empresa, divulgação de produtos, promoções, canais de atendimento e integração com chatbot.

O Cursor deve analisar o projeto existente, entender a estrutura atual, reaproveitar o que já foi criado pelo Figma e desenvolver todas as partes necessárias para transformar o layout em um site funcional.

**Aplicação front-end (implementação atual):** pasta [`Template_Front/extracted-farmacia`](Template_Front/extracted-farmacia) — React, Vite, rotas e dados simulados. Para executar: `cd Template_Front/extracted-farmacia`, `npm install`, `npm run dev`.

---

## O que deve ser feito

O Cursor deve criar:

- Estrutura completa do projeto
- Componentes reutilizáveis
- Páginas principais do site
- Responsividade para desktop, tablet e celular
- Organização de arquivos e pastas
- Integração de botão flutuante de chatbot
- Estrutura inicial do chatbot
- Código limpo, organizado e fácil de manter
- Ajustes visuais com base no layout do Figma
- Dados simulados para produtos, categorias e promoções
- Preparação para futuras integrações com backend, WhatsApp e sistema da farmácia

---

## Páginas necessárias

Criar, no mínimo:

- Página inicial
- Página sobre a farmácia
- Página de produtos
- Página de promoções
- Página de contato
- Página de dúvidas frequentes
- Página ou modal de atendimento via chatbot

---

## Funcionalidades principais

### Página inicial

Deve conter:

- Banner principal
- Apresentação da farmácia
- Categorias de produtos
- Produtos em destaque
- Promoções
- Benefícios da farmácia
- Chamada para atendimento
- Botão de chatbot
- Rodapé completo

### Produtos

Criar uma área de produtos com:

- Lista de produtos simulados
- Nome do produto
- Categoria
- Preço fictício
- Imagem
- Botão de detalhes
- Botão para consultar disponibilidade

### Promoções

Criar uma seção ou página com:

- Cards de promoções
- Preço antigo
- Preço atual
- Desconto
- Botão de interesse ou consulta

### Contato

Criar página com:

- Endereço
- Telefone
- WhatsApp
- Horário de funcionamento
- Mapa incorporado ou espaço reservado para mapa
- Formulário de contato

### Chatbot

Criar um botão flutuante de chatbot no canto inferior da tela.

Ao clicar, abrir uma janela de atendimento com mensagens simuladas.

O chatbot deve ter, inicialmente:

- Mensagem de boas-vindas
- Opções rápidas
- Perguntas frequentes
- Simulação de atendimento
- Opção para falar pelo WhatsApp

Exemplos de opções:

- Consultar medicamento
- Ver promoções
- Horário de funcionamento
- Endereço da farmácia
- Falar com atendente

---

## Requisitos técnicos

O projeto deve:

- Usar o layout do Figma como referência principal
- Manter fidelidade visual ao design existente
- Ser responsivo
- Ter boa organização de componentes
- Ter código limpo e comentado quando necessário
- Evitar repetição desnecessária de código
- Usar boas práticas de HTML, CSS e JavaScript ou React, conforme a stack atual do projeto
- Criar dados simulados em arquivos separados
- Preparar serviços para futuras chamadas de API

---

## Estrutura sugerida

Caso o projeto use React, organizar como:

/src
/components
/pages
/data
/services
/assets
/styles
/utils

Caso seja HTML, CSS e JavaScript puro, organizar como:

/src
/css
/js
/assets
/data
/pages
/components

---

## Dados simulados

Criar arquivos com dados fictícios para:

- produtos
- categorias
- promoções
- perguntas frequentes
- mensagens do chatbot

---

## Futuras integrações

Deixar o projeto preparado para integrar futuramente com:

- WhatsApp
- chatbot com IA
- sistema ERP da farmácia
- controle de estoque
- catálogo real de produtos
- pedidos online
- painel administrativo

---

## Entregáveis esperados

O Cursor deve gerar:

1. Análise da estrutura atual do projeto
2. Especificação técnica
3. Lista de funcionalidades
4. Divisão em tasks
5. Implementação do projeto completo
6. Ajustes de responsividade
7. Revisão final do código
8. Sugestões de melhorias futuras

---

## Instrução principal

Não criar apenas um template visual.

Criar o projeto completo e funcional usando o design do Figma como base, implementando as páginas, componentes, dados simulados, chatbot inicial e estrutura preparada para evolução futura.