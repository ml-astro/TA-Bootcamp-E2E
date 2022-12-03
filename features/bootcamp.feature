Feature: Bootcamp E2E

Background: I'm on the home page
    Given I open the home page

  Scenario: Search bar

    When I enter the word "Windows" in the search bar
    And I click the search
    Then I see at least one item appears

  Scenario: Internet shop logo button

    When I open Today's Best Deals tab
    And I Click on the Internet shop logo
    Then I see that the main page opened