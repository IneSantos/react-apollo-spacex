import "./mission-title.css"
interface Props {
    name: string
}

const MissionTitle = (props: Props) => {
  const { name } = props;
  return <h2 className="title">{name}</h2>;
}

export default MissionTitle;