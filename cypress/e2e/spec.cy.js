describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:8080/')
  })

  it('Clicks on an invisible element - false negative result', () => {
    cy.get('.submit').click({force: true})
    cy.log('This test passes even though the element it clicks on is invisible!')
    cy.log('Forcing this user behavior causes a false negative test result.')
  })

  it('Resets the button styling and clicks on a visible elemnt without using force', () => {
    cy.get('.submit').invoke('attr', 'style', 'display: block !important')
    cy.get('.submit').click()
  })
})