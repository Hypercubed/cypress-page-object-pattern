
export class NavMenu  {
  constructor() {
    this.mainElement = 'body > .navbar';
  }

  verifyElements() {
    cy.get(this.mainElement).find('#navbar').should('be.visible');
  }

  switchToQueryingPage() {
    cy.get(this.mainElement).find('#navbar ul > li:first').click();
    cy.get(this.mainElement).find('#navbar ul > li:first > .dropdown-menu li:first').click();
  }
};

export const navMenu = new NavMenu();