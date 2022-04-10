import LaunchDate from "../../atoms/launch-date/launch-date";
import MisisonDetails from "../../atoms/mission-details/mission-details";
import "./list-card-body.css"

interface Props {
    details: string, 
    date: string
}

const ListCardBody = (props: Props) => {
    const { details, date } = props;
    return (
        <div className="list-card-body">
            <MisisonDetails details={details} />
            <LaunchDate date={date} />
        </div>
    );
}

export default ListCardBody;