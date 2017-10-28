
import { mainPage } from '../support/pageObjects-B/MainPageClass';

describe('Page Object Pattern - B', () => {
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
