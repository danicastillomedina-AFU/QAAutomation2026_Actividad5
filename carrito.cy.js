// Carrito.cy.js

describe('Carrito Sauce Demo', ()=>{

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/')

        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
        cy.url().should('include', '/inventory.html')
    })

    it('Agregar producto al carrito', ()=>{
     //cy.Car('test 10')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-badge"]')
            .should('have.text', '1')

        cy.get('[data-test="shopping-cart-link"]').click()
        cy.get('[data-test="inventory-item-name"]')
            .should('contain', 'Sauce Labs Backpack')
    })

    it('Agregar multiples productos y verificar contador', () => {
        //cy.Car('Test 11')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()

        cy.get('[data-test="shopping-cart-badge"]')
            .should('be.visible')
            .and('have.text', '3')       
    })

    it('Eliminar un producto desde la pagina del carrito', () => {
        //cy.Car('Test 12')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.contains('Sauce Labs Backpack')
        .should('be.visible')

        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.contains('Sauce Labs Backpack')
        .should('not.exist')

        cy.get('[data-test="shopping-cart-badge"]')
        .should('not.exist')
    })
    
})