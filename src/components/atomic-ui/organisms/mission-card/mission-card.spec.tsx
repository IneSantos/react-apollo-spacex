import React from "react";
import { render } from "@testing-library/react";
import MissionCard from "./mission-card";

describe("MissionCard organism tests", () => {
  test(`MissionCard component render`, () => {
    const { container } = render(<MissionCard name="This is a mission name" details="This is a mission detail" link="" img=""/>);
    expect(container.firstChild).toMatchSnapshot();
  });
});
