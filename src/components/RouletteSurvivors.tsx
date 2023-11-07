import { useEffect, useState } from "react";
import RoulettePro from "react-roulette-pro";
import "react-roulette-pro/dist/index.css";
import survivors from "../arrays/survivors";

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

const reproducedSurvivorList: { image: string }[] = [
  ...survivors,
  ...reproductionArray(survivors, survivors.length * 4),
  ...survivors,
  ...reproductionArray(survivors, survivors.length),
];

const generateId = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;

const survivorsPrizeList = reproducedSurvivorList.map((prize) => ({
  ...prize,
  id:
    typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : generateId(),
}));

const survivorPrize = {
  getPrizeIndex: async () => {
    const randomPrizeIndex = getRandomIntInRange(0, survivors.length - 1);
    const randomPrizeIndexOffset = survivors.length * 3;

    return randomPrizeIndex + randomPrizeIndexOffset;
  },
};

const Roulette = () => {
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
    if (!spinning || !survivorsPrizeList.length) {
      return;
    }

    const prepare = async () => {
      const newPrizeIndex = await survivorPrize.getPrizeIndex();
      setPrizeIndex(newPrizeIndex);
      setStart(false);
    };

    prepare();
  }, [spinning, survivorsPrizeList]);

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
          prizes={survivorsPrizeList}
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

export default Roulette;
