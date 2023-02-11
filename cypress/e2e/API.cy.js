describe('Test API - CRUD', () => {
  
  //GET ALL 
  it('GET - MainPage', () => {
    cy.request('GET', 'https://petstore.swagger.io/').then((response) => {
      expect(response).to.have.property('status', 200)
    })
  })

  //CREATE USER
  it('POST - Create user', () => {
    const userObject = {
      "id": 95,
      "username": "Keylor2",
      "firstName": "Calvo",
      "lastName": "Marin",
      "email": "krcm12@gmail.com",
      "password": "Ac3ss8u!",
      "phone": "+506 88090306",
      "userStatus": 0
    }
    cy.request('POST', 'https://petstore.swagger.io/v2/user' , userObject )
    .its('requestBody')//.should('include', {username: "Keylor2"})
  });


  it('GET - Read user created', () => {
    cy.request('GET', 'https://petstore.swagger.io/#/user/Keylor2').then((response) => {
      expect(response).to.have.property('status', 200)
    })
  })

  //PUT USER 
  it('PUT - update', () => {
    const userObject = {
      "id": 95,
      "username": "Luis",
      "firstName": "Calvo",
      "lastName": "Rivera",
      "email": "LUIS@gmail.com",
      "password": "Ac3ss8u!",
      "phone": "+506 88090306",
      "userStatus": 0
    }
    cy.request({method: 'PUT', url:'https://petstore.swagger.io/#/user/updateUser', 
    requestBody:userObject, failOnStatusCode: false } ).its('status').should('eq', 405)
    //.its('requestBody')

  });

  //VIEW USER UPDATE
  it('GET - Read user updated', () => {
    cy.request('GET', 'https://petstore.swagger.io/#/user/Luis').then((response) => {
      expect(response).to.have.property('status', 200)
    })
  })
  
  //DELETE USER 
  it("DELETE user", () => {
    cy.request("DELETE", "https://petstore.swagger.io/v2/user/Keylor2", {
      username: "Luis",
    }).then((response) => {
      // response.body is automatically serialized into JSON
      cy.log(response.requestBody)
      expect(response).to.have.property('status', 200);
    });
  });

});


















