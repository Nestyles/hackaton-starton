const rootUrl = 'http://localhost:3000'

describe('Register page test', () => {
  it('Check for three inputs', () => {
    cy.visit(rootUrl + '/register')

    cy.get('.registerEmailInput')
    .type('fake@email.com')
    .should('have.value', 'fake@email.com')

    cy.get('.registerPasswordInput')
    .type('azerty')
    .should('have.value', 'azerty')

    cy.get('.registerConfirmPasswordInput')
    .type('azerty')
    .should('have.value', 'azerty')
  })
  it('Check for \'Create account\' and \'Login\' buttons', () => {
    cy.visit(rootUrl + '/register')

    cy.get('.registerCreateAccountButton').click()
    cy.get('.registerLoginButton').click()
    cy.url().should('include', '/login')
  })
})
