# Cypress Page Object Pattern Example

This repo is a test/demonstration of three patterns and one anti-pattern for using Page-Objects  (reference needed) or Page-Object-like testing patterns in [Cypress](https://www.cypress.io/).

*Disclaimer: I am a JavaScript developer not an experienced e2e tester and new to Cypress myself.. so take it for what it is.*

# (Anti-)Patterns

## [Pattern A: The anti-pattern](cypress/integration/po-pattern-a.js)

Pattern A is an anti-pattern.  When navigating from page to page within a single test flow, new page instances are created from page classes each time.  This breaks the Cypress' internal async queuing and necessitates excessive use of `.then`s and/or callbacks.

**Do not do this!**

### Page Module

```js
import BasePage from './BasePageClass';
import QueryPage from './NavigationMenuClass';

export default class MainPage extends BasePage  {
  constructor() {
    super();
    this.mainElement = 'body > .banner';
  }

  verifyElements() {
    return cy.get(this.mainElement).find('.container h1').should('be.visible').then(() => {
      return this.navMenu.verifyElements();
    });
  }

  switchToQueryingPage() {
    return this.navMenu.switchToQueryingPage().then(() => {
      cy.log('==> Finding Query Page');
      const queryPage = new QueryPage();
      return queryPage.verifyElements()
        .then(() => queryPage);
    });
  }
};
```

### Integration Test

```js
import MainPage from '../support/pageObjects-A/MainPageClass';

describe('Page Object Pattern - A', () => {
  context('Querying', () => {
    let mainPage;

    beforeEach(() => {
      return cy.visit('https://example.cypress.io/')
        .get('body > .banner h1').should('be.visible').then(() => {
          mainPage = new MainPage();
          return mainPage.verifyElements();
        });
    });

    it('cy.get() - query DOM elements', () => {
      mainPage.switchToQueryingPage();
    });
  });
});
```

## [Pattern B: page classes](cypress/integration/po-pattern-a.js)

In Pattern B we keep the page class definitions, which may be useful for inheritance, but each page class module exports a single page object instance of the class.  These instances can be used throughout the testing and within other classes.

**Do this if you must have page classes and inheritance**.

### Page Module

```js
import { BasePage } from './BasePageClass'
import { navMenu } from './NavigationMenuClass';
import { queryPage } from './QueryPageClass';

export class MainPage extends BasePage  {
  constructor() {
    super();
    this.mainElement = 'body > .banner';
  }

  verifyElements() {
    super.verifyElements();
    cy.get(this.mainElement).find('.container h1').should('be.visible');
  }

  switchToQueryingPage() {
    navMenu.switchToQueryingPage();
    queryPage.verifyElements();
  }
};

export const mainPage = new MainPage();
```

### Integration Test

```js
import { mainPage } from '../support/pageObjects-B/MainPageClass';

describe('Page Object Pattern - B', () => {
  context('Querying', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/')
        .get('body > .banner h1').should('be.visible');
      mainPage.verifyElements();
    });

    it('cy.get() - query DOM elements', () => {
      mainPage.switchToQueryingPage();
    });
  });
});
```

## [Pattern C: page objects](cypress/integration/po-pattern-a.js)

In Pattern C we eliminate classes entirely.  Instead each page module creates and exports single page object instance. These instances are used in the same way as pattern B.

**Do this if you don't need page classes and inheritance**.

### Page Module

```js
import { navMenu } from './navigationMenu';
import { queryPage } from './queryPage';

const bannerElement = 'body > .banner';

export const mainPage = {
  verifyElements() {
    cy.get(bannerElement).find('.container h1').should('be.visible');
    navMenu.verifyElements();
  },
  switchToQueryingPage() {
    navMenu.switchToQueryingPage();
    queryPage.verifyElements();
  }
}
```

### Integration Test

```js
import { mainPage } from '../support/pageObjects-C/mainPage';

describe('Page Object Pattern - C', () => {
  context('Querying', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/')
        .get('body > .banner h1').should('be.visible');
      mainPage.verifyElements();
    });

    it('cy.get() - query DOM elements', () => {
      mainPage.switchToQueryingPage();
    });
  });
});
```

## [Pattern D: page modules](cypress/integration/po-pattern-d.js)

In Pattern D we eliminate the objects themselves.  Instead each page module creates and exports public functions. These public function can be imported and used in an almost identical way the as pattern B and C.

**Do this if you don't need page objects**.

### Page Module

```js
import * as navMenu from './navigationMenu';
import * as queryPage from './queryPage';

const bannerElement = 'body > .banner';

export function verifyElements() {
  cy.get(bannerElement).find('.container h1').should('be.visible');
  navMenu.verifyElements();
}

export function switchToQueryingPage() {
  navMenu.switchToQueryingPage();
  queryPage.verifyElements();
}
```

### Integration Test

```js
import * as mainPage from '../support/pageObjects-D/mainPage';

describe('Page "Object" Pattern - D', () => {
  context('Querying', () => {
    beforeEach(() => {
      cy.visit('https://example.cypress.io/')
        .get('body > .banner h1').should('be.visible');
      mainPage.verifyElements();
    });

    it('cy.get() - query DOM elements', () => {
      mainPage.switchToQueryingPage();
    });
  });
});
```

## Pattern E: Cypress commands (to be done)

In Pattern D we (will) show how to emulate page object pattern using cypress commands. **To be completed later, contributions welcome**.
