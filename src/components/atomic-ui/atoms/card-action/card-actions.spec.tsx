import React from "react";
import { render } from "@testing-library/react";
import CardAction from "./card-action";

describe("CardAction atom tests", () => {
  test(`CardAction component render`, () => {
    const { container } = render(<CardAction name="CARD ACTION" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
