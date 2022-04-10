import React from "react";
import { render } from "@testing-library/react";
import MissionTitle from "./mission-ttile";

describe("MissionTitle atom tests", () => {
  test(`MissionTitle component render`, () => {
    const { container } = render(<MissionTitle name="This is a mission name" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
