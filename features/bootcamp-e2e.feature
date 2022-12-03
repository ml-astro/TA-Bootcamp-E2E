Feature: Bootcamp E2E

  Scenario: Search bar

    Given I open the home page
    #And I close the promo banner if it appears
    When I enter the word "Windows" in the search bar
    And I click the search
    Then I see at least one item appears

  Scenario: Internet shop logo button

    Given I open the home page
    #And I close the promo banner if it appears
    When I open "Today's Best Deals" tab
    And I Click on the Internet shop logo
    Then I see that the main page opened