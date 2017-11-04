import { navMenu } from './NavigationMenuClass';

export class QueryPageClass  {
  constructor() {
    this.bannerElement = 'body > .banner';
  }

  verifyElements() {
    cy.get(this.bannerElement).find('.container h1').should('be.visible');
    navMenu.verifyElements();
  }
};

export const queryPage = new QueryPageClass();