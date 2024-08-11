export default function Upgrade2(props) {
  return (
    <button onClick={props.buyUpgrade2}>
      {getUpButtText("Bgrade", props.cost)}
    </button>
  );
}
