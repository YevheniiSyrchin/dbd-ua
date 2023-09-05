import React, { FC } from "react";
import discordImg from "../assets/images/discord.png";

const Footer: FC = () => {
  return (
    <div className="footer">
      <div>
        <ul className="footer-info">
          <li>
            <a
              href="https://discord.gg/sRzWWDqDBH"
              target="_blank"
              rel="noreferrer"
            >
              <img src={discordImg} alt="" className="image" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
