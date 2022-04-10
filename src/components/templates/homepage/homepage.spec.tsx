import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Mission } from "../../atomic-ui/organisms/mission-small-card/mission-type";
import HomepageTemplate from "./homepage";

describe("HomepageTemplate template tests", () => {
    test(`HomepageTemplate component render with no missions`, () => {
        const { container } = render(<HomepageTemplate missions={[]}/>);
        expect(container.firstChild).toMatchSnapshot();
    });

    test(`HomepageTemplate component render with missions`, () => {
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
                  <HomepageTemplate missions={missions}/>
            </Router>);
        expect(container.firstChild).toMatchSnapshot();
    });
});
