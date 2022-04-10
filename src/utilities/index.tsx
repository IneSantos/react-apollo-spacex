import { Mission } from "../components/atomic-ui/organisms/mission-small-card/mission-type";
import { Mission as MissionCard } from "../components/atomic-ui/organisms/mission-card/mission-type";
import { Launch, Launches } from "./utils-types";

export const getPastMissions = (launches: Launches[]): Mission[] => {
    return launches.map((launch) => ({
        id: launch.id,
        name: launch.mission_name,
        date: launch.launch_date_local,
        details: launch.details || ""
    }))
}


export const getMission = (launch: Launch): MissionCard => {
    const img = launch.links.flickr_images.length > 0 ? launch.links.flickr_images[0] : (launch.ships.length > 0 ? launch.ships[0].image : "");

    return {
        name: launch.mission_name,
        link: launch.links.article_link || launch.links.video_link || "",
        details: launch.details || "",
        img
    }
}

export const formattedDate = (date: string) => {
    const d = new Date(date);
    const day = d.getDate();
    const year = d.getFullYear();

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];
    const monthName = months[d.getMonth()];

    return `${monthName} ${day}, ${year}`
}