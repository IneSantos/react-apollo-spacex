import { Mission } from "../../atomic-ui/organisms/mission-card/mission-type";
import MissionPageTemplate from "../../templates/mission/missionpage";
import "./missionpage.css";

interface Props {
  mission: Mission
}

const MissionPage = (props: Props) => {
    const { mission } = props;
  return (
    <MissionPageTemplate mission={mission}/>
  );
}

export default MissionPage;