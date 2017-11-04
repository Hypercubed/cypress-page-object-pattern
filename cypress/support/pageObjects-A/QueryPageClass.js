import NavMenuClass from './NavigationMenuClass';

export default class QueryPageClass  {
  constructor() {
    this.bannerElement = 'body > .banner';
    this.navMenu = new NavMenuClass();
  }

  verifyElements() {
    return cy.get(this.bannerElement).find('.container h1').should('be.visible').then(() => {
      return this.navMenu.verifyElements();
    });
  }
};
