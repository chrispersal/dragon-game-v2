import { useState, useEffect } from "react";
import Upgrade1 from "./components/Upgrade1";
import Upgrade2 from "./components/Upgrade2";
import Upgrade3 from "./components/Upgrade3";
import Upgrade4 from "./components/Upgrade4";
import Upgrade5 from "./components/Upgrade5";

export default function App() {
  const [points, setPoints] = useState(0);
  const [cps, setCps] = useState(1); // per second
  const upgrades = [
    { name: "Agrade", cost: 50, cpsUp: 1 },
    { name: "Bgrade", cost: 750, cpsUp: 5 },
    { name: "Cgrade", cost: 2000, cpsUp: 25 },
    { name: "Dgrade", cost: 15000, cpsUp: 100 },
    { name: "Egrade", cost: 50000, cpsUp: 500 },
  ];

  useEffect(() => {
    const myInterval = setInterval(function () {
      setPoints((current) => current + cps);
    }, 1000); // 1000 is milliseconds here

    return () => clearInterval(myInterval);
  }, [cps]);

  function clickPoints() {
    setPoints(points + 1);
  }

  function buyUpgrade(index) {
    const { cost, cpsUp } = upgrades[index];
    setPoints(points - cost);
    setCps(cps + cpsUp);
  }

  function getUpButtText(name, cost) {
    return `${name} - ${cost} pts`;
  }
  return (
    <div className="mainBody">
      <img
        src="src/assets/dragonlogotwo.png"
        width={400}
        height={140}
        alt="React Image"
      />
      <button onClick={clickPoints}>Score!</button>
      <p>You got {points} points.</p>
      {upgrades.map((upgrade, index) => (
        <div key={index}>
          <button className="upg" onClick={() => buyUpgrade(index)}>
            {getUpButtText(upgrade.name, upgrade.cost)}
          </button>
        </div>
      ))}
    </div>
  );
}
