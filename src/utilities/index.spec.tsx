import { Mission } from "../components/atomic-ui/organisms/mission-small-card/mission-type";
import { Mission as MissionCard } from "../components/atomic-ui/organisms/mission-card/mission-type";
import { Launches, Launch } from "./utils-types";
import { getPastMissions, getMission, formattedDate } from "./index";


describe("Utilities tests", () => {
    test(`getPastMissions returns array with correct keys`, () => {
        const launches: Launches[] = [
            {
                id: "0",
                mission_name: "This is a mission name",
                details: "This is a mission detail",
                launch_date_local: "2020-10-24T11:31:00-04:00"
            }
        ]
        const missions: Mission[] = [
            {
                id: "0",
                name: "This is a mission name",
                details: "This is a mission detail",
                date: "2020-10-24T11:31:00-04:00"
            }
        ];

        const res = getPastMissions(launches);
        expect(res).toStrictEqual(missions);
    });

    test(`getMission returns array with correct keys with nulls`, () => {
        const launch: Launch = {
                id: "0",
                mission_name: "This is a mission name",
                details: "This is a mission detail",
                links: {
                    article_link: null,
                    flickr_images: [],
                    video_link: null
                },
                ships: []
            };

        const mission: MissionCard = {
                name: "This is a mission name",
                details: "This is a mission detail",
                link: "",
                img: ""
            };

        const res = getMission(launch);
        expect(res).toStrictEqual(mission);
    });

    test(`getMission returns array with correct keys with aritcle and flicker images`, () => {
        const launch: Launch = {
                id: "0",
                mission_name: "This is a mission name",
                details: "This is a mission detail",
                links: {
                    article_link: "article link",
                    flickr_images: ["flickr image"],
                    video_link: null
                },
                ships: []
            };

        const mission: MissionCard = {
                name: "This is a mission name",
                details: "This is a mission detail",
                link: "article link",
                img: "flickr image"
            };

        const res = getMission(launch);
        expect(res).toStrictEqual(mission);
    });

    test(`getMission returns array with correct keys with video link and ships images`, () => {
        const launch: Launch = {
                id: "0",
                mission_name: "This is a mission name",
                details: "This is a mission detail",
                links: {
                    article_link: null,
                    flickr_images: [],
                    video_link: "video link"
                },
                ships: [{
                    id: "0",
                    image: "ship image"
                }]
            };

        const mission: MissionCard = {
                name: "This is a mission name",
                details: "This is a mission detail",
                link: "video link",
                img: "ship image"
            };

        const res = getMission(launch);
        expect(res).toStrictEqual(mission);
    });

    test(`formattedDate returns date formatted`, () => {
        const res = formattedDate("2020-10-24T11:31:00-04:00");
        expect(res).toStrictEqual("October 24, 2020");
    });
});
