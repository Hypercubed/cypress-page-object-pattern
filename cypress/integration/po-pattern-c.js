import { mainPage } from '../support/pageObjects-C';

describe('Page Object Pattern - C', () => {
  context('Querying', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/')
        .get('body > .banner h1').should('be.visible');
      mainPage.verifyElements();
    });

    it('cy.get() - query DOM elements', () => {
      mainPage.switchToQueryingPage();
    });
  });
});
