import * as navMenu from './navigationMenu';

const bannerElement = 'body > .banner';

export function verifyElements() {
  cy.get(bannerElement).find('.container h1').should('be.visible');
  navMenu.verifyElements();
}
