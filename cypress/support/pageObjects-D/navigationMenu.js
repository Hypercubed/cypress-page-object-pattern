const navbarElement = 'body > .navbar';

export function verifyElements() {
  cy.get(navbarElement).find('#navbar').should('be.visible');
}

export function switchToQueryingPage() {
  cy.get(navbarElement).find('#navbar ul > li:first').click();
  cy.get(navbarElement).find('#navbar ul > li:first > .dropdown-menu li:first').click();
}
