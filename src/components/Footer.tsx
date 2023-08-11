import React, { FC } from "react";
import discordImg from "../assets/images/discord.png";

const Footer: FC = () => {
  return (
    <nav className="footer">
      <ul>
        <li>
          <a href="https://discord.gg/b9J2Dw6Y" target="_blank">
            <img src={discordImg} alt="" className="image" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
