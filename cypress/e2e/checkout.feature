Feature: Checkout Journey and Scenario

As a new user, I should be able to search for a product, go to cart, checkout and fill in details 

Scenario: Successfully select a product and checkout
Given I search for product
When I click the "Search"
And I hover on the first product displayed
And I click the "cart icon"
And I click the "cart checkout"
And I fill in the "firstname"
And I fill in the "lastname"
And I fill in the "email"
And I fill in the "telephone"
And I fill in the "password"
And I fill in the "confirm password"
And I fill in the "address1"
And I fill in the "city"
And I fill in the "post code"
And I click the "Store newsletter"
And I click the "privacy"
And I click the "terms and conditions"
And I click the "continue"
Then I should see the "Confirm Order page"
When I click the "Confirm Order"
Then I should see the "Order Placed page"
