const { faker } = require("@faker-js/faker")

let data

before(() => {
  cy.fixture('selectors').then(sel => {
    data = sel
  })
})

Cypress.Commands.add('clickSpecifiedElement', (element) => {
    cy.contains(element).should('be.visible').click()
})

Cypress.Commands.add('assertPage', (element) => {
    cy.contains(element).should('be.visible')
})

Cypress.Commands.add('clickElement', (element) => {
    cy.get(element).click()
})

Cypress.Commands.add('checkout', () => {
    cy.get(data.checkout).click({force: true})
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

Cypress.Commands.add('clickHiddenElement', (element) => {
    cy.get(element).click({ force: true })
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
