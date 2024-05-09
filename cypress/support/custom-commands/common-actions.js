const { faker } = require("@faker-js/faker")

let data

before(() => {
  cy.fixture('selectors').then(sel => {
    data = sel
  })
})

Cypress.Commands.add('clickElement', (element) => {
    cy.get(element).click()
})

Cypress.Commands.add('addDetails', (field, text) => {
    cy.get(`${field}`).fill(text)
})

Cypress.Commands.add('searchProduct', () => {
    cy.get(data.searchField).fill(data.searchWord)
})

Cypress.Commands.add('hoverMode', () => {
    cy.get(data.firstProduct).trigger('mouseover')
    cy.get(data.productAction).should('exist')
})

Cypress.Commands.add('insertDetails', (string) => {
    switch (string) {
        case 'firstname':
            cy.addDetails(data.firstname, 'Nini')
            break
        case 'lastname':
            cy.addDetails(data.lastname, 'Billion')
            break
        case 'email':
            cy.get(data.email).fill(faker.internet.email({provider: 'yopmail.com'}))
            break
        case 'telephone':
            cy.get(data.telephone).fill(faker.phone.number('+4480########'))
            break
        case 'password':
            cy.addDetails(data.password, 'Test12345@')
            break
        case 'confirm password':
            cy.addDetails(data.confirmPassword, 'Test12345@')
            break
        case 'address1':
            cy.addDetails(data.address1, '2, Ikeja road')
            break
        case 'city':
            cy.addDetails(data.city, 'Lagos')
            break
        case 'post code':
            cy.addDetails(data.postcode, 'LG2 1XY')
    }
})

Cypress.Commands.add('clickAction', (string) => {
    switch (string) {
        case 'Search':
            cy.contains('Search').should('be.visible').click()
            break
        case 'cart icon':
            cy.get(data.cartIcon).click({ force: true })
            break
        case 'cart checkout':
            cy.get(data.checkout).click({force: true})
            break
        case 'Store newsletter':
            cy.clickElement(data.newsletter)
            break
        case 'privacy':
            cy.clickElement(data.privacy)
            break
        case 'terms and conditions':
            cy.clickElement(data.tandc)
            break
        case 'continue':
            cy.clickElement(data.continue)
            break
        case 'Confirm Order':
            cy.clickElement(data.confirmOrder)
    }
})

Cypress.Commands.add('assertAction', (string) => {
    switch (string) {
        case 'Confirm Order page':
            cy.contains("Payment Address").should('be.visible')
            break
        case 'Order Placed page':
            cy.contains("Your order has been placed").should('be.visible')
    }
})
