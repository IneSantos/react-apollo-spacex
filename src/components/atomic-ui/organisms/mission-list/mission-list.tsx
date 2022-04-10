import MissionSmallCard from "../mission-small-card/mission-small-card";
import { Mission } from "../mission-small-card/mission-type";
import "./mission-list.css";

interface Props {
    missions: Mission[]
}

const MissionList = (props: Props) => {
    const { missions } = props;

    const hasResults = missions.length > 0;
    return (
        <div className="mission-list">
            {missions.map((mission, index) => {
                const { id, name, date, details } = mission;
                
                return <MissionSmallCard key={`${id}-${index}`} id={id} name={name} date={date} details={details} />
            })}
            {!hasResults &&
                <div className="empty-list">
                    <h3>No results.</h3>
                    <span>Sorry we have no SpaceX Missions to show.</span>
                </div>
            }
        </div>
    )
}

export default MissionList;