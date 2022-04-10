import { Link } from "react-router-dom";
import ListCardBody from "../../molecules/list-card-body/list-card-body";
import CardHeader from "../../molecules/card-header/card-header";
import { Mission } from "./mission-type";
import "./mission-small-card.css";

const MissionSmallCard = (props: Mission) => {
  const { id, name, details, date } = props;
  return (
    <Link to={`/mission/${id}`}  style={{ textDecoration: "none" }}>
      <div className="mission-wrapper">
        <CardHeader name={name} />
        <ListCardBody details={details} date={date} />
      </div>
    </Link>
  );
}

export default MissionSmallCard;