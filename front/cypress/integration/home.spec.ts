const rootUrl = 'http://localhost:3000'

describe('Home page test', () => {
  it('Check for \'Register\' and \'Login\' buttons', () => {
    cy.visit(rootUrl)
    cy.get('.homeRegisterButton').click()
    cy.url().should('include', '/register')

    cy.visit(rootUrl)
    cy.get('.homeLoginButton').click()
    cy.url().should('include', '/login')
  })
})
