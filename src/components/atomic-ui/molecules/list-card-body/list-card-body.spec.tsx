import React from "react";
import { render } from "@testing-library/react";
import ListCardBody from "./list-card-body";

describe("ListCardBody molecule tests", () => {
  test(`ListCardBody component render`, () => {
    const { container } = render(<ListCardBody details="This is a mission detail" date="2022/04/10"/>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
