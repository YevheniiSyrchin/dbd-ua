import { useEffect, useState } from "react";
import RoulettePro from "react-roulette-pro";
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

// const Roulette: FC = () => {

//   const [selectedItem, setSelectedItem] = useState<
//     Killer | Survivor | KillerPerk | SurvivorPerk | null
//   >(null);

//   return (

//       {activeRoulette && <ArrowIndicator selectedItem={selectedItem} />}
//       {activeRoulette === "killers" && (
//         <div className="toCenter">
//           <div className="roulette">
//             {killers.length > 0 &&
//               killers.map((killer) => (
//                 <div
//                   key={killer.name}
//                   className="item font-Roboto font-white fz-small"
//                 >
//                   <img src={killer.killer_image} alt={killer.name} />
//                   <h3>{killer.name}</h3>
//                 </div>
//               ))}
//           </div>
//         </div>
//       )}
//       {activeRoulette === "survivors" && (
//         <div className="toCenter">
//           <div className="roulette">
//             {survivors.length > 0 &&
//               survivors.map((survivor) => (
//                 <div
//                   key={survivor.name}
//                   className="item font-Roboto font-white fz-small"
//                 >
//                   <img src={survivor.survivor_image} alt={survivor.name} />
//                   <h3>{survivor.name}</h3>
//                 </div>
//               ))}
//           </div>
//         </div>
//       )}
//       {activeRoulette === "killerPerks" && (
//         <div className="toCenter">
//           <div className="roulette">
//             {killersPerks.length > 0 &&
//               killersPerks.map((perk) => (
//                 <div
//                   key={perk.name}
//                   className="item font-Roboto font-white fz-small"
//                 >
//                   <img src={perk.perks_image} alt={perk.name} />
//                   <h3>{perk.name}</h3>
//                 </div>
//               ))}
//           </div>
//         </div>
//       )}
//       {activeRoulette === "survivorPerks" && (
//         <div className="toCenter">
//           <div className="roulette">
//             {survivorsPerks.length > 0 &&
//               survivorsPerks.map((perk) => (
//                 <div
//                   key={perk.name}
//                   className="item font-Roboto font-white fz-small"
//                 >
//                   <img src={perk.perks_image} alt={perk.name} />
//                   <h3>{perk.name}</h3>
//                 </div>
//               ))}
//           </div>
//         </div>
//       )}
//     </main>
//   );
// };

// export default Roulette;
