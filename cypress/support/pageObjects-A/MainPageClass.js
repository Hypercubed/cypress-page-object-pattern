"use strict";


class MainPageClass  {
  constructor() {
    this.bannerElement = 'body > .banner';
  }

  verifyElements() {
    cy.get(this.bannerElement).find('.container h1').should('be.visible').then(() => {
      const NavMenuClass = require('./NavigationMenuClass');
      this.navMenu = new NavMenuClass();
      return this.navMenu.verifyElements();
    });
  }

  switchToQueryingPage() {
    return this.navMenu.switchToQueryingPage().then(() => {
      const QueryPageClass = require('./QueryPageClass');
      cy.log('==> Finding Query Page');
      cy.queryPage = new QueryPageClass();
      return cy.queryPage.verifyElements();
    });
  }
};

module.exports = MainPageClass;