/**
 * In Pattern D we eliminate eliminate the objects themselves.
 * Instead each file exports public functions that can be imported together as a "Page Object"
 * 
 * **Do this if you don't need real objects**.
 */

import * as mainPage from '../support/pageObjects-D/mainPage';

describe('Page "Object" Pattern - D', () => {
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
