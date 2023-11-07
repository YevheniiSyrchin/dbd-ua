import { useEffect, useState } from "react";
import RoulettePro from "react-roulette-pro";
import "react-roulette-pro/dist/index.css";
import killers from "../arrays/killers";

const getRandomIntInRange = (min = 0, max = 100) => {
  const minNumber = Math.ceil(min);
  const maxNumber = Math.floor(max);

  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
};

const reproductionArray = (array: { image: string }[], length: number) => [
  ...Array(length)
    .fill("_")
    .map(() => array[Math.floor(Math.random() * array.length)]),
];

const reproducedKillerList: { image: string }[] = [
  ...killers,
  ...reproductionArray(killers, killers.length * 4),
  ...killers,
  ...reproductionArray(killers, killers.length),
];

const generateId = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;

const killersPrizeList = reproducedKillerList.map((prize) => ({
  ...prize,
  id:
    typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : generateId(),
}));

const killerPrize = {
  getPrizeIndex: async () => {
    const randomPrizeIndex = getRandomIntInRange(0, killers.length - 1);
    const randomPrizeIndexOffset = killers.length * 3;

    return randomPrizeIndex + randomPrizeIndexOffset;
  },
};

const RouletteKillers = () => {
  const [start, setStart] = useState(false);
  const [spinning, setSpinning] = useState(false);
  const [prizeIndex, setPrizeIndex] = useState(0);

  useEffect(() => {
    if (!prizeIndex || start) {
      return;
    }

    setStart(true);
  }, [prizeIndex, start]);

  useEffect(() => {
    if (!spinning || !killersPrizeList.length) {
      return;
    }

    const prepare = async () => {
      const newPrizeIndex = await killerPrize.getPrizeIndex();
      setPrizeIndex(newPrizeIndex);
      setStart(false);
    };

    prepare();
  }, [spinning, killersPrizeList]);

  const handleStart = () => {
    setSpinning(true);
  };

  const handlePrizeDefined = () => {
    setSpinning(false);
  };

  return (
    <main>
      <div className="roulette">
        <RoulettePro
          type={"horizontal"}
          prizes={killersPrizeList}
          start={start}
          prizeIndex={prizeIndex}
          onPrizeDefined={handlePrizeDefined}
          spinningTime={3}
          classes={{
            wrapper: "roulette-pro-wrapper-additional-styles",
          }}
          options={{ stopInCenter: false, withoutAnimation: false }}
          defaultDesignOptions={{
            prizesWithText: true,
            hideCenterDelimiter: false,
          }}
        />
        <div className="toCenter">
          <button className="button-spin" onClick={handleStart}>
            СТАРТ
          </button>
        </div>
      </div>
    </main>
  );
};

export default RouletteKillers;
