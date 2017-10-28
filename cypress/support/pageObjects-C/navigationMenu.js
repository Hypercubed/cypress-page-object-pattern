const navbarElement = 'body > .navbar';

export const navMenu = {
  verifyElements() {
    cy.get(navbarElement).find('#navbar').should('be.visible');
  },
  switchToQueryingPage() {
    cy.get(navbarElement).find('#navbar ul > li:first').click();
    cy.get(navbarElement).find('#navbar ul > li:first > .dropdown-menu li:first').click();
  }
}