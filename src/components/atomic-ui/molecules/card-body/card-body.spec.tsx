import React from "react";
import { render } from "@testing-library/react";
import CardBody from "./card-body";

describe("CardBody molecule tests", () => {
  test(`CardBody component render`, () => {
    const { container } = render(<CardBody details="This is a detail" link="This is a link"/>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
