describe('Checkout Sauce Demo', ()=>{

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.url().should('include', '/inventory.html')
    })

    it('Completar checkout con datos validos', ()=>{
        //cy.checkout ('Test 13')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="checkout"]').click()

        cy.get('[data-test="firstName"]').type('Juan')
        cy.get('[data-test="lastName"]').type('Perez')
        cy.get('[data-test="postalCode"]').type('5000')

        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="finish"]').click()
        cy.get('[data-test="complete-header"]')
            .should('have.text', 'Thank you for your order!')
    })

    it('Checkout sin completar datos', ()=>{
        //cy.checkout ('test 14')
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.get('[data-test="checkout"]').click()

    cy.get('[data-test="lastName"]').type('Perez')
    cy.get('[data-test="postalCode"]').type('1234')

    cy.get('[data-test="continue"]').click()

    cy.get('[data-test="error"]')
        .should('contain', 'Error: First Name is required')

    })

})