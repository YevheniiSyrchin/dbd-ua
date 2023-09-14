import React, { useEffect, useState } from "react";

interface FaviconChangerProps {}

const FaviconChanger: React.FC<FaviconChangerProps> = () => {
  const [faviconUrl, setFaviconUrl] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://dbd-rest-api.eremenko.top/wp-json/get/v1/options")
      .then((response) => response.json())
      .then((data) => {
        const faviconUrl = data.response?.options?.["favicon-images"]?.url;

        if (faviconUrl) {
          setFaviconUrl(faviconUrl);
        }
      })
      .catch((error) => {
        console.error("Помилка при отриманні URL favicon з API:", error);
      });
  }, []);

  useEffect(() => {
    const changeFavicon = (url: string) => {
      const link = document.querySelector("link[rel='icon']");
      if (link instanceof HTMLLinkElement) {
        link.href = url;
      } else {
        const newLink = document.createElement("link");
        newLink.rel = "icon";
        newLink.href = url;
        document.head.appendChild(newLink);
      }
    };

    if (faviconUrl) {
      changeFavicon(faviconUrl);
    }
  }, [faviconUrl]);

  return null;
};

export default FaviconChanger;
