"use strict";


class QueryPageClass  {
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
};

module.exports = QueryPageClass;