Cypress.config('baseUrl', 'https://www.sunhotels.com/en')

describe('windows print example', () => {

  beforeEach(() => {
    cy.loginAs(Cypress.env('sunhotelsUsername'), Cypress.env('sunhotelsPassword'))
  })

  it('check media print content', () => {
    const bookingNumber = 'SH17370120'
    cy.visit('/bookings')
    cy.get('#bookingNumber').type(bookingNumber)
    cy.get('#booking-submit-btn').click()
    cy.get('div.relative a').click().wait(1000)

    // emulate print preview
    cy.wrap(
      Cypress.automation('remote:debugger:protocol', {
        command: 'Emulation.setEmulatedMedia',
        params: {
          media: 'print'
        }
      })
    )

    // export html to pdf
    // cy.get('.modal-content.summary')
    //   .then(() => {
    //   // print the application to PDF
    //   // https://chromedevtools.github.io/devtools-protocol/tot/Page/#method-printToPDF
    //     return Cypress.automation('remote:debugger:protocol', {
    //       command: 'Page.printToPDF',
    //       params: {
    //         transferMode: 'ReturnAsBase64',
    //       },
    //     })
    //   })
    //   .then(data => cy.writeFile('./mypdf.pdf', data, 'base64'))

      cy.get('#booking-code').should('contain', bookingNumber)
  })
})