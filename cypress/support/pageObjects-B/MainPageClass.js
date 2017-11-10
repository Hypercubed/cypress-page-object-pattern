import { BasePage } from './BasePageClass'
import { navMenu } from './NavigationMenuClass';
import { queryPage } from './QueryPageClass';

export class MainPage extends BasePage  {
  constructor() {
    super();
    this.mainElement = 'body > .banner';
  }

  verifyElements() {
    super.verifyElements();
    cy.get(this.mainElement).find('.container h1').should('be.visible');
  }

  switchToQueryingPage() {
    navMenu.switchToQueryingPage();
    queryPage.verifyElements();
  }
};

export const mainPage = new MainPage();