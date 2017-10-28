import { navMenu } from './NavigationMenuClass';
import { queryPage } from './QueryPageClass';

class MainPageClass  {
  constructor() {
    this.bannerElement = 'body > .banner';
  }

  verifyElements() {
    cy.get(this.bannerElement).find('.container h1').should('be.visible');
    navMenu.verifyElements();
  }

  switchToQueryingPage() {
    navMenu.switchToQueryingPage();
    queryPage.verifyElements();
  }
};

export const mainPage = new MainPageClass();