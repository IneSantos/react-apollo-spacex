import React from "react";
import { render } from "@testing-library/react";
import Loader from "./loader";

describe("Loader atom tests", () => {
  test(`Loader component render`, () => {
    const { container } = render(<Loader />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
