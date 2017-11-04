# Cypress Page Object Pattern Example

This repo is a test/deomstration of the Page Object Pattern (reference needed) for e2e testing using [Cypress](https://www.cypress.io/).

*Disclamer: I am a JS developer not an experenced e2e tester and new to Cypress myself.. so take it for what it is.*

# (Anti-)Patterns

## [Pattern A: The anti-pattern](cypress/integration/po-pattern-a.js)

Pattern A is an anti-pattern.  When navigating from page to page within a single test flow, new page instances are created from page classs each time.  This breaks the Cypress' internal async queuing and necessitates excessive use of `.then`s and/or callbacks.  **Do not do this!**

## [Pattern B: page classes](cypress/integration/po-pattern-a.js)

In Pattern B we keep the page class definitions, which may be usefull for inheritance, but each page class module exports a single page object instance of the class.  These instances can be used throughout the testing and within other classes.  **Do this if you must have page classes and inheritance**.

## [Pattern C: page objects](cypress/integration/po-pattern-a.js)

In Pattern C we eliminate classes entirely.  Instead each page module creates and exports single page object instance. These instances are used in the same way as pattern B.  **Do this if you don't need page classes and inheritance**.

## Pattern D: Cypress commands (to be done)

In Pattern D we (will) show how to emulate page object pattern using cypress commands. **To be completed later, contibutions welcome**.
