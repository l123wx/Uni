describe('table', () => {
  it('basic table', () => {
    cy.visit('http://localhost:6006/iframe.html?id=table--table-basic&viewMode=story')
    cy.wait(2000)
    cy.get('.ant-table').should('exist')
  })
})
