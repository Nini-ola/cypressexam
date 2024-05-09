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

When(/^I click the "([^"]*)"$/, (args1) => {
	cy.clickAction(args1);
});

When(/^I hover on the first product displayed$/, () => {
	cy.hoverMode()
});

Then(/^I should see the "([^"]*)"$/, (args1) => {
	cy.assertAction(args1)
});

When(/^I fill in the "([^"]*)"$/, (args1) => {
	cy.insertDetails(args1);
});