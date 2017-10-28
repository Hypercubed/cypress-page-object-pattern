
describe('Page Object Pattern - A', () => {
  context('Querying', () => {
    beforeEach(() => {
      const MainPageClass = require('../support/pageObjects-A/MainPageClass');
      
      return cy.visit('https://example.cypress.io/')
        .get('body > .banner h1').should('be.visible').then(() => {
          cy.mainPage = new MainPageClass();
          return cy.mainPage.verifyElements();
        });
    });

    it('cy.get() - query DOM elements', () => {
      cy.mainPage.switchToQueryingPage().then(() => {
        console.log('what?');
      });
    });
  });
});
