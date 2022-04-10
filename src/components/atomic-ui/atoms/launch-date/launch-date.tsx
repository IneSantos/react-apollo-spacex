import { formattedDate } from "../../../../utilities";
import "./launch-date.css"

interface Props {
  date: string
}

const LaunchDate = (props: Props) => {
  const { date } = props;
  return <div className="launch-date">{formattedDate(date)}</div>
}

export default LaunchDate;