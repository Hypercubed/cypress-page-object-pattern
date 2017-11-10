import { BasePage } from './BasePageClass'
import { navMenu } from './NavigationMenuClass';

export class QueryPage extends BasePage  {
  constructor() {
    super();
    this.mainElement = 'body > .banner';
  }

  verifyElements() {
    super.verifyElements();
    cy.get(this.mainElement).find('.container h1').should('be.visible');
  }
};

export const queryPage = new QueryPage();