import "./card-action.css";

interface Props {
  name: string;
  cssClass?: string;
  webURL?: string;
}

const CardAction = (props: Props) => {
  const { name, cssClass, webURL } = props;
  return (
    <a
      href={webURL}
      className={`card-action ${
        cssClass ? ` card-action-${cssClass}` : ""
      }`}
    >
      {" "}
      {name}{" "}
    </a>
  );
};

CardAction.defaultProps = {
  webLink: "",
};

export default CardAction;
