import * as navMenu from './navigationMenu';
import * as queryPage from './queryPage';

const bannerElement = 'body > .banner';

export function verifyElements() {
  cy.get(bannerElement).find('.container h1').should('be.visible');
  navMenu.verifyElements();
}

export function switchToQueryingPage() {
  navMenu.switchToQueryingPage();
  queryPage.verifyElements();
}
