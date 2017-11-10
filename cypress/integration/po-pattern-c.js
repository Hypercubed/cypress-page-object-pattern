/**
 * In Pattern C we eliminate classes entirely while keeping the Page-Object concept.
 * Each page module creates and exports single page object instance.
 * These instances are used in the same way as pattern B.
 * 
 * **Do this if you don't need page classes and inheritance**.
 */

import { mainPage } from '../support/pageObjects-C/mainPage';

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
