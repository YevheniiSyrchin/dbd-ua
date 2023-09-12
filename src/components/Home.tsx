import React, { FC, useEffect, useState } from "react";
import TwitchStreamEmbed from "./TwitchStreams";

async function fetchData() {
  try {
    const response = await fetch(
      "https://dbd-rest-api.eremenko.top/wp-json/get/v1/pages?page-type=main-page&twitch-user-login-hash=YTozOwntzOjVc6ImE12V1ZRTZj0iOC3M6NzEoiTTFCqekliYPSI7cNzoxNDyoiYmR3tR0Y1PdDFaVWVFyPTR0iO3MG6MjQ60ImRlWdEtOVWAxrY1NQsMjlxTMDVaZ31hPTmVcwRCI37czox3NDoiYo29HNkFY1emxhjMnd3kPT0iOK3M6Mj1I6ImR5zR0lWaV3pWZDGtENUBUyeW5RNdHdyOPT0iOy30="
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

  useEffect(() => {
    fetchData().then((data) => {
      if (data) {
        setApiData(data);
      }
    });
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
