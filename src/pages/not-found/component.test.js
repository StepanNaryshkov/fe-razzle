import React from "react";
import { render } from "@testing-library/react";
import { NotFound } from "./component";
import { BrowserRouter } from "react-router-dom";

describe("NotFound component", () => {
  let props;

  beforeEach(() => {
    props = {
      t: jest.fn(),
    };
  });

  test("should render", () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <NotFound {...props} />
      </BrowserRouter>
    );
    expect(getByTestId("not-found")).toBeTruthy();
  });
});
