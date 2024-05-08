import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const { faker } = require("@faker-js/faker")

let data

before(() => {
  cy.fixture('selectors').then(sel => {
    data = sel
  })
})

Given(/^I search for product$/, () => {
	cy.searchProduct()
});

When(/^I click "([^"]*)" button$/, (element) => {
	cy.clickSpecifiedElement(element)
});

When(/^I hover on the first product displayed$/, () => {
	cy.hoverMode()
});

When(/^I click the cart icon$/, () => {
	cy.clickHiddenElement(data.cartIcon)
});

When(/^I click cart checkout$/, () => {
	cy.checkout()
});

When(/^I uncheck the Store newsletter$/, () => {
	cy.clickElement(data.newsletter)
});

When(/^I check the privacy$/, () => {
	cy.clickElement(data.privacy)
});

When(/^I check the terms and conditions$/, () => {
	cy.clickElement(data.tandc)
});

When(/^I click continue$/, () => {
	cy.clickElement(data.continue)
});

Then(/^I should see the Confirm Order page$/, () => {
	cy.assertPage("Payment Address");
});

When(/^I click Confirm Order$/, () => {
	cy.clickElement(data.confirmOrder)
});

Then(/^I should see the Order Placed page$/, () => {
	cy.assertPage("Your order has been placed")
});

When(/^I fill in the "([^"]*)"$/, (args1) => {
	cy.insertDetails(args1);
});