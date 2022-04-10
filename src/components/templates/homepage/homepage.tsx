import { Mission } from "../../atomic-ui/organisms/mission-small-card/mission-type";
import MissionList from "../../atomic-ui/organisms/mission-list/mission-list";

interface Props {
  missions: Mission[]
}

const HomepageTemplate = (props: Props) => {
  const { missions } = props;
  return (
    <div className="spacex-missions">
      <header>
        <div className="banner"></div>
        <h1>Recent Launches</h1>
      </header>
      <section className="missions-body">
        <MissionList missions={missions} />
      </section>
    </div>
  );
}

export default HomepageTemplate;