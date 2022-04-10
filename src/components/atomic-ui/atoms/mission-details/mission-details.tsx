import "./mission-details.css"

interface Props {
  details: string
}

const MisisonDetails = (props: Props) => {
  const { details } = props;
  return <div className="details">{details}</div>
}

export default MisisonDetails;