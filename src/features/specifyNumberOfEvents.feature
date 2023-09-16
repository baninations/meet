Feature: Specify number of events
    Scenario: When user hasn’t specified a number, 32 events are shown by default
        Given the app is loaded on the events list page
        When doesn't specify any number of events to be shown
        Then  the app shows 32 events by default
    Scenario:  User can change the number of events displayed.
        Given the app is loaded on the events list page
        When the user types a particular number in the input
        Then  the app displays that many events