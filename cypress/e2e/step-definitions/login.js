import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('que o usuário está na página de login', () => {
  cy.fixture('loginInvalido').then((el) => {
    cy.visit(el.url);
  });
});

When('preenche o campo de e-mail com endereço inválido', () => {
  cy.fixture('loginInvalido').then((el) => {
    cy.get(el.inputEmail).eq(1).type('email_invalido', { force: true });
  });
});

When('preenche o campo de senha com uma senha válida', () => {
  cy.fixture('loginInvalido').then((el) => {
    cy.get(el.inputSenha).eq(2).type('1234', { force: true });
  });
});

When('o usuário clica em acessar', () => {
  cy.fixture('loginInvalido').then((el) => {
    cy.get(el.btnAcessar).eq(1).click({ force: true });
  });
});

Then('uma mensagem de erro é exibida', () => {
  cy.fixture('loginInvalido').then((el) => {
    cy.get(el.inputEmail).eq(1).then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
    });
  });
});