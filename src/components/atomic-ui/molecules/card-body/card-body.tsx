import CardAction from "../../atoms/card-action/card-action";
import MisisonDetails from "../../atoms/mission-details/mission-details";
import "./card-body.css"

interface Props {
    details: string, 
    link: string
}

const CardBody = (props: Props) => {
    const { details, link } = props;
    return (
        <div className="card-body">
            <MisisonDetails details={details} />
            <CardAction name={"See more"} webURL={link} />
        </div>
    );
}

export default CardBody;