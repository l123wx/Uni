describe('button', () => {
  it('basic button', () => {
    cy.visit('http://localhost:6006/iframe.html?id=button--button-basic&viewMode=story')
    cy.wait(2000)

    cy.get('.el-button>span').should('have.text', 'Uni Button')
  })
})
