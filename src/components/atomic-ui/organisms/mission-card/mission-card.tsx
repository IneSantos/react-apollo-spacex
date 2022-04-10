import CardBody from "../../molecules/card-body/card-body";
import CardHeader from "../../molecules/card-header/card-header";
import { Mission } from "./mission-type";
import "./mission-card.css";

const MissionCard = (props: Mission) => {
  const { name, details, link, img } = props;
  return (
      <div className="mission-card-wrapper">
        <img src={img} alt="Launch image"></img>
        <CardHeader name={name} />
        <CardBody details={details} link={link}/>
      </div>
  );
}

export default MissionCard;