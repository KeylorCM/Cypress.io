describe('Test E2E - Carrito de Compras', () => {
  it('passes', () => {
    cy.visit('https://demoblaze.com')
    cy.get(".active > img").should("be.visible")
  })

  it("Prueba E2E - Add 2 products and view cart ", () => {
    cy.visit('https://demoblaze.com')

    //select firts product
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    cy.get(".btn.btn-success.btn-lg").click()

    //return home page 
    cy.get("li[class='nav-item active'] a[class='nav-link']").click()
    cy.get('#narvbarx').should("be.visible")
    cy.scrollTo(0, 1200)
    cy.wait(500)

    //select secound product 
    cy.get("div.container:nth-child(6) div.row div.col-lg-9 div.row:nth-child(1) div.col-lg-4.col-md-6.mb-4:nth-child(4) div.card.h-100 div.card-block:nth-child(2) h4.card-title:nth-child(1) > a.hrefch").click()
    cy.get('.col-sm-12 > .btn').click()

    //view car
    cy.get('#cartur').click()
    cy.get('.table-responsive').should("be.visible")

    cy.get('.col-lg-1 > .btn').click()

    //llenar form
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-body > form').should("be.visible")
    cy.get('#name').type("Keylor")
    cy.get('#country').type("Costa Rica")
    cy.get('#city').type("Cartago")
    cy.get('#card').type("CR506202020")
    cy.get('#month').type("03")
    cy.get('#year').type("2023")

    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.wait(200)
    cy.screenshot()

    //Validation 
    cy.get('.sweet-alert > h2').should('have.text', 'Thank you for your purchase!')
    cy.get('.confirm').click()

  })

})