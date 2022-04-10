import React from "react";
import { render } from "@testing-library/react";
import LaunchDate from "./launch-date";

describe("LaunchDate atom tests", () => {
  test(`LaunchDate component render`, () => {
    const { container } = render(<LaunchDate date="2022/04/10" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
