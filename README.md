# PUC-MINAS-TRABALHO-DEVOPS
Exercício 1: Criando uma Pipeline de CI/CD com GitHub Actions e Testes Automatizados

Para executar o teste, basta seguir as instruções abaixo:

1 - Escolha um editor de código de sua preferência;

2 - Instalação do Node.js:

Caso ainda não possua instalado, basta instalar através do seguinte link: https://nodejs.org/en/download/

3 - Instalação do NPM:

Abra o PowerShell como administrador;
Execute o seguinte comando: "npm install".

4 - Instalação do Cypress e dependências:

Com o projeto aberto no editor de código de sua preferência, abra o terminal e confira se está na pasta do projeto;
Execute o comando: npm install cypress.
Execute o comando: npm i --save-dev cypress-localstorage-commands

5 - Executando o teste:

Para rodar o teste, basta digitar o seguinte comando no terminal: npx cypress open;
Clique na opção "E2E Testing";
Selecione o navegador de sua preferência;
Clique em "Start E2E Testing (aparecerá o nome do navegador escolhido)";
Selecione a Guia - Specs (na lateral esquerda);

6- Configurando o GitHub Actions:

Seguir o passo a passo da página oficial do GitHub
https://docs.github.com/pt/actions/quickstart

7- A pipeline funciona automaticamente ao realizar um novo commit no repositório, assim podemos visualizar a execução dos testes automatizados implementados.



Execute as suites.
