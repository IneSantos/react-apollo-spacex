import React from "react";
import { render } from "@testing-library/react";
import MisisonDetails from "./mission-details";

describe("MisisonDetails atom tests", () => {
  test(`MisisonDetails component render`, () => {
    const { container } = render(<MisisonDetails details="This is a detail" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
