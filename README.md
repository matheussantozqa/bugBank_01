💻 Projeto de Automação de Testes com Cypress + CucumberEste repositório contém uma suíte de testes E2E (End-to-End) desenvolvida com o framework Cypress e sintaxe Cucumber (Gherkin), focada na validação das funcionalidades da aplicação BugBank.

🧱 Estrutura do Projetocypress/
├── e2e/
│   ├── features/              # Arquivos de especificação Gherkin (.feature)
│   │   ├── login.feature      # Cenários de login
│   │   └── cadastro.feature   # Cenários de criação de conta
│   └── step-definitions/      # Implementação dos passos (JavaScript)
│       ├── login.js
│       └── cadastro.js
├── fixtures/                  # Page Object Model (POM) e Massa de dados
│   ├── pages/                 # Seletores organizados por página (JSON/JS)
│   │   ├── loginPage.json
│   │   └── homePage.json
│   └── userData.json          # Dados de teste estáticos
├── support/                   # Comandos customizados e configurações globais
cypress.config.js              # Configurações do Cypress
package.json                   # Dependências e scripts de execução

🎯 Práticas e Padrões Aplicados
📌 POM - Page Object ModelOs elementos das páginas estão centralizados na pasta fixtures/pages/.Objetivo: Garantir que mudanças na interface exijam alteração em apenas um local, facilitando a manutenção.
📌 Gherkin (BDD)Escrita de cenários focada no comportamento do usuário, permitindo que membros não técnicos compreendam o que está sendo testado.Exemplo: Dado que o usuário está na página de login.

💡 Boas PráticasPráticaDescriçãoDRY (Don't Repeat Yourself)Reuso de seletores e comandos customizados.KISS (Keep It Simple, Stupid)Testes diretos e sem complexidade desnecessária.Clean CodeNomenclatura clara para variáveis e funções.🚀 Como ExecutarBash# 1. Instalar as dependências
npm install

# 2. Abrir o Cypress (Modo Interativo)
npx cypress open

# 3. Executar em modo Headless (Terminal)
npx cypress run
🔧 Tecnologias UtilizadasCypress: Framework principal de automação.Cucumber: Suporte à sintaxe Gherkin.JavaScript: Linguagem de programação.Node.js: Ambiente de execução.📌 NotasO projeto foca nos fluxos críticos: Cadastro de novos usuários e Login com sucesso/erro.A organização dos seletores em arquivos JSON visa separar a lógica de teste da estrutura do DOM.📂 Organização de SeletoresTodos os seletores estão centralizados para evitar a repetição de seletores CSS/Xpath ao longo dos arquivos de definição de passos.