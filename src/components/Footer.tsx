import React, { FC, useEffect, useState } from "react";

const Footer: FC = () => {
  const [discordData, setDiscordData] = useState({
    link: "",
    image: "",
  });

  useEffect(() => {
    const savedDiscordImage = localStorage.getItem("discordImage");

    if (savedDiscordImage) {
      setDiscordData({
        link: discordData.link,
        image: savedDiscordImage,
      });
    }

    fetch("https://dbd-rest-api.eremenko.top/wp-json/get/v1/options")
      .then((response) => response.json())
      .then((data) => {
        const discordLinkImage = data.response.options["discord-link-image"];

        if (discordLinkImage !== savedDiscordImage) {
          localStorage.setItem("discordImage", discordLinkImage);
        }

        setDiscordData({
          link: discordData.link,
          image: discordLinkImage,
        });
      })
      .catch((error) => {
        console.error("Помилка під час запиту до API:", error);
      });
  }, []);

  return (
    <div className="footer">
      <div>
        <ul className="footer-info">
          <li>
            <a href={discordData.link} target="_blank" rel="noreferrer">
              <img src={discordData.image} alt="" className="image" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
