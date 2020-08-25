<div align="center">
  <img src="./docs/nave-logo.png" />
</div>

<hr />
<h3 align="center">Navedex - A React TypeScript Frontend Challenge</h3>

<div align="center">

[![Netlify Status](https://api.netlify.com/api/v1/badges/ea2bd15f-feb2-4546-b96c-9b89694e1927/deploy-status)](https://app.netlify.com/sites/navedex-bmviniciuss/deploys)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

</div>

## Demo
[Live Demo](https://navedex-bmviniciuss.netlify.app/)

## Tecnologias
A aplicação foi construida usando [`React`](https://pt-br.reactjs.org/) e [`TypeScript`](https://www.typescriptlang.org/). A estilização foi feita usando [`Tailwind`](https://tailwindcss.com/) e [`Chakra UI`](https://chakra-ui.com/). O projeto seguiu os padrões do [`JavaScript Standard Style`](https://standardjs.com/) em integração com o [`ESLint`](https://eslint.org/). As requisições http foram feitas utlizado o [`axios`](https://github.com/axios/axios) em conjunto com o [`React Query`](https://github.com/tannerlinsley/react-query).

## Como rodar Localmente?
- Clone o repositório
```bash
git clone https://github.com/bmviniciuss/navedex
```
- Entre na pasta
```bash
cd navedex
```
- Instale as dependências
```bash
npm i
```
- Execute a aplicação
```bash
npm run start
```

## Dificuldades
### Estilização

No começo do projeto defini que usaria o tailwind para fazer a estilização, pois era uma biblioteca que havia achado legal e queria testar. Apesar de achar um pouco verbosa a princípio, após ganhar um pouco mais de conhecimento fazer os componentes e layouts foram rápidos. Porém, alguns componentes eram muito complexo fazer do zero, e por questões de temp optei em usar o Chakra UI que é uma biblioteca de componentes para React inspirada no Tailwind. Com uma integração muita boa, componentes do Chakra como Modais, Popups, Toasts e alguns Inputs foram usados.

### HTTP

No inicio do desenvolvimento estava usando o axios para fazer as requisições http diretamente. Porém, o gerenciamento do estado das requisições (carregando, sucesso e erro) dentro de useReducers das telas estava ficando complicado e repetitivo e o controle de cache nos estados não estava bem feito. Por isso decidi utilizar uma biblioteca chamada React Query, na qual utiliza as funções do axios para fazer as requisições, além de expor Hooks para fazer Queries e Mutations, gerenciando o estado e cache automaticamente das requisições. Como nunca havia utilizado a biblioteca fiquei surpreso com a integração da mesma com o axios e com o Typescript.

### Estado Global

Tive algumas dificuldades para realizar a autenticação sem bibliotecas de gerenciamento de estado como Redux. Então foi a primeira vez que usei Contexts e Providers, tanto para a parte de autenticação como para o controle do estado de modais e popups.

## O que mudaria?
Com mais tempo eu trocaria toda a parte de formulários da aplicação. No momento não utilizo bibliotecas para fazer isso, todo estado dos inputs são gerenciados dentro de useReducers. Ao construir notei muita repetição de código. Então com certeza se pudesse trocar utilizaria alguma biblioteca como o [`Formik`](https://formik.org/) ou [`React Hook Form`](https://react-hook-form.com/).
