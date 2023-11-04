import Cadastro from '../support/pages/cadastro/pagina-cadastro';
describe('Página de cadastro', () => {
  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    // cy.visit('http://localhost:4200/#/home')
    // cy.contains('a','Register now').click();
    // cy.get('[data-test="email"]').type('joy@email.com.br')
    // cy.get('[data-test="fullName"]').type('Joy Assis')
    // cy.get('[data-test="registerUserName"]').type('joyassis')
    // cy.get('[data-test="registerPassword"]').type('joyassis123')
    // cy.contains('button','Register').click();
    Cadastro.acessarPaginaDeCadastro();
    Cadastro.preencherFormulario();
    Cadastro.submeterCadastro();
  })
})