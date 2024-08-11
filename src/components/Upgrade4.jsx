export default function Upgrade4(props) {
  return (
    <button onClick={props.buyUpgrade4}>
      {getUpButtText("Dgrade", props.cost)}
    </button>
  );
}
