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



-Español--------------------------------------------------------------

# Automatizacion API Test
Opcion API

Ejercicio: 
La pagina https://petstore.swagger.io/ proporciona la documentacion sobre apis de una "PetStore".
Utilizando un software para pruebas de servicios REST realizar las siguientes pruebas, identificando las entradas, capturando las salidas,test, variables, etc, en cada uno de los siguientes casos:

* Crear un usuario
* Buscar el usuario creado
* Actualizar el nombre y el correo del usuario 
* Buscar el usuario actualizado
* Eliminar el usuario 


## Installation

Use la documentacion ofical de Cypress [cypress.io](https://https://cypress.io/) para instar y alcanzar el mayor aprovechamiento de la herramienta.


```bash
$ npm install cypress -D

```
Si quieres crear un proyecto desde cero, ejecuta los siguientes comandos:
```bash
$ mkdir nombre-del-proycto && cd nombre-del-proyecto

$ npm init -y

$ npm install cypress –D

$ npm run cy:open
```


## Usage

Recomendacion utilizar el IDE de Visual Studio Code para correr los test, luego de descomprimir el archivo .zip en una ubicacion estrategica de nuestro directorio de archivamos vamos a utilizar la terminal para ejecutar los comandos de inicio y tener visibilidad de las pruebas .js

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

Este es un ejercicio practico fue creado con el fin de ser evaluado en una prueba tecnica.
Realizado por Keylor Calvo Marin


-2023-

## License
