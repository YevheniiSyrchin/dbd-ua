import React, { FC, useEffect, useState } from "react";

interface DiscordData {
  link: string;
  image: string;
}

const Footer: FC = () => {
  const [discordData, setDiscordData] = useState<DiscordData>({
    link: "",
    image: "",
  });

  const fetchDiscordData = async () => {
    try {
      const savedDiscordImage = localStorage.getItem("discordImage");

      if (savedDiscordImage) {
        setDiscordData((prevData) => ({
          ...prevData,
          image: savedDiscordImage,
        }));
      }

      const response = await fetch(
        "https://dbd-rest-api.eremenko.top/wp-json/get/v1/options"
      );
      const data = await response.json();
      const discordLinkImage = data.response.options["discord-link-image"];

      if (discordLinkImage !== savedDiscordImage) {
        localStorage.setItem("discordImage", discordLinkImage);
      }

      setDiscordData((prevData) => ({
        ...prevData,
        link: discordData.link,
        image: discordLinkImage,
      }));
    } catch (error) {
      console.error("Помилка під час запиту до API:", error);
    }
  };

  useEffect(() => {
    fetchDiscordData();
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
