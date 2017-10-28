import { navMenu } from './navigationMenu';

const bannerElement = 'body > .banner';

export const queryPage = {
  verifyElements() {
    cy.get(bannerElement).find('.container h1').should('be.visible');
    navMenu.verifyElements();
  }
}