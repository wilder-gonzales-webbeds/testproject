Cypress.config('baseUrl', 'https://opensource-demo.orangehrmlive.com')

describe('origin example', () => {

  it('cypress each test', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    
    cy.get('.orangehrm-dashboard-widget .orangehrm-dashboard-widget-name p').each(($el, index) => {
      cy.log($el.text())
      cy.log('index:', index)
    })

  })
})
