export default function Upgrade3(props) {
  return (
    <button onClick={props.buyUpgrade3}>
      {getUpButtText("Cgrade", props.cost)}
    </button>
  );
}
