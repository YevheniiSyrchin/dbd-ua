import { useEffect, useState } from "react";
import RoulettePro from "react-roulette-pro";
import "react-roulette-pro/dist/index.css";
import survivorsPerks from "../arrays/survivorsPerks";

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

const reproducedSurvivorsPerksList: { image: string }[] = [
  ...survivorsPerks,
  ...reproductionArray(survivorsPerks, survivorsPerks.length * 1),
  ...survivorsPerks,
  ...reproductionArray(survivorsPerks, survivorsPerks.length),
];

const generateId = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;

const survivorsPerksPrizeList = reproducedSurvivorsPerksList.map((prize) => ({
  ...prize,
  id:
    typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : generateId(),
}));

const survivorPerksPrize = {
  getPrizeIndex: async () => {
    const randomPrizeIndex = getRandomIntInRange(0, survivorsPerks.length - 1);
    const randomPrizeIndexOffset = survivorsPerks.length * 1;

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
    if (!spinning || !survivorsPerksPrizeList.length) {
      return;
    }

    const prepare = async () => {
      const newPrizeIndex = await survivorPerksPrize.getPrizeIndex();
      setPrizeIndex(newPrizeIndex);
      setStart(false);
    };

    prepare();
  }, [spinning, survivorsPerksPrizeList]);

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
          prizes={survivorsPerksPrizeList}
          start={start}
          prizeIndex={prizeIndex}
          onPrizeDefined={handlePrizeDefined}
          spinningTime={5}
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
