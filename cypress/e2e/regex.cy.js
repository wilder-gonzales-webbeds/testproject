describe('regex example', () => {

  it.skip('test should match', () => {
    const url1 = '/interface/es/login/'
    const regexPattern = /\/interface\/\w+\/login\//
    cy.wrap(url1).should('match', regexPattern)
  })
})
