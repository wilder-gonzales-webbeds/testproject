Cypress.config('baseUrl', 'https://wildergonzo.github.io/')

describe('conditions', () => {
  it('if element exist', () => {
    cy.visit('/')
    cy.get('body').then(($body)=>{
      if ($body.find('#fake', { timeout: 10000 }).length) {
        cy.log('SI existe')
      } else {
        cy.log('NO existe')
      }
    })
  })
})
