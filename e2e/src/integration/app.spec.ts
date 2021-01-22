
describe('apiCacheTest', () => {
  beforeEach(() => cy.visit('/'));
  it('should clicked message', () => {
    cy.get('#button').click();
    cy.get('h1').contains('Clicked button');
  });
  it('should fetch data 1', () => {
    cy.get('button#fetch1').click();
    cy.get('#datafetch1').contains('{ "userId": 1, "id": 1, "title": "delectus aut autem", "completed": false }');
  });
  it('should fetch data 2', () => {
    cy.get('button#fetch2').click();
    cy.get('#datafetch2').contains('{ "userId": 1, "id": 2, "title": "quis ut nam facilis et officia qui", "completed": false }');
  });
});