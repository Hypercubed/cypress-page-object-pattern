import { navMenu } from './navigationMenu';
import { queryPage } from './queryPage';

const bannerElement = 'body > .banner';

export const mainPage = {
  verifyElements() {
    cy.get(bannerElement).find('.container h1').should('be.visible');
    navMenu.verifyElements();
  },
  switchToQueryingPage() {
    navMenu.switchToQueryingPage();
    queryPage.verifyElements();
  }
}