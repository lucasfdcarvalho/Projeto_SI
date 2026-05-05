# README - Uso de Specs no Projeto

## Comandos OpenSpec utilizados no projeto

Durante o desenvolvimento do projeto, utilizei comandos do OpenSpec dentro do Cursor para orientar a criação da aplicação web da farmácia. Abaixo estão os principais comandos utilizados e o papel de cada um.

---

## 1. `/opsx-explore`

### Definição

O comando `/opsx-explore` foi usado para explorar, analisar e entender o projeto antes de iniciar a implementação.

Ele não tem como foco principal alterar o código diretamente, mas sim levantar possibilidades/opções, entender arquivos existentes, analisar requisitos e sugerir caminhos para o desenvolvimento.

### Como foi aplicado no projeto

Utilizei esse comando para pedir ao Cursor que analisasse o arquivo `README.md`, entendesse a proposta da aplicação web e apresentasse opções para a construção do projeto.

Também usei o `/opsx-explore` para analisar o template de front-end criado no Figma e disponibilizado em um arquivo `.zip`.

### Exemplos utilizados

```
/opsx-explore Com base no @Readme.md quero que você analise esse arquivo .md e me dê as opções para a construção dessa aplicação web.
```
```
/opsx-explore Extraia a pasta @Template_Front/Template de site para farmácias.zip e descreva a stack presente.
```

```
/opsx-explore Quero que você adote a opção A e também quero que explore as opções para a criação do back-end.
```

### Papel desse comando

Esse comando ajudou a transformar uma ideia inicial em um plano mais claro, permitindo entender:

- Qual stack estava presente no template
- Quais caminhos poderiam ser seguidos
- Quais partes seriam necessárias no front-end
- Quais opções existiam para o back-end
- Como trabalhar com dados mockados no projeto

---

## 2. `/opsx-propose`

### Definição

O comando `/opsx-propose` foi utilizado para transformar a análise feita anteriormente em uma proposta mais estruturada, criando specs e tarefas para o projeto.

Diferente do `/opsx-explore`, que serve mais para entender e levantar possibilidades, o /opsx-propose serve para organizar o que será feito, criando uma especificação mais clara antes da implementação.

### Como foi aplicado no projeto

Depois de explorar as opções do projeto, utilizei o `/opsx-propose` para pedir ao Cursor que criasse as specs e executasse as tarefas necessárias.

### Exemplos utilizados

```
/opsx-propose Agora quero que você crie as specs e excute as tarefas
```

```
/opsx-propose Crie um arquivo chamado GUIA_INSTALACAO.md na raiz do projeto.
```

### Papel desse comando

Esse comando ajudou a criar uma ponte entre a ideia e a implementação, permitindo organizar:

- O que seria desenvolvido
- Quais arquivos precisariam ser criados
- Quais funcionalidades fariam parte do projeto
- Quais tarefas deveriam ser executadas
- Quais entregas eram esperadas

---

## 2. `/opsx-archive`

### Definição

O comando `/opsx-archive` foi utilizado para arquivar e documentar as mudanças realizadas no projeto após a criação das specs e execução das tasks.

Enquanto o `/opsx-explore` foi usado para análise e levantamento de opções, e o `/opsx-propose` foi usado para criação das specs e tarefas, o `/opsx-archive` entrou como uma etapa final para registrar o que foi feito no desenvolvimento.

### Como foi aplicado no projeto

Após finalizar as principais etapas do projeto, utilizei o `/opsx-archive` para documentar o histórico do desenvolvimento da aplicação web da farmácia.

Esse comando ajudou a registrar as specs criadas, as tasks executadas, as decisões técnicas tomadas, a estrutura final do projeto, as funcionalidades implementadas e as limitações percebidas.

### Exemplo utilizado

```
/opsx-archive Arquive e documente todas as mudanças realizadas neste projeto.
```

### Papel desse comando

Esse comando teve o papel de finalizar a documentação do processo de desenvolvimento.

Ele ajudou a manter um registro mais organizado sobre:

- As specs criadas
- As tasks executadas
- As decisões técnicas tomadas
- A estrutura final do projeto
- As funcionalidades implementadas
- O uso do template vindo do Figma
- A definição de uso de dados mockados
- A criação do chatbot inicial
- A criação do arquivo GUIA_INSTALACAO.md
- A criação do arquivo README_SPECS.md
- Possíveis limitações do projeto
- Sugestões de melhorias futuras

Dessa forma, o `/opsx-archive` complementou os comandos anteriores, servindo como uma documentação final do que foi feito no projeto.

---

# O que entendi sobre Specs

Specs, ou especificações, são documentos que descrevem de forma organizada o que precisa ser feito em um projeto antes ou durante a implementação.

Elas funcionam como um guia para o desenvolvimento, ajudando a transformar uma ideia geral em requisitos mais claros, organizados e executáveis.

No contexto do projeto da farmácia, as specs ajudaram a definir melhor o que a aplicação deveria conter, como páginas, funcionalidades, estrutura do front-end, possíveis integrações futuras e uso de dados mockados.

---

# Papel das Specs no Desenvolvimento

O principal papel das specs é evitar que o desenvolvimento comece de forma desorganizada.

Antes de criar ou alterar arquivos, as specs ajudam a responder perguntas como:

- Qual é o objetivo do projeto?
- Quais funcionalidades serão criadas?
- Quais tecnologias serão usadas?
- Quais arquivos precisam ser modificados?
- Quais tarefas devem ser feitas primeiro?
- O que será deixado preparado para o futuro?

No meu projeto, isso foi importante porque a aplicação não era apenas uma página simples. A ideia era criar uma aplicação web para farmácia usando um template de front-end já criado, com possibilidade de chatbot, dados mockados e estrutura preparada para evoluções futuras.

---

# Como as Specs foram aplicadas no projeto

No início, usei o comando /opsx-explore para pedir ao Cursor que analisasse o README.md e o template do front-end.

Com isso, o Cursor pôde entender melhor a ideia do projeto antes de criar qualquer coisa.

Depois, utilizei o `/opsx-explore` novamente para pedir opções de construção da aplicação e opções para o back-end.

Como os dados seriam mockados, essa informação também foi incluída na análise, para que o projeto não dependesse inicialmente de um banco de dados real ou de uma API pronta.

Em seguida, usei o comando `/opsx-propose` para pedir a criação das specs e das tarefas.

Nesse momento, a ideia deixou de ser apenas uma descrição geral e passou a ser organizada em partes menores, facilitando o desenvolvimento.

Também usei o `/opsx-propose` para solicitar a criação do arquivo GUIA_INSTALACAO.md, que teria o objetivo de explicar para outros usuários como instalar dependências e iniciar o projeto em suas próprias máquinas.

Por fim, utilizei o comando `/opsx-archive` para arquivar e documentar as mudanças realizadas no projeto. Essa etapa serviu para registrar o que foi implementado, quais tasks foram concluídas e quais decisões técnicas foram tomadas durante o desenvolvimento.

---

# Benefícios percebidos ao utilizar Specs

Um dos principais benefícios foi a organização.

Com as specs, ficou mais fácil entender o que precisava ser feito e em qual ordem. Em vez de simplesmente pedir para a IA “criar o projeto”, eu consegui orientar melhor o desenvolvimento com base em etapas.

Outro benefício foi a clareza. Como o projeto usava um template vindo do Figma, as specs ajudaram a separar o que já existia visualmente daquilo que ainda precisava ser implementado.

Também percebi que as specs ajudam a reduzir erros, porque antes de sair criando arquivos, o Cursor analisa o contexto e propõe um caminho.

Além disso, elas ajudam a documentar melhor o processo. Isso é importante porque, se alguém perguntar o que foi feito, fica mais fácil explicar que primeiro houve uma etapa de exploração, depois uma etapa de proposta e, por fim, a execução das tarefas.

---

# Exemplos reais do projeto

Um exemplo foi o uso do template de front-end criado no Figma. Em vez de pedir para o Cursor criar um layout do zero, eu especifiquei que ele deveria usar o código da pasta `Template_Front/Template de site para farmácias.zip.`

Outro exemplo foi a definição de que os dados seriam mockados. Isso influenciou diretamente a forma como o projeto seria construído, pois não seria necessário criar um banco de dados real inicialmente.

Também pedi para o Cursor explorar opções de back-end, mesmo sabendo que os dados seriam simulados. Isso ajudou a deixar o projeto preparado para uma possível evolução futura.

Por fim, a criação do `GUIA_INSTALACAO.md` também foi uma aplicação prática da ideia de documentação orientada por specs, já que o arquivo foi pensado para ajudar outros usuários a instalarem e executarem o projeto pelo GitHub.

---

# Desafios e limitações percebidas

Uma limitação percebida foi que os comandos precisam ser bem escritos. Quando o pedido é muito genérico, a IA pode interpretar de forma diferente do esperado.

Por exemplo, se eu apenas pedisse para “criar o projeto”, talvez o Cursor criasse algo diferente do que eu imaginava. Por isso, precisei explicar que o layout já vinha do Figma, que os dados seriam mockados e que eu queria explorar opções antes de implementar.

Outro desafio foi entender qual modo usar em cada momento. O `/opsx-explore` foi melhor para análise e levantamento de opções, enquanto o `/opsx-propose` foi melhor para criar specs e transformar as ideias em tarefas.

Também percebi que, mesmo com specs, ainda é necessário revisar o que a IA gera. As specs ajudam bastante, mas não substituem a análise do desenvolvedor.

---

# Conclusão

Com base na prática, entendi que specs são uma forma de planejar melhor o desenvolvimento antes de implementar.

No projeto da farmácia, elas ajudaram a organizar a ideia, analisar o template existente, definir o uso de dados mockados, pensar em opções para o back-end e criar tarefas mais claras para o desenvolvimento.

O uso dos comandos `/opsx-explore`, `/opsx-propose` e `/opsx-archive` tornou o processo mais estruturado, evitando que o projeto fosse desenvolvido de forma aleatória.

Mesmo assim, percebi que é importante escrever bons comandos, revisar as respostas da IA e acompanhar cada etapa do desenvolvimento.