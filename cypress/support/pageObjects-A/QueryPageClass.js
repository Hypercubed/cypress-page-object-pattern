import BasePage from './BasePageClass';

export default class QueryPage extends BasePage  {
  constructor() {
    super();
    this.mainElement = 'body > .banner';
  }

  verifyElements() {
    return cy.get(this.mainElement).find('.container h1').should('be.visible').then(() => {
      return this.navMenu.verifyElements();
    });
  }
};
