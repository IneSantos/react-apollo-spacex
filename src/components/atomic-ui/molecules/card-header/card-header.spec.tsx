import React from "react";
import { render } from "@testing-library/react";
import CardHeader from "./card-header";

describe("CardHeader molecule tests", () => {
  test(`CardHeader component render`, () => {
    const { container } = render(<CardHeader name="This is a mission name"/>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
