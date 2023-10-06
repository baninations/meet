# Meet App

Meet is a serverless, progressive web application (PWA) built with React. It includes data visualization using a test-driven development (TDD) technique and leverages the Google Calendar API to fetch upcoming events.

## Use of Serverless on the Meet App

Serverless is used to authenticate users, allowing them to view events in their cities. The serverless function handles the entire authentication process, from requesting the Auth URL to obtaining the access token. This enables users to access event data from the Google Calendar API seamlessly.

## Overview

Meet is a serverless, progressive web application (PWA) built with React. It includes data visualization using a test-driven development (TDD) technique and leverages the Google Calendar API to fetch upcoming events.
You can use it to get events in a city near you.

## Live
- https://baninations.github.io/meet

## Technlogies used
- Javascript
- Test driven development
- Serverless functions
- Unit testing
- Integration testing
- User acceptance
- End to end testing
- CI/CD
- Progressive web applications(PWA)
- Data Visualization
- AWS
- Calender API
- OAuth 2

## Key Features

- Filter Events by City.
- Show/Hide Event Details.
- Specify the Number of Events.
- Offline Usage Support.
- Add App Shortcut to the Home Screen.
- Display Charts Visualizing Event Details.

## How to install

- Clone the repository: git clone https://github.com/baninations/meet.git
- Navigate to the project directory using the CLI or Terminal: cd meet
- Install dependencies: npm install
- Develop and run the project: npm start

## User Stories

- As a user, I would like to be able to filter events by city so that I can see the list of events that take place in that city.
- As a user, I would like to be able to show/hide event details so that I can see more/less information about an event.
- As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.
- As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.
- As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.
- As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.

## Scenarios

### Feature 1: Filter Events By City

**Scenario 1:** When the user hasn’t searched for a city, show upcoming events from all cities.

**Scenario 2:** User should see a list of suggestions when they search for a city.

**Scenario 3:** User can select a city from the suggested list.

### Feature 2: Show/Hide Event Details

**Scenario 1:** An event element is collapsed by default.

**Scenario 2:** User can expand an event to see details.

**Scenario 3:** User can collapse an event to hide details.

### Feature 3: Specify Number of Events

**Scenario 1:** When the user hasn’t specified a number, 32 events are shown by default.

**Scenario 2:** User can change the number of events displayed.

### Feature 4: Use the App When Offline

**Scenario 1:** Show cached data when there’s no internet connection.

**Scenario 2:** Show an error when the user changes search settings (city, number of events).

### Feature 5: Add an App Shortcut to the Home Screen

**Scenario 1:** User can install the meet app as a shortcut on their device home screen.

### Feature 6: Display Charts Visualizing Event Details

**Scenario 1:** Show a chart with the number of upcoming events in each city.
