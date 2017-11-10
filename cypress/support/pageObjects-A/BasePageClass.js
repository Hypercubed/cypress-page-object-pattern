import NavMenu from './NavigationMenuClass';

export default class BasePage  {
  constructor() {
    this.mainElement = 'body';
    this.navMenu = new NavMenu();
  }

  verifyElements() {
    return cy.get(this.mainElement).should('be.visible').then(() => {
      return this.navMenu.verifyElements();
    });
  }
};
