# Cypress.io - E2E automation
Option 1

Exercise:
Perform an automated functional test (E2E Test) of a purchase flow on the page https://www.demoblaze.com/

The test consisted of:

* Add two products to cart
* View the cart
* Complete the purchase form
* Checkout

Automated E2E test to validate the operation of the website www.demoblaze.com

## Installation

Use the official Cypress documentation [cypress.io](https://https://cypress.io/) to encourage and achieve the best use of the tool.


```bash
$ npm install cypress -D

```
If you want to create a project from scratch, run the following commands:
```bash
$ mkdir project-name && cd project-name

$ npm init -y

$ npm install cypress –D

$ npm run cy:open
```

## Usage

Recommendation to use the Visual Studio Code IDE to run the tests, after unzipping the .zip file in a strategic location in our archive directory we will use the terminal to execute the start commands and have visibility of the .js tests

```
describe('E2E Test - Shopping Cart', () => {
   it('passes', () => {
     cy.visit('https://demoblaze.com')
     cy.get(".active > img").should("be.visible")
   })
```
## Contributing

This is a practical exercise was created in order to be evaluated in a technical test.
Made by Keylor Calvo Marin

-2023-

## License
