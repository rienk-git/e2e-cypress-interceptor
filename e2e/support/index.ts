beforeEach(() => {
  cy.log('I run before every test in every spec file!!!!!!')
  cy.intercept('https://jsonplaceholder.typicode.com/**', (req) => {
    console.log(req)
    req.reply({some: 122344})
  })
})
