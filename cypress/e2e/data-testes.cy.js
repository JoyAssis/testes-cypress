describe("Página de cadastro", () => {
  beforeEach(() => {
    cy.visit("http://localhost:4200/");
  });
    const users = require("../fixtures/users.json");
    users.forEach((users) => {
      it("Preencher os campos do formulário corretamente para cadastrar um novo usuário", () => {
        cy.get('[data-test="register"]').click();
        cy.get('input[data-test="email"]').type(users.email);
        cy.get('input[data-test="fullName"]').type(users.fullName);
        cy.get('input[data-test="registerUserName"]').type(users.userName);
        cy.get('input[data-test="registerPassword"]').type(users.password);
        cy.get('[data-test="btnRegister"]').click();
      });
    });
});
