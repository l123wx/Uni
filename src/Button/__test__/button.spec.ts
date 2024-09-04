describe('button', () => {
  it('basic button', () => {
    cy.visit('http://localhost:6006/iframe.html?id=button--button-basic&viewMode=story')
    cy.wait(2000)
    cy.get('.el-button>span').should('have.text', 'Uni Button')
  })

  it('should callback when click', () => {
    cy.visit('http://localhost:6006/iframe.html?id=button--button-basic&viewMode=story', {
      onBeforeLoad(window) {
        cy.stub(window.console, 'log').as('consoleLog'); // 测试时用到控制台的前置步骤
      },
    })
    cy.wait(2000)
    cy.get('.el-button').click()
    cy.wait(100)
    cy.get('@consoleLog').should('be.calledWith', 'click')
  })
})
