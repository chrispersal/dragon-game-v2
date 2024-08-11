export default function Upgrade5(props) {
  return (
    <button onClick={props.buyUpgrade5}>
      {getUpButtText("Egrade", props.cost)}
    </button>
  );
}
