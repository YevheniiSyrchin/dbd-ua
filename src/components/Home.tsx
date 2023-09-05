import React, { FC, Suspense } from "react";
import TwitchStreamEmbed from "./TwitchChannel";
import TwitchTest from "./TwitchTest";

const Home: FC = () => {
  return (
    <main className="home container toCenter">
      <div className="text">
        <h3 className="font-Roboto font-white fz-medium">
          Ласкаво просимо на головну сторінку Discord-сервера Dead by Daylight
          Ukraine!
        </h3>
        <br />
        <p className="font-Roboto font-white fz-medium">
          Приєднуйся до нас сьогодні, стань частиною нашої спільноти та відчуй
          всю атмосферу напруженого виживання та безжального переслідування в
          світі Dead by Daylight.
        </p>
      </div>
      <div className="streams">
        <TwitchTest />
      </div>
    </main>
  );
};

export default Home;
