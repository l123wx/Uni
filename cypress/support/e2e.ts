Cypress.on('uncaught:exception', (err, _runnable) => {
  if (err) {
    console.error(err)
  }
  // returning false here prevents Cypress from
  // failing the test
  return false
})
