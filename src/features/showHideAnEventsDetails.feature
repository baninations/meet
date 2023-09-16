Feature: Show/hide events details
    Scenario: An event element is collapsed by default.
        Given the event element is collapsed
        When the user toggles the show button
        Then the event should be displayed

    Scenario: User can expand an event to see its details
        Given that there are events with an expand feature to see the details
        When the user interacts with the button
        Then the event's details expands

    Scenario: User can collapse an event to hide its details
        Given the event list is loaded
        When the user interacts with the button
        Then the details of the event gets hidden