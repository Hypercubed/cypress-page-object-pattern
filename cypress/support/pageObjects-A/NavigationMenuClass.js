"use strict";
// const AdminModeClass = require('./MainAppObjects/AdminModeClass');

class NavMenuClass  {
  constructor() {
    this.navbarElement = 'body > .navbar';
  }

  verifyElements() {
    cy.get(this.navbarElement).find('#navbar').should('be.visible');
  }

  switchToQueryingPage() {
    return cy.get(this.navbarElement).find('#navbar ul > li:first').click().then(() => {
      return cy.get(this.navbarElement).find('#navbar ul > li:first > .dropdown-menu li:first').click();
    });
  }
};

module.exports = NavMenuClass;