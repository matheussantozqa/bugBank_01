import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('que o usuário acessa a página de login', () => {
    cy.fixture('cadastroDeConta').then((el) => {
        cy.visit(el.url);
    });
});

When('o usuário clica em Registrar', () => {
    cy.fixture('cadastroDeConta').then((el) => {
        cy.get(el.btnRegistrar).click();
    });
});

Then('preenche os campos obrigatórios e ativa a opção \'Criar conta com saldo\'', () => {
    cy.fixture('cadastroDeConta').then((el) => {
        cy.get(el.inputEmail).eq(1).type('teste3@gmail.com', { force: true });
        cy.get(el.inputNome).type('Teste3', { force: true });
        cy.get(el.inputSenha).eq(1).type('1234', { force: true });
        cy.get(el.inputConfirmacaoSenha).type('1234', { force: true });
        cy.get(el.toggleCriarContaComSaldo).click({ force: true });
    });
});

When('o usuário clica em Cadastrar', () => {
    cy.fixture('cadastroDeConta').then((el) => {
        cy.get(el.btnCadastrar).click({ force: true });
    });
});

Then('a conta é criada e aparece uma mensagem de sucesso', () => {
    cy.fixture('cadastroDeConta').then((el) => {
        cy.get(el.mensagemSucesso).should('be.visible');
    });
});