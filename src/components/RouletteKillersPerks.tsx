import { useEffect, useState } from "react";
import RoulettePro from "react-roulette-pro";
import "react-roulette-pro/dist/index.css";
import killersPerks from "../arrays/killersPerks";

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

const reproducedKillerPerksList: { image: string }[] = [
  ...killersPerks,
  ...reproductionArray(killersPerks, killersPerks.length * 1),
  ...killersPerks,
  ...reproductionArray(killersPerks, killersPerks.length),
];

const generateId = () =>
  `${Date.now().toString(36)}-${Math.random().toString(36).substring(2)}`;

const killersPerksPrizeList = reproducedKillerPerksList.map((prize) => ({
  ...prize,
  id:
    typeof crypto.randomUUID === "function"
      ? crypto.randomUUID()
      : generateId(),
}));

const killerPerksPrize = {
  getPrizeIndex: async () => {
    const randomPrizeIndex = getRandomIntInRange(0, killersPerks.length - 1);
    const randomPrizeIndexOffset = killersPerks.length * 1;

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
    if (!spinning || !killersPerksPrizeList.length) {
      return;
    }

    const prepare = async () => {
      const newPrizeIndex = await killerPerksPrize.getPrizeIndex();
      setPrizeIndex(newPrizeIndex);
      setStart(false);
    };

    prepare();
  }, [spinning, killersPerksPrizeList]);

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
          prizes={killersPerksPrizeList}
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
