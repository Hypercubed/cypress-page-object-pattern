export default class NavMenu  {
  constructor() {
    this.mainElement = 'body > .navbar';
  }

  verifyElements() {
    return cy.get(this.mainElement).find('#navbar').should('be.visible');
  }

  switchToQueryingPage() {
    return cy.get(this.mainElement).find('#navbar ul > li:first').click().then(() => {
      return cy.get(this.mainElement).find('#navbar ul > li:first > .dropdown-menu li:first').click();
    });
  }
};
