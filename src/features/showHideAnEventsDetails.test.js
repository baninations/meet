/* eslint-disable testing-library/prefer-screen-queries */
/* eslint-disable testing-library/no-node-access */
import { loadFeature, defineFeature } from "jest-cucumber";
import { render, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  test("An event element is collapsed by default.", ({ given, when, then }) => {
    let AppComponent;
    given("the event element is collapsed", () => {
      AppComponent = render(<App />);
    });

    when("the user toggles the show button", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });

    then("the event should be displayed", () => {
      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector(".details");
      expect(details).not.toBeInTheDocument();
    });
  });

  test("User can expand an event to see its details", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given(
      "that there are events with an expand feature to see the details",
      async () => {
        AppComponent = render(<App />);
        const AppDOM = AppComponent.container.firstChild;

        await waitFor(() => {
          const eventList = within(AppDOM).queryAllByRole("listitem");
          expect(eventList[0]).toBeTruthy();
        });
      }
    );

    when("the user interacts with the button", async () => {
      const button = AppComponent.queryAllByText("Show Details")[0];

      await userEvent.click(button);
    });

    then("the event's details expands", () => {
      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector(".details");
      expect(details).toBeInTheDocument();
    });
  });

  test("User can collapse an event to hide its details", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let button;
    given("the event list is loaded", async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;

      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList[0]).toBeTruthy();
      });

      button = AppComponent.queryAllByText("Show Details")[0];
      await userEvent.click(button);

      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector(".details");
      expect(details).toBeInTheDocument();
    });

    when("the user interacts with the button", async () => {
      await userEvent.click(button);
    });

    then("the details of the event gets hidden", () => {
      const EventDOM = AppComponent.container.firstChild;
      const details = EventDOM.querySelector(".details");
      expect(details).not.toBeInTheDocument();
    });
  });
});
