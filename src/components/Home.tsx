import React, { FC } from "react";
import TwitchStreamEmbed from "./TwitchChannel";

const Home: FC = () => {
  return (
    <main className="home container toCenter">
      <div className="text">
        <h3 className="font-Roboto fz-medium">
          Ласкаво просимо на головну сторінку Discord-сервера Dead by Daylight
          Ukraine!
        </h3>
        <br />
        <p className="font-Roboto fz-medium">
          Приєднуйся до нас сьогодні, стань частиною нашої спільноти та відчуй
          всю атмосферу напруженого виживання та безжального переслідування в
          світі Dead by Daylight.
        </p>
      </div>
      <div className="streams"></div>
    </main>
  );
};

export default Home;
