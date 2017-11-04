/**
 * In Pattern B we keep the page class definitions, which may be useful for inheritance, but each page class module exports a single page object instance of the class.
 * These instances can be used throughout the testing and within other classes.
 * 
 * **Do this if you must have page classes and inheritance**.
 */

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
