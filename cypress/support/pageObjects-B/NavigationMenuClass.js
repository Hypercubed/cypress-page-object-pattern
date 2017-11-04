
export class NavMenuClass  {
  constructor() {
    this.navbarElement = 'body > .navbar';
  }

  verifyElements() {
    cy.get(this.navbarElement).find('#navbar').should('be.visible');
  }

  switchToQueryingPage() {
    cy.get(this.navbarElement).find('#navbar ul > li:first').click();
    cy.get(this.navbarElement).find('#navbar ul > li:first > .dropdown-menu li:first').click();
  }
};

export const navMenu = new NavMenuClass();