import BasePage from './BasePageClass';
import QueryPage from './NavigationMenuClass';

export default class MainPage extends BasePage  {
  constructor() {
    super();
    this.mainElement = 'body > .banner';
  }

  verifyElements() {
    return cy.get(this.mainElement).find('.container h1').should('be.visible').then(() => {
      return this.navMenu.verifyElements();
    });
  }

  switchToQueryingPage() {
    return this.navMenu.switchToQueryingPage().then(() => {
      cy.log('==> Finding Query Page');
      const queryPage = new QueryPage();
      return queryPage.verifyElements()
        .then(() => queryPage);
    });
  }
};
