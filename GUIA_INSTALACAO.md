# Guia de instalação e execução

Este guia explica como preparar o ambiente e rodar a aplicação **front-end** do projeto no seu computador, a partir de um clone feito pelo GitHub. Ele **não substitui** o [Readme.md](Readme.md) principal, que descreve objetivos, requisitos e contexto do produto.

A aplicação web (React + Vite) fica em:

`Template_Front/extracted-farmacia/`

Todos os comandos de instalação e execução abaixo assumem que o terminal está aberto **nessa pasta**, após o clone.

---

## 1. Pré-requisitos

- **Node.js** em versão compatível com Vite 6 (recomendado: **Node.js 20 LTS** ou **18 LTS**). Verifique com:
  - `node -v`
- **npm** (vem com o Node.js). Verifique com:
  - `npm -v`
- **Git** para clonar o repositório. Verifique com:
  - `git --version`

Opcional: **pnpm** ou **yarn**, se preferir outro gestor de pacotes (o repositório foi testado com `npm`).

---

## 2. Clonar o repositório

No terminal, vá para a pasta onde costuma guardar projetos e execute (substitua a URL pela do **seu** repositório no GitHub):

```bash
git clone https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
```

Com SSH:

```bash
git clone git@github.com:SEU_USUARIO/SEU_REPOSITORIO.git
```

---

## 3. Acessar a pasta do projeto e da aplicação

Entre na pasta do repositório clonado (o nome da pasta costuma ser o do repositório):

```bash
cd SEU_REPOSITORIO
```

Em seguida, entre na pasta do **front-end**:

```bash
cd Template_Front/extracted-farmacia
```

A partir daqui, use os comandos das seções seguintes.

---

## 4. Instalar as dependências

Na pasta `Template_Front/extracted-farmacia`:

```bash
npm install
```

Aguarde até concluir. Isso instala as dependências listadas no `package.json` (React, Vite, Tailwind, etc.).

Se usar **pnpm** (há `pnpm` no ecosistema do template):

```bash
pnpm install
```

---

## 5. Variáveis de ambiente (opcional)

O projeto funciona **sem** arquivo `.env`: os dados vêm de mocks no código.

Se no futuro existir uma API, a aplicação pode usar a variável:

| Variável        | Descrição |
|-----------------|-----------|
| `VITE_API_URL`  | URL base da API (ex.: `https://api.exemplo.com`). Se estiver **vazia** ou **não definida**, o front continua usando apenas os dados mock. |

1. Copie o exemplo:

   ```bash
   # Windows (PowerShell), estando em Template_Front/extracted-farmacia
   copy .env.example .env
   ```

   No macOS ou Linux:

   ```bash
   cp .env.example .env
   ```

2. Edite o arquivo `.env` e preencha `VITE_API_URL` apenas quando tiver um backend alinhado com os serviços do código.

**Nota:** variáveis expostas ao browser no Vite precisam do prefixo `VITE_`.

---

## 6. Iniciar em modo desenvolvimento

Na pasta `Template_Front/extracted-farmacia`:

```bash
npm run dev
```

O Vite inicia o servidor de desenvolvimento. No terminal aparece o endereço (em geral `http://localhost:5173`). Abra esse endereço no navegador.

O script correspondente no `package.json` é: `"dev": "vite"`.

---

## 7. Build de produção

Na pasta `Template_Front/extracted-farmacia`:

```bash
npm run build
```

Os ficheiros otimizados são gerados na pasta **`dist/`**.

Para **pré-visualizar** o build localmente (servir a pasta `dist`), o projeto não define um script `preview` no `package.json`; pode usar o comando integrado do Vite:

```bash
npx vite preview
```

Segue as instruções no terminal para abrir a URL (por defeito também pode usar a porta 4173).

---

## 8. Erros comuns e soluções

| Problema | O que fazer |
|----------|-------------|
| `node: command not found` ou versão muito antiga | Instale ou atualize o Node.js (LTS 20 ou 18) a partir do site oficial e reinicie o terminal. |
| `npm install` falha com erro de rede ou timeout | Verifique a internet, proxy ou firewall; tente de novo ou use outra rede. |
| `EACCES` / permissões ao instalar pacotes globais | Evite `sudo npm install` na pasta do projeto; corrija permissões da pasta do utilizador ou use um gestor de versões do Node (nvm, fnm). |
| Porta `5173` já em uso | Feche outra app que use a mesma porta ou execute `npm run dev` com outra porta: `npx vite --port 3000`. |
| Página em branco ou erros após pull | Apague `node_modules` e o lockfile se existir e reinstale: `rm -rf node_modules` (ou equivalente no Windows) e `npm install`. |
| Imagens de produtos não carregam | O demo usa URLs externas (ex.: serviços de placeholder). Verifique ligação à internet e bloqueios de extensões no browser. |
| `VITE_API_URL` definida mas dados estranhos | Confirme que a API real corresponde aos endpoints esperados pelo código em `src/services/` ou remova/commente a variável para voltar aos mocks. |

---

## 9. Mais informações sobre o projeto

Para objetivos do produto, páginas previstas, chatbot, integrações futuras e restantes requisitos, consulte o ficheiro **[Readme.md](Readme.md)** na raiz do repositório.

README local do front-end (comandos e estrutura resumida): `Template_Front/extracted-farmacia/README.md`.
