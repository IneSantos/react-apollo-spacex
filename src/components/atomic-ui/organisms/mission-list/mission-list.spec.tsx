import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { Mission } from "../mission-small-card/mission-type";
import MissionList from "./mission-list";

describe("MissionCard organism tests", () => {
    test(`MissionCard component render with no missions`, () => {
        const { container } = render(<MissionList missions={[]}/>);
        expect(container.firstChild).toMatchSnapshot();
    });

    test(`MissionCard component render with missions`, () => {
        const missions: Mission[] = [
            {
                id: "0",
                name: "This is a mission name",
                details: "This is a mission detail",
                date: "2022/04/10"
            },
            {
                id: "1",
                name: "This is another mission name",
                details: "This is another mission detail",
                date: "2022/04/11"
            }
        ];

        const { container } = render(
            <Router>
                  <MissionList missions={missions}/>
            </Router>
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
