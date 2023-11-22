import { useEffect, useState } from "react";
import "react-roulette-pro/dist/index.css";
import RouletteKillers from "./RouletteKillers";
import RouletteSurvivors from "./RouletteSurvivors";
import RouletteKillersPerks from "./RouletteKillersPerks";
import RouletteSurvivorsPerks from "./RouletteSurvivorsPerks";

const Roulette = () => {
  const [activeRoulette, setActiveRoulette] = useState("");
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(true);

  const handleRouletteChange = (roulette: string) => {
    setActiveRoulette(roulette);
  };
  useEffect(() => {
    setIsDescriptionVisible(activeRoulette === "");
  }, [activeRoulette]);

  return (
    <main className="accountContainer toCenter">
      <div className="roulette-buttons">
        <button
          className={`font-Roboto font-white fz-medium ${
            activeRoulette === "killers" ? "active" : ""
          }`}
          onClick={() => {
            handleRouletteChange("killers");
          }}
        >
          Killers
        </button>
        <button
          className={`font-Roboto font-white fz-medium ${
            activeRoulette === "survivors" ? "active" : ""
          }`}
          onClick={() => {
            handleRouletteChange("survivors");
          }}
        >
          Survivors
        </button>
        <button
          className={`font-Roboto font-white fz-medium ${
            activeRoulette === "killerPerks" ? "active" : ""
          }`}
          onClick={() => {
            handleRouletteChange("killerPerks");
          }}
        >
          Killer Perks
        </button>
        <button
          className={`font-Roboto font-white fz-medium ${
            activeRoulette === "survivorPerks" ? "active" : ""
          }`}
          onClick={() => {
            handleRouletteChange("survivorPerks");
          }}
        >
          Survivor Perks
        </button>
      </div>
      {isDescriptionVisible && (
        <div className="description font-Roboto font-white fz-medium">
          <p>
            Оберіть розділ рулетки та натисніть "Старт" щоб випробувати вдачу.
          </p>
        </div>
      )}
      {activeRoulette === "killers" && <RouletteKillers />}
      {activeRoulette === "survivors" && <RouletteSurvivors />}
      {activeRoulette === "killerPerks" && <RouletteKillersPerks />}
      {activeRoulette === "survivorPerks" && <RouletteSurvivorsPerks />}
    </main>
  );
};

export default Roulette;
