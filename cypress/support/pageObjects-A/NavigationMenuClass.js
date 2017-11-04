export default class NavMenuClass  {
  constructor() {
    this.navbarElement = 'body > .navbar';
  }

  verifyElements() {
    return cy.get(this.navbarElement).find('#navbar').should('be.visible');
  }

  switchToQueryingPage() {
    return cy.get(this.navbarElement).find('#navbar ul > li:first').click().then(() => {
      return cy.get(this.navbarElement).find('#navbar ul > li:first > .dropdown-menu li:first').click();
    });
  }
};
