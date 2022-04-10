import React from "react";
import { render } from "@testing-library/react";
import { Mission } from "../../atomic-ui/organisms/mission-card/mission-type";
import MissionPage from "./missionpage";

describe("MissionPage page tests", () => {
    test(`MissionPage component render`, () => {
        const mission: Mission= {
            name: "This is a mission name",
            details: "This is a mission detail",
            link: "",
            img: ""
        }
        const { container } = render(
                  <MissionPage mission={mission}/>
        );
        expect(container.firstChild).toMatchSnapshot();
    });
});
