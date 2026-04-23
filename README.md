# 💻 Projeto de Automação de Testes com Cypress + Cucumber

Este repositório contém uma suíte de **testes E2E** utilizando o framework **Cypress** e a sintaxe **Cucumber (Gherkin)**, para a aplicação **BugBank**.

---

## 🧱 Estrutura do Projeto
```
cypress/
├── e2e/
│   ├── features/              # Arquivos de especificação Gherkin (.feature)
│   │   ├── login.feature      # Cenários de login
│   │   └── cadastro.feature   # Cenários de criação de conta
│   └── step-definitions/      # Implementação dos passos (JavaScript)
│       ├── login.js
│       └── cadastro.js
├── fixtures/                  # Page Object Model (POM) e Massa de Dados
│   ├── pages/                 # Seletores organizados por página
│   │   ├── loginPage.json
│   │   └── homePage.json
│   └── userData.json          # Dados de teste estáticos
├── support/                   # Arquivos de suporte do Cypress (comandos, setup)
cypress.config.js              # Configuração do Cypress
package.json                   # Dependências e scripts do projeto
package-lock.json              # Arquivo de trava de versões
README.md               
```

---

## 🎯 Práticas e Padrões Principais

### 📌 POM - Page Object Model
- Os elementos das páginas estão centralizados na pasta `fixtures/pages/`.
- Todos os seletores e elementos de página são definidos e reutilizados através das definições de passos.
- **Objetivo:** Garantir que mudanças na interface exijam atualizações em apenas um local, facilitando a manutenção.

> Exemplo: O arquivo `loginPage.json` contém localizadores como campos de entrada e botões para a tela de login.

---

### 📌 Gherkin (BDD)
- Escrita de cenários focada no comportamento do usuário, permitindo que membros não técnicos compreendam o que está sendo testado.
- Evita a duplicação e o acoplamento forte entre a lógica de teste e os dados.

> Exemplo: O passo `Dado que o usuário está na página de login` utiliza um formato claro e legível.

---

## 💡 Boas Práticas Aplicadas

| Prática  | Descrição |
|----------|-------------|
| **DRY** (Don't Repeat Yourself) | Reutilização de seletores e comandos personalizados. |
| **KISS** (Keep It Simple, Stupid) | Testes diretos e sem complexidade desnecessária. |
| **Clean Code** | Nomenclatura clara para variáveis e funções. |
| **Responsabilidade Única** | Cada arquivo de funcionalidade e definição de passo tem um propósito específico. |

---

## 🚀 Executando os Testes

```bash
# Instalar dependências
npm install

# Abrir o Cypress Test Runner em modo interativo
npx cypress open

# Executar todos os testes em modo headless (terminal)
npx cypress run
```

---

## 🔧 Ferramentas Utilizadas
- **Cypress**: Framework principal de automação.
- **Cucumber (Sintaxe Gherkin)**: Suporte para cenários BDD.
- **JavaScript**: Linguagem de programação.
- **Node.js**: Ambiente de execução.
- **JSON Fixtures**: Para organização de POM e dados de teste.

---

### 📌 Notas
- O projeto foca nos fluxos críticos: Cadastro de novos usuários e Login (sucesso/erro).
- A organização dos seletores em arquivos JSON visa separar a lógica de teste da estrutura do DOM.

---

### 📂 Organização de Seletores
Todos os seletores estão centralizados dentro dos POMs na pasta `fixtures/pages/` para evitar a repetição de seletores CSS/Xpath ao longo dos arquivos de definição de passos.
