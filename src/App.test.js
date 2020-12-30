import React from "react";
import { Provider } from "react-redux";
import { fireEvent, render } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { App, mapStateToProps, mapDispatchToProps } from "./App";
import { Router } from "react-router-dom";
import history from "./routes/history";
import initialUserState from "./redux/stores/user";

const mockStore = configureStore([]);
const store = mockStore(initialUserState);

const buildComponent = (props) =>
  render(
    <Provider store={store}>
      <Router history={history}>
        <App {...props} />
      </Router>
    </Provider>
  );

describe("<App />", () => {
  let props;
  const toggleNotificationSpy = jest.fn();

  beforeEach(() => {
    props = {
      toggleNotification: toggleNotificationSpy,
      notification: {
        isOpened: true,
        type: "error",
      },
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should toggleNotification be called", () => {
    const { container } = buildComponent(props);
    const closeBtn = container.querySelector(
      "button[data-testid='close-notification']"
    );
    fireEvent.click(closeBtn);
    expect(toggleNotificationSpy).toHaveBeenCalledWith({ isOpened: false });
  });

  test("should correct map state to props", () => {
    const state = {
      notification: {},
    };
    expect(mapStateToProps(state)).toMatchObject(state);
  });

  test("dispatch should be called", () => {
    const dispatch = jest.fn();
    
    mapDispatchToProps(dispatch).toggleNotification();
    expect(dispatch).toHaveBeenCalledTimes(1);
  });
});
