import { Mission } from "../../atomic-ui/organisms/mission-small-card/mission-type";
import HomepageTemplate from "../../templates/homepage/homepage";
import "./homepage.css";

interface Props {
  missions: Mission[]
}

const Homepage = (props: Props) => {
  const { missions } = props;
  return (
    <HomepageTemplate missions={missions}/>
  );
}

export default Homepage;