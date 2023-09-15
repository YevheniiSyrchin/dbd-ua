import React, { FC, useEffect, useState } from "react";
import TwitchStreamEmbed from "./TwitchStreams";

async function fetchApiData(): Promise<string | null> {
  try {
    const response = await fetch(
      "https://dbd-rest-api.eremenko.top/wp-json/get/v1/pages?page-type=main-page"
    );

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();
    return data.response["main-page-data"]["block-text-main"];
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

const Home: FC = () => {
  const [apiData, setApiData] = useState<string | null>(null);

  const loadTextFromLocalStorage = () => {
    const localText = localStorage.getItem("text");
    if (localText) {
      setApiData(localText);
    }
  };

  const fetchDataAndUpdateLocalStorage = async () => {
    try {
      const data = await fetchApiData();
      if (data) {
        const localText = localStorage.getItem("text");
        if (localText !== data) {
          localStorage.setItem("text", data);
          setApiData(data);
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    loadTextFromLocalStorage();
    fetchDataAndUpdateLocalStorage();
  }, []);

  return (
    <main className="home container toCenter">
      <div className="text">
        {apiData && (
          <p
            className="font-Roboto font-white fz-medium"
            dangerouslySetInnerHTML={{ __html: apiData }}
          />
        )}
      </div>
      <div className="streams">
        <TwitchStreamEmbed />
      </div>
    </main>
  );
};

export default Home;
