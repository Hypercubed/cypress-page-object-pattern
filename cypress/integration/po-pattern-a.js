/**
 * Pattern A is an anti-pattern.
 * When navigating from page to page within a single test flow, new page instances are created from page classes each time.
 * This breaks the Cypress' internal async queuing and necessitates excessive use of `.then`s and/or callbacks.
 * 
 * **Do not do this!**
 */
import MainPage from '../support/pageObjects-A/MainPageClass';

describe('Page Object Pattern - A', () => {
  context('Querying', () => {
    let mainPage;

    beforeEach(() => {
      return cy.visit('https://example.cypress.io/')
        .get('body > .banner h1').should('be.visible').then(() => {
          mainPage = new MainPage();
          return mainPage.verifyElements();
        });
    });

    it('cy.get() - query DOM elements', () => {
      mainPage.switchToQueryingPage();
    });
  });
});
