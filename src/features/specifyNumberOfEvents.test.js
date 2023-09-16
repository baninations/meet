/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { loadFeature, defineFeature } from "jest-cucumber";
import { render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn’t specified a number, 32 events are shown by default", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let eventList;
    given("the app is loaded on the events list page", () => {
      AppComponent = render(<App />);
    });

    when("doesn't specify any number of events to be shown", async () => {
      const AppDOM = AppComponent.container.firstChild;
      await waitFor(() => {
        eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList[0]).toBeTruthy();
      });
    });

    then(/^the app shows (\d+) events by default$/, (arg0) => {
      expect(eventList.length).toEqual(32);
    });
  });

  test("User can change the number of events displayed.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("the app is loaded on the events list page", async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList[0]).toBeTruthy();
      });
    });

    when("the user types a particular number in the input", async () => {
      const button = AppComponent.queryByTestId("numberOfEventsInput");

      await userEvent.type(button, "{backspace}{backspace}10");
    });

    then("the app displays that many events", () => {
      const AppDOM = AppComponent.container.firstChild;
      const eventList = within(AppDOM).queryAllByRole("listitem");
      expect(eventList.length).toEqual(10);
    });
  });
});
