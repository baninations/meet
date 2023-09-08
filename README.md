# Meet App

Meet is a serverless, progressive web application (PWA) with React, including data visualization using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

# Use of serverless on the Meet App
We will use serverless to authenticate users so that they can view events in their cities.
The serverless function will request the Auth URL and then the consent screen will be returned when the user grants consent an authorzation code will be returned to the serverless function then the function will request an access token with the correct autorization code, then the Access token will be granted back to the function so the function can carry out the user's request to get the events from google calender api.

## Key Features

- Filter Events by City.
- Show/Hide Event Details.
- Specify Number of Events.
- Use the App When Offline.
- Add an App Shortcut to the Home Screen.
- Display Charts Visualizing Event Details.

## User Stories

- As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.
- As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.
- As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
- As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.
- As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.
- As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

## Scenarios

### Feature 1: Filter Events By City

#### Scenario 1
- When the user hasn’t searched for a city, show upcoming events from all cities.

#### Scenario 2
- User should see a list of suggestions when they search for a city.

#### Scenario 3
- User can select a city from the suggested list.

### Feature 2: Show/Hide Event Details

#### Scenario 1
- An event element is collapsed by default.

#### Scenario 2
- User can expand an event to see details.

#### Scenario 3
- User can collapse an event to hide details.

### Feature 3: Specify Number of Events

#### Scenario 1
- When the user hasn’t specified a number, 32 events are shown by default.

#### Scenario 2
- User can change the number of events displayed.

### Feature 4: Use the App When Offline

#### Scenario 1
- Show cached data when there’s no internet connection.

#### Scenario 2
- Show an error when the user changes search settings (city, number of events).

### Feature 5: Add an App Shortcut to the Home Screen

#### Scenario 1
- User can install the meet app as a shortcut on their device home screen.

### Feature 6: Display Charts Visualizing Event Details

#### Scenario 1
- Show a chart with the number of upcoming events in each city.
