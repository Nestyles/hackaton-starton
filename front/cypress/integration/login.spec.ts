const rootUrl = 'http://localhost:3000'

describe('Login page test', () => {
  it('Check for two inputs', () => {
    cy.visit(rootUrl + '/login')

    cy.get('.loginEmailInput')
    .type('fake@email.com')
    .should('have.value', 'fake@email.com')

    cy.get('.loginPasswordInput')
    .type('azerty')
    .should('have.value', 'azerty')
  })
  it('Check for \'Create account\' and \'Login\' buttons', () => {
    cy.visit(rootUrl + '/login')

    cy.get('.loginLoginButton').click()
    cy.get('.loginRegisterButton').click()
    cy.url().should('include', '/register')
  })
})
