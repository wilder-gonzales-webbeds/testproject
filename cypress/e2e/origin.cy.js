Cypress.config('baseUrl', 'https://www.sunhotels.com/en')

describe('origin example', () => {

  beforeEach(() => {
    cy.loginAs(Cypress.env('sunhotelsUsername'), Cypress.env('sunhotelsPassword'))
    cy.visit('/agent')
  })

  it('use origin to switch context/domain', () => {
    cy.get('a#goToActivities').click()
    cy.get('.act-banner__inner-bold-title')
      .contains('Las Vegas')
      .click()
      .wait(1000)
    cy.get('.loading-wrapper h3', {timeout: 15000}).should('not.exist');
    cy.get('#activities .activity')
      .should('be.visible')
      .first()
      .as('activity')

    const url = cy.get('@activity').then(function ($a) {
      const href = $a.prop('href')
      return href
    })

    cy.log(url)
    cy.get('@activity').invoke('removeAttr', 'target').click()

    cy.origin('https://secure.sunhotels.net/', () => {
      cy.get('#baseInformation h1')
        .invoke('text')
        .should('contain', 'Big Bus Las Vegas Hop-on Hop-off Tour:Discover Ticket')
    })
  })
})
