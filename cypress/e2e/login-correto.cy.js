describe('Página de login', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:4200/#/home')
    it('Fazendo login',()=>{
      cy.login('joyassis','joyassis123')
    })
  })
  // it('Fazendo login', () => {
  //   cy.visit('http://localhost:4200/#/home')
  //   cy.get('[data-test="loginUserName"]').type('joyassis')
  //   cy.get('[data-test="loginPassword"]').type('joyassis123')
  //   cy.contains('button','login').click();
  // });
});