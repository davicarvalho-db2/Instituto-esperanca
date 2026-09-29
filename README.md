# Instituto Esperança

Site institucional desenvolvido para a ONG fictícia Instituto Esperança, como projeto da disciplina de Desenvolvimento Front-end para Web.

## Funcionalidades

- Páginas: início, projetos sociais e cadastro de colaboradores
- Formulário com validação nativa (HTML5) e customizada via JavaScript
- Máscaras de CPF, telefone e CEP com a biblioteca IMask
- Persistência de cadastros no localStorage
- Modal de detalhes e notificação em toast

## Tecnologias

HTML5, CSS3 (Grid, variáveis), JavaScript (Vanilla), IMask.js

## Estrutura de arquivos

- `index.html`, `projetos.html`, `cadastro.html`
- `style.css`
- `scripts.js`, `mascaras.js`, `armazenamento.js`, `validacao.js`

## Como executar localmente

Não há dependências para instalar nem build para gerar, pois o projeto é HTML/CSS/JS puro.

1. Clone o repositório: `git clone https://github.com/davicarvalho-db2/Instituto-esperanca.git`
2. Abra a pasta clonada
3. Abra o arquivo `index.html` diretamente no navegador (duplo clique, ou botão direito → Abrir com)

A biblioteca IMask é carregada via CDN dentro de `cadastro.html`, portanto é necessária conexão com a internet para o carregamento correto das máscaras.

## Versionamento

O projeto segue o padrão **GitFlow**, com as branches `main` (produção), `develop` (integração) e `feature/*` (funcionalidades isoladas). Os commits seguem o padrão **Conventional Commits** (`feat:`, `fix:`, `docs:`, `chore:`). A primeira versão estável foi marcada com a tag semântica `v1.0.0`.