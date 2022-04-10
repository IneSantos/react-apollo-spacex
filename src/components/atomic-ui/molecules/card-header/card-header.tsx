import MissionTitle from "../../atoms/mission-title/mission-ttile";
import "./card-header.css"

interface Props {
    name: string
}

const CardHeader = (props: Props) => {
    const { name } = props;
    return (
        <div className="card-header">
            <MissionTitle name={name}/>
        </div>
    );
}

export default CardHeader;