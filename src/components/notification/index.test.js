import React from "react";
import { render } from "@testing-library/react";
import { Notification } from "./component";

const buildComponent = (props) => render(<Notification {...props} />);

describe("Notification component", () => {
  let props;
  const onCloseSpy = jest.fn();

  beforeEach(() => {
    props = {
      isOpened: false,
      onClose: onCloseSpy,
      message: "message",
      children: <span>Test</span>,
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("should render", () => {
    const { findByText } = buildComponent(props);
    expect(findByText("message")).toBeTruthy();
  });
});
