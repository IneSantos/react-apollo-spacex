import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import MissionSmallCard from "./mission-small-card";

describe("MissionSmallCard organism tests", () => {
    test(`MissionSmallCard component render`, () => {
        const mission = {
            id: "0",
            name: "This is a mission name",
            details: "This is a mission detail",
            date: "2022/04/10"
        }
        const { container } = render(
            <Router>
                  <MissionSmallCard {...mission}/>
            </Router>
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
