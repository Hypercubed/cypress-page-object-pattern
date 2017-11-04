import NavMenuClass from './NavigationMenuClass';
import QueryPageClass from './NavigationMenuClass';

export default class MainPageClass  {
  constructor() {
    this.bannerElement = 'body > .banner';
    this.navMenu = new NavMenuClass();
  }

  verifyElements() {
    return cy.get(this.bannerElement).find('.container h1').should('be.visible').then(() => {
      return this.navMenu.verifyElements();
    });
  }

  switchToQueryingPage() {
    return this.navMenu.switchToQueryingPage().then(() => {
      cy.log('==> Finding Query Page');
      const queryPage = new QueryPageClass();
      return queryPage.verifyElements()
        .then(() => queryPage);
    });
  }
};
