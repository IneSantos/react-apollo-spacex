import { Mission } from "../../atomic-ui/organisms/mission-card/mission-type";
import CardAction from "../../atomic-ui/atoms/card-action/card-action";
import MissionCard from "../../atomic-ui/organisms/mission-card/mission-card";

interface Props {
    mission: Mission
}

const MissionPageTemplate = (props: Props) => {
    const { name, details, link, img } = props.mission;
  return (
    <div className="spacex-mission">
      <header>
        <CardAction name={"< Go to results page"} webURL={"/"} />
      </header>
      <section className="mission-body">
        <MissionCard name={name} details={details} link={link} img={img}/>
      </section>
    </div>
  );
}

export default MissionPageTemplate;