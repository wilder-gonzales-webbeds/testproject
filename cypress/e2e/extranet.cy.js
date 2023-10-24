Cypress.config('baseUrl', 'https://www.dotwconnect.com/_extranet')

describe('login', function () {

  it('login and logout', function () {
    cy.visit('/')
    cy.get("[placeholder='Username']").type(Cypress.env('extranetUsername'))
    cy.get("[placeholder='Password']").type(Cypress.env('extranetPassword'), { log: false })
    cy.get("button[type='submit']").click()

    cy.get("#headerProfilePhoto").should('be.visible')
    // expect(false).to.be(true)
  })

})
