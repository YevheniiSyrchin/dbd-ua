import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

interface PageMetadataProps {
  title: string;
}

const PageMetadata: React.FC<PageMetadataProps> = ({ title }) => {
  const [faviconUrl, setFaviconUrl] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://dbd-rest-api.eremenko.top/wp-json/get/v1/options")
      .then((response) => response.json())
      .then((data) => {
        const faviconUrl = data.response?.options?.["favicon-images"]?.url;

        if (faviconUrl) {
          const link = document.querySelector("link[rel='icon']");
          if (link instanceof HTMLLinkElement) {
            link.href = faviconUrl;
          } else {
            const newLink = document.createElement("link");
            newLink.rel = "icon";
            newLink.href = faviconUrl;
            document.head.appendChild(newLink);
          }
          setFaviconUrl(faviconUrl);
        }
      })
      .catch((error) => {
        console.error("Помилка при отриманні URL favicon з API:", error);
      });
  }, []);

  return (
    <Helmet>
      <title>{title}</title>
      {faviconUrl && <link rel="icon" href={faviconUrl} />}
    </Helmet>
  );
};

export default PageMetadata;
