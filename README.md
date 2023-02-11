# Cypress.io - E2E automation

This repository has 2 tests developed with Cypress.io technology
One test is an E2E of a website and the other test is a CRUD to validate API responses.

You can found the projects in master branch

Option spec.cy.js

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


-------------------------------------------------------------------------------------------


# API Test Automation
Option API

Exercise:
The page https://petstore.swagger.io/ provides the documentation on apis of a "PetStore".
Using software for testing REST services, carry out the following tests, identifying the inputs, capturing the outputs, tests, variables, etc., in each of the following cases:

* Create a user
* Search for the created user
* Update the name and email of the user
* Find the updated user
* Delete the user


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
describe('Test API - CRUD', () => {
  
   //GET ALL
   it('GET - MainPage', () => {
     cy.request('GET', 'https://petstore.swagger.io/').then((response) => {
       expect(response).to.have.property('status', 200)
     })
   })
```

## Contributing

This is a practical exercise was created in order to be evaluated in a technical test.
Made by Keylor Calvo Marin


-2023-




## License


