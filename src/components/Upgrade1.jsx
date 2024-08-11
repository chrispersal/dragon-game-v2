export default function Upgrade1(props) {
  return (
    <button onClick={props.buyUpgrade1}>
      {getUpButtText("Agrade", props.cost)}
    </button>
  );
}
